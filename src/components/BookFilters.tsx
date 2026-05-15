import type { Status } from '../types'

type BookFiltersProps = {
  categories: string[]
  search: string
  status: Status | 'All'
  category: string
  onSearchChange: (value: string) => void
  onStatusChange: (value: Status | 'All') => void
  onCategoryChange: (value: string) => void
}

const statuses: Array<Status | 'All'> = ['All', 'Completed', 'In Progress', 'Not Started']

export function BookFilters({
  categories,
  search,
  status,
  category,
  onSearchChange,
  onStatusChange,
  onCategoryChange,
}: BookFiltersProps) {
  return (
    <div className="grid gap-3 rounded-lg border border-white/10 bg-slate-950/70 p-4 sm:grid-cols-[1.2fr_0.8fr_0.8fr]">
      <label className="grid gap-2 text-sm text-slate-300">
        <span>Search</span>
        <input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Book name or author"
          className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2.5 text-white outline-none transition placeholder:text-slate-600 focus:border-sky-300/60"
        />
      </label>
      <label className="grid gap-2 text-sm text-slate-300">
        <span>Status</span>
        <select
          value={status}
          onChange={(event) => onStatusChange(event.target.value as Status | 'All')}
          className="rounded-md border border-white/10 bg-[#0b1018] px-3 py-2.5 text-white outline-none transition focus:border-sky-300/60"
        >
          {statuses.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm text-slate-300">
        <span>Category</span>
        <select
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="rounded-md border border-white/10 bg-[#0b1018] px-3 py-2.5 text-white outline-none transition focus:border-sky-300/60"
        >
          <option>All</option>
          {categories.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
    </div>
  )
}
