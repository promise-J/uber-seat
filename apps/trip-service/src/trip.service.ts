import { RedisPubSub } from '@app/redis/redis.pubsub';
import { MatchingService } from './matching.service';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { TripRepository } from './repositories/trip.repository';
import { RedisService } from '@app/redis';

@Injectable()
export class TripService {
  constructor(
    @Inject('TripRepository')
    private readonly repo: TripRepository,
    private readonly matcher: MatchingService,
    private readonly pubsub: RedisPubSub,
    private readonly redis: RedisService,
  ) {}


  async requestRide(authId: string, dto: any) {
    const driverId = await this.matcher.findDriver();

    if (!driverId) {
      throw new BadRequestException('No drivers available');
    }

    // 👇 Remove driver from pool
    await this.matcher.markBusy(driverId);

    const trip = await this.repo.create({
      riderId: authId,
      driverId,
      pickup: dto.pickup,
      destination: dto.destination,
      status: 'matched',
      fare: this.calculateFare(dto),
    });

    await this.pubsub.publish('trip.matched', {
      tripId: trip.id,
      driverId,
    });

    return trip;
  }

  start(tripId: string) {
    return this.repo.updateStatus(tripId, 'started');
  }

  async complete(tripId: string) {
    const trip = await this.repo.updateStatus(tripId, 'completed');

    // Return driver to pool
    const client = this.redis.getClient();
    await client.sadd('drivers:online', trip?.driverId ?? "");

    return trip;
  }

  private calculateFare(dto: any): number {
    const baseFare = 500; // ₦500 base
    const perKm = 120; // ₦120 per km

    const distanceKm = dto.distanceKm ?? 5;
    return baseFare + distanceKm * perKm;
  }
}
