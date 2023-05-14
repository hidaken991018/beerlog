import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import {
  CreateUserInput,
  LoginUserInput,
  UpdateUserInput,
  User,
} from 'src/graphql.schema';
import { PostsService } from 'src/posts/posts.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable() //Injectable:注入されることができる
export class UserService {
  constructor(
    private prisma: PrismaService,
    @Inject(forwardRef(() => PostsService))
    private posts: PostsService
  ) {}
  /**
   *  idが一致するものを返す
   * @param id
   * @returns
   */
  async findOne(id: string): Promise<User | null> {
    console.log('user-findOne');
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    console.log('user-findOne', user);
    return this.convertUserWithBeerPosts(user);
  }
  /**
   * 全て返す
   * @returns
   */
  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({});
    const usersWithBeerPosts = Promise.all(
      users.map(async (user) => {
        return this.convertUserWithBeerPosts(user);
      })
    );

    return usersWithBeerPosts;
  }

  /**
   * ユーザを作成する
   * @param input
   * @returns
   */
  async create(input: LoginUserInput): Promise<User> {
    const user = await this.prisma.user.create({
      data: input,
    });
    // .catch((e) => {
    //   throw new GraphQLError('orm_error', {
    //     extensions: { code: `USER${e.code}` },
    //   });
    // });
    return this.convertUserWithBeerPosts(user);
  }

  /**
   * idが一致するユーザ情報を更新する
   * @param params
   * @returns
   */
  async update(params: { id: string; input: UpdateUserInput }): Promise<User> {
    const { id, input } = params;
    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data: input,
    });

    return this.convertUserWithBeerPosts(user);
  }

  /**
   * emailが一致するユーザ情報を検索する
   * @param params
   * @returns
   */
  async seachByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return this.convertUserWithBeerPosts(user);
  }

  /**
   * idが一致するユーザを削除する
   * @param id
   * @returns
   */
  async delete(id: string): Promise<User> {
    const user = this.prisma.user.delete({
      where: {
        id,
      },
    });
    return this.convertUserWithBeerPosts(user);
  }

  async login(loginInput: LoginUserInput): Promise<User> {
    const loginUser = this.seachByEmail(loginInput.email);

    if (loginUser !== null) return loginUser;
    const createUser = await this.create(loginInput);
    return createUser;
  }

  /**
   * データベースのUserをレスポンスのUserに変換する。
   * @param user
   * @returns
   */
  private async convertUserWithBeerPosts(user: any): Promise<User> {
    console.log('convertUserWithBeerPosts', user);
    const beerPosts = await this.prisma.beerPost.findMany({
      where: { userId: user.id },
    });

    const userWithBeerPosts: User = { ...user, beerPosts: beerPosts };
    return userWithBeerPosts;
  }
}
