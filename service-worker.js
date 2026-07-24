const CACHE_NAME = "maple-spec-lab-dev-disabled-v8";
self.addEventListener("install", event => self.skipWaiting());
self.addEventListener("activate", event => event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.map(key=>caches.delete(key)));
  await self.clients.claim();
})()));
self.addEventListener("fetch", event => {
  if(event.request.method!=="GET") return;
  event.respondWith(fetch(event.request,{cache:"no-store"}));
});
