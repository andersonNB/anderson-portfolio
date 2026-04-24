"use client";

import { NextIntlClientProvider } from "next-intl";
import { useState } from "react";
import { AboutWorkSection } from "@/components/home/about-work-section";
import { HeroSection } from "@/components/home/hero-section";
import { SelectedWorkSection } from "@/components/home/selected-work-section";
import { SiteHeader } from "@/components/home/site-header";
import { StackContactSection } from "@/components/home/stack-contact-section";
import type { Locale } from "@/types/portfolio";
import enMessages from "@/messages/en.json";
import esMessages from "@/messages/es.json";

export function HomePage() {
  const [locale, setLocale] = useState<Locale>("es");
  const messages = locale === "es" ? esMessages : enMessages;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SiteHeader locale={locale} onLocaleChange={setLocale} />
      <HeroSection />
      <AboutWorkSection />
      <SelectedWorkSection />
      <StackContactSection />
    </NextIntlClientProvider>
  );
}
