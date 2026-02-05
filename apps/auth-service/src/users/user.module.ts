import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./user.schema";

console.log('UsersModule loaded*****************');

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: User.name, schema: UserSchema}
        ])
    ],
    providers: [UserService],
    exports: [UserService]
})

export class UserModule {}