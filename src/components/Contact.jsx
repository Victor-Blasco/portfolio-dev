import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Contacto</h2>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu email" required />
        <textarea placeholder="Tu mensaje" required />
        <button type="submit">Enviar</button>
      </form>
      <div className="contact-info">
        <p>
          Email: <a href="mailto:victorblascogar@gmail.com">victorblascogar@gmail.com</a>
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
      </div>
    </section>
  );
}

export default Contact;
