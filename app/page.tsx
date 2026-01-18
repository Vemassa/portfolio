import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ServicesBanner } from "@/components/services-banner"

export default function Home() {
  return (
    <div className="relative">
      <main className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <HeroSection />
          <div className="pt-24 lg:w-[50%] lg:py-24">
            <AboutSection />
            <ServicesBanner />
            <ExperienceSection />
            <ProjectsSection />
          </div>
        </div>
      </main>
    </div>
  )
}
