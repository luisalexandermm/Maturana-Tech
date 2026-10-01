/* ==================================================================
   MATURANA TECH · SCRIPT
   Cada bloque tiene una sola tarea. Si una librería no carga,
   la página igual se ve completa (solo se pierden las animaciones).
   ================================================================== */

const NUMERO_WHATSAPP = "573145312045";
const hayGsap = typeof gsap !== "undefined";
const hayThree = typeof THREE !== "undefined";
const menosMovimiento = matchMedia("(prefers-reduced-motion: reduce)").matches;
const conMouse = matchMedia("(pointer: fine)").matches;
if (hayGsap && typeof ScrollTrigger !== "undefined") gsap.registerPlugin(ScrollTrigger);

/* ---------- 1. Proyectos ----------
   Para agregar uno: copia un objeto y cambia los textos y colores.
   tipo de maqueta: "tienda", "app" o "mapa". */
const proyectos = [
  {
    nombre: "Vías Chocó", categoria: "Proyecto académico ciudadano", maqueta: "mapa", dominio: "viaschoco.org",
    descripcion: "Sitio sin ánimo de lucro donde cualquier persona reporta, de forma anónima, el estado de las vías del Chocó y consulta los reportes de la comunidad.",
    incluye: ["Reporte anónimo", "Gráficas de reportes", "Panel administrativo"],
    colores: { fondo: "#F3F0EA", texto: "#2B2622", principal: "#2E2A26", acento: "#E2B42B" }
  },
  {
    nombre: "NoteFlow", categoria: "Organización académica", maqueta: "app", dominio: "noteflow.app",
    descripcion: "Plataforma para estudiantes que reúne notas, materias, tareas y calendario en un solo lugar, con un asistente que ayuda a estudiar.",
    incluye: ["Notas y materias", "Calendario", "Asistente para estudiar"],
    colores: { fondo: "#F7F7FA", texto: "#23232B", principal: "#2A2A35", acento: "#7A72D6" }
  },
  {
    nombre: "FitTrack", categoria: "Ejercicio en casa", maqueta: "app", dominio: "fittrack.app",
    descripcion: "Rutinas según tu objetivo, tu nivel y el tiempo que tienes, con registro de progreso, medidas y fotos para ver cómo avanzas.",
    incluye: ["Rutinas a tu medida", "Progreso y medidas", "Cuentas de usuario"],
    colores: { fondo: "#F5F3EF", texto: "#2B2A27", principal: "#2B2A27", acento: "#C0714F" }
  },
  {
    nombre: "Kairo", categoria: "Tienda de tenis", maqueta: "tienda", dominio: "kairo.co",
    portada: "Pisa con estilo",
    descripcion: "Tienda en línea de tenis con catálogo, carrito de compras y un panel administrativo con gráficas para seguir ventas e inventario.",
    incluye: ["Catálogo de tenis", "Carrito de compras", "Panel con gráficas"],
    colores: { fondo: "#F4F4F2", texto: "#141414", principal: "#141414", acento: "#FF6A2B" }
  }
];

function crearMaqueta(p) {
  const barra = `<div class="m-barra"><i></i><i></i><i></i><span class="m-url">${p.dominio}</span></div>`;
  if (p.maqueta === "tienda") {
    const producto = `<div class="m-producto"><em></em><i></i><i></i></div>`;
    return barra + `
      <div class="m-cuerpo">
        <div class="m-nav"><span class="m-logo">${p.nombre}</span><span class="m-links"><i></i><i></i><i></i></span></div>
        <div class="m-portada"><b>${p.portada}</b><span class="m-boton"></span></div>
        <div class="m-grilla">${producto.repeat(4)}</div>
      </div>`;
  }
  if (p.maqueta === "app") {
    const alturas = [35, 55, 42, 70, 50, 82, 64];
    return barra + `
      <div class="m-app">
        <div class="m-lateral"><i></i><i></i><i></i><i></i><i></i></div>
        <div class="m-principal">
          <div class="m-titulo"></div>
          <div class="m-tarjetas"><div><b>12</b><i></i></div><div><b>4</b><i></i></div><div><b>87%</b><i></i></div></div>
          <div class="m-grafica">${alturas.map(a => `<i style="height:${a}%"></i>`).join("")}</div>
        </div>
      </div>`;
  }
  return barra + `
    <div class="m-mapa">
      <svg viewBox="0 0 400 240" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-10 190 C 80 160, 110 90, 200 110 S 330 40, 410 60" fill="none" stroke="${p.colores.principal}" stroke-width="7" stroke-linecap="round" opacity=".75"/>
        <path d="M60 250 C 90 200, 150 180, 170 120" fill="none" stroke="${p.colores.principal}" stroke-width="4" opacity=".35"/>
      </svg>
      <span class="m-pin" style="left:24%;top:52%"></span>
      <span class="m-pin" style="left:46%;top:38%"></span>
      <span class="m-pin" style="left:70%;top:20%"></span>
      <div class="m-reporte"><b>Nuevo reporte</b><i></i><i></i><i style="width:60%"></i><span class="m-boton"></span></div>
    </div>`;
}

const pista = document.getElementById("pista");
proyectos.forEach(function (p) {
  const c = p.colores;
  const tarjeta = document.createElement("article");
  tarjeta.className = "proyecto vidrio";
  tarjeta.innerHTML = `
    <div class="proyecto-escena">
      <div class="maqueta" style="--m-fondo:${c.fondo};--m-texto:${c.texto};--m-principal:${c.principal};--m-acento:${c.acento}">
        ${crearMaqueta(p)}
      </div>
    </div>
    <div class="proyecto-info">
      <span class="proyecto-tipo">${p.categoria}</span>
      <h3>${p.nombre}</h3>
      <p>${p.descripcion}</p>
      <ul class="proyecto-incluye">${p.incluye.map(t => `<li>${t}</li>`).join("")}</ul>
      <span class="proyecto-muestra">Paleta <i style="background:${c.principal}"></i><i style="background:${c.acento}"></i><i style="background:${c.fondo}"></i></span>
    </div>`;
  pista.appendChild(tarjeta);
});
document.getElementById("contador-total").textContent = String(proyectos.length).padStart(2, "0");

/* ---------- Carrusel de proyectos con flechas ----------
   Muestra un proyecto a la vez. Las flechas, el teclado (← →)
   y deslizar con el dedo cambian de proyecto. Al llegar al
   último vuelve al primero. */
const tarjetasProyecto = Array.from(pista.children);
let proyectoActual = 0;

function mostrarProyecto(numero, conAnimacion) {
  const total = tarjetasProyecto.length;
  proyectoActual = (numero + total) % total;
  const paso = tarjetasProyecto[0].offsetWidth + parseFloat(getComputedStyle(pista).columnGap || 28);
  pista.style.transform = "translateX(" + (-proyectoActual * paso) + "px)";

  tarjetasProyecto.forEach(function (tarjeta, i) {
    const activa = i === proyectoActual;
    tarjeta.style.opacity = activa ? 1 : 0.25;
    tarjeta.inert = !activa;               // las ocultas no reciben foco
    tarjeta.setAttribute("aria-hidden", String(!activa));
  });

  document.getElementById("contador-actual").textContent = String(proyectoActual + 1).padStart(2, "0");
  document.getElementById("contador-barra").style.transform = "scaleX(" + (proyectoActual + 1) / total + ")";

  // El texto del proyecto entra suave
  if (conAnimacion && hayGsap && !menosMovimiento) {
    const piezas = tarjetasProyecto[proyectoActual].querySelectorAll(".proyecto-info > *");
    gsap.fromTo(piezas, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.06, delay: 0.2, ease: "power3.out", clearProps: "all" });
    gsap.fromTo(tarjetasProyecto[proyectoActual].querySelector(".maqueta"), { rotateY: -14, scale: 0.94 }, { rotateY: 0, scale: 1, duration: 1, ease: "expo.out" });
  }
}

document.getElementById("flecha-anterior").addEventListener("click", function () { mostrarProyecto(proyectoActual - 1, true); });
document.getElementById("flecha-siguiente").addEventListener("click", function () { mostrarProyecto(proyectoActual + 1, true); });
document.getElementById("carrusel").addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") { e.preventDefault(); mostrarProyecto(proyectoActual - 1, true); }
  if (e.key === "ArrowRight") { e.preventDefault(); mostrarProyecto(proyectoActual + 1, true); }
});
// Deslizar con el dedo
let inicioToque = null;
pista.addEventListener("pointerdown", function (e) { inicioToque = e.clientX; });
pista.addEventListener("pointerup", function (e) {
  if (inicioToque === null) return;
  const distancia = e.clientX - inicioToque;
  if (Math.abs(distancia) > 50) mostrarProyecto(proyectoActual + (distancia < 0 ? 1 : -1), true);
  inicioToque = null;
});
window.addEventListener("resize", function () { mostrarProyecto(proyectoActual, false); });
mostrarProyecto(0, false);


/* ---------- 2. Fondo del hero: fluido tornasol (Three.js) ---------- */
let fluido = null;
function iniciarFluido() {
  if (!hayThree) return;
  const lienzo = document.getElementById("lienzo-fluido");
  const renderer = new THREE.WebGLRenderer({ canvas: lienzo, antialias: false });
  const esCelular = window.innerWidth < 700;
  renderer.setPixelRatio(esCelular ? 1 : Math.min(window.devicePixelRatio, 1.5));
  const escena = new THREE.Scene();
  const camara = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTiempo: { value: 0 },
      uResolucion: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uScroll: { value: 0 }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = vec4(position, 1.0); }`,
    fragmentShader: `
      precision highp float;
      uniform float uTiempo, uScroll;
      uniform vec2 uResolucion, uMouse;
      varying vec2 vUv;
      float azar(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float ruido(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(azar(i), azar(i + vec2(1.0, 0.0)), u.x),
                   mix(azar(i + vec2(0.0, 1.0)), azar(i + vec2(1.0, 1.0)), u.x), u.y);
      }
      float capas(vec2 p) {
        float v = 0.0, a = 0.5;
        for (int i = 0; i < 5; i++) { v += a * ruido(p); p *= 2.03; a *= 0.5; }
        return v;
      }
      void main() {
        float aspecto = uResolucion.x / uResolucion.y;
        vec2 p = vec2(vUv.x * aspecto, vUv.y) * 1.6;
        vec2 m = vec2(uMouse.x * aspecto, uMouse.y) * 1.6;
        float t = uTiempo * 0.07;
        vec2 q = vec2(capas(p + t), capas(p + vec2(5.2, 1.3) - t));
        vec2 r = vec2(capas(p + 2.0 * q + vec2(1.7, 9.2) + t * 1.4),
                      capas(p + 2.0 * q + vec2(8.3, 2.8) - t));
        float d = distance(p, m);
        r += (m - p) * 0.35 * exp(-d * d * 2.5);
        float f = capas(p + 1.8 * r + uScroll * 0.6);

        vec3 perla   = vec3(0.961, 0.949, 0.933);
        vec3 durazno = vec3(0.969, 0.788, 0.647);
        vec3 ambar   = vec3(0.949, 0.647, 0.255);
        vec3 coral   = vec3(0.933, 0.475, 0.388);
        vec3 rosa    = vec3(0.906, 0.659, 0.757);
        vec3 lila    = vec3(0.886, 0.839, 0.953);

        vec3 color = perla;
        color = mix(color, durazno, smoothstep(0.30, 0.78, f));
        color = mix(color, rosa,    smoothstep(0.45, 0.95, r.x) * 0.75);
        color = mix(color, lila,    smoothstep(0.50, 0.90, q.x) * 0.45);
        color = mix(color, coral,   smoothstep(0.55, 0.95, q.y * f * 1.7) * 0.6);
        color = mix(color, ambar,   smoothstep(0.62, 0.92, r.y * f * 1.5) * 0.55);
        color += 0.045 * sin(vec3(0.0, 2.1, 4.2) + f * 6.2831 + uTiempo * 0.3);
        color += vec3(1.0, 0.96, 0.92) * exp(-d * d * 5.0) * 0.12;
        // Halo claro detrás del logo (centro)
        float centro = 1.0 - smoothstep(0.0, 0.42, distance(vec2(vUv.x * aspecto, vUv.y), vec2(0.5 * aspecto, 0.55)));
        color = mix(color, vec3(1.0, 0.985, 0.97), centro * 0.4);
        color += (azar(vUv * uResolucion + fract(uTiempo)) - 0.5) * 0.03;
        gl_FragColor = vec4(color, 1.0);
      }`
  });
  escena.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

  function ajustarTamano() {
    const ancho = lienzo.clientWidth, alto = lienzo.clientHeight;
    renderer.setSize(ancho, alto, false);
    material.uniforms.uResolucion.value.set(ancho, alto);
  }
  ajustarTamano();
  window.addEventListener("resize", ajustarTamano);

  const objetivo = { x: 0.5, y: 0.5 };
  window.addEventListener("pointermove", function (e) {
    const caja = lienzo.getBoundingClientRect();
    objetivo.x = (e.clientX - caja.left) / caja.width;
    objetivo.y = 1 - (e.clientY - caja.top) / caja.height;
  });

  let visible = true;
  new IntersectionObserver(function (e) { visible = e[0].isIntersecting; }).observe(lienzo);
  const reloj = new THREE.Clock();
  function animar() {
    requestAnimationFrame(animar);
    if (!visible) return;
    const u = material.uniforms;
    u.uTiempo.value = menosMovimiento ? 4 : reloj.getElapsedTime();
    u.uMouse.value.x += (objetivo.x - u.uMouse.value.x) * 0.05;
    u.uMouse.value.y += (objetivo.y - u.uMouse.value.y) * 0.05;
    renderer.render(escena, camara);
  }
  animar();
  fluido = { material: material };
}
try { iniciarFluido(); } catch (error) { console.warn("No se pudo iniciar el 3D:", error); }

/* ---------- 3. Scroll suave (Lenis) ---------- */
let lenis = null;
if (typeof Lenis !== "undefined" && hayGsap && !menosMovimiento) {
  lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(function (tiempo) { lenis.raf(tiempo * 1000); });
  gsap.ticker.lagSmoothing(0);
}
function irA(destino) {
  if (lenis) lenis.scrollTo(destino, { offset: -10 });
  else destino.scrollIntoView({ behavior: "smooth" });
}
document.querySelectorAll('a[href^="#"]:not(.abre-idea)').forEach(function (enlace) {
  enlace.addEventListener("click", function (e) {
    const destino = document.querySelector(enlace.getAttribute("href"));
    if (!destino) return;
    e.preventDefault();
    cerrarPanel();
    irA(destino);
  });
});

/* ---------- 4. Header ---------- */
const menu = document.getElementById("menu");
const barraProgreso = document.getElementById("menu-progreso");
function revisarMenu() {
  const recorrido = document.documentElement.scrollHeight - window.innerHeight;
  menu.classList.toggle("compacto", window.scrollY > 80);
  barraProgreso.style.transform = "scaleX(" + (recorrido > 0 ? window.scrollY / recorrido : 0) + ")";
}
window.addEventListener("scroll", revisarMenu, { passive: true });
revisarMenu();

const enlacesMenu = document.querySelectorAll(".menu-enlaces a");
const observadorSecciones = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (!entrada.isIntersecting) return;
    enlacesMenu.forEach(function (a) { a.classList.toggle("activo", a.dataset.seccion === entrada.target.id); });
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("#trabajos, #servicios, #proceso, #sobre-mi, #preguntas").forEach(function (s) { observadorSecciones.observe(s); });

/* ---------- 5. Cargador y entrada del hero ---------- */
function entradaHero() {
  if (!hayGsap) return;
  gsap.timeline()
    .from("#lienzo-fluido", { opacity: 0, scale: 1.15, duration: 1.8, ease: "power2.out" }, 0)
    .from("#logo-centro", { scale: 0.4, rotateY: -160, opacity: 0, duration: 1.6, ease: "expo.out" }, 0.1)
    .fromTo("#hero-nombre img", { clipPath: "inset(0% 100% 0% 0%)", y: 20 }, { clipPath: "inset(0% 0% 0% 0%)", y: 0, duration: 1.3, ease: "expo.inOut", clearProps: "all" }, 0.45)
    .from(".hero-datos", { opacity: 0, duration: 0.8 }, 0.8)
    .fromTo(".menu .marca-simbolo", { scale: 0, rotate: -90 }, { scale: 1, rotate: 0, duration: 1, ease: "back.out(1.6)", clearProps: "all" }, 0.2)
    .from("#marca-nombre .letras span", { yPercent: 110, duration: 0.7, stagger: 0.03, ease: "power3.out" }, 0.35)
    .from("#marca-nombre small", { opacity: 0, letterSpacing: "1.2em", duration: 1, ease: "power3.out" }, 0.6)
    .from(".menu-enlaces li", { y: -24, opacity: 0, duration: 0.6, stagger: 0.06, ease: "power3.out" }, 0.45)
    .from(".boton-menu, .boton-hamburguesa", { scale: 0.6, opacity: 0, duration: 0.7, ease: "back.out(2)" }, 0.6)
    .fromTo("#idea-boton", { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "back.out(1.4)", clearProps: "all" }, 1);
}
const cargador = document.getElementById("cargador");
if (!hayGsap || menosMovimiento) {
  cargador.remove();
} else {
  const cuenta = { valor: 0 };
  gsap.timeline({ onComplete: function () { cargador.remove(); } })
    .fromTo(".cargador-logo", { scale: 0.5, rotateY: -90, opacity: 0 }, { scale: 1, rotateY: 0, opacity: 1, duration: 0.8, ease: "expo.out" })
    .to(cuenta, {
      valor: 100, duration: 1.1, ease: "power2.inOut",
      onUpdate: function () {
        document.getElementById("cargador-numero").textContent = String(Math.round(cuenta.valor)).padStart(3, "0");
        document.getElementById("cargador-barra").style.transform = "scaleX(" + cuenta.valor / 100 + ")";
      }
    }, 0.1)
    .to(cargador, { clipPath: "circle(0% at 50% 50%)", duration: 1, ease: "expo.inOut" }, "+=0.1")
    .add(entradaHero, "-=0.5");
}

/* ---------- 6. Logo del hero: flota y se inclina con el mouse ---------- */
if (hayGsap && !menosMovimiento) {
  const logo = document.getElementById("logo-centro");
  gsap.to(".logo-escena", { y: -14, duration: 2.8, ease: "sine.inOut", yoyo: true, repeat: -1 });
  if (conMouse) {
    window.addEventListener("pointermove", function (e) {
      if (window.scrollY > window.innerHeight) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      gsap.to(logo, { rotateY: x * 30, rotateX: -y * 30, duration: 0.8, ease: "power3.out" });
    });
  }
}

/* ---------- 7. Animaciones con scroll ---------- */
if (hayGsap && !menosMovimiento) {

  // 7.1 Hero: el logo se aleja y el fluido cambia al bajar
  if (fluido) gsap.to(fluido.material.uniforms.uScroll, { value: 2, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".hero-centro", { yPercent: -25, scale: 0.85, opacity: 0, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  // 7.2 Cinta infinita
  const cinta = document.getElementById("cinta-pista");
  cinta.appendChild(cinta.firstElementChild.cloneNode(true));
  const movimientoCinta = gsap.to(cinta, { xPercent: -50, duration: 28, ease: "none", repeat: -1 });
  ScrollTrigger.create({
    onUpdate: function (self) {
      const extra = Math.min(Math.abs(self.getVelocity()) / 300, 5);
      gsap.to(movimientoCinta, { timeScale: (self.direction === 1 ? 1 : -1) * (1 + extra), duration: 0.3, overwrite: true });
    }
  });

  // 7.3 Manifiesto
  const manifiesto = document.getElementById("manifiesto-texto");
  manifiesto.innerHTML = manifiesto.textContent.split(" ").map(function (p) { return '<span class="palabra">' + p + "</span>"; }).join(" ");
  gsap.to("#manifiesto-texto .palabra", { color: "#16120F", stagger: 0.1, ease: "none", scrollTrigger: { trigger: manifiesto, start: "top 80%", end: "bottom 45%", scrub: true } });

  // 7.4 Contadores
  document.querySelectorAll(".contar").forEach(function (el) {
    const obj = { n: 0 };
    gsap.to(obj, { n: Number(el.dataset.hasta), duration: 1.6, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 90%", once: true }, onUpdate: function () { el.textContent = Math.round(obj.n); } });
  });

  // 7.5 Títulos: se revelan como una cortina que sube
  gsap.utils.toArray(".titulo-revela").forEach(function (h) {
    gsap.fromTo(h, { clipPath: "inset(0% 0% 100% 0%)", y: 40 }, {
      clipPath: "inset(0% 0% -20% 0%)", y: 0, duration: 1.2, ease: "expo.out",
      scrollTrigger: { trigger: h, start: "top 88%" }
    });
  });

  // 7.7 Servicios: entran en abanico
  gsap.from(".servicio", { x: -60, rotate: -2, opacity: 0, duration: 1, stagger: 0.12, ease: "expo.out", scrollTrigger: { trigger: ".lista-servicios", start: "top 82%" } });

  // 7.9 Foto: parallax y leve zoom
  gsap.fromTo("#foto-interior", { yPercent: -6, scale: 1.08 }, { yPercent: 8, scale: 1, ease: "none", scrollTrigger: { trigger: ".foto-marco", start: "top bottom", end: "bottom top", scrub: true } });

  // 7.10 Preguntas: aparecen una tras otra
  gsap.from(".pregunta", { y: 30, opacity: 0, duration: 0.8, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: ".lista-preguntas", start: "top 85%" } });

  // 7.11 Cierre: cada palabra cae en su lugar
  gsap.from(".palabra-cierre", { yPercent: 100, rotateX: -80, opacity: 0, transformPerspective: 800, transformOrigin: "50% 0%", duration: 1.2, stagger: 0.08, ease: "expo.out", scrollTrigger: { trigger: ".cierre", start: "top 75%" } });
  gsap.from(".boton-circular", { scale: 0, rotate: -120, duration: 1.2, ease: "back.out(1.4)", scrollTrigger: { trigger: ".cierre", start: "top 70%" } });

  // 7.12 Footer: las letras gigantes suben una por una
  gsap.from("#pie-gigante span", { yPercent: 100, duration: 1.1, stagger: 0.05, ease: "expo.out", clearProps: "all", scrollTrigger: { trigger: "#pie-gigante", start: "top 95%" } });
}

/* ---------- 8. Reflejo holográfico que sigue al mouse ---------- */
if (conMouse) {
  document.querySelectorAll(".vidrio").forEach(function (el) {
    el.addEventListener("pointermove", function (e) {
      const caja = el.getBoundingClientRect();
      el.style.setProperty("--x", (e.clientX - caja.left) + "px");
      el.style.setProperty("--y", (e.clientY - caja.top) + "px");
    });
  });
}

/* ---------- 9. Inclinación 3D de las maquetas ---------- */
if (hayGsap && conMouse) {
  document.querySelectorAll(".proyecto").forEach(function (tarjeta) {
    const maqueta = tarjeta.querySelector(".maqueta");
    tarjeta.addEventListener("pointermove", function (e) {
      const caja = maqueta.getBoundingClientRect();
      const x = (e.clientX - caja.left) / caja.width - 0.5;
      const y = (e.clientY - caja.top) / caja.height - 0.5;
      gsap.to(maqueta, { rotateY: x * 14, rotateX: -y * 12, duration: 0.6, ease: "power3.out" });
    });
    tarjeta.addEventListener("pointerleave", function () {
      gsap.to(maqueta, { rotateY: 0, rotateX: 0, duration: 0.9, ease: "elastic.out(1, 0.5)" });
    });
  });
}

/* ---------- 10. Botones magnéticos y cursor ---------- */
if (hayGsap && conMouse && !menosMovimiento) {
  document.querySelectorAll(".iman").forEach(function (boton) {
    boton.addEventListener("pointermove", function (e) {
      const caja = boton.getBoundingClientRect();
      gsap.to(boton, { x: (e.clientX - (caja.left + caja.width / 2)) * 0.25, y: (e.clientY - (caja.top + caja.height / 2)) * 0.3, duration: 0.4, ease: "power3.out" });
    });
    boton.addEventListener("pointerleave", function () { gsap.to(boton, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" }); });
  });
  const punto = document.getElementById("cursor");
  const aro = document.getElementById("cursor-aro");
  const puntoX = gsap.quickTo(punto, "x", { duration: 0.1 });
  const puntoY = gsap.quickTo(punto, "y", { duration: 0.1 });
  const aroX = gsap.quickTo(aro, "x", { duration: 0.45, ease: "power3" });
  const aroY = gsap.quickTo(aro, "y", { duration: 0.45, ease: "power3" });
  window.addEventListener("pointermove", function (e) { puntoX(e.clientX); puntoY(e.clientY); aroX(e.clientX); aroY(e.clientY); });
  document.querySelectorAll("a, button, .maqueta, label").forEach(function (el) {
    el.addEventListener("pointerenter", function () { aro.classList.add("activo"); });
    el.addEventListener("pointerleave", function () { aro.classList.remove("activo"); });
  });
} else {
  document.getElementById("cursor").remove();
  document.getElementById("cursor-aro").remove();
}

/* ---------- 11. Menú de celular ---------- */
const botonHamburguesa = document.getElementById("boton-hamburguesa");
const panel = document.getElementById("panel-movil");
let panelAbierto = false;
function abrirPanel() {
  panelAbierto = true;
  menu.classList.add("panel-abierto");
  document.getElementById("idea-boton").classList.add("oculto");
  botonHamburguesa.setAttribute("aria-expanded", "true");
  document.getElementById("icono-menu").setAttribute("d", "M6 6l12 12M18 6L6 18");
  panel.style.visibility = "visible";
  if (lenis) lenis.stop();
  if (hayGsap) {
    gsap.to(panel, { clipPath: "circle(150% at calc(100% - 44px) 44px)", duration: 0.9, ease: "expo.inOut" });
    gsap.fromTo("#panel-movil .grande", { yPercent: 110 }, { yPercent: 0, duration: 0.8, stagger: 0.06, ease: "expo.out", delay: 0.35 });
  } else {
    panel.style.clipPath = "none";
  }
}
function cerrarPanel() {
  if (!panelAbierto) return;
  panelAbierto = false;
  menu.classList.remove("panel-abierto");
  if (!ideaAbierta) document.getElementById("idea-boton").classList.remove("oculto");
  botonHamburguesa.setAttribute("aria-expanded", "false");
  document.getElementById("icono-menu").setAttribute("d", "M4 8h16M4 16h16");
  if (lenis) lenis.start();
  if (hayGsap) gsap.to(panel, { clipPath: "circle(0% at calc(100% - 44px) 44px)", duration: 0.7, ease: "expo.inOut", onComplete: function () { panel.style.visibility = "hidden"; } });
  else panel.style.visibility = "hidden";
}
botonHamburguesa.addEventListener("click", function () { panelAbierto ? cerrarPanel() : abrirPanel(); });

/* ---------- 12. Formulario flotante "¿Tienes una idea?" ----------
   No envía datos a ningún servidor: arma el texto y abre WhatsApp. */
const ideaBoton = document.getElementById("idea-boton");
const ideaPanel = document.getElementById("idea-panel");
const ideaEnviar = document.getElementById("idea-enviar");
const ideaError = document.getElementById("idea-error");
const campoNombre = document.getElementById("idea-nombre");
const campoNegocio = document.getElementById("idea-negocio");
const campoMensaje = document.getElementById("idea-mensaje");

function armarMensaje() {
  const tipo = document.querySelector('input[name="idea-tipo"]:checked').value;
  let texto = "Hola Luis, soy " + (campoNombre.value.trim() || "...") + ".";
  if (campoNegocio.value.trim()) texto += " Te escribo de " + campoNegocio.value.trim() + ".";
  texto += " Quiero crear: " + tipo + ".";
  if (campoMensaje.value.trim()) texto += " " + campoMensaje.value.trim();
  ideaEnviar.href = "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(texto);
}
document.getElementById("idea-formulario").addEventListener("input", function () {
  armarMensaje();
  if (campoNombre.value.trim()) campoNombre.classList.remove("con-error");
  if (campoMensaje.value.trim()) campoMensaje.classList.remove("con-error");
  const acepto = document.getElementById("idea-acepto").checked;
  if (acepto) document.getElementById("idea-acepto").parentElement.classList.remove("con-error");
  if (campoNombre.value.trim() && campoMensaje.value.trim() && acepto) ideaError.hidden = true;
});
document.getElementById("idea-formulario").addEventListener("submit", function (e) { e.preventDefault(); });
armarMensaje();

// Antes de ir a WhatsApp revisamos que nombre y mensaje no estén vacíos
ideaEnviar.addEventListener("click", function (e) {
  const faltaNombre = !campoNombre.value.trim();
  const faltaMensaje = !campoMensaje.value.trim();
  const casillaAcepto = document.getElementById("idea-acepto");
  const faltaAutorizacion = !casillaAcepto.checked;
  campoNombre.classList.toggle("con-error", faltaNombre);
  campoMensaje.classList.toggle("con-error", faltaMensaje);
  casillaAcepto.parentElement.classList.toggle("con-error", faltaAutorizacion);
  if (faltaNombre || faltaMensaje || faltaAutorizacion) {
    e.preventDefault();
    if (faltaNombre && faltaMensaje) ideaError.textContent = "Escribe tu nombre y cuéntame un poco de tu idea.";
    else if (faltaNombre) ideaError.textContent = "Escribe tu nombre para saber con quién hablo.";
    else if (faltaMensaje) ideaError.textContent = "Cuéntame un poco de tu idea.";
    else ideaError.textContent = "Marca la casilla de autorización para poder enviarme tus datos.";
    ideaError.hidden = false;
    (faltaNombre ? campoNombre : faltaMensaje ? campoMensaje : casillaAcepto).focus();
    if (hayGsap) gsap.fromTo(ideaPanel, { x: -8 }, { x: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
  }
});

let ideaAbierta = false;
function abrirIdea(tipo) {
  if (tipo) {
    const opcion = document.querySelector('input[name="idea-tipo"][value="' + tipo + '"]');
    if (opcion) opcion.checked = true;
    armarMensaje();
  }
  if (ideaAbierta) return;
  ideaAbierta = true;
  ideaPanel.hidden = false;
  ideaBoton.classList.add("oculto");
  ideaBoton.setAttribute("aria-expanded", "true");
  if (hayGsap) {
    gsap.fromTo(ideaPanel, { scale: 0.6, opacity: 0, y: 30 }, { scale: 1, opacity: 1, y: 0, duration: 0.7, ease: "expo.out" });
    gsap.from("#idea-panel .idea-campo, #idea-panel .idea-grupo, #idea-panel .idea-enviar", { y: 16, opacity: 0, duration: 0.5, stagger: 0.05, delay: 0.15, ease: "power3.out" });
  }
  setTimeout(function () { campoNombre.focus({ preventScroll: true }); }, 300);
}
function cerrarIdea() {
  if (!ideaAbierta) return;
  ideaAbierta = false;
  ideaBoton.classList.remove("oculto");
  ideaBoton.setAttribute("aria-expanded", "false");
  if (hayGsap) gsap.to(ideaPanel, { scale: 0.7, opacity: 0, y: 20, duration: 0.4, ease: "power3.in", onComplete: function () { ideaPanel.hidden = true; } });
  else ideaPanel.hidden = true;
  ideaBoton.focus({ preventScroll: true });
}
ideaBoton.addEventListener("click", function () { abrirIdea(); });
document.getElementById("idea-cerrar").addEventListener("click", cerrarIdea);
document.addEventListener("keydown", function (e) { if (e.key === "Escape") { cerrarIdea(); cerrarPanel(); } });
// "Hablemos" y las filas de servicios también abren el formulario
document.querySelectorAll(".abre-idea").forEach(function (el) {
  el.addEventListener("click", function (e) { e.preventDefault(); cerrarPanel(); abrirIdea(el.dataset.tipo); });
});

/* ---------- 13. Preguntas (acordeón) ---------- */
document.querySelectorAll(".pregunta button").forEach(function (boton) {
  boton.addEventListener("click", function () {
    const pregunta = boton.parentElement;
    const respuesta = pregunta.querySelector(".pregunta-respuesta");
    const abrir = !pregunta.classList.contains("abierta");
    pregunta.classList.toggle("abierta", abrir);
    boton.setAttribute("aria-expanded", String(abrir));
    if (hayGsap) gsap.to(respuesta, { height: abrir ? "auto" : 0, duration: 0.5, ease: "power3.inOut", onComplete: function () { ScrollTrigger.refresh(); } });
    else respuesta.style.height = abrir ? "auto" : "0";
  });
});

/* ---------- 14. Hora de Quibdó y año ---------- */
function mostrarHora() {
  const hora = new Intl.DateTimeFormat("es-CO", { hour: "2-digit", minute: "2-digit", timeZone: "America/Bogota" }).format(new Date());
  document.getElementById("hora-quibdo").textContent = "Quibdó " + hora;
  document.getElementById("hora-pie").textContent = hora + " · Colombia";
}
mostrarHora();
setInterval(mostrarHora, 30000);
document.getElementById("anio").textContent = new Date().getFullYear();


/* ---------- Aviso de cookies ----------
   Se muestra una vez. La elección se recuerda 12 meses en el navegador. */
(function () {
  const aviso = document.getElementById("aviso-cookies");
  const CLAVE = "mt-aviso-cookies";
  let yaVisto = false;
  try {
    const guardado = JSON.parse(localStorage.getItem(CLAVE) || "null");
    yaVisto = guardado && (Date.now() - guardado.fecha) < 365 * 24 * 60 * 60 * 1000;
  } catch (e) { /* si el navegador no deja leer, se muestra el aviso */ }
  if (yaVisto) return;
  setTimeout(function () {
    aviso.hidden = false;
    if (hayGsap && !menosMovimiento) gsap.from(aviso, { y: 40, opacity: 0, duration: 0.8, ease: "expo.out", clearProps: "all" });
  }, 3500);
  document.getElementById("aviso-cookies-ok").addEventListener("click", function () {
    try { localStorage.setItem(CLAVE, JSON.stringify({ fecha: Date.now() })); } catch (e) {}
    if (hayGsap && !menosMovimiento) gsap.to(aviso, { y: 30, opacity: 0, duration: 0.4, onComplete: function () { aviso.hidden = true; } });
    else aviso.hidden = true;
  });
})();

/* ---------- 15. PWA: modo sin conexión e instalación ----------
   sw.js guarda el sitio en el teléfono para que abra sin internet.
   Solo funciona en http(s) o localhost, no abriendo el archivo con doble clic. */
if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js").catch(function () { /* sin service worker, el sitio sigue normal */ });
  });
}
let eventoInstalar = null;
const botonesInstalar = document.querySelectorAll(".instalar-app");
window.addEventListener("beforeinstallprompt", function (e) {
  e.preventDefault();               // guardamos el aviso para mostrarlo con nuestro botón
  eventoInstalar = e;
  botonesInstalar.forEach(function (b) { b.hidden = false; });
});
botonesInstalar.forEach(function (boton) {
  boton.addEventListener("click", function () {
    if (!eventoInstalar) return;
    eventoInstalar.prompt();
    eventoInstalar.userChoice.finally(function () {
      eventoInstalar = null;
      botonesInstalar.forEach(function (b) { b.hidden = true; });
    });
  });
});
window.addEventListener("appinstalled", function () { botonesInstalar.forEach(function (b) { b.hidden = true; }); });

if (hayGsap && document.fonts) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
