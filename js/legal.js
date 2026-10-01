/* Índice: marca la sección que estás leyendo */
const enlaces = document.querySelectorAll("#indice a");
const observador = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (!entrada.isIntersecting) return;
    enlaces.forEach(function (a) {
      const activo = a.getAttribute("href") === "#" + entrada.target.id;
      a.classList.toggle("activo", activo);
      if (activo && window.innerWidth <= 900) a.scrollIntoView({ block: "nearest", inline: "center" });
    });
  });
}, { rootMargin: "-30% 0px -60% 0px" });
document.querySelectorAll(".politica").forEach(function (s) { observador.observe(s); });

/* Botón para volver a ver el aviso de cookies */
document.getElementById("reiniciar-aviso").addEventListener("click", function () {
  try { localStorage.removeItem("mt-aviso-cookies"); } catch (e) {}
  document.getElementById("aviso-reiniciado").hidden = false;
});

document.getElementById("anio").textContent = new Date().getFullYear();

/* PWA: misma caché del sitio */
if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("sw.js").catch(function () {});
}
