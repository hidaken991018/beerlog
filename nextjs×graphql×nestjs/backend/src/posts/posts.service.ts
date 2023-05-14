import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  BeerPost,
  CreateBeerPostInput,
  UpdateBeerPostInput,
} from 'src/graphql.schema';
import { UserService } from 'src/user/user.service';

@Injectable() //Injectable:注入されることができる
export class PostsService {
  constructor(
    private prisma: PrismaService,
    @Inject(forwardRef(() => UserService))
    private user: UserService
  ) {}

  /**
   * 以下、サービスが提供するビジネスロジックを定義
   */

  /**
   *  idが一致するものを返す
   * @param id
   * @returns
   */
  async findOne(id: number): Promise<BeerPost | null> {
    const beerPost = await this.prisma.beerPost.findUnique({
      where: {
        id,
      },
    });

    return await this.adaptUser(beerPost);
  }

  /**
   *  UserIdが一致するものを返す
   * @param id
   * @returns
   */
  async findAllByUserId(userId: string): Promise<BeerPost[] | null> {
    const beerPosts = await this.prisma.beerPost.findMany({
      where: { userId },
    });
    const beerPostWithUser: BeerPost[] = await Promise.all(
      beerPosts.map(async (beerPost) => {
        return await this.adaptUser(beerPost);
      })
    );
    return beerPostWithUser;
  }

  /**
   * 全て返す
   * @returns
   */
  async findAll(): Promise<BeerPost[]> {
    const beerPosts = await this.prisma.beerPost.findMany({});
    const beerPostWithUser: BeerPost[] = await Promise.all(
      beerPosts.map(async (beerPost) => {
        return await this.adaptUser(beerPost);
      })
    );

    return beerPostWithUser;
  }

  /**
   * 投稿を作成する
   * @param input
   * @returns
   */
  async create(input: CreateBeerPostInput): Promise<BeerPost> {
    const beerPost = await this.prisma.beerPost.create({
      data: input,
    });
    return await this.adaptUser(beerPost);
  }

  /**
   * itが一致する投稿を更新する
   * @param params
   * @returns
   */
  async update(params: {
    id: number;
    input: UpdateBeerPostInput;
  }): Promise<BeerPost> {
    const { id, input } = params;
    const beerPost = await this.prisma.beerPost.update({
      where: {
        id,
      },
      data: input,
    });
    return await this.adaptUser(beerPost);
  }

  /**
   * idが一致する投稿を削除する
   * @param id
   * @returns
   */
  async delete(id: number): Promise<BeerPost> {
    const beerPost = await this.prisma.beerPost.delete({
      where: {
        id,
      },
    });
    return await this.adaptUser(beerPost);
  }

  /**
   * データベースのBeerPostをレスポンスのBeerPostに変換する。
   * @param user
   * @returns
   */
  private async adaptUser(beerPost: any): Promise<BeerPost> {
    const user = await this.prisma.user.findUnique({
      where: { id: beerPost.userId },
    });

    const beerPostWithUser: BeerPost = { ...beerPost, user: user };
    return beerPostWithUser;
  }
}
