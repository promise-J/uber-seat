import { Module } from '@nestjs/common';
import { RiderController } from './rider-service.controller';
import { RiderService } from './rider-service.service';

@Module({
  imports: [],
  controllers: [RiderController],
  providers: [RiderService],
})
export class RiderModule {}
