function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden bg-white">
      {/* Background cleared to white */}
      <div className="absolute inset-0 z-0 bg-white" aria-hidden="true"></div>

      <div className="max-w-6xl mx-auto px-7 w-full relative z-10">
        <div className="relative">
          <div className="max-w-6xl mx-auto px-7 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              {/* Left: Text */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-teal-dim border border-teal-mid text-teal px-4 py-2 rounded-full font-display text-xs font-bold tracking-wider uppercase animate-fadeUp">
                  <span className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse"></span>
                  Disponible para nuevos proyectos
                </div>

                <h1 className="font-display font-black text-5xl lg:text-6xl leading-tight text-ink tracking-tight -mb-2">
                  Transformo ideas en
                  <br />
                  productos digitales que venden
                </h1>

                <p className="text-lg text-slate leading-relaxed max-w-xl">
                  Desarrollo sitios web optimizados, con foco en velocidad y conversión. Diseño limpio, interacción cuidada y entregas rápidas.
                </p>

                <div className="flex flex-wrap gap-3 mt-2">
                  <a href="#contacto" className="inline-flex items-center gap-2 bg-teal text-white px-6 py-3 rounded-[10px] font-display font-semibold text-sm hover:shadow-teal transition-all duration-300">
                    Empezar proyecto
                  </a>
                  <a href="#proyectos" className="inline-flex items-center gap-2 bg-transparent text-ink border-2 border-border2 px-6 py-3 rounded-[10px] font-display font-semibold text-sm hover:border-teal hover:text-teal transition-all duration-300">
                    Ver proyectos
                  </a>
                </div>

              </div>

              {/* Right: Card with logo and decorative shapes */}
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md flex items-center justify-center">
                  <img
                    src="assets/logos/logo m.png"
                    alt="Maturanna Logo"
                    className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-contain opacity-70"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
