import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Determine static build directory (check dist, then .next)
let staticDir = path.join(__dirname, 'dist');
if (!fs.existsSync(staticDir) && fs.existsSync(path.join(__dirname, '.next'))) {
  staticDir = path.join(__dirname, '.next');
}

if (fs.existsSync(staticDir)) {
  app.use(express.static(staticDir, {
    maxAge: '1d',
    etag: true,
  }));
}

// Fallback to index.html for all client-side routes (SPA routing)
app.use((req, res) => {
  const indexPath = path.join(staticDir, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head><title>Infodesk Computer Education</title></head>
        <body style="font-family: sans-serif; text-align: center; padding: 50px;">
          <h1>Infodesk Computer Education</h1>
          <p>Application is initializing. Please refresh in a few moments.</p>
        </body>
      </html>
    `);
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Infodesk production server listening on http://0.0.0.0:${PORT}`);
});
