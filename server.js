import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Safety exception handlers to keep process alive in production
process.on('uncaughtException', (err) => {
  console.error('[Infodesk Server] Uncaught exception:', err);
});
process.on('unhandledRejection', (reason) => {
  console.error('[Infodesk Server] Unhandled rejection:', reason);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Determine static build directory (check dist, then .next, then current directory)
let staticDir = path.join(__dirname, 'dist');
if (!fs.existsSync(staticDir) && fs.existsSync(path.join(__dirname, '.next'))) {
  staticDir = path.join(__dirname, '.next');
}
if (!fs.existsSync(staticDir) && fs.existsSync(path.join(__dirname, 'index.html'))) {
  staticDir = __dirname;
}

// Health check endpoint for host orchestrators & load balancers
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', uptime: process.uptime() });
});

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

// Robust port & socket listener for Hostinger / Phusion Passenger / CloudLinux / LiteSpeed
const rawPort = process.env.PORT || 3000;
const isNamedPipeOrSocket =
  typeof rawPort === 'string' &&
  (isNaN(Number(rawPort)) || rawPort.startsWith('/') || rawPort.startsWith('\\\\.\\pipe'));

if (isNamedPipeOrSocket) {
  // Listen on named pipe or Unix socket (do NOT pass host string)
  app.listen(rawPort, () => {
    console.log(`Infodesk production server listening on socket: ${rawPort}`);
  });
} else {
  const numericPort = Number(rawPort);
  app.listen(numericPort, '0.0.0.0', () => {
    console.log(`Infodesk production server listening on http://0.0.0.0:${numericPort}`);
  });
}
