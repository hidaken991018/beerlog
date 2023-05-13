import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PostsModule } from './posts/posts.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
/**アプリケーションのルートモジュール */
@Module({
  imports: [
    PostsModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      context: async ({ req }) => {
        // 認証
        const authService = new AuthService(new JwtService());
        // ヘッダーの情報取得
        const jwt = req.headers.authorization?.split(' ')[1];
        //ユーザーの情報が返却される?
        const user = jwt ? await authService.validateToken(jwt) : null;
        return { user };
      },
    }),
  ],
})
export class AppModule {}
