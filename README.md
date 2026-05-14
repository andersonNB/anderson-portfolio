# Anderson Portfolio

Portfolio personal de Anderson Navarro construido con Next.js, React, TypeScript y Tailwind CSS v4.

La primera version ya incluye:

- direccion visual retro equilibrada con una estructura moderna
- narrativa profesional enfocada en React / Next.js
- secciones base para experiencia, stack y propuesta de valor

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4

## Development Notes

- Este proyecto usa App Router en `src/app`.
- Antes de cambiar comportamiento propio de Next.js, revisa la documentacion local en
  `node_modules/next/dist/docs/`.
- El contenido visible del portfolio debe mantenerse consistente entre
  `src/messages/es.json` y `src/messages/en.json` cuando aplique.
- Antes de cerrar cambios de UI, valida `npm run lint`, `npm run build` y una revision
  manual del flujo afectado en desktop y mobile.

## Next steps

- agregar proyectos reales con screenshots y links
- incluir LinkedIn y CV final
- preparar despliegue en Vercel

## Deploy

Se recomienda desplegar en Vercel por integracion directa con Next.js.
