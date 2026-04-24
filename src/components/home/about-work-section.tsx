import { SectionTitle } from "@/components/ui/section-title";
import { useTranslations } from "next-intl";
import type { CaseStudy, ExperienceItem } from "@/types/portfolio";

export function AboutWorkSection() {
  const about = useTranslations("About");
  const experience = useTranslations("Experience");
  const caseStudies = about.raw("items") as CaseStudy[];
  const experienceItems = experience.raw("items") as ExperienceItem[];

  return (
    <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <article className="section-card rounded-[2.2rem] px-6 py-8 md:px-10" id="trabajo">
        <SectionTitle
          eyebrow={about("eyebrow")}
          title={about("title")}
          description={about("description")}
        />

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
        <SectionTitle eyebrow={experience("eyebrow")} title={experience("title")} />
        <div className="mt-6 space-y-5">
          {experienceItems.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="timeline-card rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-strong)] px-5 py-5"
            >
              <p className="eyebrow text-xs text-[var(--muted)]">{item.period}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                {item.company}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.summary}</p>
            </article>
          ))}
        </div>
      </aside>
    </section>
  );
}
