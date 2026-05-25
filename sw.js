const CACHE_NAME = 'shlepa-clicker-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './shlepa.jpg',
  './pelmen_shlepa.jpg',
  './золотой пельмень.jpg',
  './cosmos.jpg',
  './click.mp3',
  './golden.mp3'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
