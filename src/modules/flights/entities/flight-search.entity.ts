import { ApiProperty } from '@nestjs/swagger';
import { Airport } from '../../airports/entities/airport.entity';
import { FlightLeg } from './flight-leg.entity';

export class FlightRoute {
  @ApiProperty()
  type: string;

  @ApiProperty({ isArray: true })
  flights: FlightLeg;
}

export class FlightSearch {
  @ApiProperty()
  origin: Airport;

  @ApiProperty()
  destination: Airport;

  @ApiProperty({ isArray: true })
  routes: FlightRoute;
}
