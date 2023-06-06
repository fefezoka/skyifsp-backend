import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { FlightsRepository } from '../../repositories/flights-repository';

@Injectable()
export class FlightsService implements FlightsRepository {
  constructor(private prisma: PrismaService) {}

  async findMany() {
    return await this.prisma.flightLeg.findMany({
      include: {
        destination: true,
        origin: true,
      },
    });
  }

  async search(outwardDate: string, origin: string, destination: string) {
    const flights = await this.prisma.flight.findMany({
      where: {
        departureDate: {
          gte: new Date(outwardDate + 'T00:00:00'),
          lte: new Date(outwardDate + 'T23:59:59'),
        },
        flightLegs: {
          some: {
            OR: [
              {
                origin: {
                  code: origin,
                },
              },
              {
                destination: {
                  code: destination,
                },
              },
            ],
          },
        },
      },
      orderBy: {
        departureDate: 'asc',
      },
      include: {
        flightLegs: {
          include: { airplane: true, origin: true, destination: true },
        },
      },
    });

    return flights.filter(
      (flight) =>
        flight.flightLegs[0].origin.code === origin &&
        flight.flightLegs[flight.flightLegs.length - 1].destination.code ===
          destination,
    );
  }
}
