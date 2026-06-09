function Contacto() {
  const canales = [
    {
      icono: '💬',
      etiqueta: 'WhatsApp',
      valor: '+57 314 531 2045',
      hint: 'Respondo en minutos →',
      link: 'https://wa.me/573145312045?text=Hola%20Luis%2C%20me%20interesa%20un%20proyecto',
      bgIcon: 'bg-green-100'
    },
    {
      icono: '🐙',
      etiqueta: 'GitHub',
      valor: 'luisalexandermm',
      hint: 'Ver repositorios →',
      link: 'https://github.com/luisalexandermm',
      bgIcon: 'bg-pearl2'
    },
    {
      icono: '✉️',
      etiqueta: 'Correo electrónico',
      valor: 'contacto.maturanainnovate@gmail.com',
      hint: 'Enviar email →',
      link: 'mailto:contacto.maturanainnovate@gmail.com',
      bgIcon: 'bg-blue-dim'
    }
  ];

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-pearl">
      <div className="max-w-6xl mx-auto px-7">
        
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fadeUp">
          <div className="inline-flex items-center gap-2 bg-blue-dim border border-blue-mid text-blue px-4 py-2 rounded-full font-display text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-blue rounded-full"></span>
            Contacto
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl leading-tight text-ink tracking-tight mb-4">
            Hablemos
          </h2>
          
          <p className="text-lg text-slate font-body max-w-2xl mx-auto">
            ¿Listo para construir algo increíble? Elige tu canal preferido.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {canales.map((canal, idx) => (
            <a 
              key={idx}
              href={canal.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full max-w-[420px] box-border bg-white border border-border rounded-2xl p-8 lg:p-10 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fadeUp flex flex-col items-center`}
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              <div className={`w-14 h-14 ${canal.bgIcon} rounded-2xl flex items-center justify-center text-2xl mb-4`}>
                {canal.icono}
              </div>
              
              <div className="text-xs font-display font-bold tracking-widest text-slate2 uppercase mb-2">
                {canal.etiqueta}
              </div>
              
              <div className="text-lg lg:text-xl font-display font-bold text-ink mb-2 break-words">
                {canal.valor}
              </div>
              
              <div className="text-xs text-blue font-display font-semibold">
                {canal.hint}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
