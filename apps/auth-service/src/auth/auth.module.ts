import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { RedisModule } from '@app/redis';  // Your custom Redis module
import { AuthService } from './auth.service';
import { UserService } from '../users/user.service';
import { AuthController } from './auth.controller';
import { User, UserSchema } from '../users/user.schema';
import { UserModule } from '../users/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import { RootController } from './root.controller';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forRoot(process.env.MONGO_URI || ""),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'supersecret',
      signOptions: {expiresIn: '6h'}
    }),
    RedisModule.forRoot({
      host: process.env.REDIS_HOST || 'localhost',
      port: Number(process.env.REDIS_PORT || 6379)
    }),
    PassportModule,
    UserModule
  ],
  controllers: [AuthController, RootController],
  providers: [AuthService, UserService, JwtStrategy],
})
export class AuthModule {}


