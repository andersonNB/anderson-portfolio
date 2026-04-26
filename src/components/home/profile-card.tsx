import Image from "next/image";
import { useTranslations } from "next-intl";
import type { ProfileCardContent } from "@/types/portfolio";

export function ProfileCard() {
  const t = useTranslations("ProfileCard");
  const stats = t.raw("stats") as ProfileCardContent["stats"];

  return (
    <div className="collector-shell">
      <article className="collector-card">
        <div className="collector-top">
          <div>
            <p className="collector-name">{t("name")}</p>
            <p className="collector-role">{t("subtitle")}</p>
          </div>
          <div className="collector-pill">{t("level")}</div>
        </div>

        <div className="collector-art">
          <Image
            src="/profileIA.png"
            alt="Anderson Navarro"
            fill
            priority
            className="collector-image"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>

        <div className="collector-meta">
          <div>
            <p className="collector-label">{t("labels.mainStack")}</p>
            <p className="collector-value">{t("values.mainStack")}</p>
          </div>
          <div>
            <p className="collector-label">{t("labels.style")}</p>
            <p className="collector-value">{t("values.style")}</p>
          </div>
        </div>

        <div className="collector-stats">
          {stats.map((stat) => (
            <span key={stat}>{stat}</span>
          ))}
        </div>
      </article>
    </div>
  );
}
