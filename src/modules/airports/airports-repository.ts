import { Airport } from '@prisma/client';

export abstract class AirportsRepository {
  abstract calculateDistanceInKm(
    outwardLatitude: number,
    outwardLongitude: number,
    outboundLatitude: number,
    outboundLongitude: number,
  ): number;
  abstract findMany(): Promise<Airport[]>;
  abstract findByCode(plane: string): Promise<Airport>;
}
