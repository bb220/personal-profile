"use client"
import PostPageClient from "./post-client"

export default function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  return <PostPageClient params={params} />
}
