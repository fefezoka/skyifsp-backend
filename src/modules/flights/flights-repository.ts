import { FlightLeg } from './entities/flight-leg.entity';
import { Flight } from './entities/flight.entity';

export abstract class FlightsRepository {
  abstract findMany(): Promise<FlightLeg[]>;
  abstract search(
    outwardDate: string,
    origin: string,
    destination: string,
  ): Promise<Flight[]>;
}
