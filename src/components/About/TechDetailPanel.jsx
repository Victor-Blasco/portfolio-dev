import { getSubnodeType } from "./techStackData";

/**
 * Componente que muestra la tarjeta inferior con la descripción y detalles
 * del nodo o subnodo tecnológico actualmente seleccionado / en hover.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Array<Object>} props.techItems - Lista de elementos tecnológicos.
 * @param {number|null} props.hoveredIndex - Índice del nodo padre activo.
 * @param {boolean} props.hoveredSubnode - Indica si el subnodo satélite está seleccionado.
 * @param {Function} props.t - Función de traducción i18next.
 * @returns {JSX.Element} El panel de detalles renderizado.
 */
function TechDetailPanel({ techItems, hoveredIndex, hoveredSubnode, t }) {
  if (hoveredIndex === null || !techItems[hoveredIndex]) {
    return (
      <div className="tech-details-panel glass-panel" onClick={(e) => e.stopPropagation()}>
        <p className="tech-detail-placeholder">
          {t("techstack.placeholder")}
        </p>
      </div>
    );
  }

  const tech = techItems[hoveredIndex];

  if (hoveredSubnode && tech.subnode) {
    const color = tech.subnode.color;
    const isVar = color.startsWith("var");
    const bg = isVar ? `color-mix(in srgb, ${color} 12.5%, transparent)` : `${color}20`;
    const textColor = (color === "#ffffff" || color === "var(--github-color)") ? "var(--text-color)" : color;

    return (
      <div className="tech-details-panel glass-panel" onClick={(e) => e.stopPropagation()}>
        <div className="tech-detail-active">
          <span 
            className="tech-detail-badge" 
            style={{ 
              backgroundColor: bg,
              color: textColor,
              borderColor: color
            }}
          >
            {getSubnodeType(tech.subnode.name, t)} {tech.subnode.name}
          </span>
          <p className="tech-detail-desc">{tech.subnode.desc}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="tech-details-panel glass-panel" onClick={(e) => e.stopPropagation()}>
      <div className="tech-detail-active">
        <span 
          className="tech-detail-badge" 
          style={{ 
            backgroundColor: `${tech.color}20`,
            color: tech.color,
            borderColor: tech.color
          }}
        >
          {tech.type} {tech.name}
        </span>
        <p className="tech-detail-desc">{tech.desc}</p>
      </div>
    </div>
  );
}

export default TechDetailPanel;
