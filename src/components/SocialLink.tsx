type SocialLinkProps = {
  href: string
  label: 'LinkedIn' | 'GitHub'
}

export function SocialLink({ href, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200 transition hover:border-sky-300/40 hover:text-white"
    >
      {label === 'LinkedIn' ? <LinkedInIcon /> : <GitHubIcon />}
      {label}
    </a>
  )
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.98H3.58v11.03h3.36V8.98ZM7.18 5.56a1.94 1.94 0 1 0-3.88 0 1.94 1.94 0 0 0 3.88 0ZM20.7 13.69c0-3.32-1.77-4.86-4.13-4.86a3.56 3.56 0 0 0-3.2 1.76h-.05V8.98h-3.22v11.03h3.35v-5.46c0-1.44.27-2.84 2.06-2.84 1.76 0 1.79 1.65 1.79 2.93v5.37h3.35l.05-6.32Z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M12.03 2.25c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 2.85 8.13 6.8 9.45.5.09.68-.22.68-.48v-1.7c-2.76.6-3.34-1.18-3.34-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.33 1.08 2.9.83.09-.64.35-1.08.63-1.33-2.2-.25-4.52-1.1-4.52-4.9 0-1.08.39-1.97 1.02-2.66-.1-.25-.44-1.26.1-2.62 0 0 .83-.27 2.74 1.02a9.47 9.47 0 0 1 4.98 0c1.9-1.29 2.74-1.02 2.74-1.02.54 1.36.2 2.37.1 2.62.64.69 1.02 1.58 1.02 2.66 0 3.81-2.32 4.65-4.53 4.9.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48a9.97 9.97 0 0 0 6.78-9.45c0-5.5-4.46-9.96-9.96-9.96Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
