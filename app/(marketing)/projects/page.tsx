import { buttonVariants } from "@/components/ui/button"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="py-24 px-4">
        <div className="container max-w-6xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">Our Ventures</h1>
          <p className="text-xl text-zinc-400 mb-16">Digital platforms and businesses across finance, technology, and media.</p>

          <div className="grid grid-cols-1 gap-8">

            {/* Trustyfy */}
            <div className="rounded-2xl border border-zinc-800 p-8 md:p-12 hover:border-zinc-700 transition-colors">
              <span className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-3 block">Finance Infrastructure</span>
              <h2 className="text-3xl font-semibold mb-3">Trustyfy</h2>
              <p className="text-zinc-400 max-w-xl mb-4">
                Crypto-friendly business banking for the Web3 era. Bank-grade infrastructure for those who have outgrown the need for permission. Multi-currency wallets, Visa cards, and SWIFT transfers.
              </p>
              <p className="text-zinc-500 max-w-xl mb-6">
                From bankless living to global commerce — your keys, your funds. The alternative to traditional banking for businesses operating in the digital asset space.
              </p>
              <a href="https://app.trustyfy.com?by=101a44" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors">
                Learn more <span>→</span>
              </a>
            </div>

            {/* Tokenee */}
            <div className="rounded-2xl border border-zinc-800 p-8 md:p-12 hover:border-zinc-700 transition-colors">
              <span className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-3 block">RWA Infrastructure</span>
              <h2 className="text-3xl font-semibold mb-3">Tokenee</h2>
              <p className="text-zinc-400 max-w-xl mb-4">
                The financial infrastructure for the AI age. Tokenize real world assets and open your business to both people and AI agents.
              </p>
              <p className="text-zinc-500 max-w-xl mb-4">
                Trade, invest, and transact without middlemen, borders, transaction costs, or delays. Serving customers across 19 countries with $2.8M raised.
              </p>
              <p className="text-zinc-500 max-w-xl mb-6">
                Incubation by Sixth Society. For asset managers, family offices, and real estate funds looking to tokenize and access AI-native finance.
              </p>
              <a href="https://tokenee.com" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors">
                Learn more <span>→</span>
              </a>
            </div>

            {/* Bankless Living */}
            <div className="rounded-2xl border border-zinc-800 p-8 md:p-12 hover:border-zinc-700 transition-colors">
              <span className="text-xs font-medium text-purple-400 uppercase tracking-widest mb-3 block">Education & Brand</span>
              <h2 className="text-3xl font-semibold mb-3">Bankless Living</h2>
              <p className="text-zinc-400 max-w-xl mb-4">
                The knowledge platform for living beyond the reach of traditional banks. Self-custody wallets, crypto-friendly accounts, and global financial access — explained plainly.
              </p>
              <p className="text-zinc-500 max-w-xl mb-4">
                For those who outgrew permission. In-depth guides on best self-custody wallets, crypto-friendly bank rankings, and how to open a global account in 2026.
              </p>
              <p className="text-zinc-500 max-w-xl mb-6">
                Documenting the alternative: financial infrastructure built on open protocols, self-custody, and global access.
              </p>
              <a href="https://bankless.living" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/50 hover:border-purple-500 text-purple-300 font-medium transition-colors">
                Visit <span>→</span>
              </a>
            </div>

            {/* Smartyfy */}
            <div className="rounded-2xl border border-zinc-800 p-8 md:p-12 hover:border-zinc-700 transition-colors">
              <span className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-3 block">AI Infrastructure</span>
              <h2 className="text-3xl font-semibold mb-3">Smartyfy</h2>
              <p className="text-zinc-400 max-w-xl mb-4">
                The wallet layer for AI agents. Give AI agents the ability to hold, send, and execute DeFi transactions — multi-chain wallets any agent can control via API or natural language.
              </p>
              <p className="text-zinc-500 max-w-xl mb-4">
                An AI agent without a wallet is a worker without a bank account. Smartyfy enables: multi-chain wallets, DeFi execution (swap, stake, lend, borrow), wallet monitoring and alerting, transaction history and analytics.
              </p>
              <p className="text-zinc-500 max-w-xl mb-6">
                Free tier: 1 wallet, Ethereum + Polygon, 50 transactions/month. Pro tier ($29/mo): 10 wallets, all major chains, 10,000 transactions/month, priority API, webhook notifications.
              </p>
              <a href="https://calendly.com/trustyfy" target="_blank" rel="noreferrer" className={buttonVariants({ size: "lg" })}>
                Book a Call
              </a>
            </div>

            {/* Phoenix */}
            <div className="rounded-2xl border border-zinc-800 p-8 md:p-12 hover:border-zinc-700 transition-colors">
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3 block">Trading</span>
              <h2 className="text-3xl font-semibold mb-3">Phoenix</h2>
              <p className="text-zinc-400 max-w-xl mb-6">
                Polymarket trading bot with wallet signal engine and Wolf Hour spread analysis. Tracks top traders and identifies structural mispricings in prediction markets.
              </p>
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-500 font-medium">
                Wallet funding pending
              </span>
            </div>

            {/* AegisShield */}
            <div className="rounded-2xl border border-zinc-800 p-8 md:p-12 hover:border-zinc-700 transition-colors">
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3 block">Security</span>
              <h2 className="text-3xl font-semibold mb-3">AegisShield</h2>
              <p className="text-zinc-400 max-w-xl mb-6">
                AI-powered scam risk analysis and due diligence platform. Scam risk scoring for crypto projects, meme coins, and investment opportunities.
              </p>
              <a href="https://calendly.com/trustyfy" target="_blank" rel="noreferrer" className={buttonVariants({ size: "lg" })}>
                Book a Call
              </a>
            </div>

            {/* MARK v5 */}
            <div className="rounded-2xl border border-zinc-800 p-8 md:p-12 hover:border-zinc-700 transition-colors">
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3 block">Lead Generation</span>
              <h2 className="text-3xl font-semibold mb-3">MARK v5</h2>
              <p className="text-zinc-400 max-w-xl mb-4">
                AI-powered multi-channel lead generation system. Evolutionary algorithm testing 8 variations in parallel to identify highest-converting signals across multiple channels.
              </p>
              <p className="text-zinc-500 max-w-xl mb-6">
                Real-time signal processing across complaint forums, funding databases, on-chain activity, and regulatory channels. Continuous evolution drives consistent lead flow.
              </p>
              <a href="https://calendly.com/trustyfy" target="_blank" rel="noreferrer" className={buttonVariants({ size: "lg" })}>
                Book a Call
              </a>
            </div>

            {/* Sixthsociety */}
            <div className="rounded-2xl border border-zinc-800 p-8 md:p-12 hover:border-zinc-700 transition-colors">
              <span className="text-xs font-medium text-amber-400 uppercase tracking-widest mb-3 block">Brand & Labs</span>
              <h2 className="text-3xl font-semibold mb-3">Sixthsociety</h2>
              <p className="text-zinc-400 max-w-xl mb-4">
                The most exclusive membership on the Blockchain. A community of daring entrepreneurs and investors learning, building, and leading the blockchain industry of the future.
              </p>
              <p className="text-zinc-500 max-w-xl mb-2">
                Three pillars: Community (networking, education, events) · Blockchain Labs (building useful software, no tokens or meme coins) · Angel Syndicate (startups pitch directly to members).
              </p>
              <p className="text-zinc-500 max-w-xl mb-6">
                Spinning off Trustyfy and Tokenee. Tokenee Select — high APY tokenized fund for members.
              </p>
              <a href="https://sixthsociety.com" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-amber-500/50 hover:border-amber-500 text-amber-300 font-medium transition-colors">
                Visit <span>→</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}