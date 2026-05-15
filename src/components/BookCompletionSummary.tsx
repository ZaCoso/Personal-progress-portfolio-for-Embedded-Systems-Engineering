import type { Book } from '../types'
import { ProgressBar } from './ProgressBar'

type BookCompletionSummaryProps = {
  books: Book[]
}

export function BookCompletionSummary({ books }: BookCompletionSummaryProps) {
  const total = books.length
  const completed = books.filter((book) => book.status === 'Completed').length
  const inProgress = books.filter((book) => book.status === 'In Progress').length
  const notStarted = books.filter((book) => book.status === 'Not Started').length
  const completionPercentage = total === 0 ? 0 : Math.round((completed / total) * 100)
  const remaining = total - completed
  const remainingPercentage = 100 - completionPercentage

  const stats = [
    { label: 'Total books', value: total },
    { label: 'Completed books', value: completed },
    { label: 'Books in progress', value: inProgress },
    { label: 'Not started books', value: notStarted },
    { label: 'Completed', value: `${completionPercentage}%` },
    { label: 'Remaining', value: `${remainingPercentage}%` },
  ]

  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/75 p-5">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-md bg-white/[0.035] p-4">
            <p className="text-xs uppercase text-slate-500">{stat.label}</p>
            <p className="mt-2 font-mono text-2xl font-semibold text-white">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <div className="mb-3 flex flex-col gap-1 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <span>{completed} of {total} books completed</span>
          <span>{remaining} books remaining</span>
        </div>
        <ProgressBar value={completionPercentage} accent="green" large />
      </div>
    </div>
  )
}
