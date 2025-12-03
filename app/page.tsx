import Link from "next/link"

export default function Home() {
  const socialLinks = [
    { name: "X", url: "https://x.com/brandonbellero" },
    { name: "GitHub", url: "https://github.com/bb220" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/brandon-bellero/" },
  ]

  return (
    <main className="main">
      {/* I. Note from the Author */}
      <div className="center">
        <div className="roman">I</div>
        <div className="chapter">A Note from the Author</div>
      </div>
      <p className="lead dropcap">
        Welcome to my website, where I publish my projects and writing.
        <br />
        <br />I build software and software-powered businesses and enjoy sharing my work and learnings along the way.
        <br />
        <br /> Currently, I'm building AI applications and{" "}
        <Link href="https://www.pippolabs.xyz/" target="_blank" rel="noopener">
          Pippo Labs
        </Link>
        {". "}Say hello on{" "}
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
            <Link href="https://www.trainrfit.com" target="_blank" rel="noopener" className="title-link">
              <span className="head">Trainr</span>
            </Link>
          </div>
          <p>Agentic AI fitness companion</p>
        </div>
        <div style={{ textAlign: "center", marginTop: "0.75rem" }}>
          <Link href="/projects" className="more-link">
            View all projects
          </Link>
        </div>

        <div className="project">
          <div className="rule">
            <Link href="/posts/hitchhikers-guide-agent-evals" className="title-link">
              <span className="head">The Hitchhiker's Guide to Agent Evals</span>
            </Link>
          </div>
          <div className="post-meta">October 24, 2025</div>
          <p>Practical introduction to agent applications and evaluations</p>
        </div>
        <div style={{ textAlign: "center", marginTop: "0.75rem" }}>
          <Link href="/posts" className="more-link">
            View all writing
          </Link>
        </div>
      </section>
    </main>
  )
}
