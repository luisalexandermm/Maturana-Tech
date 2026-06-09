# 🖼️ GUÍA DE LOGOS - Cómo Agregar Imágenes de Proyectos

## 📍 Ubicación de Logos

Todos los logos deben estar en: **`assets/logos/`**

```
fronetnd/
└── assets/
    └── logos/
        ├── viaschoco.png
        ├── stylezone.png
        ├── ecopacific.png
        ├── agromarket.png
        └── stylezone-original.png
```

---

## 🎨 Especificaciones Recomendadas

| Propiedad | Valor |
|-----------|-------|
| **Formato** | PNG o JPG |
| **Tamaño** | Mínimo 200x200px, máximo 500x500px |
| **Fondo** | Transparente (PNG) o blanco |
| **Estilo** | Logo limpio, sin texto si es posible |
| **Resolución** | 72-96 DPI (web) |

---

## 📝 Archivos de Logo por Proyecto

Crea estos archivos en `assets/logos/`:

### 1️⃣ **viaschoco.png**
```
Logo de Vías del Chocó
- Proyecto: Plataforma de reportes de vías
- Color sugerido: Azul (relacionado con viajes/transporte)
- Tamaño: Cuadrado o rectangular
```

### 2️⃣ **stylezone.png**
```
Logo de StyleZone by Luisito
- Proyecto: Tienda de accesorios tech
- Color sugerido: Rosa o morado
- Tamaño: Cuadrado preferiblemente
```

### 3️⃣ **ecopacific.png**
```
Logo de EcoPacific
- Proyecto: Web ambiental
- Color sugerido: Verde
- Tamaño: Cuadrado
```

### 4️⃣ **agromarket.png**
```
Logo de AgroMarket
- Proyecto: Marketplace agrícola
- Color sugerido: Verde claro o amarillo
- Tamaño: Cuadrado
```

### 5️⃣ **stylezone-original.png**
```
Logo de StyleZone (versión original)
- Proyecto: Diseño CSS puro
- Color sugerido: Púrpura
- Tamaño: Cuadrado
```

---

## 🔧 Paso a Paso: Agregar tu Logo

### Opción 1: Usar Imágenes Existentes

Si ya tienes logos de tus proyectos:

1. Copia cada logo
2. Colócalo en `assets/logos/`
3. Nómbralo exactamente como se especifica arriba
4. ¡Listo! Los logos aparecerán automáticamente

### Opción 2: Crear Logos Rápido (Herramientas Gratuitas)

**Canva** (Recomendado)
- https://canva.com/
- Busca "logo maker"
- Diseña, descarga como PNG
- Talla recomendada: 500x500px

**Looka**
- https://www.looka.com/
- Generador de logos con IA
- Descarga versión gratis

**Figma**
- https://figma.com/
- Crea desde cero
- Exporta como PNG

**Pixlr**
- https://pixlr.com/
- Editor online
- Descarga como PNG

### Opción 3: Usar Imágenes Temporales

Si aún no tienes logos, puedes:

1. Descarga imágenes placeholder desde:
   - https://picsum.photos/
   - https://placeholder.com/
   - https://loremflickr.com/

2. Renómbralas con el nombre del proyecto
3. Colócalas en `assets/logos/`

Ej:
```
https://picsum.photos/400/400?random=1 → viaschoco.png
https://picsum.photos/400/400?random=2 → stylezone.png
```

---

## 🎯 Cómo Aparecen los Logos en el Sitio

En el componente [Proyectos.js](../js/componentes/Proyectos.js):

```javascript
const proyectos = [
  {
    nombre: 'Vías del Chocó',
    imagen: 'assets/logos/viaschoco.png',  // ← Aquí va el logo
    // ... otros datos
  },
  // ...
];
```

Cada tarjeta de proyecto mostrará:

```
┌─────────────────────────┐
│   ┌─────────────────┐   │
│   │                 │   │
│   │   [LOGO HERE]   │   │
│   │   (max 96x96)   │   │
│   │                 │   │
│   └─────────────────┘   │
│                         │
│ Nombre del Proyecto     │
│                         │
│ Descripción...          │
│                         │
│ [Ver sitio →]           │
└─────────────────────────┘
```

---

## ❌ Troubleshooting

### El logo no aparece

**Problema:** "Error 404" o imagen rota

**Solución:**
- Verifica que el archivo esté en `assets/logos/`
- Verifica que el nombre sea exacto (mayúsculas/minúsculas)
- Verifica la extensión: `.png` o `.jpg`

### El logo se ve pixelado

**Problema:** Imagen de baja resolución

**Solución:**
- Usa imágenes de al menos 300x300px
- Si es PNG, asegúrate de que sea de alta calidad

### El logo no cabe bien en la tarjeta

**Problema:** Imagen muy grande o con formato raro

**Solución:**
- El componente auto-ajusta a `w-24 h-24` (96x96px)
- Usa `object-contain` para que quepa bien
- Si es muy rectangular, recórtalo a cuadrado

---

## 📱 Preview de Cómo Se Verá

El logo aparecerá en una caja así:

```css
width: 96px;
height: 96px;
border: 2px solid #c7d4fd;
border-radius: 16px;
background: white;
object-fit: contain;
padding: 8px;
```

Esto significa que:
- ✅ Se verá en una caja blanca
- ✅ Con borde azul claro
- ✅ Redondeado
- ✅ Centrado y escalado

---

## 💡 Consejos Profesionales

1. **Consistencia:** Usa logos similares en estilo
2. **Colores:** Mejor si tienen colores únicos identificables
3. **Simplicidad:** Logos simples se ven mejor en tamaños pequeños
4. **Fondo:** PNG transparente es ideal
5. **Nombre:** Usa nombres descriptivos (proyecto, no "logo1.png")

---

## ✅ Checklist

- [ ] Tengo todos los 5 logos
- [ ] Están en `assets/logos/`
- [ ] Nombres coinciden exactamente
- [ ] Formato PNG o JPG
- [ ] Mínimo 200x200px
- [ ] Cargo el sitio y veo los logos

---

## 🆘 Necesitas Ayuda?

Si los logos no aparecen:

1. Abre la consola (F12)
2. Mira los errores en "Network"
3. Busca rutas con estado 404
4. Verifica que existan en `assets/logos/`

---

¡Ya están listos para agregar tus logos! 🎉
