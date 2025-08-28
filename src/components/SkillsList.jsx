import React from "react";
import './SkillsList.css';

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