import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { AirportRepository } from '../../repositories/airport-repository';

@Injectable()
export class AirportService implements AirportRepository {
  constructor(private prisma: PrismaService) {}

  calculateTax(
    outboundLatitude: number,
    outboundLongitude: number,
    outwardLatitude: number,
    outwardLongitude: number,
  ) {
    const R = 6371e3; // metres
    const φ1 = (outboundLatitude * Math.PI) / 180; // φ, λ in radians
    const φ2 = (outwardLatitude * Math.PI) / 180;
    const Δφ = ((outwardLatitude - outboundLatitude) * Math.PI) / 180;
    const Δλ = ((outwardLongitude - outboundLongitude) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // in metres
    return Math.floor(d / 1000) * 0.5;
  }

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
