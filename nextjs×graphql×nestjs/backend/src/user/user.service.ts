import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserInput, UpdateUserInput } from 'src/graphql.schema';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable() //Injectable:注入されることができる
export class UserService {
  constructor(private prisma: PrismaService) {}
  /**
   *  idが一致するものを返す
   * @param id
   * @returns
   */
  async findOne(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
  /**
   * 全て返す
   * @returns
   */
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({});
  }

  /**
   * ユーザを作成する
   * @param input
   * @returns
   */
  async create(input: CreateUserInput): Promise<User> {
    return this.prisma.user.create({
      data: input,
    });
  }

  /**
   * itが一致するユーザ情報を更新する
   * @param params
   * @returns
   */
  async update(params: { id: number; input: UpdateUserInput }): Promise<User> {
    const { id, input } = params;

    return this.prisma.user.update({
      where: {
        id,
      },
      data: input,
    });
  }

  /**
   * idが一致するユーザを削除する
   * @param id
   * @returns
   */
  async delete(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
