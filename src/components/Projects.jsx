import Card from "./Card";
import "./Projects.css";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

function Projects() {

  const sectionRef = useIntersectionObserver("projects");

  return (
    <section className="section-card" id="projects" ref={sectionRef}>
      <h2>Proyectos</h2>
      <div className="projects-list">

        <Card title="Mountain Race Management System (MoRMaS)"
              description="Aplicación web de gestión de carreras de montaña, desarrollado en equipo. Incluye gestión de usuarios, inscripciones y resultados de carreras con roles diferenciados (promotor y participante) y funcionalidades como operaciones CRUD, búsqueda y filtrado de carreras, envio de emails automáticos y generación de inscripciones en PDF."
              tech="Java (Spring Boot), HTML/CSS, PostgreSQL" 
              references={[{label: "Enlace a GitHub", url: "https://github.com/Victor-Blasco/MoRMaS"}]} />
              
        <Card title="Portfolio Web"
              description="Página web personal para mostrar mi experiencia, educación y proyectos. Desarrollada con React, presenta un diseño limpio y profesional, optimizada para dispositivos móviles y con enlaces a mis perfiles profesionales. "
              tech="JavaScript (React), HTML/CSS" 
              references={[{label: "Enlace a GitHub", url: "https://github.com/Victor-Blasco/portfolio-dev"}]} />
      </div>
    </section>
  );
}

export default Projects;