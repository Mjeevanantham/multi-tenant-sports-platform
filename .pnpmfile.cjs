// This file allows pnpm to run build scripts for better-sqlite3
function readPackage(pkg, context) {
  if (pkg.name === 'better-sqlite3') {
    context.log('Allowing build scripts for better-sqlite3');
    pkg.scripts = pkg.scripts || {};
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage
  }
};

