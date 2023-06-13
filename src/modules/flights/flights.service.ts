import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { FlightsRepository } from './flights-repository';
import { addDays } from 'date-fns';

@Injectable()
export class FlightsService implements FlightsRepository {
  constructor(private prisma: PrismaService) {}

  async findMany() {
    return await this.prisma.flightLeg.findMany({
      include: {
        destination: true,
        origin: true,
        airplane: true,
      },
    });
  }

  async search(outwardDate: string, origin: string, destination: string) {
    const flights = await this.prisma.flight.findMany({
      where: {
        flightLegs: {
          some: {
            AND: [
              {
                origin: {
                  code: origin,
                },
              },
              {
                departureDate: {
                  gte: new Date(outwardDate + 'T03:00:00'),
                  lte: addDays(new Date(outwardDate + 'T02:59:59'), 1),
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

    return flights
      .map((flight) => {
        const originIndex = flight.flightLegs.findIndex(
          (leg) => leg.origin.code === origin,
        );

        const destinationIndex = flight.flightLegs.findIndex(
          (leg) => leg.destination.code === destination,
        );

        if (originIndex >= 0 && destinationIndex >= 0) {
          const filteredFlightLegs = flight.flightLegs.slice(
            originIndex,
            destinationIndex + 1,
          );

          return {
            ...flight,
            flightLegs: filteredFlightLegs,
            arrivalDate: flight.flightLegs[destinationIndex].arrivalDate,
            departureDate: flight.flightLegs[originIndex].departureDate,
          };
        }
      })
      .filter(Boolean);
  }
}
