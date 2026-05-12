// Polyfill globalThis.crypto for Node compatibility with @remix-run/cloudflare in dev
// This is loaded via NODE_OPTIONS=--require so it runs in every spawned Node process.
if (!globalThis.crypto || !globalThis.crypto.subtle) {
  const { webcrypto } = require('node:crypto');
  if (!globalThis.crypto) {
    globalThis.crypto = webcrypto;
  } else if (!globalThis.crypto.subtle) {
    Object.defineProperty(globalThis.crypto, 'subtle', {
      value: webcrypto.subtle,
      writable: false,
      configurable: false,
    });
  }
}
