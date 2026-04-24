import Image from "next/image";
import type { ProfileCardContent } from "@/types/portfolio";

type ProfileCardProps = {
  content: ProfileCardContent;
};

export function ProfileCard({ content }: ProfileCardProps) {
  return (
    <div className="collector-shell">
      <article className="collector-card">
        <div className="collector-top">
          <div>
            <p className="collector-name">{content.name}</p>
            <p className="collector-role">{content.subtitle}</p>
          </div>
          <div className="collector-pill">{content.level}</div>
        </div>

        <div className="collector-art">
          <Image
            src="/anderson-profile-clean.png"
            alt="Anderson Navarro"
            fill
            priority
            className="collector-image"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>

        <div className="collector-meta">
          <div>
            <p className="collector-label">{content.labels.mainStack}</p>
            <p className="collector-value">{content.values.mainStack}</p>
          </div>
          <div>
            <p className="collector-label">{content.labels.style}</p>
            <p className="collector-value">{content.values.style}</p>
          </div>
        </div>

        <div className="collector-stats">
          {content.stats.map((stat) => (
            <span key={stat}>{stat}</span>
          ))}
        </div>
      </article>
    </div>
  );
}
