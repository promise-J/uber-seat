import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { GlobalExceptionFilter } from 'libs/common/filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  app.useGlobalFilters(new GlobalExceptionFilter())
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
