import "./Projects.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Icon from "../Icon/Icon";

// Importar imágenes de proyectos
import tfgImage from "@/assets/projects/tfg_bi_dashboard.png";
import mormasImage from "@/assets/projects/mormas_dashboard.png";
import marketPulseImage from "@/assets/projects/market_pulse_dashboard.png";
import gustomeImage from "@/assets/projects/gustome.png";

/**
 * Componente que muestra la lista de proyectos destacados.
 * Renderiza tarjetas con detalles, tecnologías y enlaces a repositorios o demos.
 * 
 * @returns {JSX.Element} La sección de proyectos.
 */
function Projects() {
  const sectionRef = useIntersectionObserver();

  const projectsData = [
    {
      title: "Gustomé - Gestión Inteligente de Cartas",
      subtitle: "Septiembre 2025 - Mayo 2026",
      description: "Plataforma digital para la digitalización y gestión de menús en restaurantes. Permite personalizar la experiencia del comensal mediante filtros interactivos por alérgenos y preferencias dietéticas en tiempo real.",
      tech: ["React (Vite)", "Firebase Auth", "Cloud Firestore"],
      image: gustomeImage,
      references: [
        {
          label: "Enlace a GitHub",
          url: "https://github.com/Victor-Blasco/Gustome-main",
          isPrivate: true,
        },
      ],
    },
    {
      title: "Plataforma BI de Ciberseguridad (TFG)",
      subtitle: "Febrero 2026 - Mayo 2026",
      description: "Plataforma de Business Intelligence end-to-end para la monitorización de KPIs de ciberseguridad corporativa. Incluye un pipeline ETL automatizado, orquestación asíncrona con Celery/Redis y dashboards interactivos en tiempo real.",
      tech: ["Python (Django)", "PostgreSQL", "Celery/Redis", "Tailwind CSS", "Docker"],
      image: tfgImage,
      references: [
        {
          label: "Enlace a GitHub",
          url: "https://github.com/VictorBlascoPamesa/Plataforma_BI",
          isPrivate: true,
        },
      ],
    },
    {
      title: "Mountain Race Management System (MoRMaS)",
      subtitle: "Septiembre 2024 - Mayo 2025",
      description: "Aplicación web corporativa para la gestión integral de carreras de montaña. Incluye control de inscripciones, publicación de resultados en tiempo real, perfiles diferenciados para promotores y corredores, envíos de correo automáticos y exportación de justificantes en PDF.",
      tech: ["Java (Spring Boot)", "HTML/CSS", "PostgreSQL"],
      image: mormasImage,
      references: [
        {
          label: "Enlace a GitHub",
          url: "https://github.com/Victor-Blasco/MoRMaS",
          isPrivate: true,
        },
      ],
    },
    {
      title: "Market Pulse - Análisis Financiero & Dashboard",
      subtitle: "Octubre 2025 - Diciembre 2025",
      description: "Aplicación interactiva de análisis bursátil en tiempo real. Consume APIs de Yahoo Finance para graficar históricos y calcular métricas estadísticas clave como la volatilidad y el valor en riesgo (VaR).",
      tech: ["Python (Pandas, NumPy)", "Streamlit", "Yahoo Finance API"],
      image: marketPulseImage,
      references: [
        {
          label: "Enlace a GitHub",
          url: "https://github.com/Victor-Blasco/market-pulse-project",
        },
      ],
    },
    {
      title: "Portfolio Web Personal",
      subtitle: "2025 - 2026",
      description: "Página web personal diseñada con enfoque premium en UI/UX para mostrar mi trayectoria profesional y académica. Cuenta con optimización móvil, soporte de modo oscuro automático y componentes interactivos como redes SVG.",
      tech: ["JavaScript (React)", "CSS Vanilla", "Vite"],
      image: null,
      references: [
        {
          label: "Enlace a GitHub",
          url: "https://github.com/Victor-Blasco/portfolio-dev",
        },
      ],
    },
  ];

  return (
    <section className="section-card projects-section" id="projects" ref={sectionRef}>
      <h2>Proyectos</h2>
      <div className="projects-grid-list">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={index} className={`project-row ${isEven ? "normal" : "reversed"}`}>
              {/* Lado A: Información */}
              <div className="project-info-side">
                <span className="project-tag">Proyecto Destacado</span>
                <h3 className="project-title">{project.title}</h3>
                <span className="project-duration">{project.subtitle}</span>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech-tags">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.references.map((ref, rIdx) => {
                    if (ref.isPrivate) {
                      return (
                        <span key={rIdx} className="social-link private-link" title="Este repositorio es privado">
                          <Icon name="github" className="github" />
                          Repositorio Privado
                        </span>
                      );
                    }
                    return (
                      <a key={rIdx} href={ref.url} target="_blank" rel="noopener noreferrer" className="social-link github-link">
                        <Icon name="github" className="github" />
                        Ver en GitHub
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Lado B: Visualización */}
              <div className="project-visual-side">
                <div className="visual-glow" style={{ "--glow-color": isEven ? "var(--glow-blue)" : "var(--glow-violet)" }}></div>
                {project.image ? (
                  <div className="project-image-frame">
                    <img src={project.image} alt={project.title} className="project-img" loading="lazy" />
                  </div>
                ) : (
                  <div className="mock-code-editor">
                    <div className="editor-header">
                      <span className="editor-dot red"></span>
                      <span className="editor-dot yellow"></span>
                      <span className="editor-dot green"></span>
                      <span className="editor-filename">Portfolio.jsx</span>
                    </div>
                    <pre className="editor-code">
                      <code>
                        <span className="keyword">const</span> <span className="function">Portfolio</span> = () =&gt; &#123;<br />
                        &nbsp;&nbsp;<span className="keyword">return</span> (<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="tag">div</span> <span className="attr">className</span>=<span className="string">"premium-ui"</span>&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="tag">Navbar</span> /&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="tag">TechStack</span> /&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="tag">Projects</span> /&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="tag">div</span>&gt;<br />
                        &nbsp;&nbsp;);<br />
                        &#125;;
                      </code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;