import { Module } from '@nestjs/common';
import { AirportService } from './airport.service';
import { PrismaService } from '../../database/prisma.service';

@Module({
  imports: [],
  providers: [AirportService, PrismaService],
})
export class FlightsModule {}
