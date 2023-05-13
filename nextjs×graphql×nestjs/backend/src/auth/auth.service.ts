import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  /**
   * トークンを生成する
   * @param payload リクエストボディ
   * @returns
   */
  async generateToken(payload: any) {
    return this.jwtService.sign(payload);
  }

  /**
   * トークンの検証
   * @param jwt
   * @returns
   */
  async validateToken(jwt: string) {
    try {
      return this.jwtService.verify(jwt);
    } catch (error) {
      return null;
    }
  }
}
