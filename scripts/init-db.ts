import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { db } from '../src/lib/db/client';
import { seed } from '../src/lib/db/seed';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const migrationsFolder = join(__dirname, '../drizzle');

try {
  // Run migrations
  migrate(db, { migrationsFolder });
  console.log('Migrations completed!');
  
  // Seed the database
  seed();
  console.log('Database initialized and seeded!');
} catch (error) {
  console.error('Error initializing database:', error);
  process.exit(1);
}

