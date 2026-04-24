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

## Regla de trabajo para Codex

- Asumir estas reglas como el flujo por defecto para este repositorio.
- Si una tarea requiere romper alguna regla, explicarlo antes de hacerlo.
