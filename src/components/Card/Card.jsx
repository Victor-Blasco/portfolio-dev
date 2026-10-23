import "./Card.css";

/**
 * Componente de tarjeta para representar experiencias profesionales y formativas.
 * Presenta de forma estructurada el título del puesto o titulación, nombre de la entidad,
 * período temporal en formato badge, descripción de las responsabilidades, etiquetas de competencias y logotipo.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.title - Título del puesto o titulación.
 * @param {string} [props.institution] - Nombre de la empresa o institución académica.
 * @param {string} [props.subtitle] - Período temporal del hito.
 * @param {string} props.description - Texto descriptivo del hito o experiencia.
 * @param {string[]} [props.tags] - Lista de etiquetas de competencias o tecnologías clave.
 * @param {string} [props.logo] - Ruta o URL del logotipo de la empresa o institución.
 * @param {string} [props.logoBg] - Color de fondo inline opcional para el contenedor del logotipo.
 * @param {Object} [props.logoStyle] - Estilos CSS inline adicionales para el contenedor del logotipo.
 * @returns {JSX.Element} Componente visual de la tarjeta de experiencia.
 */
function Card({ title, institution, subtitle, description, tags, logo, logoBg, logoStyle }) {
  return (
    <div className="card glass-panel">
      <div className={`card-header ${logo ? "has-logo" : ""}`}>
        {logo && (
          <div
            className="card-logo-container"
            style={{
              background: logoBg || "#ffffff",
              ...logoStyle,
            }}
          >
            <img
              src={logo}
              alt={institution || title}
              className="card-logo"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
        <div className="card-title-group">
          <h3 className="card-role">{title}</h3>
          {subtitle && <span className="card-period-badge">{subtitle}</span>}
          {institution && <h4 className="card-institution">{institution}</h4>}
        </div>
      </div>

      <p className="card-description">{description}</p>

      {tags && Array.isArray(tags) && tags.length > 0 && (
        <ul className="card-tags">
          {tags.map((tag, idx) => (
            <li key={idx} className="card-tag">
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Card;
