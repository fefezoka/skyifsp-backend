import { Module } from '@nestjs/common';
import { AirportsService } from './airports.service';
import { PrismaService } from '../../database/prisma.service';

@Module({
  imports: [],
  providers: [AirportsService, PrismaService],
})
export class AirportsModule {}
