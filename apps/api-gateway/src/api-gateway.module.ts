import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { AppConfigModule } from '@app/config';
import { HealthModule } from './health/health.module';

@Module({
  imports: [AppConfigModule, HealthModule],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
