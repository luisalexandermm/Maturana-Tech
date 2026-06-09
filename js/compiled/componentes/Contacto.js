"use strict";

function Contacto() {
  const canales = [{
    icono: '💬',
    etiqueta: 'WhatsApp',
    valor: '+57 314 531 2045',
    hint: 'Respondo en minutos →',
    link: 'https://wa.me/573145312045?text=Hola%20Luis%2C%20me%20interesa%20un%20proyecto',
    bgIcon: 'bg-green-100'
  }, {
    icono: '🐙',
    etiqueta: 'GitHub',
    valor: 'luisalexandermm',
    hint: 'Ver repositorios →',
    link: 'https://github.com/luisalexandermm',
    bgIcon: 'bg-pearl2'
  }, {
    icono: '✉️',
    etiqueta: 'Correo electrónico',
    valor: 'contacto.maturanainnovate@gmail.com',
    hint: 'Enviar email →',
    link: 'mailto:contacto.maturanainnovate@gmail.com',
    bgIcon: 'bg-blue-dim'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    className: "py-24 lg:py-32 bg-pearl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-16 opacity-0 animate-fadeUp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 bg-blue-dim border border-blue-mid text-blue px-4 py-2 rounded-full font-display text-xs font-bold tracking-wider uppercase mb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 bg-blue rounded-full"
  }), "Contacto"), /*#__PURE__*/React.createElement("h2", {
    className: "font-display font-black text-4xl lg:text-5xl leading-tight text-ink tracking-tight mb-4"
  }, "Hablemos"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-slate font-body max-w-2xl mx-auto"
  }, "\xBFListo para construir algo incre\xEDble? Elige tu canal preferido.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 justify-items-center"
  }, canales.map((canal, idx) => /*#__PURE__*/React.createElement("a", {
    key: idx,
    href: canal.link,
    target: "_blank",
    rel: "noopener noreferrer",
    className: `w-full max-w-[420px] box-border bg-white border border-border rounded-2xl p-8 lg:p-10 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fadeUp flex flex-col items-center ${canal.etiqueta === 'Correo electrónico' ? 'md:col-span-3 lg:col-span-2' : ''}`,
    style: {
      animationDelay: `${idx * 0.12}s`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `w-14 h-14 ${canal.bgIcon} rounded-2xl flex items-center justify-center text-2xl mb-4`
  }, canal.icono), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-display font-bold tracking-widest text-slate2 uppercase mb-2"
  }, canal.etiqueta), /*#__PURE__*/React.createElement("div", {
    className: "text-lg lg:text-xl font-display font-bold text-ink mb-2 break-words"
  }, canal.valor), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-blue font-display font-semibold"
  }, canal.hint))))));
}