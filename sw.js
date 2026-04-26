// Minimal service worker for PWA installability and file handling.
// No caching — the app is a static export served by a CDN/static host.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass through all requests to the network.
  event.respondWith(fetch(event.request));
});
