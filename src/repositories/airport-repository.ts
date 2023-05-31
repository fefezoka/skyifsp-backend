import { Airport } from '@prisma/client';

export abstract class AirportRepository {
  abstract calculateTax(
    outboundLatitude: number,
    outboundLongitude: number,
    outwardLatitude: number,
    outwardLongitude: number,
  ): number;
  abstract findMany(): Promise<Airport[]>;
  abstract findByCode(plane: string): Promise<Airport>;
}
