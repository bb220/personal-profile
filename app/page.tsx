import Link from "next/link"

export default function Home() {
  const projects = [
    {
      title: "CoachAI",
      description:
        "A fitness app with an agentic AI that builds programs, provides personal training, and logs workouts.",
      url: "https://www.coachaiapp.info",
      linkText: "Try it out",
    },
    {
      title: "DinnerPlanner",
      description:
        "An AI-powered meal planning agent that suggests recipes, scales portions, and auto-generates shopping lists tailored to your preferences and dietary needs.",
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

  const writing = [
    {
      title: "What is an API?",
      description: "The familiar concept at the center of our software‑powered world.",
      url: "https://substack.com/home/post/p-142761730",
      linkText: "Read the post",
    },
  ]

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/brandon-bellero/" },
    { name: "X", url: "https://x.com/brandonbellero" },
    { name: "GitHub", url: "https://github.com/bb220" },
  ]

  return (
    <main className="main">
      {/* I. Note from the Author */}
      <div className="center">
        <div className="roman">I</div>
        <div className="chapter">A Note from the Author</div>
      </div>
      <p className="lead dropcap">
        Welcome. I'm a product manager with a software engineering background. This page lists my personal projects and
        writing. If something sparks your curiosity, say hello on{" "}
        {socialLinks.map((link, i) => (
          <span key={link.name}>
            <Link href={link.url} target="_blank" rel="noopener">
              {link.name}
            </Link>
            {i < socialLinks.length - 1 && (i === socialLinks.length - 2 ? ", or " : ", ")}
          </span>
        ))}
        .
      </p>

      {/* II. Projects */}
      <section>
        <div className="center">
          <div className="roman">II</div>
          <div className="chapter">Projects</div>
        </div>

        {projects.map((project, index) => (
          <div key={index} className="project">
            <div className="rule">
              {index + 1}. <span className="head">{project.title}</span>
            </div>
            <p>
              {project.description}{" "}
              <Link href={project.url} target="_blank" rel="noopener">
                {project.linkText}
              </Link>
              .
            </p>
          </div>
        ))}
      </section>

      {/* III. Writing */}
      <section>
        <div className="center">
          <div className="roman">III</div>
          <div className="chapter">Writing</div>
        </div>
        {writing.map((article, index) => (
          <div key={index} className="project">
            <div className="rule">
              {index + 1}. <span className="head">{article.title}</span>
            </div>
            <p>
              {article.description}{" "}
              <Link href={article.url} target="_blank" rel="noopener">
                {article.linkText}
              </Link>
              .
            </p>
          </div>
        ))}
      </section>

      <hr />
      <p className="center" style={{ opacity: 0.7, textIndent: 0, marginTop: "1.25rem" }}>
        © {new Date().getFullYear()} Brandon Bellero
      </p>
    </main>
  )
}
