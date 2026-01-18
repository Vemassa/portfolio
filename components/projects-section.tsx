import Image from "next/image"
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react"

const projects = [
  {
    title: "New app coming out soon",
    description:
      "Soon on the stores!",
    image: "/portfolio/projects/what-are-you-looking-at.webp",
    link: "#",
    skills: ["React Native", "Expo", "Supabase", "Adapty", "Amplitude Analytics"],
    ownership: "Freelance",
  },
  {
    title: "Bistromo",
    description:
      "Ordering and kitchen display system for restaurants. Mobile app for orders, dashboard for management, KDS for fulfillment.",
    image: "/portfolio/projects/bistromo-1.webp",
    link: "https://bistromo.com/",
    skills: ["React Native", "Expo", "NestJS", "NextJS", "TailwindCSS", "Stripe", "RevenueCat", "Amplitude Analytics", "Figma"],
    ownership: "Personal (Co-founder)",
  },
  {
    title: "Create My Flashcards",
    description:
      "Create and study flashcards. Add pairs with values and answers, track your progress.",
    image: "/portfolio/projects/cmf-1.webp",
    link: "https://create-my-flashcards.com/",
    skills: ["React Native", "Expo", "AWS", "NextJS", "TailwindCSS", "Figma"],
    ownership: "Personal",
  },
  {
    title: "Cochl.Sense Notification",
    description:
      "Sound monitoring app with real-time detection notifications. Manage projects, customize alerts, share detections with your team.",
    image: "/portfolio/projects/cs-notification-1.webp",
    link: "https://cochl.ai/",
    skills: ["React Native", "Expo"],
    ownership: "Cochl",
  },
  {
    title: "Cochl.Sense Experience",
    description:
      "Real-time sound identification app. Detects events like gunshots, baby crying, glass breaks. Notifies you what's happening around you and when.",
    image: "/portfolio/projects/cs-experience-1.webp",
    link: "https://cochl.ai/",
    skills: ["React Native", "Expo", "Expo Native Modules"],
    ownership: "Cochl",
  },
  {
    title: "Witom",
    description:
      "Security app that detects sound and motion using two phones. Monitor your space remotely with real-time alerts.",
    image: "/portfolio/projects/witom-1.webp",
    link: "https://witom.cochl.ai/",
    skills: ["React Native", "Expo", "Expo Native Modules", "WebRTC"],
    ownership: "Cochl",
  },
]

export function ProjectsSection() {
  // Skills to exclude from core skills
  const skillsBlacklist: string[] = []

  // Calculate skill occurrences
  const skillCounts = new Map<string, number>()
  projects.forEach((project) => {
    project.skills.forEach((skill) => {
      skillCounts.set(skill, (skillCounts.get(skill) || 0) + 1)
    })
  })

  // Get unique skills, filter blacklist, and sort by occurrence (descending)
  const coreSkills = Array.from(skillCounts.entries())
    .filter(([skill]) => !skillsBlacklist.includes(skill))
    .sort((a, b) => b[1] - a[1]) // Sort by count descending
    .map(([skill]) => skill)

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Projects</h2>
      </div>

      {/* Projects Grid */}
      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                <div className={`z-10 sm:order-2 ${Array.isArray(project.image) ? "sm:col-span-3" : "sm:col-span-4"}`}>
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
                  {/* <div className="mt-2 text-xs text-muted-foreground">
                    <span className="font-medium">{project.ownership}</span>
                  </div> */}
                  <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <BriefcaseBusiness className="h-3 w-3" />
                      {project.ownership}
                    </span>
                    {/* <span className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      {project.stats.downloads}
                    </span> */}
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
                {Array.isArray(project.image) ? (
                  <div className="z-10 flex flex-col gap-0.5 sm:order-1 sm:col-span-5 sm:translate-y-1">
                    {project.image.map((imgSrc, imgIndex) => (
                      <Image
                        key={imgIndex}
                        src={imgSrc}
                        alt={`Screenshot ${imgIndex + 1} of ${project.title}`}
                        width={1160}
                        height={540}
                        className="w-full rounded border-2 border-border/50 transition group-hover:border-border/80"
                      />
                    ))}
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    width={1024}
                    height={500}
                    className="z-10 w-full h-auto rounded border-2 border-border/50 transition group-hover:border-border/80 sm:order-1 sm:col-span-4 sm:translate-y-1"
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Skills Summary */}
      <div className="mt-12 rounded-lg bg-card p-6">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground">Core Skills</h3>
        <div className="flex flex-wrap gap-2">
          {coreSkills.map((skill) => (
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
