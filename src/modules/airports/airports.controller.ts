import { Controller, Get, Param } from '@nestjs/common';
import { AirportsRepository } from './airports-repository';
import { FindByCodeDto } from './dtos/find-by-code.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Airport } from './entities/airport.entity';

@Controller('airports')
export class AirportsController {
  constructor(private airportsRepository: AirportsRepository) {}

  @Get()
  @ApiResponse({ type: Airport, isArray: true })
  async findMany() {
    return await this.airportsRepository.findMany();
  }

  @Get(':code')
  @ApiResponse({ type: Airport })
  async findByCode(@Param() params: FindByCodeDto) {
    return await this.airportsRepository.findByCode(params.code);
  }
}
