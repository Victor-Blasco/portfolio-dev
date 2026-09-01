import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import "./ImageLightbox.css";

/**
 * Componente que muestra una imagen en grande a pantalla completa (Lightbox).
 * Permite cerrar con la tecla Escape y navegar por las imágenes con teclado, flechas visuales o gestos táctiles (swipe).
 * Usa un Portal de React para renderizarse fuera del flujo DOM del componente padre,
 * evitando problemas de recorte y apilamiento causados por propiedades CSS transform.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Array<{src: string, caption: string}>} props.images - Lista de imágenes del proyecto.
 * @param {number} props.currentIndex - Índice de la imagen inicialmente seleccionada.
 * @param {Function} props.onClose - Callback invocado para cerrar el visor.
 * @param {string} props.title - Título del proyecto.
 * @returns {React.ReactPortal|null} El visor a pantalla completa o null si no está activo.
 */
function ImageLightbox({ images, currentIndex, onClose, title }) {
  const [activeIdx, setActiveIdx] = useState(currentIndex);

  // Referencias para el seguimiento de gestos táctiles en lightbox
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);

  useEffect(() => {
    // Sincronizar el índice inicial si cambia desde fuera
    setActiveIdx(currentIndex);
  }, [currentIndex]);

  // Manejar eventos de teclado (Escape, Flechas)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" && images.length > 1) {
        setActiveIdx((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft" && images.length > 1) {
        setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Bloquear el scroll del body mientras el visor está abierto
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  if (!images || images.length === 0) {
    return null;
  }

  const activeImage = images[activeIdx];
  const hasMultipleImages = images.length > 1;

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  /**
   * Inicia el registro de toque para swipe en el lightbox.
   * 
   * @param {React.TouchEvent} e - Evento táctil.
   */
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  /**
   * Registra el desplazamiento de toque en el lightbox.
   * 
   * @param {React.TouchEvent} e - Evento táctil.
   */
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  /**
   * Evalúa el gesto de swipe al levantar el dedo en el lightbox.
   */
  const handleTouchEnd = () => {
    if (!hasMultipleImages) return;

    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;
    const minSwipeDistance = 45;

    if (Math.abs(diffX) > minSwipeDistance && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return createPortal(
    <div className="lightbox-overlay" onClick={onClose}>
      {/* Botón de cierre */}
      <button 
        className="lightbox-close" 
        onClick={onClose} 
        aria-label="Cerrar visor"
        type="button"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* Flechas de navegación (solo si hay múltiples imágenes) */}
      {hasMultipleImages && (
        <>
          <button 
            className="lightbox-arrow prev" 
            onClick={handlePrev} 
            aria-label="Imagen anterior"
            type="button"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button 
            className="lightbox-arrow next" 
            onClick={handleNext} 
            aria-label="Siguiente imagen"
            type="button"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </>
      )}

      {/* Contenedor principal de imagen y pie de foto */}
      <div 
        className="lightbox-content" 
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="lightbox-image-container">
          <img 
            src={activeImage.src} 
            alt={`${title} - ${activeImage.caption}`} 
            className="lightbox-image" 
          />
        </div>
        
        {/* Caption descriptivo */}
        {activeImage.caption && (
          <div className="lightbox-caption">
            <p className="lightbox-caption-text">{activeImage.caption}</p>
            {hasMultipleImages && (
              <span className="lightbox-counter">
                {activeIdx + 1} / {images.length}
              </span>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

export default ImageLightbox;
