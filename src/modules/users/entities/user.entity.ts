import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  birthdate: Date;

  @ApiProperty()
  password: string;

  @ApiProperty()
  createdAt: Date;
}