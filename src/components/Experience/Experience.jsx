import { useState } from "react";
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

// Datos cronológicos ordenados de más reciente a más antiguo
const timelineData = [
  {
    id: "pamesa",
    type: "work",
    title: "Ingeniero de Software (Prácticas)",
    institution: "Pamesa Grupo Empresarial",
    period: "Febrero 2026 - Mayo 2026",
    description: "Desarrollo integral de una plataforma BI para monitorización de KPIs de ciberseguridad. Implementé un pipeline ETL en Python, modelos en PostgreSQL y dashboards con Django y Tailwind CSS, utilizando Celery/Redis para orquestación asíncrona y Docker para el despliegue."
  },
  {
    id: "milano",
    type: "education",
    title: "Estancia Erasmus+",
    institution: "Università degli Studi di Milano",
    period: "Septiembre 2025 - Enero 2026",
    description: "Cursé asignaturas de máster en Computer Science y Data Science for Economics, aprendiendo NoSQL (MongoDB), Business Intelligence y Data Science, y fortaleciendo mi adaptabilidad a entornos internacionales."
  },
  {
    id: "ecoporcelanico",
    type: "work",
    title: "Operario de producción",
    institution: "ECO PORCELÁNICO S.L.U.",
    period: "Julio-Agosto 2025",
    description: "Participación activa en el proceso de producción junto a un equipo, desarrollando habilidades de colaboración, comunicación y resolución de problemas."
  },
  {
    id: "wandregar",
    type: "work",
    title: "Operario de producción",
    institution: "WANDREGAR 2001 S.L.U.",
    period: "Julio-Agosto 2024",
    description: "Colaboración en el equipo para optimizar la eficiencia de la producción, asumiendo diferentes tareas y responsabilidades donde reforcé mi proactividad y capacidad de adaptación."
  },
  {
    id: "uji",
    type: "education",
    title: "Grado en Ingeniería Informática",
    institution: "Universitat Jaume I",
    period: "2022 - presente",
    description: "Durante el grado adquirí una base sólida en programación, estructuras de datos, algoritmos, bases de datos, redes y desarrollo web, fortaleciendo habilidades colaborativas en entornos de desarrollo."
  }
];

/**
 * Componente de Experiencia y Educación (Timeline Interactivo).
 * Muestra el historial profesional y educativo de forma unificada y cronológica.
 * Permite filtrar por tipo de hito y cuenta con micro-interacciones en hover.
 *
 * @returns {JSX.Element} La sección de experiencia y educación interactiva.
 */
function Experience() {
  const sectionRef = useIntersectionObserver();
  const [filter, setFilter] = useState("all");
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="section-card" id="experience" ref={sectionRef}>
      <h2>Experiencia & Educación</h2>
      <p className="experience-subtitle">
        Una mirada cronológica a mi formación académica y mi trayectoria profesional.
      </p>

      {/* Controles de Filtrado */}
      <div className="timeline-filters-container">
        <div className="timeline-filters glass-panel">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
            type="button"
          >
            Ver Todo
          </button>
          <button
            className={`filter-btn ${filter === "work" ? "active" : ""}`}
            onClick={() => setFilter("work")}
            type="button"
          >
            Experiencia
          </button>
          <button
            className={`filter-btn ${filter === "education" ? "active" : ""}`}
            onClick={() => setFilter("education")}
            type="button"
          >
            Educación
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
