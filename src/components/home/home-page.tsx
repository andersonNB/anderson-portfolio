"use client";

import { useState } from "react";
import { AboutWorkSection } from "@/components/home/about-work-section";
import { HeroSection } from "@/components/home/hero-section";
import { SelectedWorkSection } from "@/components/home/selected-work-section";
import { SiteHeader } from "@/components/home/site-header";
import { StackContactSection } from "@/components/home/stack-contact-section";
import { portfolioTranslations } from "@/lib/content/portfolio-translations";
import type { Locale } from "@/types/portfolio";

export function HomePage() {
  const [locale, setLocale] = useState<Locale>("es");
  const copy = portfolioTranslations[locale];

  return (
    <>
      <SiteHeader
        navigation={copy.navigation}
        name={copy.headerName}
        locale={locale}
        onLocaleChange={setLocale}
      />
      <HeroSection content={copy.hero} profileCard={copy.profileCard} />
      <AboutWorkSection
        about={copy.about}
        caseStudies={copy.caseStudies}
        experience={copy.experience}
      />
      <SelectedWorkSection content={copy.work} projects={copy.selectedWork} />
      <StackContactSection
        stackSection={copy.stackSection}
        stack={copy.stack}
        contact={copy.contact}
      />
    </>
  );
}
