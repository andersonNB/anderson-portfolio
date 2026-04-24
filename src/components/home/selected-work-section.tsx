import { selectedWork } from "@/lib/content/portfolio-content";
import { SectionTitle } from "@/components/ui/section-title";

export function SelectedWorkSection() {
  return (
    <section className="section-card rounded-[2.2rem] px-6 py-8 md:px-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionTitle eyebrow="Repos" title="Trabajo seleccionado." />
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
  );
}
