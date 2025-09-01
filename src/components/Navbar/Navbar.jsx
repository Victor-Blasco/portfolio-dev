import './Navbar.css'

function Navbar({ darkMode, onToggleTheme }) {
  return (
    <nav>
      <div className="nav-logo">
        <a href="#root">VB</a>
      </div>
      
      <div className="nav-links">
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#experience">Experiencia</a>
        <a href="#contact">Contacto</a>
        
        <button
          className="mode-toggle"
          onClick={onToggleTheme}
          aria-label="Cambiar modo claro/oscuro"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  )
}

export default Navbar