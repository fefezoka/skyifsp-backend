import { Airport } from './entities/airport.entity';

export abstract class AirportsRepository {
  abstract calculateDistanceInKm(
    outwardLatitude: number,
    outwardLongitude: number,
    outboundLatitude: number,
    outboundLongitude: number,
  ): number;
  abstract findMany(): Promise<Airport[]>;
  abstract findByCode(code: string): Promise<Airport>;
}
