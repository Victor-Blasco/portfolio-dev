import SkillsList from "@/components/SkillsList/SkillsList";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";


/**
 * Componente sobre mí (About).
 * Presenta un resumen personal y listas de habilidades (hard, soft, idiomas).
 * 
 * @returns {JSX.Element} La sección sobre mí.
 */
function About() {

  const sectionRef = useIntersectionObserver();

  const hardSkills = [
    "Python (Django)",
    "Java (Spring Boot)",
    "PostgreSQL, MongoDB",
    "Docker, Git, GitHub",
    "Celery, Redis, Jira",
    "HTML, CSS, Tailwind",
    "JavaScript (React)",
  ];
  const softSkills = [
    "Trabajo en equipo",
    "Proactividad",
    "Resolución de problemas",
    "Adaptación a nuevos ambientes",
  ];
  const languages = [
    "Castellano: Nativo",
    "Valenciano: Avanzado (C1)",
    "Inglés: Avanzado (C1)",
    "Italiano: Intermedio (B1)",
  ];

  return (
    <section className="section-card" id="about" ref={sectionRef}>
      <h2>Sobre mí</h2>
      <p>
        Estudiante de Ingeniería Informática en la Universitat Jaume I, con
        experiencia en desarrollo web y backend. Me considero proactivo, con
        facilidad para el trabajo en equipo y la resolución de problemas, y
        siempre dispuesto a aceptar nuevos desafíos y entornos. Estoy
        buscando oportunidades para aplicar mis conocimientos y crecer profesionalmente en el campo del desarrollo de software.
        
      </p>
      <SkillsList title="Hard Skills" skills={hardSkills} />
      <SkillsList title="Soft Skills" skills={softSkills} />
      <SkillsList title="Idiomas" skills={languages} />
    </section>
  );
}

export default About;
