export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-slate-950/70 p-8 text-center shadow-2xl shadow-black/25 sm:p-12">
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent" />
        <p className="text-sm uppercase tracking-[0.34em] text-emerald-300">Projects</p>
        <h2 className="mt-4 text-5xl font-semibold text-white sm:text-7xl">Soon</h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-400">
          Nothing is published here yet. This space is being kept quiet until there is
          a real engineering build worth showing.
        </p>
        <div className="mx-auto mt-8 max-w-md rounded-md border border-dashed border-emerald-300/20 bg-black/20 px-5 py-4 font-mono text-sm text-slate-500">
          project_log.empty = true
        </div>
      </div>
    </section>
  )
}
