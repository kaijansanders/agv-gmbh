import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Insights on digital ventures, Web3 infrastructure, and the future of finance. Monthly, no spam.",
}

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="py-24 px-4">
        <div className="container max-w-2xl text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            Stay informed.
          </h1>
          <p className="text-xl text-zinc-400 mb-8">
            Monthly insights on digital ventures, Web3 infrastructure, and the future of finance. No spam, unsubscribe anytime.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
            >
              Subscribe
            </button>
          </form>

          <div className="mt-6">
            <style dangerouslySetInnerHTML={{ __html: `
              .libutton {
                display: inline-flex;
                flex-direction: column;
                justify-content: center;
                padding: 7px;
                text-align: center;
                outline: none;
                text-decoration: none !important;
                color: #ffffff !important;
                width: 200px;
                height: 32px;
                border-radius: 16px;
                background-color: #0A66C2;
                font-family: "SF Pro Text", Helvetica, sans-serif;
                margin: 0 auto;
              }
            ` }} />
            <a
              className="libutton"
              href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7355643652309676032"
              target="_blank"
              rel="noreferrer"
            >
              Subscribe on LinkedIn
            </a>
          </div>

          <p className="text-sm text-zinc-600 mt-6">
            Join subscribers across Web3, fintech, and digital business.
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-900 py-16 px-4">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-semibold mb-8">Recent Issues</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-4 border-b border-zinc-900">
              <div className="text-left">
                <p className="text-sm text-zinc-500 mb-1">May 2026</p>
                <p className="text-zinc-300">Web3 Banking Infrastructure: What's Working in 2026</p>
              </div>
              <span className="text-zinc-600 text-sm">→</span>
            </div>
            <div className="flex items-center justify-between py-4 border-b border-zinc-900">
              <div className="text-left">
                <p className="text-sm text-zinc-500 mb-1">April 2026</p>
                <p className="text-zinc-300">The Compliance-First Approach to Crypto Banking</p>
              </div>
              <span className="text-zinc-600 text-sm">→</span>
            </div>
            <div className="flex items-center justify-between py-4 border-b border-zinc-900">
              <div className="text-left">
                <p className="text-sm text-zinc-500 mb-1">March 2026</p>
                <p className="text-zinc-300">Prediction Markets and the Future of Information</p>
              </div>
              <span className="text-zinc-600 text-sm">→</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}