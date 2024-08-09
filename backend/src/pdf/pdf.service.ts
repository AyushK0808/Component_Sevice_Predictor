import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import { Response } from 'express';

@Injectable()
export class PdfService {
  generatePdf(data: any, res: Response) {
    const doc = new PDFDocument();
    
    res.setHeader('Content-Disposition', 'attachment; filename=output.pdf');
    res.setHeader('Content-Type', 'application/pdf');

    doc.pipe(res);

    doc.fontSize(25).text('Custom PDF Document', { align: 'center' });

    doc.text('Here is some content in the PDF...');
    doc.text(`Data: ${JSON.stringify(data)}`);

    doc.end();
  }
}
