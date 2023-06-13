import { ApiProperty } from '@nestjs/swagger';
import { FlightLegWithPrice } from './flight-leg.entity';

export class Flight {
  @ApiProperty()
  id: string;

  @ApiProperty()
  departureDate: Date;

  @ApiProperty()
  arrivalDate: Date;

  @ApiProperty({ isArray: true })
  flightLegs: FlightLegWithPrice[];
}
