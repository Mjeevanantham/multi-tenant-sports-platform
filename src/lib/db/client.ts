import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';
import { createRequire } from 'module';

// Use require for native module to avoid SSR bundling issues
const require = createRequire(import.meta.url);
const Database = require('better-sqlite3');

// Resolve database path - works in both dev and production
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Try multiple possible locations
let dbPath = join(__dirname, '../../../database.sqlite');
if (!existsSync(dbPath)) {
  // Try project root
  dbPath = join(process.cwd(), 'database.sqlite');
}

const sqlite = new Database(dbPath);
export const db = drizzle(sqlite, { schema });

