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
- Para este proyecto no se requiere una rama `develop` por defecto.
- La regla base es `feature/fix/chore -> PR -> main`.
- Antes de empezar una fase nueva, sincronizar la rama local con el remoto correspondiente.
- Si la fase parte desde `main`, usar `git checkout main` y `git pull --ff-only origin main` antes de crear o reutilizar una rama de trabajo.
- Si la fase continua sobre una rama existente, bajar primero sus cambios remotos antes de editar.

## Commits

- Usar mensajes de commit en ingles.
- Preferir formato Conventional Commits cuando aplique.
- Ejemplos:
  - `feat: add project showcase section`
  - `fix: adjust mobile spacing in hero`
  - `chore: update portfolio content`
- El tipo del commit debe corresponder al cambio real:
  - `feat` para funcionalidad nueva o cambios visibles de producto
  - `fix` para correcciones
  - `docs` para specs, planes, tareas, checklist o documentacion
  - `chore` para mantenimiento o ajustes operativos
  - `refactor` solo si el cambio es realmente una reorganizacion interna sin cambio funcional
- No cerrar una fase con mensajes vagos como `update`, `changes` o `wip`.

## Validacion antes de push

- Ejecutar `lint` antes de subir cambios.
- Ejecutar `build` antes de subir cambios cuando el cambio afecte la app.
- No dejar errores conocidos sin mencionar.
- Antes de cerrar una tarea, dejar la rama lista para PR.
- Antes de hacer `push`, revisar que el commit de la fase use el tipo correcto (`feat`, `fix`, `docs`, `chore`, etc.) segun el alcance real.

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
- Los templates de PR e issues deben vivir en `.github/`.
- Las specs de fases o cambios relevantes deben vivir en `docs/specs/`.

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
- Cada fase terminada debe dejar una rama publicada en remoto antes de pasar a la siguiente.
- Si una fase genera artefactos revisables, el flujo obligatorio es:
  - bajar cambios relevantes primero
  - actualizar archivos de la fase
  - hacer `commit` con nombre en ingles y tipo Conventional Commit correcto
  - hacer `push`
  - abrir o actualizar PR hacia `main`
  - esperar revision manual o merge antes de seguir con la fase siguiente
- Regla obligatoria de cierre de fase:
  - si una fase de `plan`, `tasks`, `implement` o `checklist` ya termino
  - y los entregables de esa fase quedaron actualizados
  - y el checklist aplicable ya fue revisado o completado para ese punto
  entonces se debe bajar cambios si aplica, hacer `commit` con el tipo correcto, hacer `push` y abrir PR para revision manual antes de seguir con la siguiente fase.
- No se debe continuar con una fase posterior si los cambios de la fase actual aun no fueron subidos y convertidos en PR, salvo que se documente explicitamente por que se rompe esa regla.
- Al cerrar una fase, detenerse en el PR y esperar revision manual antes de continuar con la siguiente fase.
- Una vez el cambio este validado y probado, completar el merge del PR hacia `main`.
- Codex puede aprobar y mergear un PR sin pedir confirmacion extra si cumple todos estos minimos:
  - el alcance del PR es claro y acotado
  - `lint` pasa
  - `build` pasa cuando el cambio afecta la app
  - no hay errores conocidos sin declarar
  - no hay dudas funcionales abiertas que cambien el alcance
  - no hay cambios ajenos a la tarea mezclados en el PR
- Si alguno de esos minimos no se cumple, el PR debe quedarse abierto hasta revision manual.
- Despues de dejar lista una nueva funcionalidad, crear un tag de release asociado.
- El tag debe seguir un versionado simple y consistente. Por defecto:
  - `v0.1.0`
  - `v0.2.0`
  - `v0.2.1`
- Usar incremento menor para nuevas funcionalidades e incremento patch para ajustes o fixes pequenos.

## Desarrollo por fases

- Cada cambio debe trabajarse por fases claras.
- Una fase debe intentar vivir en una rama propia o, como minimo, en un PR claramente aislado.
- Las fases por defecto de trabajo son:
  - planeacion
  - planteamiento de tareas
  - ejecucion
  - optimizacion
  - feedback
- Si una tarea requiere iteracion, se puede volver a una fase anterior antes de cerrar el cambio.
- No continuar automaticamente con la siguiente fase despues del PR si el flujo requiere revision manual.
- Si dos fases no comparten archivos ni dependencias directas, se pueden trabajar en paralelo.

### Planeacion

- Definir el objetivo del cambio antes de editar.
- Confirmar alcance, restricciones y resultado esperado.
- Identificar si el cambio afecta UI, contenido, arquitectura, rendimiento o despliegue.
- Si el cambio lo amerita, crear una spec breve en `docs/specs/`.
- Si la fase de planeacion deja artefactos listos para revision, cerrar la fase con `commit`, `push` y PR antes de pasar a tareas o implementacion.
- Para artefactos de planeacion, el commit normalmente debe usar `docs:`.

### Planteamiento de tareas

- Descomponer el trabajo en tareas pequenas y verificables.
- Priorizar primero lo que desbloquea el resto.
- Evitar mezclar cambios no relacionados en una misma fase.
- Si el planteamiento de tareas ya quedo listo y revisable, subir los cambios y abrir PR antes de continuar con ejecucion.
- Para artefactos de tareas, el commit normalmente debe usar `docs:`.

### Ejecucion

- Implementar el cambio siguiendo el alcance definido.
- Mantener coherencia con las reglas del repositorio.
- Validar localmente lo que se vaya completando.
- Si la ejecucion completa una unidad clara y el checklist correspondiente ya fue cubierto, cerrar esa fase con `commit`, `push` y PR antes de continuar con optimizacion o feedback.
- Para cambios de producto o interfaz en ejecucion, el commit normalmente debe usar `feat:` o `fix:` segun corresponda.

### Optimizacion

- Revisar si el cambio puede quedar mas claro, mas ligero o mas mantenible.
- Mejorar responsive, accesibilidad, consistencia visual o estructura cuando aplique.
- No sobre-optimizar si no aporta valor real a la tarea.

### Feedback

- Revisar el resultado contra el objetivo inicial.
- Identificar ajustes, riesgos o mejoras pendientes antes del PR.
- Si aplica, incorporar feedback antes de fusionar hacia `main`.
- Usar el PR como punto de cierre de fase, no como punto de paso invisible.
- El flujo esperado es: sync -> fase terminada -> checklist revisado -> commit con tipo correcto -> push -> PR -> revision manual -> siguiente fase.

## Regla de trabajo para Codex

- Asumir estas reglas como el flujo por defecto para este repositorio.
- Si una tarea requiere romper alguna regla, explicarlo antes de hacerlo.
