# 🎨 Maturanna Innovate Tech - Estructura Profesional React

Proyecto web completamente reorganizado con **React (CDN)**, **Tailwind CSS (CDN)** y **componentes modulares**. Mismo diseño, código limpio y profesional.

---

## 📁 Estructura del Proyecto

```
fronetnd/
├── index.html                    # HTML principal limpio
├── js/
│   ├── app.js                   # Aplicación React principal
│   └── componentes/             # Componentes individuales
│       ├── Encabezado.js
│       ├── Hero.js
│       ├── Estadisticas.js
│       ├── Proyectos.js
│       ├── Servicios.js
│       ├── SobreMi.js
│       ├── CtaBand.js
│       ├── Contacto.js
│       └── Footer.js
├── css/
│   └── estilos.css              # Animaciones y estilos personalizados
├── assets/
│   ├── imagenes/                # Imágenes del sitio
│   └── logos/                   # Logos de proyectos
└── img/                         # Carpeta original (puedes usarla también)
```

---

## 🚀 Características

✅ **React 18** desde CDN (sin build tools, sin npm)
✅ **Tailwind CSS** desde CDN con configuración personalizada
✅ **Babel Standalone** para JSX en navegadores
✅ **Componentes modulares** en archivos separados
✅ **Animaciones suaves** (fadeUp, floatY, pulse, etc.)
✅ **Diseño responsive** mantenido exactamente igual
✅ **Colores y estilos originales** preservados
✅ **Menú móvil** funcional con React
✅ **Scroll reveal** y efectos de hover

---

## 📝 ¿Cómo Agregar Logos de Proyectos?

### Paso 1: Coloca los logos en `/assets/logos/`

Crea imágenes PNG/JPG con los logos de tus proyectos:
- `viaschoco.png`
- `stylezone.png`
- `ecopacific.png`
- `agromarket.png`
- `stylezone-original.png`

### Paso 2: Los logos se cargarán automáticamente

En el componente [Proyectos.js](js/componentes/Proyectos.js), cada proyecto tiene una ruta de imagen:

```javascript
{
  nombre: 'Vías del Chocó',
  imagen: 'assets/logos/viaschoco.png',
  // ... otros datos
}
```

### Paso 3: Si la imagen no existe, mostrará un placeholder

El componente tiene fallback: si la imagen no carga, muestra un placeholder con emoji.

**Ejemplo de tarjeta:**

```
┌─────────────────────────────┐
│  ┌──────────────────────┐   │
│  │   [LOGO PROYECTO]    │   │
│  │   Vías del Chocó     │   │
│  └──────────────────────┘   │
│                             │
│ Descripción del proyecto... │
│                             │
│ [React] [Firebase] [Node]   │
│                  [Ver sitio →] │
└─────────────────────────────┘
```

---

## 🎯 Componentes Principales

### 1. **Encabezado.js**
- Navegación responsiva
- Menú móvil collapsible
- Logo con animación de scroll

### 2. **Hero.js**
- Sección principal con animaciones
- Gradientes y efectos visuales
- Mockup de navegador animado

### 3. **Estadísticas.js**
- Contador de proyectos, experiencia, etc.
- Animaciones al scroll

### 4. **Proyectos.js** ⭐ MUY IMPORTANTE
- Tarjetas modernas con logos
- El primer proyecto está destacado (featured)
- Botón "Ver sitio" con links a proyectos desplegados
- Estados "En vivo" con indicador de pulso

### 5. **Servicios.js**
- Grid de servicios con íconos
- Hover elegante

### 6. **SobreMi.js**
- Sección "Sobre mí" con avatar
- Skills/tecnologías como chips
- Anillo decorativo rotativo

### 7. **CtaBand.js**
- Sección call-to-action
- Botón WhatsApp

### 8. **Contacto.js**
- 3 canales de contacto (WhatsApp, GitHub, Email)
- Íconos y estilos personalizados

### 9. **Footer.js**
- Logo y tagline
- Enlaces de navegación
- Iconos de redes sociales

---

## 🎨 Estilos Personalizados

El archivo [css/estilos.css](css/estilos.css) contiene:

- **Animaciones CSS** (fadeUp, floatY, pulse, etc.)
- **Scroll Reveal** efectos
- **Estilos personalizados** que Tailwind no cubre

Todos los colores y valores de diseño están organizados en la configuración de Tailwind en `index.html`.

---

## 🔧 Cómo Modificar el Proyecto

### Cambiar colores
En `index.html`, dentro de `<script>tailwind.config`:

```javascript
colors: {
  'blue': '#3b6ef6',      // Cambiar azul principal
  'pearl': '#f9fafb',     // Cambiar fondo claro
  // ... más colores
}
```

### Agregar un nuevo componente
1. Crea `js/componentes/NuevoComponente.js`
2. Define la función React
3. Agrega `<script>` en `index.html`
4. Usa el componente en `js/app.js`

### Cambiar textos
Cada componente tiene sus datos dentro. Ej: en [Proyectos.js](js/componentes/Proyectos.js):

```javascript
const proyectos = [
  {
    nombre: 'Vías del Chocó',
    descripcion: 'Plataforma colaborativa...',
    imagen: 'assets/logos/viaschoco.png',
    link: 'https://vias-choco.web.app',
    // ...
  },
  // ... más proyectos
];
```

---

## 🌐 Despliegue

Este proyecto funciona perfectamente en:

- ✅ **Vercel** (recomendado)
- ✅ **Netlify**
- ✅ **GitHub Pages**
- ✅ **Any static hosting**

Solo sube toda la carpeta `fronetnd` como está.

### Comando para servir localmente (Python)

```bash
cd fronetnd
python -m http.server 8000
# Luego abre http://localhost:8000
```

### Con Node.js (http-server)

```bash
npm install -g http-server
cd fronetnd
http-server
```

---

## 📦 Dependencias

**CERO dependencias locales.** Todo está en CDN:

- React 18 (CDN)
- ReactDOM 18 (CDN)
- Babel Standalone (CDN)
- Tailwind CSS (CDN)

---

## 🎯 Checklist para Personalizar

- [ ] Reemplazar logos en `/assets/logos/`
- [ ] Actualizar datos de proyectos en `Proyectos.js`
- [ ] Cambiar links de WhatsApp/GitHub/Email
- [ ] Actualizar nombre y descripción en `SobreMi.js`
- [ ] Cambiar colores si es necesario
- [ ] Probar en móvil y desktop
- [ ] Deploy a Vercel/Netlify

---

## 📞 Contacto

- 📱 **WhatsApp:** +57 314 531 2045
- 🐙 **GitHub:** @luisalexandermm
- ✉️ **Email:** AlexanderMaturana76@gmail.com

---

## ✨ Notas Importantes

1. **Las animaciones son LIVIANAS** y no afectan rendimiento
2. **Responsive por defecto** con Tailwind
3. **Accesible** (semántica HTML correcta)
4. **SEO-friendly** (meta tags, estructura semántica)
5. **Carga rápida** (sin build tools, CDN optimizado)

¡Listo para producción! 🚀
