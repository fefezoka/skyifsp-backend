import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { SearchFlightsDto } from '../dtos/search-flights.dto';
import { AirportsRepository } from '../repositories/airports-repository';
import { FlightsRepository } from '../repositories/flights-repository';
import { calculateFlightPrice } from '../common/helpers/calculate-flight-price';

@Controller('flights')
export class FlightsController {
  constructor(
    private flightsRepository: FlightsRepository,
    private airportsRepository: AirportsRepository,
  ) {}

  @Get()
  async findMany() {
    return await this.flightsRepository.findMany();
  }

  @Get('search')
  async search(@Query() query: SearchFlightsDto) {
    const origin = await this.airportsRepository.findByCode(query.origin);
    const destination = await this.airportsRepository.findByCode(
      query.destination,
    );

    const distanceInKm = this.airportsRepository.calculateDistanceInKm(
      origin.latitude,
      origin.longitude,
      destination.latitude,
      destination.longitude,
    );

    const outwardFlights = await this.flightsRepository.search(
      query.outward,
      query.origin,
      query.destination,
    );

    if (!outwardFlights || outwardFlights.length === 0) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    const outbound =
      query.outbound &&
      (await this.flightsRepository.search(
        query.outbound,
        query.destination,
        query.origin,
      ));

    if (query.outbound && (!outbound || outbound.length === 0)) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return {
      origin,
      destination,
      routes: [
        {
          type: 'outward',
          flights: outwardFlights,
        },
        ...(outbound ? [{ type: 'outbound', flights: outbound }] : []),
      ].map((route) => {
        return {
          ...route,
          flights: route.flights.map((flight) => {
            return {
              ...flight,
              price: calculateFlightPrice({
                distanceInKm,
                outward: flight.departureDate,
              }),
            };
          }),
        };
      }),
    };
  }
}
