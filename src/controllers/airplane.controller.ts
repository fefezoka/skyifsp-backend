import { Controller, Get } from '@nestjs/common';
import { AirplaneRepository } from '../repositories/airplane-repository';

@Controller('airplane')
export class AirplaneController {
  constructor(private airplaneRepository: AirplaneRepository) {}

  @Get()
  async findMany() {
    return await this.airplaneRepository.findMany();
  }
}
