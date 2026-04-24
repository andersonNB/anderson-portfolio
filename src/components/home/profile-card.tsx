import Image from "next/image";

export function ProfileCard() {
  return (
    <div className="collector-shell">
      <article className="collector-card">
        <div className="collector-top">
          <div>
            <p className="collector-name">Anderson Navarro</p>
            <p className="collector-role">Frontend Developer</p>
          </div>
          <div className="collector-pill">LV 03</div>
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
            <p className="collector-label">Main stack</p>
            <p className="collector-value">React / Next.js</p>
          </div>
          <div>
            <p className="collector-label">Style</p>
            <p className="collector-value">UI reusable</p>
          </div>
        </div>

        <div className="collector-stats">
          <span>Forms 92</span>
          <span>State 88</span>
          <span>UX 90</span>
        </div>
      </article>
    </div>
  );
}
