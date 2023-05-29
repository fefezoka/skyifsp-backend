import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { FlightRepository } from '../../repositories/flight-repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class FlightService implements FlightRepository {
  constructor(private prisma: PrismaService) {}

  async findMany(params: { where?: Prisma.FlightWhereInput }) {
    const { where } = params;
    return await this.prisma.flight.findMany({
      where,
      include: {
        airplane: true,
      },
    });
  }
}
