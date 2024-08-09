import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get('generate')
  generatePdf(@Res() res: Response) {
    const data = { title: 'Test PDF', content: 'This is a test PDF document.' };
    return this.pdfService.generatePdf(data, res);
  }
}
