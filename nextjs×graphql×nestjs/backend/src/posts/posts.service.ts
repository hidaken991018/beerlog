import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { NewPost, UpdatePost } from 'src/graphql.schema';
import { PrismaService } from '../prisma/prisma.service';

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
  async findOne(id: string): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: {
        id,
      },
    });
  }

  /**
   * 全て返す
   * @returns 
   */
  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany({});
  }

  /**
   * 投稿を作成する
   * @param input 
   * @returns 
   */
  async create(input: NewPost): Promise<Post> {
    return this.prisma.post.create({
      data: input,
    });
  }

  /**
   * itが一致する投稿を更新する
   * @param params 
   * @returns 
   */
  async update(params: UpdatePost): Promise<Post> {
    const { id, ...params_without_id } = params;

    return this.prisma.post.update({
      where: {
        id,
      },
      data: {
        ...params_without_id,
      },
    });
  }

  /**
   * idが一致する投稿を削除する
   * @param id 
   * @returns 
   */
  async delete(id: string): Promise<Post> {
    return this.prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
