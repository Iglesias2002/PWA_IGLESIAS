const CACHE_NAME = 'mi-pwa-cache-v1';
const URLS_TO_CACHE = [
    '/PWA_IGLESIAS/',
    '/PWA_IGLESIAS/index.html',
    '/PWA_IGLESIAS/icon.png',
    '/PWA_IGLESIAS/icon1.png', 
    '/PWA_IGLESIAS/oflline.html', 
    '/PWA_IGLESIAS/icon1.png, 
    // La imagen de respaldo
    // Agrega aquí cualquier otra URL que desees precachear
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Archivos en caché');
                return cache.addAll(URLS_TO_CACHE);
            })
    );
    console.log('Service Worker instalado');
});

self.addEventListener('activate', event => {
    console.log('Service Worker activo');
});

self.addEventListener('fetch', event => {
    console.log('Service Worker interceptando fetch event para:', event.request.url);
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match('/PWA_IGLESIAS/oflline.html'); // Devuelve la imagen de respaldo en caso de fallo
        })
    );
});
