import { SectionTitle } from "@/components/ui/section-title";
import {
  AngularStackIcon,
  CodeStackIcon,
  FileIcon,
  FormStackIcon,
  GitHubIcon,
  GitHubIcon as GitHubStackIcon,
  JavaScriptStackIcon,
  LinkedInIcon,
  MailIcon,
  NextStackIcon,
  PaletteStackIcon,
  QueryStackIcon,
  ReactStackIcon,
  ReduxStackIcon,
  SassStackIcon,
  TypeScriptStackIcon,
} from "@/components/ui/icons";
import { useTranslations } from "next-intl";

const stackIconMap = {
  React: ReactStackIcon,
  "Next.js": NextStackIcon,
  TypeScript: TypeScriptStackIcon,
  JavaScript: JavaScriptStackIcon,
  "React Query": QueryStackIcon,
  "React Hook Form": FormStackIcon,
  Yup: FormStackIcon,
  Redux: ReduxStackIcon,
  Angular: AngularStackIcon,
  "Ant Design": PaletteStackIcon,
  "Material UI": PaletteStackIcon,
  Sass: SassStackIcon,
  "Styled Components": CodeStackIcon,
  PHP: CodeStackIcon,
  Java: CodeStackIcon,
  Git: CodeStackIcon,
  GitHub: GitHubStackIcon,
} as const;

export function StackContactSection() {
  const stackSection = useTranslations("StackSection");
  const contact = useTranslations("Contact");
  const stack = stackSection.raw("items") as string[];

  return (
    <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]" id="stack">
      <article className="section-card rounded-[2.2rem] px-6 py-8 md:px-10">
        <SectionTitle eyebrow={stackSection("eyebrow")} title={stackSection("title")} />

        <div className="mt-8 flex flex-wrap gap-3">
          {stack.map((item) => {
            const Icon = stackIconMap[item as keyof typeof stackIconMap] ?? CodeStackIcon;

            return (
              <span key={item} className="retro-label stack-pill rounded-full px-4 py-2 text-sm">
                <Icon className="stack-icon h-4 w-4" title={item} />
                <span>{item}</span>
              </span>
            );
          })}
        </div>
      </article>

      <article className="section-card rounded-[2.2rem] px-6 py-8 md:px-10" id="contacto">
        <SectionTitle
          eyebrow={contact("eyebrow")}
          title={contact("title")}
          description={contact("description")}
        />

        <div className="mt-8 grid gap-4">
          <a className="contact-card" href="mailto:navarroanderson07@gmail.com">
            <span className="contact-icon-shell">
              <MailIcon className="h-4 w-4" />
            </span>
            <span>
              <span className="eyebrow text-xs text-[var(--muted)]">
                {contact("emailLabel")}
              </span>
              <span className="mt-1 block text-base font-semibold md:text-lg">
                navarroanderson07@gmail.com
              </span>
            </span>
          </a>

          <a
            className="contact-card"
            href="https://github.com/andersonNB"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon-shell">
              <GitHubIcon className="h-4 w-4" />
            </span>
            <span>
              <span className="eyebrow text-xs text-[var(--muted)]">
                {contact("githubLabel")}
              </span>
              <span className="mt-1 block text-base font-semibold md:text-lg">
                github.com/andersonNB
              </span>
            </span>
          </a>

          <a
            className="contact-card"
            href="https://www.linkedin.com/in/anderson-navarro-313a9717b/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon-shell">
              <LinkedInIcon className="h-4 w-4" />
            </span>
            <span>
              <span className="eyebrow text-xs text-[var(--muted)]">
                {contact("linkedinLabel")}
              </span>
              <span className="mt-1 block text-base font-semibold md:text-lg">
                linkedin.com/in/anderson-navarro-313a9717b
              </span>
            </span>
          </a>

          <a
            className="contact-card"
            href="/anderson-navarro-cv-2025.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon-shell">
              <FileIcon className="h-4 w-4" />
            </span>
            <span>
              <span className="eyebrow text-xs text-[var(--muted)]">
                {contact("cvLabel")}
              </span>
              <span className="mt-1 block text-base font-semibold md:text-lg">
                Anderson Navarro CV 2025
              </span>
            </span>
          </a>
        </div>
      </article>
    </section>
  );
}
