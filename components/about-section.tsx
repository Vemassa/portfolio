export function AboutSection() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
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
          Over the years, I&apos;ve had the opportunity to work with <span className="text-foreground">startups</span>,{" "}
          <span className="text-foreground">agencies</span>, and{" "}
          <span className="text-foreground">large corporations</span>, helping them ship mobile apps to millions of
          users on both the App Store and Google Play.
        </p>
        <p>
          When I&apos;m not coding, you&apos;ll find me exploring new frameworks, contributing to open source, or diving
          deep into mobile performance optimization techniques.
        </p>
      </div>
    </section>
  )
}
