"use client";

import { NextIntlClientProvider } from "next-intl";
import { useEffect, useState } from "react";
import { AboutWorkSection } from "@/components/home/about-work-section";
import { HeroSection } from "@/components/home/hero-section";
import { SelectedWorkSection } from "@/components/home/selected-work-section";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { StackContactSection } from "@/components/home/stack-contact-section";
import type { Locale } from "@/types/portfolio";
import enMessages from "@/messages/en.json";
import esMessages from "@/messages/es.json";

export type Theme = "dark" | "light";

export function HomePage() {
  const [locale, setLocale] = useState<Locale>("es");
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const storedTheme = window.localStorage.getItem("theme");

    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });
  const messages = locale === "es" ? esMessages : enMessages;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SiteHeader
        locale={locale}
        onLocaleChange={setLocale}
        theme={theme}
        onThemeChange={setTheme}
      />
      <HeroSection />
      <AboutWorkSection />
      <SelectedWorkSection />
      <StackContactSection />
      <SiteFooter />
    </NextIntlClientProvider>
  );
}
