import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <div className="projects-list">
        <div className="project-card">
          <h3>Mountain Race Management System (MoRMaS)</h3>
          <p>
            Aplicación web de gestión de carreras de montaña, desarrollado en
            equipo. Incluye gestión de usuarios, inscripciones y resultados de
            carreras con roles diferenciados (promotor y participante) y funcionalidades como búsqueda y filtrado de carreras,
            envio de emails automáticos y generación de inscripciones en PDF.
                      </p>
          <span className="tech">Java (Spring Boot), HTML/CSS, PostgreSQL</span>
          <a href="https://github.com/Victor-Blasco/MoRMaS">Enlace a GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;