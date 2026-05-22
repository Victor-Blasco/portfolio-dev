import './SkillsList.css';

/**
 * Componente para renderizar una lista de habilidades.
 * Muestra un título y una lista horizontal/cuadrícula de elementos.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.title - Título de la sección de habilidades (ej. "Hard Skills").
 * @param {string[]} props.skills - Array de cadenas de texto con las habilidades.
 * @returns {JSX.Element} Componente de lista de habilidades.
 */
function SkillsList({ title, skills }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsList;