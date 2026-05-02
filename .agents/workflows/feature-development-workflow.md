---
description: Este workflow se aplica siempre que el usuario solicita crear una nueva funcionalidad para la aplicación.
---

# Flujo de Desarrollo y Refactorización

Cuando se le pide a un agente implementar una funcionalidad, arreglar un bug o refactorizar el portfolio, DEBE seguir este flujo para asegurar calidad y consistencia.

## Paso 1: Contexto y Análisis
1. Leer el prompt del usuario cuidadosamente para identificar el objetivo principal.
2. Usar `list_dir` y `view_file` para analizar los componentes existentes relevantes para la tarea.
3. Revisar `.agents/rules/project-guidelines.md` para asegurar que los cambios planeados se alinean con los estándares del proyecto.
4. Si se modifica la UI, revisar el CSS actual para entender las variables de tema y la estructura del layout.

## Paso 2: Propuesta de Diseño (Si aplica)
1. Si la tarea implica cambios en la UI, describir brevemente el enfoque visual "Premium" (colores, tipografía, espaciado, glassmorphism) al usuario antes de realizar cambios masivos en el código.
2. Confirmar si el usuario quiere elementos interactivos específicos (ej. efectos hover, animaciones de scroll).

## Paso 3: Implementación
1. **Refactorización Primero**: Si se corrigen bugs existentes (ej. importaciones sensibles a mayúsculas o rutas de assets), arreglarlos limpiamente usando herramientas de edición de archivos.
2. **Creación de Componentes**: Al crear nuevos archivos, asegurar que se colocan en `src/components/NombreComponente/`. Crear tanto el `.jsx` como el `.css`.
3. **Estilos**: Añadir cualquier color de tema nuevo a `src/App.css` (o `index.css`) como variables. Usar esas variables en el CSS del componente.
4. **Rendimiento**: Asegurar que no se crean nuevas "Cascadas" (waterfalls) y que los componentes están optimizados según las mejores prácticas de React.

## Paso 4: Verificación
1. Revisar los diffs de los cambios.
2. Asegurar que no se han escapado colores fijos sin usar variables CSS.
3. Comprobar que la aplicación responde correctamente al cambio de modo oscuro.
4. Si el servidor de desarrollo está activo, usar el sub-agente de navegador para verificar visualmente que los cambios se renderizan sin errores.

## Paso 5: Resumen y Entrega
1. Proporcionar un resumen conciso de los cambios realizados, explicando el *porqué* de las decisiones de diseño o arquitectura.
2. Dejar instrucciones claras para el usuario si se requiere algún paso manual o instalación de paquetes.