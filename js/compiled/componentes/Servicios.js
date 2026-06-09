"use strict";

function Servicios() {
  const servicios = [{
    icono: '🎨',
    titulo: 'Diseño Web',
    descripcion: 'Interfaces modernas, limpias y centradas en el usuario. Diseño responsive y con identidad visual clara.'
  }, {
    icono: '💻',
    titulo: 'Desarrollo Frontend',
    descripcion: 'Sitios rápidos con HTML, CSS, JavaScript y React. Código limpio, organizado y fácil de mantener.'
  }, {
    icono: '⚙️',
    titulo: 'Backend en Render',
    descripcion: 'APIs REST con Node.js + Express, bases de datos en Firebase o MongoDB, desplegadas en Render.'
  }, {
    icono: '🚀',
    titulo: 'Landing Pages',
    descripcion: 'Páginas de aterrizaje optimizadas para conversión, con animaciones suaves y llamadas a la acción efectivas.'
  }, {
    icono: '🛠️',
    titulo: 'Mantenimiento Web Básico',
    descripcion: 'Soporte y mejoras frontend: actualizaciones, corrección de errores, optimización de rendimiento y ajustes visuales en tu sitio.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "servicios",
    className: "py-24 lg:py-32 bg-pearl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-14 opacity-0 animate-fadeUp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 bg-blue-dim border border-blue-mid text-blue px-4 py-2 rounded-full font-display text-xs font-bold tracking-wider uppercase mb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 bg-blue rounded-full"
  }), "Servicios"), /*#__PURE__*/React.createElement("h2", {
    className: "font-display font-black text-4xl lg:text-5xl leading-tight text-ink tracking-tight mb-4"
  }, "\xBFEn qu\xE9 puedo", /*#__PURE__*/React.createElement("br", null), "ayudarte?"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-slate max-w-2xl font-body"
  }, "Soluciones completas desde la idea hasta el servidor. Cada entregable listo para producci\xF3n.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
  }, servicios.map((servicio, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "bg-white border border-border rounded-2xl p-8 space-y-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fadeUp",
    style: {
      animationDelay: `${idx * 0.12}s`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 bg-blue-dim border border-blue-mid rounded-xl flex items-center justify-center text-2xl transition-colors group-hover:bg-blue group-hover:text-white"
  }, servicio.icono), /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-bold text-lg text-ink"
  }, servicio.titulo), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate leading-relaxed"
  }, servicio.descripcion))))));
}