import { parseFrontmatter, markdownToHtml } from "./markdown-parser"

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  content: string // HTML content
}

// Get all available post slugs by checking what files exist
export function getAllPostSlugs(): string[] {
  // Hardcode the list of posts (you'll need to update this when adding new posts)
  return ["hitchhikers-guide-agent-evals", "what-is-an-api"]
}

export async function getPostBySlug(slug: string): Promise<Post> {
  try {
    // Fetch the markdown file from /public/posts/
    const response = await fetch(`/posts/${slug}.md`)

    if (!response.ok) {
      throw new Error(`Post not found: ${slug}`)
    }

    const markdown = await response.text()

    // Parse frontmatter and content
    const { data, content } = parseFrontmatter(markdown)

    // Convert markdown to HTML
    const htmlContent = markdownToHtml(content)

    return {
      slug,
      title: (data.title as string) || "",
      date: (data.date as string) || "",
      description: (data.description as string) || "",
      tags: data.tags
        ? typeof data.tags === "string"
          ? data.tags.split(",").map((t: string) => t.trim())
          : Array.isArray(data.tags)
            ? data.tags
            : []
        : [],
      content: htmlContent,
    }
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error)
    throw new Error(`Post not found: ${slug}`)
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
