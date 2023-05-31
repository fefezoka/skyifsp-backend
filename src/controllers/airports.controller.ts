import { Controller, Get, Param } from '@nestjs/common';
import { AirportsRepository } from '../repositories/airports-repository';

@Controller('airports')
export class AirportsController {
  constructor(private airportsRepository: AirportsRepository) {}

  @Get()
  async findMany() {
    return await this.airportsRepository.findMany();
  }

  @Get(':code')
  async findByCode(@Param('code') code: string) {
    return await this.airportsRepository.findByCode(code);
  }
}
