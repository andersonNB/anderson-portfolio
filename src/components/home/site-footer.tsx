import { GitHubIcon, MailIcon } from "@/components/ui/icons";
import { useTranslations } from "next-intl";

export function SiteFooter() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="section-card footer-shell rounded-[1.9rem] px-5 py-5 md:px-7">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[-0.04em]">Anderson Navarro</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{t("status")}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            aria-label="GitHub"
            className="footer-icon-link"
            href="https://github.com/andersonNB"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            aria-label="Email"
            className="footer-icon-link"
            href="mailto:navarroanderson07@gmail.com"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mt-4 border-t border-[var(--line)] pt-4 text-sm text-[var(--muted)]">
        <p>{t("copyright")} {year}</p>
      </div>
    </footer>
  );
}
