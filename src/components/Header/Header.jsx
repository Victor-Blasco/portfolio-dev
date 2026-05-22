import Icon from "../Icon/icon";
import "./Header.css";
import avatar from "@/assets/avatar.webp";
import cv from "@/assets/CV Victor Blasco.pdf"; 
import  { useIntersectionObserver } from "@/hooks/useIntersectionObserver";




/**
 * Componente principal de cabecera (Header).
 * Muestra la información personal, rol, breve descripción y enlaces de contacto/redes.
 * 
 * @returns {JSX.Element} El componente de cabecera renderizado.
 */
function Header() {

  const sectionRef = useIntersectionObserver("header");

  return (
    <header className="header section-card glass-panel" id="header" ref={sectionRef}>
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
        con experiencia en proyectos profesionales y académicos. Busco aplicar mis conocimientos
        y habilidades en un entorno profesional.
      </p>
      <div className="header-links">
        <a href="mailto:victorblascogar@gmail.com" className="social-link">
          <Icon name="email" className="email" />
          Email
        </a>
        <a
          href="https://github.com/Victor-Blasco"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
         <Icon name="github" className="github" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/victor-blasco-garcia"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
         <Icon name="linkedin" className="linkedin"/>
          LinkedIn
        </a>
        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Icon name="curriculum" className="curriculum" />
          Descargar CV
        </a>
      </div>
    </header>
  );
}

export default Header;
