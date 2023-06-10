import { Flight } from '@prisma/client';

export abstract class FlightsRepository {
  abstract findMany(): Promise<Flight[]>;
  abstract search(
    outwardDate: string,
    origin: string,
    destination: string,
  ): Promise<Flight[]>;
}
