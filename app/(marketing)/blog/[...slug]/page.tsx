import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog Post",
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container max-w-3xl pt-32 pb-16">
        <h1 className="text-4xl font-semibold">Blog Post</h1>
        <p className="mt-4 text-zinc-400">This post is coming soon.</p>
      </div>
    </main>
  )
}