import { useEffect, useState } from "react";
import './App.css'

// Función para obtener el modo inicial
const getInitialMode = () => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode !== null) {
    return JSON.parse(savedMode);
  }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// Aplicar modo oscuro antes del primer render
const darkModeInitial = getInitialMode();
document.documentElement.classList.toggle("dark-mode", darkModeInitial);

import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(darkModeInitial);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="app-container">
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode(!darkMode)} />
      <Header />
      <main>
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App