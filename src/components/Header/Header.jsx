import Icon from "../Icon/Icon";
import "./Header.css";
import avatar from "@/assets/avatar.webp";
import cv from "@/assets/CV Victor Blasco.pdf"; 
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

/**
 * Componente principal de cabecera (Header).
 * Muestra la información personal, rol, breve descripción y enlaces de contacto/redes.
 * 
 * @returns {JSX.Element} El componente de cabecera renderizado.
 */
function Header() {
  const sectionRef = useIntersectionObserver();

  return (
    <header className="header section-card glass-panel" id="header" ref={sectionRef}>
      <div className="hero-glow-spot"></div>
      
      <div className="avatar-container">
        <div className="avatar-wrapper">
          <img
            src={avatar}
            alt="Victor Blasco"
            width="220"
            height="280"
            loading="lazy"
            className="avatar"
          />
          <div className="avatar-glow"></div>
        </div>
        <div className="avatar-bubble">
          <span>¡Hola! Soy Victor Blasco 👋</span>
        </div>
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">Ingeniero de Software</p>
        <h1 className="hero-headline">
          Construyendo software de <br />
          extremo a <span className="highlight-text">extremo.</span>
        </h1>
        <p className="hero-subheadline">
          Diseñando interfaces intuitivas y arquitecturas backend sólidas.
        </p>
        
        <p className="hero-role">
          Estudiante de Ingeniería Informática, apasionado del desarrollo de software y enfocado en construir interfaces y backends elegantes, responsivos y eficientes.
        </p>
      </div>

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
