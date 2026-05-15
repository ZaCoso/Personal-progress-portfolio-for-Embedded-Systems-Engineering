import { useState } from 'react'

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Dashboard', href: '#progress' },
  { label: 'Projects', href: '#projects' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070b]/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#overview"
          className="flex items-center gap-3 text-sm font-semibold tracking-wide text-white"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid size-9 place-items-center rounded-md border border-sky-300/30 bg-sky-400/10 text-sky-200">
            <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 10.75 12 4l8 6.75V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9.25Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>Embedded Systems Engineering</span>
        </a>

        <button
          type="button"
          className="rounded-md border border-white/10 px-3 py-2 text-sm text-slate-200 sm:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          Menu
        </button>

        <div className="hidden items-center gap-1 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 px-4 pb-4 sm:hidden">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm text-slate-200 transition hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
