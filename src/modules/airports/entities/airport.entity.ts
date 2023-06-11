import { ApiProperty } from '@nestjs/swagger';

export class Airport {
  @ApiProperty()
  id: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  countryCode: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  airport: string;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;
}
