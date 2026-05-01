import { useState } from 'react';
import './Navbar.css'
import Icon from '../Icon/icon'

/**
 * Componente de navegación superior (Navbar).
 * Proporciona enlaces a las diferentes secciones y el toggle de modo oscuro.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} props.darkMode - Indica si el modo oscuro está activo.
 * @param {Function} props.onToggleTheme - Función para alternar el tema.
 * @returns {JSX.Element} El componente de navegación.
 */
function Navbar({ darkMode, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="glass-panel">
      <div className="nav-logo">
        <a href="#root" onClick={() => setIsMenuOpen(false)}>VB</a>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>Sobre mí</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Proyectos</a>
        <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experiencia</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contacto</a>
      </div>

      <div className="nav-actions">
        <button
          className="mode-toggle"
          onClick={onToggleTheme}
          aria-label="Cambiar modo claro/oscuro"
        >
          {darkMode ? <Icon name="darkMode" /> : <Icon name="lightMode"/>}
        </button>

        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar