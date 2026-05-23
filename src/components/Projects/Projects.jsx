import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const projectsData = [
    {
      title: t("projects.titles.gustome"),
      subtitle: t("projects.periods.gustome"),
      description: t("projects.descriptions.gustome"),
      tech: ["React (Vite)", "Firebase Auth", "Cloud Firestore"],
      image: gustomeImage,
      references: [
        {
          label: "GitHub",
          url: "https://github.com/Victor-Blasco/Gustome-main",
          isPrivate: true,
        },
      ],
    },
    {
      title: t("projects.titles.tfg"),
      subtitle: t("projects.periods.tfg"),
      description: t("projects.descriptions.tfg"),
      tech: ["Python (Django)", "PostgreSQL", "Celery/Redis", "Tailwind CSS", "Docker"],
      image: tfgImage,
      references: [
        {
          label: "GitHub",
          url: "https://github.com/VictorBlascoPamesa/Plataforma_BI",
          isPrivate: true,
        },
      ],
    },
    {
      title: t("projects.titles.mormas"),
      subtitle: t("projects.periods.mormas"),
      description: t("projects.descriptions.mormas"),
      tech: ["Java (Spring Boot)", "HTML/CSS", "PostgreSQL"],
      image: mormasImage,
      references: [
        {
          label: "GitHub",
          url: "https://github.com/Victor-Blasco/MoRMaS",
          isPrivate: true,
        },
      ],
    },
    {
      title: t("projects.titles.marketpulse"),
      subtitle: t("projects.periods.marketpulse"),
      description: t("projects.descriptions.marketpulse"),
      tech: ["Python (Pandas, NumPy)", "Streamlit", "Yahoo Finance API"],
      image: marketPulseImage,
      references: [
        {
          label: "GitHub",
          url: "https://github.com/Victor-Blasco/market-pulse-project",
        },
      ],
    },
    {
      title: t("projects.titles.portfolio"),
      subtitle: t("projects.periods.portfolio"),
      description: t("projects.descriptions.portfolio"),
      tech: ["JavaScript (React)", "CSS Vanilla", "Vite"],
      image: null,
      references: [
        {
          label: "GitHub",
          url: "https://github.com/Victor-Blasco/portfolio-dev",
        },
      ],
    },
  ];

  return (
    <section className="section-card projects-section" id="projects" ref={sectionRef}>
      <h2>{t("projects.title")}</h2>
      <div className="projects-grid-list">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={index} className={`project-row ${isEven ? "normal" : "reversed"}`}>
              {/* Lado A: Información */}
              <div className="project-info-side">
                <span className="project-tag">{t("projects.featured_tag")}</span>
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
                        <span key={rIdx} className="social-link private-link" title={t("projects.private_repo")}>
                          <Icon name="github" className="github" />
                          {t("projects.private_repo")}
                        </span>
                      );
                    }
                    return (
                      <a key={rIdx} href={ref.url} target="_blank" rel="noopener noreferrer" className="social-link github-link">
                        <Icon name="github" className="github" />
                        {t("projects.view_on_github")}
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