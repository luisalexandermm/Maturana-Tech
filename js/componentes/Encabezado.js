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
            <span>Maturana <span className="text-teal">Tech</span></span>
          </a>

          {/* Nav links (desktop) */}
          <div className="hidden lg:flex items-center gap-4 ml-auto">
            <a href="#inicio" className="font-display text-sm font-semibold text-slate hover:text-ink transition-colors relative group">
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-200"></span>
            </a>
            <a href="#proyectos" className="font-display text-sm font-semibold text-slate hover:text-ink transition-colors relative group">
              Proyectos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-200"></span>
            </a>
            <a href="#servicios" className="font-display text-sm font-semibold text-slate hover:text-ink transition-colors relative group">
              Servicios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-200"></span>
            </a>
            <a href="#sobre-mi" className="font-display text-sm font-semibold text-slate hover:text-ink transition-colors relative group">
              Sobre mí
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-200"></span>
            </a>
            <a href="#contacto" className="font-display text-sm font-semibold text-slate hover:text-ink transition-colors relative group">
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-200"></span>
            </a>
          </div>

          {/* CTA Button (desktop) */}
          <a href="#contacto" className="hidden lg:inline-flex items-center gap-2 bg-teal text-white px-7 py-3 rounded-[10px] font-display font-semibold text-sm hover:shadow-teal hover:-translate-y-0.5 transition-all duration-300 ml-2">
            Hablemos
          </a>

          {/* Burger menu (mobile) */}
          <button 
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="lg:hidden inline-flex items-center justify-center ml-auto rounded-full bg-teal/10 text-teal border border-teal/20 hover:bg-teal/20 transition-all duration-200 p-3"
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
        <a href="#inicio" onClick={() => setMenuAbierto(false)} className="block px-7 py-3.5 font-display text-sm font-semibold text-slate border-b border-border hover:text-teal transition-colors">
          Inicio
        </a>
        <a href="#proyectos" onClick={() => setMenuAbierto(false)} className="block px-7 py-3.5 font-display text-sm font-semibold text-slate border-b border-border hover:text-teal transition-colors">
          Proyectos
        </a>
        <a href="#servicios" onClick={() => setMenuAbierto(false)} className="block px-7 py-3.5 font-display text-sm font-semibold text-slate border-b border-border hover:text-teal transition-colors">
          Servicios
        </a>
        <a href="#sobre-mi" onClick={() => setMenuAbierto(false)} className="block px-7 py-3.5 font-display text-sm font-semibold text-slate border-b border-border hover:text-teal transition-colors">
          Sobre mí
        </a>
        <a href="#contacto" onClick={() => setMenuAbierto(false)} className="block px-7 py-3.5 font-display text-sm font-semibold text-slate hover:text-teal transition-colors">
          Contacto
        </a>
      </div>
    </header>
  );
}
