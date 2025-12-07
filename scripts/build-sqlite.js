import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const sqlitePath = join(projectRoot, 'node_modules/.pnpm/better-sqlite3@12.5.0/node_modules/better-sqlite3');

console.log('Building better-sqlite3 native bindings...');
console.log('Path:', sqlitePath);

if (!existsSync(sqlitePath)) {
  console.error('✗ better-sqlite3 not found at expected path');
  console.log('Please run: pnpm install');
  process.exit(1);
}

// Use npm to run the build script directly
const buildProcess = spawn('npm', ['run', 'build-release'], {
  cwd: sqlitePath,
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, npm_config_build_from_source: 'true' }
});

buildProcess.on('close', (code) => {
  if (code === 0) {
    console.log('✓ Native bindings built successfully!');
  } else {
    console.error(`✗ Build failed with code ${code}`);
    console.log('\nTry running manually:');
    console.log(`  cd "${sqlitePath}"`);
    console.log('  npm run build-release');
    process.exit(code);
  }
});

buildProcess.on('error', (error) => {
  console.error('✗ Failed to start build process:', error.message);
  console.log('\nTry running manually:');
  console.log(`  cd "${sqlitePath}"`);
  console.log('  npm run build-release');
  process.exit(1);
});

