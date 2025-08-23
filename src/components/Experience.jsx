import "./Experience.css";

function Experience() {
  return (
    <section className="experience">
      <h2>Experiencia</h2>
      <div className="exp-list">
        <div className="exp-item">
          <h3>Operario de producción | WANDREGAR 2001 S.L.U.</h3>
          <span>Julio-Agosto 2024</span>
          <p>
            Colaboración en el equipo para optimizar la eficiencia de la
            producción, asumiendo diferentes tareas y responsabilidades.
          </p>
        </div>
        <div className="exp-item">
          <h3>Operario de producción | ECO PORCELÁNICO S.L.U.</h3>
          <span>Julio-Agosto 2025</span>
          <p>
            Resolución de problemas de forma proactiva en un entorno de
            producción, permitiendo reforzar habilidades de trabajo en equipo.
          </p>
        </div>
      </div>
      <h2>Educación</h2>
      <div className="exp-list">
        <div className="exp-item">
          <h3>Grado en Ingeniería Informática</h3>
          <span>Universitat Jaume I (2022-presente)</span>
        </div>
        <div className="exp-item">
          <h3>Bachillerato</h3>
          <span>IES Politécnico (2020-2022)
          </span>
        </div>
      </div>
    </section>
  );
}

export default Experience;
