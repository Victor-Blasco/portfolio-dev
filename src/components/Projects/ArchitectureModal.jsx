import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import "./ArchitectureModal.css";

/**
 * Modal interactivo que presenta el Caso de Estudio y Diagrama de Arquitectura
 * para los proyectos del portfolio (TFG, Gustomé, MoRMaS).
 * Se renderiza mediante un Portal de React y soporta cierre con tecla Escape.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} props.isOpen - Indica si el modal está abierto.
 * @param {Function} props.onClose - Función para cerrar el modal.
 * @param {string} [props.projectKey='tfg'] - Clave del proyecto ('tfg', 'gustome', 'mormas').
 * @param {string} [props.fallbackTitle=''] - Título de respaldo si no se encuentra en i18n.
 * @returns {React.ReactPortal|null} El modal renderizado o null si está cerrado.
 */
function ArchitectureModal({ isOpen, onClose, projectKey = "tfg", fallbackTitle = "" }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !projectKey) {
    return null;
  }

  const archData = t(`projects.architectures.${projectKey}`, { returnObjects: true }) || {};
  const flowNodes = Array.isArray(archData.flow_nodes) ? archData.flow_nodes : [];
  const decisions = Array.isArray(archData.decisions) ? archData.decisions : [];
  const title = archData.title || fallbackTitle;

  return createPortal(
    <div className="arch-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="arch-modal-title">
      <div className="arch-modal-card glass-panel" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="arch-modal-close"
          onClick={onClose}
          aria-label="Cerrar modal de arquitectura"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="arch-modal-header">
          <span className="arch-modal-badge">{archData.badge || t("projects.view_architecture")}</span>
          <h3 id="arch-modal-title" className="arch-modal-title">{title}</h3>
          {archData.confidential_note && (
            <p className="arch-modal-confidential">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>{archData.confidential_note}</span>
            </p>
          )}
        </div>

        {/* Diagrama de Bloques de Arquitectura */}
        {flowNodes.length > 0 && (
          <div className="arch-section">
            <h4 className="arch-section-heading">{archData.flow_title}</h4>
            <div className="arch-docker-boundary">
              {archData.infra_label && (
                <div className="arch-docker-label">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  </svg>
                  <span>{archData.infra_label}</span>
                </div>
              )}

              <div className="arch-flow-grid">
                {flowNodes.map((node, idx) => (
                  <div key={idx} className="arch-flow-item">
                    <div className={`arch-node node-type-${node.type || "default"}`}>
                      <span className="arch-node-step">{node.step || `0${idx + 1}`}</span>
                      <strong className="arch-node-title">{node.title}</strong>
                      <span className="arch-node-sub">{node.sub}</span>
                    </div>
                    {idx < flowNodes.length - 1 && (
                      <div className="arch-arrow" aria-hidden="true">
                        {node.type === "etl" ? "⇄" : "→"}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Decisiones clave de ingeniería */}
        {decisions.length > 0 && (
          <div className="arch-section">
            <h4 className="arch-section-heading">{archData.decisions_title}</h4>
            <div className="arch-decisions-grid">
              {decisions.map((item, idx) => (
                <div key={idx} className="arch-decision-item">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

export default ArchitectureModal;
