import Image from "next/image"
import { ArrowUpRight, Star, Download } from "lucide-react"

const projects = [
  {
    title: "FitTrack Pro",
    description:
      "A comprehensive fitness tracking app with workout plans, progress analytics, and social features. Built with React Native and integrated with HealthKit/Google Fit.",
    image: "placeholder.svg",
    link: "https://example.com",
    stats: { stars: "4.8", downloads: "500K+" },
    skills: ["React Native", "Expo", "TypeScript", "Redux"],
  },
  {
    title: "PayFlow",
    description:
      "A fintech mobile app enabling seamless peer-to-peer payments, bill splitting, and expense tracking with bank-grade security.",
    image: "/placeholder.svg",
    link: "https://example.com",
    stats: { stars: "4.9", downloads: "1M+" },
    skills: ["React Native", "Stripe", "Firebase", "Biometrics"],
  },
  {
    title: "MealMate",
    description:
      "Recipe discovery and meal planning app with smart grocery lists, nutritional info, and personalized recommendations powered by ML.",
    image: "/placeholder.svg",
    link: "https://example.com",
    stats: { stars: "4.7", downloads: "250K+" },
    skills: ["React Native", "Expo", "GraphQL", "TensorFlow Lite"],
  },
  {
    title: "StudyBuddy",
    description:
      "An educational app with flashcards, spaced repetition, and collaborative study groups. Features offline mode and sync across devices.",
    image: "/placeholder.svg",
    link: "https://example.com",
    stats: { stars: "4.6", downloads: "100K+" },
    skills: ["React Native", "Realm", "Push Notifications", "Analytics"],
  },
]

const companies = [
  { name: "Google" },
  { name: "Meta" },
  { name: "Shopify" },
  { name: "Stripe" },
  { name: "Airbnb" },
]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Projects</h2>
      </div>

      {/* Companies Section */}
      <div className="mb-12">
        <p className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">Trusted by teams at</p>
        <div className="flex flex-wrap items-center gap-6 opacity-60">
          {companies.map((company) => (
            <Image
              key={company.name}
              src="/placeholder.svg"
              alt={company.name}
              width={100}
              height={32}
              className="h-8 w-auto grayscale"
            />
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary"
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {project.title}
                        <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">{project.description}</p>
                  <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      {project.stats.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      {project.stats.downloads}
                    </span>
                  </div>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.skills.map((skill) => (
                      <li key={skill} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <Image
                  src="/placeholder.svg"
                  alt={`Screenshot of ${project.title}`}
                  width={200}
                  height={120}
                  className="z-10 rounded border-2 border-border/50 transition group-hover:border-border/80 sm:order-1 sm:col-span-2 sm:translate-y-1"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Skills Summary */}
      <div className="mt-12 rounded-lg bg-card p-6">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground">Core Skills</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "React Native",
            "Expo",
            "TypeScript",
            "JavaScript",
            "Redux",
            "MobX",
            "Firebase",
            "REST APIs",
            "GraphQL",
            "CI/CD",
            "Jest",
            "Detox",
            "App Store Connect",
            "Google Play Console",
            "Performance Optimization",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-sm text-muted-foreground">
        <p>
          Built with{" "}
          <a href="https://nextjs.org" className="font-medium text-foreground hover:text-primary">
            Next.js
          </a>{" "}
          and{" "}
          <a href="https://tailwindcss.com" className="font-medium text-foreground hover:text-primary">
            Tailwind CSS
          </a>
          , deployed on{" "}
          <a href="https://vercel.com" className="font-medium text-foreground hover:text-primary">
            Vercel
          </a>
          .
        </p>
      </footer>
    </section>
  )
}
