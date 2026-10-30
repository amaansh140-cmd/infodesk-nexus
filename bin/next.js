#!/usr/bin/env node
import { spawnSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const command = args[0] || 'build';

console.log(`[Hostinger compatibility] executing next ${command}...`);

if (command === 'build') {
  const res = spawnSync('npm', ['run', 'build'], {
    cwd: rootDir,
    stdio: 'inherit',
    env: process.env,
    shell: true,
  });
  process.exit(res.status ?? 0);
} else if (command === 'start') {
  const res = spawnSync('node', ['server.js'], {
    cwd: rootDir,
    stdio: 'inherit',
    env: process.env,
    shell: true,
  });
  process.exit(res.status ?? 0);
} else {
  const res = spawnSync('npm', ['run', 'dev'], {
    cwd: rootDir,
    stdio: 'inherit',
    env: process.env,
    shell: true,
  });
  process.exit(res.status ?? 0);
}
