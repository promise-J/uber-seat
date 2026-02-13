import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DriverDocument = Driver & Document;

export type DriverStatus = 'offline' | 'online' | 'busy';

@Schema({ timestamps: true })
export class Driver extends Document {
  @Prop({ required: true, unique: true })
  authId: string;

  @Prop()
  fullName: string;

  @Prop()
  phone: string;

  @Prop()
  vehicle: {
    brand: string;
    plate: string;
    color: string;
  };

  @Prop({ default: false })
  verified: boolean;

  @Prop({ default: 'offline' })
  status: DriverStatus;

  @Prop({ default: 0 })
  earnings: number;
}

export const DriverSchema = SchemaFactory.createForClass(Driver);
