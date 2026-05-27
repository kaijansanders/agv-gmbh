import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for AGV GmbH.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="py-24 px-4">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight mb-8">Terms of Service</h1>
          <div className="prose prose-invert prose-zinc max-w-none space-y-6 text-zinc-400">
            <p>Last updated: May 2026</p>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and conditions of this agreement.
            </p>
            <h2 className="text-lg font-semibold text-white">Use of the Website</h2>
            <p>
              The content of this website is for general information purposes only. We reserve the right to modify the contents or discontinue aspects of the website at any time.
            </p>
            <h2 className="text-lg font-semibold text-white">Intellectual Property</h2>
            <p>
              All trademarks, service marks, and trade names appearing on this website are the property of their respective owners. Unauthorised use of any content on this website may violate copyright and trademark laws.
            </p>
            <h2 className="text-lg font-semibold text-white">Limitation of Liability</h2>
            <p>
              We shall not be held liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this website or inability to use the website.
            </p>
            <h2 className="text-lg font-semibold text-white">Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Germany. Any disputes shall be subject to the exclusive jurisdiction of the courts of Munich, Germany.
            </p>
            <h2 className="text-lg font-semibold text-white">Contact</h2>
            <p>
              For questions regarding these terms, contact us at:<br />
              contact@agv-gmbh.com
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}