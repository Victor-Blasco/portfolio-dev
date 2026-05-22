import './Footer.css';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Icon from '@/components/Icon/icon';

function Footer() {
  const sectionRef = useIntersectionObserver();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer glass-panel" ref={sectionRef}>
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Victor Blasco</h3>
          <p>Ingeniería Informática | Desarrollo de Software</p>
          <div className="footer-socials">
            <a href="https://github.com/Victor-Blasco" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icon name="github" />
            </a>
            <a href="https://linkedin.com/in/victor-blasco-garcia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" />
            </a>
            <a href="mailto:victorblascogar@gmail.com" aria-label="Email">
              <Icon name="email" />
            </a>
          </div>
        </div>

        <div className='footer-links'>
          <a href="#root">Inicio</a>
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#experience">Experiencia</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {currentYear} Victor Blasco. Todos los derechos reservados.</p>
        <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Volver arriba">
          ↑ Volver arriba
        </button>
      </div>
    </footer>
  );
}

export default Footer;