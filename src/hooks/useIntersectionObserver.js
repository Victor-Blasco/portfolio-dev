import { useEffect, useRef } from 'react';

/**
 * Hook personalizado para observar la intersección de un elemento con el viewport.
 * Añade la clase 'visible' al elemento cuando entra en pantalla para lanzar animaciones.
 * Usa un threshold bajo (0.02) para garantizar que secciones muy altas en pantallas móviles
 * disparen correctamente su visibilidad al entrar en el viewport.
 *
 * @param {Object} [options={}] - Opciones de configuración para IntersectionObserver.
 * @returns {React.MutableRefObject} Referencia que debe adjuntarse al elemento DOM.
 */
export function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null);
  const { threshold = 0.02, root = null, rootMargin = '0px 0px -40px 0px' } = options;

  useEffect(() => {
    const node = elementRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }, {
      threshold,
      root,
      rootMargin
    });

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [threshold, root, rootMargin]);

  return elementRef;
}
