import "./Contact.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Icon from "../Icon/icon";

/**
 * Componente de contacto.
 * Muestra las vías principales para contactar y un formulario base (si aplica) o enlaces directos.
 * 
 * @returns {JSX.Element} La sección de contacto.
 */
function Contact() {

  const sectionRef = useIntersectionObserver("contact");

  return (
    <section
      className="section-card contact-section"
      aria-labelledby="contact-title"
      id="contact"
      ref={sectionRef}
    >
      <h2 id="contact-title">Contacto</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>¡Trabajemos juntos!</h3>
          <p>
            Actualmente estoy buscando nuevas oportunidades profesionales. Si
            tienes alguna pregunta o simplemente quieres saludar, ¡no dudes en
            escribirme!
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
            <label htmlFor="contact-name">Nombre</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Tu email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Mensaje</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tu mensaje"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-primary">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
export default Contact;