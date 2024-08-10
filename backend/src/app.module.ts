import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from './config/config.module';
import { PdfController } from './pdf/pdf.controller';
import { PdfService } from './pdf/pdf.service';
import { MachineModule } from './machine/machine.module';
import { MachinesService } from './machineservice/machineservice.service';
import { MachinesController } from './machineservice/machineservice.controller';
import { GeminiService } from './gemini/gemini.service';
import { GeminiController } from './gemini/gemini.controller';
import { GeminiModule } from './gemini/gemini.module';

@Module({
  imports: [AuthModule, PrismaModule, ConfigModule, MachineModule,GeminiModule],
  controllers: [PdfController, MachinesController, GeminiController],
  providers: [PdfService,MachinesService, GeminiService],
})
export class AppModule {}
