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
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M21 15a2 2 0 0 1 2 2v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M9 15a6 6 0 0 0-6 6v1h12v-1a6 6 0 0 0-6-6z" />
      </svg>
    ),
    rocket: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2s-8 7-9 11a5 5 0 0 0-3 3l-5 5h3l5-5a5 5 0 0 0 3-3c4-1 11-9 11-9z" />
        <path d="M3 21h.01M9 15l-6 6" />
      </svg>
    ),
    puzzle: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    sync: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
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

  const softSkills = [
    { 
      name: "Trabajo en equipo", 
      desc: "Colaboración activa y comunicación fluida en equipos de trabajo multidisciplinares.",
      icon: "team"
    },
    { 
      name: "Proactividad e iniciativa", 
      desc: "Búsqueda constante de mejoras, proponer ideas y aprender nuevas tecnologías de forma autónoma.",
      icon: "rocket"
    },
    { 
      name: "Resolución de problemas", 
      desc: "Enfoque analítico para diagnosticar fallos y encontrar soluciones de forma eficaz.",
      icon: "puzzle"
    },
    { 
      name: "Adaptación al cambio", 
      desc: "Flexibilidad para integrarme rápidamente en dinámicas de equipo y entornos tecnológicos diversos.",
      icon: "sync"
    },
  ];

  const languages = [
    { name: "Castellano", level: "Nativo", percentage: 100 },
    { name: "Valenciano", level: "Avanzado (C1)", percentage: 85 },
    { name: "Inglés", level: "Avanzado (C1)", percentage: 85 },
    { name: "Italiano", level: "Intermedio (B1)", percentage: 55 },
  ];

  return (
    <section className="section-card" id="about" ref={sectionRef}>
      <h2>Sobre mí</h2>
      <p className="about-text">
        Estudiante de Ingeniería Informática en la Universitat Jaume I, con
        experiencia en desarrollo web y backend. Me considero proactivo, con
        facilidad para el trabajo en equipo y la resolución de problemas, y
        siempre dispuesto a aceptar nuevos desafíos y entornos. Estoy
        buscando oportunidades para aplicar mis conocimientos y crecer profesionalmente en el campo del desarrollo de software.
      </p>
      
      <div className="about-grid">
        <div className="about-tech-col">
          <TechStack />
        </div>
        <div className="about-skills-col">
          <div className="soft-skills-container">
            <h3>Soft Skills</h3>
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
            <h3>Idiomas</h3>
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
