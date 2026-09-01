import { useState } from "react";
import "./Contact.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useTranslation } from "react-i18next";
import Icon from "../Icon/Icon";

/**
 * Componente de contacto.
 * Proporciona vías de contacto directo y un formulario con envío asíncrono,
 * control de estados de carga, feedback visual de éxito y alertas de error.
 * 
 * @returns {JSX.Element} La sección de contacto.
 */
function Contact() {
  const sectionRef = useIntersectionObserver();
  const { t } = useTranslation();
  
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    _gotcha: ""
  });

  /**
   * Maneja el cambio en los campos de entrada del formulario.
   * 
   * @param {React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>} e - Evento de cambio.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Maneja el envío asíncrono del formulario a Formspree vía API JSON.
   * 
   * @param {React.FormEvent<HTMLFormElement>} e - Evento de envío del formulario.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Si el campo trampa tiene contenido, es un bot: simular éxito y descartar sin consumir cuota
    if (formData._gotcha) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "", _gotcha: "" });
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mgodvygp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _gotcha: formData._gotcha
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", _gotcha: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  /**
   * Reinicia el estado del formulario para permitir un nuevo envío.
   */
  const handleReset = () => {
    setStatus("idle");
  };

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
          <p>{t("contact.text")}</p>
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

        {status === "success" ? (
          <div className="contact-form-success glass-panel" aria-live="polite">
            <div className="success-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3>{t("contact.form_success_title")}</h3>
            <p>{t("contact.form_success_desc")}</p>
            <button type="button" onClick={handleReset} className="btn-primary">
              {t("contact.form_send_another")}
            </button>
          </div>
        ) : (
          <form
            className="contact-form glass-panel"
            onSubmit={handleSubmit}
            aria-label="Formulario de contacto"
          >
            {/* Campo trampa antispam (Honeypot para bots) */}
            <input
              type="text"
              name="_gotcha"
              value={formData._gotcha}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="off"
              style={{ display: "none" }}
              aria-hidden="true"
            />

            {status === "error" && (
              <div className="form-error-alert" role="alert" aria-live="assertive">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>{t("contact.form_error")}</span>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="contact-name">{t("contact.form_name")}</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.form_name_placeholder")}
                required
                disabled={status === "submitting"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">{t("contact.form_email")}</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.form_email_placeholder")}
                required
                disabled={status === "submitting"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">{t("contact.form_message")}</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.form_message_placeholder")}
                rows="5"
                required
                disabled={status === "submitting"}
              ></textarea>
            </div>

            <button
              type="submit"
              className={`btn-primary ${status === "submitting" ? "btn-loading" : ""}`}
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                <>
                  <span className="btn-spinner" aria-hidden="true"></span>
                  {t("contact.form_sending")}
                </>
              ) : (
                t("contact.form_submit")
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;