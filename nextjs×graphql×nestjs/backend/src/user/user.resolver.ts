import { Inject, forwardRef } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput, UpdateUserInput, User } from 'src/graphql.schema';
import { PostsModule } from 'src/posts/posts.module';
import { PostsResolvers } from 'src/posts/posts.resolvers';
import { UserService } from 'src/user/user.service';

@Resolver('User') //GraphQL操作をデータに変換するための指示
export class UsersResolvers {
  constructor(private readonly userService: UserService) {}

  @Query('users') // GraphQL スキーマ クエリ タイプ名を生成
  async users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query('user') // GraphQL スキーマ クエリ タイプ名を生成
  async user(@Args('id') args: number): Promise<User> {
    return this.userService.findOne(args);
  }

  @Mutation('createUser')
  async create(@Args('input') args: CreateUserInput): Promise<User> {
    return this.userService.create(args);
  }

  @Mutation('updateUser')
  async update(
    @Args('params') params: { id: number; input: UpdateUserInput }
  ): Promise<User> {
    return this.userService.update(params);
  }

  @Mutation('deleteUser')
  async delete(@Args('id') id: number): Promise<User> {
    return this.userService.delete(id);
  }
}
