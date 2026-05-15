import { SocialLink } from './SocialLink'

const socialLinks = [
  { label: 'LinkedIn' as const, href: 'https://www.linkedin.com/in/santiago-zacar%C3%ADas-3a3978319/' },
  { label: 'GitHub' as const, href: 'https://github.com/ZaCoso' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 text-sm text-slate-500">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-slate-300">Embedded Systems Engineering Progress Portfolio</p>
          <p className="mt-1">Santiago Zacarías | Electronics | Embedded Systems | English C2 | HSK 6 Candidate</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {socialLinks.map((link) => (
            <SocialLink key={link.label} href={link.href} label={link.label} />
          ))}
        </div>
      </div>
    </footer>
  )
}
