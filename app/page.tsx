import Link from "next/link"

export default function Home() {
  const projects = [
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

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/brandon-bellero/" },
    { name: "X", url: "https://x.com/brandonbellero" },
    { name: "GitHub", url: "https://github.com/bb220" },
  ]

  // Hardcoded posts data for the homepage
  const posts = [
    {
      slug: "hitchhikers-guide-agent-evals",
      title: "The Hitchhiker's Guide to Agent Evals",
      description: "A practical introduction to agent applications and evaluations.",
      date: "October 24, 2025",
    },
    {
      slug: "what-is-an-api",
      title: "What is an API?",
      description: "The familiar concept at the center of our software-powered world.",
      date: "January 04, 2022",
    },
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
              <Link href={project.url} target="_blank" rel="noopener" className="title-link">
                <span className="head">{project.title}</span>
              </Link>
            </div>
            <p>{project.description}</p>
          </div>
        ))}
      </section>

      {/* III. Writing */}
      <section>
        <div className="center">
          <div className="roman">III</div>
          <div className="chapter">Writing</div>
        </div>
        {posts.map((post, index) => (
          <div key={post.slug} className="project">
            <div className="rule">
              <Link href={`/posts/${post.slug}`} className="title-link">
                <span className="head">{post.title}</span>
              </Link>
            </div>
            <div className="post-meta">{post.date}</div>
            <p>{post.description}</p>
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
