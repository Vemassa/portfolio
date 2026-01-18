"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const socialLinks = [
  { icon: Github, href: "https://github.com/vemassa", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/quentin-santos-209aa4139/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:pro.quentin.santos@gmail.com", label: "Email" },
]

const EMAIL = "pro.quentin.santos@gmail.com"

export function HeroSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Quentin Santos</h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">Senior Mobile Engineer</h2>
        <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
          I build polished, performant mobile experiences using React Native and Expo.
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page navigation">
          <ul className="mt-16 w-max">
            {[
              { label: "About", href: "#about" },
              { label: "Experience", href: "#experience" },
              { label: "Projects", href: "#projects" },
            ].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="group flex items-center py-3 text-muted-foreground">
                  <span className="mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground" />
                  <span className="text-xs font-bold uppercase tracking-widest group-hover:text-foreground group-focus-visible:text-foreground">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-8">
        <p className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
          Email me at{" "}
          <a
            href="mailto:pro.quentin.santos@gmail.com"
            className="text-primary transition hover:underline"
          >
            {EMAIL}
          </a>
          <Tooltip>
            <TooltipContent>
              <p>Copy email address</p>
            </TooltipContent>
            <TooltipTrigger onClick={handleCopy} aria-label="Copy email address" className="text-muted-foreground transition hover:text-primary">
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </TooltipTrigger>
          </Tooltip>
        </p>
        <ul className="ml-1 flex items-center" aria-label="Social media">
          {socialLinks.map((social) => (
            <li key={social.label} className="mr-5 shrink-0 text-xs">
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${social.label} (opens in a new tab)`}
                className="block text-muted-foreground transition hover:text-primary"
              >
                <social.icon className="h-6 w-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
