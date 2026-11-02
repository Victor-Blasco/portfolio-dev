import { useTranslation } from "react-i18next";
import { getSkillCategories } from "./skillsData";
import "./SkillsGrid.css";

/**
 * Renderiza el icono SVG correspondiente a una categoría técnica.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.name - Identificador del icono ('server', 'database', 'container', 'shield', 'check', 'layout').
 * @returns {JSX.Element|null} El elemento SVG del icono.
 */
function CategoryIcon({ name }) {
  const icons = {
    server: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    ),
    database: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
    ),
    container: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" x2="12" y1="22" y2="12" />
      </svg>
    ),
    shield: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    check: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    layout: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  };

  return icons[name] || null;
}

/**
 * Cuadrícula estática de competencias técnicas agrupadas por área.
 * Sustituye el grafo orbital para permitir una lectura inmediata tanto en escritorio como en móvil.
 *
 * @returns {JSX.Element} La sección de stack técnico categorizado.
 */
function SkillsGrid() {
  const { t } = useTranslation();
  const categories = getSkillCategories(t);

  return (
    <div className="skills-grid-section">
      <h3 className="skills-grid-heading">{t("skills.title")}</h3>
      <div className="skills-categories-grid">
        {categories.map((category) => (
          <article
            key={category.id}
            className={`skill-category-card glass-panel ${category.featured ? "featured" : ""}`}
          >
            <header className="skill-category-header">
              <span className="skill-category-icon">
                <CategoryIcon name={category.icon} />
              </span>
              <h4 className="skill-category-title">{category.title}</h4>
            </header>
            <ul className="skill-chips-list">
              {category.items.map((item) => (
                <li key={item} className="skill-chip">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export default SkillsGrid;
