import "./Contact.css";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

function Contact() {

  const sectionRef = useIntersectionObserver();

  return (
    <section
      className="section-card"
      aria-labelledby="contact-title"
      id="contact"
      ref={sectionRef}
    >
      <h2 id="contact-title">Contacto</h2>
      <form
        className="contact-form"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Formulario de contacto"
      >
        <label htmlFor="contact-name">Nombre</label>
        <input id="contact-name" type="text" placeholder="Tu nombre" required />

        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          type="email"
          placeholder="Tu email"
          required
        />

        <label htmlFor="contact-message">Mensaje</label>
        <input id="contact-message" placeholder="Tu mensaje" required />

        <button type="submit">Enviar</button>
      </form>
      <address className="contact-info">
        <p>
          Email:{" "}
          <a href="mailto:victorblascogar@gmail.com">
            victorblascogar@gmail.com
          </a>
        </p>
        <p>
          <a
            href="https://linkedin.com/in/victor-blasco-garcia"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/Victor-Blasco"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </address>
    </section>
  );
}
export default Contact;