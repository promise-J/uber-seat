import {
  Injectable,
} from '@nestjs/common';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  create(user: Partial<User>) {
    return this.userModel.create(user);
  }
}
