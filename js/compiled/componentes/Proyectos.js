"use strict";

function Proyectos() {
  const proyectos = [{
    nombre: 'Vías del Chocó',
    descripcion: 'Plataforma colaborativa para reportar y consultar el estado de las vías en tiempo real. Los usuarios pueden registrar incidentes en el mapa, ver alertas activas y seguir el historial.',
    imagen: 'assets/logos/viaschoco.png',
    link: 'https://viaschoco.vercel.app/',
    tag: '⭐ Destacado',
    tecnologias: ['React', 'Firebase', 'Node.js', 'Leaflet', 'Vercel'],
    destacado: true,
    estado: 'En vivo'
  }, {
    nombre: 'StyleZone by Luisito',
    descripcion: 'Tienda de accesorios tech con catálogo multi-página (audífonos, teclados, smartwatches). CSS personalizado y lógica de carrito en JavaScript vanilla.',
    imagen: 'assets/logos/stylezone.png',
    link: '',
    tag: '🛍️ E-commerce',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    estado: 'En vivo'
  }, {
    nombre: 'EcoPacific',
    descripcion: 'Web de conciencia ambiental para la región del Pacífico colombiano. Estructura multi-página con navegación interna, galería y contenido informativo.',
    imagen: 'assets/logos/ecopacific.png',
    link: '',
    tag: '🌿 Ambiental',
    tecnologias: ['HTML', 'CSS'],
    estado: 'En vivo'
  }, {
    nombre: 'AgroMarket',
    descripcion: 'Plataforma de mercado agrícola local. Conecta a productores campesinos con consumidores a través de una interfaz limpia y accesible.',
    imagen: 'assets/logos/agromarket.png',
    link: 'https://agromarket.netlify.app',
    tag: '🌾 Marketplace',
    tecnologias: ['HTML', 'CSS'],
    estado: 'En vivo'
  }, {
    nombre: 'StyleZone',
    descripcion: 'Versión original de StyleZone. Exploración de diseño visual con CSS puro — tipografía, paletas y layout totalmente personalizados.',
    imagen: 'assets/logos/stylezone-original.png',
    link: 'https://stylezone.netlify.app',
    tag: '🎨 CSS Design',
    tecnologias: ['HTML', 'CSS'],
    estado: 'En vivo'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "proyectos",
    className: "py-24 lg:py-32 bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-14 opacity-0 animate-fadeUp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 bg-blue-dim border border-blue-mid text-blue px-4 py-2 rounded-full font-display text-xs font-bold tracking-wider uppercase mb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 bg-blue rounded-full"
  }), "Proyectos en vivo"), /*#__PURE__*/React.createElement("h2", {
    className: "font-display font-black text-4xl lg:text-5xl leading-tight text-ink tracking-tight mb-4"
  }, "Resultados reales,", /*#__PURE__*/React.createElement("br", null), "no solo c\xF3digo."), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-slate max-w-2xl font-body"
  }, "Cada proyecto est\xE1 desplegado y disponible. Haz clic en \"Ver sitio\" para verlo en acci\xF3n.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-3 gap-6"
  }, proyectos.map((proyecto, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: `bg-white border border-border rounded-3xl overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col group opacity-0 animate-fadeUp
                ${proyecto.destacado ? 'lg:col-span-2 lg:flex-row' : ''}
              `,
    style: {
      animationDelay: `${idx * 0.12}s`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `relative overflow-hidden flex-shrink-0 group-hover:bg-pearl transition-colors
                ${proyecto.destacado ? 'lg:w-1/2 min-h-72' : 'h-48'}
              `
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full h-full flex items-center justify-center bg-pearl2 p-6"
  }, /*#__PURE__*/React.createElement("img", {
    src: proyecto.imagen,
    alt: `${proyecto.nombre} logo`,
    className: "max-w-full max-h-full object-contain"
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-3 left-3 bg-blue text-white px-3 py-1 rounded-full text-xs font-display font-bold"
  }, proyecto.tag)), /*#__PURE__*/React.createElement("div", {
    className: `p-6 lg:p-7 flex flex-col flex-1 ${proyecto.destacado ? 'lg:w-1/2' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-black text-lg lg:text-xl text-ink tracking-tight"
  }, proyecto.nombre), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 text-xs font-display font-semibold text-green-600"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 bg-green-600 rounded-full animate-livePulse"
  }), proyecto.estado)), /*#__PURE__*/React.createElement("p", {
    className: "text-sm lg:text-base text-slate leading-relaxed mb-5 flex-1"
  }, proyecto.descripcion), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-border"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, proyecto.tecnologias.map((tech, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "bg-pearl2 text-slate border border-border rounded px-2.5 py-1 text-xs font-display font-bold tracking-wider"
  }, tech))), /*#__PURE__*/React.createElement("a", {
    href: proyecto.link,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center gap-2 bg-blue text-white px-4 py-2 rounded-lg font-display font-semibold text-sm hover:shadow-blue hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
  }, "Ver sitio", /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
  })))))))), /*#__PURE__*/React.createElement("p", {
    className: "text-center text-xs text-slate2 font-display mt-8 pt-8 border-t border-border"
  }, "\uD83D\uDCA1 ", /*#__PURE__*/React.createElement("strong", {
    className: "text-slate"
  }, "Nota:"), " Reemplaza los links de \"Ver sitio\" con tus URLs de Vercel/Netlify cuando hagas el deploy.")));
}