import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { SearchFlightsDto } from '../dtos/search-flights.dto';
import { AirportRepository } from '../repositories/airport-repository';
import { FlightRepository } from '../repositories/flight-repository';

@Controller('flights')
export class FlightsController {
  constructor(
    private flightsRepository: FlightRepository,
    private airportRepository: AirportRepository,
  ) {}

  @Get()
  async findMany() {
    return await this.flightsRepository.findMany();
  }

  @Get('search')
  async search(@Query() query: SearchFlightsDto) {
    const origin = await this.airportRepository.findByCode(query.origin);
    const destination = await this.airportRepository.findByCode(
      query.destination,
    );

    const distanceTax = await this.airportRepository.calculateTax(
      destination.latitude,
      destination.longitude,
      origin.latitude,
      origin.longitude,
    );

    const minimumPrice = 300;

    const dateIntervalInDays =
      (new Date().getTime() - new Date(query.outward).getTime()) / 864000000;

    const dateAlg = 300 - dateIntervalInDays * 5;
    const dateTax = dateAlg > 0 ? dateAlg : 0;

    const price = minimumPrice + distanceTax + dateTax;

    console.log({ dateTax, distanceTax });

    const outward = await this.flightsRepository.search({
      where: {
        departureDate: {
          gte: new Date(query.outward + 'T00:00:00'),
          lte: new Date(query.outward + 'T23:59:59'),
        },
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
      return {
        origin,
        destination,
        routes: [{ type: 'outward', flights: outward }],
      };
    }

    const outbound = await this.flightsRepository.search({
      where: {
        departureDate: {
          gte: new Date(query.outbound + 'T00:00:00'),
          lte: new Date(query.outbound + 'T23:59:59'),
        },
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
      origin,
      destination,
      routes: [
        { type: 'outward', flights: outward },
        { type: 'outbound', flights: outbound },
      ],
    };
  }
}
