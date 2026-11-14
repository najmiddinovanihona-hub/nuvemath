// Nuvemath — service worker: ochilgan sahifalar va fayllarni saqlab qo‘yadi, internet bo‘lmaganda ham ishlaydi.
// HTML — avval tarmoqdan (yangi versiya darhol ko‘rinishi uchun), qolgan fayllar — keshdan, fonda yangilanadi.
var CACHE = 'nuvemath-v27';
var CORE = ['./', 'index.html', 'assets/favicon.png', 'assets/emblem.png', 'assets/emblem-dark.png', 'manifest.webmanifest'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) { return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url), same = url.origin === self.location.origin;
  var cdn = /cdnjs\.cloudflare\.com|fonts\.googleapis\.com|fonts\.gstatic\.com/.test(url.host);
  if (!same && !cdn) return;
  if (req.mode === 'navigate' || (same && /\.html?$|\/$/.test(url.pathname))) {
    e.respondWith(fetch(req).then(function (res) { var cp = res.clone(); caches.open(CACHE).then(function (c) { c.put('index.html', cp); }); return res; })
      .catch(function () { return caches.match('index.html'); }));
    return;
  }
  e.respondWith(caches.open(CACHE).then(function (c) {
    return c.match(req).then(function (hit) {
      var net = fetch(req).then(function (res) { if (res && (res.ok || res.type === 'opaque')) c.put(req, res.clone()); return res; }).catch(function () { return hit; });
      return hit || net;
    });
  }));
});
