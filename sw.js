const CACHE = 'dinner-deck-v1-0-0';
const ASSETS = ['./', './index.html', './styles.css', './app.js', './manifest.webmanifest', './assets/icon-192.png', './assets/icon-512.png', './assets/apple-touch-icon.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(cache => cache.put(req, copy)); }
    return res;
  }).catch(() => caches.match('./index.html'))));
});
