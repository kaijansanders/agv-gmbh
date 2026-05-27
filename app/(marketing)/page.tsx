import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container relative z-10 flex max-w-[64rem] flex-col items-center gap-6 text-center">
          <div className="rounded-full border border-zinc-800 bg-zinc-900/50 px-5 py-2 text-sm text-zinc-400 backdrop-blur-sm">
            Achim Guha Versand GmbH
          </div>
          
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight font-semibold leading-[1.05]">
            Digital Ventures.<br />
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Infrastructure.
            </span>
            <br />Intelligence.
          </h1>
          
          <p className="max-w-[42rem] text-lg sm:text-xl text-zinc-400 leading-relaxed">
            We develop and operate digital platforms, commerce systems, and online infrastructure across emerging technologies. Built for long-term evolution.
          </p>
          
          <div className="flex gap-4 pt-4">
            <Link href="/projects" className={buttonVariants({ size: "lg", variant: "default" })}>
              Explore Projects
            </Link>
            <Link href="/contact" className={buttonVariants({ size: "lg", variant: "outline" })}>
              Contact
            </Link>
          </div>
          
          <p className="text-sm text-zinc-600 pt-8">
            Pullach im Isartal, Deutschland
          </p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="bg-black py-24 px-4">
        <div className="container max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-16 text-center">
            Our Ventures
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="https://bankless.living" target="_blank" className="group relative col-span-2 row-span-2 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 p-8 hover:border-zinc-600 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-4 block">Finance Infrastructure</span>
                  <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">Trustyfy</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    Crypto-friendly business banking. Bank-grade infrastructure for those who have outgrown the need for permission. From bankless living to global commerce — your keys, your funds.
                  </p>
                  <div className="mt-4">
                    <a href="https://app.trustyfy.com?by=101a44" target="_blank" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors">
                      Learn more <span>→</span>
                    </a>
                  </div>

                  <div className="mt-10 pt-8 border-t border-zinc-800">
                    <span className="text-xs font-medium text-emerald-400 uppercase tracking-widest mb-4 block">RWA Infrastructure</span>
                    <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">Tokenee</h3>
                    <p className="text-zinc-400 text-base leading-relaxed">
                      Tokenize real world assets and open your business to both people and AI agents. The financial infrastructure for the AI age.
                    </p>
                    <div className="mt-4">
                      <a href="https://tokenee.com" target="_blank" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors">
                        Learn more <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link href="/projects" className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-600 transition-all duration-300">
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3 block">Lead Gen</span>
              <h3 className="text-2xl font-semibold text-white mb-2">MARK v5</h3>
              <p className="text-zinc-400 text-sm">AI-powered lead generation systems.</p>
            </Link>

            <Link href="/projects" className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-600 transition-all duration-300">
              <span className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-3 block">AI Infrastructure</span>
              <h3 className="text-2xl font-semibold text-white mb-2">Smartyfy</h3>
              <p className="text-zinc-400 text-sm">The wallet layer for AI agents.</p>
            </Link>
            
            <Link href="https://aegisshield.io" target="_blank" className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-600 transition-all duration-300">
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3 block">Security</span>
              <h3 className="text-2xl font-semibold text-white mb-2">AegisShield</h3>
              <p className="text-zinc-400 text-sm">AI scam risk analysis.</p>
            </Link>
            
            <Link href="/projects" className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-600 transition-all duration-300">
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3 block">Trading</span>
              <h3 className="text-2xl font-semibold text-white mb-2">Phoenix</h3>
              <p className="text-zinc-400 text-sm">Polymarket trading bot.</p>
            </Link>
            
            <Link href="https://sixthsociety.com" target="_blank" className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-600 transition-all duration-300">
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3 block">Brand & Labs</span>
              <h3 className="text-2xl font-semibold text-white mb-2">Sixthsociety</h3>
              <p className="text-zinc-400 text-sm">Community · Labs · Angel Syndicate. Spinning off Trustyfy and Tokenee.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-zinc-950 py-32 px-4">
        <div className="container max-w-4xl text-center">
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
            Built for long-term<br />digital evolution.
          </p>
          <p className="mt-8 text-lg text-zinc-500 max-w-2xl mx-auto">
            We operate at the intersection of infrastructure, finance, and emerging technology. Every venture we build is designed to compound over time — in value, reach, and resilience.
          </p>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-black py-24 px-4 border-t border-zinc-900">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Stay informed.
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Insights on digital ventures, Web3 infrastructure, and the future of finance. Monthly, no spam.
          </p>
          <Link href="/newsletter" className={buttonVariants({ size: "lg" })}>
            Subscribe to Newsletter
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-16 px-4">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-4">AGV GmbH</h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                Achim Guha Versand GmbH<br />
                Wolfratshauser Str. 53<br />
                82049 Pullach im Isartal<br />
                Deutschland
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/projects" className="text-zinc-500 hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="/blog" className="text-zinc-500 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/newsletter" className="text-zinc-500 hover:text-white transition-colors">Newsletter</Link></li>
                <li><Link href="/contact" className="text-zinc-500 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/imprint" className="text-zinc-500 hover:text-white transition-colors">Imprint</Link></li>
                <li><Link href="/privacy" className="text-zinc-500 hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-zinc-500 hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-600">
              © {new Date().getFullYear()} Achim Guha Versand GmbH. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="https://www.linkedin.com/in/cryptoscout24/" target="_blank" className="text-zinc-600 hover:text-white transition-colors text-sm">LinkedIn</Link>
              <Link href="https://x.com/cryptoscout24" target="_blank" className="text-zinc-600 hover:text-white transition-colors text-sm">X</Link>
              <Link href="https://github.com/agv-gmbh" target="_blank" className="text-zinc-600 hover:text-white transition-colors text-sm">GitHub</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}