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
        greeting: "Disponible para nuevas oportunidades",
        role: "Backend Software Engineer",
        subheadline:
          "Java/Spring Boot · Python/Django · PostgreSQL — con foco en seguridad (CyberArk PAM)",
        location:
          "Castellón, España · Remoto / Híbrido / Abierto a reubicación",
        download_cv: "Descargar CV",
        copy_email: "Copiar email",
        email_copied: "¡Copiado!",
      },
      about: {
        title: "Sobre mí",
        text: "Ingeniero Informático por la Universitat Jaume I, orientado a backend. Desarrollo con Java/Spring Boot y Python/Django sobre PostgreSQL, construyo pipelines ETL con procesamiento asíncrono (Celery/Redis) y despliego con Docker y Nginx. En mis prácticas en Pamesa diseñé en solitario una plataforma de KPIs de ciberseguridad que integra Cortex XDR, Proofpoint y Endpoint Central, y he completado el bootcamp de CyberArk PAM de NTT DATA. Busco un rol de backend donde la seguridad forme parte del diseño, no sea un añadido.",
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
          "Erasmus+ en Milán cursando asignaturas de máster en inglés, y proyectos en tres stacks distintos (Java, Python, React) en equipos de distinta composición.",
      },
      skills: {
        title: "Stack técnico",
        categories: {
          backend: "Backend",
          data: "Datos",
          devops: "Infraestructura y DevOps",
          security: "Seguridad",
          testing: "Testing",
          frontend: "Frontend",
        },
        items: {
          least_privilege: "Mínimo privilegio",
          credential_rotation: "Rotación de credenciales",
        },
      },
      projects: {
        title: "Proyectos",
        private_repo: "Repositorio Privado",
        view_on_github: "Ver en GitHub",
        view_architecture: "Ver Arquitectura",
        previews_title: "Vista Previa de la Interfaz",
        zoom_preview: "Ampliar captura",
        tags: {
          tfg: "Prácticas en empresa",
          gustome: "Proyecto en equipo",
          mormas: "Proyecto en equipo",
          marketpulse: "Proyecto personal",
        },
        roles: {
          tfg: "Rol: Autor único · Software Engineer Intern",
          gustome: "Rol: Lead Developer · Contribuidor principal",
          mormas: "Rol: Lead Developer · Contribuidor principal",
        },
        architectures: {
          tfg: {
            badge: "Caso de Estudio • Arquitectura BI",
            role_badge: "Autor Único (Prácticas / TFG)",
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
            role_badge: "Lead Developer (Contribuidor #1)",
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
            ],
            contributions_title: "Mi Contribución Clave (Rol Principal)",
            contributions: [
              "Privacidad y ADN Culinario (B2C): perfil de alergias y dietas almacenado solo en el dispositivo del usuario y telemetría anónima agregada.",
              "Business Intelligence (B2B): Dashboard analítico con KPIs, predicción de demanda/mermas a 7 días y tabla interactiva de Ingeniería de Menú.",
              "Branding, Media y Flujos Core: Personalización dinámica de marca por restaurante, subida a Firebase Storage, autenticación B2B e historial de pedidos.",
              "Arquitectura y Calidad: Definición de estándares del repositorio, Context Engineering, refactorización modular y revisión de Pull Requests."
            ]
          },
          mormas: {
            badge: "Caso de Estudio • Arquitectura Spring MVC",
            role_badge: "Lead Developer (Contribuidor #1)",
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
            ],
            contributions_title: "Mi Contribución Clave (Rol Principal)",
            contributions: [
              "Arquitectura Base y SQL: Configuración inicial de Spring Boot, captura global de excepciones (@ControllerAdvice) y diseño del esquema PostgreSQL.",
              "Autenticación y Sesiones RBAC: Implementación integral de login, control de sesiones y áreas personales para Promotores, Atletas y Clubes.",
              "Módulos Core y Notificaciones: CRUD de participantes y clubes, validadores de negocio, pasarela de inscripción y confirmación por correo (EmailService).",
              "Integración y UI/UX: Plantillas base Thymeleaf, filtros de búsqueda/ordenación y coordinación técnica de ramas y merges del equipo."
            ]
          }
        },
        titles: {
          gustome: "Gustomé - Gestión Inteligente de Cartas",
          tfg: "Plataforma BI de Ciberseguridad (TFG)",
          mormas: "Mountain Race Management System (MoRMaS)",
          marketpulse: "Market Pulse - Análisis Financiero & Dashboard",
        },
        periods: {
          gustome: "Septiembre 2025 - Mayo 2026",
          tfg: "Febrero 2026 - Mayo 2026",
          mormas: "Septiembre 2024 - Mayo 2025",
          marketpulse: "Octubre 2025 - Diciembre 2025",
        },
        descriptions: {
          tfg: "Plataforma BI que centraliza en un panel ejecutivo y otro operativo los KPIs de 3 plataformas de seguridad corporativa (Cortex XDR, Proofpoint y Endpoint Central). Pipeline ETL en Python con validación por contratos, ingesta asíncrona con Celery/Redis para no bloquear las peticiones web, modelo PostgreSQL normalizado (3FN) con snapshots históricos y control de acceso por roles. Desplegada con Docker Compose, Nginx y Gunicorn.",
          gustome:
            "Plataforma de cartas digitales para restaurantes: filtros por alérgenos y dieta para el comensal, pedidos sincronizados en tiempo real entre mesa y cocina (Firestore onSnapshot) y digitalización de cartas en papel mediante OCR con la API de OpenAI. Autorización por rol a nivel de datos con Firestore Security Rules y despliegue continuo con GitHub Actions.",
          mormas:
            "Aplicación web en Java/Spring Boot para gestionar carreras de montaña: inscripciones, autenticación con control de acceso para 3 roles (promotor, atleta y voluntario), confirmaciones por email y justificantes PDF generados en servidor. Arquitectura por capas (Controller · DAO con JdbcTemplate · PostgreSQL) con la integridad referencial garantizada en base de datos.",
          marketpulse:
            "Paquete Python de análisis financiero que descarga históricos de Yahoo Finance en una única llamada por lote y calcula rentabilidades diarias, volatilidad y matrices de correlación entre sectores. La lógica está separada de la presentación (Streamlit y Jupyter) y cubierta con tests unitarios y de integración en pytest.",
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
          cyberark: "Bootcamp CyberArk PAM",
          pamesa: "Software Engineer (Prácticas)",
          milano: "Estancia Erasmus+",
          industria: "Operario de producción (empleos de verano)",
          uji: "Grado en Ingeniería Informática",
        },
        institutions: {
          cyberark: "NTT DATA · Formación híbrida",
          pamesa: "Pamesa Grupo Empresarial",
          milano: "Università degli Studi di Milano",
          industria: "Eco Porcelánico · Wandegar 2001",
          uji: "Universitat Jaume I",
        },
        periods: {
          cyberark: "Septiembre 2026 - Octubre 2026",
          pamesa: "Febrero 2026 - Mayo 2026",
          milano: "Septiembre 2025 - Enero 2026",
          industria: "Veranos 2024 y 2025",
          uji: "Septiembre 2022 - Junio 2026",
        },
        descriptions: {
          cyberark:
            "Desplegué y administré una solución CyberArk PAM self-hosted (Vault, PVWA, CPM, PSM) en un laboratorio de 7 servidores: Safes con mínimo privilegio, integración con LDAP, rotación automática de credenciales y aislamiento de sesiones privilegiadas. Diagnostiqué incidencias mediante análisis de logs con criterios de hardening y alta disponibilidad. Preparando las certificaciones CyberArk Defender y Sentry.",
          pamesa:
            "Diseñé y desarrollé en solitario una plataforma BI de KPIs de ciberseguridad que integra 3 fuentes (Cortex XDR, Proofpoint y Endpoint Central). Construí el pipeline ETL en Python con validación por contratos, el modelo PostgreSQL (3FN) y los dashboards ejecutivo y operativo en Django, delegando la ingesta en workers Celery/Redis y desplegando con Docker Compose, Nginx y Gunicorn.",
          milano:
            "Asignaturas de máster en Computer Science y Data Science for Economics impartidas en inglés: bases de datos NoSQL (MongoDB), Business Intelligence y Data Science.",
          industria:
            "Trabajo a turnos con objetivos de producción diarios, compaginado con el grado.",
          uji: "Programación, estructuras de datos y algoritmos, bases de datos, redes y desarrollo web. TFG: plataforma BI de ciberseguridad desarrollada durante las prácticas en Pamesa.",
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
        copy_email: "Copiar",
        email_copied: "¡Copiado!",
      },
      footer: {
        copyright:
          "© {{year}} Victor Blasco García. Todos los derechos reservados.",
        design_by: "Diseñado & Desarrollado por Victor Blasco",
        role: "Ingeniería Informática | Backend & Seguridad",
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
        greeting: "Open to new opportunities",
        role: "Backend Software Engineer",
        subheadline:
          "Java/Spring Boot · Python/Django · PostgreSQL — security-focused (CyberArk PAM)",
        location:
          "Castellón, Spain · Remote / Hybrid / Open to relocation",
        download_cv: "Download CV",
        copy_email: "Copy email",
        email_copied: "Copied!",
      },
      about: {
        title: "About me",
        text: "Computer Engineering graduate (Universitat Jaume I) focused on backend. I build with Java/Spring Boot and Python/Django on PostgreSQL, design ETL pipelines with asynchronous processing (Celery/Redis), and deploy with Docker and Nginx. During my internship at Pamesa I single-handedly built a cybersecurity KPI platform integrating Cortex XDR, Proofpoint and Endpoint Central, and I've completed NTT DATA's CyberArk PAM bootcamp. I'm looking for a backend role where security is part of the design, not an afterthought.",
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
          "Erasmus+ in Milan taking master's courses taught in English, and projects across three different stacks (Java, Python, React) in varying team setups.",
      },
      skills: {
        title: "Tech stack",
        categories: {
          backend: "Backend",
          data: "Data",
          devops: "Infrastructure & DevOps",
          security: "Security",
          testing: "Testing",
          frontend: "Frontend",
        },
        items: {
          least_privilege: "Least privilege",
          credential_rotation: "Credential rotation",
        },
      },
      projects: {
        title: "Projects",
        private_repo: "Private Repository",
        view_on_github: "View on GitHub",
        view_architecture: "View Architecture",
        previews_title: "Interface Preview",
        zoom_preview: "Enlarge screenshot",
        tags: {
          tfg: "Industry internship",
          gustome: "Team project",
          mormas: "Team project",
          marketpulse: "Personal project",
        },
        roles: {
          tfg: "Role: Sole author · Software Engineer Intern",
          gustome: "Role: Lead Developer · Main contributor",
          mormas: "Role: Lead Developer · Main contributor",
        },
        architectures: {
          tfg: {
            badge: "Case Study • BI Architecture",
            role_badge: "Sole Author (Internship / BSc Thesis)",
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
            role_badge: "Lead Developer (#1 Contributor)",
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
            ],
            contributions_title: "My Key Contributions (Lead Role)",
            contributions: [
              "Privacy & Culinary DNA (B2C): allergy and dietary profile stored locally on the user's device, plus anonymized aggregated telemetry.",
              "Business Intelligence (B2B): Analytics dashboard with KPIs, 7-day demand/waste forecasting, and interactive Menu Engineering table.",
              "Branding, Media & Core Flows: Dynamic brand customization per restaurant, Firebase Storage uploads, B2B authentication, and order history.",
              "Architecture & Quality: Repository standards definition, Context Engineering, modular refactoring, and team Pull Request reviews."
            ]
          },
          mormas: {
            badge: "Case Study • Spring MVC Architecture",
            role_badge: "Lead Developer (#1 Contributor)",
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
            ],
            contributions_title: "My Key Contributions (Lead Role)",
            contributions: [
              "Core Architecture & SQL: Initial Spring Boot setup, global exception handling (@ControllerAdvice), and PostgreSQL relational schema design.",
              "Authentication & RBAC Sessions: End-to-end login, session tracking, and dedicated personal areas for Promoters, Athletes, and Clubs.",
              "Core Modules & Notifications: Full CRUD for participants and clubs, business validators, registration checkout, and automated confirmation emails (EmailService).",
              "Integration & UI/UX: Base Thymeleaf layout fragments, search/sort filters, and technical coordination of team branches and merges."
            ]
          }
        },
        titles: {
          gustome: "Gustomé - Intelligent Menu Management",
          tfg: "Cybersecurity BI Platform (TFG)",
          mormas: "Mountain Race Management System (MoRMaS)",
          marketpulse: "Market Pulse - Financial Analysis & Dashboard",
        },
        periods: {
          gustome: "September 2025 - May 2026",
          tfg: "February 2026 - May 2026",
          mormas: "September 2024 - May 2025",
          marketpulse: "October 2025 - December 2025",
        },
        descriptions: {
          tfg: "BI platform that centralizes KPIs from 3 corporate security tools (Cortex XDR, Proofpoint, and Endpoint Central) into executive and operational dashboards. Python ETL pipeline with contract validation, asynchronous ingestion via Celery/Redis to keep web requests non-blocking, normalized PostgreSQL schema (3NF) with historical snapshots, and role-based access control. Deployed with Docker Compose, Nginx, and Gunicorn.",
          gustome:
            "Digital menu platform for restaurants: allergen and dietary filters for diners, real-time order synchronization between table and kitchen (Firestore onSnapshot), and paper menu digitalization via OCR with the OpenAI API. Data-level role authorization with Firestore Security Rules and continuous deployment via GitHub Actions.",
          mormas:
            "Java/Spring Boot web application for mountain race management: registrations, authentication with role-based access control across 3 roles (promoter, athlete, and volunteer), email confirmations, and server-side PDF receipt generation. Layered architecture (Controller · JdbcTemplate DAO · PostgreSQL) with referential integrity enforced at the database level.",
          marketpulse:
            "Python financial analysis package that batch-downloads historical series from Yahoo Finance in a single call and computes daily returns, volatility, and cross-sector correlation matrices. Core logic is decoupled from presentation (Streamlit and Jupyter) and covered with unit and integration tests in pytest.",
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
          cyberark: "CyberArk PAM Bootcamp",
          pamesa: "Software Engineer Intern",
          milano: "Erasmus+ Stay",
          industria: "Production Operator (summer jobs)",
          uji: "Bachelor's Degree in Computer Engineering",
        },
        institutions: {
          cyberark: "NTT DATA · Hybrid training",
          pamesa: "Pamesa Grupo Empresarial",
          milano: "Università degli Studi di Milano",
          industria: "Eco Porcelánico · Wandegar 2001",
          uji: "Universitat Jaume I",
        },
        periods: {
          cyberark: "September 2026 - October 2026",
          pamesa: "February 2026 - May 2026",
          milano: "September 2025 - January 2026",
          industria: "Summers 2024 & 2025",
          uji: "September 2022 - June 2026",
        },
        descriptions: {
          cyberark:
            "Deployed and administered a self-hosted CyberArk PAM solution (Vault, PVWA, CPM, PSM) across a 7-server lab: least-privilege Safes, LDAP integration, automated credential rotation, and privileged session isolation. Diagnosed incidents through log analysis under hardening and high-availability standards. Currently preparing for the CyberArk Defender and Sentry certifications.",
          pamesa:
            "Single-handedly designed and built a cybersecurity KPI BI platform integrating 3 sources (Cortex XDR, Proofpoint, and Endpoint Central). Built the Python ETL pipeline with contract validation, the 3NF PostgreSQL schema, and the executive and operational dashboards in Django, offloading ingestion to Celery/Redis workers and deploying with Docker Compose, Nginx, and Gunicorn.",
          milano:
            "Master's courses in Computer Science and Data Science for Economics taught in English: NoSQL databases (MongoDB), Business Intelligence, and Data Science.",
          industria:
            "Shift work with daily production targets, balanced alongside my engineering degree.",
          uji: "Programming, data structures and algorithms, databases, computer networks, and web development. BSc Thesis: cybersecurity BI platform built during my internship at Pamesa.",
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
        copy_email: "Copy",
        email_copied: "Copied!",
      },
      footer: {
        copyright: "© {{year}} Victor Blasco García. All rights reserved.",
        design_by: "Designed & Developed by Victor Blasco",
        role: "Computer Engineering | Backend & Security",
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
