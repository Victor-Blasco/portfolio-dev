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
        contact: "Contacto",
      },
      header: {
        greeting: "¡Hola! Soy Victor Blasco 👋",
        role: "Ingeniero de Software",
        headline:
          'Construyendo software de <br />extremo a <span class="highlight-text">extremo.</span>',
        subheadline:
          "Diseñando interfaces intuitivas y arquitecturas backend sólidas.",
        role_description:
          "Ingeniero de Software especializado en desarrollo fullstack, centrado en crear soluciones escalables, eficientes y con un diseño de interfaz cuidado.",
        download_cv: "Descargar CV",
      },
      about: {
        title: "Sobre mí",
        text: "Graduado en Ingeniería Informática por la Universitat Jaume I. Combino el desarrollo Full-Stack en ecosistemas empresariales (Java/Spring Boot y Python/Django) con arquitecturas de datos, pipelines ETL y monitorización de ciberseguridad. Mi enfoque se centra en construir software escalable, desacoplado y mantenible desde el esquema de base de datos hasta la interfaz.",
        languages_title: "Idiomas",
        lang_spanish: "Castellano",
        lang_valencian: "Valenciano",
        lang_english: "Inglés",
        lang_italian: "Italiano",
        level_native: "Nativo",
        level_advanced_c1: "Avanzado (C1)",
        level_intermediate_b1: "Intermedio (B1)",
        soft_skills_title: "Soft Skills",
        skill_teamwork_title: "Código mantenible y colaborativo",
        skill_teamwork_desc:
          "Diseño de APIs limpias, documentación clara y uso de flujos de control de versiones pensados para que otros desarrolladores puedan escalar el proyecto sin fricción.",
        skill_proactivity_title: "Visión de producto (End-to-End)",
        skill_proactivity_desc:
          "Capacidad para transformar un requisito de negocio desde el diseño del esquema en base de datos y pipelines asíncronos hasta una interfaz rápida e intuitiva.",
        skill_problem_solving_title: "Pragmatismo y arquitectura sólida",
        skill_problem_solving_desc:
          "Elección de herramientas justificadas por el caso de uso (colas asíncronas con Celery/Redis, modelos relacionales o NoSQL) priorizando la estabilidad y el rendimiento.",
        skill_adaptation_title: "Autonomía en entornos internacionales",
        skill_adaptation_desc:
          "Rápida curva de aprendizaje demostrada trabajando con distintos stacks (Java, Python, React) y adaptándome a metodologías académicas y técnicas en el extranjero (Erasmus+ en Milán).",
      },
      techstack: {
        title: "Mi Stack de Tecnologías",
        subtitle:
          "Desplaza el cursor sobre los lenguajes principales para desplegar sus frameworks de soporte.",
        placeholder:
          "Pasa el cursor sobre un nodo para explorar mis tecnologías y ver sus dependencias o frameworks",
        types: {
          language: "[Lenguaje]",
          framework: "[Framework]",
          database: "[Base de Datos]",
          tool: "[Herramienta]",
          platform: "[Plataforma]",
        },
        descriptions: {
          html: "Maquetado web estructurado y semántico según estándares modernos de la W3C.",
          css: "Diseño visual, layouts flexibles (Grid/Flexbox) y animaciones responsivas.",
          tailwind:
            "Framework CSS utilitario para maquetación ágil de interfaces mediante clases predefinidas y configurables.",
          javascript:
            "Programación de lógica frontend interactiva y asincronía en el navegador.",
          react:
            "Librería SPA para construir componentes reactivos, Hooks y renderizado ágil.",
          python:
            "Desarrollo backend rápido, scripts de análisis de datos y automatización.",
          django:
            "Framework de desarrollo rápido de APIs, ORM integrado y gestión segura de datos.",
          java: "Programación orientada a objetos robusta con tipado fuerte y alto rendimiento.",
          spring:
            "Framework empresarial para microservicios y APIs REST autoconfiguradas.",
          postgresql:
            "Gestión de bases de datos relacionales, transacciones ACID y consultas SQL complejas.",
          mongodb:
            "Almacenamiento NoSQL documental con esquemas flexibles y alta disponibilidad.",
          docker:
            "Contenedores virtuales para asegurar la paridad de entornos de desarrollo y producción.",
          nginx:
            "Servidor web de alto rendimiento y proxy inverso para la orquestación de tráfico y despliegue.",
          git: "Sistema de control de versiones distribuido local para el desarrollo ágil.",
          github:
            "Plataforma de alojamiento en la nube para el control de versiones y trabajo en equipo.",
        },
      },
      projects: {
        title: "Proyectos",
        featured_tag: "Proyecto Destacado",
        private_repo: "Repositorio Privado",
        view_on_github: "Ver en GitHub",
        view_architecture: "Ver Arquitectura",
        architectures: {
          tfg: {
            badge: "Caso de Estudio • Arquitectura BI",
            title: "Plataforma BI de Ciberseguridad (TFG)",
            confidential_note: "Código fuente privado bajo acuerdo de confidencialidad corporativa con Pamesa Grupo Empresarial.",
            flow_title: "Flujo de Datos y Pipeline de Procesamiento",
            infra_label: "Infraestructura Contenerizada (Docker & Docker Compose con Healthchecks)",
            flow_nodes: [
              {
                step: "01",
                title: "Fuentes de Seguridad",
                sub: "Cortex XDR, Proofpoint, Endpoint Central (APIs REST / CSV)",
                type: "source"
              },
              {
                step: "02",
                title: "Pipeline ETL Python",
                sub: "Extracción, Normalización de Fechas y Validación con contracts.py",
                type: "etl"
              },
              {
                step: "03",
                title: "Broker Celery + Redis",
                sub: "Orquestación Asíncrona de Ingestas y Tareas en Background",
                type: "broker"
              },
              {
                step: "04",
                title: "Persistencia PostgreSQL",
                sub: "Modelo Relacional Normalizado (3FN) con Snapshots Históricos",
                type: "db"
              },
              {
                step: "05",
                title: "Backend Django (SOLID)",
                sub: "Modelos managed=False, DTOs, Context Builders y RBAC",
                type: "web"
              },
              {
                step: "06",
                title: "Nginx + Gunicorn",
                sub: "Proxy Inverso, Servido de Estáticos y Servidor WSGI",
                type: "infra"
              }
            ],
            decisions_title: "Decisiones de Ingeniería",
            decisions: [
              {
                title: "Ingesta Asíncrona Desacoplada",
                desc: "Las tareas pesadas de extracción y cálculo de KPIs se delegan a workers independientes de Celery respaldados por Redis, evitando bloquear el hilo de peticiones del servidor web."
              },
              {
                title: "Modelo Relacional Normalizado (3FN)",
                desc: "Esquema físico en PostgreSQL con integridad referencial estricta, restricciones CHECK y snapshots periódicos para trazabilidad histórica sin datos huérfanos."
              },
              {
                title: "Arquitectura Django desacoplada (SOLID)",
                desc: "Uso de modelos ORM no gestionados (managed = False) para no delegar el DDL a Django, complementado con capas de Servicios, Schemas/DTOs y Context Builders."
              },
              {
                title: "Despliegue Aislado Multi-Contenedor",
                desc: "Nginx aísla los servicios internos gestionando estáticos y SSL; Gunicorn maneja procesos paralelos de Python; orquestación con Docker Compose y healthchecks."
              }
            ]
          },
          gustome: {
            badge: "Caso de Estudio • Arquitectura Serverless",
            title: "Gustomé - Gestión Inteligente de Cartas",
            confidential_note: "Arquitectura Cloud-Native orientada a eventos con persistencia NoSQL reactiva en Google Cloud.",
            flow_title: "Flujo de Datos Bidireccional y Serverless",
            infra_label: "Ecosistema Serverless & Hosting Continuo (Google Firebase Cloud Platform)",
            flow_nodes: [
              {
                step: "01",
                title: "Cliente React + Vite",
                sub: "SPA Reactiva, Context API (AuthContext) y Componentes Modulares",
                type: "web"
              },
              {
                step: "02",
                title: "Firebase Auth",
                sub: "Gestión de Sesión, Google OAuth & Email/Password (UID único)",
                type: "source"
              },
              {
                step: "03",
                title: "Cloud Firestore (NoSQL)",
                sub: "Sincronización en Tiempo Real con Listeners Reactivos (onSnapshot)",
                type: "db"
              },
              {
                step: "04",
                title: "Firestore Security Rules",
                sub: "Control de Acceso Declarativo y Aislamiento Privacy-First por Rol",
                type: "infra"
              },
              {
                step: "05",
                title: "Servicios Externos",
                sub: "Stripe (Pagos), Cloudinary (Media) y OpenAI (OCR de Cartas Físicas)",
                type: "etl"
              },
              {
                step: "06",
                title: "CI/CD & Firebase Hosting",
                sub: "Pipeline automatizado con GitHub Actions para despliegue continuo",
                type: "broker"
              }
            ],
            decisions_title: "Decisiones de Ingeniería",
            decisions: [
              {
                title: "Sincronización Reactiva en Tiempo Real",
                desc: "Los listeners onSnapshot de Firestore sincronizan comandas entre mesa y cocina de inmediato, eliminando la necesidad de servidores WebSocket dedicados o polling."
              },
              {
                title: "Estructura NoSQL y Desnormalización Estratégica",
                desc: "Diseño por colecciones (platos, ingredientes, comandas, adn_culinario) con desnormalización selectiva (ej. restaurantName) para minimizar lecturas y costes de Firestore."
              },
              {
                title: "Seguridad y Autorización Declarativa",
                desc: "Reglas de Firestore (firestore.rules) a nivel de base de datos que validan permisos y roles (client vs restaurant) sin intermediación de un backend tradicional."
              },
              {
                title: "Digitalización Asistida por IA (OCR)",
                desc: "Integración con API de OpenAI para procesar cartas físicas fotografiadas y mapear automáticamente nombres, precios, ingredientes y alérgenos normalizados."
              }
            ]
          },
          mormas: {
            badge: "Caso de Estudio • Arquitectura Spring MVC",
            title: "Mountain Race Management System (MoRMaS)",
            confidential_note: "Sistema de Información Corporativo con Arquitectura en Capas y Control Transaccional en Java.",
            flow_title: "Flujo de Control MVC y Persistencia",
            infra_label: "Contenedor de Aplicación Empresarial (Spring Boot Embedded Tomcat Engine)",
            flow_nodes: [
              {
                step: "01",
                title: "Vistas Thymeleaf",
                sub: "Plantillas HTML5 Dinámicas, Bootstrap Responsive y Validación en Cliente",
                type: "web"
              },
              {
                step: "02",
                title: "Controladores Spring MVC",
                sub: "Rutas HTTP (@Controller), Inyección de Dependencias y Control de Sesión",
                type: "etl"
              },
              {
                step: "03",
                title: "Capa de Dominio (Model)",
                sub: "Entidades de Negocio (Carrera, Competicion, Inscripcion, Voluntario)",
                type: "source"
              },
              {
                step: "04",
                title: "Capa DAO con JdbcTemplate",
                sub: "Operaciones CRUD, RowMapper específicos y Gestión de Excepciones",
                type: "broker"
              },
              {
                step: "05",
                title: "PostgreSQL Relacional",
                sub: "Modelo Físico Normalizado, Restricciones CASCADE / RESTRICT y CHECK",
                type: "db"
              },
              {
                step: "06",
                title: "Servicios de Negocio",
                sub: "Control RBAC (Promotor / Atleta / Voluntario), Generación de PDFs y Cronos",
                type: "infra"
              }
            ],
            decisions_title: "Decisiones de Ingeniería",
            decisions: [
              {
                title: "Separación Estricta de Responsabilidades (MVC)",
                desc: "Arquitectura desacoplada en paquetes model, dao y controller, aislando la lógica de negocio de la presentación y garantizando mantenibilidad."
              },
              {
                title: "Persistencia Eficiente con JdbcTemplate",
                desc: "Control explícito de consultas SQL y mapeo directo a POJOs con RowMapper dedicados, previniendo sobrecargas de ORM y manejando excepciones de Spring."
              },
              {
                title: "Integridad Referencial Firme en Base de Datos",
                desc: "Modelo relacional en PostgreSQL con claves foráneas protegidas, tablas intermedias para relaciones N:M (Aportacion, Ofrece, Asignan) y restricciones de borrado."
              },
              {
                title: "Control de Acceso basado en Roles (RBAC)",
                desc: "Gestión de perfiles diferenciados (Promotor, Atleta, Voluntario) con validadores de sesión en controlador para blindar la operativa de cada rol."
              }
            ]
          }
        },
        titles: {
          gustome: "Gustomé - Gestión Inteligente de Cartas",
          tfg: "Plataforma BI de Ciberseguridad (TFG)",
          mormas: "Mountain Race Management System (MoRMaS)",
          marketpulse: "Market Pulse - Análisis Financiero & Dashboard",
          portfolio: "Portfolio Web Personal",
        },
        periods: {
          gustome: "Septiembre 2025 - Mayo 2026",
          tfg: "Febrero 2026 - Mayo 2026",
          mormas: "Septiembre 2024 - Mayo 2025",
          marketpulse: "Octubre 2025 - Diciembre 2025",
          portfolio: "2025 - 2026",
        },
        descriptions: {
          gustome:
            "Plataforma digital para la digitalización y gestión de menús en restaurantes. Permite personalizar la experiencia del comensal mediante filtros interactivos multicriterio por alérgenos y preferencias dietéticas con sincronización en tiempo real.",
          tfg: "Plataforma de Business Intelligence end-to-end para la monitorización de KPIs de ciberseguridad corporativa. Destaca por el desacoplamiento de la ingesta pesada de datos mediante un pipeline ETL y colas asíncronas (Celery/Redis) para evitar bloqueos y garantizar tiempos de carga inmediatos en los dashboards directivos.",
          mormas:
            "Aplicación web corporativa para la gestión integral de carreras de montaña. Resuelve la gestión transaccional de inscripciones, seguridad y control de acceso basado en roles (RBAC entre promotores y corredores), notificaciones automáticas y generación dinámica de justificantes PDF en servidor sin penalizar el rendimiento.",
          marketpulse:
            "Aplicación interactiva de análisis bursátil en tiempo real. Consume APIs de Yahoo Finance para graficar históricos y calcular métricas estadísticas clave como la volatilidad y el valor en riesgo (VaR).",
          portfolio:
            "Página web personal diseñada con enfoque premium en UI/UX para mostrar mi trayectoria profesional y académica. Cuenta con optimización móvil, soporte de modo oscuro automático y componentes interactivos como redes SVG.",
        },
        captions: {
          gustome: {
            landing: "Página de inicio (landing page) de la plataforma Gustomé.",
            dashboard: "Panel de administración del restaurante para gestionar cartas y pedidos.",
            agregar_plato: "Formulario interactivo para añadir y editar platos en la carta digital.",
            pedidos_restaurante: "Panel de gestión de pedidos activos en tiempo real para el restaurante.",
            pedidos_cliente_movil: "Vista móvil de cliente para realizar pedidos directamente desde la mesa.",
          },
          tfg: {
            login: "Pantalla de inicio de sesión segura de la plataforma BI.",
            ejecutivo: "Panel ejecutivo con KPIs globales de ciberseguridad corporativa.",
            operativo: "Panel operativo con monitorización de amenazas y alertas en tiempo real.",
          },
          mormas: {
            promotor: "Panel de administración de MoRMaS para promotores y creadores de carreras de montaña.",
            competiciones: "Vista de gestión de competiciones y visualización de corredores inscritos.",
          },
          marketpulse: {
            main: "Dashboard interactivo con gráficos financieros, cálculo de volatilidad e históricos bursátiles.",
          },
        },
      },
      experience: {
        title: "Trayectoria",
        subtitle:
          "Una mirada cronológica a mi formación académica y mi trayectoria profesional.",
        filter_all: "Ver Todo",
        filter_work: "Experiencia",
        filter_education: "Educación",
        titles: {
          pamesa: "Ingeniero de Software (Prácticas)",
          milano: "Estancia Erasmus+",
          ecoporcelanico: "Operario de producción",
          wandegar: "Operario de producción",
          uji: "Grado en Ingeniería Informática",
        },
        institutions: {
          pamesa: "Pamesa Grupo Empresarial",
          milano: "Università degli Studi di Milano",
          ecoporcelanico: "ECO PORCELÁNICO S.L.U.",
          wandegar: "WANDEGAR 2001 S.L.U.",
          uji: "Universitat Jaume I",
        },
        periods: {
          pamesa: "Febrero 2026 - Mayo 2026",
          milano: "Septiembre 2025 - Enero 2026",
          ecoporcelanico: "Julio-Agosto 2025",
          wandegar: "Julio-Agosto 2024",
          uji: "Septiembre 2022 - Junio 2026",
        },
        descriptions: {
          pamesa:
            "Desarrollo integral de una plataforma BI para monitorización de KPIs de ciberseguridad. Implementé un pipeline ETL en Python, modelos en PostgreSQL y dashboards con Django y Tailwind CSS, utilizando Celery/Redis para orquestación asíncrona y Docker para el despliegue.",
          milano:
            "Cursé asignaturas de máster en Computer Science y Data Science for Economics, aprendiendo NoSQL (MongoDB), Business Intelligence y Data Science, y fortaleciendo mi adaptabilidad a entornos internacionales.",
          ecoporcelanico:
            "Trabajo en entorno industrial de alta exigencia con objetivos diarios de producción estrictos. Reforcé la disciplina operativa, la coordinación bajo presión en turnos continuos y la resolución ágil de incidencias en línea mientras cursaba el grado.",
          wandegar:
            "Ejecución de procesos de fabricación estandarizados bajo métricas de calidad y tiempos de entrega ajustados. Consolidé la precisión operativa, la organización del flujo de trabajo en equipo y el cumplimiento riguroso de plazos.",
          uji: "Durante el grado adquirí una base sólida en programación, estructuras de datos, algoritmos, bases de datos, redes y desarrollo web, fortaleciendo habilidades colaborativas en entornos de desarrollo.",
        },
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
        form_submit: "Enviar Mensaje",
        form_sending: "Enviando...",
        form_success_title: "¡Mensaje enviado con éxito!",
        form_success_desc: "Gracias por contactar. He recibido tu mensaje y te responderé lo antes posible.",
        form_send_another: "Enviar otro mensaje",
        form_error: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o escríbeme directamente por email.",
      },
      footer: {
        copyright:
          "© {{year}} Victor Blasco García. Todos los derechos reservados.",
        design_by: "Diseñado & Desarrollado por Victor Blasco",
        role: "Ingeniería Informática | Desarrollo de Software",
        home: "Inicio",
        back_to_top: "Volver arriba",
      },
    },
  },
  en: {
    translation: {
      navbar: {
        about: "About me",
        projects: "Projects",
        experience: "Career",
        contact: "Contact",
      },
      header: {
        greeting: "Hi! I'm Victor Blasco 👋",
        role: "Software Engineer",
        headline:
          'Building software <br />end to <span class="highlight-text">end.</span>',
        subheadline:
          "Designing intuitive interfaces and solid backend architectures.",
        role_description:
          "Software Engineer specializing in fullstack development, focused on creating scalable, efficient solutions with a carefully crafted user interface.",
        download_cv: "Download CV",
      },
      about: {
        title: "About me",
        text: "Computer Engineering graduate from Universitat Jaume I. I combine Full-Stack development in enterprise ecosystems (Java/Spring Boot and Python/Django) with data architectures, ETL pipelines, and cybersecurity monitoring. My focus is on building scalable, decoupled, and maintainable software from the database schema to the user interface.",
        languages_title: "Languages",
        lang_spanish: "Spanish",
        lang_valencian: "Valencian",
        lang_english: "English",
        lang_italian: "Italian",
        level_native: "Native",
        level_advanced_c1: "Advanced (C1)",
        level_intermediate_b1: "Intermediate (B1)",
        soft_skills_title: "Soft Skills",
        skill_teamwork_title: "Maintainable & Collaborative Code",
        skill_teamwork_desc:
          "Designing clean APIs, clear documentation, and version control workflows structured so other developers can scale the project without friction.",
        skill_proactivity_title: "Product Vision (End-to-End)",
        skill_proactivity_desc:
          "Ability to transform a business requirement from database schema design and asynchronous pipelines all the way to a fast, intuitive interface.",
        skill_problem_solving_title: "Pragmatism & Solid Architecture",
        skill_problem_solving_desc:
          "Selecting tools justified by the use case (asynchronous queues with Celery/Redis, relational or NoSQL models) prioritizing stability and performance.",
        skill_adaptation_title: "Autonomy in International Environments",
        skill_adaptation_desc:
          "Fast learning curve demonstrated across multiple stacks (Java, Python, React) and adapting to academic and technical methodologies abroad (Erasmus+ in Milan).",
      },
      techstack: {
        title: "My Tech Stack",
        subtitle:
          "Hover over main languages to display their supporting frameworks.",
        placeholder:
          "Hover over a node to explore my technologies and see their dependencies or frameworks",
        types: {
          language: "[Language]",
          framework: "[Framework]",
          database: "[Database]",
          tool: "[Tool]",
          platform: "[Platform]",
        },
        descriptions: {
          html: "Structured and semantic web layout according to modern W3C standards.",
          css: "Visual design, flexible layouts (Grid/Flexbox), and responsive animations.",
          tailwind:
            "Utility-first CSS framework for rapid interface layout using predefined and configurable classes.",
          javascript:
            "Programming interactive frontend logic and asynchronous behavior in the browser.",
          react:
            "SPA library to build reactive components, Hooks, and fast rendering.",
          python:
            "Fast backend development, data analysis scripts, and automation.",
          django:
            "Rapid development framework for APIs, integrated ORM, and secure data management.",
          java: "Robust object-oriented programming with strong typing and high performance.",
          spring:
            "Enterprise framework for self-configured microservices and REST APIs.",
          postgresql:
            "Relational database management, ACID transactions, and complex SQL queries.",
          mongodb:
            "Document-based NoSQL storage with flexible schemas and high availability.",
          docker:
            "Virtual containers to ensure environment parity between development and production.",
          nginx:
            "High-performance web server and reverse proxy for traffic orchestration and deployment.",
          git: "Local distributed version control system for agile development.",
          github: "Cloud hosting platform for version control and teamwork.",
        },
      },
      projects: {
        title: "Projects",
        featured_tag: "Featured Project",
        private_repo: "Private Repository",
        view_on_github: "View on GitHub",
        view_architecture: "View Architecture",
        architectures: {
          tfg: {
            badge: "Case Study • BI Architecture",
            title: "Cybersecurity BI Platform (TFG)",
            confidential_note: "Private source code under corporate non-disclosure agreement with Pamesa Grupo Empresarial.",
            flow_title: "Data Flow & Processing Pipeline",
            infra_label: "Containerized Infrastructure (Docker & Docker Compose with Healthchecks)",
            flow_nodes: [
              {
                step: "01",
                title: "Security Sources",
                sub: "Cortex XDR, Proofpoint, Endpoint Central (REST APIs / CSV)",
                type: "source"
              },
              {
                step: "02",
                title: "Python ETL Pipeline",
                sub: "Extraction, Date Normalization & Validation via contracts.py",
                type: "etl"
              },
              {
                step: "03",
                title: "Celery + Redis Broker",
                sub: "Asynchronous Ingestion Orchestration & Background Tasks",
                type: "broker"
              },
              {
                step: "04",
                title: "PostgreSQL Persistence",
                sub: "Normalized Relational Schema (3NF) with Historical Snapshots",
                type: "db"
              },
              {
                step: "05",
                title: "Django Backend (SOLID)",
                sub: "managed=False ORM Models, DTOs, Context Builders & RBAC",
                type: "web"
              },
              {
                step: "06",
                title: "Nginx + Gunicorn",
                sub: "Reverse Proxy, Static Files Caching & WSGI App Server",
                type: "infra"
              }
            ],
            decisions_title: "Engineering Decisions",
            decisions: [
              {
                title: "Decoupled Asynchronous Ingestion",
                desc: "Heavy extraction and KPI calculations are offloaded to independent Celery workers backed by Redis, preventing web server request thread starvation."
              },
              {
                title: "Normalized Relational Modeling (3NF)",
                desc: "PostgreSQL schema with strict referential integrity, CHECK constraints, and periodic snapshots for historical auditability without orphaned records."
              },
              {
                title: "Decoupled Django Architecture (SOLID)",
                desc: "Unmanaged ORM models (managed = False) decouple physical DDL from Django, structured into Services, Schemas/DTOs, and Context Builders."
              },
              {
                title: "Isolated Multi-Container Deployment",
                desc: "Nginx manages SSL/static assets and proxies dynamic traffic to Gunicorn; services orchestrated with Docker Compose and healthchecks."
              }
            ]
          },
          gustome: {
            badge: "Case Study • Serverless Architecture",
            title: "Gustomé - Intelligent Menu Management",
            confidential_note: "Cloud-Native event-driven architecture with reactive NoSQL persistence on Google Cloud.",
            flow_title: "Bidirectional Serverless Data Flow",
            infra_label: "Serverless Ecosystem & Continuous Hosting (Google Firebase Cloud Platform)",
            flow_nodes: [
              {
                step: "01",
                title: "React + Vite Client",
                sub: "Reactive SPA, Context API (AuthContext) & Modular Components",
                type: "web"
              },
              {
                step: "02",
                title: "Firebase Auth",
                sub: "Session Management, Google OAuth & Email/Password (Unique UID)",
                type: "source"
              },
              {
                step: "03",
                title: "Cloud Firestore (NoSQL)",
                sub: "Real-time Synchronization via Reactive Listeners (onSnapshot)",
                type: "db"
              },
              {
                step: "04",
                title: "Firestore Security Rules",
                sub: "Declarative Access Control & Privacy-First Isolation by Role",
                type: "infra"
              },
              {
                step: "05",
                title: "External Services",
                sub: "Stripe (Payments), Cloudinary (Media) & OpenAI (Menu OCR)",
                type: "etl"
              },
              {
                step: "06",
                title: "CI/CD & Firebase Hosting",
                sub: "Automated GitHub Actions pipeline for continuous cloud deployment",
                type: "broker"
              }
            ],
            decisions_title: "Engineering Decisions",
            decisions: [
              {
                title: "Real-Time Reactive Synchronization",
                desc: "Firestore onSnapshot listeners synchronize orders between diner table and kitchen immediately, eliminating dedicated WebSocket servers and polling."
              },
              {
                title: "NoSQL Schema & Strategic Denormalization",
                desc: "Collections (dishes, ingredients, orders, culinary_dna) designed with selective denormalization (e.g. restaurantName) to minimize reads and Firestore costs."
              },
              {
                title: "Declarative Privacy-First Authorization",
                desc: "Database-level Firestore rules (firestore.rules) validate permissions and roles (client vs restaurant) without traditional backend overhead."
              },
              {
                title: "AI-Assisted Digitalization (OCR)",
                desc: "OpenAI API integration to parse photographed paper menus and automatically map names, prices, ingredients, and normalized allergens."
              }
            ]
          },
          mormas: {
            badge: "Case Study • Spring MVC Architecture",
            title: "Mountain Race Management System (MoRMaS)",
            confidential_note: "Enterprise Layered Information System with Transactional Control in Java & Spring Boot.",
            flow_title: "MVC Control Flow & Data Persistence",
            infra_label: "Enterprise Application Container (Spring Boot Embedded Tomcat Engine)",
            flow_nodes: [
              {
                step: "01",
                title: "Thymeleaf Views",
                sub: "Dynamic HTML5 Templates, Responsive Bootstrap & Client-Side Validation",
                type: "web"
              },
              {
                step: "02",
                title: "Spring MVC Controllers",
                sub: "HTTP Routing (@Controller), Dependency Injection & Session Tracking",
                type: "etl"
              },
              {
                step: "03",
                title: "Domain Layer (Model)",
                sub: "Business Entities (Race, Competition, Registration, Volunteer)",
                type: "source"
              },
              {
                step: "04",
                title: "DAO Layer with JdbcTemplate",
                sub: "Typed SQL Queries, Custom RowMappers & Exception Handling",
                type: "broker"
              },
              {
                step: "05",
                title: "Relational PostgreSQL",
                sub: "Normalized Physical Schema, ON DELETE CASCADE/RESTRICT & CHECK Constraints",
                type: "db"
              },
              {
                step: "06",
                title: "Business Services",
                sub: "RBAC (Promoter / Runner / Volunteer), Dynamic PDF Export & Timing",
                type: "infra"
              }
            ],
            decisions_title: "Engineering Decisions",
            decisions: [
              {
                title: "Strict Separation of Concerns (MVC)",
                desc: "Modular structure across model, dao, and controller packages, decoupling business logic from web presentation and ensuring maintainability."
              },
              {
                title: "Efficient Persistence with JdbcTemplate",
                desc: "Explicit SQL query control and direct POJO mapping with dedicated RowMappers, avoiding heavy ORM overhead and handling Spring data exceptions."
              },
              {
                title: "Firm Referential Integrity in Database",
                desc: "PostgreSQL relational schema with protected foreign keys, junction tables for N:M relationships (Aportacion, Ofrece, Asignan), and delete restrictions."
              },
              {
                title: "Role-Based Access Control (RBAC)",
                desc: "Distinct user profiles (Promoter, Athlete, Volunteer) with controller-level session validation to shield role-specific operations."
              }
            ]
          }
        },
        titles: {
          gustome: "Gustomé - Intelligent Menu Management",
          tfg: "Cybersecurity BI Platform (TFG)",
          mormas: "Mountain Race Management System (MoRMaS)",
          marketpulse: "Market Pulse - Financial Analysis & Dashboard",
          portfolio: "Personal Web Portfolio",
        },
        periods: {
          gustome: "September 2025 - May 2026",
          tfg: "February 2026 - May 2026",
          mormas: "September 2024 - May 2025",
          marketpulse: "October 2025 - December 2025",
          portfolio: "2025 - 2026",
        },
        descriptions: {
          gustome:
            "Digital platform for restaurant menu digitalization and management. Allows customizing the diner experience with real-time interactive multi-criteria filters for allergens and dietary preferences.",
          tfg: "End-to-end Business Intelligence platform for corporate cybersecurity KPI monitoring. Features decoupled heavy data ingestion via an automated ETL pipeline and asynchronous queues (Celery/Redis) to prevent blocking and guarantee instant load times on executive dashboards.",
          mormas:
            "Corporate web application for comprehensive mountain race management. Solves transactional registration concurrency, role-based access control (RBAC between promoters and runners), automated email notifications, and server-side dynamic PDF voucher generation without performance penalties.",
          marketpulse:
            "Interactive real-time stock market analysis application. Consumes Yahoo Finance APIs to plot historical data and calculate key statistical metrics like volatility and Value at Risk (VaR).",
          portfolio:
            "Personal website designed with a premium UI/UX focus to showcase my professional and academic career. Features mobile optimization, automatic dark mode support, and interactive components like SVG networks.",
        },
        captions: {
          gustome: {
            landing: "Landing page of the Gustomé platform.",
            dashboard: "Restaurant administration dashboard to manage menus and orders.",
            agregar_plato: "Interactive form to add and edit dishes in the digital menu.",
            pedidos_restaurante: "Real-time active orders management panel for the restaurant.",
            pedidos_cliente_movil: "Customer mobile view for placing orders directly from the table.",
          },
          tfg: {
            login: "Secure login screen of the BI platform.",
            ejecutivo: "Executive dashboard with global corporate cybersecurity KPIs.",
            operativo: "Operational dashboard with real-time threat and alert monitoring.",
          },
          mormas: {
            promotor: "MoRMaS administration panel for mountain race promoters and creators.",
            competiciones: "Competitions management view and registered runners list.",
          },
          marketpulse: {
            main: "Interactive dashboard with financial charts, volatility calculation, and historical stock data.",
          },
        },
      },
      experience: {
        title: "Career",
        subtitle:
          "A chronological look at my academic education and professional career.",
        filter_all: "View All",
        filter_work: "Experience",
        filter_education: "Education",
        titles: {
          pamesa: "Software Engineer (Internship)",
          milano: "Erasmus+ Stay",
          ecoporcelanico: "Production Operator",
          wandegar: "Production Operator",
          uji: "Bachelor's Degree in Computer Engineering",
        },
        institutions: {
          pamesa: "Pamesa Grupo Empresarial",
          milano: "Università degli Studi di Milano",
          ecoporcelanico: "ECO PORCELÁNICO S.L.U.",
          wandegar: "WANDEGAR 2001 S.L.U.",
          uji: "Universitat Jaume I",
        },
        periods: {
          pamesa: "February 2026 - May 2026",
          milano: "September 2025 - January 2026",
          ecoporcelanico: "July-August 2025",
          wandegar: "July-August 2024",
          uji: "September 2022 - June 2026",
        },
        descriptions: {
          pamesa:
            "Full development of a BI platform for cybersecurity KPI monitoring. Implemented an ETL pipeline in Python, models in PostgreSQL, and dashboards with Django and Tailwind CSS, using Celery/Redis for asynchronous orchestration and Docker for deployment.",
          milano:
            "Took master's courses in Computer Science and Data Science for Economics, learning NoSQL (MongoDB), Business Intelligence, and Data Science, and strengthening my adaptability in international environments.",
          ecoporcelanico:
            "Worked in a high-demand industrial environment with strict daily production targets. Reinforced operational discipline, team coordination under pressure across continuous shifts, and rapid incident resolution while pursuing my engineering degree.",
          wandegar:
            "Executed standardized manufacturing processes under tight quality metrics and delivery deadlines. Consolidated operational precision, team workflow organization, and strict deadline compliance.",
          uji: "During the degree, I acquired a solid foundation in programming, data structures, algorithms, databases, networking, and web development, strengthening collaborative skills in development environments.",
        },
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
        form_submit: "Send Message",
        form_sending: "Sending...",
        form_success_title: "Message sent successfully!",
        form_success_desc: "Thanks for reaching out! I have received your message and will get back to you as soon as possible.",
        form_send_another: "Send another message",
        form_error: "There was an error sending your message. Please try again or write to me directly via email.",
      },
      footer: {
        copyright: "© {{year}} Victor Blasco García. All rights reserved.",
        design_by: "Designed & Developed by Victor Blasco",
        role: "Computer Engineering | Software Development",
        home: "Home",
        back_to_top: "Back to top",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("i18nextLng") || "es", // Idioma inicial
  fallbackLng: "es",
  interpolation: {
    escapeValue: false, // React ya protege contra XSS
  },
});

export default i18n;
