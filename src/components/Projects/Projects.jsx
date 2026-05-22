import Card from "@/components/Card/Card";
import "./Projects.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Icon from "../Icon/icon";

// Importar imágenes de proyectos
import tfgImage from "@/assets/projects/tfg_bi_dashboard.png";
import mormasImage from "@/assets/projects/mormas_dashboard.png";
import marketPulseImage from "@/assets/projects/market_pulse_dashboard.png";
import gustomeImage from "@/assets/projects/gustome.png";

/**
 * Componente que muestra la lista de proyectos destacados.
 * Renderiza tarjetas con detalles, tecnologías y enlaces a repositorios o demos.
 * 
 * @returns {JSX.Element} La sección de proyectos.
 */
function Projects() {

  const sectionRef = useIntersectionObserver("projects");

  return (
    <section className="section-card" id="projects" ref={sectionRef}>
      <h2>Proyectos</h2>
      <div className="projects-list">
        <Card
          title="Gustomé - Gestión Inteligente de Cartas"
          subtitle="Septiembre 2025 - Mayo 2026"
          description="Plataforma digital para la digitalización y gestión de menús en restaurantes. Permite personalizar la experiencia del comensal mediante filtros interactivos por alérgenos y preferencias dietéticas en tiempo real."
          tech="React (Vite), Firebase (Auth & Firestore)"
          image={gustomeImage}
          references={[
            {
              label: "Enlace a GitHub",
              url: "https://github.com/Victor-Blasco/Gustome-main",
              isPrivate: true,
            },
          ]}
          icon={<Icon name="github" className="github" />}
        />
        <Card
          title="Plataforma BI de Ciberseguridad (TFG)"
          subtitle="Febrero 2026 - Mayo 2026"
          description="Plataforma de Business Intelligence end-to-end para la monitorización de KPIs de ciberseguridad corporativa. Incluye un pipeline ETL automatizado, orquestación asíncrona con Celery/Redis y dashboards interactivos."
          tech="Python (Django), PostgreSQL, Tailwind CSS, Docker, Celery/Redis"
          image={tfgImage}
          references={[
            {
              label: "Enlace a GitHub",
              url: "https://github.com/VictorBlascoPamesa/Plataforma_BI",
              isPrivate: true,
            },
          ]}
          icon={<Icon name="github" className="github" />}
        />
        <Card
          title="Mountain Race Management System (MoRMaS)"
          subtitle="Septiembre 2024 - Mayo 2025"
          description="Aplicación web de gestión de carreras de montaña, desarrollado en equipo. Incluye gestión de usuarios, inscripciones y resultados de carreras con roles diferenciados (promotor y participante) y funcionalidades como operaciones CRUD, búsqueda y filtrado de carreras, envio de emails automáticos y generación de inscripciones en PDF."
          tech="Java (Spring Boot), HTML/CSS, PostgreSQL"
          image={mormasImage}
          references={[
            {
              label: "Enlace a GitHub",
              url: "https://github.com/Victor-Blasco/MoRMaS",
              isPrivate: true,
            },
          ]}
          icon={<Icon name="github" className="github" />}
        />

        <Card
          title="Market Pulse - Análisis Financiero & Dashboard"
          subtitle="Octubre 2025 - Diciembre 2025"
          description="Aplicación sencilla de análisis bursátil en tiempo real mediante APIs (Yahoo Finance), cálculo estadístico de riesgo (volatilidad) y dashboard interactivo con visualización de datos."
          tech="Python (Pandas, NumPy), Streamlit"
          image={marketPulseImage}
          references={[
            {
              label: "Enlace a GitHub",
              url: "https://github.com/Victor-Blasco/market-pulse-project",
            },
          ]}
          icon={<Icon name="github" className="github" />}
        />

        <Card
          title="Portfolio Web"
          subtitle="2025 - 2026"
          description="Página web personal para mostrar mi experiencia, educación y proyectos. Desarrollada con React, presenta un diseño limpio y profesional, optimizada para dispositivos móviles y con enlaces a mis perfiles profesionales. "
          tech="JavaScript (React), HTML/CSS"
          references={[
            {
              label: "Enlace a GitHub",
              url: "https://github.com/Victor-Blasco/portfolio-dev",
            },
          ]}
          icon={<Icon name="github" className="github" />}
        />
      </div>
    </section>
  );
}

export default Projects;