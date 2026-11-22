import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import "./ImageLightbox.css";

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Componente que muestra una imagen en grande a pantalla completa (Lightbox).
 * Permite cerrar con la tecla Escape, gestiona un Focus Trap con restauración de foco
 * y permite navegar con teclado, flechas visuales o gestos táctiles (swipe).
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Array<{src: string, caption: string}>} props.images - Lista de imágenes del proyecto.
 * @param {number} props.currentIndex - Índice de la imagen inicialmente seleccionada.
 * @param {Function} props.onClose - Callback invocado para cerrar el visor.
 * @param {string} props.title - Título del proyecto.
 * @returns {React.ReactPortal|null} El visor a pantalla completa o null si no está activo.
 */
function ImageLightbox({ images, currentIndex, onClose, title }) {
  const { t } = useTranslation();
  const [activeIdx, setActiveIdx] = useState(currentIndex);
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Referencias para el seguimiento de gestos táctiles en lightbox
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);

  useEffect(() => {
    setActiveIdx(currentIndex);
  }, [currentIndex]);

  // Bloqueo de scroll, foco inicial y restauración de foco al cerrar
  useEffect(() => {
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    return () => {
      if (!document.querySelector(".arch-modal-overlay")) {
        document.body.style.overflow = "";
      }
      if (previousFocus && typeof previousFocus.focus === "function") {
        previousFocus.focus();
      }
    };
  }, []);

  // Eventos de teclado: Escape, flechas y Focus Trap (Tab / Shift+Tab)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "ArrowRight" && images.length > 1) {
        setActiveIdx((prev) => (prev + 1) % images.length);
        return;
      }

      if (e.key === "ArrowLeft" && images.length > 1) {
        setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
        return;
      }

      if (e.key === "Tab" && overlayRef.current) {
        const focusable = Array.from(
          overlayRef.current.querySelectorAll(FOCUSABLE_SELECTOR)
        ).filter((el) => el.getClientRects().length > 0);

        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first || !overlayRef.current.contains(document.activeElement)) {
            e.preventDefault();
            last.focus();
          }
        } else if (document.activeElement === last || !overlayRef.current.contains(document.activeElement)) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

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
    <div
      ref={overlayRef}
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      {/* Botón de cierre */}
      <button
        ref={closeBtnRef}
        className="lightbox-close"
        onClick={onClose}
        aria-label={t("projects.close_lightbox")}
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
            aria-label={t("projects.prev_image")}
            type="button"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            className="lightbox-arrow next"
            onClick={handleNext}
            aria-label={t("projects.next_image")}
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
