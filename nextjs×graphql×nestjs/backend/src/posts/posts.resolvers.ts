import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import {
  BeerPost,
  CreateBeerPostInput,
  UpdateBeerPostInput,
} from 'src/graphql.schema';
import { PubSub } from 'graphql-subscriptions';
import { UserService } from 'src/user/user.service';

// https://qiita.com/yoshii0110/items/3d9ec03215537646b65c#graphql%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8Bsubscription%E5%87%A6%E7%90%86
const pubSub = new PubSub();
/**
 * GraphQLのためのファイル
 * GraphQL : REST
 * query : GET
 * mutation :  POST/PUT/PATCH/DELETE
 * subscription : -
 */
@Resolver('Post') //GraphQL操作をデータに変換するための指示
export class PostsResolvers {
  constructor(
    private readonly postService: PostsService,
    private readonly userService: UserService
  ) {}

  @Query('beerPosts') // GraphQL スキーマ クエリ タイプ名を生成
  async posts(): Promise<BeerPost[]> {
    const beerPost = await this.postService.findAll();
    const beerUserPost: BeerPost[] = [];
    beerPost.forEach(async (post) => {
      const user = await this.userService.findOne(post.userId);
      delete post.userId;
      beerUserPost.push({
        ...post,
        user: user,
      });
    });

    return beerUserPost;
  }

  @Query('beerPost') // schema.graphqlに記載のもの
  async post(@Args('id') args: number): Promise<BeerPost> {
    const beerPost = await this.postService.findOne(args);
    const user = await this.userService.findOne(beerPost.userId);
    delete beerPost.userId;
    return { ...beerPost, user: user };
  }

  @Mutation('createBeerPost')
  async create(@Args('input') args: CreateBeerPostInput): Promise<BeerPost> {
    const createdPost = await this.postService.create(args);
    const user = await this.userService.findOne(createdPost.userId);
    delete createdPost.userId;
    // 変化情報の登録
    pubSub.publish('postCreated', { postCreated: createdPost });
    return { ...createdPost, user: user };
  }

  @Mutation('updateBeerPost')
  async update(
    @Args('input') params: { id: number; input: UpdateBeerPostInput }
  ): Promise<BeerPost> {
    const updatePost = await this.postService.update(params);
    const user = await this.userService.findOne(updatePost.userId);
    delete updatePost.userId;
    return { ...updatePost, user: user };
  }

  @Mutation('deleteBeerPost')
  async delete(@Args('id') id: number): Promise<BeerPost> {
    const deletePost = await this.postService.delete(id);
    const user = await this.userService.findOne(deletePost.userId);
    delete deletePost.userId;
    return { ...deletePost, user: user };
  }

  // @Subscription('postCreated') // 変化情報を受け取る
  // postCreated() {
  //   return pubSub.asyncIterator('postCreated');
  // }
}
