"use strict";

function SobreMi() {
  const habilidades = [{ nombre: 'React', logo: 'assets/logos/react.png' }, { nombre: 'Node.js', logo: 'assets/logos/nodejs.png' }, { nombre: 'Firebase', logo: 'assets/logos/firebase.png' }, { nombre: 'Tailwind CSS', logo: 'assets/logos/tailwindcss.png' }, { nombre: 'Express', logo: 'assets/logos/express.png' }, { nombre: 'JavaScript', logo: 'assets/logos/javascript.png' }, { nombre: 'HTML / CSS', logo: 'assets/logos/html5.png' }, { nombre: 'GitHub', logo: 'assets/logos/github.png' }, { nombre: 'Figma', logo: 'assets/logos/figma.png' }, { nombre: 'Render', logo: 'assets/logos/render.png' }, { nombre: 'Vercel', logo: 'assets/logos/vercel.png' }];
  return /*#__PURE__*/React.createElement("section", {
    id: "sobre-mi",
    className: "py-24 lg:py-32 bg-transparent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative justify-self-center opacity-0 animate-fadeUp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-80 h-80 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "absolute inset-0 w-full h-full",
    viewBox: "0 0 320 320",
    style: {
      animation: 'spinWave 6s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "waveStrokeGradient",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#3b6ef6"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "stop-color",
    values: "#3b6ef6;#7c3aed;#3b6ef6",
    dur: "8s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "#7c3aed"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "stop-color",
    values: "#7c3aed;#4f46e5;#7c3aed",
    dur: "8s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#3b6ef6"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "stop-color",
    values: "#3b6ef6;#7c3aed;#3b6ef6",
    dur: "8s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/React.createElement("filter", {
    id: "waveFilter"
  }, /*#__PURE__*/React.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: "0.04",
    numOctaves: "2",
    result: "noise",
    seed: "3"
  }), /*#__PURE__*/React.createElement("feDisplacementMap", {
    in: "SourceGraphic",
    in2: "noise",
    scale: "10",
    xChannelSelector: "R",
    yChannelSelector: "G"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "160",
    cy: "160",
    r: "145",
    fill: "none",
    stroke: "url(#waveStrokeGradient)",
    strokeWidth: "4",
    filter: "url(#waveFilter)",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative w-72 h-72 z-10 rounded-full overflow-hidden border-2 border-blue-mid/40 bg-transparent shadow-[0_0_40px_rgba(59,110,246,0.12)]"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/imagenes/yo.png",
    alt: "Perfil",
    className: "w-full h-full object-cover rounded-full bg-transparent",
    onError: e => {
      e.target.style.display = 'none';
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-blue text-white px-4 py-2.5 rounded-full text-xs font-display font-bold shadow-blue z-20"
  }, "Disponible \uD83D\uDFE2")), /*#__PURE__*/React.createElement("div", {
    className: "opacity-0 animate-fadeUp",
    style: {
      animationDelay: '0.12s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 bg-blue-dim border border-blue-mid text-blue px-4 py-2 rounded-full font-display text-xs font-bold tracking-wider uppercase mb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 bg-blue rounded-full"
  }), "Sobre m\xED"), /*#__PURE__*/React.createElement("h2", {
    className: "font-display font-black text-4xl lg:text-5xl leading-tight text-ink tracking-tight mt-4 mb-6"
  }, "Hola, soy", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-blue"
  }, "Luis Alexander.")), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-slate leading-relaxed mb-4 font-body"
  }, "Soy estudiante de Ingeniería en Sistemas y desarrollador web apasionado por crear soluciones digitales modernas para negocios y emprendimientos."), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-slate leading-relaxed mb-8 font-body"
  }, "Cada proyecto se construye con diseño claro, velocidad real y un enfoque práctico en resultados que generen contactos y ventas."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-8"
  }, habilidades.map((skill, idx) => /*#__PURE__*/React.createElement("span", {
    key: idx,
    className: "bg-blue-dim text-blue border border-blue-mid px-3 py-1.5 rounded-lg text-xs font-display font-bold tracking-wide hover:-translate-y-0.5 transition-all duration-200 cursor-default flex items-center gap-2"
  }, skill.logo && /*#__PURE__*/React.createElement("img", {
    src: skill.logo,
    alt: skill.nombre,
    className: "w-4 h-4 object-contain"
  }), skill.nombre))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-4"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contacto",
    className: "inline-flex items-center gap-2 bg-blue text-white px-7 py-3 rounded-lg font-display font-semibold text-sm hover:shadow-blue hover:-translate-y-0.5 transition-all duration-300"
  }, "Trabajemos juntos", /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5l7 7-7 7"  }))), /*#__PURE__*/React.createElement("a", {
    href: "assets/catalogo.pdf",
    download: true,
    className: "inline-flex items-center gap-2 bg-slate text-slate9 px-7 py-3 rounded-lg font-display font-semibold text-sm hover:bg-slate-700 transition-all duration-300"
  }, "Descargar catálogo", /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v12M8 11l4 4 4-4M4 18h16"  }))))))));
}