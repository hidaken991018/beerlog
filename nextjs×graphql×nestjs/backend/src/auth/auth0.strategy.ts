import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-auth0';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class Auth0Strategy extends PassportStrategy(Strategy, 'auth0') {
  constructor(
    private authService: AuthService,
    private readonly config: ConfigService
  ) {
    super({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: process.env.AUTH0_CALLBACK_URL,
      scope: 'openid profile email',
    });
  }

  /**
   * 検証する
   * @param accessToken アクセストークン
   * @param refreshToken　リフレッシュトークン
   * @param profile　プロフィール
   * @param done ??
   * @returns
   */
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any
  ) {
    const jwt = await this.authService.generateToken(profile);
    return done(null, { jwt });
  }
}
