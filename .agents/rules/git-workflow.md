---
trigger: model_decision
description: Esta regla se aplica siempre que se interactúa con Git en el proyecto: creación y nomenclatura de ramas, formato y tipos de commits (feat, fix, refactor, chore...), y estructura de pull requests.
---

# Git Workflow

Convenciones de ramas, commits y pull requests del proyecto portfolio-web. Esta regla está organizada en tres secciones priorizadas:
1. **Ramas**: nombres y prefijos (obligatorio)
2. **Commits**: tipos, formato y reglas (obligatorio)
3. **Pull Requests**: estructura y gestión (obligatorio en contexto de PR)

Consulta la sección específica según tu tarea actual.

## Quick Reference

| Categoría | Regla Clave | Ejemplo |
|-----------|------------|---------|
| **Rama** | `<tipo>/<descripcion>` en kebab-case | `feature/agregar-filtros` |
| **Commit tipo** | `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `perf` | `fix: corregir alineación de tarjetas` |
| **Commit título** | Máx. 72 caracteres, específico, minúsculas | ❌ "fix: bug" → ✅ "fix: corregir padding en modal" |
| **Commit body** | 2-4 bullets, solo cambios de código | `- cambio 1`<br/>`- cambio 2` |
| **PR título** | Coherente con commit principal | `feat: agregar filtros en proyectos` |
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
- Descripción específica y concreta: evitar descripciones generales como "actualizado", "arreglado" o "mejorado". Ej: ❌ "fix: actualizado validador" → ✅ "fix: corregir validación de formulario de contacto"
- Máximo ~72 caracteres en la primera línea

**Body Rules:**
- Formato: unordered list (bullets)
- Contenido: exactamente 2 a 4 bullets con resumen de cambios clave
- Solo información directamente relacionada con los cambios de código (no agregar contexto irrelevante, motivación o metadata)
- Markdown para facilitar lectura en GitHub

### Breaking changes

- No usar sintaxis especial en el título (`feat!` o footer `BREAKING CHANGE`)
- Si aplica, informar el impacto en un bullet del body de forma breve

### Plantilla

```text
<tipo>: <descripcion breve>

- <cambio clave 1>
- <cambio clave 2>
```

### Ejemplos

```text
feat: agregar filtros por tecnologia en proyectos

- agregar botones de filtro interactivo por categoria técnica
- animar transicion de tarjetas al alternar filtros
- persistir filtro seleccionado durante la navegacion
```

```text
fix: corregir superposicion de menu movil sobre el header

- ajustar z-index del contenedor de navegacion responsive
- prevenir desplazamiento del fondo con scroll bloqueado al abrir menu
- corregir espaciado superior en pantallas menores a 768px
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
- Usar Draft PR si aún faltan tareas relevantes o validaciones
- Cambiar a Ready for review solo cuando cumpla el checklist de calidad

### Titulo y descripcion

### Formato de titulo

```text
<tipo>: <descripcion breve>
```

- Mantener coherencia con el commit principal de la rama
- Español, minúsculas, sin punto final

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

Al redactar o preparar la descripción de una Pull Request para el usuario:
- Entregar el contenido de la PR formateado dentro de un bloque de código (markdown o text) para que pueda ser copiado directamente a GitHub.
- Asegurar que incluye las tres secciones obligatorias: `Resumen`, `Cambios` y `Alcance técnico`.

### Ejemplos de cuerpo de PR

```markdown
## Resumen
Esta PR optimiza la visualización de la galería de proyectos y añade soporte para filtrado interactivo por stack tecnológico.

## Cambios

- Se implementó el componente de filtrado por tags de tecnología en la sección de proyectos.
- Se optimizó la carga de imágenes usando loading="lazy" y dimensiones explícitas.
- Se corrigieron contrastes de color en el modo oscuro para cumplir con accesibilidad.
- Se actualizaron los estilos de las tarjetas para mantener proporciones uniformes.

## Alcance técnico

- 3 componentes modificados y 1 nuevo componente (ProjectFilters).
- Reducción del cambio acumulado de diseño (CLS) al fijar aspect-ratio en imágenes.
- Sin cambios que rompan compatibilidad ni dependencias externas añadidas.
```

### Checklist antes de pedir review

- [ ] rama al día con `main`
- [ ] build y tests en verde (`npm run build` sin errores)
- [ ] sin cambios fuera de alcance
- [ ] documentación o comentarios JSDoc actualizados si aplica
- [ ] comprobada compatibilidad responsive y modo oscuro

### Tamaño y enfoque de PR

- Una intención técnica por PR
- Evitar PRs gigantes que mezclen refactor, feature y fixing sin separación
- Si el cambio crece, dividir en PRs secuenciales

### Gestión de feedback

- Aplicar cambios en nuevos commits (evitar reescrituras innecesarias)
- Responder cada comentario con resolución concreta
- Volver a solicitar review cuando los bloqueos queden cerrados

### Merge y cierre

- Usar el método de merge definido por el repositorio
- Eliminar rama remota tras merge
- Verificar que no queden tareas abiertas del alcance de la PR
