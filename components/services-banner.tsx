import { Smartphone, Code2, Zap, GitBranch, TestTube, FileSearch, Rocket, MessageCircle } from "lucide-react"

type Service = {
  icon: React.ComponentType<{ className?: string }>
  title: string
}

const services: Service[] = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
  },
  {
    icon: Rocket,
    title: "Feature Development",
  },
  {
    icon: Code2,
    title: "Architecture & Code Reviews",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
  },
  {
    icon: GitBranch,
    title: "CI/CD Setup & Automation",
  },
  {
    icon: TestTube,
    title: "Testing & Quality Assurance",
  },
  {
    icon: FileSearch,
    title: "Technical Consulting",
  },
]

export function ServicesBanner() {
  return (
    <div className="relative mb-12 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-r from-card via-card to-primary/5 p-6 shadow-lg md:mb-16 lg:mb-24">
      {/* Services Grid */}
      <div className="mb-6">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground">
          What I can offer
        </h3>
        <div className="group/list grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative rounded-md border border-border/50 bg-card/50 p-3 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
              >
                <div className="absolute -inset-2 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                <div className="relative z-10 flex items-center gap-3">
                  <Icon className="h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm font-medium text-foreground">{service.title}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex items-center justify-center border-t border-border/50 pt-6">
        <a
          href="mailto:pro.quentin.santos@gmail.com"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80 hover:underline"
        >
          <MessageCircle className="h-4 w-4" />
          Want to know more? Let&apos;s have a chat!
        </a>
      </div>
    </div>
  )
}

