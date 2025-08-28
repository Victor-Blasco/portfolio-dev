import './Footer.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function Footer() {
  const sectionRef = useIntersectionObserver("footer");
    return (
      <footer className="footer section-card" ref={sectionRef}>
        <a href="#header">Inicio</a>
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#experience">Experiencia</a>
        <a href="#contact">Contacto</a>
        <p>© 2025 Victor Blasco. Todos los derechos reservados.</p>
      </footer>
    );
}

export default Footer;