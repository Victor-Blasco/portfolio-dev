import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Projects.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Icon from "../Icon/Icon";
import ProjectCarousel from "./ProjectCarousel";
import ImageLightbox from "./ImageLightbox";

// Carga dinámica de imágenes de proyectos organizada por carpetas
const gustomeGlob = import.meta.glob("../../assets/projects/gustome/*.{png,jpg,jpeg,svg,webp}", { eager: true });
const tfgGlob = import.meta.glob("../../assets/projects/tfg/*.{png,jpg,jpeg,svg,webp}", { eager: true });
const mormasGlob = import.meta.glob("../../assets/projects/mormas/*.{png,jpg,jpeg,svg,webp}", { eager: true });
const marketpulseGlob = import.meta.glob("../../assets/projects/marketpulse/*.{png,jpg,jpeg,svg,webp}", { eager: true });
const portfolioGlob = import.meta.glob("../../assets/projects/portfolio/*.{png,jpg,jpeg,svg,webp}", { eager: true });

// Mapa declarativo de subtítulos para imágenes de proyectos
const PROJECT_CAPTION_MAP = {
  gustome: {
    landing: "projects.captions.gustome.landing",
    agregar_plato: "projects.captions.gustome.agregar_plato",
    pedidos_restaurante: "projects.captions.gustome.pedidos_restaurante",
    pedidos_cliente_movil: "projects.captions.gustome.pedidos_cliente_movil",
    dashboard: "projects.captions.gustome.dashboard",
  },
  tfg: {
    login: "projects.captions.tfg.login",
    ejecutivo: "projects.captions.tfg.ejecutivo",
    operativo: "projects.captions.tfg.operativo",
  },
  mormas: {
    promotor: "projects.captions.mormas.promotor",
    competiciones: "projects.captions.mormas.competiciones",
  },
  marketpulse: {
    dashboard: "projects.captions.marketpulse.main",
  },
};

/**
 * Mapea las imágenes cargadas dinámicamente mediante glob a la estructura esperada por el carrusel,
 * asignando las traducciones correctas según el mapa declarativo o un fallback limpio.
 * 
 * @param {Object} globObj - El objeto retornado por import.meta.glob.
 * @param {string} projectKey - Identificador del proyecto para mapear descripciones.
 * @param {Function} t - Función de traducción de i18next.
 * @returns {Array<{src: string, caption: string}>} Lista de imágenes formateada.
 */
const getProjectImages = (globObj, projectKey, t) => {
  const captions = PROJECT_CAPTION_MAP[projectKey] || {};

  return Object.keys(globObj).map((path) => {
    const src = globObj[path].default || globObj[path];
    const filename = path.split("/").pop().toLowerCase();
    const matchedKey = Object.keys(captions).find((key) => filename.includes(key));
    
    let caption = matchedKey ? t(captions[matchedKey]) : "";
    if (!caption) {
      const cleanName = filename
        .replace(/\.[^/.]+$/, "")
        .replace(/[_-]/g, " ");
      caption = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
    }

    return { src, caption };
  });
};

/**
 * Componente que muestra la lista de proyectos destacados.
 * Renderiza tarjetas con detalles, tecnologías, enlaces a repositorios o demos,
 * y un carrusel de capturas de pantalla interactivo con visor ampliado.
 * 
 * @returns {JSX.Element} La sección de proyectos.
 */
function Projects() {
  const sectionRef = useIntersectionObserver();
  const { t } = useTranslation();

  // Estado para controlar la visualización de la imagen en grande (Lightbox)
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    initialIndex: 0,
    title: ""
  });

  /**
   * Abre el lightbox a pantalla completa con las imágenes del proyecto.
   * 
   * @param {Array<{src: string, caption: string}>} images - Lista de imágenes del proyecto.
   * @param {number} index - Índice de la imagen inicial seleccionada.
   * @param {string} title - Título del proyecto.
   */
  const openLightbox = (images, index, title) => {
    setLightbox({
      isOpen: true,
      images,
      initialIndex: index,
      title
    });
  };

  /**
   * Cierra el lightbox a pantalla completa.
   */
  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const projectsData = [
    {
      title: t("projects.titles.gustome"),
      subtitle: t("projects.periods.gustome"),
      description: t("projects.descriptions.gustome"),
      tech: ["React (Vite)", "Firebase Auth", "Cloud Firestore"],
      images: getProjectImages(gustomeGlob, "gustome", t),
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
      images: getProjectImages(tfgGlob, "tfg", t),
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
      images: getProjectImages(mormasGlob, "mormas", t),
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
      images: getProjectImages(marketpulseGlob, "marketpulse", t),
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
      images: getProjectImages(portfolioGlob, "portfolio", t),
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
                {project.images && project.images.length > 0 ? (
                  <ProjectCarousel 
                    images={project.images} 
                    title={project.title} 
                    onImageClick={(imgIndex) => openLightbox(project.images, imgIndex, project.title)} 
                  />
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

      {/* Lightbox a pantalla completa */}
      {lightbox.isOpen && (
        <ImageLightbox
          images={lightbox.images}
          currentIndex={lightbox.initialIndex}
          title={lightbox.title}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}

export default Projects;