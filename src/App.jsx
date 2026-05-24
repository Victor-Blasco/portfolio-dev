import { Suspense, useEffect, useState, lazy } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import './App.css';

const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

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
        <Suspense fallback={<div>Loading...</div>}>
        <Projects />
        <Experience />
        <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div>Loading...</div>}>
      <Footer />
      </Suspense>
    </div>
  );
}

export default App