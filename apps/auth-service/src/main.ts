import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from 'libs/common/filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(new GlobalExceptionFilter())

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
