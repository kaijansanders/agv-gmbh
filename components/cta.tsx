"use client"

import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export function SubscribeForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 px-4 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600"
      />
      <button
        type="submit"
        className={buttonVariants({ size: "default", className: "rounded-full" })}
      >
        Subscribe
      </button>
    </form>
  )
}

export function HeroButtons() {
  return (
    <div className="flex gap-4 pt-4">
      <Link href="/projects" className={buttonVariants({ size: "lg", variant: "default" })}>
        Explore Projects
      </Link>
      <Link href="/contact" className={buttonVariants({ size: "lg", variant: "outline" })}>
        Contact
      </Link>
    </div>
  )
}

export function NewsletterCta() {
  return (
    <Link href="/newsletter" className={buttonVariants({ size: "lg" })}>
      Subscribe to Newsletter
    </Link>
  )
}