import { Body, Controller, Post, Get, Headers } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('me')
  async me(@Headers('Authorization') auth: string) {
    const jwt = this.jwtService.decode(auth.split(' ')[1]) as User;
    const user = await this.userService.findByEmail(jwt.email);

    return {
      name: user.name,
    };
  }
}
