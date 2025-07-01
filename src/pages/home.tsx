import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ClientLogos from "@/components/client-logos";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import PortfolioSection from "@/components/portfolio-section";
import SkillsSection from "@/components/skills-section";

import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-gray-50 font-inter antialiased">
      <Navigation />
      <HeroSection />
      <ClientLogos />
      <AboutSection />
      <ExperienceSection />
      <PortfolioSection />
      <SkillsSection />

      <ContactSection />
      <Footer />
    </div>
  );
}
