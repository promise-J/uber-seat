import { Module } from '@nestjs/common';
import { AppController } from './auth.controller';
import { AuthService } from './auth.service';
import { AppConfigModule } from '@app/config';
import { UserModule } from '../users/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from '../users/user.service';
import { JwtModule } from '@nestjs/jwt';
import { User, UserSchema } from '../users/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/uber-clone'),
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {expiresIn: "6h"}
    }),
    AppConfigModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AuthService, UserService],
})
export class AppModule {}
