import Link from "next/link"

export default function Home() {
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
        Hello. I'm a product manager and software engineer. I'm interested in finding new and improved ways of doing things and building businesses around them. This site hosts my blog posts and projects. Say hello on{" "}
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

      {/* II. Featured */}
      <section id="featured">
        <div className="center">
          <div className="roman">II</div>
          <div className="chapter">Featured</div>
        </div>

        <div className="project">
          <div className="rule">
            <Link href="/posts/hitchhikers-guide-agent-evals" className="title-link">
              <span className="head">The Hitchhiker's Guide to Agent Evals</span>
            </Link>
          </div>
          <div className="post-meta">October 24, 2025</div>
          <p>A practical introduction to agent applications and evaluations.</p>
        </div>
        <div style={{ textAlign: "center", marginTop: "0.75rem" }}>
          <Link href="/posts" className="more-link">
            All posts
          </Link>
        </div>

        <div className="project">
          <div className="rule">
            <Link href="https://www.coachaiapp.info" target="_blank" rel="noopener" className="title-link">
              <span className="head">CoachAI</span>
            </Link>
          </div>
          <p>An agentic AI fitness companion that builds personalized programs and provides real-time coaching.</p>
        </div>
        <div style={{ textAlign: "center", marginTop: "0.75rem" }}>
          <Link href="/projects" className="more-link">
            All projects
          </Link>
        </div>
      </section>

      <hr />
      <p className="center" style={{ opacity: 0.7, textIndent: 0, marginTop: "1.25rem", marginBottom: "3rem" }}>
        © {new Date().getFullYear()} Brandon Bellero
      </p>
    </main>
  )
}
