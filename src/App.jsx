import './App.css'

import { useEffect, useState } from "react";

import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
  document.documentElement.classList.toggle("dark-mode", darkMode);
}, [darkMode]);

  return (
    <div className="app-container">
      <button
        className="mode-toggle"
        onClick={() => setDarkMode((dm) => !dm)}
        aria-label="Cambiar modo claro/oscuro"
      >
        {darkMode ? "🌙 Modo oscuro" : "☀️ Modo claro"}
      </button>
      <Header />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App