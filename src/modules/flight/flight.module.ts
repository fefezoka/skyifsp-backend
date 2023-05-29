import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  imports: [],
  providers: [FlightService, PrismaService],
})
export class FlightModule {}
