import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function Home() {
  // Replace with your actual name
  const name = "Brandon Bellero"

  // Replace with your actual social links
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/brandon-bellero/",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "X",
      url: "https://x.com/brandonbellero",
      icon: <XIcon className="h-5 w-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/bb220",
      icon: <Github className="h-5 w-5" />,
    },
  ]

  // Replace with your actual projects
  const projects = [
    {
      title: "Launcher",
      description: "A lightweight platform starter-kit for technical founders.",
      url: "https://v0-launcher-home.vercel.app/",
    },
    {
      title: "My Easy Golf Scorecard",
      description: "A simple scorecard app that eliminates distractions so you can enjoy your round.",
      url: "https://myeasygolfscorecard.com/",
    },
    {
      title: "The Verrazzano is Cool Too",
      description:
        "What started as a joke turned into an automated DTC brand inspired by New York City's most underrated bridge.",
      url: "https://www.theverrazzanoiscooltoo.com/",
    },
    {
      title: "Clean Calculator",
      description: "A calculator app for Chrome OS.",
      url: "https://chromewebstore.google.com/detail/clean-calculator-extensio/bmhlkhlncmgcdeicfehhpifjhgneenoc",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{name}</h1>

        <div className="mt-6 text-lg">
          <p className="text-muted-foreground">
            Building at the intersection of technology, business, and design.
            <br />
            <span className="text-muted-foreground">Always learning.</span>
          </p>
        </div>

        <div className="mt-10 flex flex-row justify-center gap-2 sm:gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 rounded-md px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label={link.name}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        <div className="mt-20 w-full max-w-2xl">
          <h4 className="text-md font-semibold mb-6 text-left">Things I've Built</h4>
          <div className="space-y-3 text-left">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-1 transition-colors hover:bg-muted/10"
              >
                <div className="text-sm">
                  <span className="font-medium">{project.title}</span>
                  <span className="mx-2 text-muted-foreground">—</span>
                  <span className="text-muted-foreground">{project.description}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
