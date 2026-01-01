import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { config } from 'process';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    })
  ]
})
export class AppConfigModule {}
