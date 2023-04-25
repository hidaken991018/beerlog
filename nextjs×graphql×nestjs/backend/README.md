### Prisma GraphQL schema first sample

This sample project uses sqlite as the relational database. To use a different database, check the [Prisma docs](https://www.prisma.io/docs/getting-started).

### Installation

1. Install dependencies: `npm install`
2. Generate TypeScript type definitions for the GraphQL schema: `npm run generate:typings`
3. Create sqlite database and create tables: `npx prisma db push`
4. Start server: `npm run start:dev`

### Graphql Playground

When the application is running, you can go to [http://localhost:3000/graphql](http://localhost:3000/graphql) to access the GraphQL Playground.  See [here](https://docs.nestjs.com/graphql/quick-start#playground) for more.

### 参考資料(肥田)
1. NestJS の基礎概念の図解と要約：https://zenn.dev/morinokami/articles/nestjs-overview#controllers
2. GraphQLにおけるSubscription処理：https://qiita.com/yoshii0110/items/3d9ec03215537646b65c#graphql%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8Bsubscription%E5%87%A6%E7%90%86
3. GraphQLにおけるSubscription(スライド):https://www.slideshare.net/fukuis/graphqlsubscription

### TODO
1. NestJSの理解
  - 
2. GraphQLの理解
  - Subscription:変化情報を受け取る仕組み
  - Live Queries:
3. Prismaの理解
  - 