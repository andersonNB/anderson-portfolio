import { navigation } from "@/lib/content/portfolio-content";

export function SiteHeader() {
  return (
    <header className="section-card sticky top-4 z-20 rounded-[1.75rem] px-5 py-4 backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="accent-dot" />
          <div>
            <p className="eyebrow text-xs text-[var(--muted)]">Anderson Navarro</p>
            <p className="text-sm font-medium">Frontend Developer</p>
          </div>
        </a>

        <nav className="flex flex-wrap gap-2 text-sm text-[var(--muted)]">
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
      </div>
    </header>
  );
}
