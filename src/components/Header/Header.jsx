import { useTranslation } from "react-i18next";
import Icon from "../Icon/Icon";
import "./Header.css";
import cvEs from "@/assets/CV Victor Blasco ES.pdf";
import cvEn from "@/assets/CV Victor Blasco EN.pdf";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { trackEvent } from "@/utils/analytics";

/**
 * Componente principal de cabecera (Header).
 * Muestra la información personal, rol, breve descripción y enlaces de contacto/redes.
 *
 * @returns {JSX.Element} El componente de cabecera renderizado.
 */
function Header() {
  const sectionRef = useIntersectionObserver();
  const { t, i18n } = useTranslation();

  // Seleccionar la versión del CV en español o inglés según el idioma activo
  const cv = i18n.language.startsWith("en") ? cvEn : cvEs;

  return (
    <header className="header section-card glass-panel" id="header" ref={sectionRef}>
      <div className="hero-glow-spot"></div>

      <div className="avatar-container">
        <div className="avatar-wrapper">
          <img
            src="/avatar.webp"
            alt="Victor Blasco"
            width="136"
            height="136"
            fetchPriority="high"
            decoding="async"
            className="avatar"
          />
          <div className="avatar-glow"></div>
        </div>
        <div className="avatar-bubble">
          <span className="status-dot" aria-hidden="true"></span>
          <span className="greeting-label">{t("header.greeting")}</span>
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
        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link primary"
          onClick={() =>
            trackEvent("download_cv", {
              location: "hero",
              language: i18n.language ? i18n.language.slice(0, 2) : "es",
            })
          }
        >
          <Icon name="curriculum" className="curriculum" />
          {t("header.download_cv")}
        </a>
        <a
          href="https://github.com/Victor-Blasco"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          onClick={() => trackEvent("click_social_link", { network: "github", location: "hero" })}
        >
          <Icon name="github" className="github" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/victor-blasco-garcia"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          onClick={() => trackEvent("click_social_link", { network: "linkedin", location: "hero" })}
        >
          <Icon name="linkedin" className="linkedin" />
          LinkedIn
        </a>
        <a
          href="mailto:victorblascogar@gmail.com"
          className="social-link"
          onClick={() => trackEvent("click_social_link", { network: "email", location: "hero" })}
        >
          <Icon name="email" className="email" />
          Email
        </a>
      </div>
    </header>
  );
}

export default Header;
