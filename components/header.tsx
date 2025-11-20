"use client"

import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <Link href="/" className="site-name">
          B. Bellero
        </Link>
        <button className="menu-button" onClick={toggleMenu} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </header>

      {/* Menu overlay */}
      {isMenuOpen && (
        <>
          <div className="menu-overlay" onClick={closeMenu} />
          <nav className="menu-panel">
            <button className="menu-close" onClick={closeMenu} aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ul className="menu-list">
              <li>
                <Link href="/posts" onClick={closeMenu}>
                  <span className="menu-roman">III</span>
                  <span className="menu-section">Writing</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" onClick={closeMenu}>
                  <span className="menu-roman">IV</span>
                  <span className="menu-section">Projects</span>
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  )
}
