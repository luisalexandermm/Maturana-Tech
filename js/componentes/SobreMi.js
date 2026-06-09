function SobreMi() {
  const habilidades = ['React', 'Node.js', 'Firebase', 'Tailwind CSS', 'Express', 'JavaScript', 'HTML / CSS', 'Git'];

  return (
    <section id="sobre-mi" className="py-24 lg:py-32 bg-transparent">
      <div className="max-w-6xl mx-auto px-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Avatar with animated wavy line background */}
          <div className="relative justify-self-center opacity-0 animate-fadeUp">
            {/* Animated wavy circular line */}
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Wavy circle line with color animation */}
              <svg 
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 320 320"
                style={{ animation: 'spinWave 6s ease-in-out infinite' }}
              >
                <defs>
                  <linearGradient id="waveStrokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b6ef6">
                      <animate attributeName="stop-color" values="#3b6ef6;#7c3aed;#3b6ef6" dur="8s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="#7c3aed">
                      <animate attributeName="stop-color" values="#7c3aed;#4f46e5;#7c3aed" dur="8s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#3b6ef6">
                      <animate attributeName="stop-color" values="#3b6ef6;#7c3aed;#3b6ef6" dur="8s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                  <filter id="waveFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" result="noise" seed="3" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                </defs>
                {/* Wavy stroke circle */}
                <circle 
                  cx="160" 
                  cy="160" 
                  r="145" 
                  fill="none"
                  stroke="url(#waveStrokeGradient)"
                  strokeWidth="4"
                  filter="url(#waveFilter)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Photo container - circular, no background */}
              <div className="relative w-72 h-72 z-10 rounded-full overflow-hidden border-2 border-blue-mid/40 bg-transparent shadow-[0_0_40px_rgba(59,110,246,0.12)]">
                <img 
                  src="assets/imagenes/yo.png"
                  alt="Perfil"
                  className="w-full h-full object-cover rounded-full bg-transparent"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-blue text-white px-4 py-2.5 rounded-full text-xs font-display font-bold shadow-blue z-20">
              Disponible 🟢
            </div>
          </div>

          {/* Text */}
          <div className="opacity-0 animate-fadeUp" style={{ animationDelay: '0.12s' }}>
            <div className="inline-flex items-center gap-2 bg-blue-dim border border-blue-mid text-blue px-4 py-2 rounded-full font-display text-xs font-bold tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 bg-blue rounded-full"></span>
              Sobre mí
            </div>

            <h2 className="font-display font-black text-4xl lg:text-5xl leading-tight text-ink tracking-tight mt-4 mb-6">
              Hola, soy<br /><span className="text-blue">Luis Alexander.</span>
            </h2>

            <p className="text-lg text-slate leading-relaxed mb-4 font-body">
              Estudiante de Ingeniería en Sistemas y desarrollador web autodidacta enfocado en construir soluciones modernas y funcionales. Creo desde Quibdó, Chocó — Colombia.
            </p>

            <p className="text-lg text-slate leading-relaxed mb-8 font-body">
              Me apasiona combinar diseño elegante con código sólido. Cada proyecto que entrego está pensado para ser escalable, accesible y listo para producción real.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {habilidades.map((skill, idx) => (
                <span 
                  key={idx}
                  className="bg-blue-dim text-blue border border-blue-mid px-3 py-1.5 rounded-lg text-xs font-display font-bold tracking-wide hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contacto" className="inline-flex items-center gap-2 bg-blue text-white px-7 py-3 rounded-lg font-display font-semibold text-sm hover:shadow-blue hover:-translate-y-0.5 transition-all duration-300">
                Trabajemos juntos
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = 'assets/catalogo.pdf';
                  link.download = 'catalogo.pdf';
                  link.click();
                }}
                className="inline-flex items-center gap-2 bg-blue-dim border border-blue-mid text-blue px-7 py-3 rounded-lg font-display font-semibold text-sm hover:bg-blue hover:text-white hover:shadow-blue hover:-translate-y-0.5 transition-all duration-300"
              >
                Ver catálogo
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
