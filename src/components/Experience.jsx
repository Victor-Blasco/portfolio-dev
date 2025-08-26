import "./Experience.css";
import Card from "./Card";

function Experience() {
  return (
    <section className="experience section-card" id="experience">
      <h2>Experiencia</h2>
      <div className="exp-list">
        <Card
          title="Operario de producción | WANDREGAR 2001 S.L.U."
          subtitle="Julio-Agosto 2024"
          description="Colaboración en el equipo para optimizar la eficiencia de la
              producción, asumiendo diferentes tareas y responsabilidades."
        />

        <Card title="Operario de producción | ECO PORCELÁNICO S.L.U."
              subtitle="Julio-Agosto 2025"
              description="Resolución de problemas de forma proactiva en un entorno de
              producción, permitiendo reforzar habilidades de resolución de problemas." 
        />
      </div>

      <h2>Educación</h2>
      <div className="exp-list">

        <Card title="Grado en Ingeniería Informática"
              subtitle="Universitat Jaume I (2022-presente)" 
              description="Aqui adquirí conocimientos en programación, estructuras de datos, algoritmos, bases de datos, redes y desarrollo web." 
        />

      </div>
    </section>
  );
}

export default Experience;
