function Estadisticas() {
  const stats = [
    { numero: '5', sufijo: '+', etiqueta: 'Proyectos completados' },
    { numero: '100', sufijo: '%', etiqueta: 'Responsive design' },
    { numero: '1', sufijo: '+', etiqueta: 'Años de experiencia' },
    { numero: '6', sufijo: '+', etiqueta: 'Tecnologías dominadas' }
  ];

  return (
    <div className="border-t border-b border-border bg-pearl py-8 lg:py-8">
      <div className="max-w-6xl mx-auto px-7">
        <div className="flex flex-wrap justify-around items-center gap-6 lg:gap-0">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center opacity-0 animate-fadeUp" style={{ animationDelay: `${idx * 0.08}s` }}>
              <div className="font-display text-4xl lg:text-5xl font-black tracking-tighter text-ink">
                {stat.numero}<span className="text-blue">{stat.sufijo}</span>
              </div>
              <div className="text-xs lg:text-sm text-slate2 font-body mt-1">{stat.etiqueta}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
