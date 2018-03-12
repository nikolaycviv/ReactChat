var CACHE_NAME = 'chat-cache-v1';
// var urlsToCache = [
//   '/',
//   '/main.css',
//   '/bundle.js'
// ];
var urlsToCache = [];
self.addEventListener('install', (event) => {
  // console.log('installing service worker');

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      // console.log('Opened cache', cache);
      cache.addAll(urlsToCache), (err) => {
      // console.log('somrthing went wrong: ', err);
    })
  );
});

self.addEventListener('activate', (event) => {
  var cacheWhitelist = [''];

  // console.log('activating service worker');

  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if (cacheWhitelist.indexOf(cacheName) === -1) {
          return caches.delete(cacheName);
        }
      })
    ))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // iMPORTANT: Clone the request. A request is a stream and
      // can only be consumed once. Since we are consuming this
      // once by cache and once by the browser for fetch, we need
      // to clone the response.
      var fetchRequest = event.request.clone();

      // cache hit - return response
      if (response) {
        return response;
      }


      return fetch(fetchRequest).then(
        (res) => {
          // iMPORTANT: Clone the response. A response is a stream
          // and because we want the browser to consume the response
          // as well as the cache consuming the response, we need
          // to clone it so we have two streams.
          var responseToCache = res.clone();

          // check if we received a valid response
          if (!res || res.status !== 200 || res.type !== 'basic') {
            return res;
          }

          caches.open(CACHE_NAME).
            then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return res;
        }
      );
    })
  );
});
