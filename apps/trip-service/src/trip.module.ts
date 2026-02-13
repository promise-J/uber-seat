import { Module } from '@nestjs/common';
import { TripController } from './trip.controller';
import { TripService } from './trip.service';
import { MatchingService } from './matching.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Trip, TripSchema } from './schemas/trip.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Trip.name, schema: TripSchema}
    ])
  ],
  controllers: [TripController],
  providers: [TripService, MatchingService],
})
export class TripServiceModule {}
