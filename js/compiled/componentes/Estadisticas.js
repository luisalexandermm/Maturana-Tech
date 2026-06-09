"use strict";

function Estadisticas() {
  const stats = [{
    numero: '5',
    sufijo: '+',
    etiqueta: 'Proyectos completados'
  }, {
    numero: '100',
    sufijo: '%',
    etiqueta: 'Responsive design'
  }, {
    numero: '1',
    sufijo: '+',
    etiqueta: 'Años de experiencia'
  }, {
    numero: '6',
    sufijo: '+',
    etiqueta: 'Tecnologías dominadas'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "border-t border-b border-border bg-pearl py-8 lg:py-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap justify-around items-center gap-6 lg:gap-0"
  }, stats.map((stat, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "text-center opacity-0 animate-fadeUp",
    style: {
      animationDelay: `${idx * 0.08}s`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display text-4xl lg:text-5xl font-black tracking-tighter text-ink"
  }, stat.numero, /*#__PURE__*/React.createElement("span", {
    className: "text-blue"
  }, stat.sufijo)), /*#__PURE__*/React.createElement("div", {
    className: "text-xs lg:text-sm text-slate2 font-body mt-1"
  }, stat.etiqueta))))));
}