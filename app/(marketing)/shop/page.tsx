import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Shop",
  description: "Tools and resources for bankless living.",
}

const shopItems = [
  {
    category: "Digital Identity",
    items: [
      { name: "RNS.id", url: "https://rns.id/?rc_by=jOovo8tl", desc: "Your Web3 username on Palau's official digital residency network. Blockchain identity — .pgua domains, Voyager Pass, and proof of digital citizenship backed by the Republic of Palau." },
    ],
  },
  {
    category: "Trading",
    items: [
      { name: "Proud Profits", url: "https://www.proudprofits.com/?via=cryptoscout24", desc: "Trading signals and market analysis." },
      { name: "MarketCipher", url: "https://marketciphertrading.com?ref=1652", desc: "Advanced trading indicators and tools." },
      { name: "TradingView", url: "https://www.tradingview.com/gopro/?share_your_love=cryptoscout24", desc: "Charts, analysis, and trading community." },
      { name: "The Grays Currency", url: "https://goptgc.com/#/ptgc-onboarding?referid=DarkTenor", desc: "Learn to trade crypto with conviction. Education platform." },
    ],
  },
  {
    category: "Newsletters & Media",
    items: [
      { name: "SXT Store", url: "https://www.SXTstore.com", desc: "The SXT newsletter community store." },
    ],
  },
  {
    category: "Hardware Wallets",
    items: [
      { name: "Ngrave", url: "https://www.ngrave.io/?sca_ref=2955467.R5rCWm8mZV&sca_source=CS24%20Website", desc: "Premium hardware wallet. Cold storage, maximum security." },
      { name: "Trezor", url: "https://trezor.go2cloud.org/SH4R", desc: "Open-source hardware wallet. Your keys, your coins." },
    ],
  },
  {
    category: "Wellness & Health",
    items: [
      { name: "Tesla HOME", url: "https://tesla-home.de/customer/?partnerid=100061", desc: "Water vitalization systems for the home. Structured water technology for daily hydration and wellness." },
      { name: "Tesla MARE", url: "https://share-way.de/customer/?partnerid=100094", desc: "Water treatment for pools, spas, and marine applications. Tesla technology scaled for larger systems." },
      { name: "AMARE", url: "https://amare.com/de-at/g10/1950597", desc: "Gut-brain axis supplements. The science of how gut health shapes mood, focus, and resilience." },
    ],
  },
]

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="py-24 px-4">
        <div className="container max-w-5xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">Shop</h1>
          <p className="text-xl text-zinc-400 mb-16">Tools, platforms, and resources we use and trust.</p>

          <div className="space-y-12">
            {shopItems.map((group) => (
              <div key={group.category}>
                <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">{group.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                        <span className="text-xs text-zinc-600 group-hover:text-blue-500 transition-colors">Visit →</span>
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