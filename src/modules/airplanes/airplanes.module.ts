import { Module } from '@nestjs/common';
import { AirplanesService } from './airplanes.service';
import { AirplanesController } from './airplanes.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { AirplanesRepository } from './airplanes-repository';

@Module({
  imports: [PrismaModule],
  controllers: [AirplanesController],
  providers: [
    AirplanesService,
    { provide: AirplanesRepository, useClass: AirplanesService },
  ],
  exports: [AirplanesService],
})
export class AirplanesModule {}
