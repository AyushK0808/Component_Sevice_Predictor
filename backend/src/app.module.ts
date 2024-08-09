import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [AuthModule, PrismaModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
