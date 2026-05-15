import { SocialLink } from './SocialLink'
import profilePhoto from '../assets/Miscellaneous/foto_perfil_4x4.jpg'

const badges = [
  'Electronics',
  'Embedded Systems',
  'Mathematics',
  'English C2',
  'HSK 6 Candidate',
  'Firmware',
]

const socialLinks = [
  { label: 'LinkedIn' as const, href: 'https://www.linkedin.com/in/santiago-zacar%C3%ADas-3a3978319/' },
  { label: 'GitHub' as const, href: 'https://github.com/ZaCoso' },
]

const profilePhotoSrc = profilePhoto
const profilePhotoExamplePath = './profile/profile-photo.jpg'

export function Hero() {
  return (
    <section
      id="overview"
      className="mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
          Embedded Systems Engineering
        </h1>
        <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-300">
          Documenting the technical path of an engineering student building real
          competence in electronics, embedded systems, mathematics, and languages.
        </p>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
          I am building my path as an embedded systems engineer by combining rigorous
          electronics theory, practical systems thinking, technical English, Chinese
          study, programming, mathematics, projects, and consistent progress tracking.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#progress"
            className="inline-flex w-fit items-center justify-center rounded-md bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-300"
          >
            Dashboard
          </a>
          <a
            href="#projects"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-sky-300/40 hover:bg-white/[0.07]"
          >
            Projects
          </a>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-black/40">
          <div className="grid gap-5 sm:grid-cols-[150px_1fr] sm:items-center">
            {profilePhotoSrc ? (
              <img
                src={profilePhotoSrc}
                alt="Profile"
                className="aspect-square rounded-lg border border-sky-300/30 object-cover"
              />
            ) : (
              <div className="grid aspect-square place-items-center rounded-lg border border-dashed border-sky-300/30 bg-white/[0.035] p-3 text-center text-sm text-slate-500">
                <span>
                  Profile photo
                  <span className="mt-2 block break-all font-mono text-[11px] text-slate-600">
                    {profilePhotoExamplePath}
                  </span>
                </span>
              </div>
            )}
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-sky-300">Personal identity</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Santiago Zacarías</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                <strong className='text-white'>Avionics Technician</strong> from {' '}
                <a
                  href="https://www.impatrq.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-sky-300 underline decoration-sky-300/40 underline-offset-4 transition hover:text-sky-200"
                >
                  IMPA
                </a>{' '}
                <br/>


                <strong className='text-white'>Electronics Engineering</strong> student at{' '}
                <a
                  href="https://www.uade.edu.ar/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-sky-300 underline decoration-sky-300/40 underline-offset-4 transition hover:text-sky-200"
                >
                  UADE
                </a>{' '}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <SocialLink key={link.label} href={link.href} label={link.label} />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-5 border-t border-white/10 pt-5">
            <div className="grid gap-3 font-mono text-sm text-slate-300">
              <div className="rounded-md bg-white/[0.03] p-4">
                <span className="text-violet-300">study</span>
                <span className="text-slate-500">.</span>roadmap
                <span className="text-slate-500"> = </span>
                <span className="text-emerald-300">books</span>
              </div>
              <div className="rounded-md bg-white/[0.03] p-4">
                <span className="text-violet-300">progress</span>
                <span className="text-slate-500">.</span>dashboard
                <span className="text-slate-500"> = </span>
                <span className="text-sky-300">achievements</span>
              </div>
              <div className="rounded-md bg-white/[0.03] p-4">
                <span className="text-violet-300">projects</span>
                <span className="text-slate-500">.</span>status
                <span className="text-slate-500"> = </span>
                <span className="text-emerald-300">soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
