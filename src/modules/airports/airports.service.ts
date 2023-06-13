import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AirportsRepository } from './airports-repository';
import { Airport } from './entities/airport.entity';

@Injectable()
export class AirportsService implements AirportsRepository {
  constructor(private prisma: PrismaService) {}

  calculateDistanceInKm(
    outwardLatitude: number,
    outwardLongitude: number,
    outboundLatitude: number,
    outboundLongitude: number,
  ): number {
    const R = 6371e3; // metres
    const φ1 = (outboundLatitude * Math.PI) / 180; // φ, λ in radians
    const φ2 = (outwardLatitude * Math.PI) / 180;
    const Δφ = ((outwardLatitude - outboundLatitude) * Math.PI) / 180;
    const Δλ = ((outwardLongitude - outboundLongitude) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.ceil((R * c) / 1000); // in kilometers
  }

  async findMany(): Promise<Airport[]> {
    return await this.prisma.airport.findMany();
  }

  async findByCode(code: string): Promise<Airport> {
    return await this.prisma.airport.findUnique({
      where: {
        code,
      },
    });
  }
}
