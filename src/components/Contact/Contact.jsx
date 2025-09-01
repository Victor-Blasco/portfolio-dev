import "./Contact.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

function Contact() {

  const sectionRef = useIntersectionObserver("contact");

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
    </section>
  );
}
export default Contact;