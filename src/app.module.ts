import { Module } from '@nestjs/common';
import { AirplanesModule } from './modules/airplanes/airplanes.module';
import { FlightsModule } from './modules/flights/flights.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { AirportsModule } from './modules/airports/airports.module';

@Module({
  imports: [
    AirplanesModule,
    FlightsModule,
    AirportsModule,
    PrismaModule,
    UsersModule,
    AuthModule,
  ],
  providers: [
    AuthService,
    JwtService,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
})
export class AppModule {}
