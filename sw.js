self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("nrgamerxyt-cache").then(cache => {
      return cache.addAll(["./"]);
    })
  );
});