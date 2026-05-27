import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on digital ventures, Web3, and technology from AGV GmbH.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="py-24 px-4">
        <div className="container max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">Blog</h1>
          <p className="text-xl text-zinc-400 mb-16">Insights on digital ventures, Web3 infrastructure, and emerging technology.</p>

          <div className="space-y-8">
            <article className="border-b border-zinc-900 pb-8">
              <p className="text-sm text-zinc-500 mb-3">May 2026 — Finance</p>
              <h2 className="text-2xl font-semibold mb-3 hover:text-zinc-300 transition-colors cursor-pointer">
                The Infrastructure Gap: Why Traditional Banking Fails Web3 Businesses
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Every week, another crypto company gets its bank account frozen. Not because they did anything wrong — but because their bank's algorithm decided they looked suspicious. Here's why this happens and what the right infrastructure looks like.
              </p>
            </article>

            <article className="border-b border-zinc-900 pb-8">
              <p className="text-sm text-zinc-500 mb-3">April 2026 — Technology</p>
              <h2 className="text-2xl font-semibold mb-3 hover:text-zinc-300 transition-colors cursor-pointer">
                Building AI Systems That Actually Work: Lessons from MARK v5
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Eight variations running in parallel, evolutionary selection, and a Darwinian approach to lead generation. What we learned from building a self-optimizing AI marketing system.
              </p>
            </article>

            <article className="border-b border-zinc-900 pb-8">
              <p className="text-sm text-zinc-500 mb-3">March 2026 — Markets</p>
              <h2 className="text-2xl font-semibold mb-3 hover:text-zinc-300 transition-colors cursor-pointer">
                Wolf Hour: Identifying Structural Mispricings in Prediction Markets
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                The four hours between 02:30 and 06:30 UTC show consistent spread widening in Polymarket markets. Not a glitch — a structural inefficiency. Here's how we're exploiting it.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}