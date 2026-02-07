import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err: any, user: any, info: any) {
    // Passport calls this method after attempting authentication
    // 'err' is the error (if any), 'user' is the authenticated user, 'info' is additional info
    if (err || !user) {
      // Customize the message for invalid/expired tokens or other auth failures
      throw new UnauthorizedException('Invalid or expired token');
    }
    return user;  // Return the user if authentication succeeds
  }
}