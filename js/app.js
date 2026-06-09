function ModoOscuroFlotante({ modoOscuro, toggleModoOscuro }) {
  return (
    <button
      onClick={toggleModoOscuro}
      className="fixed right-6 bottom-6 z-40 inline-flex items-center justify-center rounded-full border border-border bg-slate-100 text-slate w-12 h-12 p-0 font-display text-lg hover:bg-slate-200 transition-all duration-200 shadow-lg"
      aria-label="Cambiar modo oscuro"
    >
      {modoOscuro ? '☀️' : '🌙'}
    </button>
  );
}

function App() {
  const [modoOscuro, setModoOscuro] = React.useState(false);

  React.useEffect(() => {
    const savedModo = localStorage.getItem('modoOscuro') === 'true';
    setModoOscuro(savedModo);
    document.documentElement.classList.toggle('dark', savedModo);
  }, []);

  const toggleModoOscuro = () => {
    const nuevoModo = !modoOscuro;
    setModoOscuro(nuevoModo);
    localStorage.setItem('modoOscuro', nuevoModo);
    document.documentElement.classList.toggle('dark', nuevoModo);
  };

  return (
    <>
      <Encabezado />
      <ModoOscuroFlotante modoOscuro={modoOscuro} toggleModoOscuro={toggleModoOscuro} />
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
console.info('[Maturana Tech] ✓ Aplicación React cargada correctamente');
