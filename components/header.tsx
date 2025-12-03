import Link from "next/link"

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="site-name">
        B. Bellero
      </Link>
    </header>
  )
}
