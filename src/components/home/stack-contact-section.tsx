import { stack } from "@/lib/content/portfolio-content";
import { SectionTitle } from "@/components/ui/section-title";

export function StackContactSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]" id="stack">
      <article className="section-card rounded-[2.2rem] px-6 py-8 md:px-10">
        <SectionTitle eyebrow="Stack" title="Lo que uso." />

        <div className="mt-8 flex flex-wrap gap-3">
          {stack.map((item) => (
            <span key={item} className="retro-label rounded-full px-4 py-2 text-sm">
              {item}
            </span>
          ))}
        </div>
      </article>

      <article className="section-card rounded-[2.2rem] px-6 py-8 md:px-10" id="contacto">
        <SectionTitle
          eyebrow="Contacto"
          title="Hablemos."
          description="La siguiente fase puede entrar ya con LinkedIn, CV actualizado y casos de estudio mas completos."
        />

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
  );
}
