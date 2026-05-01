---
nombre: directrices-del-proyecto
descripcion: Reglas y directrices fundamentales para el desarrollo de la aplicación portfolio-web. Los agentes deben seguir estas reglas para asegurar la calidad del código, la estética y la arquitectura.
---

# Directrices del Proyecto Portfolio

Estas reglas dictan cómo se deben estructurar el código, los estilos y la arquitectura en este repositorio para mantener un portfolio de alta calidad y sensación "Premium".

## 1. Arquitectura y Convenciones de Código

- **Framework**: React 19 + Vite.
- **Estilo de Componentes**: Usar Componentes Funcionales con Hooks.
- **Importaciones**: Usar siempre el alias `@/` para importaciones absolutas desde el directorio `src` (ej. `import Card from '@/components/Card/Card';`).
- **Assets**: No usar rutas estáticas del tipo `/src/assets/...` en los atributos `src` de JSX. Importarlos correctamente (ej. `import avatar from '@/assets/avatar.webp';`) o colocarlos en el directorio `public/` si son dinámicos.
- **Sensibilidad a Mayúsculas**: Respetar siempre las mayúsculas y minúsculas en las importaciones (ej. `components` vs `Components`) para asegurar la compatibilidad entre plataformas (Linux/macOS/Windows).

## 2. Estética y UI/UX (Sensación "Premium")

- **Colores**: Evitar grises genéricos o códigos hexadecimales estándar. Usar paletas seleccionadas (ej. Zinc o Slate para modos oscuros) con matices sutiles.
- **Glassmorphism**: Utilizar `backdrop-filter: blur(...)` combinado con fondos semitransparentes para elementos flotantes (navbars, tooltips, modales) para dar una sensación moderna y de capas.
- **Animaciones y Micro-interacciones**: Los elementos deben sentirse "vivos". Usar `transition: all 0.3s ease` para los hovers. Elevar las tarjetas ligeramente al pasar el ratón y considerar gradientes sutiles en los bordes.
- **Tipografía**: Confiar en fuentes sans-serif modernas y limpias (ej. Inter, Outfit, Plus Jakarta Sans). Asegurar una jerarquía adecuada usando pesos de fuente, tamaños y opacidades (ej. el texto secundario debe ser ligeramente transparente, no solo gris).

## 3. Rendimiento y SEO

- **Rendimiento**: Seguir las reglas especificadas en la skill `vercel-react-best-practices`.
- **Lazy Loading**: Usar React `Suspense` y `lazy` para cargar componentes que no están en el primer vistazo (como Contacto, Experiencia).
- **Semántica**: Usar etiquetas HTML5 adecuadas (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`).
- **Imágenes**: Incluir siempre `loading="lazy"` en imágenes fuera del primer vistazo y especificar `width` y `height` para evitar cambios en el diseño (CLS).

## 4. Estado y Temas

- **Modo Oscuro**: La aplicación debe soportar totalmente el modo Oscuro/Claro, priorizando la preferencia del sistema y guardando el estado en `localStorage`.
- **Variables CSS**: Todos los colores de los temas DEBEN definirse como variables CSS en `:root` y `:root.dark-mode`. Nunca escribir colores fijos en los archivos CSS de los componentes.
