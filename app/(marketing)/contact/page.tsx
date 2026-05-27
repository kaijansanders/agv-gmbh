import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="py-24 px-4">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight mb-8">Contact</h1>
          <div className="space-y-6 text-zinc-400">
            <p>
              Achim Guha Versand GmbH<br />
              Wolfratshauser Str. 53<br />
              82049 Pullach im Isartal<br />
              Deutschland
            </p>
            <p>
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:contact@agvgmbh.com" className="hover:text-white transition-colors">
                contact@agvgmbh.com
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