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
      <p className="dropcap">
        Welcome to my website, where I publish my <Link href="/projects">projects</Link> and{" "}
        <Link href="/posts">writing</Link>. The internet is a big place, so I appreciate you choosing to spend a moment here.
      </p>
      <h2 className="about-me-header">About Me</h2>
      <p>I build software and software-powered businesses. Along the way, I like to share my work and learnings.</p>
      <p>
        Currently, I'm building AI applications and{" "}
        <Link href="https://www.pippolabs.xyz/" target="_blank" rel="noopener">
          Pippo Labs
        </Link>
        {". "}
      </p>
    </main>
  )
}
