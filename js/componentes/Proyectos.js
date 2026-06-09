function Proyectos() {
  const proyectos = [
    {
      nombre: 'Vías del Chocó',
      descripcion: 'Panel de monitoreo con estado de vías en tiempo real. Arquitectura React + Firebase para carga dinámica de datos, actualización automatizada y despliegue en Vercel.',
      imagen: 'assets/logos/viaschoco.png',
      link: 'https://viaschoco.vercel.app/',
      tag: '⭐ Destacado',
      tecnologias: [
        { nombre: 'React', logo: 'assets/logos/react.png' },
        { nombre: 'Firebase', logo: 'assets/logos/firebase.png' },
        { nombre: 'Node.js', logo: 'assets/logos/nodejs.png' },
        { nombre: 'Vercel', logo: 'assets/logos/vercel.png' }
      ],
      destacado: true,
      estado: 'En vivo'
    },
    {
      nombre: 'StyleZone',
      descripcion: 'Landing de e-commerce optimizada para performance y conversión. HTML/CSS responsivo con interacciones JavaScript ligeras para catálogo y navegación fluida.',
      imagen: 'assets/logos/stylezone.png',
      link: '#',
      tag: '🛍️ E-commerce',
      tecnologias: [
        { nombre: 'HTML', logo: 'assets/logos/html5.png' },
        { nombre: 'CSS', logo: 'assets/logos/css.png' },
        { nombre: 'JavaScript', logo: 'assets/logos/javascript.png' }
      ],
      estado: 'En mantenimiento'
    },
   
    {
      nombre: 'EcoPacific',
      descripcion: 'Portal institucional para proyectos ambientales con estructura de contenido escalable, diseño accesible y despliegue estático rápido.',
      imagen: 'assets/logos/ecopacific.png',
      link: '#',
      tag: '🌿 Inspiración',
      tecnologias: [
        { nombre: 'HTML', logo: 'assets/logos/html5.png' },
        { nombre: 'CSS', logo: 'assets/logos/css.png' }
      ],
      estado: 'En mantenimiento'
    },
    {
      nombre: 'AgroMarket',
      descripcion: 'Marketplace agrícola con frontend React y backend Node.js/MongoDB. Diseño de catálogo de productos, flujo de compra y modelo de datos orientado a inventario.',
      imagen: 'assets/logos/agromarket.png',
      link: '#',
      tag: '🌾 Agricultura',
      tecnologias: [
        { nombre: 'React', logo: 'assets/logos/react.png' },
        { nombre: 'Node.js', logo: 'assets/logos/nodejs.png' },
        { nombre: 'MongoDB', logo: 'assets/logos/mongodb.png' }
      ],
      estado: 'En mantenimiento'
    }
  ];

  const handleMantenimiento = (e, estado) => {
    if (estado === 'En mantenimiento') {
      e.preventDefault();
      alert('Este proyecto está en mantenimiento. Estoy trabajando para que vuelva pronto.');
    }
  };

  return (
    <section id="proyectos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-7">
        
        {/* Section Header */}
        <div className="mb-14 opacity-0 animate-fadeUp">
          <div className="inline-flex items-center gap-2 bg-blue-dim border border-blue-mid text-blue px-4 py-2 rounded-full font-display text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-blue rounded-full"></span>
            Proyectos en vivo y en mantenimiento
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl leading-tight text-ink tracking-tight mb-4">
            Proyectos técnicos y mantenibles con arquitectura clara y despliegue real.
          </h2>
          <p className="text-lg text-slate max-w-2xl font-body">
            Demostraciones enfocadas en fiabilidad, rendimiento y resultados profesionales para equipos de desarrollo.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {proyectos.map((proyecto, idx) => (
            <div 
              key={idx}
              className="bg-white border border-border rounded-3xl overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col group opacity-0 animate-fadeUp"
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              
              {/* Preview */}
              <div className="relative overflow-hidden flex-shrink-0 group-hover:bg-pearl transition-colors h-56 md:h-64">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-full h-full flex items-center justify-center bg-pearl2 dark:bg-slate-900 p-6">
                  {proyecto.estado === 'En mantenimiento' ? (
                    <div className="text-center px-4 py-6 rounded-3xl border border-dashed border-slate/40 bg-slate-50">
                      <p className="text-sm font-display font-bold uppercase text-amber-600 tracking-wide">
                        En mantenimiento
                      </p>
                      <p className="text-xs text-slate mt-2">
                        Esta sección está en mantenimiento.
                      </p>
                    </div>
                  ) : (
                    <img
                      src={proyecto.imagen}
                      alt={`${proyecto.nombre} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  )}
                </div>
                <div className="absolute top-3 left-3 bg-blue text-white px-3 py-1 rounded-full text-xs font-display font-bold">
                  {proyecto.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-7 flex flex-col flex-1">
                
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-black text-lg lg:text-xl text-ink tracking-tight">
                    {proyecto.nombre}
                  </h3>
                  <div className={`flex items-center gap-1 text-xs font-display font-semibold ${proyecto.estado === 'En mantenimiento' ? 'text-amber-600' : 'text-green-600'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full animate-livePulse ${proyecto.estado === 'En mantenimiento' ? 'bg-amber-600' : 'bg-green-600'}`}></span>
                    {proyecto.estado}
                  </div>
                </div>

                <p className="text-sm lg:text-base text-slate leading-relaxed mb-5 flex-1">
                  {proyecto.descripcion}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {proyecto.tecnologias.map((tech, i) => (
                      <div key={i} className="flex items-center justify-center bg-pearl2 dark:bg-slate-900 border border-border rounded-lg w-9 h-9" title={tech.nombre}>
                        <img
                          src={tech.logo}
                          alt={tech.nombre}
                          className="w-5 h-5 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  <a 
                    href={proyecto.link}
                    onClick={(e) => handleMantenimiento(e, proyecto.estado)}
                    target={proyecto.estado === 'En mantenimiento' ? '_self' : '_blank'}
                    rel={proyecto.estado === 'En mantenimiento' ? undefined : 'noopener noreferrer'}
                    className={`inline-flex items-center gap-2 ${proyecto.estado === 'En mantenimiento' ? 'bg-slate text-slate6 cursor-not-allowed' : 'bg-blue text-white hover:shadow-blue hover:-translate-y-0.5'} px-4 py-2 rounded-lg font-display font-semibold text-sm transition-all duration-300 whitespace-nowrap`}
                  >
                    {proyecto.estado === 'En mantenimiento' ? 'En mantenimiento' : 'Ver proyecto'}
                    {proyecto.estado !== 'En mantenimiento' && (
                      <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-slate2 font-display mt-8 pt-8 border-t border-border">
           <strong className="text-slate"></strong> 
        </p>
      </div>
    </section>
  );
}


