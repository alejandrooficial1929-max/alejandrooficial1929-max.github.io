self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado exitosamente');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Activado y listo');
});

self.addEventListener('fetch', (e) => {
  // Mantendremos una estrategia simple conectada a la red por ahora
  e.respondWith(fetch(e.request));
});