import { FaGithub } from "react-icons/fa";
import "./Card.css"

function Card({ title, subtitle, description, tech, references, icon }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      <p>{description}</p>
      { tech && <span className="tech">{tech}</span>}
        {references && references.map((ref, index) => (
            <a key={index} href={ref.url} target="_blank" rel="noopener noreferrer">
              {icon}
              {ref.label}
            </a>
        ))}
    </div>
  );
}
export default Card;