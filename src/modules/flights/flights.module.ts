import { Module } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { FlightsController } from './flights.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { FlightsRepository } from './flights-repository';
import { AirportsService } from '../airports/airports.service';
import { AirportsRepository } from '../airports/airports-repository';

@Module({
  imports: [PrismaModule],
  controllers: [FlightsController],
  providers: [
    FlightsService,
    { provide: FlightsRepository, useClass: FlightsService },
    { provide: AirportsRepository, useClass: AirportsService },
  ],
  exports: [FlightsService],
})
export class FlightsModule {}
