import { Metadata } from "next"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Page",
}

export default function PagePage({ params }: { params: { slug: string[] } }) {
  // Don't match paths that look like static files (e.g. llms.txt, robots.txt,
  // sitemap.xml). The Next.js app router should normally prioritize route
  // handlers and public/ files over catch-all pages, but in practice the
  // catch-all can shadow them on some Vercel builds. Bailing out with
  // notFound() here forces the request to fall through to the public/ folder
  // or the dedicated route handler at app/(marketing)/llms.txt/route.ts.
  if (params.slug.some((segment) => segment.includes("."))) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container max-w-3xl pt-32 pb-16">
        <h1 className="text-4xl font-semibold">Page</h1>
        <p className="mt-4 text-zinc-400">This page is coming soon.</p>
      </div>
    </main>
  )
}