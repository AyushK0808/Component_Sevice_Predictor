import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
 
  getDatabaseUrl(): string | undefined 
  {
    return process.env.DATABASE_URL;
  }
}
