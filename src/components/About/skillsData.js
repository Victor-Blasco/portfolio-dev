/**
 * Devuelve las categorías de habilidades técnicas con sus títulos traducidos.
 * Solo incluye tecnologías verificables en proyectos o experiencia real.
 *
 * @param {Function} t - Función de traducción de i18next.
 * @returns {Array<{id: string, title: string, icon: string, featured?: boolean, items: string[]}>} Categorías de habilidades.
 */
export function getSkillCategories(t) {
  return [
    {
      id: "backend",
      icon: "server",
      title: t("skills.categories.backend"),
      items: ["Java", "Spring Boot", "Python", "Django", "APIs REST", "Celery"],
    },
    {
      id: "data",
      icon: "database",
      title: t("skills.categories.data"),
      items: ["PostgreSQL", "MongoDB", "Redis", "ETL", "Pandas / NumPy"],
    },
    {
      id: "devops",
      icon: "container",
      title: t("skills.categories.devops"),
      items: [
        "Docker",
        "Docker Compose",
        "Nginx",
        "Gunicorn",
        "Linux",
        "GitHub Actions (CI/CD)",
        "Git",
      ],
    },
    {
      id: "security",
      icon: "shield",
      featured: true,
      title: t("skills.categories.security"),
      items: [
        "CyberArk PAM",
        "RBAC",
        t("skills.items.least_privilege"),
        t("skills.items.credential_rotation"),
        "Firestore Security Rules",
        "Cortex XDR / Proofpoint (APIs)",
      ],
    },
    {
      id: "testing",
      icon: "check",
      title: t("skills.categories.testing"),
      items: ["JUnit", "Mockito", "pytest"],
    },
    {
      id: "frontend",
      icon: "layout",
      title: t("skills.categories.frontend"),
      items: ["React", "JavaScript", "Thymeleaf", "Tailwind CSS"],
    },
  ];
}
