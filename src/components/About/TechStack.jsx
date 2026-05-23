import { useState, useRef, useEffect } from "react";
import "./TechStack.css";

/**
 * Componente interactivo que muestra una red del stack tecnológico.
 * Dibuja un abanico de conexiones SVG a nodos de tecnologías,
 * desplegando subnodos satélites (frameworks/plataformas) con animaciones de distancia optimizada.
 * Cuenta con un buffer de retardo de 300ms en el cierre para facilitar la transición del ratón a los subnodos.
 * 
 * @returns {JSX.Element} El componente de red de habilidades renderizado.
 */
function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredSubnode, setHoveredSubnode] = useState(false);
  const closeTimeoutRef = useRef(null);

  // Limpiar el timeout al desmontar
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnterParent = (index) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setHoveredIndex(index);
    setHoveredSubnode(false);
  };

  const handleMouseLeaveParent = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
      setHoveredSubnode(false);
    }, 300); // 300ms de gracia para mover el ratón al subnodo
  };

  const handleMouseEnterSubnode = (index) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setHoveredIndex(index);
    setHoveredSubnode(true);
  };

  const handleMouseLeaveSubnode = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
      setHoveredSubnode(false);
    }, 300);
  };

  const centerNode = { x: 300, y: 340, label: "VB" };

  const techItems = [
    {
      name: "HTML5",
      type: "[Lenguaje]",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      x: 78,
      y: 280,
      color: "#E34F26",
      desc: "Maquetado web estructurado y semántico según estándares modernos de la W3C.",
    },
    {
      name: "CSS3",
      type: "[Lenguaje]",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      x: 107,
      y: 215,
      color: "#1572B6",
      desc: "Diseño visual, layouts flexibles (Grid/Flexbox) y animaciones responsivas.",
      subnode: {
        name: "Tailwind",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        x: 57,
        y: 182,
        color: "#38B2AC",
        desc: "Framework CSS utilitario para maquetación ágil de interfaces mediante clases predefinidas y configurables."
      }
    },
    {
      name: "JavaScript",
      type: "[Lenguaje]",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      x: 155,
      y: 161,
      color: "#F7DF1E",
      desc: "Programación de lógica frontend interactiva y asincronía en el navegador.",
      subnode: {
        name: "React",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        x: 117,
        y: 114,
        color: "#61DAFB",
        desc: "Librería SPA para construir componentes reactivos, Hooks y renderizado ágil.",
      },
    },
    {
      name: "Python",
      type: "[Lenguaje]",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      x: 218,
      y: 125,
      color: "#3776AB",
      desc: "Desarrollo backend rápido, scripts de análisis de datos y automatización.",
      subnode: {
        name: "Django",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        x: 197,
        y: 69,
        color: "#44B78B",
        desc: "Framework de desarrollo rápido de APIs, ORM integrado y gestión segura de datos.",
      },
    },
    {
      name: "Java",
      type: "[Lenguaje]",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      x: 290,
      y: 110,
      color: "#F89820",
      desc: "Programación orientada a objetos robusta con tipado fuerte y alto rendimiento.",
      subnode: {
        name: "Spring Boot",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        x: 287,
        y: 50,
        color: "#6DB33F",
        desc: "Framework empresarial para microservicios y APIs REST autoconfiguradas.",
      },
    },
    {
      name: "PostgreSQL",
      type: "[Base de Datos]",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      x: 363,
      y: 119,
      color: "#336791",
      desc: "Gestión de bases de datos relacionales, transacciones ACID y consultas SQL complejas.",
    },
    {
      name: "MongoDB",
      type: "[Base de Datos]",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      x: 429,
      y: 149,
      color: "#47A248",
      desc: "Almacenamiento NoSQL documental con esquemas flexibles y alta disponibilidad.",
    },
    {
      name: "Docker",
      type: "[Herramienta]",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      x: 481,
      y: 198,
      color: "#2496ED",
      desc: "Contenedores virtuales para asegurar la paridad de entornos de desarrollo y producción.",
    },
    {
      name: "Git",
      type: "[Herramienta]",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      x: 516,
      y: 261,
      color: "#F05032",
      desc: "Sistema de control de versiones distribuido local para el desarrollo ágil.",
      subnode: {
        name: "GitHub",
        iconUrl: "https://cdn.simpleicons.org/github/ffffff",
        x: 572,
        y: 240,
        color: "#ffffff",
        desc: "Plataforma de alojamiento en la nube para el control de versiones y trabajo en equipo.",
      },
    },
  ];

  const getDetailContent = () => {
    if (hoveredIndex === null) {
      return (
        <p className="tech-detail-placeholder">
          Pasa el cursor sobre un nodo para explorar mis tecnologías y ver sus dependencias o frameworks
        </p>
      );
    }

    const tech = techItems[hoveredIndex];
    if (hoveredSubnode && tech.subnode) {
      return (
        <div className="tech-detail-active">
          <span 
            className="tech-detail-badge" 
            style={{ 
              backgroundColor: `${tech.subnode.color}20`,
              color: tech.subnode.color === "#ffffff" ? "var(--text-color)" : tech.subnode.color,
              borderColor: tech.subnode.color
            }}
          >
            {tech.subnode.name === "GitHub" ? "[Plataforma]" : "[Framework]"} {tech.subnode.name}
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
      <h3 className="tech-stack-title">Mi Stack de Tecnologías</h3>
      <p className="tech-stack-subtitle">
        Desplaza el cursor sobre los lenguajes principales para desplegar sus frameworks de soporte.
      </p>

      <div className="tech-stack-canvas">
        <svg viewBox="0 0 600 380" className="tech-stack-svg">
          {/* Definiciones para filtros de sombra y glows */}
          <defs>
            <filter id="glow-line" filterUnits="userSpaceOnUse" x="0" y="0" width="600" height="380">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-node" filterUnits="userSpaceOnUse" x="0" y="0" width="600" height="380">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Líneas de conexión curvas a los nodos principales */}
          {techItems.map((tech, index) => {
            const isHovered = hoveredIndex === index;
            const pathData = `M ${centerNode.x} ${centerNode.y} Q 300 210 ${tech.x} ${tech.y}`;

            return (
              <path
                key={`line-${index}`}
                d={pathData}
                className={`connection-line ${isHovered ? "active" : ""}`}
                style={{
                  "--tech-color": tech.color,
                  stroke: isHovered ? tech.color : "var(--card-border)",
                  opacity: hoveredIndex !== null && !isHovered ? 0.35 : 0.7
                }}
              />
            );
          })}

          {/* Líneas secundarias y Nodos satélites (Frameworks) */}
          {techItems.map((tech, index) => {
            if (!tech.subnode) return null;
            const isSubnodeActive = hoveredIndex === index;
            const isSubnodeHovered = hoveredIndex === index && hoveredSubnode;
            const sub = tech.subnode;

            return (
              <g
                key={`sub-${index}`}
                className={`subnode-group ${isSubnodeActive ? "active" : ""}`}
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
                <circle cx={sub.x} cy={sub.y} r="24" fill="rgba(0,0,0,0)" />

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

                {/* Círculo exterior (glow de hover) */}
                <circle
                  cx={sub.x}
                  cy={sub.y}
                  r="24"
                  className={`tech-node-glow ${isSubnodeHovered ? "active" : ""}`}
                  style={{
                    fill: "transparent",
                    stroke: sub.color,
                    opacity: isSubnodeHovered ? 0.8 : 0,
                    filter: isSubnodeHovered ? "url(#glow-node)" : "none"
                  }}
                />
                
                {/* Círculo base (satélite, r=20 en vez de 24) */}
                <circle
                  cx={sub.x}
                  cy={sub.y}
                  r="20"
                  className={`tech-node-circle framework-node ${isSubnodeHovered ? "highlighted" : ""}`}
                  style={{
                    stroke: isSubnodeHovered ? sub.color : "var(--card-border)",
                    fill: isSubnodeHovered ? "var(--bg-color)" : "var(--card-bg)"
                  }}
                />

                {/* Icono del subnodo */}
                <image
                  href={sub.iconUrl}
                  x={sub.x - 11}
                  y={sub.y - 11}
                  width="22"
                  height="22"
                  className={`${isSubnodeHovered ? "colored" : ""} tech-icon-${sub.name.toLowerCase()}`}
                />
              </g>
            );
          })}

          {/* Nodo central (VB) */}
          <circle
            cx={centerNode.x}
            cy={centerNode.y}
            r="28"
            className="center-circle"
          />
          <text
            x={centerNode.x}
            y={centerNode.y + 6}
            className="center-circle-text"
          >
            {centerNode.label}
          </text>

          {/* Nodos principales de tecnología */}
          {techItems.map((tech, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <g
                key={`node-${index}`}
                className={`tech-node-group ${isHovered ? "active" : ""}`}
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
                  r="28"
                  fill="rgba(0,0,0,0)"
                />

                {/* Círculo exterior (glow de hover) */}
                <circle
                  cx={tech.x}
                  cy={tech.y}
                  r="28"
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
                  r="24"
                  className={`tech-node-circle ${isHovered ? "highlighted" : ""}`}
                  style={{
                    stroke: isHovered ? tech.color : "var(--card-border)",
                    fill: isHovered ? "var(--bg-color)" : "var(--card-bg)"
                  }}
                />

                {/* Icono de la tecnología */}
                <image
                  href={tech.iconUrl}
                  x={tech.x - 14}
                  y={tech.y - 14}
                  width="28"
                  height="28"
                  className={`${isHovered ? "colored" : ""} tech-icon-${tech.name.toLowerCase()}`}
                />
              </g>
            );
          })}
        </svg>

        {/* Panel de detalles dinámico */}
        <div className="tech-details-panel glass-panel">
          {getDetailContent()}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
