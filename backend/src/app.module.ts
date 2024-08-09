import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from './config/config.module';
import { PdfController } from './pdf/pdf.controller';
import { PdfService } from './pdf/pdf.service';
import { MachineModule } from './machine/machine.module';
import { MachinesService } from './machineservice/machineservice.service';
import { MachinesController } from './machineservice/machineservice.controller';

@Module({
  imports: [AuthModule, PrismaModule, ConfigModule, MachineModule],
  controllers: [PdfController, MachinesController],
  providers: [PdfService,MachinesService],
})
export class AppModule {}
