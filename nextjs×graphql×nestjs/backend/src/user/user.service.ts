import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateUserInput, UpdateUserInput, User } from 'src/graphql.schema';
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
  async findOne(id: number): Promise<User | null> {
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
  async create(input: CreateUserInput): Promise<User> {
    const user = await this.prisma.user.create({
      data: input,
    });
    return this.convertUserWithBeerPosts(user);
  }

  /**
   * itが一致するユーザ情報を更新する
   * @param params
   * @returns
   */
  async update(params: { id: number; input: UpdateUserInput }): Promise<User> {
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
   * idが一致するユーザを削除する
   * @param id
   * @returns
   */
  async delete(id: number): Promise<User> {
    const user = this.prisma.user.delete({
      where: {
        id,
      },
    });
    return this.convertUserWithBeerPosts(user);
  }

  /**
   * データベースのUserをレスポンスのUserに変換する。
   * @param user
   * @returns
   */
  async convertUserWithBeerPosts(user: any): Promise<User> {
    const beerPosts = await this.posts.findAllByUserId(user.id);
    const userWithBeerPosts: User = { ...user, beerPosts: beerPosts };
    console.log('convertUserWithBeerPosts', userWithBeerPosts);
    return userWithBeerPosts;
  }
}
