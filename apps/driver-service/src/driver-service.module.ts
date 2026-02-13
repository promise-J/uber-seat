import { Module } from '@nestjs/common';
import { DriverController } from './driver-service.controller';
import { DriverService } from './driver-service.service';

@Module({
  imports: [],
  controllers: [DriverController],
  providers: [DriverService],
})
export class DriverServiceModule {}
