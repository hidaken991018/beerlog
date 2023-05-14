import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginUserInput, UpdateUserInput, User } from 'src/graphql.schema';
import { UserService } from 'src/user/user.service';

@Resolver('User') //GraphQL操作をデータに変換するための指示
export class UsersResolvers {
  constructor(private readonly userService: UserService) {}

  @Query('users') // GraphQL スキーマ クエリ タイプ名を生成
  async users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query('user') // GraphQL スキーマ クエリ タイプ名を生成
  async user(@Args('id') args: string): Promise<User> {
    return this.userService.findOne(args);
  }
  @Mutation('updateUser')
  async update(
    @Args('params') params: { id: string; input: UpdateUserInput }
  ): Promise<User> {
    return this.userService.update(params);
  }

  @Mutation('deleteUser')
  async delete(@Args('id') id: string): Promise<User> {
    return this.userService.delete(id);
  }

  @Mutation('loginUser')
  async create(@Args('input') args: LoginUserInput): Promise<User> {
    return this.userService.login(args);
  }
}
