"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects = [
    {
      title: "Pippo Labs",
      description:
        "A technology studio that experiments with emerging ideas and brings new software products to market.",
      url: "https://www.pippolabs.xyz/",
      linkText: "Visit site",
    },
    {
      title: "CoachAI",
      description: "An agentic AI fitness companion that builds personalized programs and provides real-time coaching.",
      url: "https://www.coachaiapp.info",
      linkText: "Check it out",
    },
    {
      title: "DinnerPlanner",
      description:
        "An AI-powered meal planning agent that suggests recipes, scales portions, and generates shopping lists tailored to your preferences and dietary needs.",
      url: "https://x.com/brandonbellero/status/1928992668266410112",
      linkText: "Explore the project",
    },
    {
      title: "My Easy Golf Scorecard",
      description: "A simple scorecard app that eliminates distractions so you can enjoy your round.",
      url: "https://myeasygolfscorecard.com",
      linkText: "See the app",
    },
    {
      title: "The Verrazzano Is Cool Too",
      description: "A design‑led, automated DTC apparel project inspired by New York City's most underrated bridge.",
      url: "https://www.theverrazzanoiscooltoo.com",
      linkText: "Browse the shop",
    },
    {
      title: "Clean Calculator",
      description: "A minimal calculator extension for Chrome.",
      url: "https://chromewebstore.google.com/detail/clean-calculator-extensio/bmhlkhlncmgcdeicfehhpifjhgneenoc",
      linkText: "Learn more",
    },
  ]

  return (
    <main className="main">
      <div className="center">
        <div className="roman">IV</div>
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
