import { Injectable } from '@nestjs/common';
import { ConflictException } from '@nestjs/common/exceptions';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersRepository } from './users-repository';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    const alreadyExist = await this.prisma.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (!!alreadyExist) {
      throw new ConflictException('Email not available');
    }

    const data: Prisma.UserCreateInput = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    await this.prisma.user.create({ data });
  }

  async findMany(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async findById(id: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id } });
  }
}
