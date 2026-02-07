import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import Redis from 'ioredis'

@Injectable()
export class RedisService implements OnModuleInit {
    private client: Redis

    constructor(@Inject("REDIS_OPTIONS") private readonly options: {
        host?: string;
        port?: number;
        password?: string;
    }){}

    onModuleInit() {
        this.client = new Redis({
            host: this.options.host,
            port: this.options.port,
            password: this.options.password
        })

        this.client.on('connect', () => {
            console.log(
              `✅ Redis connected at ${this.options.host}:${this.options.port}`,
            );
          });
      
          this.client.on('error', (err) => {
            console.error('❌ Redis connection error', err);
          });
    }

    getClient(){
        return this.client
    }
}
