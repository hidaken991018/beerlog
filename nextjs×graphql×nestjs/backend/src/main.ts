import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**アプリケーションのエントリーファイル */
async function bootstrap() {
  //INestApplicationインタフェースを満たすアプリケーションオブジェクトを返す。
  const app = await NestFactory.create(AppModule);
  // class-validator：modelクラスのプロパティにアノテーションでバリデーションルールを記載し、1つのメソッドでバリデーションチェックしてくれるライブラリ
  // パイプ:ハンドラーがリクエストを受け取る前にリクエストに対して処理を行います
  // 参考:https://qiita.com/mana-vv/items/463a0e859e71a37ee3e4
  app.useGlobalPipes(new ValidationPipe());

  // 使用ポート
  app.enableCors();
  await app.listen(3020);
  // console.log(`Application is running on: ${await app.getUrl()}`);
  // console.log(`GraphQL Playground: ${await app.getUrl()}/graphql`);
}
bootstrap();
