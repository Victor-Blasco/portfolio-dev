import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

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
          <span>{t("header.greeting")}</span>
        </div>
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">{t("header.role")}</p>
        <h1 
          className="hero-headline"
          dangerouslySetInnerHTML={{ __html: t("header.headline") }}
        />
        <p className="hero-subheadline">
          {t("header.subheadline")}
        </p>
        
        <p className="hero-role">
          {t("header.role_description")}
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
          {t("header.download_cv")}
        </a>
      </div>
    </header>
  );
}

export default Header;
