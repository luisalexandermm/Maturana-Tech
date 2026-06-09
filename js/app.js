function App() {
  return (
    <>
      <Encabezado />
      <Hero />
      <Estadisticas />
      <Proyectos />
      <Servicios />
      <SobreMi />
      <CtaBand />
      <Contacto />
      <Footer />
    </>
  );
}

// Renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Log de confirmación
console.info('[Maturanna Innovate Tech] ✓ Aplicación React cargada correctamente');
