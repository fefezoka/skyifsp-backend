import { Airplane } from '@prisma/client';

export abstract class AirplanesRepository {
  abstract findMany(): Promise<Airplane[]>;
}
