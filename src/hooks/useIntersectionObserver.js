import { useEffect, useRef } from 'react';

/**
 * Hook personalizado para observar la intersección de un elemento con el viewport.
 * Añade la clase 'visible' al elemento cuando entra en pantalla para lanzar animaciones.
 * 
 * @param {Object} [options={}] - Opciones de configuración para IntersectionObserver.
 * @returns {React.MutableRefObject} Referencia que debe adjuntarse al elemento DOM.
 */
export function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const node = elementRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      ...options
    });

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [options]);

  return elementRef;
}