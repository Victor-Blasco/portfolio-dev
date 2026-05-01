---
name: git-workflow
description: >
  Convenciones críticas de Git del proyecto. Prioridad: (1) nombres y creación de ramas,
  (2) formato y tipos de commits, (3) flujo de pull requests. Usar al crear ramas,
  hacer commits, revisar historial de Git o determinar el tipo de cambio antes de modificar código.
context: >
  Este skill se aplica a cualquier interacción con Git relacionada con desarrollo de código en el proyecto.
  Las reglas de ramas y commits son obligatorias y siempre deben aplicarse en cada desarrollo de código.
  Las reglas de PRs son obligatorias al abrir una pull request y durante su revisión, gestión de feedback y merge.
  El objetivo es mantener un historial de Git claro, coherente y fácil de revisar.
---
# Git Workflow

Convenciones de ramas y commits del proyecto. Este skill está organizado en tres secciones priorizadas:
1. **Ramas**: nombres y prefijos (obligatorio)
2. **Commits**: tipos, formato y reglas (obligatorio)
3. **Pull Requests**: estructura y gestión (obligatorio en contexto de PR)

Consulta la sección específica según tu tarea actual.

## Quick Reference

| Categoría | Regla Clave | Ejemplo |
|-----------|------------|---------|
| **Rama** | `<tipo>/<descripcion>` en kebab-case | `feature/agregar-filtros` |
| **Commit tipo** | `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `perf` | `fix: corregir validación` |
| **Commit título** | Máx. 72 caracteres, específico, minúsculas | ❌ "fix: bug" → ✅ "fix: corregir email duplicado" |
| **Commit body** | 2-4 bullets, solo cambios de código | `- cambio 1`<br/>`- cambio 2` |
| **PR título** | Coherente con commit principal | `feat: agregar dashboard` |
| **PR body** | Secciones: Resumen, Cambios, Alcance técnico | Ver ejemplos abajo |

---

## Ramas

Antes de modificar código, crear siempre una rama nueva:

```bash
git switch -c <tipo>/<descripcion>
```

### Reglas de nombres

- Solo minúsculas, kebab-case, sin caracteres especiales

### Prefijos

- `feature/<descripcion>` → nuevas funcionalidades
- `bugfix/<descripcion>` → corrección de errores
- `hotfix/<descripcion>` → errores críticos
- `experiment/<descripcion>` → pruebas o experimentos
- `chore/<descripcion>` → mantenimiento

---

## Commits

### Formato

```
<tipo>: <descripcion breve>

- <resumen breve del cambio 1>
- <resumen breve del cambio 2>
```

### Tipos

- `feat` → nueva funcionalidad
- `fix` → corrección de error
- `refactor` → cambio interno sin modificar comportamiento
- `test` → añadido o modificación de tests
- `docs` → cambios en documentación
- `chore` → tareas de mantenimiento
- `perf` → mejoras de rendimiento

### Reglas

**Title Rules:**
- Español, minúsculas, sin punto final
- Descripción específica y concreta: evitar descripciones generales como "actualizado", "arreglado" o "mejorado". Ej: ❌ "fix: actualizado validador" → ✅ "fix: corregir validación de emails duplicados"
- Máximo ~72 caracteres en la primera línea

**Body Rules:**
- Formato: unordered list (bullets)
- Contenido: exactamente 2 a 4 bullets con resumen de cambios clave
- Solo información directamente relacionada con los cambios de código (no agregar contexto irrelevante, motivación o metadata)
- Markdown para facilitar lectura en GitHub

### Breaking changes

- No usar sintaxis especial en el titulo (`feat!` o footer `BREAKING CHANGE`)
- Si aplica, informar el impacto en un bullet del body de forma breve

### Plantilla

```text
<tipo>: <descripcion breve>

- <cambio clave 1>
- <cambio clave 2>
```

### Ejemplos

```text
feat: agregar filtros por severidad en dashboard

- agregar filtro por severidad en vista de alertas
- ajustar consulta para combinar severidad y rango de fechas
- actualizar test de filtros del dashboard
```

```text
fix: corregir carga duplicada de correos

- normalizar message_id antes de insertar
- evitar insercion cuando ya existe correo_usuario
- actualizar test de deduplicacion en load de proofpoint
```

### Coherencia rama ↔ commit

| Rama | Commits esperados |
|------|-------------------|
| `feature/...` | `feat`, `test`, `docs` |
| `bugfix/...` | `fix`, `test` |
| `hotfix/...` | `fix`, `test` |
| `chore/...` | `chore`, `docs` |
| `experiment/...` | `feat`, `refactor`, `test` |

---

## Pull Requests (PR)

### Cuando abrir PR

- Abrir PR cuando la rama tenga un slice funcional y testeado
- Usar Draft PR si aun faltan tareas relevantes o validaciones
- Cambiar a Ready for review solo cuando cumpla el checklist de calidad

### Titulo y descripcion

### Formato de titulo

```text
<tipo>: <descripcion breve>
```

- Mantener coherencia con el commit principal de la rama
- Español, minusculas, sin punto final

### Cuerpo obligatorio (estructura)

```markdown
## Resumen
<resumen breve de la intención y resultado del cambio>

## Cambios

- <cambio realizado 1>
- <cambio realizado 2>
- <cambio realizado 3>

## Alcance técnico

- <detalle técnico 1: archivos/módulos afectados>
- <detalle técnico 2: volumen de cambios si aplica>
- <detalle técnico 3: impacto funcional/no funcional>
- <detalle técnico 4: riesgos, compatibilidad o migraciones>
```

- Mantener siempre estas 3 secciones: `Resumen`, `Cambios`, `Alcance técnico`.
- `Cambios` debe ir en bullet points.
- `Alcance técnico` debe ir en bullet points con detalle técnico concreto.

### Formato de salida obligatorio

- La respuesta final debe entregarse siempre dentro de un bloque de código de tipo txt.
- No incluir texto fuera del bloque.
- Si el usuario pide markdown, entregarlo como texto literal dentro de ese bloque txt.

### Ejemplos de cuerpo de PR

```markdown
## Resumen
Esta PR reorganiza la documentación del proyecto y ajusta la estructura de orquestación de agentes para dejar un flujo más claro y mantenible.

## Cambios

- Se movió la documentación principal a la carpeta docs (arquitectura, contribución, modelo de datos, producto, fuentes y reglas de transformación).
- Se movieron también los documentos de fuentes específicas a docs/sources.
- Se añadió la plantilla de ADR en docs/decisions/0000-template.md.
- Se incorporó un agente orquestador y un prompt de intake orientado a planificación.
- Se eliminaron assets previos que quedaron obsoletos (prompt y skill anteriores).

## Alcance técnico

- 22 archivos modificados.
- 391 inserciones y 210 eliminaciones.
- Cambios centrados en documentación, estructura y gobierno de trabajo con agentes.
- Sin cambios funcionales directos en lógica de negocio ETL/backend/dashboard.
```


### Checklist antes de pedir review

- [ ] rama al dia con `main`
- [ ] tests relevantes en verde
- [ ] sin cambios fuera de alcance
- [ ] docs actualizadas si aplica
- [ ] ADR creada y registrada si aplica (`docs/decisions/` y `/memories/repo/decisions.md`)

### Tamaño y enfoque de PR

- Una intencion tecnica por PR
- Evitar PRs gigantes que mezclen refactor, feature y fixing sin separacion
- Si el cambio crece, dividir en PRs secuenciales

### Gestion de feedback

- Aplicar cambios en nuevos commits (evitar reescrituras innecesarias)
- Responder cada comentario con resolucion concreta
- Volver a solicitar review cuando los bloqueos queden cerrados

### Merge y cierre

- Usar el metodo de merge definido por el repositorio
- Eliminar rama remota tras merge
- Verificar que no queden tareas abiertas del alcance de la PR
