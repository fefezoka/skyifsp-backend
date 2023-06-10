import { Module } from '@nestjs/common';
import { AirportsService } from './airports.service';
import { AirportsController } from './airports.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { AirportsRepository } from './airports-repository';

@Module({
  imports: [PrismaModule],
  controllers: [AirportsController],
  providers: [
    AirportsService,
    { provide: AirportsRepository, useClass: AirportsService },
  ],
  exports: [AirportsService],
})
export class AirportsModule {}
