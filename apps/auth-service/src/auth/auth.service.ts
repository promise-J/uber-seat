import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RedisService } from '@app/redis';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private redisService: RedisService,
  ) {}

  async register(email: string, password: string) {
    try {
      const hashed = await bcrypt.hash(password, 10);
      const redis = this.redisService.getClient()

      await redis.flushall()

      const userExists = await this.userService.findByEmail(email)

      if(userExists){
        throw new ConflictException('User already exists')
      }
  
      const user = await this.userService.create({ email, password: hashed });
  
      return this.generateTokens(user._id.toString(), user.email, user.role);
      
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  async login(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    return this.generateTokens(user._id.toString(), user.email, user.role);
  }

  private async generateTokens(id: string, email: string, role: string) {
    const payload = { sub: id, email, role };

    const accessToken = this.jwtService.sign(payload, { expiresIn: '30m' });

    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    const redis = this.redisService.getClient();

    await redis.set(`refresh:${id}`, refreshToken, 'EX', 60 * 60 * 24 * 7);


    return {
      accessToken,
      refreshToken,
    };
  }

  async logout(userId: string) {
    const redis = this.redisService.getClient();
    redis.del(`refresh:${userId}`);
  }
}
