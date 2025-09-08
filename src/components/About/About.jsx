import SkillsList from "@/components/SkillsList/SkillsList";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";


function About() {

  const sectionRef = useIntersectionObserver();

  const hardSkills = [
    "Python, Java, C, C#",
    "HTML, CSS, JavaScript",
    "PostgreSQL",
    "React",
    "Git, GitHub"
  ];
  const softSkills = [
    "Trabajo en equipo",
    "Proactividad",
    "Resolución de problemas",
    "Adaptación a nuevos ambientes",
    "Comunicación efectiva"
  ];
  const languages = [
    "Castellano: Nativo",
    "Valenciano: Avanzado (C1)",
    "Inglés: Avanzado (C1)",
    "Italiano: Básico (A2)",
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
