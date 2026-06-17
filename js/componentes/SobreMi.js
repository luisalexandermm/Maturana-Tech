function SobreMi() {
  const habilidades = [
    { nombre: 'React', logo: 'assets/logos/react.png' },
    { nombre: 'Node.js', logo: 'assets/logos/nodejs.png' },
    { nombre: 'Firebase', logo: 'assets/logos/firebase.png' },
    { nombre: 'Tailwind CSS', logo: 'assets/logos/tailwindcss.png' },
    { nombre: 'Express', logo: 'assets/logos/express.png' },
    { nombre: 'JavaScript', logo: 'assets/logos/javascript.png' },
    { nombre: 'HTML / CSS', logo: 'assets/logos/html5.png' },
    { nombre: 'GitHub', logo: 'assets/logos/github.png' },
    { nombre: 'Figma', logo: 'assets/logos/figma.png' },
    { nombre: 'Render', logo: 'assets/logos/render.png' },
    { nombre: 'Vercel', logo: 'assets/logos/vercel.png' },
  ];

  return (
    <section id="sobre-mi" className="py-24 lg:py-32 bg-transparent">
      <div className="max-w-6xl mx-auto px-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Avatar */}
          <div className="relative justify-self-center">
            <div className="relative w-72 h-72 z-10 overflow-hidden bg-transparent">
              <img 
                src="assets/imagenes/yo.png"
                alt="Perfil"
                className="w-full h-full object-cover bg-transparent"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-dim border border-teal-mid text-teal px-4 py-2 rounded-full font-display text-xs font-bold tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 bg-teal rounded-full"></span>
              Sobre mí
            </div>

            <h2 className="font-display font-black text-4xl lg:text-5xl leading-tight text-ink tracking-tight mt-4 mb-6">
              Hola, soy<br /><span className="text-teal">Luis Alexander.</span>
            </h2>

            <p className="text-lg text-slate leading-relaxed mb-4 font-body">
              Soy estudiante de Ingeniería en Sistemas y desarrollador web apasionado por crear soluciones digitales modernas para negocios y emprendimientos.
            </p>

            <p className="text-lg text-slate leading-relaxed mb-8 font-body">
              Cada proyecto se construye con diseño claro, velocidad real y un enfoque práctico en resultados que generen contactos y ventas.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {habilidades.map((skill, idx) => (
                <span 
                  key={idx}
                  className="bg-teal-dim text-teal border border-teal-mid px-3 py-1.5 rounded-lg text-xs font-display font-bold tracking-wide hover:-translate-y-0.5 transition-all duration-200 cursor-default flex items-center gap-2"
                >
                  {skill.logo && (
                    <img
                      src={skill.logo}
                      alt={skill.nombre}
                      className="w-4 h-4 object-contain"
                    />
                  )}
                  {skill.nombre}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contacto" className="inline-flex items-center gap-2 bg-teal text-white px-7 py-3 rounded-lg font-display font-semibold text-sm hover:shadow-teal hover:-translate-y-0.5 transition-all duration-300">
                Trabajemos juntos
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="assets/catalogo.pdf" download className="inline-flex items-center gap-2 bg-slate text-slate9 px-7 py-3 rounded-lg font-display font-semibold text-sm hover:bg-slate-700 transition-all duration-300">
                Descargar catálogo
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 3v12M8 11l4 4 4-4M4 18h16"/></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
