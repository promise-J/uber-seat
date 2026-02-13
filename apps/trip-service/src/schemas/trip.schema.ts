import { Prop, Schema } from '@nestjs/mongoose';

export type TripDocument = Trip & Document;

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
}
