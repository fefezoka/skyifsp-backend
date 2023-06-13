import { ApiProperty } from '@nestjs/swagger';
import { Airplane } from '../../airplanes/entities/airplane.entity';
import { Airport } from '../../airports/entities/airport.entity';

class PriceItems {
  @ApiProperty()
  message: string;

  @ApiProperty()
  amount: number;
}

class PriceDetails {
  @ApiProperty()
  pricePerAdult: number;

  @ApiProperty()
  pricePerKid: number;

  @ApiProperty()
  total: number;

  @ApiProperty({ isArray: true })
  items: PriceItems;
}

export class FlightLeg {
  @ApiProperty()
  id: string;

  @ApiProperty()
  departureDate: Date;

  @ApiProperty()
  arrivalDate: Date;

  @ApiProperty({ required: false })
  airplane: Airplane;

  @ApiProperty()
  origin: Airport;

  @ApiProperty()
  destination: Airport;
}

export class FlightLegWithPrice extends FlightLeg {
  @ApiProperty()
  priceDetails?: PriceDetails;
}
