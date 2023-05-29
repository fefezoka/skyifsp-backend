import { Controller, Get, Param } from '@nestjs/common';
import { AirportRepository } from '../repositories/airport-repository';

@Controller('airport')
export class AirportController {
  constructor(private airportRepository: AirportRepository) {}

  @Get()
  async findMany() {
    return await this.airportRepository.findMany();
  }

  @Get(':code')
  async findByCode(@Param('code') code: string) {
    return await this.airportRepository.findByCode(code);
  }
}
