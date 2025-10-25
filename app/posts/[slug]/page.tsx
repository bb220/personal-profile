import { getAllPostSlugs, getPostBySlug, formatDate } from "@/lib/posts"
import type { Metadata } from "next"
import Link from "next/link"

// Generate static params for all posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Dynamic metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  return {
    title: `${post.title} - Brandon Bellero`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

// Main post page component
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  return (
    <main className="main">
      {/* Back navigation */}
      <div className="post-header">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>
      </div>

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
    </main>
  )
}
