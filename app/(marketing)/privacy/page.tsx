import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for AGV GmbH.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="py-24 px-4">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight mb-8">Privacy Policy</h1>
          <div className="prose prose-invert prose-zinc max-w-none space-y-6 text-zinc-400">
            <p>Last updated: May 2026</p>
            <p>
              Achim Guha Versand GmbH ("we", "us", or "our") operates this website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website and the choices you have associated with that data.
            </p>
            <h2 className="text-lg font-semibold text-white">Data We Collect</h2>
            <p>We collect information you provide directly, such as your email address when you subscribe to our newsletter or contact us via our contact form.</p>
            <h2 className="text-lg font-semibold text-white">Use of Data</h2>
            <p>We use the collected data for: providing and maintaining our website, notifying you about changes to our website, providing customer support, gathering analysis to improve our website, and sending newsletters you have subscribed to.</p>
            <h2 className="text-lg font-semibold text-white">Cookies</h2>
            <p>We use cookies and similar tracking technologies to track activity on our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
            <h2 className="text-lg font-semibold text-white">Contact</h2>
            <p>For questions about this privacy policy, contact us at:<br />contact@agvgmbh.com<br />Achim Guha Versand GmbH, Wolfratshauser Str. 53, 82049 Pullach im Isartal, Deutschland</p>
          </div>
        </div>
      </section>
    </main>
  )
}