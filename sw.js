const staticCacheName = 'static-cache_V2';
const dynamicCacheName = 'dynamic-cache_V2';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/ui.js',
    '/js/materialize.min.js',
    '/css/styles.css',
    '/css/materialize.min.css',
    '/img/siddhu.jpg',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
    '/pages/fallback.html'
];

// install event
self.addEventListener('install', evt => {
    evt.waitUntil(
        //Create the new cache with name staticCacheName if not exist
        caches.open(staticCacheName).then((cache) => {
            console.log('caching static assets');
            cache.addAll(assets);
        })
    );
});

// activate event
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            //Getting all the cache with key = name of the caches
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
            );
        })
    );
});

// fetch event
self.addEventListener('fetch', evt => {
    evt.respondWith(
        //checking if the data is in cache
        caches.match(evt.request).then(cacheRes => {
            //if not then we make a network call using fetch(evt.request)
            return cacheRes || fetch(evt.request).then(
                //if we get the response then we add it into the dynamicCacheName and return else we through the user to fallback.html
                fetchRes => {
                    return caches.open(dynamicCacheName).then(cache => {
                        cache.put(evt.request.url, fetchRes.clone());
                        return fetchRes;
                    })
                });
        }).catch(() => caches.match('/pages/fallback.html'))
    );
});