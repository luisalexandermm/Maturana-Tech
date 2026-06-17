function Servicios() {
  const servicios = [
    {
      icono: '💻',
      titulo: 'Landing Page',
      descripcion: 'Página enfocada en conversión. Diseño moderno y responsive. Ideal para captar clientes.'
    },
    {
      icono: '🎨',
      titulo: 'Diseño Moderno UI',
      descripcion: 'Interfaces limpias y profesionales con foco en experiencia de usuario y conversión.'
    },
    {
      icono: '🌐',
      titulo: 'Sitio Web Completo',
      descripcion: 'Estructura profesional para negocios. Varias secciones. Optimizado para rendimiento.'
    },
    {
      icono: '🧩',
      titulo: 'Backend (Render / Firebase)',
      descripcion: 'Conexión a base de datos. Formularios funcionales. Integración completa.'
    },
    {
      icono: '🛡️',
      titulo: 'Mantenimiento Web',
      descripcion: 'Actualizaciones. Corrección de errores. Soporte continuo.'
    }
  ];

  return (
    <section id="servicios" className="py-24 lg:py-32 bg-pearl">
      <div className="max-w-6xl mx-auto px-7">
        
        {/* Section Header */}
        <div className="mb-14 opacity-0 animate-fadeUp">
          <div className="inline-flex items-center gap-2 bg-teal-dim border border-teal-mid text-teal px-4 py-2 rounded-full font-display text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-teal rounded-full"></span>
            Servicios
          </div>
          
          <h2 className="font-display font-black text-4xl lg:text-5xl leading-tight text-ink tracking-tight mb-4">
            Servicios diseñados para convertir visitantes en clientes.
          </h2>
          <p className="text-lg text-slate max-w-2xl font-body">
            Ofrezco soluciones claras y efectivas para que tu negocio tenga presencia profesional en internet.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {servicios.map((servicio, idx) => (
            <div 
              key={idx}
              className="bg-white border border-border rounded-2xl p-8 space-y-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fadeUp"
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              <div className="w-14 h-14 bg-teal-dim border border-teal-mid rounded-xl flex items-center justify-center text-2xl transition-colors group-hover:bg-teal group-hover:text-white">
                {servicio.icono}
              </div>
              
              <h3 className="font-display font-bold text-lg text-ink">
                {servicio.titulo}
              </h3>
              
              <p className="text-sm text-slate leading-relaxed">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
