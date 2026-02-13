import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, UpdateWriteOpResult } from "mongoose";
import { Driver } from "../schemas/driver.schema";

export interface DriverRepositoryI {
    create(data: any): Promise<any>;
    findByAuthId(authId: string): Promise<any>;
    findAvailable(): Promise<any[]>;
    updateStatus(authId: string, status: string): Promise<UpdateWriteOpResult>;
  }

  
  @Injectable()
  export class DriverRepository implements DriverRepositoryI {
    constructor(
      @InjectModel(Driver.name)
      private model: Model<Driver>,
    ) {}
  
    create(data: any) {
      return this.model.create(data);
    }
  
    findByAuthId(authId: string) {
      return this.model.findOne({ authId });
    }
  
    findAvailable() {
      return this.model.find({
        status: 'online',
        verified: true,
      });
    }
  
    updateStatus(authId: string, status: string) {
      return this.model.updateOne(
        { authId },
        { status },
      );
    }
  }
  