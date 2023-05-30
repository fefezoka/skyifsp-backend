import { Module } from '@nestjs/common';
import { AirplaneController } from './controllers/airplane.controller';
import { FlightsController } from './controllers/flights.controller';
import { AirportController } from './controllers/airport.controller';
import { PrismaService } from './database/prisma.service';
import { FlightRepository } from './repositories/flight-repository';
import { FlightService } from './modules/flight/flight.service';
import { AirplaneModule } from './modules/airplane/airplane.module';
import { FlightModule } from './modules/flight/flight.module';
import { AirportRepository } from './repositories/airport-repository';
import { AirportService } from './modules/airport/airport.service';
import { AirplaneRepository } from './repositories/airplane-repository';
import { AirplaneService } from './modules/airplane/airplane.service';

@Module({
  controllers: [FlightsController, AirportController, AirplaneController],
  providers: [
    PrismaService,
    { provide: FlightRepository, useClass: FlightService },
    { provide: AirplaneRepository, useClass: AirplaneService },
    { provide: AirportRepository, useClass: AirportService },
  ],
  imports: [AirplaneModule, FlightModule],
})
export class AppModule {}
