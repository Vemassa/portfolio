export function AboutSection() {
  return (
    <section id="about" className="mb-8 scroll-mt-16 md:mb-12 lg:mb-16 lg:scroll-mt-24" aria-label="About me">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">About</h2>
      </div>
      <div className="space-y-4 text-muted-foreground">
        <p>
          I&apos;m a mobile app developer passionate about creating{" "}
          <span className="text-foreground">pixel-perfect</span>, performant applications that users love. My focus is
          on building cross-platform experiences with <span className="text-primary">React Native</span> and{" "}
          <span className="text-primary">Expo</span> that feel truly native.
        </p>
        <p>
          I&apos;ve made the choice to work with <span className="text-foreground">startups</span> for most of my career,
          in order to develop skills in <span className="text-foreground">multiple domains</span> and be part of a{" "}
          <span className="text-foreground">bigger scope of projects</span>. This deliberate path has allowed me to
          experience the full lifecycle of product development, from ideation to deployment.
        </p>
        <p>
          Thanks to these opportunities, I am able to <span className="text-foreground">plan</span>,{" "}
          <span className="text-foreground">build</span>, and <span className="text-foreground">deliver</span> apps from
          scratch with <span className="text-primary">cutting-edge technologies</span>, helping startups ship mobile apps
          to millions of users on both the App Store and Google Play.
        </p>
      </div>
    </section>
  )
}
