import "./Experience.css";
import Card from "@/components/Card/Card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

/**
 * Componente de Experiencia y Educación.
 * Muestra el historial laboral y formativo utilizando tarjetas.
 *
 * @returns {JSX.Element} La sección de experiencia.
 */
function Experience() {
  const sectionRef = useIntersectionObserver("experience");

  return (
    <section className="section-card" id="experience" ref={sectionRef}>
      <h2>Experiencia</h2>
      <div className="exp-list">
        <Card
          title="Programador Fullstack (Prácticas) | Pamesa Grupo Empresarial"
          subtitle="Febrero 2026 - Mayo 2026"
          description="Desarrollo integral de una plataforma BI para monitorización de KPIs de ciberseguridad. Implementé un pipeline ETL en Python, modelos en PostgreSQL y dashboards con Django y Tailwind CSS, utilizando Celery/Redis para orquestación asíncrona y Docker para el despliegue."
        />

        <Card
          title="Operario de producción | WANDREGAR 2001 S.L.U."
          subtitle="Julio-Agosto 2024"
          description="Colaboración en el equipo para optimizar la eficiencia de la
              producción, asumiendo diferentes tareas y responsabilidades donde reforcé mi proactividad y capacidad de adaptación."
        />

        <Card
          title="Operario de producción | ECO PORCELÁNICO S.L.U."
          subtitle="Julio-Agosto 2025"
          description="Participación activa en el proceso de producción junto a un equipo,
              desarrollando habilidades de colaboración, comunicación y resolución de problemas."
        />
      </div>

      <h2>Educación</h2>
      <div className="exp-list">
        <Card
          title="Estancia Erasmus+ | Università degli Studi di Milano"
          subtitle="Septiembre 2025 - Enero 2026"
          description="Cursé asignaturas de máster en Computer Science y Data Science for Economics, aprendiendo NoSQL (MongoDB), Business Intelligence y Data Science, y fortaleciendo mi adaptabilidad a entornos internacionales."
        />

        <Card
          title="Grado en Ingeniería Informática"
          subtitle="Universitat Jaume I (2022-presente)"
          description="Durante el grado adquirí una base sólida en programación, estructuras de datos, algoritmos, bases de datos, redes y desarrollo web, fortaleciendo habilidades colaborativas en entornos de desarrollo."
        />
      </div>
    </section>
  );
}

export default Experience;
