import { NestFactory } from '@nestjs/core';
import { AppModule } from './auth/app.module';
import { GlobalExceptionFilter } from 'libs/common/filter/http-exception.filter';
import { LoggingInterceptor } from 'libs/common/interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor());

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
