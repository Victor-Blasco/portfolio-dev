import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Card.css"

// Iconos inline para el botón de alternar vista
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="eye-icon">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="eye-icon">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="close-icon">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/**
 * Componente de tarjeta genérica para proyectos o experiencias.
 * Permite alternar dinámicamente entre descripción y una imagen si se proporciona.
 * Permite además abrir una vista previa de la imagen a pantalla completa (lightbox).
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.title - Título principal de la tarjeta.
 * @param {string} [props.subtitle] - Subtítulo opcional.
 * @param {string} props.description - Texto descriptivo.
 * @param {string} [props.tech] - Tecnologías utilizadas.
 * @param {Array<{url: string, label: string}>} [props.references] - Enlaces relacionados.
 * @param {JSX.Element} [props.icon] - Icono para los enlaces.
 * @param {string} [props.image] - URL o ruta de la imagen representativa del proyecto.
 * @returns {JSX.Element} La tarjeta renderizada.
 */
function Card({ title, subtitle, description, tech, references, icon, image }) {
  const [showImage, setShowImage] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Manejar el cierre con la tecla Escape y evitar scroll de fondo
  useEffect(() => {
    if (isLightboxOpen) {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setIsLightboxOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [isLightboxOpen]);

  return (
    <div className="card glass-panel">
      <div className="card-header">
        <div className="card-title-group">
          <h3>{title}</h3>
          {subtitle && <h4>{subtitle}</h4>}
        </div>
        {image && (
          <button
            className="card-toggle-btn glass-panel"
            onClick={() => setShowImage(!showImage)}
            type="button"
            aria-label={showImage ? "Ver descripción" : "Ver imagen de proyecto"}
          >
            {showImage ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>

      <div className="card-content-container">
        <p className={`card-description ${showImage ? "hidden" : "visible"}`}>
          {description}
        </p>

        {image && (
          <div className={`card-image-container ${showImage ? "visible" : "hidden"}`}>
            <img 
              src={image} 
              alt={title} 
              className="card-image" 
              loading="lazy" 
              onClick={() => setIsLightboxOpen(true)}
            />
          </div>
        )}
      </div>

      {tech && <span className="tech">{tech}</span>}

      {references && references.map((ref, index) => (
        <a
          key={index}
          href={ref.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-link ${ref.url.includes("github") ? "github-link" : ""}`}
        >
          {icon}
          {ref.label}
        </a>
      ))}

      {isLightboxOpen && createPortal(
        <div className="lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
          <button 
            className="lightbox-close-btn glass-panel"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Cerrar vista previa"
          >
            <CloseIcon />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={image} 
              alt={title} 
              className="lightbox-image" 
              onClick={() => setIsLightboxOpen(false)}
            />
            <div className="lightbox-caption">
              <h3>{title}</h3>
              {subtitle && <p>{subtitle}</p>}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
export default Card;