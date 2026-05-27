"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800">
      <div className="container max-w-6xl flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt="AGV GmbH"
            width={140}
            height={40}
            className="h-auto w-auto dark:invert"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/projects" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/shop" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Shop
          </Link>
          <Link href="/resources" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Resources
          </Link>
          <Link href="/blog" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/newsletter" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Newsletter
          </Link>
          <Link href="/contact" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80" : "max-h-0"}`}
      >
        <nav className="flex flex-col px-4 py-4 border-t border-zinc-800 bg-black/95 backdrop-blur-xl gap-1">
          <Link href="/projects" className="text-base text-zinc-400 hover:text-white transition-colors py-2" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/shop" className="text-base text-zinc-400 hover:text-white transition-colors py-2" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/resources" className="text-base text-zinc-400 hover:text-white transition-colors py-2" onClick={() => setMenuOpen(false)}>Resources</Link>
          <Link href="/blog" className="text-base text-zinc-400 hover:text-white transition-colors py-2" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/newsletter" className="text-base text-zinc-400 hover:text-white transition-colors py-2" onClick={() => setMenuOpen(false)}>Newsletter</Link>
          <Link href="/contact" className="text-base text-zinc-400 hover:text-white transition-colors py-2" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}