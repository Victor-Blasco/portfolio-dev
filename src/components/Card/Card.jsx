import "./Card.css";

/**
 * Componente de tarjeta para representar experiencias profesionales y formativas.
 * Presenta de forma estructurada el título del puesto o titulación, subtítulo temporal,
 * descripción de las responsabilidades o logros, y el logotipo de la entidad correspondiente.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.title - Título principal de la tarjeta.
 * @param {string} [props.subtitle] - Subtítulo complementario (ej. período temporal).
 * @param {string} props.description - Texto descriptivo del hito o experiencia.
 * @param {string} [props.logo] - Ruta o URL del logotipo de la empresa o institución.
 * @param {string} [props.logoBg] - Color de fondo inline opcional para el contenedor del logotipo.
 * @param {Object} [props.logoStyle] - Estilos CSS inline adicionales para el contenedor del logotipo.
 * @returns {JSX.Element} Componente visual de la tarjeta de experiencia.
 */
function Card({ title, subtitle, description, logo, logoBg, logoStyle }) {
  return (
    <div className="card glass-panel">
      <div className={`card-header ${logo ? "has-logo" : ""}`}>
        {logo && (
          <div
            className="card-logo-container"
            style={{
              background: logoBg || undefined,
              ...logoStyle,
            }}
          >
            <img src={logo} alt={title} className="card-logo" />
          </div>
        )}
        <div className="card-title-group">
          <h3>{title}</h3>
          {subtitle && <h4>{subtitle}</h4>}
        </div>
      </div>

      <p className="card-description">{description}</p>
    </div>
  );
}

export default Card;