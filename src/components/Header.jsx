import "./Header.css";

function Header() {
  return (
    <header className="header" id="header">
      <img src="/avatar.jpg" alt="Victor Blasco" className="avatar" />
      <h1>Victor Blasco García</h1>
      <h2>Desarrollador Full Stack Junior</h2>
      <p>
        Estudiante de Ingeniería Informática, orientado al desarrollo software con
        experiencia en proyectos académicos.
        Apasionado por aprender y aportar en equipos multidisciplinares.
      </p>
      <div className="header-links">
        <a href="mailto:victorblascogar@gmail.com">Email</a>
        <a
          href="https://github.com/Victor-Blasco"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="/src/CV%20Victor%20Blasco.pdf"
          target="_blank"
          rel="noopener noreferrer">
          Descargar CV
        </a>
      </div>
    </header>
  );
}

export default Header;
