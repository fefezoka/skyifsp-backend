import { Airplane } from './entities/airplane.entity';

export abstract class AirplanesRepository {
  abstract findMany(): Promise<Airplane[]>;
}
