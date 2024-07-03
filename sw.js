self.addEventListener('install', function(event) {
    console.log('Service Worker instalado');
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker activo');
});

self.addEventListener('fetch', function(event) {
    console.log('Service Worker interceptando fetch event para:', event.request.url);
    event.respondWith(fetch(event.request));
});
