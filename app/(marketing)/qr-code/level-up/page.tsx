import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function LevelUpPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="py-24 px-4">
        <div className="container max-w-3xl">
          {/* Logo */}
          <div className="mb-8">
            <a
              href="https://i-levelup.com"
              target="_blank"
              rel="noreferrer"
              aria-label="i-levelup.com"
            >
              <Image
                src="/images/level-up-logo.jpg"
                alt="i-levelup logo"
                width={240}
                height={72}
                className="h-18 w-auto max-w-[240px]"
              />
            </a>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight mb-8">Level-Up</h1>

          {/* About text */}
          <div className="mb-10 p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <p className="text-zinc-300 leading-relaxed">
              We help individuals, entrepreneurs, and organizations level up their wealth, health,
              and understanding of transformative technologies such as Agentic AI, blockchain, digital
              assets, and preventive health. Through education, community, and real-world experience,
              we make the future easier to navigate.
            </p>
          </div>

          <div className="space-y-6 text-zinc-400">
            <p>
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:contact@i-levelup.com" className="hover:text-white transition-colors">
                contact@i-levelup.com
              </a>
            </p>
            <p>
              <strong className="text-white">Phone:</strong>{" "}
              <a href="tel:+4916090618737" className="hover:text-white transition-colors">
                +49 160 90618737
              </a>
            </p>
            <p>
              <strong className="text-white">WhatsApp:</strong>{" "}
              <a href="https://wa.me/4916090618737" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Message us
              </a>
            </p>
            <p>
              <strong className="text-white">Address:</strong><br />
              Achim Guha Versand GmbH<br />
              Wolfratshauser Str. 53<br />
              82049 Pullach im Isartal<br />
              Deutschland
            </p>
            <div className="pt-4">
              <a
                href="https://calendly.com/trustyfy"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ size: "lg" })}
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
