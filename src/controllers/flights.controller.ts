import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { FindFlights } from '../dtos/find-flights.dto';
import { AirportRepository } from '../repositories/airport-repository';
import { FlightRepository } from '../repositories/flight-repository';

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
        origin: {
          code: query.origin,
        },
        destination: {
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
        origin: {
          code: query.destination,
        },
        destination: {
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
