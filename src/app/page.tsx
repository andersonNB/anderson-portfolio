const experience = [
  {
    period: "2024 - Actualidad",
    company: "Nelumbo consultores",
    role: "Frontend Developer / Next.js",
    summary:
      "Desarrollo aplicaciones web con Next.js y React, formularios complejos, flujos autenticados y UI enfocada en rendimiento.",
  },
  {
    period: "2022 - 2024",
    company: "Avanzo",
    role: "Frontend Developer / React",
    summary:
      "Participe en migracion hacia una libreria reusable de UI, desacople manejo de estado del render y ayude a optimizar carga y metricas.",
  },
  {
    period: "2022",
    company: "Comfaoriente SAS",
    role: "Frontend Developer / React",
    summary:
      "Apoye la migracion de una aplicacion desde Django hacia React con una arquitectura mas clara para flujos clinicos.",
  },
];

const highlights = [
  "React y Next.js para producto real",
  "Componentizacion y UI reusable",
  "Formularios con React Hook Form + Yup",
  "Data fetching con React Query",
  "Integraciones y autenticacion",
  "Performance, mantenimiento y UX",
];

const projects = [
  {
    title: "UI Kit y arquitectura reusable",
    description:
      "Lleve componentes repetidos a una capa reusable para acelerar entregas y reducir inconsistencias entre modulos.",
    impact: "Menos duplicacion y una base visual mas estable para el equipo.",
  },
  {
    title: "Aplicaciones con Next.js para negocio",
    description:
      "Trabaje en interfaces conectadas a autenticacion, validaciones, estados async y flujos de usuario con foco en claridad y velocidad.",
    impact: "Experiencia mas solida para usuario final y una base mejor preparada para crecer.",
  },
  {
    title: "Migraciones frontend",
    description:
      "He participado en modernizaciones de apps heredadas hacia React, reorganizando la interfaz y los flujos para una arquitectura mas mantenible.",
    impact: "Menor friccion para evolucionar producto y agregar nuevas pantallas.",
  },
];

const stackGroups = [
  {
    label: "Core",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "UI",
    items: ["Sass", "Ant Design", "Material UI", "Styled Components", "Responsive UI"],
  },
  {
    label: "Data / Forms",
    items: ["React Query", "React Hook Form", "Yup", "Redux", "Context patterns"],
  },
  {
    label: "Productividad",
    items: ["Git", "GitHub", "AWS Cognito", "Arquitectura frontend", "Performance"],
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-5 py-6 md:px-8 md:py-8">
      <section className="section-card grain overflow-hidden rounded-[2rem]">
        <div className="grid gap-8 border-b soft-divider px-6 py-6 md:grid-cols-[1.25fr_0.75fr] md:px-10 md:py-8">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
              <span className="accent-dot" />
              <span className="eyebrow">Frontend Portfolio</span>
              <span className="retro-label rounded-full px-3 py-1">
                React / Next.js
              </span>
            </div>

            <div className="space-y-4">
              <p className="eyebrow text-sm text-[var(--muted)]">Anderson Navarro</p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
                Frontend developer con foco en interfaces claras, rapidas y listas
                para producto.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
                Tengo cerca de 3 anos de experiencia construyendo aplicaciones web
                con React y Next.js. Me interesa la calidad del frontend, la
                mantenibilidad del codigo y la experiencia real del usuario.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5"
                href="#proyectos"
              >
                Ver enfoque
              </a>
              <a
                className="rounded-full border border-[var(--line)] bg-white/50 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/80"
                href="https://github.com/andersonNB"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="rounded-full border border-[var(--line)] bg-white/50 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/80"
                href="mailto:navarroanderson07@gmail.com"
              >
                Contacto
              </a>
            </div>
          </div>

          <div className="section-card rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5">
            <div className="mb-5 flex items-center justify-between border-b pb-4 soft-divider">
              <span className="eyebrow text-xs text-[var(--muted)]">Snapshot</span>
              <span className="retro-label rounded-full px-3 py-1 text-xs">
                Disponible para nuevas oportunidades
              </span>
            </div>

            <div className="space-y-4 text-sm text-[var(--muted)]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em]">
                  Ubicacion
                </p>
                <p className="mt-1 text-base text-[var(--foreground)]">
                  Los Patios, Norte de Santander, Colombia
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em]">
                  Experiencia
                </p>
                <p className="mt-1 text-base text-[var(--foreground)]">
                  3 anos aprox. en frontend profesional
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em]">
                  Stack actual
                </p>
                <p className="mt-1 text-base text-[var(--foreground)]">
                  Next.js, React Query, React Hook Form, Yup, Ant Design
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em]">
                  Enfoque
                </p>
                <p className="mt-1 text-base text-[var(--foreground)]">
                  UI reusable, performance, formularios y producto
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 px-6 py-6 md:grid-cols-3 md:px-10">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-[1.25rem] border border-[var(--line)] bg-white/45 px-4 py-4 text-sm font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="section-card rounded-[2rem] p-6 md:p-8">
          <p className="eyebrow text-sm text-[var(--muted)]">Sobre mi</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
            No vendo solo visuales. Construyo frontend util.
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            Me gusta trabajar interfaces que se sientan claras por fuera y bien
            pensadas por dentro. He participado en migraciones, componentes
            reusables, integraciones y flujos de negocio donde el frontend no es
            solo presentacion, sino parte importante del producto.
          </p>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            Busco que este portfolio muestre ese equilibrio: una identidad visual
            con algo retro, pero con estructura, criterio y un enfoque moderno de
            construccion.
          </p>
        </div>

        <div className="section-card rounded-[2rem] p-6 md:p-8" id="proyectos">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="eyebrow text-sm text-[var(--muted)]">Propuesta</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                Lo que quiero que se note al entrar
              </h2>
            </div>
            <span className="retro-label rounded-full px-3 py-1 text-xs">
              Retro x moderno
            </span>
          </div>

          <div className="mt-6 space-y-4">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[1.5rem] border border-[var(--line)] bg-white/45 p-5"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 leading-7 text-[var(--muted)]">
                  {project.description}
                </p>
                <p className="mt-3 font-mono text-sm text-[var(--foreground)]">
                  {project.impact}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card rounded-[2rem] p-6 md:p-8">
        <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow text-sm text-[var(--muted)]">Experiencia</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              Trayectoria reciente
            </h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">
              La siguiente version puede volverse mas precisa con logros medibles,
              proyectos concretos y una seleccion final de casos reales.
            </p>
          </div>

          <div className="space-y-4">
            {experience.map((job) => (
              <article
                key={`${job.company}-${job.period}`}
                className="rounded-[1.5rem] border border-[var(--line)] bg-white/45 p-5"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{job.company}</h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
                      {job.role}
                    </p>
                  </div>
                  <span className="retro-label w-fit rounded-full px-3 py-1 text-xs">
                    {job.period}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-[var(--muted)]">{job.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
        <div className="section-card rounded-[2rem] p-6 md:p-8">
          <p className="eyebrow text-sm text-[var(--muted)]">Stack</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
            Tecnologias que ya forman parte de mi trabajo
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {stackGroups.map((group) => (
              <div
                key={group.label}
                className="rounded-[1.5rem] border border-[var(--line)] bg-white/45 p-5"
              >
                <h3 className="text-lg font-semibold">{group.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2 text-sm text-[var(--muted)]">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="retro-label rounded-full px-3 py-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="section-card rounded-[2rem] p-6 md:p-8">
          <p className="eyebrow text-sm text-[var(--muted)]">Siguiente paso</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
            Lo que todavia conviene agregar
          </h2>

          <div className="mt-6 space-y-4 text-[var(--muted)]">
            <div className="rounded-[1.25rem] border border-[var(--line)] bg-white/45 p-4">
              Casos reales con capturas y contexto de negocio.
            </div>
            <div className="rounded-[1.25rem] border border-[var(--line)] bg-white/45 p-4">
              Metricas o impacto donde puedas cuantificar mejoras.
            </div>
            <div className="rounded-[1.25rem] border border-[var(--line)] bg-white/45 p-4">
              Enlace a LinkedIn y una version final actualizada del CV.
            </div>
            <div className="rounded-[1.25rem] border border-[var(--line)] bg-white/45 p-4">
              Uno o dos proyectos publicos que reflejen mejor tu nivel actual.
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-[var(--line)] bg-[var(--foreground)] p-5 text-[var(--background)]">
            <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-70">
              Contacto
            </p>
            <p className="mt-3 text-xl font-semibold">navarroanderson07@gmail.com</p>
            <p className="mt-2 text-sm opacity-80">
              Si quieres, el siguiente paso es convertir esta base en una version
              con proyectos reales, screenshots y links finales.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
