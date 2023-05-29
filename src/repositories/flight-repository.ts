import { Flight, Prisma } from '@prisma/client';

export abstract class FlightRepository {
  abstract findMany(params: {
    where?: Prisma.FlightWhereInput;
  }): Promise<Flight[]>;
}
