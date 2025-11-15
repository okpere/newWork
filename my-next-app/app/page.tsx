import HeroSection from '@/components/hero-section';
import CTASection from '@/components/cta-section';
import StartUpScienceSection from '@/components/startup-science-section';
import GlobalTalentSection from '@/components/global-talent-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CTASection />
      <StartUpScienceSection />
      <GlobalTalentSection />
    </main>
  );
}
