// Nombre del cache
const CACHE_NAME = 'mi-pwa-cache-v1';

// Archivos a cachear
const urlsToCache = [
  '/',
  'index.html',
  'pagina1.html',
  'pagina2.html',
  'icon.png',
  'manifest.json',
  'sw.js'  // Asegúrate de incluir el propio archivo del Service Worker
];

// Instalación del Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName !== CACHE_NAME;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// Interceptando fetch requests
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clonamos la petición porque event.request es de solo lectura
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Comprobamos si la respuesta es válida
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clonamos la respuesta porque response es de solo lectura
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});
