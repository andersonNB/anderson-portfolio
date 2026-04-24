import Image from "next/image";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Trabajo", href: "#trabajo" },
  { label: "Stack", href: "#stack" },
  { label: "Contacto", href: "#contacto" },
];

const quickFacts = [
  "3+ anos de experiencia",
  "React / Next.js",
  "Frontend de producto",
];

const selectedWork = [
  {
    title: "UIKIT Nelumbo",
    href: "https://github.com/andersonNB/UIKITNelumbo",
    summary: "Componentes reutilizables y formularios sobre Next.js.",
    meta: "Next.js / React Query / RHF",
  },
  {
    title: "Nelumbo Front NextJS",
    href: "https://github.com/andersonNB/NelumboFrontNexJS",
    summary: "Base de aplicacion con Ant Design y estructura mas cercana a producto.",
    meta: "Next.js / Ant Design",
  },
  {
    title: "Blizzard Page",
    href: "https://github.com/andersonNB/Blizzard-Page",
    summary: "Proyecto visual para composicion, jerarquia y maquetacion.",
    meta: "React / Bootstrap",
  },
];

const caseStudies = [
  {
    label: "01",
    title: "UI reusable",
    body: "Migracion de componentes hacia una base mas consistente y escalable.",
  },
  {
    label: "02",
    title: "Forms y data",
    body: "Trabajo con validaciones, estados async y flujos conectados a negocio.",
  },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "React Query",
  "React Hook Form",
  "Yup",
  "Ant Design",
  "Sass",
  "Styled Components",
  "Git",
  "GitHub",
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-4 md:px-8 md:py-8">
      <header className="section-card sticky top-4 z-20 rounded-[1.75rem] px-5 py-4 backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="accent-dot" />
            <div>
              <p className="eyebrow text-xs text-[var(--muted)]">Anderson Navarro</p>
              <p className="text-sm font-medium">Frontend Developer</p>
            </div>
          </a>

          <nav className="flex flex-wrap gap-2 text-sm text-[var(--muted)]">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="retro-link rounded-full px-3 py-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        className="section-card grain relative overflow-hidden rounded-[2.5rem] px-6 py-8 md:px-10 md:py-10"
        id="inicio"
      >
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,var(--accent-soft),transparent_68%)] opacity-30 blur-3xl" />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow text-sm text-[var(--muted)]">Portfolio 2026</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.08em] md:text-7xl">
              Frontend claro.
              <br />
              React first.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Construyo interfaces con React y Next.js para producto real:
              formularios, data fetching, componentes reutilizables y UX limpia.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {quickFacts.map((item) => (
                <span key={item} className="retro-label rounded-full px-4 py-2 text-sm">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="cta-primary" href="#trabajo">
                Ver trabajo
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
                Email
              </a>
            </div>
          </div>

          <div className="portrait-shell">
            <div className="portrait-frame">
              <Image
                src="/anderson-profile-clean.png"
                alt="Anderson Navarro"
                fill
                priority
                className="object-cover object-[center_17%] scale-[1.24]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="section-card rounded-[2.2rem] px-6 py-8 md:px-10" id="trabajo">
          <p className="eyebrow text-sm text-[var(--muted)]">Sobre mi</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] md:text-5xl">
            Menos discurso.
            <br />
            Mas producto.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
            Me muevo mejor en apps reales que en demos vacias: validaciones,
            procesos, estados, UI reusable y decisiones de frontend que duren.
          </p>

          <div className="mt-8 grid gap-4">
            {caseStudies.map((item) => (
              <article
                key={item.label}
                className="lift-card rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-strong)] px-5 py-5"
              >
                <p className="eyebrow text-xs text-[var(--muted)]">{item.label}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </article>

        <aside className="section-card rounded-[2.2rem] px-6 py-8 md:px-10">
          <p className="eyebrow text-sm text-[var(--muted)]">Experiencia</p>
          <div className="mt-6 space-y-5">
            <article className="timeline-card rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-strong)] px-5 py-5">
              <p className="eyebrow text-xs text-[var(--muted)]">2024 - Actualidad</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                Nelumbo consultores
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Next.js, React Query, formularios y apps de negocio.
              </p>
            </article>

            <article className="timeline-card rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-strong)] px-5 py-5">
              <p className="eyebrow text-xs text-[var(--muted)]">2022 - 2024</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">Avanzo</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                UI reusable, patrones compartidos y optimizacion frontend.
              </p>
            </article>

            <article className="timeline-card rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-strong)] px-5 py-5">
              <p className="eyebrow text-xs text-[var(--muted)]">2022</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                Comfaoriente SAS
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Migracion desde Django hacia React.
              </p>
            </article>
          </div>
        </aside>
      </section>

      <section className="section-card rounded-[2.2rem] px-6 py-8 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-sm text-[var(--muted)]">Repos</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] md:text-5xl">
              Trabajo seleccionado.
            </h2>
          </div>
          <a
            className="cta-secondary w-fit"
            href="https://github.com/andersonNB?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Ver todos
          </a>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {selectedWork.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="project-link block rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-strong)] px-5 py-5"
            >
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
              <p className="mt-4 font-mono text-sm text-[var(--foreground)]">{project.meta}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]" id="stack">
        <article className="section-card rounded-[2.2rem] px-6 py-8 md:px-10">
          <p className="eyebrow text-sm text-[var(--muted)]">Stack</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] md:text-5xl">
            Lo que uso.
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {stack.map((item) => (
              <span key={item} className="retro-label rounded-full px-4 py-2 text-sm">
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="section-card rounded-[2.2rem] px-6 py-8 md:px-10" id="contacto">
          <p className="eyebrow text-sm text-[var(--muted)]">Contacto</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] md:text-5xl">
            Hablemos.
          </h2>
          <p className="mt-5 max-w-md text-base leading-8 text-[var(--muted)]">
            La siguiente fase puede entrar ya con LinkedIn, CV actualizado y casos de
            estudio mas completos.
          </p>

          <div className="mt-8 grid gap-4">
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
        </article>
      </section>
    </main>
  );
}
