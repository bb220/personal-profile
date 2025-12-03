"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects = [
    {
      title: "Trainr",
      description: "Agentic AI fitness companion",
      url: "https://www.trainrfit.com",
      linkText: "Check it out",
    },
    {
      title: "Interactive Hierarchy",
      description:
        "Interactive visual illustrating Paul Graham's disagreement hierarchy, with customizable AI-generated examples",
      url: "https://interactive-hierarchy.brandonbellero.com/",
      linkText: "Explore the project",
    },
    {
      title: "DinnerPlanner",
      description:
        "AI-powered meal planning agent that suggests recipes, scales portions, and generates shopping lists tailored to your preferences and dietary needs",
      url: "https://x.com/brandonbellero/status/1928992668266410112",
      linkText: "Explore the project",
    },
    {
      title: "My Easy Golf Scorecard",
      description: "Simple scorecard app that eliminates distractions so you can enjoy your round",
      url: "https://myeasygolfscorecard.com",
      linkText: "See the app",
    },
    {
      title: "The Verrazzano Is Cool Too",
      description: "Design‑led, automated DTC apparel project inspired by New York City's most underrated bridge",
      url: "https://www.theverrazzanoiscooltoo.com",
      linkText: "Browse the shop",
    },
    {
      title: "Clean Calculator",
      description: "Minimal calculator extension for Chrome",
      url: "https://chromewebstore.google.com/detail/clean-calculator-extensio/bmhlkhlncmgcdeicfehhpifjhgneenoc",
      linkText: "Learn more",
    },
  ]

  return (
    <main className="main">
      <div className="center">
        <div className="roman">III</div>
        <div className="chapter">Projects</div>
      </div>

      {projects.map((project, index) => (
        <div key={index} className="project" style={index === projects.length - 1 ? { marginBottom: "3rem" } : {}}>
          <div className="rule">
            <Link href={project.url} target="_blank" rel="noopener" className="title-link">
              <span className="head">{project.title}</span>
            </Link>
          </div>
          <p>{project.description}</p>
        </div>
      ))}
    </main>
  )
}
