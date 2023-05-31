import { Module } from '@nestjs/common';
import { AirplanesController } from './controllers/airplanes.controller';
import { FlightsController } from './controllers/flights.controller';
import { AirportsController } from './controllers/airports.controller';
import { PrismaService } from './database/prisma.service';
import { FlightsRepository } from './repositories/flights-repository';
import { FlightsService } from './modules/flights/flights.service';
import { AirplanesModule } from './modules/airplanes/airplanes.module';
import { FlightsModule } from './modules/flights/flights.module';
import { AirportsRepository } from './repositories/airports-repository';
import { AirportsService } from './modules/airports/airports.service';
import { AirplanesRepository } from './repositories/airplanes-repository';
import { AirplanesService } from './modules/airplanes/airplanes.service';

@Module({
  controllers: [FlightsController, AirportsController, AirplanesController],
  providers: [
    PrismaService,
    { provide: FlightsRepository, useClass: FlightsService },
    { provide: AirplanesRepository, useClass: AirplanesService },
    { provide: AirportsRepository, useClass: AirportsService },
  ],
  imports: [AirplanesModule, FlightsModule],
})
export class AppModule {}
