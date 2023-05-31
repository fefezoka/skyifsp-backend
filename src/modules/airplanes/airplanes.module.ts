import { Module } from '@nestjs/common';
import { AirplanesService } from './airplanes.service';
import { PrismaService } from '../../database/prisma.service';

@Module({
  imports: [],
  providers: [AirplanesService, PrismaService],
})
export class AirplanesModule {}
