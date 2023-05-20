import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';

/**
 * ゾルバで認証が必要なエンドポイントを保護
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  // アクティブかの確認？？
  canActivate(context: ExecutionContext): boolean {
    // GraphQLのforRootで「context: ({ req }) => ({ req }),」の定義が必要
    const gqlContext = GqlExecutionContext.create(context);
    const req = gqlContext.getContext().req;

    // authorizationヘッダーからJWTトークンを取得する
    const authToken = req.headers.authorization;

    try {
      const payload = this.jwtService.verify(authToken);
      return payload.user == 'DBUSER';
    } catch (error) {
      return false;
    }
  }
}
