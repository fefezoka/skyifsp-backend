import { Controller, Get } from '@nestjs/common';
import { AirplanesRepository } from './airplanes-repository';

@Controller('airplanes')
export class AirplanesController {
  constructor(private airplanesRepository: AirplanesRepository) {}

  @Get()
  async findMany() {
    return await this.airplanesRepository.findMany();
  }
}
