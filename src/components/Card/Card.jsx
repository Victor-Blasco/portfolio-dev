import "./Card.css"

/**
 * Componente de tarjeta genérica para proyectos o experiencias.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.title - Título principal de la tarjeta.
 * @param {string} [props.subtitle] - Subtítulo opcional.
 * @param {string} props.description - Texto descriptivo.
 * @param {string} [props.tech] - Tecnologías utilizadas.
 * @param {Array<{url: string, label: string}>} [props.references] - Enlaces relacionados.
 * @param {JSX.Element} [props.icon] - Icono para los enlaces.
 * @returns {JSX.Element} La tarjeta renderizada.
 */
function Card({ title, subtitle, description, tech, references, icon }) {
  return (
    <div className="card glass-panel">
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      <p>{description}</p>
      { tech && <span className="tech">{tech}</span>}
        {references && references.map((ref, index) => (
            <a 
              key={index} 
              href={ref.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`social-link ${ref.url.includes("github") ? "github-link" : ""}`}
            >
              {icon}
              {ref.label}
            </a>
        ))}
    </div>
  );
}
export default Card;