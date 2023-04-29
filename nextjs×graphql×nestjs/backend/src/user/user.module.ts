import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from 'src/user/user.service';

@Module({
  providers: [UserService],
  imports: [PrismaModule],
})
export class UserModule {}
