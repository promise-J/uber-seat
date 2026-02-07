import { DynamicModule, Global, Module } from '@nestjs/common';
import { RedisService } from './redis.service';

export interface RedisModuleOptions {
  host?: string;
  port?: number;
  password?: string
}

@Global()
@Module({
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {
  static forRoot(options: RedisModuleOptions = {}): DynamicModule {
    return {
      module: RedisModule,
      providers: [
        {
          provide: 'REDIS_OPTIONS',
          useValue: {
            host: options.host || 'localhost',
            port: options.port || 6379,
            password: options.password || undefined,
          },
        },
        RedisService,
      ],
      exports: [RedisService],
    };
  }
}
