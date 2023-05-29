import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { FindFlights } from 'src/dtos/find-flights.dto';
import { AirportRepository } from 'src/repositories/airport-repository';
import { FlightRepository } from 'src/repositories/flight-repository';

@Controller('flights')
export class FlightsController {
  constructor(
    private flightsRepository: FlightRepository,
    private airportRepository: AirportRepository,
  ) {}

  @Get()
  async findMany(@Query() query: FindFlights) {
    const departureAirport = await this.airportRepository.findByCode(
      query.origin,
    );
    const arrivalAirport = await this.airportRepository.findByCode(
      query.destination,
    );

    const outward = await this.flightsRepository.findMany({
      where: {
        // departureDate: query.outwardDate,
        departureAirport: {
          code: query.origin,
        },
        arrivalAirport: {
          code: query.destination,
        },
      },
    });

    if (!outward || outward.length === 0) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    if (!query.outbound) {
      return { outward: { type: 'outward', ...outward } };
    }

    const outbound = await this.flightsRepository.findMany({
      where: {
        // departureDate: query.outboundDate,
        departureAirport: {
          code: query.destination,
        },
        arrivalAirport: {
          code: query.origin,
        },
      },
    });

    if (!outbound || outbound.length === 0) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return {
      origin: departureAirport,
      destination: arrivalAirport,
      routes: [
        { type: 'outward', flights: outward },
        { type: 'outbound', flights: outbound },
      ],
    };
  }
}
