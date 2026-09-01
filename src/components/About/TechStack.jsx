import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./TechStack.css";
import githubWhiteIcon from "@/assets/icons/github-white.svg";

/**
 * Componente interactivo que muestra una red del stack tecnológico.
 * Muestra el logo VB en el centro y las tecnologías orbitando a su alrededor
 * como un sistema solar. Cuenta con desaceleración progresiva y suave al pasar sobre un nodo.
 * 
 * @returns {JSX.Element} El componente de red de habilidades renderizado.
 */
function TechStack() {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredSubnode, setHoveredSubnode] = useState(false);
  const [rotation, setRotation] = useState(0);
  
  const currentSpeedRef = useRef(0.18); // Velocidad base (grados por frame, reducida para órbita más lenta)
  const closeTimeoutRef = useRef(null);

  // Limpiar el timeout al desmontar
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Animación progresiva de órbita y desaceleración suave
  useEffect(() => {
    let animationFrameId;
    const updateRotation = () => {
      // Ralentizar solo cuando se está haciendo hover sobre un nodo específico
      const targetSpeed = hoveredIndex !== null ? 0 : 0.18;
      
      // Interpolación lineal (lerp) para una transición fluida y natural
      currentSpeedRef.current += (targetSpeed - currentSpeedRef.current) * 0.045;
      
      setRotation(prev => (prev + currentSpeedRef.current) % 360);
      animationFrameId = requestAnimationFrame(updateRotation);
    };

    animationFrameId = requestAnimationFrame(updateRotation);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hoveredIndex]);

  /**
   * Obtiene la etiqueta del tipo de tecnología correspondiente a un subnodo satélite.
   *
   * @param {string} subnodeName - Nombre del subnodo (ej. 'GitHub', 'Nginx', 'React').
   * @returns {string} Etiqueta traducida del tipo de herramienta o plataforma.
   */
  const getSubnodeType = (subnodeName) => {
    if (subnodeName === "GitHub") {
      return t("techstack.types.platform");
    }
    if (subnodeName === "Nginx") {
      return t("techstack.types.tool");
    }
    return t("techstack.types.framework");
  };

  /**
   * Maneja la entrada del cursor del ratón sobre un nodo principal.
   *
   * @param {number} index - Índice del nodo de tecnología.
   */
  const handleMouseEnterParent = (index) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setHoveredIndex(index);
    setHoveredSubnode(false);
  };

  /**
   * Maneja la salida del cursor del ratón de un nodo principal,
   * programando un retraso de 300 ms antes de deseleccionar para permitir interactuar con el subnodo.
   */
  const handleMouseLeaveParent = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
      setHoveredSubnode(false);
    }, 300); // 300ms de gracia para mover el ratón al subnodo
  };

  /**
   * Maneja la entrada del cursor del ratón sobre un subnodo satélite.
   *
   * @param {number} index - Índice del nodo padre asociado.
   */
  const handleMouseEnterSubnode = (index) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setHoveredIndex(index);
    setHoveredSubnode(true);
  };

  /**
   * Maneja la salida del cursor del ratón de un subnodo satélite.
   */
  const handleMouseLeaveSubnode = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
      setHoveredSubnode(false);
    }, 300);
  };

  /**
   * Maneja la interacción por click o tap en un nodo principal del stack.
   * Alterna la selección si ya estaba seleccionado, o lo activa si no lo estaba.
   *
   * @param {React.MouseEvent} e - Evento disparador del click o tap.
   * @param {number} index - Índice del nodo de tecnología seleccionado.
   */
  const handleNodeClick = (e, index) => {
    e.stopPropagation();
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    if (hoveredIndex === index) {
      setHoveredIndex(null);
      setHoveredSubnode(false);
    } else {
      setHoveredIndex(index);
      setHoveredSubnode(false);
    }
  };

  /**
   * Maneja la interacción por click o tap en un subnodo satélite.
   * Activa los detalles del subnodo y detiene la propagación para no deseleccionar el nodo padre.
   *
   * @param {React.MouseEvent} e - Evento disparador del click o tap.
   * @param {number} index - Índice del nodo principal asociado.
   */
  const handleSubnodeClick = (e, index) => {
    e.stopPropagation();
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setHoveredIndex(index);
    setHoveredSubnode(true);
  };

  /**
   * Maneja el click o tap en el lienzo exterior para deseleccionar cualquier nodo si se pulsa fuera.
   */
  const handleCanvasClick = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setHoveredIndex(null);
    setHoveredSubnode(false);
  };

  /**
   * Maneja la salida del puntero del ratón de todo el contenedor del lienzo.
   */
  const handleCanvasMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setHoveredIndex(null);
    setHoveredSubnode(false);
  };

  /**
   * Maneja eventos de teclado (Enter, Espacio y Escape) en los nodos principales para accesibilidad.
   *
   * @param {React.KeyboardEvent} e - Evento de teclado.
   * @param {number} index - Índice del nodo de tecnología.
   */
  const handleNodeKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNodeClick(e, index);
    } else if (e.key === "Escape") {
      e.preventDefault();
      handleCanvasClick();
    }
  };

  /**
   * Maneja eventos de teclado (Enter, Espacio y Escape) en los subnodos satélites para accesibilidad.
   *
   * @param {React.KeyboardEvent} e - Evento de teclado.
   * @param {number} index - Índice del nodo principal de tecnología.
   */
  const handleSubnodeKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSubnodeClick(e, index);
    } else if (e.key === "Escape") {
      e.preventDefault();
      handleCanvasClick();
    }
  };

  const centerNode = { x: 300, y: 260, label: "VB" };
  const radius = 150;

  // Base raw tech items data
  const rawTechItems = [
    {
      name: "HTML5",
      type: t("techstack.types.language"),
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26",
      desc: t("techstack.descriptions.html"),
    },
    {
      name: "CSS3",
      type: t("techstack.types.language"),
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6",
      desc: t("techstack.descriptions.css"),
      subnode: {
        name: "Tailwind",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        color: "#38B2AC",
        desc: t("techstack.descriptions.tailwind")
      }
    },
    {
      name: "JavaScript",
      type: t("techstack.types.language"),
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
      desc: t("techstack.descriptions.javascript"),
      subnode: {
        name: "React",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB",
        desc: t("techstack.descriptions.react"),
      },
    },
    {
      name: "Python",
      type: t("techstack.types.language"),
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB",
      desc: t("techstack.descriptions.python"),
      subnode: {
        name: "Django",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        color: "#44B78B",
        desc: t("techstack.descriptions.django"),
      },
    },
    {
      name: "Java",
      type: t("techstack.types.language"),
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "#F89820",
      desc: t("techstack.descriptions.java"),
      subnode: {
        name: "Spring Boot",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        color: "#6DB33F",
        desc: t("techstack.descriptions.spring"),
      },
    },
    {
      name: "PostgreSQL",
      type: t("techstack.types.database"),
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "#336791",
      desc: t("techstack.descriptions.postgresql"),
    },
    {
      name: "MongoDB",
      type: t("techstack.types.database"),
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248",
      desc: t("techstack.descriptions.mongodb"),
    },
    {
      name: "Docker",
      type: t("techstack.types.tool"),
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "#2496ED",
      desc: t("techstack.descriptions.docker"),
      subnode: {
        name: "Nginx",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        color: "#009639",
        desc: t("techstack.descriptions.nginx"),
      },
    },
    {
      name: "Git",
      type: t("techstack.types.tool"),
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032",
      desc: t("techstack.descriptions.git"),
      subnode: {
        name: "GitHub",
        iconUrl: githubWhiteIcon,
        color: "var(--github-color)",
        desc: t("techstack.descriptions.github"),
      },
    },
  ];

  // Calcular las posiciones en círculo y la orientación exterior de subnodos
  const techItems = rawTechItems.map((item, index) => {
    // Distribuir equiespaciadamente y empezar desde arriba (-90deg o -PI/2)
    const angle = (index * 2 * Math.PI) / rawTechItems.length - Math.PI / 2;
    const x = Math.round(centerNode.x + radius * Math.cos(angle));
    const y = Math.round(centerNode.y + radius * Math.sin(angle));

    let subnode = null;
    if (item.subnode) {
      const subRadius = 80; // Distancia del nodo padre al subnodo (incrementada para mayor separación)
      const subX = Math.round(x + subRadius * Math.cos(angle));
      const subY = Math.round(y + subRadius * Math.sin(angle));
      subnode = {
        ...item.subnode,
        x: subX,
        y: subY,
      };
    }

    return {
      ...item,
      x,
      y,
      subnode,
    };
  });

  const getDetailContent = () => {
    if (hoveredIndex === null) {
      return (
        <p className="tech-detail-placeholder">
          {t("techstack.placeholder")}
        </p>
      );
    }

    const tech = techItems[hoveredIndex];
    if (hoveredSubnode && tech.subnode) {
      const color = tech.subnode.color;
      const isVar = color.startsWith("var");
      const bg = isVar ? `color-mix(in srgb, ${color} 12.5%, transparent)` : `${color}20`;
      const textColor = (color === "#ffffff" || color === "var(--github-color)") ? "var(--text-color)" : color;
      return (
        <div className="tech-detail-active">
          <span 
            className="tech-detail-badge" 
            style={{ 
              backgroundColor: bg,
              color: textColor,
              borderColor: color
            }}
          >
            {getSubnodeType(tech.subnode.name)} {tech.subnode.name}
          </span>
          <p className="tech-detail-desc">{tech.subnode.desc}</p>
        </div>
      );
    }

    return (
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
    );
  };

  return (
    <div className="tech-stack-container">
      <h3 className="tech-stack-title">{t("techstack.title")}</h3>
      <p className="tech-stack-subtitle">
        {t("techstack.subtitle")}
      </p>

      <div 
        className="tech-stack-canvas"
        onClick={handleCanvasClick}
        onMouseLeave={handleCanvasMouseLeave}
      >
        <svg viewBox="0 0 600 520" className="tech-stack-svg">
          {/* Definiciones para filtros de sombra y glows */}
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
                  transformOrigin: `${centerNode.x}px ${centerNode.y}px` 
                }}
              >
                {/* Línea de conexión láser al centro */}
                <line
                  x1={centerNode.x}
                  y1={centerNode.y}
                  x2={tech.x}
                  y2={tech.y}
                  className={`connection-line ${isHovered ? "active" : ""}`}
                  style={{
                    stroke: tech.color,
                  }}
                />

                {/* Subnodo satélite (Framework/Herramienta) si existe */}
                {sub && (
                  <g
                    className={`subnode-group ${isSubnodeActive ? "active" : ""}`}
                    role="button"
                    tabIndex={isSubnodeActive ? 0 : -1}
                    aria-label={`${sub.name}, ${getSubnodeType(sub.name)}`}
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
                    {/* Círculo invisible de impacto para el subnodo */}
                    <circle cx={sub.x} cy={sub.y} r="30" fill="rgba(0,0,0,0)" />

                    {/* Línea de conexión de subnodo a padre */}
                    <line
                      x1={tech.x}
                      y1={tech.y}
                      x2={sub.x}
                      y2={sub.y}
                      stroke={isSubnodeActive ? sub.color : "var(--card-border)"}
                      strokeWidth="2.5"
                      strokeDasharray="4,4"
                      style={{
                        transition: "stroke 0.3s ease"
                      }}
                    />

                    {/* Elementos visuales del subnodo con contra-órbita y transform origin específico */}
                    <g style={{ transform: `rotate(${-rotation}deg)`, transformOrigin: `${sub.x}px ${sub.y}px` }}>
                      {/* Círculo exterior (glow de hover) */}
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
                      
                      {/* Círculo base (satélite, r=26) */}
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

                      {/* Icono del subnodo */}
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
                  {/* Círculo invisible de impacto para evitar parpadeos */}
                  <circle
                    cx={tech.x}
                    cy={tech.y}
                    r="38"
                    fill="rgba(0,0,0,0)"
                  />

                  {/* Elementos del nodo principal con contra-órbita y transform origin específico */}
                  <g style={{ transform: `rotate(${-rotation}deg)`, transformOrigin: `${tech.x}px ${tech.y}px` }}>
                    {/* Círculo exterior (glow de hover) */}
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
                    
                    {/* Círculo base */}
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

                    {/* Icono de la tecnología */}
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

          {/* Nodo central (VB) - Estático */}
          <g className="center-node-group">
            <circle
              cx={centerNode.x}
              cy={centerNode.y}
              r="36"
              className="center-circle"
            />
            <text
              x={centerNode.x}
              y={centerNode.y}
              className="center-circle-text"
              dominantBaseline="central"
            >
              {centerNode.label}
            </text>
          </g>
        </svg>

        {/* Panel de detalles dinámico */}
        <div 
          className="tech-details-panel glass-panel"
          onClick={(e) => e.stopPropagation()}
        >
          {getDetailContent()}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
