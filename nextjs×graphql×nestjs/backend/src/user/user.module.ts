import { Module, forwardRef } from '@nestjs/common';
import { PostsModule } from 'src/posts/posts.module';
import { PostsService } from 'src/posts/posts.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersResolvers } from 'src/user/user.resolver';
import { UserService } from 'src/user/user.service';

@Module({
  providers: [UserService, UsersResolvers, PostsService],
  imports: [PrismaModule, forwardRef(() => PostsModule)],
})
export class UserModule {}
