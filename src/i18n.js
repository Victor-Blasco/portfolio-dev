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
            infra_label: "Infraestructura en 5 Contenedores (Docker Compose con Healthchecks + CI en GitHub Actions)",
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
                sub: "Extracción, Contratos de Datos (contracts.py) y Auditoría de Ejecución",
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
                sub: "Trazabilidad Histórica por Snapshots y Registro de Auditorías",
                type: "db"
              },
              {
                step: "05",
                title: "Backend Django (Clean Arch)",
                sub: "Services, DTOs, Context Builders, Use Cases y Control RBAC",
                type: "web"
              },
              {
                step: "06",
                title: "Nginx + Gunicorn + CI",
                sub: "Proxy Inverso, Servidor WSGI y Pipeline de Tests (pytest)",
                type: "infra"
              }
            ],
            decisions_title: "Decisiones de Ingeniería",
            decisions: [
              {
                title: "Detección de Shadow IT y Score de Riesgo",
                desc: "Cruce automático entre alertas de Cortex XDR y el inventario de Endpoint Central para identificar dispositivos no gestionados, junto al cálculo de un score de riesgo ponderado por equipo (estado de BitLocker, permisos de administrador local y actividad de antivirus)."
              },
              {
                title: "Trazabilidad de Datos y Auditoría de Ingestas",
                desc: "Persistencia de snapshots periódicos para conservar la evolución temporal de los activos y registro de auditoría en cada ejecución del pipeline ETL (estado de la importación, volumen de registros procesados y trazas de error)."
              },
              {
                title: "Clean Architecture, Contratos y ADRs",
                desc: "Estructuración en capas (Services, Schemas/DTOs, Context Builders y Use Cases) con modelos desacoplados (managed = False), contratos de validación en contracts.py y decisiones técnicas documentadas mediante Architecture Decision Records (ADRs)."
              },
              {
                title: "Despliegue en 5 Contenedores y CI con GitHub Actions",
                desc: "Orquestación aislada con Docker Compose (Nginx, Gunicorn, PostgreSQL, Redis y worker Celery) gobernada por healthchecks, respaldada por integración continua en GitHub Actions que ejecuta pytest y la suite de Django en cada entrega."
              }
            ],
            contributions_title: "Alcance Técnico e Impacto (Autor Único)",
            contributions: [
              "Correlación Multi-Fuente (Shadow IT): Identificación de alertas generadas por equipos fuera del inventario corporativo y análisis de amenazas de correo en Proofpoint con enriquecimiento geográfico por IP.",
              "Ingesta Asíncrona y Optimización (~1 min a ~25 s): Procesamiento en segundo plano con Celery y Redis sin bloquear el servidor web, reduciendo el tiempo de obtención y procesado de datos de ~1 min a ~25 s con auditoría completa de cada ciclo.",
              "Calidad de Software y ADRs: Batería de tests unitarios y de integración (pytest + Django tests) para el pipeline ETL y el control de acceso (RBAC), manteniendo registro documental en ADRs.",
              "Puesta en Producción y Seguridad: Configuración de cabeceras de seguridad en Nginx, aislamiento de secretos por entorno y automatización de copias de seguridad."
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
                sub: "Stripe (Suscripciones), Cloudinary (Media) y OpenAI (OCR de Cartas)",
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
                title: "Modelo SaaS Multi-Tenant y Optimización de Lecturas",
                desc: "Control de funcionalidades por nivel de suscripción (Free, Basic y Pro) y desnormalización pensada para consultar el historial de pedidos en una sola lectura, reduciendo costes en Firestore."
              },
              {
                title: "Seguridad y Autorización Declarativa",
                desc: "Reglas de Firestore (firestore.rules) a nivel de base de datos que validan permisos y roles (client vs restaurant) sin intermediación de un backend tradicional."
              },
              {
                title: "Digitalización OCR con Catálogo Maestro",
                desc: "Integración con la API de OpenAI para procesar cartas físicas fotografiadas, normalizando los ingredientes y alérgenos detectados frente a un catálogo maestro para evitar duplicados."
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
                title: "PostgreSQL (14 Tablas)",
                sub: "Modelo Relacional Normalizado, Borrado Lógico (Soft Delete) y CHECK",
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
                title: "Esquema de 14 Tablas y Borrado Lógico (Soft Delete)",
                desc: "Modelo relacional en PostgreSQL con 14 tablas, claves compuestas e implementación de borrado lógico (soft delete) para dar de baja registros sin perder el histórico de competiciones pasadas."
              },
              {
                title: "Control de Acceso por Roles y Usabilidad Validada",
                desc: "Gestión de perfiles diferenciados (Promotor, Atleta, Voluntario) con validadores de sesión y flujos de inscripción evaluados mediante pruebas de usabilidad (87,5/100 en la escala SUS)."
              }
            ],
            contributions_title: "Mi Contribución Clave (Rol Principal)",
            contributions: [
              "Arquitectura Base y SQL: Configuración inicial de Spring Boot, captura global de excepciones (@ControllerAdvice) y diseño del esquema PostgreSQL de 14 tablas.",
              "Autenticación y Sesiones RBAC: Implementación integral de login, control de sesiones y áreas personales para Promotores, Atletas y Clubes.",
              "Módulos Core y Notificaciones: CRUD de participantes y clubes, borrado lógico para conservar la trazabilidad histórica, pasarela de inscripción y confirmación por correo (EmailService).",
              "Integración y Usabilidad (SUS 87,5/100): Plantillas base Thymeleaf, filtros de búsqueda, coordinación técnica de ramas y validación con usuarios obteniendo calificación excelente (87,5/100 SUS)."
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
          tfg: "Plataforma BI que cruza telemetría de 3 herramientas corporativas (Cortex XDR, Proofpoint y Endpoint Central) para detectar activos no inventariados (Shadow IT), calcular riesgo por equipo (BitLocker, administradores locales) y analizar amenazas de correo. Pipeline ETL en Python optimizado (reduciendo la obtención y procesado de datos de ~1 min a ~25 s) con validación por contratos, auditoría de ejecuciones e ingesta asíncrona con Celery/Redis. Desplegada en 5 contenedores Docker con CI en GitHub Actions (pytest).",
          gustome:
            "Plataforma SaaS de cartas digitales con planes por suscripción (Free, Basic y Pro): filtros por alérgenos y dieta para el comensal, pedidos sincronizados en tiempo real entre mesa y cocina (Firestore onSnapshot) y digitalización de cartas en papel mediante OCR con OpenAI normalizado contra un catálogo maestro de ingredientes. Autorización por rol con Firestore Security Rules y CI/CD con GitHub Actions.",
          mormas:
            "Aplicación web en Java/Spring Boot para gestionar carreras de montaña sobre un modelo relacional de 14 tablas en PostgreSQL: inscripciones, control de acceso para 3 roles (promotor, atleta y voluntario), borrado lógico (soft delete) para preservar el histórico de competiciones, confirmaciones por email y justificantes PDF. Validada mediante pruebas de usabilidad obteniendo un 87,5/100 en la escala SUS.",
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
            "Diseñé y desarrollé en solitario una plataforma BI de ciberseguridad que cruza datos de Cortex XDR, Proofpoint y Endpoint Central para detectar dispositivos fuera de inventario (Shadow IT) y evaluar riesgo por endpoint. Construí y optimicé el pipeline ETL en Python reduciendo la obtención y procesado de datos de ~1 min a ~25 s, los dashboards en Django siguiendo Clean Architecture (documentada en ADRs) y el despliegue en 5 contenedores Docker con CI en GitHub Actions (pytest).",
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
            infra_label: "5-Container Infrastructure (Docker Compose with Healthchecks + GitHub Actions CI)",
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
                sub: "Extraction, Data Contracts (contracts.py) & Execution Auditing",
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
                sub: "Historical Snapshot Traceability & Audit Logging",
                type: "db"
              },
              {
                step: "05",
                title: "Django Backend (Clean Arch)",
                sub: "Services, DTOs, Context Builders, Use Cases & RBAC Control",
                type: "web"
              },
              {
                step: "06",
                title: "Nginx + Gunicorn + CI",
                sub: "Reverse Proxy, WSGI Server & Automated Test Pipeline (pytest)",
                type: "infra"
              }
            ],
            decisions_title: "Engineering Decisions",
            decisions: [
              {
                title: "Shadow IT Detection & Endpoint Risk Scoring",
                desc: "Automated cross-referencing between Cortex XDR alerts and Endpoint Central asset inventory to uncover unmanaged devices, paired with a weighted endpoint risk score (BitLocker status, local admin privileges, and antivirus activity)."
              },
              {
                title: "Data Traceability & Pipeline Audit Logging",
                desc: "Periodic snapshots in PostgreSQL to preserve historical asset evolution, alongside comprehensive execution auditing for every ETL run (import status, processed row counts, and error traces)."
              },
              {
                title: "Clean Architecture, Data Contracts & ADRs",
                desc: "Layered architecture (Services, Schemas/DTOs, Context Builders, and Use Cases) with unmanaged ORM models (managed = False), validation contracts in contracts.py, and design decisions recorded via Architecture Decision Records (ADRs)."
              },
              {
                title: "5-Container Deployment & GitHub Actions CI",
                desc: "Isolated orchestration with Docker Compose (Nginx, Gunicorn, PostgreSQL, Redis, and Celery worker) governed by healthchecks, backed by a GitHub Actions CI pipeline running pytest and Django test suites on every push."
              }
            ],
            contributions_title: "Technical Scope & Impact (Sole Author)",
            contributions: [
              "Multi-Source Correlation (Shadow IT): Automated identification of critical alerts triggered by uninventoried assets and Proofpoint email threat intelligence with IP geolocation enrichment.",
              "Asynchronous Ingestion & Optimization (~1 min to ~25s): Background task offloading with Celery and Redis to prevent web thread blocking, cutting data extraction and processing time from ~1 min to ~25s with full audit logging.",
              "Software Quality & ADRs: Unit and integration test coverage (pytest + Django tests) across the ETL pipeline and role-based access control (RBAC), documented through formal ADRs.",
              "Production Hardening: Security HTTP headers in Nginx, environment-isolated secrets management, and automated database backup scripts."
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
                sub: "Stripe (Subscriptions), Cloudinary (Media) & OpenAI (Menu OCR)",
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
                title: "Multi-Tenant SaaS Tiers & Read Optimization",
                desc: "Feature gating across subscription tiers (Free, Basic, and Pro) and selective denormalization designed to fetch customer order history in a single read, reducing Firestore billing costs."
              },
              {
                title: "Declarative Privacy-First Authorization",
                desc: "Database-level Firestore rules (firestore.rules) validate permissions and roles (client vs restaurant) without traditional backend overhead."
              },
              {
                title: "AI OCR Normalized via Master Catalog",
                desc: "OpenAI API integration to parse photographed paper menus, mapping extracted ingredients and allergens against a standardized master catalog to prevent duplicates."
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
                title: "PostgreSQL (14 Tables)",
                sub: "Normalized Relational Schema, Logical Soft Delete & CHECK Constraints",
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
                title: "14-Table Schema & Logical Soft Delete",
                desc: "PostgreSQL relational model across 14 tables with composite keys and logical deactivation (soft delete) to retire records without losing historical competition data."
              },
              {
                title: "Role-Based Access Control & Validated Usability",
                desc: "Distinct user profiles (Promoter, Athlete, Volunteer) with controller-level session validation and registration flows validated through user testing (87.5/100 SUS score)."
              }
            ],
            contributions_title: "My Key Contributions (Lead Role)",
            contributions: [
              "Core Architecture & SQL: Initial Spring Boot setup, global exception handling (@ControllerAdvice), and design of the 14-table PostgreSQL relational schema.",
              "Authentication & RBAC Sessions: End-to-end login, session tracking, and dedicated personal areas for Promoters, Athletes, and Clubs.",
              "Core Modules & Notifications: Full CRUD for participants and clubs, logical soft delete for historical data preservation, registration checkout, and confirmation emails (EmailService).",
              "Integration & Usability (87.5/100 SUS): Base Thymeleaf layout fragments, search filters, branch coordination, and usability testing achieving an Grade-A 87.5/100 SUS score."
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
          tfg: "BI platform that cross-references telemetry from 3 corporate security tools (Cortex XDR, Proofpoint, and Endpoint Central) to detect unmanaged assets (Shadow IT), compute endpoint risk scores (BitLocker, local admins), and analyze email threats. Optimized Python ETL pipeline (cutting data extraction and processing from ~1 min to ~25s) with data contracts, execution auditing, and asynchronous ingestion via Celery/Redis. Deployed across 5 Docker containers with GitHub Actions CI (pytest).",
          gustome:
            "Multi-tenant SaaS digital menu platform with subscription tiers (Free, Basic, and Pro): allergen and dietary filters for diners, real-time order synchronization between table and kitchen (Firestore onSnapshot), and paper menu digitalization via OpenAI OCR normalized against a master ingredient catalog. Role-based Firestore Security Rules and GitHub Actions CI/CD.",
          mormas:
            "Java/Spring Boot web application for mountain race management built on a 14-table PostgreSQL relational schema: registrations, role-based access control across 3 roles (promoter, athlete, and volunteer), logical soft delete to preserve competition history, email confirmations, and PDF receipts. Validated through user testing with an 87.5/100 SUS usability score.",
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
            "Single-handedly designed and built a cybersecurity BI platform cross-referencing Cortex XDR, Proofpoint, and Endpoint Central to detect unmanaged devices (Shadow IT) and score endpoint risk. Built and optimized the Python ETL pipeline cutting data extraction and processing from ~1 min to ~25s, the Django dashboards following Clean Architecture (documented in ADRs), and the 5-container Docker deployment with GitHub Actions CI (pytest).",
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
