import githubWhiteIcon from "@/assets/icons/github-white.svg";

/**
 * Coordenadas del nodo central de la red tecnológica.
 */
export const CENTER_NODE = { x: 300, y: 260, label: "VB" };

/**
 * Radio de órbita principal para los nodos de tecnología.
 */
export const ORBIT_RADIUS = 150;

/**
 * Distancia del nodo padre al subnodo satélite.
 */
export const SUBNODE_RADIUS = 80;

/**
 * Obtiene la lista de tecnologías estructurada y calculada geométricamente en círculo,
 * asignando las traducciones e iconos correspondientes.
 * 
 * @param {Function} t - Función de traducción de i18next.
 * @returns {Array<Object>} Lista de tecnologías con coordenadas x, y calculadas.
 */
export function getTechItems(t) {
  const rawTechItems = [
    {
      name: "HTML5",
      type: t("techstack.types.language"),
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26",
      desc: t("techstack.descriptions.html"),
    },
    {
      name: "CSS3",
      type: t("techstack.types.language"),
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6",
      desc: t("techstack.descriptions.css"),
      subnode: {
        name: "Tailwind",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        color: "#38B2AC",
        desc: t("techstack.descriptions.tailwind"),
      },
    },
    {
      name: "JavaScript",
      type: t("techstack.types.language"),
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
      desc: t("techstack.descriptions.javascript"),
      subnode: {
        name: "React",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB",
        desc: t("techstack.descriptions.react"),
      },
    },
    {
      name: "Python",
      type: t("techstack.types.language"),
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB",
      desc: t("techstack.descriptions.python"),
      subnode: {
        name: "Django",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        color: "#44B78B",
        desc: t("techstack.descriptions.django"),
      },
    },
    {
      name: "Java",
      type: t("techstack.types.language"),
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "#F89820",
      desc: t("techstack.descriptions.java"),
      subnode: {
        name: "Spring Boot",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        color: "#6DB33F",
        desc: t("techstack.descriptions.spring"),
      },
    },
    {
      name: "PostgreSQL",
      type: t("techstack.types.database"),
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "#336791",
      desc: t("techstack.descriptions.postgresql"),
    },
    {
      name: "MongoDB",
      type: t("techstack.types.database"),
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248",
      desc: t("techstack.descriptions.mongodb"),
    },
    {
      name: "Docker",
      type: t("techstack.types.tool"),
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "#2496ED",
      desc: t("techstack.descriptions.docker"),
      subnode: {
        name: "Nginx",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        color: "#009639",
        desc: t("techstack.descriptions.nginx"),
      },
    },
    {
      name: "Git",
      type: t("techstack.types.tool"),
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032",
      desc: t("techstack.descriptions.git"),
      subnode: {
        name: "GitHub",
        iconUrl: githubWhiteIcon,
        color: "var(--github-color)",
        desc: t("techstack.descriptions.github"),
      },
    },
  ];

  return rawTechItems.map((item, index) => {
    // Distribuir equiespaciadamente y empezar desde arriba (-90deg o -PI/2)
    const angle = (index * 2 * Math.PI) / rawTechItems.length - Math.PI / 2;
    const x = Math.round(CENTER_NODE.x + ORBIT_RADIUS * Math.cos(angle));
    const y = Math.round(CENTER_NODE.y + ORBIT_RADIUS * Math.sin(angle));

    let subnode = null;
    if (item.subnode) {
      const subX = Math.round(x + SUBNODE_RADIUS * Math.cos(angle));
      const subY = Math.round(y + SUBNODE_RADIUS * Math.sin(angle));
      subnode = {
        ...item.subnode,
        x: subX,
        y: subY,
      };
    }

    return {
      ...item,
      x,
      y,
      subnode,
    };
  });
}

/**
 * Obtiene la etiqueta del tipo de tecnología correspondiente a un subnodo satélite.
 *
 * @param {string} subnodeName - Nombre del subnodo (ej. 'GitHub', 'Nginx', 'React').
 * @param {Function} t - Función de traducción de i18next.
 * @returns {string} Etiqueta traducida del tipo de herramienta o plataforma.
 */
export function getSubnodeType(subnodeName, t) {
  if (subnodeName === "GitHub") {
    return t("techstack.types.platform");
  }
  if (subnodeName === "Nginx") {
    return t("techstack.types.tool");
  }
  return t("techstack.types.framework");
}
