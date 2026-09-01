import { useState, useRef, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "./TechStack.css";
import { CENTER_NODE, getTechItems } from "./techStackData";
import TechDetailPanel from "./TechDetailPanel";

/**
 * Componente interactivo que muestra una red del stack tecnológico.
 * Muestra el logo VB en el centro y las tecnologías orbitando a su alrededor
 * como un sistema solar. Cuenta con desaceleración progresiva y suave al pasar sobre un nodo,
 * soporte para accesibilidad con teclado y detección de prefers-reduced-motion.
 * 
 * @returns {JSX.Element} El componente de red de habilidades renderizado.
 */
function TechStack() {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredSubnode, setHoveredSubnode] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Detectar si el usuario prefiere movimiento reducido
  const prefersReducedMotion = typeof window !== "undefined" && 
    window.matchMedia && 
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const baseSpeed = prefersReducedMotion ? 0 : 0.18;
  const currentSpeedRef = useRef(baseSpeed);
  const closeTimeoutRef = useRef(null);

  // Calcular las posiciones de las tecnologías memorizadas según el idioma
  const techItems = useMemo(() => getTechItems(t), [t]);

  // Limpiar el timeout al desmontar
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Animación progresiva de órbita y desaceleración suave (LERP)
  useEffect(() => {
    if (prefersReducedMotion) return;

    let animationFrameId;
    const updateRotation = () => {
      const targetSpeed = hoveredIndex !== null ? 0 : 0.18;
      currentSpeedRef.current += (targetSpeed - currentSpeedRef.current) * 0.045;
      setRotation((prev) => (prev + currentSpeedRef.current) % 360);
      animationFrameId = requestAnimationFrame(updateRotation);
    };

    animationFrameId = requestAnimationFrame(updateRotation);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hoveredIndex, prefersReducedMotion]);

  const handleMouseEnterParent = (index) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setHoveredIndex(index);
    setHoveredSubnode(false);
  };

  const handleMouseLeaveParent = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
      setHoveredSubnode(false);
    }, 300);
  };

  const handleMouseEnterSubnode = (index) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setHoveredIndex(index);
    setHoveredSubnode(true);
  };

  const handleMouseLeaveSubnode = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
      setHoveredSubnode(false);
    }, 300);
  };

  const handleNodeClick = (e, index) => {
    e.stopPropagation();
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    if (hoveredIndex === index) {
      setHoveredIndex(null);
      setHoveredSubnode(false);
    } else {
      setHoveredIndex(index);
      setHoveredSubnode(false);
    }
  };

  const handleSubnodeClick = (e, index) => {
    e.stopPropagation();
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setHoveredIndex(index);
    setHoveredSubnode(true);
  };

  const handleCanvasClick = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setHoveredIndex(null);
    setHoveredSubnode(false);
  };

  const handleNodeKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNodeClick(e, index);
    } else if (e.key === "Escape") {
      e.preventDefault();
      handleCanvasClick();
    }
  };

  const handleSubnodeKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSubnodeClick(e, index);
    } else if (e.key === "Escape") {
      e.preventDefault();
      handleCanvasClick();
    }
  };

  return (
    <div className="tech-stack-container">
      <h3 className="tech-stack-title">{t("techstack.title")}</h3>
      <p className="tech-stack-subtitle">{t("techstack.subtitle")}</p>

      <div 
        className="tech-stack-canvas"
        onClick={handleCanvasClick}
        onMouseLeave={handleCanvasClick}
      >
        <svg viewBox="0 0 600 520" className="tech-stack-svg">
          <defs>
            <filter id="glow-line" filterUnits="userSpaceOnUse" x="0" y="0" width="600" height="520">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-node" filterUnits="userSpaceOnUse" x="0" y="0" width="600" height="520">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Sistema Solar con tecnologías orbitando */}
          {techItems.map((tech, index) => {
            const isHovered = hoveredIndex === index;
            const isSubnodeActive = hoveredIndex === index;
            const isSubnodeHovered = hoveredIndex === index && hoveredSubnode;
            const sub = tech.subnode;

            return (
              <g 
                key={`orbit-system-${index}`} 
                style={{ 
                  transform: `rotate(${rotation}deg)`, 
                  transformOrigin: `${CENTER_NODE.x}px ${CENTER_NODE.y}px` 
                }}
              >
                {/* Línea de conexión al centro */}
                <line
                  x1={CENTER_NODE.x}
                  y1={CENTER_NODE.y}
                  x2={tech.x}
                  y2={tech.y}
                  className={`connection-line ${isHovered ? "active" : ""}`}
                  style={{ stroke: tech.color }}
                />

                {/* Subnodo satélite (Framework / Herramienta) */}
                {sub && (
                  <g
                    className={`subnode-group ${isSubnodeActive ? "active" : ""}`}
                    role="button"
                    tabIndex={isSubnodeActive ? 0 : -1}
                    aria-label={sub.name}
                    aria-pressed={isSubnodeHovered}
                    aria-hidden={!isSubnodeActive}
                    onClick={(e) => handleSubnodeClick(e, index)}
                    onKeyDown={(e) => handleSubnodeKeyDown(e, index)}
                    onMouseEnter={() => handleMouseEnterSubnode(index)}
                    onMouseLeave={handleMouseLeaveSubnode}
                    style={{
                      cursor: "pointer",
                      opacity: isSubnodeActive ? 1 : 0,
                      pointerEvents: isSubnodeActive ? "auto" : "none",
                      transform: isSubnodeActive ? "scale(1)" : "scale(0.5)",
                      transformOrigin: `${tech.x}px ${tech.y}px`,
                      transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                  >
                    <circle cx={sub.x} cy={sub.y} r="30" fill="rgba(0,0,0,0)" />
                    <line
                      x1={tech.x}
                      y1={tech.y}
                      x2={sub.x}
                      y2={sub.y}
                      stroke={isSubnodeActive ? sub.color : "var(--card-border)"}
                      strokeWidth="2.5"
                      strokeDasharray="4,4"
                      style={{ transition: "stroke 0.3s ease" }}
                    />
                    <g style={{ transform: `rotate(${-rotation}deg)`, transformOrigin: `${sub.x}px ${sub.y}px` }}>
                      <circle
                        cx={sub.x}
                        cy={sub.y}
                        r="30"
                        className={`tech-node-glow ${isSubnodeHovered ? "active" : ""}`}
                        style={{
                          fill: "transparent",
                          stroke: sub.color,
                          opacity: isSubnodeHovered ? 0.8 : 0,
                          filter: isSubnodeHovered ? "url(#glow-node)" : "none"
                        }}
                      />
                      <circle
                        cx={sub.x}
                        cy={sub.y}
                        r="26"
                        className={`tech-node-circle framework-node ${isSubnodeHovered ? "highlighted" : ""}`}
                        style={{
                          stroke: isSubnodeHovered ? sub.color : "var(--card-border)",
                          fill: isSubnodeHovered ? "var(--bg-color)" : "var(--card-bg)"
                        }}
                      />
                      <image
                        href={sub.iconUrl}
                        x={sub.x - 14}
                        y={sub.y - 14}
                        width="28"
                        height="28"
                        className={`${isSubnodeHovered ? "colored" : ""} tech-icon-${sub.name.toLowerCase()}`}
                      />
                    </g>
                  </g>
                )}

                {/* Nodo principal de tecnología */}
                <g
                  className={`tech-node-group ${isHovered ? "active" : ""}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`${tech.name}, ${tech.type}`}
                  aria-pressed={isHovered}
                  aria-haspopup={tech.subnode ? "true" : undefined}
                  aria-expanded={tech.subnode ? isHovered : undefined}
                  onClick={(e) => handleNodeClick(e, index)}
                  onKeyDown={(e) => handleNodeKeyDown(e, index)}
                  onMouseEnter={() => handleMouseEnterParent(index)}
                  onMouseLeave={handleMouseLeaveParent}
                  style={{ 
                    cursor: "pointer",
                    opacity: hoveredIndex !== null && !isHovered ? 0.35 : 1,
                    transition: "opacity 0.3s ease"
                  }}
                >
                  <circle cx={tech.x} cy={tech.y} r="38" fill="rgba(0,0,0,0)" />
                  <g style={{ transform: `rotate(${-rotation}deg)`, transformOrigin: `${tech.x}px ${tech.y}px` }}>
                    <circle
                      cx={tech.x}
                      cy={tech.y}
                      r="38"
                      className={`tech-node-glow ${isHovered ? "active" : ""}`}
                      style={{
                        fill: "transparent",
                        stroke: tech.color,
                        opacity: isHovered ? 0.8 : 0,
                        filter: isHovered ? "url(#glow-node)" : "none"
                      }}
                    />
                    <circle
                      cx={tech.x}
                      cy={tech.y}
                      r="32"
                      className={`tech-node-circle ${isHovered ? "highlighted" : ""}`}
                      style={{
                        stroke: isHovered ? tech.color : "var(--card-border)",
                        fill: isHovered ? "var(--bg-color)" : "var(--card-bg)"
                      }}
                    />
                    <image
                      href={tech.iconUrl}
                      x={tech.x - 18}
                      y={tech.y - 18}
                      width="36"
                      height="36"
                      className={`${isHovered ? "colored" : ""} tech-icon-${tech.name.toLowerCase()}`}
                    />
                  </g>
                </g>
              </g>
            );
          })}

          {/* Nodo central (VB) */}
          <g className="center-node-group">
            <circle cx={CENTER_NODE.x} cy={CENTER_NODE.y} r="36" className="center-circle" />
            <text x={CENTER_NODE.x} y={CENTER_NODE.y} className="center-circle-text" dominantBaseline="central">
              {CENTER_NODE.label}
            </text>
          </g>
        </svg>

        {/* Panel de detalles dinámico */}
        <TechDetailPanel 
          techItems={techItems} 
          hoveredIndex={hoveredIndex} 
          hoveredSubnode={hoveredSubnode} 
          t={t} 
        />
      </div>
    </div>
  );
}

export default TechStack;
