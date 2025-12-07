# Building better-sqlite3 Native Bindings

If you encounter the "Could not locate the bindings file" error, follow these steps:

## Quick Fix

Run this command in your terminal:

```bash
cd "node_modules/.pnpm/better-sqlite3@12.5.0/node_modules/better-sqlite3"
npm run build-release
cd ../../../../..
```

## Alternative: Reinstall with Build Scripts

```bash
pnpm remove better-sqlite3
pnpm add better-sqlite3 --ignore-scripts=false
```

Or manually approve build scripts:

```bash
pnpm approve-builds better-sqlite3
pnpm install
```

## Using the Build Script

```bash
pnpm run build:sqlite
```

## Verify Installation

After building, verify the bindings exist:

```bash
find node_modules -name "better_sqlite3.node" -type f
```

You should see a file like:
```
node_modules/.pnpm/better-sqlite3@12.5.0/node_modules/better-sqlite3/build/Release/better_sqlite3.node
```

## Troubleshooting

If the build fails:

1. **Check Node.js version**: Make sure you're using Node.js 18+
   ```bash
   node --version
   ```

2. **Install build tools** (macOS):
   ```bash
   xcode-select --install
   ```

3. **Install build tools** (Linux):
   ```bash
   sudo apt-get install build-essential python3
   ```

4. **Try using npm directly**:
   ```bash
   cd node_modules/.pnpm/better-sqlite3@12.5.0/node_modules/better-sqlite3
   npm install
   npm run build-release
   ```

