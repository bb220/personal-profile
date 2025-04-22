import Link from "next/link"
import { Github, Linkedin, BookOpen } from "lucide-react"

export default function Home() {
  // Replace with your actual name
  const name = "Brandon Bellero"

  // Replace with your actual social links
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/bb220",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "Substack",
      url: "https://brandonbellero.substack.com/",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/brandon-bellero/",
      icon: <Linkedin className="h-5 w-5" />,
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
      </div>
    </main>
  )
}
