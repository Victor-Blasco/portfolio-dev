import "./Contact.css";

function Contact() {
  return (
    <section className="contact" aria-labelledby="contact-title" id="contact">
      <h2 id="contact-title">Contacto</h2>
      <form
        className="contact-form"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Formulario de contacto"
      >
        <label htmlFor="contact-name">Nombre</label>
        <input id="contact-name" type="text" placeholder="Tu nombre" required />

        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" type="email" placeholder="Tu email" required />

        <label htmlFor="contact-message">Mensaje</label>
        <textarea
          id="contact-message"
          placeholder="Tu mensaje"
          required
          rows={4}
        />

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
            href="https://linkedin.com/in/tuusuario"
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