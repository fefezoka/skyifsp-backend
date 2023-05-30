import { Flight, Prisma } from '@prisma/client';

export abstract class FlightRepository {
  abstract findMany(): Promise<Flight[]>;
  abstract search(params: {
    where?: Prisma.FlightWhereInput;
  }): Promise<Flight[]>;
}
