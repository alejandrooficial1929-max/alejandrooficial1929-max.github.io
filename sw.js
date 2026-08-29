self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado exitosamente');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Activado y listo');
});

self.addEventListener('fetch', (e) => {
  // SALVOCONDUCTO VIP: Si es una petición a Google o un POST, el guardia mira a otro lado
  if (e.request.url.includes('script.google.com') || e.request.method === 'POST') {
    return; // Retornamos vacío para que el navegador haga la conexión directa
  }

  // Para todo lo demás (imágenes, html, css), mantenemos la estrategia simple
  e.respondWith(fetch(e.request));
});
