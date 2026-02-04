const CACHE_NAME = 'panyuca-v1';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

// Instala el Service Worker y guarda los archivos en la memoria del celular
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Responde incluso cuando no hay internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
