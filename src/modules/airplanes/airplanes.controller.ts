import { Controller, Get } from '@nestjs/common';
import { AirplanesRepository } from './airplanes-repository';
import { ApiResponse } from '@nestjs/swagger';
import { Airplane } from './entities/airplane.entity';

@Controller('airplanes')
export class AirplanesController {
  constructor(private airplanesRepository: AirplanesRepository) {}

  @Get()
  @ApiResponse({ type: Airplane, isArray: true })
  async findMany() {
    return await this.airplanesRepository.findMany();
  }
}
