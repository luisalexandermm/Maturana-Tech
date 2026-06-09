"use strict";

function Proyectos() {
  const proyectos = [{
    nombre: 'Vías del Chocó',
    descripcion: 'Plataforma colaborativa con información de vías en vivo. Ideal para mostrar resultados reales y confiables en línea.',
    imagen: 'assets/logos/viaschoco.png',
    link: 'https://luisalexandermm.github.io/viaschoco/',
    tag: '⭐ Destacado',
    tecnologias: [{ nombre: 'React', logo: 'assets/logos/react.png' }, { nombre: 'Firebase', logo: 'assets/logos/firebase.png' }, { nombre: 'Node.js', logo: 'assets/logos/nodejs.png' }, { nombre: 'Leaflet', logo: 'assets/logos/leaflet.svg' }, { nombre: 'Vercel', logo: 'assets/logos/vercel.png' }],
    destacado: true,
    estado: 'En vivo'
  }, {
    nombre: 'StyleZone',
    descripcion: 'Landing de tienda online con diseño claro, navegación simple y enfoque en mostrar productos con estilo.',
    imagen: 'assets/logos/stylezone.png',
    link: '#',
    tag: '🛍️ E-commerce',
    tecnologias: [{ nombre: 'HTML', logo: 'assets/logos/html5.png' }, { nombre: 'CSS', logo: 'assets/logos/css.png' }, { nombre: 'JavaScript', logo: 'assets/logos/javascript.png' }],
    estado: 'En mantenimiento'
  }, {
    nombre: 'EcoPacific',
    descripcion: 'Sitio informativo para proyectos ambientales, con estructura profesional y contenido fácil de explorar.',
    imagen: 'assets/logos/ecopacific.png',
    link: '#',
    tag: '🌿 Inspiración',
    tecnologias: [{ nombre: 'HTML', logo: 'assets/logos/html5.png' }, { nombre: 'CSS', logo: 'assets/logos/css.png' }],
    estado: 'En mantenimiento'
  }, {
    nombre: 'AgroMarket',
    descripcion: 'Plataforma de comercio electrónico para productos agrícolas con enfoque en conectar productores y consumidores.',
    imagen: 'assets/logos/agromarket.png',
    link: '#',
    tag: '🌾 Agricultura',
    tecnologias: [{ nombre: 'React', logo: 'assets/logos/react.png' }, { nombre: 'Node.js', logo: 'assets/logos/nodejs.png' }, { nombre: 'MongoDB', logo: 'assets/logos/mongodb.png' }],
    estado: 'En mantenimiento'
  }];
  const handleMantenimiento = (e, estado) => {
    if (estado === 'En mantenimiento') {
      e.preventDefault();
      alert('Este proyecto está en mantenimiento. Estoy trabajando para que vuelva pronto.');
    }
  };
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
  }), "Proyectos en vivo y en mantenimiento"), /*#__PURE__*/React.createElement("h2", {
    className: "font-display font-black text-4xl lg:text-5xl leading-tight text-ink tracking-tight mb-4"
  }, "Proyectos funcionales y en mantenimiento que generan confianza."), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-slate max-w-2xl font-body"
  }, "Muestras de trabajo pensadas para que tus clientes vean resultados reales y fáciles de usar.")), /*#__PURE__*/React.createElement("div", {
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
  }, proyecto.estado === 'En mantenimiento' ? /*#__PURE__*/React.createElement("div", {
    className: "text-center px-4 py-6 rounded-3xl border border-dashed border-slate/40 bg-slate-50"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-display font-bold uppercase text-amber-600 tracking-wide"
  }, "En mantenimiento"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate mt-2"
  }, "Este proyecto está en mantenimiento.")) : /*#__PURE__*/React.createElement("img", {
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
    className: `flex items-center gap-1 text-xs font-display font-semibold ${proyecto.estado === 'En mantenimiento' ? 'text-amber-600' : 'text-green-600'}`
  }, /*#__PURE__*/React.createElement("span", {
    className: `w-1.5 h-1.5 rounded-full animate-livePulse ${proyecto.estado === 'En mantenimiento' ? 'bg-amber-600' : 'bg-green-600'}`
  }), proyecto.estado)), /*#__PURE__*/React.createElement("p", {
    className: "text-sm lg:text-base text-slate leading-relaxed mb-5 flex-1"
  }, proyecto.descripcion), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-border"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, proyecto.tecnologias.map((tech, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex items-center justify-center bg-pearl2 border border-border rounded-lg w-9 h-9",
    title: tech.nombre
  }, /*#__PURE__*/React.createElement("img", {
    src: tech.logo,
    alt: tech.nombre,
    className: "w-5 h-5 object-contain"
  })))), /*#__PURE__*/React.createElement("a", {
    href: proyecto.link,
    onClick: e => handleMantenimiento(e, proyecto.estado),
    target: proyecto.estado === 'En mantenimiento' ? '_self' : '_blank',
    rel: proyecto.estado === 'En mantenimiento' ? undefined : 'noopener noreferrer',
    className: `inline-flex items-center gap-2 ${proyecto.estado === 'En mantenimiento' ? 'bg-slate text-slate6 cursor-not-allowed' : 'bg-blue text-white hover:shadow-blue hover:-translate-y-0.5'} px-4 py-2 rounded-lg font-display font-semibold text-sm transition-all duration-300 whitespace-nowrap`
  }, proyecto.estado === 'En mantenimiento' ? 'En mantenimiento' : 'Ver proyecto', proyecto.estado !== 'En mantenimiento' && /*#__PURE__*/React.createElement("svg", {
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
  }, /*#__PURE__*/React.createElement("strong", {
    className: "text-slate"
  }))));
}