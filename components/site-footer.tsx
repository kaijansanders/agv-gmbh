"use client"

import * as React from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

function BookmarkButton({ className }: { className?: string }) {
  const [showHint, setShowHint] = React.useState(false)

  function addBookmark() {
    const url = window.location.href
    const title = document.title

    // IE / Edge (older)
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const external = window.external as unknown as Record<string, unknown> | undefined
      if (external && "AddFavorite" in external) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(external as unknown as { AddFavorite: (url: string, title: string) => void }).AddFavorite(url, title)
        return
      }
    } catch {
      // not supported
    }

    // Firefox (pre-70)
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sidebar = (window as unknown as { sidebar?: Record<string, unknown> }).sidebar
      if (sidebar && "addPanel" in sidebar) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(sidebar as unknown as { addPanel: (title: string, url: string, icon: string) => void }).addPanel(title, url, "")
        return
      }
    } catch {
      // not supported
    }

    // Modern browsers — show hint
    setShowHint(true)
    setTimeout(() => setShowHint(false), 4000)
  }

  return (
    <div className={cn("relative inline-block", className)}>
      <button
        onClick={addBookmark}
        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer"
        title="Bookmark this page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
        Bookmark this page
      </button>

      {showHint && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-zinc-800 text-zinc-300 text-xs rounded-xl px-4 py-3 shadow-xl border border-zinc-700 z-50">
          <p className="font-medium text-white mb-2">How to bookmark:</p>
          <p><strong>Mac:</strong> Press <kbd className="bg-zinc-700 px-1 rounded">⌘Cmd</kbd> + <kbd className="bg-zinc-700 px-1 rounded">D</kbd></p>
          <p><strong>Windows:</strong> Press <kbd className="bg-zinc-700 px-1 rounded">Ctrl</kbd> + <kbd className="bg-zinc-700 px-1 rounded">D</kbd></p>
        </div>
      )}
    </div>
  )
}

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t border-zinc-800", className)}>
      <div className="container max-w-6xl py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-heading text-xl font-semibold text-white mb-1">AGV GmbH</p>
            <BookmarkButton />
            <p className="text-sm text-zinc-400 leading-relaxed max-w-md mt-3">
              Digital Ventures. Infrastructure. Intelligence.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-white transition-colors text-sm underline underline-offset-4"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-white transition-colors text-sm underline underline-offset-4"
              >
                X
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-white transition-colors text-sm underline underline-offset-4"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-medium text-white mb-3">Company</p>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-medium text-white mb-3">Legal</p>
            <ul className="space-y-2">
              <li>
                <Link href="/imprint" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Imprint
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Achim Guha Versand GmbH. All rights reserved.
          </p>
          <p className="text-xs text-zinc-500">
            HRB 238008 · VAT DE281345671 · Wolfratshauser Str. 53, 82049 Pullach im Isartal
          </p>
        </div>
      </div>
    </footer>
  )
}