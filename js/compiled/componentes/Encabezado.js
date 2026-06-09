"use strict";

function Encabezado() {
  const [menuAbierto, setMenuAbierto] = React.useState(false);
  const [enScroll, setEnScroll] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      setEnScroll(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${enScroll ? 'bg-white/88 backdrop-blur-[20px] border-b border-border shadow-sm' : 'bg-white/88 backdrop-blur-[20px]'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-7"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "flex items-center justify-between flex-wrap h-[68px] gap-4"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#inicio",
    className: "font-display text-lg font-black tracking-tight text-ink whitespace-nowrap flex-shrink-0"
  }, "Maturanna ", /*#__PURE__*/React.createElement("span", {
    className: "text-blue"
  }, "Tech")), /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:flex items-center gap-8 ml-auto"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#inicio",
    className: "font-display text-sm font-semibold text-slate hover:text-ink transition-colors relative group"
  }, "Inicio", /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-0 left-0 w-0 h-0.5 bg-blue group-hover:w-full transition-all duration-200"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#proyectos",
    className: "font-display text-sm font-semibold text-slate hover:text-ink transition-colors relative group"
  }, "Proyectos", /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-0 left-0 w-0 h-0.5 bg-blue group-hover:w-full transition-all duration-200"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#servicios",
    className: "font-display text-sm font-semibold text-slate hover:text-ink transition-colors relative group"
  }, "Servicios", /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-0 left-0 w-0 h-0.5 bg-blue group-hover:w-full transition-all duration-200"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#sobre-mi",
    className: "font-display text-sm font-semibold text-slate hover:text-ink transition-colors relative group"
  }, "Sobre m\xED", /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-0 left-0 w-0 h-0.5 bg-blue group-hover:w-full transition-all duration-200"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#contacto",
    className: "font-display text-sm font-semibold text-slate hover:text-ink transition-colors relative group"
  }, "Contacto", /*#__PURE__*/React.createElement("span", {
    className: "absolute bottom-0 left-0 w-0 h-0.5 bg-blue group-hover:w-full transition-all duration-200"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "#contacto",
    className: "hidden lg:inline-flex items-center gap-2 bg-blue text-white px-7 py-3 rounded-[10px] font-display font-semibold text-sm hover:shadow-blue hover:-translate-y-0.5 transition-all duration-300 ml-2"
  }, "Hablemos"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMenuAbierto(!menuAbierto),
    className: "lg:hidden inline-flex items-center justify-center ml-auto rounded-full bg-blue/10 text-blue border border-blue/20 hover:bg-blue/20 transition-all duration-200 p-3",
    "aria-label": "Men\xFA"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl"
  }, "☰"))),
 /*#__PURE__*/React.createElement("div", {
    className: `lg:hidden overflow-hidden transition-all duration-300 bg-white border-t ${menuAbierto ? 'max-h-96 border-border' : 'max-h-0'}`
  }, /*#__PURE__*/React.createElement("a", {
    href: "#inicio",
    onClick: () => setMenuAbierto(false),
    className: "block px-7 py-3.5 font-display text-sm font-semibold text-slate border-b border-border hover:text-blue transition-colors"
  }, "Inicio"), /*#__PURE__*/React.createElement("a", {
    href: "#proyectos",
    onClick: () => setMenuAbierto(false),
    className: "block px-7 py-3.5 font-display text-sm font-semibold text-slate border-b border-border hover:text-blue transition-colors"
  }, "Proyectos"), /*#__PURE__*/React.createElement("a", {
    href: "#servicios",
    onClick: () => setMenuAbierto(false),
    className: "block px-7 py-3.5 font-display text-sm font-semibold text-slate border-b border-border hover:text-blue transition-colors"
  }, "Servicios"), /*#__PURE__*/React.createElement("a", {
    href: "#sobre-mi",
    onClick: () => setMenuAbierto(false),
    className: "block px-7 py-3.5 font-display text-sm font-semibold text-slate border-b border-border hover:text-blue transition-colors"
  }, "Sobre m\xED"), /*#__PURE__*/React.createElement("a", {
    href: "#contacto",
    onClick: () => setMenuAbierto(false),
    className: "block px-7 py-3.5 font-display text-sm font-semibold text-slate hover:text-blue transition-colors"
  }, "Contacto"))));
}