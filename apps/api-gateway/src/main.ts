import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { HttpExceptionFilter } from 'libs/common/filter/http-exception.filter';
import { LoggingInterceptor } from 'libs/common/interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalInterceptors(new LoggingInterceptor())
  const port = process.env.PORT ?? 3000
  await app.listen(port, '0.0.0.0');
}
bootstrap();
