import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Rider } from "../schemas/rider.schema";
import { Model } from "mongoose";

export interface RiderRepositoryI {
    create(data: any): Promise<any>;
    findByAuthId(authId: string): Promise<any>;
  }

  
@Injectable()
export class RiderRepository implements RiderRepositoryI {
  constructor(
    @InjectModel(Rider.name)
    private model: Model<Rider>,
  ) {}

  create(data: any) {
    return this.model.create(data);
  }

  findByAuthId(authId: string) {
    return this.model.findOne({ authId });
  }
}
