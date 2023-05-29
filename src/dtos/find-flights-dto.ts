import { IsNotEmpty, IsOptional } from 'class-validator';

export class FindFlights {
  @IsNotEmpty()
  outward: Date;

  @IsNotEmpty()
  origin: string;

  @IsNotEmpty()
  destination?: string;

  @IsOptional()
  outbound?: Date;
}
