import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resources",
  description: "Tools and calculators for bankless living.",
}

const resources = [
  {
    category: "Tools",
    items: [
      {
        name: "Crypto - Fiat Calculator",
        url: "https://www.bankless.living/tools/crypto-fiat-calculator",
        desc: "Calculate crypto to fiat conversions instantly.",
      },
      {
        name: "Take A Quiz",
        url: "https://bankless.living/tools/self-custody-quiz",
        desc: "Find the right self-custody setup for your needs.",
      },
      {
        name: "Crypto Banking Selector",
        url: "https://bankless.living/tools/crypto-banking-selector",
        desc: "Choose the right crypto-friendly bank for your situation.",
      },
      {
        name: "Wallet Comparison",
        url: "https://bankless.living/tools/wallet-comparison-matrix",
        desc: "Compare self-custody wallets side by side.",
      },
    ],
  },
  {
    category: "YouTube",
    items: [
      {
        name: "Bankless Living",
        url: "https://youtube.com/@banklessliving?si=Ejz7GPb6Mef52POM",
        desc: "Videos on bankless living, crypto, and financial sovereignty.",
      },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="py-24 px-4">
        <div className="container max-w-5xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">Resources</h1>
          <p className="text-xl text-zinc-400 mb-16">Free tools for bankless living.</p>

          <div className="space-y-12">
            {resources.map((group) => (
              <div key={group.category}>
                <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">{group.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {group.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group rounded-2xl border border-zinc-800 p-6 hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <p className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{item.name}</p>
                        <p className="text-sm text-zinc-400">{item.desc}</p>
                      </div>
                      <div className="mt-4">
                        <span className="text-xs text-zinc-600 group-hover:text-blue-500 transition-colors">Open →</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}