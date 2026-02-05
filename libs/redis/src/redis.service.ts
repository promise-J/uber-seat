import { Injectable, OnModuleInit } from '@nestjs/common';
import Redis from 'ioredis'

@Injectable()
export class RedisService implements OnModuleInit {
    private client: Redis

    onModuleInit() {
        this.client = new Redis({
            host: process.env.REDIS_HOST,
            port: Number(process.env.REDIS_PORT)
        })
    }

    getClient(){
        return this.client
    }
}
