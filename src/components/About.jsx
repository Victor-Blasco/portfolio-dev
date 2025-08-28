import SkillsList from "./SkillsList";

function About() {

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
  ];
  const languages = [
    "Castellano: Nativo",
    "Valenciano: Avanzado (C1)",
    "Inglés: Avanzado (C1)",
    "Italiano: Básico (A2)",
  ];

  return (
    <section className="section-card" id="about">
      <h2>Sobre mí</h2>
      <p>
        Soy estudiante de Ingeniería Informática en la Universitat Jaume I, con
        experiencia en desarrollo web y backend. Me considero proactivo, con
        facilidad para el trabajo en equipo y la resolución de problemas, y
        siempre dispuesto a aprender y adaptarme a nuevos entornos. Estoy
        buscando oportunidades para aplicar mis conocimientos y crecer profesionalmente en el campo de la programación.
        
      </p>
      <SkillsList title="Hard Skills" skills={hardSkills} />
      <SkillsList title="Soft Skills" skills={softSkills} />
      <SkillsList title="Idiomas" skills={languages} />
    </section>
  );
}

export default About;
