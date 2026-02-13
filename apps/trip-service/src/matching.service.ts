import { RedisService } from "@app/redis";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MatchingService {
  constructor(private redis: RedisService) {}

  async findDriver(): Promise<string | null> {
    const client = this.redis.getClient();

    return client.spop('available-drivers');
  }

  async markBusy(driverId: string) {
    const client = this.redis.getClient();

    await client.srem('drivers:online', driverId); 
  }
}
