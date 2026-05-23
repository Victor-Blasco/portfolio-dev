import "./Contact.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useTranslation } from "react-i18next";
import Icon from "../Icon/Icon";

/**
 * Componente de contacto.
 * Muestra las vías principales para contactar y un formulario base (si aplica) o enlaces directos.
 * 
 * @returns {JSX.Element} La sección de contacto.
 */
function Contact() {
  const sectionRef = useIntersectionObserver();
  const { t } = useTranslation();

  return (
    <section
      className="section-card contact-section"
      aria-labelledby="contact-title"
      id="contact"
      ref={sectionRef}
    >
      <h2 id="contact-title">{t("contact.title")}</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>{t("contact.headline")}</h3>
          <p>
            {t("contact.text")}
          </p>
          <div className="contact-links">
            <a href="mailto:victorblascogar@gmail.com" className="contact-link">
              <Icon name="email" className="contact-icon" />{" "}
              victorblascogar@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/victor-blasco-garcia"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Icon name="linkedin" className="contact-icon" /> LinkedIn
            </a>
            <a
              href="https://github.com/Victor-Blasco"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Icon name="github" className="contact-icon" /> GitHub
            </a>
          </div>
        </div>

        <form
          className="contact-form glass-panel"
          action="https://formspree.io/f/mgodvygp"
          method="POST"
          aria-label="Formulario de contacto"
        >
          <div className="form-group">
            <label htmlFor="contact-name">{t("contact.form_name")}</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder={t("contact.form_name_placeholder")}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">{t("contact.form_email")}</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder={t("contact.form_email_placeholder")}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">{t("contact.form_message")}</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder={t("contact.form_message_placeholder")}
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-primary">
            {t("contact.form_submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
export default Contact;