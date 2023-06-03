import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';

export class SearchFlightsDto {
  @ApiProperty({
    description: 'Código do aeroporto de origem',
    example: 'CGH',
  })
  @IsNotEmpty()
  origin: string;

  @ApiProperty({
    description: 'Código do aeroporto de destino',
    example: 'GIG',
  })
  @IsNotEmpty()
  destination?: string;

  @ApiProperty({ description: 'Data de ida', example: '2023-06-13' })
  @IsNotEmpty()
  outward: string;

  @ApiProperty({
    description: 'Data de retorno - Opcional',
    example: '2023-06-29',
    required: false,
  })
  @IsOptional()
  outbound?: string;

  @ApiProperty({
    description: 'Número de passageiros adultos',
  })
  adults: number;

  @ApiProperty({
    description: 'Número de passageiros adolescentes ou crianças',
  })
  @IsOptional()
  kids?: number;
}
