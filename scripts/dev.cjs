const config = require('../app/config.json');

// Polyfill globalThis.crypto for Node compatibility with @remix-run/cloudflare
if (!globalThis.crypto) {
  const { webcrypto } = require('node:crypto');
  globalThis.crypto = webcrypto;
}

// Pop a lil' monogram in the terminal
console.info(config.ascii);
