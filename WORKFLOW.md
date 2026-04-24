# Workflow Rules

Estas reglas definen la forma de trabajo para este repositorio.

## Git y ramas

- No trabajar directamente sobre `main` para cambios nuevos.
- Crear ramas por tarea usando alguno de estos prefijos:
  - `feature/...`
  - `fix/...`
  - `chore/...`
- Mantener los nombres de rama cortos y descriptivos.
- Cuando un cambio este listo, abrir PR desde la rama de trabajo hacia `main`.
- No fusionar cambios directamente a `main` sin pasar por PR.

## Commits

- Usar mensajes de commit en ingles.
- Preferir formato Conventional Commits cuando aplique.
- Ejemplos:
  - `feat: add project showcase section`
  - `fix: adjust mobile spacing in hero`
  - `chore: update portfolio content`

## Validacion antes de push

- Ejecutar `lint` antes de subir cambios.
- Ejecutar `build` antes de subir cambios cuando el cambio afecte la app.
- No dejar errores conocidos sin mencionar.
- Antes de cerrar una tarea, dejar la rama lista para PR.

## Edicion de codigo

- No tocar archivos fuera del alcance de la tarea.
- Evitar cambios innecesarios de formato o refactors no pedidos.
- Mantener el estilo visual y estructural coherente con el proyecto existente.

## Seguridad y configuracion

- No subir secretos, tokens, credenciales ni archivos `.env` con datos reales.
- Pedir confirmacion antes de cambios destructivos o sensibles.

## Documentacion

- Si una decision tecnica cambia la forma de trabajar el proyecto, documentarla.
- Usar `README.md` o este archivo para registrar reglas nuevas o ajustes relevantes.

## Arquitectura del proyecto

- Este portfolio debe mantener una arquitectura modular, simple y orientada a secciones.
- La pagina principal no debe concentrar contenido, datos y UI en un solo archivo si el cambio ya amerita separacion.
- La composicion principal debe vivir en `src/app/`.
- Las secciones de la home deben vivir en `src/components/home/`.
- Los componentes reutilizables y genericos deben vivir en `src/components/ui/`.
- El contenido estatico del portfolio debe vivir en `src/lib/content/`.
- Los tipos compartidos deben vivir en `src/types/`.
- Las traducciones del proyecto deben implementarse con `next-intl`.
- Los mensajes de traduccion deben vivir en archivos JSON dedicados y no en objetos inline dentro de componentes.
- Si en el futuro aparecen validaciones o logica compartida mas compleja, deben agruparse en modulos equivalentes dentro de `src/lib/` o carpetas dedicadas.
- Antes de crear carpetas nuevas, validar que realmente aporten claridad y no sobreingenieria.

### Estructura base esperada

- `src/app/`
  Composicion de rutas y entrypoints.
- `src/components/home/`
  Secciones especificas de la home del portfolio.
- `src/components/ui/`
  Piezas reutilizables de interfaz.
- `src/lib/content/`
  Datos estaticos, textos y configuraciones del portfolio.
- `src/types/`
  Tipos TypeScript compartidos.

## Despliegue con Vercel

- El despliegue principal del portfolio debe hacerse en Vercel.
- Antes de desplegar, validar al menos:
  - `npm run lint`
  - `npm run build`
- Para despliegues locales desde CLI, ejecutar el comando `vercel` desde la raiz del proyecto para crear o actualizar un preview deployment.
- Para publicar a produccion desde CLI, usar `vercel --prod` desde la raiz del proyecto.
- Si el proyecto todavia no esta enlazado a Vercel, la primera ejecucion de `vercel` debe vincular el repositorio al proyecto correcto.
- Cuando el repositorio ya este importado en Vercel, preferir que `main` produzca despliegues consistentes y que las ramas generen previews cuando aplique.
- Si el deploy requiere variables de entorno en el futuro, documentarlas antes de publicarlo.

## Pull Requests y releases

- Cada funcionalidad terminada debe terminar en un Pull Request hacia `main`.
- El PR debe representar una unidad clara de cambio.
- Una vez el cambio este validado y probado, completar el merge del PR hacia `main`.
- Despues de dejar lista una nueva funcionalidad, crear un tag de release asociado.
- El tag debe seguir un versionado simple y consistente. Por defecto:
  - `v0.1.0`
  - `v0.2.0`
  - `v0.2.1`
- Usar incremento menor para nuevas funcionalidades e incremento patch para ajustes o fixes pequenos.

## Desarrollo por fases

- Cada cambio debe trabajarse por fases claras.
- Las fases por defecto de trabajo son:
  - planeacion
  - planteamiento de tareas
  - ejecucion
  - optimizacion
  - feedback
- Si una tarea requiere iteracion, se puede volver a una fase anterior antes de cerrar el cambio.

### Planeacion

- Definir el objetivo del cambio antes de editar.
- Confirmar alcance, restricciones y resultado esperado.
- Identificar si el cambio afecta UI, contenido, arquitectura, rendimiento o despliegue.

### Planteamiento de tareas

- Descomponer el trabajo en tareas pequenas y verificables.
- Priorizar primero lo que desbloquea el resto.
- Evitar mezclar cambios no relacionados en una misma fase.

### Ejecucion

- Implementar el cambio siguiendo el alcance definido.
- Mantener coherencia con las reglas del repositorio.
- Validar localmente lo que se vaya completando.

### Optimizacion

- Revisar si el cambio puede quedar mas claro, mas ligero o mas mantenible.
- Mejorar responsive, accesibilidad, consistencia visual o estructura cuando aplique.
- No sobre-optimizar si no aporta valor real a la tarea.

### Feedback

- Revisar el resultado contra el objetivo inicial.
- Identificar ajustes, riesgos o mejoras pendientes antes del PR.
- Si aplica, incorporar feedback antes de fusionar hacia `main`.

## Regla de trabajo para Codex

- Asumir estas reglas como el flujo por defecto para este repositorio.
- Si una tarea requiere romper alguna regla, explicarlo antes de hacerlo.
