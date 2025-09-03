import "./Header.css";
import  { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";




function Header() {

  const sectionRef = useIntersectionObserver("header");

  return (
    <header className="header section-card" id="header" ref={sectionRef}>
      <img src="/src/assets/avatar.webp" alt="Victor Blasco" className="avatar" />
      <h1>Victor Blasco García</h1>
      <h2>Desarrollador Full Stack Junior</h2>
      <p>
        Estudiante de Ingeniería Informática, orientado al desarrollo software
        con experiencia en proyectos académicos. Busco aplicar mis conocimientos y habilidades en un entorno profesional.
      </p>
      <div className="header-links">
        <a href="mailto:victorblascogar@gmail.com"
        >
          <HiOutlineMail className="icon"/>Email
        </a>
        <a
          href="https://github.com/Victor-Blasco"
          target="_blank"
          rel="noopener noreferrer"
        ><FaGithub className="icon"/>
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/victor-blasco-garcia"
          target="_blank"
          rel="noopener noreferrer"
        ><FaLinkedin className="icon"/>
          LinkedIn
        </a>
        <a
          href="/src/assets/CV%20Victor%20Blasco.pdf"
          target="_blank"
          rel="noopener noreferrer"
        ><IoDocumentTextOutline className="icon"/>
          Descargar CV
        </a>
      </div>
    </header>
  );
}

export default Header;
