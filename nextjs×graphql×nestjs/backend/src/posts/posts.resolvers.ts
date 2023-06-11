import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import {
  BeerPost,
  CreateBeerPostInput,
  UpdateBeerPostInput,
} from 'src/graphql.schema';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

// https://qiita.com/yoshii0110/items/3d9ec03215537646b65c#graphql%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8Bsubscription%E5%87%A6%E7%90%86
// const pubSub = new PubSub();
/**
 * GraphQLのためのファイル
 * GraphQL : REST
 * query : GET
 * mutation :  POST/PUT/PATCH/DELETE
 * subscription : -
 */
@Resolver('beerPost') //GraphQL操作をデータに変換するための指示
export class PostsResolvers {
  constructor(private readonly postService: PostsService) {}

  @Query('beerPosts') // GraphQL スキーマ クエリ タイプ名を生成
  async posts(@Context('req') req: any): Promise<BeerPost[]> {
    return this.postService.findAll();
  }

  @Query('beerPost') // schema.graphqlに記載のもの
  async post(@Args('id') args: number): Promise<BeerPost> {
    return this.postService.findOne(args);
  }

  @Query('beerPostsById') // schema.graphqlに記載のもの
  async postsById(@Args('id') args: string): Promise<BeerPost[]> {
    return this.postService.findAllByUserId(args);
  }

  @Mutation('createBeerPost')
  // @UseGuards(AuthGuard)
  async create(
    @Args('input') args: CreateBeerPostInput,
    @Context() context: any
  ): Promise<BeerPost> {
    return this.postService.create(args);
  }

  @Mutation('updateBeerPost')
  async update(
    @Args('input') params: { id: number; input: UpdateBeerPostInput }
  ): Promise<BeerPost> {
    return this.postService.update(params);
  }

  @Mutation('deleteBeerPost')
  async delete(@Args('id') id: number): Promise<BeerPost> {
    return this.postService.delete(id);
  }

  // @Subscription('postCreated') // 変化情報を受け取る
  // postCreated() {
  //   return pubSub.asyncIterator('postCreated');
  // }
}
