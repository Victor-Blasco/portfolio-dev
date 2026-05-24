import { useState } from "react";
import "./ProjectCarousel.css";

/**
 * Componente que gestiona el carrusel de imágenes de un proyecto.
 * Muestra flechas de navegación e indicadores de punto si hay múltiples imágenes.
 * Al hacer click en la imagen, abre el visor a pantalla completa (Lightbox).
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Array<{src: string, caption: string}>} props.images - Lista de imágenes con sus descripciones.
 * @param {string} props.title - Título del proyecto para propósitos de accesibilidad.
 * @param {Function} props.onImageClick - Callback invocado al hacer click en una imagen, recibe el índice activo.
 * @returns {JSX.Element} El carrusel de imágenes del proyecto.
 */
function ProjectCarousel({ images, title, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const hasMultipleImages = images.length > 1;

  /**
   * Cambia a la siguiente imagen de manera cíclica.
   * 
   * @param {Event} e - Evento de click para evitar propagación al contenedor superior.
   */
  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  /**
   * Cambia a la imagen anterior de manera cíclica.
   * 
   * @param {Event} e - Evento de click para evitar propagación al contenedor superior.
   */
  const handlePrev = (e) => {
    e.stopPropagation();
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

  return (
    <div className="project-image-frame" onClick={() => onImageClick(currentIndex)}>
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
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button 
            className="carousel-arrow next" 
            onClick={handleNext} 
            aria-label="Siguiente imagen"
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
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectCarousel;
