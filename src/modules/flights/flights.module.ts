import { Module } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { PrismaService } from '../../database/prisma.service';

@Module({
  imports: [],
  providers: [FlightsService, PrismaService],
})
export class FlightsModule {}
