import { Airplane } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { AirplaneRepository } from '../../repositories/airplane-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AirplaneService implements AirplaneRepository {
  constructor(private prisma: PrismaService) {}

  async findMany(): Promise<Airplane[]> {
    return await this.prisma.airplane.findMany();
  }
}
