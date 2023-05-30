import { Module } from '@nestjs/common';
import { AirplaneService } from './airplane.service';
import { PrismaService } from '../../database/prisma.service';

@Module({
  imports: [],
  providers: [AirplaneService, PrismaService],
})
export class AirplaneModule {}
