"use strict";

function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "inicio",
    className: "min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-0",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-radial from-blue/6 via-transparent to-transparent",
    style: {
      backgroundImage: 'radial-gradient(ellipse 60% 50% at 75% 40%, rgba(59, 110, 246, 0.06) 0%, transparent 70%)',
      opacity: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0",
    style: {
      backgroundImage: 'radial-gradient(ellipse 40% 60% at 20% 70%, rgba(59, 110, 246, 0.04) 0%, transparent 70%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-0 opacity-30",
    style: {
      backgroundImage: `
               linear-gradient(#e4e8f0 1px, transparent 1px),
               linear-gradient(90deg, #e4e8f0 1px, transparent 1px)
             `,
      backgroundSize: '52px 52px',
      maskImage: 'radial-gradient(ellipse 70% 80% at 55% 40%, black 0%, transparent 100%)'
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-7 w-full relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 bg-blue-dim border border-blue-mid text-blue px-4 py-2 rounded-full font-display text-xs font-bold tracking-wider uppercase animate-fadeUp"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 bg-blue rounded-full animate-pulse"
  }), "Disponible para nuevos proyectos"), /*#__PURE__*/React.createElement("h1", {
    className: "font-display font-black text-5xl lg:text-7xl leading-tight text-ink tracking-tight -mb-2 animate-fadeUp",
    style: {
      animationDelay: '0.1s'
    }
  }, "Diseño páginas web profesionales", /*#__PURE__*/React.createElement("br", null), "que ayudan a conseguir clientes"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-slate leading-relaxed max-w-md font-body animate-fadeUp",
    style: {
      animationDelay: '0.22s'
    }
  }, "Desarrollo soluciones digitales modernas, rápidas y funcionales para negocios y emprendimientos."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row flex-wrap gap-3 pt-2 animate-fadeUp",
    style: {
      animationDelay: '0.36s'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#proyectos",
    className: "inline-flex items-center gap-2 bg-blue text-white px-7 py-3 rounded-[10px] font-display font-semibold text-sm hover:shadow-blue hover:-translate-y-0.5 transition-all duration-300"
  }, "Cotizar proyecto", /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5l7 7-7 7"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "#contacto",
    className: "inline-flex items-center gap-2 bg-transparent text-ink border-2 border-border2 px-7 py-3 rounded-[10px] font-display font-semibold text-sm hover:border-blue hover:text-blue hover:-translate-y-0.5 transition-all duration-300"
  }, "Ver proyectos")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 pt-8 animate-fadeUp",
    style: {
      animationDelay: '0.5s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex -space-x-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-7 h-7 rounded-full bg-pearl2 border-2 border-white flex items-center justify-center text-sm"
  }, "\uD83C\uDFA8"), /*#__PURE__*/React.createElement("span", {
    className: "w-7 h-7 rounded-full bg-pearl2 border-2 border-white flex items-center justify-center text-sm"
  }, "\u26A1"), /*#__PURE__*/React.createElement("span", {
    className: "w-7 h-7 rounded-full bg-pearl2 border-2 border-white flex items-center justify-center text-sm"
  }, "\uD83D\uDE80")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-body text-slate2"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "text-slate"
  }, "Dise\xF1o \xB7 C\xF3digo \xB7 Resultados"), /*#__PURE__*/React.createElement("br", null), "Proyectos reales en producci\xF3n"))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center relative animate-fadeUp mt-10 lg:mt-0",
    style: {
      animationDelay: '0.65s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full h-96 flex flex-col items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-center justify-center",
    style: {
      animation: 'floatY 5s ease-in-out infinite alternate'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logos/logo m.png",
    alt: "Maturanna Logo",
    className: "w-44 h-44 sm:w-56 sm:h-56 lg:w-80 lg:h-80 object-contain drop-shadow-xl",
    onError: e => {
      e.target.style.display = 'none';
      e.target.nextElementSibling.style.display = 'flex';
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'none'
    },
    className: "w-56 h-56 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-dim to-blue-mid flex items-center justify-center text-9xl font-display font-black text-blue"
  }, "M")), /*#__PURE__*/React.createElement("div", {
    className: "text-center mt-8"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-display font-black text-4xl text-ink tracking-tight"
  }, "Maturanna ", /*#__PURE__*/React.createElement("span", {
    className: "text-blue"
  }, "Tech"))))))));
}