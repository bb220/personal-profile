import fs from "fs"
import path from "path"
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

const postsDirectory = path.join(process.cwd(), "public/posts")

export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.filter((fileName) => fileName.endsWith(".md")).map((fileName) => fileName.replace(/\.md$/, ""))
  } catch (error) {
    console.error("Error reading posts directory:", error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Parse frontmatter and content
    const { data, content } = matter(fileContents)

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
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
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
