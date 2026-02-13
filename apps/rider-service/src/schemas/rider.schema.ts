import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type RiderDocument = Rider & Document;

@Schema({timestamps: true})
export class Rider extends Document {
    @Prop({required: true, unique: true})
    authId: string;

    @Prop()
    fullName: string;

    @Prop()
    phoneNumber: string;

    @Prop({default: 5})
    rating: string;
}

export const RiderSchema = SchemaFactory.createForClass(Rider)