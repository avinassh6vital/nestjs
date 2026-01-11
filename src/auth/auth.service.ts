import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signIn(username: string, pass: string): Promise<any> {
    if (username !== 'admin' || pass !== 'password') {
      throw new UnauthorizedException('Invalid credentials');
    }
    return { access_token: await this.jwtService.signAsync({ username }) };
  }
}
