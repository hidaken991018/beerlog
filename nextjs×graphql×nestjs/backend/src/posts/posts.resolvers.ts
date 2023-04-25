import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post, NewPost, UpdatePost } from 'src/graphql.schema';
import { PubSub } from 'graphql-subscriptions';

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
  constructor(private readonly postService: PostsService) {}

  @Query('posts') // GraphQL スキーマ クエリ タイプ名を生成
  async posts(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Query('post') // schema.graphqlに記載のもの
  async post(@Args('id') args: string): Promise<Post> {
    return this.postService.findOne(args);
  }

  @Mutation('createPost')
  async create(@Args('input') args: NewPost): Promise<Post> {
    const createdPost = await this.postService.create(args);
    // 変化情報の登録
    pubSub.publish('postCreated', { postCreated: createdPost });
    return createdPost;
  }

  @Mutation('updatePost')
  async update(@Args('input') args: UpdatePost): Promise<Post> {
    return this.postService.update(args);
  }

  @Mutation('deletePost')
  async delete(@Args('id') args: string): Promise<Post> {
    return this.postService.delete(args);
  }

  @Subscription('postCreated') // 変化情報を受け取る
  postCreated() {
    return pubSub.asyncIterator('postCreated');
  }
}
