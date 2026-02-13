import { Trip, TripDocument, TripStatus } from '../schemas/trip.schema';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export interface TripEntity {
  id: string; // 👈 normalized
  riderId: string;
  driverId: string;
  pickup: string;
  destination: string;
  status: TripStatus;
  fare: number;
  createdAt: Date;
  updatedAt: Date;
}

type CreateTripDTO = Omit<TripEntity, 'id' | 'createdAt' | 'updatedAt'>;

interface TripRepositoryI {
  create(data: Partial<TripEntity>): Promise<TripEntity>;

  findById(id: string): Promise<TripEntity | null>;

  updateStatus(id: string, status: TripStatus): Promise<Trip | null>;

  findByRider(riderId: string): Promise<Trip[]>;

  findByDriver(driverId: string): Promise<Trip[]>;
}

@Injectable()
export class TripRepository implements TripRepositoryI {
  constructor(
    @InjectModel(Trip.name)
    private readonly model: Model<Trip>,
  ) {}

  async create(data: CreateTripDTO): Promise<TripEntity> {
    const doc = await this.model.create(data);

    return this.toDomain(doc);
  }

  findById(id: string): Promise<TripEntity | null> {
    return this.model.findById(id);
  }

  updateStatus(id: string, status: TripStatus) {
    return this.model.findByIdAndUpdate(id, { status }, { new: true });
  }

  findByRider(riderId: string): Promise<Trip[]> {
    return this.model.find({ riderId });
  }

  findByDriver(driverId: string): Promise<Trip[]> {
    return this.model.find({ driverId });
  }

  private toDomain(doc: TripDocument): TripEntity {
    const obj = doc.toObject();
  
    return {
      id: obj._id.toString(),
  
      riderId: obj.riderId,
      driverId: obj.driverId,
      pickup: obj.pickup,
      destination: obj.destination,
  
      status: obj.status,
      fare: obj.fare,
  
      createdAt: obj.createdAt,
      updatedAt: obj.updatedAt,
    };
  }
}
