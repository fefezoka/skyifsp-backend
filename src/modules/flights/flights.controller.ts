import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { SearchFlightsDto } from './dtos/search-flights.dto';
import { AirportsRepository } from '../airports/airports-repository';
import { FlightsRepository } from './flights-repository';
import { calculateFlightPrice } from '../../common/helpers/calculate-flight-price';

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

    const outboundFlights =
      query.outbound &&
      (await this.flightsRepository.search(
        query.outbound,
        query.destination,
        query.origin,
      ));

    if (query.outbound && (!outboundFlights || outboundFlights.length === 0)) {
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
        ...(outboundFlights
          ? [{ type: 'outbound', flights: outboundFlights }]
          : []),
      ].map((route) => {
        return {
          ...route,
          flights: route.flights.map((flight) => {
            const priceDetails = calculateFlightPrice({
              distanceInKm,
              outward: flight.departureDate,
              adults: query.adults,
              kids: query.kids,
            });

            return {
              ...flight,
              priceDetails,
            };
          }),
        };
      }),
    };
  }
}
