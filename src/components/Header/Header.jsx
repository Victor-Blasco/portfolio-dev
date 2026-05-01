import Icon from "../Icon/icon";
import "./Header.css";
import avatar from "@/assets/avatar.webp";
import  { useIntersectionObserver } from "@/hooks/useIntersectionObserver";




function Header() {

  const sectionRef = useIntersectionObserver("header");

  return (
    <header className="header section-card" id="header" ref={sectionRef}>
      <img
        src={avatar}
        alt="Victor Blasco"
        width="160"
        height="200"
        loading="lazy"
        className="avatar"
      />
      <h1>Victor Blasco García</h1>
      <h2>Desarrollador Full Stack Junior</h2>
      <p>
        Estudiante de Ingeniería Informática, orientado al desarrollo software
        con experiencia en proyectos académicos. Busco aplicar mis conocimientos
        y habilidades en un entorno profesional.
      </p>
      <div className="header-links">
        <a href="mailto:victorblascogar@gmail.com">
          <Icon name="email" className="email" />
          Email
        </a>
        <a
          href="https://github.com/Victor-Blasco"
          target="_blank"
          rel="noopener noreferrer"
        >
         <Icon name="github" className="github" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/victor-blasco-garcia"
          target="_blank"
          rel="noopener noreferrer"
        >
         <Icon name="linkedin" className="linkedin"/>
          LinkedIn
        </a>
        <a
          href="/src/assets/CV%20Victor%20Blasco.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="curriculum" className="curriculum" />
          Descargar CV
        </a>
      </div>
    </header>
  );
}

export default Header;
