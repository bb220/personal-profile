"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function PostsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Hardcoded posts data matching the homepage
  const posts = [
    {
      slug: "hitchhikers-guide-agent-evals",
      title: "The Hitchhiker's Guide to Agent Evals",
      description: "Practical introduction to agent applications and evaluations",
      date: "October 24, 2025",
    },
    {
      slug: "what-is-an-api",
      title: "What is an API?",
      description: "The familiar concept at the center of our software-powered world",
      date: "January 04, 2022",
    },
  ]

  return (
    <main className="main">
      <div className="center">
        <div className="roman">IV</div>
        <div className="chapter">Writing</div>
      </div>
      {posts.map((post) => (
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
    </main>
  )
}
