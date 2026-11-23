import { useTranslation } from "react-i18next";
import "./About.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import SkillsGrid from "./SkillsGrid";

/**
 * Componente sobre mí (About).
 * Presenta un resumen personal, competencias técnicas por área, forma de trabajo e idiomas.
 *
 * @returns {JSX.Element} La sección sobre mí.
 */
function About() {
  const sectionRef = useIntersectionObserver();
  const { t } = useTranslation();

  const softSkills = [
    {
      name: t("about.skill_teamwork_title"),
      desc: t("about.skill_teamwork_desc"),
    },
    {
      name: t("about.skill_proactivity_title"),
      desc: t("about.skill_proactivity_desc"),
    },
    {
      name: t("about.skill_problem_solving_title"),
      desc: t("about.skill_problem_solving_desc"),
    },
    {
      name: t("about.skill_adaptation_title"),
      desc: t("about.skill_adaptation_desc"),
    },
  ];

  const languages = [
    { name: t("about.lang_spanish"), level: t("about.level_native"), tier: "native" },
    { name: t("about.lang_valencian"), level: t("about.level_advanced_c1"), tier: "advanced" },
    { name: t("about.lang_english"), level: t("about.level_advanced_c1"), tier: "advanced" },
    { name: t("about.lang_italian"), level: t("about.level_intermediate_b1"), tier: "intermediate" },
  ];

  return (
    <section className="section-card" id="about" ref={sectionRef}>
      <h2>{t("about.title")}</h2>
      <p className="about-text">
        {t("about.text")}
      </p>

      <SkillsGrid />

      <div className="about-grid">
        <div className="soft-skills-container">
          <h3>{t("about.soft_skills_title")}</h3>
          <ul className="skills-list-premium">
            {softSkills.map((skill, index) => (
              <li key={index} className="skill-item-premium">
                <div className="skill-text-wrapper">
                  <h4 className="skill-name-premium">{skill.name}</h4>
                  <p className="skill-desc-premium">{skill.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="languages-container">
          <h3>{t("about.languages_title")}</h3>
          <ul className="languages-list-premium">
            {languages.map((lang, index) => (
              <li key={index} className="language-item-premium">
                <span className="language-name">{lang.name}</span>
                <span className={`language-level-badge ${lang.tier}`}>
                  {lang.level}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
