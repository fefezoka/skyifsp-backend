import { Airplane } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { AirplanesRepository } from './airplanes-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AirplanesService implements AirplanesRepository {
  constructor(private prisma: PrismaService) {}

  async findMany(): Promise<Airplane[]> {
    return await this.prisma.airplane.findMany();
  }
}
