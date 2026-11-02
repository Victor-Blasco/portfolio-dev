import { useState } from "react";
import { useTranslation } from "react-i18next";
import Icon from "../Icon/Icon";
import "./Header.css";
import cvEs from "@/assets/CV Victor Blasco ES.pdf";
import cvEn from "@/assets/CV Victor Blasco EN.pdf";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { trackEvent } from "@/utils/analytics";

const EMAIL_ADDRESS = "victorblascogar@gmail.com";

/**
 * Componente principal de cabecera (Header).
 * Muestra la información personal, rol, breve descripción y enlaces de contacto/redes.
 *
 * @returns {JSX.Element} El componente de cabecera renderizado.
 */
function Header() {
  const sectionRef = useIntersectionObserver();
  const { t, i18n } = useTranslation();
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Seleccionar la versión del CV en español o inglés según el idioma activo
  const cv = i18n.language.startsWith("en") ? cvEn : cvEs;

  /**
   * Copia el correo electrónico al portapapeles y muestra confirmación temporal.
   */
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopiedEmail(true);
      trackEvent("copy_email", { location: "hero" });
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      window.location.href = `mailto:${EMAIL_ADDRESS}`;
    }
  };

  return (
    <header className="header section-card" id="header" ref={sectionRef}>
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
        <div className="email-action-group">
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="social-link email-main-link"
            onClick={() => trackEvent("click_social_link", { network: "email", location: "hero" })}
          >
            <Icon name="email" className="email" />
            Email
          </a>
          <button
            type="button"
            className={`social-link email-copy-btn ${copiedEmail ? "copied" : ""}`}
            onClick={handleCopyEmail}
            title={t("header.copy_email")}
            aria-label={t("header.copy_email")}
          >
            {copiedEmail ? (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{t("header.email_copied")}</span>
              </>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
