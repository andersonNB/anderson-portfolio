const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfil", href: "#perfil" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Trabajo", href: "#trabajo" },
  { label: "Contacto", href: "#contacto" },
];

const highlights = [
  "Frontend para producto real",
  "React y Next.js",
  "Formularios complejos",
  "UI reusable",
  "Data fetching",
  "Performance",
];

const editorialNotes = [
  {
    title: "Interfaces que soportan flujo real",
    body:
      "Me interesa que una pantalla resuelva procesos, no solo que se vea bien en una captura. Por eso trabajo comodo con validaciones, estados async, permisos y reglas de negocio.",
  },
  {
    title: "Sistemas de UI antes que componentes aislados",
    body:
      "Una buena base de frontend no deberia depender de improvisar cada pantalla. He trabajado en migraciones y en componentes reutilizables para acelerar el producto sin degradar consistencia.",
  },
  {
    title: "Visual con personalidad, pero con control",
    body:
      "Me gusta el detalle visual, aunque siempre subordinado a la claridad. El frontend debe tener identidad sin volverse ruidoso ni dificultar la lectura.",
  },
];

const experience = [
  {
    period: "2024 - Actualidad",
    company: "Nelumbo consultores",
    role: "Frontend Developer",
    description:
      "Trabajo en aplicaciones con Next.js y React, usando formularios complejos, React Query, validaciones y componentes orientados a procesos de negocio.",
  },
  {
    period: "2022 - 2024",
    company: "Avanzo",
    role: "Frontend Developer",
    description:
      "Participe en migracion hacia una libreria reusable de UI, integracion de metricas y patrones para compartir logica entre distintas zonas de la aplicacion.",
  },
  {
    period: "2022",
    company: "Comfaoriente SAS",
    role: "Frontend Developer",
    description:
      "Apoye la migracion de una aplicacion desde Django hacia React, reorganizando flujos e interfaz en un contexto clinico.",
  },
];

const projectEntries = [
  {
    title: "UIKIT Nelumbo",
    href: "https://github.com/andersonNB/UIKITNelumbo",
    summary:
      "Una base en Next.js pensada alrededor de componentes reutilizables, formularios y patrones propios de una aplicacion de producto.",
    meta: "Next.js / React Query / React Hook Form",
  },
  {
    title: "Nelumbo Front NextJS",
    href: "https://github.com/andersonNB/NelumboFrontNexJS",
    summary:
      "Sandbox tecnico con Next.js, Ant Design y styled-components para explorar estructura de app y decisiones de interfaz mas cercanas a trabajo real.",
    meta: "Next.js / Ant Design / Styled Components",
  },
  {
    title: "Blizzard Page",
    href: "https://github.com/andersonNB/Blizzard-Page",
    summary:
      "Proyecto visual hecho con React y Bootstrap que sirve como referencia de maquetacion, composicion y jerarquia en una landing mas grafica.",
    meta: "React / Bootstrap / Visual UI",
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
  "Redux",
  "Ant Design",
  "Material UI",
  "Sass",
  "Styled Components",
  "AWS Cognito",
  "Git",
  "GitHub",
];

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow text-sm text-[var(--muted)]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[var(--muted)]">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-4 py-4 md:px-8 md:py-8">
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
        className="section-card grain relative overflow-hidden rounded-[2.5rem] px-6 py-8 md:px-10 md:py-12"
        id="inicio"
      >
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,var(--accent-soft),transparent_68%)] opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,var(--accent),transparent_70%)] opacity-15 blur-3xl" />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow text-sm text-[var(--muted)]">Portfolio 2026</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.08em] md:text-7xl">
              Frontend con React y Next.js para interfaces que se leen bien,
              escalan bien y responden a problemas reales.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              Soy Anderson Navarro. Llevo cerca de 3 anos trabajando en frontend
              profesional y me interesa construir producto con criterio: formularios,
              estados, componentes reutilizables, performance y una UX clara.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                Email
              </a>
            </div>
          </div>

          <aside className="editorial-panel rounded-[2rem] p-5 md:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="eyebrow text-xs text-white/55">About this frontend</span>
              <span className="retro-label-dark rounded-full px-3 py-1 text-xs">
                Available
              </span>
            </div>

            <div className="mt-5 space-y-5 text-sm leading-7 text-white/78">
              <p>
                <span className="text-white">Focus</span>
                {"  "}
                aplicaciones de negocio, formularios, UI reusable y claridad de
                producto.
              </p>
              <p>
                <span className="text-white">Working stack</span>
                {"  "}
                Next.js, React Query, React Hook Form, Yup, Ant Design y Sass.
              </p>
              <p>
                <span className="text-white">Location</span>
                {"  "}
                Los Patios, Norte de Santander, Colombia.
              </p>
              <p>
                <span className="text-white">Current interest</span>
                {"  "}
                construir una presencia online mas editorial, pero sin perder foco en
                hiring.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {highlights.map((item) => (
            <span key={item} className="retro-label rounded-full px-4 py-2 text-sm">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]" id="perfil">
        <article className="section-card rounded-[2.25rem] px-6 py-8 md:px-10">
          <SectionIntro
            eyebrow="Perfil"
            title="No quiero que este sitio se sienta como una lista de skills."
            description="La idea es que se lea mas como una presentacion breve de como trabajo. Menos dashboard de tecnologias, mas criterio para explicar donde aporto valor dentro de un producto frontend."
          />

          <div className="mt-8 space-y-6 text-lg leading-9 text-[var(--foreground)]">
            <p>
              Disfruto trabajar en el punto donde el frontend deja de ser una capa
              visual y se convierte en parte activa del sistema. Formularios largos,
              flujos autenticados, UI reusable, integraciones y decisiones de
              arquitectura me resultan mas interesantes que una simple landing.
            </p>
            <p className="text-[var(--muted)]">
              Por eso este portfolio no esta pensado solo para mostrar que conozco
              React. Esta pensado para mostrar que puedo construir interfaces utiles,
              mantenibles y coherentes con un producto real.
            </p>
          </div>
        </article>

        <div className="space-y-4">
          {editorialNotes.map((note) => (
            <article
              key={note.title}
              className="lift-card section-card rounded-[1.75rem] bg-[var(--surface-strong)] px-5 py-5"
            >
              <p className="eyebrow text-xs text-[var(--muted)]">Nota</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                {note.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{note.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card rounded-[2.25rem] px-6 py-8 md:px-10" id="experiencia">
        <SectionIntro
          eyebrow="Experiencia"
          title="Mi experiencia reciente esta bastante orientada a producto."
          description="No todo lo que he hecho puede mostrarse como caso publico, pero si se puede resumir el tipo de responsabilidad y complejidad que ya he venido trabajando."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="timeline-card rounded-[1.8rem] border border-[var(--line)] bg-[var(--surface-strong)] px-5 py-5"
            >
              <p className="eyebrow text-xs text-[var(--muted)]">{item.period}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                {item.company}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[var(--muted)]">
                {item.role}
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]" id="trabajo">
        <article className="section-card rounded-[2.25rem] px-6 py-8 md:px-10">
          <SectionIntro
            eyebrow="Trabajo seleccionado"
            title="Los repos publicos todavia no cuentan toda la historia, pero ya apuntan a mi direccion."
            description="La prioridad en siguientes iteraciones sera convertir dos de estos proyectos en mini casos de estudio con mas contexto visual y tecnico."
          />

          <div className="mt-8 space-y-4">
            {projectEntries.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="project-link block rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-strong)] px-5 py-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                    {project.title}
                  </h3>
                  <span className="eyebrow text-xs text-[var(--muted)]">GitHub</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {project.summary}
                </p>
                <p className="mt-4 font-mono text-sm text-[var(--foreground)]">
                  {project.meta}
                </p>
              </a>
            ))}
          </div>
        </article>

        <aside className="section-card rounded-[2.25rem] px-6 py-8 md:px-10">
          <SectionIntro
            eyebrow="Stack"
            title="Tecnologias con las que ya trabajo con soltura."
            description="Prefiero una lista corta, creible y conectada a contexto real de trabajo."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            {stack.map((item) => (
              <span key={item} className="retro-label rounded-full px-4 py-2 text-sm">
                {item}
              </span>
            ))}
          </div>

          <div className="quote-panel mt-8 rounded-[1.8rem] px-5 py-5">
            <p className="eyebrow text-xs text-[var(--muted)]">Siguiente iteracion</p>
            <p className="mt-4 text-lg leading-8">
              Agregar LinkedIn, CV actualizado y al menos dos estudios de caso con
              capturas, decisiones tecnicas y contexto de negocio.
            </p>
          </div>
        </aside>
      </section>

      <section
        className="section-card relative overflow-hidden rounded-[2.4rem] px-6 py-8 md:px-10 md:py-10"
        id="contacto"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--accent),var(--accent-soft),var(--foreground))]" />

        <SectionIntro
          eyebrow="Contacto"
          title="Si buscas a alguien para construir frontend de producto, aqui ya hay una base clara para conversar."
          description="La estructura editorial ya esta lista. Lo siguiente es seguir profundizando el contenido para que el portfolio no solo se vea bien, sino que convenza."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
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
      </section>
    </main>
  );
}
