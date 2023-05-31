import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { FlightsRepository } from '../../repositories/flights-repository';

@Injectable()
export class FlightsService implements FlightsRepository {
  constructor(private prisma: PrismaService) {}

  async findMany() {
    return await this.prisma.flight.findMany({
      include: {
        destination: true,
        origin: true,
      },
    });
  }

  async search(outwardDate: string, origin: string, destination: string) {
    return await this.prisma.flight.findMany({
      where: {
        departureDate: {
          gte: new Date(outwardDate + 'T00:00:00'),
          lte: new Date(outwardDate + 'T23:59:59'),
        },
        origin: {
          code: origin,
        },
        destination: {
          code: destination,
        },
      },
      include: {
        airplane: true,
      },
    });
  }
}
