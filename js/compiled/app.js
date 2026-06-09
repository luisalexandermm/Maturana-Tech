"use strict";

function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Encabezado, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Estadisticas, null), /*#__PURE__*/React.createElement(Proyectos, null), /*#__PURE__*/React.createElement(Servicios, null), /*#__PURE__*/React.createElement(SobreMi, null), /*#__PURE__*/React.createElement(CtaBand, null), /*#__PURE__*/React.createElement(Contacto, null), /*#__PURE__*/React.createElement(Footer, null));
}

// Renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));

// Log de confirmación
console.info('[Maturana Tech] ✓ Aplicación React cargada correctamente');
