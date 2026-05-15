import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#05070b] text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.16),transparent_26%),radial-gradient(circle_at_78%_6%,rgba(139,92,246,0.14),transparent_24%),linear-gradient(180deg,#05070b_0%,#0b1018_48%,#06080d_100%)]" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
