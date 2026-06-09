"use strict";

function Footer() {
  const enlaces = [{
    nombre: 'Inicio',
    href: '#inicio'
  }, {
    nombre: 'Proyectos',
    href: '#proyectos'
  }, {
    nombre: 'Servicios',
    href: '#servicios'
  }, {
    nombre: 'Sobre mí',
    href: '#sobre-mi'
  }, {
    nombre: 'Contacto',
    href: '#contacto'
  }];
  const redes = [{
    icono: 'github',
    link: 'https://github.com/luisalexandermm'
  }, {
    icono: 'whatsapp',
    link: 'https://wa.me/573145312045'
  }, {
    icono: 'email',
    link: 'mailto:AlexanderMaturana76@gmail.com'
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "bg-ink py-16 lg:py-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:flex-row lg:items-start justify-between flex-wrap gap-8 lg:gap-12 pb-9 border-b border-white/8 mb-7 lg:mb-7"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display text-lg font-black text-white"
  }, "Maturanna ", /*#__PURE__*/React.createElement("span", {
    className: "text-blue"
  }, "Innovate"), " Tech"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-white/35 mt-1.5 font-body"
  }, "C\xF3digo \xB7 Dise\xF1o \xB7 Innovaci\xF3n \u2014 Quibd\xF3, Colombia")), /*#__PURE__*/React.createElement("nav", {
    className: "flex gap-6 lg:gap-8 flex-wrap"
  }, enlaces.map((link, idx) => /*#__PURE__*/React.createElement("a", {
    key: idx,
    href: link.href,
    className: "font-display text-sm font-medium text-white/45 hover:text-white transition-colors"
  }, link.nombre)))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:flex-row items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-white/25"
  }, "\xA9 2025 Maturanna Innovate Tech. Todos los derechos reservados."), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4"
  }, redes.map((red, idx) => {
    const iconSvg = {
      github: /*#__PURE__*/React.createElement("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "rgba(255,255,255,.55)"
      }, /*#__PURE__*/React.createElement("path", {
        fillRule: "evenodd",
        d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
        clipRule: "evenodd"
      })),
      whatsapp: /*#__PURE__*/React.createElement("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "rgba(255,255,255,.55)"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.6a.75.75 0 00.916.916l5.748-1.471A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.698-.506-5.25-1.391l-.376-.219-3.89.996.996-3.89-.219-.376A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
      })),
      email: /*#__PURE__*/React.createElement("svg", {
        width: "16",
        height: "16",
        fill: "none",
        stroke: "rgba(255,255,255,.55)",
        strokeWidth: "1.8",
        viewBox: "0 0 24 24"
      }, /*#__PURE__*/React.createElement("rect", {
        x: "2",
        y: "4",
        width: "20",
        height: "16",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m2 7 10 7 10-7"
      }))
    };
    return /*#__PURE__*/React.createElement("a", {
      key: idx,
      href: red.link,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "w-9 h-9 rounded-lg bg-white/6 border border-white/8 flex items-center justify-center hover:bg-blue/15 hover:border-blue/30 transition-all duration-300"
    }, iconSvg[red.icono]);
  })))));
}