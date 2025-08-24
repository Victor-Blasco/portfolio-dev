import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <h2>Sobre mí</h2>
      <p>
        Soy estudiante de Ingeniería Informática en la Universitat Jaume I, con
        experiencia en desarrollo web y backend. Me considero proactivo, con
        facilidad para el trabajo en equipo y la resolución de problemas, y
        siempre dispuesto a aprender y adaptarme a nuevos entornos. Estoy
        buscando oportunidades para aplicar mis conocimientos y crecer profesionalmente en el campo de la programación.
        
      </p>
      <h3>Hard Skills</h3>
      <ul className="skills-list">
        <li>Python, Java, C, C#</li>
        <li>HTML, CSS, JavaScript</li>
        <li>PostgreSQL</li>
        <li>React</li>
        <li>Git, GitHub</li>
      </ul>
      <h3>Soft Skills</h3>
      <ul className="skills-list">
        <li>Trabajo en equipo</li>
        <li>Proactividad</li>
        <li>Resolución de problemas</li>
        <li>Adaptación a nuevos ambientes</li>
      </ul>
      <h3>Idiomas</h3>
      <ul className="skills-list">
        <li>Castellano: Nativo</li>
        <li>Valenciano: Avanzado (C1)</li>
        <li>Inglés: Avanzado (C1)</li>
        <li>Italiano: Básico (A2)</li>
      </ul>
    </section>
  );
}

export default About;
