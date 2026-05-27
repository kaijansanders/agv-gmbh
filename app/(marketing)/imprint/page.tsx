import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Imprint",
  description: "Legal imprint for AGV GmbH.",
}

export default function ImprintPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="py-24 px-4">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight mb-8">Imprint</h1>

          <div className="prose prose-invert prose-zinc max-w-none space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-white mb-3">Company Information</h2>
              <p className="text-zinc-400">
                Achim Guha Versand GmbH<br />
                Wolfratshauser Str. 53<br />
                82049 Pullach im Isartal<br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">Commercial Register</h2>
              <p className="text-zinc-400">
                Registered in Munich, Germany<br />
                HRB number: 238008<br />
                VAT ID: DE281345671
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">Represented by</h2>
              <p className="text-zinc-400">Achim Guha, Managing Director</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
              <p className="text-zinc-400">
                Email: contact@agvgmbh.com
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">Responsible for Content</h2>
              <p className="text-zinc-400">
                Achim Guha<br />
                Achim Guha Versand GmbH<br />
                Wolfratshauser Str. 53<br />
                82049 Pullach im Isartal
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">Disclaimer</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The content of this website has been prepared with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with general law. We are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general law remain unaffected. However, liability in this regard is only possible from the point in time when a specific legal violation becomes known. Upon becoming aware of corresponding violations, we will remove this content immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}