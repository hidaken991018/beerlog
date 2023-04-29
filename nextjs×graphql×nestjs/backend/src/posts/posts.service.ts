import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BeerPost } from '@prisma/client';
import { CreateBeerPostInput, UpdateBeerPostInput } from 'src/graphql.schema';

@Injectable() //Injectable:注入されることができる
export class PostsService {
  constructor(private prisma: PrismaService) {}

  /**
   * 以下、サービスが提供するビジネスロジックを定義
   */

  /**
   *  idが一致するものを返す
   * @param id
   * @returns
   */
  async findOne(id: number): Promise<BeerPost | null> {
    return this.prisma.beerPost.findUnique({
      where: {
        id,
      },
    });
  }

  /**
   * 全て返す
   * @returns
   */
  async findAll(): Promise<BeerPost[]> {
    return this.prisma.beerPost.findMany({});
  }

  /**
   * 投稿を作成する
   * @param input
   * @returns
   */
  async create(input: CreateBeerPostInput): Promise<BeerPost> {
    return this.prisma.beerPost.create({
      data: input,
    });
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

    return this.prisma.beerPost.update({
      where: {
        id,
      },
      data: input,
    });
  }

  /**
   * idが一致する投稿を削除する
   * @param id
   * @returns
   */
  async delete(id: number): Promise<BeerPost> {
    return this.prisma.beerPost.delete({
      where: {
        id,
      },
    });
  }
}
