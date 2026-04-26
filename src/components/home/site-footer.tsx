import { GitHubIcon, MailIcon } from "@/components/ui/icons";
import { useTranslations } from "next-intl";

export function SiteFooter() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="section-card footer-shell rounded-[1.9rem] px-5 py-6 md:px-7 md:py-7">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-start gap-4">
          <div className="footer-mark">
            <span>AN</span>
          </div>

          <div className="max-w-xl">
            <p className="eyebrow text-xs text-[var(--muted)]">{t("label")}</p>
            <p className="mt-2 text-base font-semibold tracking-[-0.03em]">{t("status")}</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              {t("copyright")} {year}
            </p>
          </div>
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
    </footer>
  );
}
