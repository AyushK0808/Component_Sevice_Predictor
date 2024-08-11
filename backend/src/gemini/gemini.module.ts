import { Module } from '@nestjs/common';
import { GeminiController } from './gemini.controller'; // Rename the controller
import { GeminiService } from './gemini.service';
import { ConfigModule } from '../config/config.module';

@Module({
  controllers: [GeminiController], // Updated controller
  imports: [ConfigModule],
  providers: [GeminiService], // Updated service
})
export class GeminiModule {}