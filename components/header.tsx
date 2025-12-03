import Link from "next/link"

export function Header() {
  const socialLinks = [
    { name: "X", url: "https://x.com/brandonbellero" },
    { name: "GitHub", url: "https://github.com/bb220" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/brandon-bellero/" },
  ]

  return (
    <header className="site-header">
      <Link href="/" className="site-name">
        B. Bellero
      </Link>
      <div className="header-social-links">
        {socialLinks.map((link, i) => (
          <span key={link.name}>
            <Link href={link.url} target="_blank" rel="noopener" className="header-social-link">
              {link.name}
            </Link>
            {i < socialLinks.length - 1 && <span className="header-social-separator"> / </span>}
          </span>
        ))}
      </div>
    </header>
  )
}
