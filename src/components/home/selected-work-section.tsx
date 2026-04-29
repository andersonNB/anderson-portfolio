import Image from "next/image";
import { SectionTitle } from "@/components/ui/section-title";
import { useTranslations } from "next-intl";
import type { ProjectCard } from "@/types/portfolio";

export function SelectedWorkSection() {
  const t = useTranslations("SelectedWork");
  const projects = t.raw("projects") as ProjectCard[];

  return (
    <section className="section-card rounded-[2.2rem] px-6 py-8 md:px-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />
        <a
          className="cta-secondary w-fit"
          href="https://github.com/andersonNB?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          {t("ctaAll")}
        </a>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="project-link overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-strong)]"
          >
            <div className="project-media relative aspect-[16/10] border-b border-[var(--line)] bg-[#0f141d]">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="project-image object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="project-overlay" />
              <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-5 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow text-xs text-[var(--muted)]">{project.meta}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                    {project.title}
                  </h3>
                </div>
                <span className="retro-label rounded-full px-3 py-1 text-xs text-[var(--foreground)]">
                  Repo
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
              <p className="mt-4 rounded-[1rem] border border-[var(--line)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm text-[var(--foreground)]">
                {project.impact}
              </p>
              <div className="mt-5">
                <a
                  className="cta-secondary w-full"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("ctaProject")}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
