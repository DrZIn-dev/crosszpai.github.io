!function(){"use strict";const e=["client/client.25a06740.js","client/index.b1c9c290.js","client/index.328af1f8.js","client/index.0e230715.js","client/client.5c2d4dce.js"].concat(["service-worker-index.html","favicon.png","global.css","great-success.png","husky_quote.jpg","kuu.jpg","kuu2.jpg","logo-192.png","logo-512.png","manifest.json","octocat_64x64.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1580125101062").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1580125101062"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1580125101062").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
