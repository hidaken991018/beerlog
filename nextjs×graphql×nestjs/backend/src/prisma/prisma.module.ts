import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService], // Serviceの登録
  exports: [PrismaService], // エクスポートする Provider の登録
})
export class PrismaModule {}
