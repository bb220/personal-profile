import { marked } from "marked"

// Browser-compatible markdown parser using marked
interface FrontmatterData {
  [key: string]: string | string[]
}

export function parseFrontmatter(markdown: string): {
  data: FrontmatterData
  content: string
} {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
  const match = markdown.match(frontmatterRegex)

  if (!match) {
    return { data: {}, content: markdown }
  }

  const [, frontmatterStr, content] = match
  const data: FrontmatterData = {}

  // Parse YAML-style frontmatter
  frontmatterStr.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":")
    if (colonIndex > -1) {
      const key = line.slice(0, colonIndex).trim()
      const value = line.slice(colonIndex + 1).trim()
      data[key] = value
    }
  })

  return { data, content: content.trim() }
}

export function markdownToHtml(markdown: string): string {
  // Configure marked for better rendering
  marked.setOptions({
    gfm: true, // GitHub Flavored Markdown
    breaks: false, // Don't convert \n to <br>
  })

  // Convert markdown to HTML using marked
  return marked.parse(markdown) as string
}
