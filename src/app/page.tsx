import { AboutWorkSection } from "@/components/home/about-work-section";
import { HeroSection } from "@/components/home/hero-section";
import { SelectedWorkSection } from "@/components/home/selected-work-section";
import { SiteHeader } from "@/components/home/site-header";
import { StackContactSection } from "@/components/home/stack-contact-section";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-4 md:px-8 md:py-8">
      <SiteHeader />
      <HeroSection />
      <AboutWorkSection />
      <SelectedWorkSection />
      <StackContactSection />
    </main>
  );
}
