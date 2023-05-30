import { Airplane } from '@prisma/client';

export abstract class AirplaneRepository {
  abstract findMany(): Promise<Airplane[]>;
}
