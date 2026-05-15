import type { Book } from '../types'
import { ProgressBar } from './ProgressBar'

type BookCardProps = {
  book: Book
}

function getInitials(title: string) {
  return title
    .split(' ')
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

export function BookCard({ book }: BookCardProps) {
  const statusClass =
    book.status === 'Completed'
      ? 'bg-emerald-400/10 text-emerald-200'
      : book.status === 'In Progress'
        ? 'bg-sky-400/10 text-sky-200'
        : 'bg-violet-400/10 text-violet-200'

  return (
    <article className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:border-violet-300/30 sm:grid-cols-[120px_1fr]">
      {book.coverImage ? (
        <img
          src={book.coverImage}
          alt={`${book.title} cover`}
          className="aspect-[3/4] w-full rounded-md object-cover sm:w-[120px]"
        />
      ) : (
        <div className="flex aspect-[3/4] w-full flex-col justify-between rounded-md border border-sky-300/20 bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950 p-4 sm:w-[120px]">
          <span className="font-mono text-2xl font-semibold text-sky-200">
            {getInitials(book.title)}
          </span>
          <span className="text-xs leading-4 text-slate-400">{book.title}</span>
        </div>
      )}

      <div className="min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{book.title}</h3>
            <p className="mt-1 text-sm leading-5 text-slate-400">{book.author}</p>
          </div>
          <span className={`whitespace-nowrap rounded-full px-3 py-1 text-xs ${statusClass}`}>
            {book.status}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
          <span className="rounded-full bg-white/[0.05] px-3 py-1">{book.pages} pages</span>
          <span className="rounded-full bg-white/[0.05] px-3 py-1">{book.category}</span>
          <span className="rounded-full bg-white/[0.05] px-3 py-1">Start: {book.startDate}</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {book.fields.map((field) => (
            <span
              key={field}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300"
            >
              {field}
            </span>
          ))}
        </div>

        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-slate-500">Book progress</span>
            <span className="font-mono text-slate-200">{book.progress}%</span>
          </div>
          <ProgressBar value={book.progress} accent={book.status === 'Completed' ? 'green' : 'violet'} />
        </div>
      </div>
    </article>
  )
}
