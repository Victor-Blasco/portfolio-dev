import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Recursos de traducción unificados (ES y EN)
const resources = {
  es: {
    translation: {
      navbar: {
        about: "Sobre mí",
        projects: "Proyectos",
        experience: "Trayectoria",
        contact: "Contacto"
      },
      header: {
        greeting: "¡Hola! Soy Victor Blasco 👋",
        role: "Ingeniero de Software",
        headline: "Construyendo software de <br />extremo a <span class=\"highlight-text\">extremo.</span>",
        subheadline: "Diseñando interfaces intuitivas y arquitecturas backend sólidas.",
        role_description: "Estudiante de Ingeniería Informática, apasionado del desarrollo de software y enfocado en construir interfaces y backends elegantes, responsivos y eficientes.",
        download_cv: "Descargar CV"
      },
      about: {
        title: "Sobre mí",
        text: "Estudiante de Ingeniería Informática en la Universitat Jaume I, con experiencia en desarrollo web y backend. Me considero proactivo, con facilidad para el trabajo en equipo y la resolución de problemas, y siempre dispuesto a aceptar nuevos desafíos y entornos. Estoy buscando oportunidades para aplicar mis conocimientos y crecer profesionalmente en el campo del desarrollo de software.",
        languages_title: "Idiomas",
        lang_spanish: "Castellano",
        lang_valencian: "Valenciano",
        lang_english: "Inglés",
        lang_italian: "Italiano",
        level_native: "Nativo",
        level_advanced_c1: "Avanzado (C1)",
        level_intermediate_b1: "Intermedio (B1)",
        soft_skills_title: "Soft Skills",
        skill_teamwork_title: "Trabajo en equipo",
        skill_teamwork_desc: "Colaboración activa y comunicación fluida en equipos de trabajo multidisciplinares.",
        skill_proactivity_title: "Proactividad e iniciativa",
        skill_proactivity_desc: "Búsqueda constante de mejoras, proponer ideas y aprender nuevas tecnologías de forma autónoma.",
        skill_problem_solving_title: "Resolución de problemas",
        skill_problem_solving_desc: "Enfoque analítico para diagnosticar fallos y encontrar soluciones de forma eficaz.",
        skill_adaptation_title: "Adaptación al cambio",
        skill_adaptation_desc: "Flexibilidad para integrarme rápidamente en dinámicas de equipo y entornos tecnológicos diversos."
      },
      techstack: {
        title: "Mi Stack de Tecnologías",
        subtitle: "Desplaza el cursor sobre los lenguajes principales para desplegar sus frameworks de soporte.",
        placeholder: "Pasa el cursor sobre un nodo para explorar mis tecnologías y ver sus dependencias o frameworks",
        types: {
          language: "[Lenguaje]",
          framework: "[Framework]",
          database: "[Base de Datos]",
          tool: "[Herramienta]",
          platform: "[Plataforma]"
        },
        descriptions: {
          html: "Maquetado web estructurado y semántico según estándares modernos de la W3C.",
          css: "Diseño visual, layouts flexibles (Grid/Flexbox) y animaciones responsivas.",
          tailwind: "Framework CSS utilitario para maquetación ágil de interfaces mediante clases predefinidas y configurables.",
          javascript: "Programación de lógica frontend interactiva y asincronía en el navegador.",
          react: "Librería SPA para construir componentes reactivos, Hooks y renderizado ágil.",
          python: "Desarrollo backend rápido, scripts de análisis de datos y automatización.",
          django: "Framework de desarrollo rápido de APIs, ORM integrado y gestión segura de datos.",
          java: "Programación orientada a objetos robusta con tipado fuerte y alto rendimiento.",
          spring: "Framework empresarial para microservicios y APIs REST autoconfiguradas.",
          postgresql: "Gestión de bases de datos relacionales, transacciones ACID y consultas SQL complejas.",
          mongodb: "Almacenamiento NoSQL documental con esquemas flexibles y alta disponibilidad.",
          docker: "Contenedores virtuales para asegurar la paridad de entornos de desarrollo y producción.",
          git: "Sistema de control de versiones distribuido local para el desarrollo ágil.",
          github: "Plataforma de alojamiento en la nube para el control de versiones y trabajo en equipo."
        }
      },
      projects: {
        title: "Proyectos",
        featured_tag: "Proyecto Destacado",
        private_repo: "Repositorio Privado",
        view_on_github: "Ver en GitHub",
        titles: {
          gustome: "Gustomé - Gestión Inteligente de Cartas",
          tfg: "Plataforma BI de Ciberseguridad (TFG)",
          mormas: "Mountain Race Management System (MoRMaS)",
          marketpulse: "Market Pulse - Análisis Financiero & Dashboard",
          portfolio: "Portfolio Web Personal"
        },
        periods: {
          gustome: "Septiembre 2025 - Mayo 2026",
          tfg: "Febrero 2026 - Mayo 2026",
          mormas: "Septiembre 2024 - Mayo 2025",
          marketpulse: "Octubre 2025 - Diciembre 2025",
          portfolio: "2025 - 2026"
        },
        descriptions: {
          gustome: "Plataforma digital para la digitalización y gestión de menús en restaurantes. Permite personalizar la experiencia del comensal mediante filtros interactivos por alérgenos y preferencias dietéticas en tiempo real.",
          tfg: "Plataforma de Business Intelligence end-to-end para la monitorización de KPIs de ciberseguridad corporativa. Incluye un pipeline ETL automatizado, orquestación asíncrona con Celery/Redis y dashboards interactivos en tiempo real.",
          mormas: "Aplicación web corporativa para la gestión integral de carreras de montaña. Incluye control de inscripciones, publicación de resultados en tiempo real, perfiles diferenciados para promotores y corredores, envíos de correo automáticos y exportación de justificantes en PDF.",
          marketpulse: "Aplicación interactiva de análisis bursátil en tiempo real. Consume APIs de Yahoo Finance para graficar históricos y calcular métricas estadísticas clave como la volatilidad y el valor en riesgo (VaR).",
          portfolio: "Página web personal diseñada con enfoque premium en UI/UX para mostrar mi trayectoria profesional y académica. Cuenta con optimización móvil, soporte de modo oscuro automático y componentes interactivos como redes SVG."
        }
      },
      experience: {
        title: "Trayectoria",
        subtitle: "Una mirada cronológica a mi formación académica y mi trayectoria profesional.",
        filter_all: "Ver Todo",
        filter_work: "Experiencia",
        filter_education: "Educación",
        titles: {
          pamesa: "Ingeniero de Software (Prácticas)",
          milano: "Estancia Erasmus+",
          ecoporcelanico: "Operario de producción",
          wandregar: "Operario de producción",
          uji: "Grado en Ingeniería Informática"
        },
        institutions: {
          pamesa: "Pamesa Grupo Empresarial",
          milano: "Università degli Studi di Milano",
          ecoporcelanico: "ECO PORCELÁNICO S.L.U.",
          wandregar: "WANDREGAR 2001 S.L.U.",
          uji: "Universitat Jaume I"
        },
        periods: {
          pamesa: "Febrero 2026 - Mayo 2026",
          milano: "Septiembre 2025 - Enero 2026",
          ecoporcelanico: "Julio-Agosto 2025",
          wandregar: "Julio-Agosto 2024",
          uji: "2022 - presente"
        },
        descriptions: {
          pamesa: "Desarrollo integral de una plataforma BI para monitorización de KPIs de ciberseguridad. Implementé un pipeline ETL en Python, modelos en PostgreSQL y dashboards con Django y Tailwind CSS, utilizando Celery/Redis para orquestación asíncrona y Docker para el despliegue.",
          milano: "Cursé asignaturas de máster en Computer Science y Data Science for Economics, aprendiendo NoSQL (MongoDB), Business Intelligence y Data Science, y fortaleciendo mi adaptabilidad a entornos internacionales.",
          ecoporcelanico: "Participación activa en el proceso de producción junto a un equipo, desarrollando habilidades de colaboración, comunicación y resolución de problemas.",
          wandregar: "Colaboración en el equipo para optimizar la eficiencia de la producción, asumiendo diferentes tareas y responsabilidades donde reforcé mi proactividad y capacidad de adaptación.",
          uji: "Durante el grado adquirí una base sólida en programación, estructuras de datos, algoritmos, bases de datos, redes y desarrollo web, fortaleciendo habilidades colaborativas en entornos de desarrollo."
        }
      },
      contact: {
        title: "Contacto",
        headline: "¡Trabajemos juntos!",
        text: "Actualmente estoy buscando nuevas oportunidades profesionales. Si tienes alguna pregunta o simplemente quieres saludar, ¡no dudes en escribirme!",
        form_name: "Nombre",
        form_name_placeholder: "Tu nombre",
        form_email: "Email",
        form_email_placeholder: "Tu email",
        form_message: "Mensaje",
        form_message_placeholder: "Tu mensaje",
        form_submit: "Enviar Mensaje"
      },
      footer: {
        copyright: "© {{year}} Victor Blasco García. Todos los derechos reservados.",
        design_by: "Diseñado & Desarrollado por Victor Blasco",
        role: "Ingeniería Informática | Desarrollo de Software",
        home: "Inicio",
        back_to_top: "Volver arriba"
      }
    }
  },
  en: {
    translation: {
      navbar: {
        about: "About me",
        projects: "Projects",
        experience: "Career",
        contact: "Contact"
      },
      header: {
        greeting: "Hi! I'm Victor Blasco 👋",
        role: "Software Engineer",
        headline: "Building software <br />end to <span class=\"highlight-text\">end.</span>",
        subheadline: "Designing intuitive interfaces and solid backend architectures.",
        role_description: "Computer Engineering student, passionate about software development and focused on building elegant, responsive, and efficient interfaces and backends.",
        download_cv: "Download CV"
      },
      about: {
        title: "About me",
        text: "Computer Engineering student at Universitat Jaume I, with experience in web and backend development. I consider myself proactive, with a strong ability for teamwork and problem-solving, and always ready to accept new challenges and environments. I am looking for opportunities to apply my knowledge and grow professionally in the field of software development.",
        languages_title: "Languages",
        lang_spanish: "Spanish",
        lang_valencian: "Valencian",
        lang_english: "English",
        lang_italian: "Italian",
        level_native: "Native",
        level_advanced_c1: "Advanced (C1)",
        level_intermediate_b1: "Intermediate (B1)",
        soft_skills_title: "Soft Skills",
        skill_teamwork_title: "Teamwork",
        skill_teamwork_desc: "Active collaboration and fluid communication in multidisciplinary teams.",
        skill_proactivity_title: "Proactivity & Initiative",
        skill_proactivity_desc: "Constant search for improvements, proposing ideas, and learning new technologies autonomously.",
        skill_problem_solving_title: "Problem Solving",
        skill_problem_solving_desc: "Analytical approach to diagnose issues and find effective solutions.",
        skill_adaptation_title: "Adaptability",
        skill_adaptation_desc: "Flexibility to integrate quickly into team dynamics and diverse technological environments."
      },
      techstack: {
        title: "My Tech Stack",
        subtitle: "Hover over main languages to display their supporting frameworks.",
        placeholder: "Hover over a node to explore my technologies and see their dependencies or frameworks",
        types: {
          language: "[Language]",
          framework: "[Framework]",
          database: "[Database]",
          tool: "[Tool]",
          platform: "[Platform]"
        },
        descriptions: {
          html: "Structured and semantic web layout according to modern W3C standards.",
          css: "Visual design, flexible layouts (Grid/Flexbox), and responsive animations.",
          tailwind: "Utility-first CSS framework for rapid interface layout using predefined and configurable classes.",
          javascript: "Programming interactive frontend logic and asynchronous behavior in the browser.",
          react: "SPA library to build reactive components, Hooks, and fast rendering.",
          python: "Fast backend development, data analysis scripts, and automation.",
          django: "Rapid development framework for APIs, integrated ORM, and secure data management.",
          java: "Robust object-oriented programming with strong typing and high performance.",
          spring: "Enterprise framework for self-configured microservices and REST APIs.",
          postgresql: "Relational database management, ACID transactions, and complex SQL queries.",
          mongodb: "Document-based NoSQL storage with flexible schemas and high availability.",
          docker: "Virtual containers to ensure environment parity between development and production.",
          git: "Local distributed version control system for agile development.",
          github: "Cloud hosting platform for version control and teamwork."
        }
      },
      projects: {
        title: "Projects",
        featured_tag: "Featured Project",
        private_repo: "Private Repository",
        view_on_github: "View on GitHub",
        titles: {
          gustome: "Gustomé - Intelligent Menu Management",
          tfg: "Cybersecurity BI Platform (TFG)",
          mormas: "Mountain Race Management System (MoRMaS)",
          marketpulse: "Market Pulse - Financial Analysis & Dashboard",
          portfolio: "Personal Web Portfolio"
        },
        periods: {
          gustome: "September 2025 - May 2026",
          tfg: "February 2026 - May 2026",
          mormas: "September 2024 - May 2025",
          marketpulse: "October 2025 - December 2025",
          portfolio: "2025 - 2026"
        },
        descriptions: {
          gustome: "Digital platform for restaurant menu digitalization and management. Allows customizing the diner experience with real-time interactive filters for allergens and dietary preferences.",
          tfg: "End-to-end Business Intelligence platform for corporate cybersecurity KPI monitoring. Includes an automated ETL pipeline, asynchronous orchestration with Celery/Redis, and real-time interactive dashboards.",
          mormas: "Corporate web application for comprehensive mountain race management. Includes registration control, real-time results publication, role-based profiles for promoters and runners, automated email sends, and PDF voucher export.",
          marketpulse: "Interactive real-time stock market analysis application. Consumes Yahoo Finance APIs to plot historical data and calculate key statistical metrics like volatility and Value at Risk (VaR).",
          portfolio: "Personal website designed with a premium UI/UX focus to showcase my professional and academic career. Features mobile optimization, automatic dark mode support, and interactive components like SVG networks."
        }
      },
      experience: {
        title: "Career",
        subtitle: "A chronological look at my academic education and professional career.",
        filter_all: "View All",
        filter_work: "Experience",
        filter_education: "Education",
        titles: {
          pamesa: "Software Engineer (Internship)",
          milano: "Erasmus+ Stay",
          ecoporcelanico: "Production Operator",
          wandregar: "Production Operator",
          uji: "Bachelor's Degree in Computer Engineering"
        },
        institutions: {
          pamesa: "Pamesa Grupo Empresarial",
          milano: "Università degli Studi di Milano",
          ecoporcelanico: "ECO PORCELÁNICO S.L.U.",
          wandregar: "WANDREGAR 2001 S.L.U.",
          uji: "Universitat Jaume I"
        },
        periods: {
          pamesa: "February 2026 - May 2026",
          milano: "September 2025 - January 2026",
          ecoporcelanico: "July-August 2025",
          wandregar: "July-August 2024",
          uji: "2022 - present"
        },
        descriptions: {
          pamesa: "Full development of a BI platform for cybersecurity KPI monitoring. Implemented an ETL pipeline in Python, models in PostgreSQL, and dashboards with Django and Tailwind CSS, using Celery/Redis for asynchronous orchestration and Docker for deployment.",
          milano: "Took master's courses in Computer Science and Data Science for Economics, learning NoSQL (MongoDB), Business Intelligence, and Data Science, and strengthening my adaptability in international environments.",
          ecoporcelanico: "Active participation in the production process within a team, developing collaboration, communication, and problem-solving skills.",
          wandregar: "Collaboration within the team to optimize production efficiency, taking on different tasks and responsibilities, which reinforced my proactivity and adaptability.",
          uji: "During the degree, I acquired a solid foundation in programming, data structures, algorithms, databases, networking, and web development, strengthening collaborative skills in development environments."
        }
      },
      contact: {
        title: "Contact",
        headline: "Let's work together!",
        text: "I am currently looking for new professional opportunities. If you have any questions or just want to say hi, feel free to drop me a message!",
        form_name: "Name",
        form_name_placeholder: "Your name",
        form_email: "Email",
        form_email_placeholder: "Your email",
        form_message: "Message",
        form_message_placeholder: "Your message",
        form_submit: "Send Message"
      },
      footer: {
        copyright: "© {{year}} Victor Blasco García. All rights reserved.",
        design_by: "Designed & Developed by Victor Blasco",
        role: "Computer Engineering | Software Development",
        home: "Home",
        back_to_top: "Back to top"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("i18nextLng") || "es", // Idioma inicial
    fallbackLng: "es",
    interpolation: {
      escapeValue: false // React ya protege contra XSS
    }
  });

export default i18n;
