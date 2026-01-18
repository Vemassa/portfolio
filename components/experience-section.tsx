import { ArrowUpRight } from "lucide-react"

type Experience = {
  period: string
  title: string
  company: string
  companyUrl: string
  description: string
  skills?: string[]
}

const experiences: Experience[] = [
  {
    period: "2025 — Present",
    title: "Co-founder",
    company: "Bistromo",
    companyUrl: "https://bistromo.com/",
    description:
      "Co-founded an All-In-One Ordering & Kitchen Display System for Small Restaurants. Built a mobile app for taking orders, a dashboard for restaurant management, and a Kitchen Display System (KDS) for order fulfillment.",
    // skills: ["React Native", "Expo", "NestJS", "NextJS", "TailwindCSS", "Stripe", "RevenueCat", "Amplitude Analytics"],
  },
  {
    period: "2022 — 2025",
    title: "Mobile Lead",
    company: "Cochl",
    companyUrl: "https://cochl.ai",
    description:
      "Mobile Lead for the development of multiple mobile applications for audio AI solutions and smart home security products. Shipped multiple React Native applications used across the world.",
    // skills: ["React Native", "Figma", "TypeScript", "Mobile Development"],
  },
  {
    period: "2020 — 2022",
    title: "Mobile App Engineer",
    company: "Insiteo",
    companyUrl: "https://innovacom.com/company/insiteo/",
    description:
      "Built and maintained the company mobile app, integrating native modules with Bluetooth Low Energy (BLE) for seamless device connectivity and communication.",
    // skills: ["React Native", "Mobile Development", "TypeScript"],
  },
  // {
  //   period: "2019",
  //   title: "Mobile App Engineer",
  //   company: "Dev-id",
  //   companyUrl: "#",
  //   description:
  //     "Developed mobile applications for various projects. Gained experience in mobile development workflows and best practices.",
  //   skills: ["React Native", "Mobile Development"],
  // },
  {
    period: "2018 — 2019",
    title: "Co-leader Mobile Focus Group",
    company: "EPITECH - European Institute of Technology",
    companyUrl: "https://www.epitech.eu",
    description:
      "Led the Mobile Focus Group, organizing workshops and mentoring students in mobile development technologies and practices.",
    // skills: ["Leadership", "Mentoring", "Mobile Development"],
  },
  {
    period: "2018 — 2019",
    title: "Pedagogical Assistant",
    company: "EPITECH - European Institute of Technology",
    companyUrl: "https://www.epitech.eu",
    description:
      "Assisted in teaching and supporting students in their learning journey. Provided technical guidance and helped with project development.",
    // skills: ["Teaching", "Mentoring", "Education"],
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Experience</h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                  aria-label={exp.period}
                >
                  {exp.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <div>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link inline-flex items-baseline text-base font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary"
                        aria-label={`${exp.title} at ${exp.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {exp.title} ·{" "}
                          <span className="inline-block">
                            {exp.company}
                            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">{exp.description}</p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.skills ? exp.skills.map((skill) => (
                      <li key={skill} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {skill}
                        </div>
                      </li>
                    )) : null}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
