import { Module, forwardRef } from '@nestjs/common';
import { PostsResolvers } from './posts.resolvers';
import { PostsService } from './posts.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';

/**
 * デコレータで注釈がつけられたクラス
 */
@Module({
  providers: [PostsResolvers, PostsService, UserService], //serviseの登録
  imports: [PrismaModule, forwardRef(() => UserModule)], //インポートする provider の登録
})
export class PostsModule {}
