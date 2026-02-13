import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TripDocument = HydratedDocument<Trip>;

export type TripStatus =
  | 'requested'
  | 'matched'
  | 'started'
  | 'completed'
  | 'cancelled';

@Schema({ timestamps: true })
export class Trip extends Document {
  @Prop()
  riderId: string;

  @Prop()
  driverId: string;

  @Prop()
  pickup: string;

  @Prop()
  destination: string;

  @Prop({ default: 'requested' })
  status: TripStatus;

  @Prop()
  fare: number;

  createdAt: Date;
  updatedAt: Date;
}


export const TripSchema = SchemaFactory.createForClass(Trip);