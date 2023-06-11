import { ApiProperty } from '@nestjs/swagger';

export class Airplane {
  @ApiProperty()
  id: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  seats: number;

  @ApiProperty()
  plane: string;
}
