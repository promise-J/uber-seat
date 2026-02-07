import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { HttpExceptionFilter } from 'libs/common/filter/http-exception.filter';
import { LoggingInterceptor } from 'libs/common/interceptors/logging.interceptor';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet'

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  app.use(helmet())
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // strips unknown fields
      forbidNonWhitelisted: true, // throws if extra fields are sent
      transform: true,            // auto-transform DTOs
    }),
  );

  app.enableCors({
    origin: "*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  })

  await app.listen(process.env.PORT ?? 3001);
  console.log('Auth service running on http://localhost:3001');
}
bootstrap();
