import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Projects.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Icon from "../Icon/Icon";
import ProjectCarousel from "./ProjectCarousel";
import ImageLightbox from "./ImageLightbox";
import ArchitectureModal from "./ArchitectureModal";

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

// Orden de presentación prioritario para las capturas de pantalla de cada proyecto
const PROJECT_ORDER_MAP = {
  gustome: ["landing", "dashboard", "pedidos_restaurante", "pedidos_cliente_movil", "agregar_plato"],
  tfg: ["login", "ejecutivo", "operativo"],
  mormas: ["competiciones", "promotor"],
};

/**
 * Mapea las imágenes cargadas dinámicamente mediante glob a la estructura esperada por el carrusel,
 * asignando las traducciones correctas según el mapa declarativo o un fallback limpio.
 *
 * @param {Object} globObj - El objeto retornado por import.meta.glob.
 * @param {string} projectKey - Identificador del proyecto para mapear descripciones.
 * @param {Function} t - Función de traducción de i18next.
 * @returns {Array<{src: string, caption: string, isPortrait: boolean}>} Lista de imágenes formateada.
 */
const getProjectImages = (globObj, projectKey, t) => {
  const captions = PROJECT_CAPTION_MAP[projectKey] || {};
  const order = PROJECT_ORDER_MAP[projectKey] || [];

  const rawImages = Object.keys(globObj).map((path) => {
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

    const isPortrait = filename.includes("movil") || filename.includes("mobile");

    return { src, caption, filename, isPortrait };
  });

  if (order.length > 0) {
    rawImages.sort((a, b) => {
      const idxA = order.findIndex((key) => a.filename.includes(key));
      const idxB = order.findIndex((key) => b.filename.includes(key));
      const orderA = idxA === -1 ? 999 : idxA;
      const orderB = idxB === -1 ? 999 : idxB;
      return orderA - orderB;
    });
  }

  return rawImages;
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

  // Estado para controlar el modal de Arquitectura / Caso de Estudio
  const [archModalState, setArchModalState] = useState({
    isOpen: false,
    key: "tfg",
    title: "",
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
          label: "Architecture",
          hasArchitectureModal: true,
          archKey: "gustome",
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
          label: "Architecture",
          hasArchitectureModal: true,
          archKey: "tfg",
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
          label: "Architecture",
          hasArchitectureModal: true,
          archKey: "mormas",
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
                <div className="project-meta-header">
                  <span className="project-tag">{t("projects.featured_tag")}</span>
                  <span className="project-duration">{project.subtitle}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech-tags">
                  {project.tech.map((techName, idx) => (
                    <span key={idx} className="tech-tag">{techName}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.references.map((ref, rIdx) => {
                    if (ref.hasArchitectureModal) {
                      return (
                        <button
                          key={rIdx}
                          type="button"
                          className="social-link"
                          onClick={() =>
                            setArchModalState({
                              isOpen: true,
                              key: ref.archKey || "tfg",
                              title: project.title,
                            })
                          }
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                            <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                            <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                            <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                          </svg>
                          {t("projects.view_architecture")}
                        </button>
                      );
                    }
                    if (ref.isPrivate) {
                      return (
                        <span key={rIdx} className="social-link private-link" title={t("projects.private_repo")}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
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

      {/* Modal de Arquitectura / Caso de Estudio */}
      <ArchitectureModal
        isOpen={archModalState.isOpen}
        projectKey={archModalState.key}
        fallbackTitle={archModalState.title}
        onClose={() => setArchModalState((prev) => ({ ...prev, isOpen: false }))}
      />
    </section>
  );
}

export default Projects;
