import { useTranslations } from "next-intl";
import type { Locale } from "@/types/portfolio";

type SiteHeaderProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export function SiteHeader({ locale, onLocaleChange }: SiteHeaderProps) {
  const t = useTranslations("SiteHeader");
  const navigation = [
    { label: t("navigation.home"), href: "#inicio" },
    { label: t("navigation.work"), href: "#trabajo" },
    { label: t("navigation.stack"), href: "#stack" },
    { label: t("navigation.contact"), href: "#contacto" },
  ];

  return (
    <header className="section-card sticky top-4 z-20 rounded-[1.75rem] px-5 py-4 backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="accent-dot" />
          <div>
            <p className="eyebrow text-xs text-[var(--muted)]">{t("name")}</p>
          </div>
        </a>

        <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
          <nav className="flex flex-wrap gap-2">
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

          <div className="locale-switch">
            <button
              type="button"
              className={locale === "es" ? "locale-active" : ""}
              onClick={() => onLocaleChange("es")}
            >
              ES
            </button>
            <button
              type="button"
              className={locale === "en" ? "locale-active" : ""}
              onClick={() => onLocaleChange("en")}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
