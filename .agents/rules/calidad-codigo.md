---
trigger: model_decision
description: Esta regla se aplica siempre que se va a crear/modificar o borrar código, siguiéndola de forma rigurosa para el correcto desarrollo del código del proyecto.
---

# Calidad de Código (React/JS)

Referencia de reglas para mantener un código limpio, legible y eficiente en el portfolio. El objetivo es que el código sea tan profesional como la interfaz.

---

## Helpers y Utilidades

### Mantener si:
- Se reutilizan en múltiples componentes (ej. formateadores de fechas, hooks de scroll).
- Encapsulan lógica de negocio o de transformación de datos compleja.
- Reducen la repetición de lógica propensa a errores.
- Mejoran la legibilidad del componente (ej. extraer lógica de filtrado fuera del render).

### Evitar si:
- Solo encapsulan una operación estándar de JavaScript (ej. `const trim = (s) => s.trim()`).
- Son funciones con nombres vagos o excesivamente genéricos (`procesar`, `cambiar`).
- Obligan a navegar por múltiples archivos para entender una lógica que cabe en una línea.
- Son funciones "passthrough" que solo delegan sin añadir semántica ni control.

---

## Ingeniería Defensiva y Claridad

- Evitar comprobaciones defensivas sobre escenarios imposibles o ya controlados (ej. no validar si un array existe si el componente padre solo lo renderiza si tiene contenido).
- No re-validar contratos ya garantizados por capas anteriores de la aplicación.
- Priorizar la visibilidad del flujo principal: `Cargar Datos → Transformar → Renderizar`.

---

## Señales de Alerta (Code Smells)

- Validación de estructuras construidas por la misma función o componente.
- Helpers de una sola línea sin semántica real.
- Wrappers que solo llaman a otra función sin añadir lógica.
- Abstracciones con nombres genéricos que ocultan la intención del código.
- Componentes que superan las 250 líneas (señal de que deben dividirse).

---

## Estilo de Código

- **Componentes**: Pequeños, modulares y con una única responsabilidad.
- **Nombres**: Descriptivos y en español para comentarios/documentación. CamelCase para componentes y camelCase para funciones/variables.
- **Moduclaridad**: Preferir la exportación por defecto para componentes y la exportación nombrada para utilidades/hooks.
- **Limpieza**: Eliminar logs de consola de desarrollo antes de finalizar una tarea.

---

## Formato de Documentación (JSDoc)

Usar JSDoc para documentar funciones y componentes complejos. Los comentarios deben estar en **español**.

### Ejemplo de Función

```javascript
/**
 * Formatea una fecha según el idioma y opciones del sistema.
 * 
 * @param {Date|string} fecha - La fecha a formatear.
 * @param {Object} [opciones] - Opciones adicionales de Intl.DateTimeFormat.
 * @returns {string} La fecha formateada para mostrar al usuario.
 */
export const formatearFecha = (fecha, opciones = {}) => {
  return new Intl.DateTimeFormat('es-ES', opciones).format(new Date(fecha));
};
```

### Ejemplo de Componente

```javascript
/**
 * Renderiza una tarjeta de proyecto con efectos hover.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.titulo - Título del proyecto.
 * @param {string} props.techStack - Lista de tecnologías separadas por coma.
 * @returns {JSX.Element} Componente visual de la tarjeta.
 */
function ProjectCard({ titulo, techStack }) {
  // ...
}
```