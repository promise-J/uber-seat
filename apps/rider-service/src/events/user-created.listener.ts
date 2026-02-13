import { RedisPubSub } from "@app/redis/redis.pubsub";
import { Injectable } from "@nestjs/common";
import { RiderService } from "../rider-service.service";

@Injectable()
export class UserCreatedListener {
  constructor(private riderService: RiderService) {
    new RedisPubSub().subscribe(
      'user.created',
      this.handle.bind(this),
    );
  }

  async handle(data: any) {
    await this.riderService.createProfile(data.id, {});
  }
}
