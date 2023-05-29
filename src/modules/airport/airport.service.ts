import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AirportRepository } from 'src/repositories/airport-repository';

@Injectable()
export class AirportService implements AirportRepository {
  constructor(private prisma: PrismaService) {}

  async findMany() {
    return await this.prisma.airport.findMany();
  }

  async findByCode(code: string) {
    return await this.prisma.airport.findUnique({
      where: {
        code,
      },
    });
  }
}
