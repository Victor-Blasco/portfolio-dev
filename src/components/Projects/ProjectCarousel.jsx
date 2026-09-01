import { useState, useRef } from "react";
import "./ProjectCarousel.css";

/**
 * Componente que gestiona el carrusel de imágenes de un proyecto.
 * Muestra flechas de navegación e indicadores de punto si hay múltiples imágenes.
 * Soporta gestos táctiles (swipe hacia la izquierda o derecha) para cambiar de diapositiva.
 * Al hacer click o tap sin arrastre en la imagen, abre el visor a pantalla completa (Lightbox).
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Array<{src: string, caption: string}>} props.images - Lista de imágenes con sus descripciones.
 * @param {string} props.title - Título del proyecto para propósitos de accesibilidad.
 * @param {Function} props.onImageClick - Callback invocado al hacer click en una imagen, recibe el índice activo.
 * @returns {JSX.Element|null} El carrusel de imágenes del proyecto.
 */
function ProjectCarousel({ images, title, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Referencias para el seguimiento de gestos táctiles
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);
  const isSwiping = useRef(false);

  if (!images || images.length === 0) {
    return null;
  }

  const hasMultipleImages = images.length > 1;

  /**
   * Cambia a la siguiente imagen de manera cíclica.
   * 
   * @param {Event} [e] - Evento opcional para detener propagación.
   */
  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  /**
   * Cambia a la imagen anterior de manera cíclica.
   * 
   * @param {Event} [e] - Evento opcional para detener propagación.
   */
  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  /**
   * Cambia la imagen seleccionada por su índice (dots).
   * 
   * @param {Event} e - Evento de click.
   * @param {number} index - Índice de la imagen destino.
   */
  const handleDotClick = (e, index) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  /**
   * Inicia el registro de coordenadas táctiles.
   * 
   * @param {React.TouchEvent} e - Evento táctil.
   */
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
    isSwiping.current = false;
  };

  /**
   * Registra el desplazamiento táctil para detectar intención de swipe horizontal.
   * 
   * @param {React.TouchEvent} e - Evento táctil.
   */
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;

    const diffX = Math.abs(touchStartX.current - touchEndX.current);
    const diffY = Math.abs(touchStartY.current - touchEndY.current);

    if (diffX > 10 && diffX > diffY) {
      isSwiping.current = true;
    }
  };

  /**
   * Evalúa el gesto táctil al levantar el dedo para cambiar de imagen si supera el umbral.
   */
  const handleTouchEnd = () => {
    if (!hasMultipleImages) {
      isSwiping.current = false;
      return;
    }

    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;
    const minSwipeDistance = 40; // Umbral mínimo en píxeles

    if (Math.abs(diffX) > minSwipeDistance && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        // Deslizar hacia la izquierda -> avanzar
        handleNext();
      } else {
        // Deslizar hacia la derecha -> retroceder
        handlePrev();
      }

      // Prevenir que el evento click posterior abra accidentalmente el lightbox
      setTimeout(() => {
        isSwiping.current = false;
      }, 80);
    } else {
      isSwiping.current = false;
    }
  };

  /**
   * Maneja el click o tap en el contenedor de imagen, abriendo el lightbox solo si no fue un deslizamiento.
   */
  const handleFrameClick = () => {
    if (isSwiping.current) {
      return;
    }
    onImageClick(currentIndex);
  };

  return (
    <div 
      className="project-image-frame" 
      onClick={handleFrameClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Contenedor de las diapositivas */}
      <div 
        className="carousel-slides" 
        style={{ 
          width: `${images.length * 100}%`,
          transform: `translateX(-${(currentIndex * 100) / images.length}%)` 
        }}
      >
        {images.map((img, index) => (
          <div 
            key={index} 
            className="carousel-slide"
            style={{ width: `${100 / images.length}%` }}
          >
            <img 
              src={img.src} 
              alt={`${title} - ${img.caption || index}`} 
              className="project-img" 
              loading="lazy" 
            />
          </div>
        ))}
      </div>

      {/* Flechas de navegación (solo si hay múltiples imágenes) */}
      {hasMultipleImages && (
        <>
          <button 
            className="carousel-arrow prev" 
            onClick={handlePrev} 
            aria-label="Imagen anterior"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button 
            className="carousel-arrow next" 
            onClick={handleNext} 
            aria-label="Siguiente imagen"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </>
      )}

      {/* Indicadores en puntos (solo si hay múltiples imágenes) */}
      {hasMultipleImages && (
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
              onClick={(e) => handleDotClick(e, index)}
              aria-label={`Ir a imagen ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectCarousel;
