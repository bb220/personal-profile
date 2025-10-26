import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  content: string // HTML content
}

// List of available post slugs
const POST_SLUGS = ["hitchhikers-guide-agent-evals", "what-is-an-api"]

export function getAllPostSlugs(): string[] {
  return POST_SLUGS
}

export async function getPostBySlug(slug: string): Promise<Post> {
  // Fetch markdown file from public directory
  const response = await fetch(`/posts/${slug}.md`)
  if (!response.ok) {
    throw new Error(`Post not found: ${slug}`)
  }
  const markdown = await response.text()

  // Parse frontmatter and content
  const { data, content } = matter(markdown)

  // Convert markdown to HTML
  const processedContent = await remark().use(html, { sanitize: false }).process(content)

  const htmlContent = processedContent.toString()

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    tags: data.tags || [],
    content: htmlContent,
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getAllPostSlugs()
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)))

  // Sort by date descending
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

// Helper to format dates
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
