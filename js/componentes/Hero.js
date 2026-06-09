function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-radial from-blue/6 via-transparent to-transparent"
             style={{
               backgroundImage: 'radial-gradient(ellipse 60% 50% at 75% 40%, rgba(59, 110, 246, 0.06) 0%, transparent 70%)',
               opacity: 1
             }}></div>
        <div className="absolute inset-0"
             style={{
               backgroundImage: 'radial-gradient(ellipse 40% 60% at 20% 70%, rgba(59, 110, 246, 0.04) 0%, transparent 70%)',
             }}></div>
      </div>

      {/* Fine grid */}
      <div className="absolute inset-0 z-0 opacity-30"
           style={{
             backgroundImage: `
               linear-gradient(#e4e8f0 1px, transparent 1px),
               linear-gradient(90deg, #e4e8f0 1px, transparent 1px)
             `,
             backgroundSize: '52px 52px',
             maskImage: 'radial-gradient(ellipse 70% 80% at 55% 40%, black 0%, transparent 100%)'
           }}
           aria-hidden="true"></div>

      <div className="max-w-6xl mx-auto px-7 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-center">
          
          {/* Copy */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-dim border border-blue-mid text-blue px-4 py-2 rounded-full font-display text-xs font-bold tracking-wider uppercase animate-fadeUp">
              <span className="w-1.5 h-1.5 bg-blue rounded-full animate-pulse"></span>
              Disponible para nuevos proyectos
            </div>

            <h1 className="font-display font-black text-5xl lg:text-7xl leading-tight text-ink tracking-tight -mb-2 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
              Diseño páginas web profesionales
              <br />
              que ayudan a conseguir clientes
            </h1>

            <p className="text-lg text-slate leading-relaxed max-w-md font-body animate-fadeUp" style={{ animationDelay: '0.22s' }}>
              Desarrollo soluciones digitales modernas, rápidas y funcionales para negocios y emprendimientos.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2 animate-fadeUp" style={{ animationDelay: '0.36s' }}>
              <a href="#contacto" className="inline-flex items-center gap-2 bg-blue text-white px-7 py-3 rounded-[10px] font-display font-semibold text-sm hover:shadow-blue hover:-translate-y-0.5 transition-all duration-300">
                Cotizar proyecto
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#proyectos" className="inline-flex items-center gap-2 bg-transparent text-ink border-2 border-border2 px-7 py-3 rounded-[10px] font-display font-semibold text-sm hover:border-blue hover:text-blue hover:-translate-y-0.5 transition-all duration-300">
                Ver proyectos
              </a>
            </div>

            <div className="flex items-center gap-3 pt-8 animate-fadeUp" style={{ animationDelay: '0.5s' }}>
              <div className="flex -space-x-1">
                <span className="w-7 h-7 rounded-full bg-pearl2 border-2 border-white flex items-center justify-center text-sm">🎯</span>
                <span className="w-7 h-7 rounded-full bg-pearl2 border-2 border-white flex items-center justify-center text-sm">✨</span>
                <span className="w-7 h-7 rounded-full bg-pearl2 border-2 border-white flex items-center justify-center text-sm">🚀</span>
              </div>
              <p className="text-xs font-body text-slate2">
                <strong className="text-slate">Diseño · Resultados · Impacto</strong>
                <br />
                Sitios que atraen clientes.
              </p>
            </div>
          </div>

          {/* Visual Logo */}
          <div className="flex flex-col items-center justify-center relative animate-fadeUp mt-10 lg:mt-0" style={{ animationDelay: '0.65s' }}>
            <div className="relative w-full h-96 flex flex-col items-center justify-center">
              {/* Logo container - no background, just the logo */}
              <div 
                className="relative flex items-center justify-center"
                style={{ animation: 'floatY 5s ease-in-out infinite alternate' }}
              >
                <img 
                  src="assets/logos/logo m.png" 
                  alt="Maturanna Logo"
                    className="w-44 h-44 sm:w-56 sm:h-56 lg:w-80 lg:h-80 object-contain drop-shadow-xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback if image doesn't load */}
                <div style={{display: 'none'}} className="w-56 h-56 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-dim to-blue-mid flex items-center justify-center text-9xl font-display font-black text-blue">
                  M
                </div>
              </div>
              
              {/* Text below */}
              <div className="text-center mt-8">
                <h2 className="font-display font-black text-4xl text-ink tracking-tight">
                  Maturanna <span className="text-blue">Tech</span>
                </h2>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
