import { Suspense, useEffect, useState, lazy } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import { Analytics } from "@vercel/analytics/react"
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

/**
 * Componente principal de la aplicación.
 * Gestiona el tema visual y la sincronización de accesibilidad del idioma del documento.
 * 
 * @returns {JSX.Element} Estructura principal del portfolio.
 */
function App() {
  const { i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(darkModeInitial);

  // Sincronizar reactivamente el atributo 'lang' del elemento <html> con el idioma activo
  useEffect(() => {
    const currentLang = i18n.language ? i18n.language.slice(0, 2) : "es";
    document.documentElement.lang = currentLang;
  }, [i18n.language]);

  // Actualizar la clase de modo oscuro en <html> y persistir la preferencia
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="app-container">
      <Analytics />
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