import { Body, Controller, Post, Get, Request } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { UserPayload } from '../auth/models/UserPayload';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { UserClient } from './entities/user-client.entity';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  @Get()
  @ApiResponse({ type: User, isArray: true })
  findMany() {
    return this.userService.findMany();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('me')
  @ApiBearerAuth()
  @ApiResponse({ type: UserClient })
  async me(@Request() req) {
    const jwt = req.headers.authorization;
    const jwtStrategy = new JwtStrategy();
    const userPayload = await jwtStrategy.validate(
      this.jwtService.decode(jwt.split(' ')[1]) as UserPayload,
    );
    const user = await this.userService.findById(userPayload.id);

    return {
      name: user.name,
    };
  }
}
