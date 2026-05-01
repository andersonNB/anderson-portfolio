import { useState } from "react";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "@/components/ui/icons";
import { useTranslations } from "next-intl";
import type { Locale } from "@/types/portfolio";

type SiteHeaderProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  theme: "dark" | "light";
  onThemeChange: (theme: "dark" | "light") => void;
};

export function SiteHeader({
  locale,
  onLocaleChange,
  theme,
  onThemeChange,
}: SiteHeaderProps) {
  const t = useTranslations("SiteHeader");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [
    { label: t("navigation.home"), href: "#inicio" },
    { label: t("navigation.work"), href: "#trabajo" },
    { label: t("navigation.stack"), href: "#stack" },
    { label: t("navigation.contact"), href: "#contacto" },
  ];
  const themeLabels =
    locale === "es"
      ? { dark: "Activar tema oscuro", light: "Activar tema claro" }
      : { dark: "Activate dark theme", light: "Activate light theme" };

  return (
    <header className="section-card header-shell sticky top-4 z-20 rounded-[1.75rem] px-5 py-4 backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="accent-dot" />
          <div>
            <p className="eyebrow text-xs text-[var(--muted)]">{t("name")}</p>
          </div>
        </a>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? t("close") : t("menu")}
          className="menu-toggle md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
        </button>

        <div className="hidden items-center gap-3 text-sm text-[var(--muted)] md:flex">
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

          <div className="theme-switch" role="group" aria-label="Theme switch">
            <button
              type="button"
              aria-label={themeLabels.dark}
              className={theme === "dark" ? "theme-active" : ""}
              onClick={() => onThemeChange("dark")}
            >
              <MoonIcon className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              aria-label={themeLabels.light}
              className={theme === "light" ? "theme-active" : ""}
              onClick={() => onThemeChange("light")}
            >
              <SunIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="mobile-menu mt-4 border-t border-[var(--line)] pt-4 md:hidden">
          <nav className="flex flex-col gap-2 text-sm text-[var(--muted)]">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="retro-link rounded-2xl px-4 py-3 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4">
            <div className="flex items-center gap-3">
              <div className="locale-switch">
                <button
                  type="button"
                  className={locale === "es" ? "locale-active" : ""}
                  onClick={() => {
                    onLocaleChange("es");
                    setIsMenuOpen(false);
                  }}
                >
                  ES
                </button>
                <button
                  type="button"
                  className={locale === "en" ? "locale-active" : ""}
                  onClick={() => {
                    onLocaleChange("en");
                    setIsMenuOpen(false);
                  }}
                >
                  EN
                </button>
              </div>

              <div className="theme-switch" role="group" aria-label="Theme switch">
                <button
                  type="button"
                  aria-label={themeLabels.dark}
                  className={theme === "dark" ? "theme-active" : ""}
                  onClick={() => {
                    onThemeChange("dark");
                    setIsMenuOpen(false);
                  }}
                >
                  <MoonIcon className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  aria-label={themeLabels.light}
                  className={theme === "light" ? "theme-active" : ""}
                  onClick={() => {
                    onThemeChange("light");
                    setIsMenuOpen(false);
                  }}
                >
                  <SunIcon className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
