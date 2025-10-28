"use client"

import { useEffect, useState } from "react"
import { getPostBySlug, formatDate, type Post } from "@/lib/posts"

export default function PostPageClient({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string }
}) {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadPost = async () => {
      try {
        // Unwrap params if it's a Promise
        const resolvedParams = await Promise.resolve(params)
        const slug = resolvedParams.slug

        const postData = await getPostBySlug(slug)
        setPost(postData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load post")
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [params])

  if (loading) {
    return (
      <main className="main">
        <div className="center">
          <p>Loading...</p>
        </div>
      </main>
    )
  }

  if (error || !post) {
    return (
      <main className="main">
        <div className="center">
          <p>Post not found</p>
        </div>
      </main>
    )
  }

  return (
    <main className="main">
      {/* Post article */}
      <article className="post-content">
        {/* Title and metadata */}
        <header>
          <h1 className="chapter">{post.title}</h1>
          <time dateTime={post.date} className="post-date">
            {formatDate(post.date)}
          </time>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="post-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Post content */}
        <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      <hr />
      <p className="center" style={{ opacity: 0.7, textIndent: 0, marginTop: "1.25rem", marginBottom: "3rem" }}>
        © {new Date().getFullYear()} Brandon Bellero
      </p>
    </main>
  )
}
