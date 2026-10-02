/* ==================================================================
   MATURANA TECH · SERVICE WORKER (PWA)
   Guarda el sitio en el teléfono para que abra rápido y sin internet.
   Cada vez que cambies el sitio, sube el número de VERSION para que
   los visitantes reciban la versión nueva.
   ================================================================== */

const VERSION = "maturana-tech-v4";

// Archivos propios que se guardan al instalar
const ARCHIVOS = [
  "./",
  "./index.html",
  "./legal.html",
  "./css/estilos.css",
  "./css/legal.css",
  "./js/index.js",
  "./js/legal.js",
  "./manifest.webmanifest",
  "./img/logo-simbolo.png",
  "./img/logo-simbolo-160.png",
  "./img/logo-nombre.png",
  "./img/logo-completo.png",
  "./img/icono-192.png",
  "./img/icono-512.png",
  "./img/icono-maskable-512.png",
  "./img/apple-touch-icon.png",
  "./img/favicon-32.png"
];

// 1. Instalar: guardar los archivos propios
self.addEventListener("install", function (evento) {
  evento.waitUntil(
    caches.open(VERSION).then(function (cache) { return cache.addAll(ARCHIVOS); })
  );
  self.skipWaiting();
});

// 2. Activar: borrar las versiones viejas
self.addEventListener("activate", function (evento) {
  evento.waitUntil(
    caches.keys().then(function (nombres) {
      return Promise.all(nombres.filter(function (n) { return n !== VERSION; }).map(function (n) { return caches.delete(n); }));
    })
  );
  self.clients.claim();
});

// 3. Responder pedidos
self.addEventListener("fetch", function (evento) {
  const pedido = evento.request;
  if (pedido.method !== "GET") return;

  // La página: primero internet (para ver lo más nuevo); sin internet, la copia guardada
  if (pedido.mode === "navigate") {
    evento.respondWith(
      fetch(pedido)
        .then(function (respuesta) {
          const copia = respuesta.clone();
          caches.open(VERSION).then(function (cache) { cache.put(pedido, copia); });
          return respuesta;
        })
        .catch(function () {
          return caches.match(pedido, { ignoreSearch: true }).then(function (guardado) {
            return guardado || caches.match("./index.html");
          });
        })
    );
    return;
  }

  // Imágenes, fuentes y librerías (Three.js, GSAP, Lenis): primero la copia guardada
  const url = new URL(pedido.url);
  const esPropio = url.origin === self.location.origin;
  const esLibreria = /cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|fonts\.googleapis\.com|fonts\.gstatic\.com/.test(url.hostname);
  if (!esPropio && !esLibreria) return;

  evento.respondWith(
    caches.match(pedido).then(function (guardado) {
      if (guardado) return guardado;
      return fetch(pedido).then(function (respuesta) {
        if (respuesta && (respuesta.ok || respuesta.type === "opaque")) {
          const copia = respuesta.clone();
          caches.open(VERSION).then(function (cache) { cache.put(pedido, copia); });
        }
        return respuesta;
      });
    })
  );
});
