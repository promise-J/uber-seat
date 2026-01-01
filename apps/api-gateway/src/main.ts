import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { GlobalExceptionFilter } from 'libs/common/filter/http-exception.filter';
import { LoggingInterceptor } from 'libs/common/interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  app.useGlobalFilters(new GlobalExceptionFilter())
  app.useGlobalInterceptors(new LoggingInterceptor())
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
