import { useTranslation } from "react-i18next";
import TechStack from "./TechStack";
import "./About.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

/**
 * Componente que renderiza un icono SVG según su nombre identificador.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.name - Nombre del icono ('team', 'rocket', 'puzzle', 'sync').
 * @returns {JSX.Element|null} El icono SVG.
 */
function SkillIcon({ name }) {
  const icons = {
    team: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    rocket: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    lightbulb: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
    sync: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
      </svg>
    )
  };
  return icons[name] || null;
}

/**
 * Componente sobre mí (About).
 * Presenta un resumen personal, red interactiva de tecnologías, soft skills e idiomas con barras de progreso.
 * 
 * @returns {JSX.Element} La sección sobre mí.
 */
function About() {
  const sectionRef = useIntersectionObserver();
  const { t } = useTranslation();

  const softSkills = [
    { 
      name: t("about.skill_teamwork_title"), 
      desc: t("about.skill_teamwork_desc"),
      icon: "team"
    },
    { 
      name: t("about.skill_proactivity_title"), 
      desc: t("about.skill_proactivity_desc"),
      icon: "rocket"
    },
    { 
      name: t("about.skill_problem_solving_title"), 
      desc: t("about.skill_problem_solving_desc"),
      icon: "lightbulb"
    },
    { 
      name: t("about.skill_adaptation_title"), 
      desc: t("about.skill_adaptation_desc"),
      icon: "sync"
    },
  ];

  const languages = [
    { name: t("about.lang_spanish"), level: t("about.level_native"), percentage: 100 },
    { name: t("about.lang_valencian"), level: t("about.level_advanced_c1"), percentage: 85 },
    { name: t("about.lang_english"), level: t("about.level_advanced_c1"), percentage: 85 },
    { name: t("about.lang_italian"), level: t("about.level_intermediate_b1"), percentage: 55 },
  ];

  return (
    <section className="section-card" id="about" ref={sectionRef}>
      <h2>{t("about.title")}</h2>
      <p className="about-text">
        {t("about.text")}
      </p>
      
      <div className="about-grid">
        <div className="about-tech-col">
          <TechStack />
        </div>
        <div className="about-skills-col">
          <div className="soft-skills-container">
            <h3>{t("about.soft_skills_title")}</h3>
            <ul className="skills-list-premium">
              {softSkills.map((skill, index) => (
                <li key={index} className="skill-item-premium">
                  <div className="skill-icon-wrapper">
                    <SkillIcon name={skill.icon} />
                  </div>
                  <div className="skill-text-wrapper">
                    <h4 className="skill-name-premium">{skill.name}</h4>
                    <p className="skill-desc-premium">{skill.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
 
          <div className="languages-container">
            <h3>{t("about.languages_title")}</h3>
            <ul className="languages-list-premium">
              {languages.map((lang, index) => (
                <li key={index} className="language-item-premium">
                  <div className="language-info">
                    <span className="language-name">{lang.name}</span>
                    <span className="language-level">{lang.level}</span>
                  </div>
                  <div className="progress-bar-container">
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
