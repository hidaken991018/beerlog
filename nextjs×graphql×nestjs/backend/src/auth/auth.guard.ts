import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

/**
 * ゾルバで認証が必要なエンドポイントを保護
 */
@Injectable()
export class AuthGuard implements CanActivate {
  // アクティブかの確認？？
  canActivate(context: ExecutionContext): boolean {
    const gqlContext = GqlExecutionContext.create(context).getContext();
    return !!gqlContext.user;
  }
}
