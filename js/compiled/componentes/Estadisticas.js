"use strict";

function Estadisticas() {
  const beneficios = [{
    titulo: 'Mayor presencia digital',
    descripcion: 'Tu negocio se ve profesional y accesible desde cualquier dispositivo.'
  }, {
    titulo: 'Imagen profesional',
    descripcion: 'Una web elegante que transmite confianza a tus clientes.'
  }, {
    titulo: 'Captación de clientes',
    descripcion: 'Llamadas a la acción claras que invitan a cotizar o comprar.'
  }, {
    titulo: 'Sitio rápido y funcional',
    descripcion: 'Experiencias fluidas que mantienen a los visitantes en tu sitio.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "border-t border-b border-border bg-pearl py-16 lg:py-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-10"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-display font-black text-4xl lg:text-5xl leading-tight text-ink tracking-tight mb-4"
  }, "¿Qué obtienes con tu página web?"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-slate max-w-2xl mx-auto font-body"
  }, "Beneficios claros para que tu negocio gane visibilidad, confianza y clientes.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, beneficios.map((item, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "bg-white border border-border rounded-3xl p-7 shadow-xs hover:shadow-md transition-all duration-300 opacity-0 animate-fadeUp",
    style: {
      animationDelay: `${idx * 0.1}s`
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-display font-bold text-xl text-ink mb-3"
  }, item.titulo), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate leading-relaxed"
  }, item.descripcion))))));
}