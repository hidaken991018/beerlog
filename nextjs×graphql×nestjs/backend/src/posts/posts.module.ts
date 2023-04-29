import { Module } from '@nestjs/common';
import { PostsResolvers } from './posts.resolvers';
import { PostsService } from './posts.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UserService } from 'src/user/user.service';

/**
 * デコレータで注釈がつけられたクラス
 */
@Module({
  providers: [PostsResolvers, PostsService, UserService], //serviseの登録
  imports: [PrismaModule], //インポートする provider の登録
})
export class PostsModule {}
