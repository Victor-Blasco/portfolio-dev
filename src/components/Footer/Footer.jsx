import './Footer.css';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

function Footer() {
  const sectionRef = useIntersectionObserver("footer");
    return (
      <footer className="footer section-card" ref={sectionRef}>
        <div className='footer-links'>
          <a href="#root">Inicio</a>
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#experience">Experiencia</a>
          <a href="#contact">Contacto</a>
        </div>
        <p>© 2025 Victor Blasco</p>
      </footer>
    );
}

export default Footer;