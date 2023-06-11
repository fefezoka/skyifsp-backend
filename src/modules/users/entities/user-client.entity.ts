import { ApiProperty } from '@nestjs/swagger';

export class UserClient {
  @ApiProperty()
  name: string;
}
