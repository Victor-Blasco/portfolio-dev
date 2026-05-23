import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css'
import Icon from '../Icon/Icon'

/**
 * Componente de navegación superior (Navbar).
 * Proporciona enlaces a las diferentes secciones, selector de idioma y el toggle de modo oscuro.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} props.darkMode - Indica si el modo oscuro está activo.
 * @param {Function} props.onToggleTheme - Función para alternar el tema.
 * @returns {JSX.Element} El componente de navegación.
 */
function Navbar({ darkMode, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="glass-panel">
      <div className="nav-logo">
        <a href="#root" onClick={() => setIsMenuOpen(false)}>VB</a>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>{t("navbar.about")}</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>{t("navbar.projects")}</a>
        <a href="#experience" onClick={() => setIsMenuOpen(false)}>{t("navbar.experience")}</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>{t("navbar.contact")}</a>
      </div>

      <div className="nav-actions">
        {/* Selector de Idioma Premium */}
        <div className="lang-switch-capsule glass-panel">
          <div 
            className="lang-slider" 
            style={{ 
              transform: i18n.language.startsWith("en") ? "translateX(100%)" : "translateX(0%)" 
            }} 
          />
          <button
            className={`lang-btn ${i18n.language.startsWith("es") ? "active" : ""}`}
            onClick={() => changeLanguage("es")}
            aria-label="Cambiar a Español"
            type="button"
          >
            ES
          </button>
          <button
            className={`lang-btn ${i18n.language.startsWith("en") ? "active" : ""}`}
            onClick={() => changeLanguage("en")}
            aria-label="Change to English"
            type="button"
          >
            EN
          </button>
        </div>

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