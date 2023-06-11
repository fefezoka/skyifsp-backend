import { ApiProperty } from '@nestjs/swagger';

export class FindByCodeDto {
  @ApiProperty({ example: 'GIG' })
  code: string;
}
