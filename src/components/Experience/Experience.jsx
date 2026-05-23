import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Experience.css";
import Card from "@/components/Card/Card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

/**
 * Icono de maletín vectorizado para hitos laborales.
 * 
 * @returns {JSX.Element} Icono SVG.
 */
const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="timeline-icon">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

/**
 * Icono de birrete vectorizado para hitos académicos.
 * 
 * @returns {JSX.Element} Icono SVG.
 */
const GraduationCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="timeline-icon">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

/**
 * Componente de Experiencia y Educación (Timeline Interactivo).
 * Muestra el historial profesional y educativo de forma unificada y cronológica.
 * Permite filtrar por tipo de hito y cuenta con micro-interacciones en hover.
 *
 * @returns {JSX.Element} La sección de experiencia y educación interactiva.
 */
function Experience() {
  const sectionRef = useIntersectionObserver();
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  const [hoveredId, setHoveredId] = useState(null);

  // Datos cronológicos de traducción dinámica
  const timelineData = [
    {
      id: "pamesa",
      type: "work",
      title: t("experience.titles.pamesa"),
      institution: t("experience.institutions.pamesa"),
      period: t("experience.periods.pamesa"),
      description: t("experience.descriptions.pamesa")
    },
    {
      id: "milano",
      type: "education",
      title: t("experience.titles.milano"),
      institution: t("experience.institutions.milano"),
      period: t("experience.periods.milano"),
      description: t("experience.descriptions.milano")
    },
    {
      id: "ecoporcelanico",
      type: "work",
      title: t("experience.titles.ecoporcelanico"),
      institution: t("experience.institutions.ecoporcelanico"),
      period: t("experience.periods.ecoporcelanico"),
      description: t("experience.descriptions.ecoporcelanico")
    },
    {
      id: "wandregar",
      type: "work",
      title: t("experience.titles.wandregar"),
      institution: t("experience.institutions.wandregar"),
      period: t("experience.periods.wandregar"),
      description: t("experience.descriptions.wandregar")
    },
    {
      id: "uji",
      type: "education",
      title: t("experience.titles.uji"),
      institution: t("experience.institutions.uji"),
      period: t("experience.periods.uji"),
      description: t("experience.descriptions.uji")
    }
  ];

  return (
    <section className="section-card" id="experience" ref={sectionRef}>
      <h2>{t("experience.title")}</h2>
      <p className="experience-subtitle">
        {t("experience.subtitle")}
      </p>

      {/* Controles de Filtrado */}
      <div className="timeline-filters-container">
        <div className="timeline-filters glass-panel">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
            type="button"
          >
            {t("experience.filter_all")}
          </button>
          <button
            className={`filter-btn ${filter === "work" ? "active" : ""}`}
            onClick={() => setFilter("work")}
            type="button"
          >
            {t("experience.filter_work")}
          </button>
          <button
            className={`filter-btn ${filter === "education" ? "active" : ""}`}
            onClick={() => setFilter("education")}
            type="button"
          >
            {t("experience.filter_education")}
          </button>
        </div>
      </div>

      {/* Contenedor del Timeline */}
      <div className="timeline-container">
        <div className="timeline-line"></div>

        {timelineData.map((item, index) => {
          const isFilteredOut = filter !== "all" && filter !== item.type;
          const isLeft = index % 2 === 0;

          return (
            <div
              key={item.id}
              className={`timeline-item ${isLeft ? "left-item" : "right-item"} ${item.type} ${
                isFilteredOut ? "filtered-out" : ""
              } ${hoveredId === item.id ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Nodo de Timeline */}
              <div className={`timeline-badge ${hoveredId === item.id ? "pulse-active" : ""}`}>
                {item.type === "work" ? <BriefcaseIcon /> : <GraduationCapIcon />}
              </div>

              {/* Tarjeta del Timeline */}
              <div className="timeline-card-wrapper">
                <Card
                  title={`${item.title} | ${item.institution}`}
                  subtitle={item.period}
                  description={item.description}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
