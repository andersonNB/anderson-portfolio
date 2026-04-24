import { ProfileCard } from "@/components/home/profile-card";
import { TypewriterSkills } from "@/components/typewriter-skills";
import type { HeroContent, ProfileCardContent } from "@/types/portfolio";

type HeroSectionProps = {
  content: HeroContent;
  profileCard: ProfileCardContent;
};

export function HeroSection({ content, profileCard }: HeroSectionProps) {
  return (
    <section
      className="section-card grain relative overflow-hidden rounded-[2.5rem] px-6 py-8 md:px-10 md:py-10"
      id="inicio"
    >
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,var(--accent-soft),transparent_68%)] opacity-30 blur-3xl" />

      <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="eyebrow text-sm text-[var(--muted)]">{content.eyebrow}</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.08em] md:text-7xl">
            {content.title}
          </h1>
          <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)] md:text-3xl">
            {content.typedPrefix} <TypewriterSkills words={content.typedWords} />
          </p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
            {content.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {content.facts.map((item) => (
              <span key={item} className="retro-label rounded-full px-4 py-2 text-sm">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="cta-primary" href="#trabajo">
              {content.ctaWork}
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
              {content.ctaEmail}
            </a>
          </div>
        </div>

        <ProfileCard content={profileCard} />
      </div>
    </section>
  );
}
