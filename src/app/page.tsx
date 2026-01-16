import { HeroSection } from '@/components/sections/hero-section';
import { ContactSection } from '@/components/sections/contact-section';
import { FeaturedWorkSection } from '@/components/sections/featured-work-section';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
      <HeroSection />
      <FeaturedWorkSection />
      <ContactSection />
    </div>
  );
}
