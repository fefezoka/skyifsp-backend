import { Airport } from '@prisma/client';

export abstract class AirportRepository {
  abstract findMany(): Promise<Airport[]>;
  abstract findByCode(plane: string): Promise<Airport>;
}
