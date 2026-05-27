import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login",
  description: "VIP access.",
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="py-24 px-4">
        <div className="container max-w-md mx-auto">
          <h1 className="text-3xl font-semibold tracking-tight mb-8 text-center">
            VIP Access
          </h1>
          <div className="rounded-2xl border border-zinc-800 p-8">
            <p className="text-zinc-400 text-center">
              Login functionality coming soon.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}