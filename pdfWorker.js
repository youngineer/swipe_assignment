import { pdfjs } from 'react-pdf';

// Set up the PDF.js worker URL
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export default pdfjs;
