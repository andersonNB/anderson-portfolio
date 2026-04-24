const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Trabajo", href: "#trabajo" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Stack", href: "#stack" },
  { label: "Contacto", href: "#contacto" },
];

const headlineStats = [
  { value: "3+", label: "anos en frontend profesional" },
  { value: "React", label: "stack base para producto" },
  { value: "UI", label: "componentes y sistemas reutilizables" },
];

const strengths = [
  {
    title: "Componentes que escalan",
    description:
      "Me interesa que una UI no solo se vea bien hoy, sino que se pueda extender sin romper el proyecto ni duplicar logica.",
  },
  {
    title: "Frontend conectado a negocio",
    description:
      "Trabajo comodo con formularios, validaciones, estados async, autenticacion y pantallas con reglas reales de producto.",
  },
  {
    title: "Migracion y orden",
    description:
      "He participado en pasos de apps heredadas hacia React y en la consolidacion de piezas reutilizables para acelerar entregas.",
  },
  {
    title: "Criterio visual sin ruido",
    description:
      "Me importa la jerarquia, el responsive y la claridad. El estilo tiene que sumar, no competir con el contenido.",
  },
];

const professionalWork = [
  {
    title: "Nelumbo consultores",
    label: "Actualidad",
    summary:
      "Frontend con Next.js y React para aplicaciones de negocio, autenticacion, formularios complejos y experiencias orientadas a rendimiento.",
    bullets: [
      "Formularios con React Hook Form y Yup",
      "Manejo de data async con React Query",
      "Interfaces con Ant Design y Sass",
    ],
  },
  {
    title: "Avanzo",
    label: "2022 - 2024",
    summary:
      "Trabajo en React sobre una base mas madura, con foco en libreria de componentes reusable, estado desacoplado y optimizacion.",
    bullets: [
      "Migracion a una UI reusable",
      "HOCs y patrones para flujos compartidos",
      "Integracion de metricas y mejoras de carga",
    ],
  },
  {
    title: "Comfaoriente SAS",
    label: "2022",
    summary:
      "Apoyo a migracion desde Django hacia React, modernizando flujos y organizando una interfaz mas mantenible para historia clinica.",
    bullets: [
      "Refactor de pantallas clave",
      "Mejor claridad en arquitectura frontend",
      "Base moderna para evolucionar el producto",
    ],
  },
];

const publicProjects = [
  {
    title: "Blizzard Page",
    year: "2022",
    href: "https://github.com/andersonNB/Blizzard-Page",
    description:
      "Recreacion frontend con React y Bootstrap. Sirve como muestra de maquetacion, estructura de pagina y trabajo visual.",
    tags: ["React", "Bootstrap", "Landing UI"],
  },
  {
    title: "UIKIT Nelumbo",
    year: "2024",
    href: "https://github.com/andersonNB/UIKITNelumbo",
    description:
      "Base en Next.js enfocada en componentes reutilizables, formularios y patrones cercanos a un entorno real de producto.",
    tags: ["Next.js", "React Query", "React Hook Form"],
  },
  {
    title: "Nelumbo Front NextJS",
    year: "2024",
    href: "https://github.com/andersonNB/NelumboFrontNexJS",
    description:
      "Sandbox tecnico para trabajar una estructura con Next.js, Ant Design y styled-components sobre flujos de aplicacion.",
    tags: ["Next.js", "Ant Design", "Styled Components"],
  },
];

const timeline = [
  {
    period: "2024 - Actualidad",
    role: "Frontend Developer",
    company: "Nelumbo consultores",
    detail:
      "Construccion de aplicaciones en Next.js con foco en formularios, autenticacion, UX y mantenimiento.",
  },
  {
    period: "2022 - 2024",
    role: "Frontend Developer",
    company: "Avanzo",
    detail:
      "Trabajo sobre React en una app con piezas reutilizables, patrones compartidos y mejoras progresivas de rendimiento.",
  },
  {
    period: "2022",
    role: "Frontend Developer",
    company: "Comfaoriente SAS",
    detail:
      "Migracion de una solucion existente a React para ordenar la interfaz y mejorar los flujos clinicos.",
  },
  {
    period: "Antes",
    role: "Base tecnica",
    company: "Formacion en sistemas",
    detail:
      "Tecnico en analisis y diseno de sistemas y proceso de grado en Ingenieria de Sistemas.",
  },
];

const stackGroups = [
  {
    title: "Core frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Data y formularios",
    items: ["React Query", "React Hook Form", "Yup", "Redux", "Context"],
  },
  {
    title: "UI y estilos",
    items: ["Ant Design", "Material UI", "Sass", "Styled Components", "Responsive UI"],
  },
  {
    title: "Trabajo en producto",
    items: ["Git", "GitHub", "AWS Cognito", "Arquitectura frontend", "Performance"],
  },
];

const goals = [
  "Agregar capturas reales de proyectos donde el contexto lo permita",
  "Conectar LinkedIn y CV actualizado",
  "Convertir dos proyectos en estudios de caso mas profundos",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow text-sm text-[var(--muted)]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[var(--muted)]">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-4 py-4 md:px-8 md:py-8">
      <header className="section-card sticky top-4 z-20 rounded-[1.6rem] px-4 py-3 backdrop-blur md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="accent-dot" />
            <div>
              <p className="eyebrow text-xs text-[var(--muted)]">Anderson Navarro</p>
              <p className="text-sm font-medium">Frontend Developer</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-2 text-sm text-[var(--muted)]">
            {navigation.map((item) => (
              <a
                key={item.label}
                className="retro-link rounded-full px-3 py-2 transition-colors"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        className="section-card grain overflow-hidden rounded-[2.2rem] px-5 py-6 md:px-8 md:py-8"
        id="inicio"
      >
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[var(--line)] bg-white/55 px-4 py-2 text-sm text-[var(--muted)]">
              <span className="accent-dot" />
              <span className="eyebrow text-xs">Disponible para frontend product teams</span>
            </div>

            <div className="space-y-4">
              <p className="eyebrow text-sm text-[var(--muted)]">Portfolio 2026</p>
              <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.07em] md:text-7xl xl:text-[5.5rem]">
                React, Next.js y criterio para construir interfaces que se sientan
                claras por fuera y ordenadas por dentro.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
                Soy Anderson Navarro, frontend developer con experiencia en producto
                real. Trabajo con formularios, data fetching, sistemas de UI y
                pantallas que necesitan mas que una buena capa visual.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a className="cta-primary" href="#trabajo">
                Ver trabajo seleccionado
              </a>
              <a
                className="cta-secondary"
                href="https://github.com/andersonNB"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a className="cta-secondary" href="mailto:navarroanderson07@gmail.com">
                navarroanderson07@gmail.com
              </a>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {headlineStats.map((stat) => (
                <div
                  key={stat.label}
                  className="lift-card rounded-[1.5rem] border border-[var(--line)] bg-white/50 p-4"
                >
                  <p className="retro-number text-3xl">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="terminal-card rounded-[1.8rem] p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <span className="terminal-dot bg-[#ff7a59]" />
                  <span className="terminal-dot bg-[#ffca3a]" />
                  <span className="terminal-dot bg-[#8ac926]" />
                </div>
                <span className="eyebrow text-xs text-white/60">frontend-status.txt</span>
              </div>

              <div className="mt-5 space-y-4 text-sm leading-7 text-white/78">
                <p>
                  <span className="text-white">focus = </span>
                  UI reusable + formularios + producto
                </p>
                <p>
                  <span className="text-white">current_stack = </span>
                  Next.js / React Query / React Hook Form / Ant Design
                </p>
                <p>
                  <span className="text-white">location = </span>
                  Los Patios, Norte de Santander, Colombia
                </p>
                <p>
                  <span className="text-white">mindset = </span>
                  claridad, mantenimiento y performance
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {strengths.slice(0, 2).map((item) => (
                <article
                  key={item.title}
                  className="lift-card rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5"
                >
                  <p className="eyebrow text-xs text-[var(--muted)]">Fortaleza</p>
                  <h2 className="mt-3 text-xl font-semibold">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 xl:grid-cols-[0.78fr_1.22fr]" id="trabajo">
        <div className="section-card rounded-[2rem] p-6 md:p-8">
          <SectionHeading
            eyebrow="Enfoque"
            title="No apunto a una landing bonita. Apunto a frontend que soporte producto."
            description="Lo que quiero que se note en este portfolio es capacidad real para trabajar sobre una app viva: reglas, formularios, estados, decisiones de UI y estructura reutilizable."
          />

          <div className="mt-8 space-y-4">
            {strengths.map((item) => (
              <article
                key={item.title}
                className="lift-card rounded-[1.35rem] border border-[var(--line)] bg-white/50 p-5"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="section-card rounded-[2rem] p-6 md:p-8">
          <SectionHeading
            eyebrow="Trabajo profesional"
            title="Contextos donde ya he aportado"
            description="Aunque una parte importante del trabajo profesional no es publica, si se puede contar el tipo de problemas en los que ya he trabajado."
          />

          <div className="mt-8 grid gap-4">
            {professionalWork.map((item) => (
              <article
                key={item.title}
                className="lift-card rounded-[1.5rem] border border-[var(--line)] bg-white/48 p-5"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                      {item.summary}
                    </p>
                  </div>
                  <span className="retro-label w-fit rounded-full px-3 py-1 text-xs">
                    {item.label}
                  </span>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="retro-label rounded-full px-3 py-1 text-xs">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card rounded-[2rem] p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Repos publicos"
            title="Muestras que ya puedes revisar"
            description="Todavia hay espacio para sumar mejores casos, pero ya hay repos y experimentos que ayudan a ver el tipo de frontend que me interesa construir."
          />
          <a
            className="cta-secondary w-fit"
            href="https://github.com/andersonNB?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Ver todos los repos
          </a>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {publicProjects.map((project) => (
            <a
              key={project.title}
              className="lift-card block rounded-[1.6rem] border border-[var(--line)] bg-white/50 p-5 transition-transform duration-200 hover:-translate-y-1"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow text-xs text-[var(--muted)]">{project.year}</p>
                <span className="text-sm text-[var(--muted)]">GitHub</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="retro-label rounded-full px-3 py-1 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]" id="experiencia">
        <div className="section-card rounded-[2rem] p-6 md:p-8">
          <SectionHeading
            eyebrow="Trayectoria"
            title="Una linea de tiempo breve, enfocada en el tipo de problemas"
            description="No es una lista de logos. La idea es dejar claro que ya has pasado por migraciones, componentes reutilizables y trabajo real con producto."
          />

          <div className="mt-8 space-y-4">
            {timeline.map((item) => (
              <article
                key={`${item.company}-${item.period}`}
                className="timeline-card rounded-[1.5rem] border border-[var(--line)] bg-white/48 p-5"
              >
                <p className="eyebrow text-xs text-[var(--muted)]">{item.period}</p>
                <h3 className="mt-3 text-xl font-semibold">{item.company}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
                  {item.role}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="section-card rounded-[2rem] p-6 md:p-8" id="stack">
          <SectionHeading
            eyebrow="Stack"
            title="Tecnologias con las que ya puedo trabajar con soltura"
            description="Prefiero mostrar capacidades agrupadas por contexto de trabajo y no como una nube eterna de logos."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {stackGroups.map((group) => (
              <article
                key={group.title}
                className="lift-card rounded-[1.5rem] border border-[var(--line)] bg-white/50 p-5"
              >
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="retro-label rounded-full px-3 py-1 text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[1.6rem] border border-[var(--line)] bg-[var(--foreground)] p-5 text-[var(--background)]">
            <p className="eyebrow text-xs text-white/60">Ahora mismo conviene sumar</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-white/78">
              {goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="section-card relative overflow-hidden rounded-[2.2rem] px-6 py-8 md:px-8 md:py-10"
        id="contacto"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--accent),var(--accent-soft),var(--foreground))]" />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow text-sm text-[var(--muted)]">Contacto</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Si te interesa alguien para construir frontend de producto en React,
              aqui ya hay una base clara para conversar.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
              La siguiente mejora natural es reemplazar varios bloques por casos mas
              concretos, screenshots y links finales. La estructura ya esta lista
              para llevarlo a una version mucho mas contundente.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a className="contact-card" href="mailto:navarroanderson07@gmail.com">
              <span className="eyebrow text-xs text-[var(--muted)]">Email</span>
              <span className="mt-3 text-xl font-semibold">navarroanderson07@gmail.com</span>
            </a>
            <a
              className="contact-card"
              href="https://github.com/andersonNB"
              target="_blank"
              rel="noreferrer"
            >
              <span className="eyebrow text-xs text-[var(--muted)]">GitHub</span>
              <span className="mt-3 text-xl font-semibold">github.com/andersonNB</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
