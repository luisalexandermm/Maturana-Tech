function Encabezado() {
  const [menuAbierto, setMenuAbierto] = React.useState(false);
  const [enScroll, setEnScroll] = React.useState(false);
  const [modoOscuro, setModoOscuro] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setEnScroll(window.scrollY > 20);
    };
    const savedModo = localStorage.getItem('modoOscuro') === 'true';
    setModoOscuro(savedModo);
    document.documentElement.classList.toggle('dark', savedModo);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleModoOscuro = () => {
    const nuevoModo = !modoOscuro;
    setModoOscuro(nuevoModo);
    localStorage.setItem('modoOscuro', nuevoModo);
    document.documentElement.classList.toggle('dark', nuevoModo);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      enScroll 
        ? 'bg-white/88 backdrop-blur-[20px] border-b border-border shadow-sm' 
        : 'bg-white/88 backdrop-blur-[20px]'
    }`}>
      <div className="max-w-6xl mx-auto px-7">
          <nav className="flex items-center justify-between flex-wrap h-[68px] gap-4">
          {/* Logo */}
          <a href="#inicio" className="font-display text-lg font-black tracking-tight text-ink whitespace-nowrap flex-shrink-0 flex items-center gap-3">
            <img src="assets/logos/logo%20m.png" alt="Maturana Tech" className="w-8 h-8 object-contain" />
            <span>Maturana <span className="text-blue">Tech</span></span>
          </a>

          {/* Nav links (desktop) */}
          <div className="hidden lg:flex items-center gap-4 ml-auto">
            <a href="#inicio" className="font-display text-sm font-semibold text-slate hover:text-ink transition-colors relative group">
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue group-hover:w-full transition-all duration-200"></span>
            </a>
            <a href="#proyectos" className="font-display text-sm font-semibold text-slate hover:text-ink transition-colors relative group">
              Proyectos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue group-hover:w-full transition-all duration-200"></span>
            </a>
            <a href="#servicios" className="font-display text-sm font-semibold text-slate hover:text-ink transition-colors relative group">
              Servicios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue group-hover:w-full transition-all duration-200"></span>
            </a>
            <a href="#sobre-mi" className="font-display text-sm font-semibold text-slate hover:text-ink transition-colors relative group">
              Sobre mí
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue group-hover:w-full transition-all duration-200"></span>
            </a>
            <a href="#contacto" className="font-display text-sm font-semibold text-slate hover:text-ink transition-colors relative group">
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue group-hover:w-full transition-all duration-200"></span>
            </a>
          </div>

          <button
            onClick={toggleModoOscuro}
            className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full border border-border bg-slate-100 text-slate w-12 h-12 p-0 font-display font-semibold text-sm hover:bg-slate-200 transition-all duration-200 shadow-lg"
            aria-label="Cambiar modo oscuro"
          >
            {modoOscuro ? '☀️' : '🌙'}
          </button>

          {/* CTA Button (desktop) */}
          <a href="#contacto" className="hidden lg:inline-flex items-center gap-2 bg-blue text-white px-7 py-3 rounded-[10px] font-display font-semibold text-sm hover:shadow-blue hover:-translate-y-0.5 transition-all duration-300 ml-2">
            Hablemos
          </a>

          {/* Burger menu (mobile) */}
          <button 
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="lg:hidden inline-flex items-center justify-center ml-auto rounded-full bg-blue/10 text-blue border border-blue/20 hover:bg-blue/20 transition-all duration-200 p-3"
            aria-label="Menú"
          >
            <span className="text-xl">☰</span>
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t ${
        menuAbierto ? 'max-h-96 border-border' : 'max-h-0'
      }`}>
        <button
          onClick={toggleModoOscuro}
          className="w-full text-left px-7 py-3.5 font-display text-sm font-semibold text-slate border-b border-border hover:text-blue transition-colors"
        >
          {modoOscuro ? 'Modo claro' : 'Modo oscuro'}
        </button>
        <a href="#inicio" onClick={() => setMenuAbierto(false)} className="block px-7 py-3.5 font-display text-sm font-semibold text-slate border-b border-border hover:text-blue transition-colors">
          Inicio
        </a>
        <a href="#proyectos" onClick={() => setMenuAbierto(false)} className="block px-7 py-3.5 font-display text-sm font-semibold text-slate border-b border-border hover:text-blue transition-colors">
          Proyectos
        </a>
        <a href="#servicios" onClick={() => setMenuAbierto(false)} className="block px-7 py-3.5 font-display text-sm font-semibold text-slate border-b border-border hover:text-blue transition-colors">
          Servicios
        </a>
        <a href="#sobre-mi" onClick={() => setMenuAbierto(false)} className="block px-7 py-3.5 font-display text-sm font-semibold text-slate border-b border-border hover:text-blue transition-colors">
          Sobre mí
        </a>
        <a href="#contacto" onClick={() => setMenuAbierto(false)} className="block px-7 py-3.5 font-display text-sm font-semibold text-slate hover:text-blue transition-colors">
          Contacto
        </a>
      </div>
    </header>
  );
}
