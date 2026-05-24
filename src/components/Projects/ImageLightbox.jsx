import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./ImageLightbox.css";

/**
 * Componente que muestra una imagen en grande a pantalla completa (Lightbox).
 * Permite cerrar con la tecla Escape y navegar por las imágenes con teclado o flechas visuales.
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
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return createPortal(
    <div className="lightbox-overlay" onClick={onClose}>
      {/* Botón de cierre */}
      <button 
        className="lightbox-close" 
        onClick={onClose} 
        aria-label="Cerrar visor"
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
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button 
            className="lightbox-arrow next" 
            onClick={handleNext} 
            aria-label="Siguiente imagen"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </>
      )}

      {/* Contenedor principal de imagen y pie de foto */}
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
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
