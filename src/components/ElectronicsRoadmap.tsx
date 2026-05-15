import { useMemo, useState } from 'react'
import type { Book, RoadmapField, Status } from '../types'
import { BookCard } from './BookCard'
import { BookCompletionSummary } from './BookCompletionSummary'
import { BookFilters } from './BookFilters'
import { ProgressBar } from './ProgressBar'

type ElectronicsRoadmapProps = {
  books: Book[]
  fields: RoadmapField[]
}

const statusClasses: Record<Status, string> = {
  Completed: 'bg-emerald-400/10 text-emerald-200',
  'In Progress': 'bg-sky-400/10 text-sky-200',
  'Not Started': 'bg-violet-400/10 text-violet-200',
}

export function ElectronicsRoadmap({ books, fields }: ElectronicsRoadmapProps) {
  const [activeFieldId, setActiveFieldId] = useState(fields[0]?.id ?? '')
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<Status | 'All'>('All')
  const [category, setCategory] = useState('All')

  const activeField = fields.find((field) => field.id === activeFieldId) ?? fields[0]

  const fieldBooks = useMemo(
    () =>
      books.filter((book) =>
        activeField?.bookCategories.includes(book.category),
      ),
    [activeField, books],
  )

  const categories = useMemo(
    () => Array.from(new Set(fieldBooks.map((book) => book.category))).sort(),
    [fieldBooks],
  )

  const filteredBooks = useMemo(() => {
    const query = search.trim().toLowerCase()

    return fieldBooks.filter((book) => {
      const matchesSearch =
        query.length === 0 ||
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
      const matchesStatus = status === 'All' || book.status === status
      const matchesCategory = category === 'All' || book.category === category

      return matchesSearch && matchesStatus && matchesCategory
    })
  }, [category, fieldBooks, search, status])

  function handleFieldChange(fieldId: string) {
    setActiveFieldId(fieldId)
    setSearch('')
    setStatus('All')
    setCategory('All')
  }

  return (
    <section id="progress" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Dashboard</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Progress Dashboard
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-400">
          Select a field to see each of the books that enhanced my nuanced understanding of this dearly carrear.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {fields.map((field) => {
          const fieldBookCount = books.filter((book) =>
            field.bookCategories.includes(book.category),
          ).length
          const isActive = field.id === activeField?.id

          return (
            <button
              key={field.id}
              type="button"
              onClick={() => handleFieldChange(field.id)}
              className={`rounded-lg border p-5 text-left transition duration-300 hover:-translate-y-1 ${
                isActive
                  ? 'border-sky-300/50 bg-sky-400/10'
                  : 'border-white/10 bg-white/[0.035] hover:border-white/25 hover:bg-white/[0.055]'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{field.name}</h3>
                  {field.credential && (
                    <p className="mt-1 text-sm text-emerald-200">{field.credential}</p>
                  )}
                </div>
                <span className={`whitespace-nowrap rounded-full px-3 py-1 text-xs ${statusClasses[field.status]}`}>
                  {field.status}
                </span>
              </div>
              <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-400">
                {field.summary}
              </p>
              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                  <span>{fieldBookCount} books</span>
                  <span className="font-mono text-slate-300">{field.progress}%</span>
                </div>
                <ProgressBar value={field.progress} accent={field.accent} />
              </div>
            </button>
          )
        })}
      </div>

      {activeField && (
        <div className="mt-6 rounded-lg border border-white/10 bg-slate-950/75 p-5 sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Selected field</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{activeField.name}</h3>
              {activeField.credential && (
                <p className="mt-2 text-sm font-medium text-emerald-200">
                  {activeField.credential}
                </p>
              )}
              <span className={`mt-3 inline-flex whitespace-nowrap rounded-full px-3 py-1 text-xs ${statusClasses[activeField.status]}`}>
                {activeField.status}
              </span>
              <p className="mt-4 text-sm leading-6 text-slate-400">{activeField.summary}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-200">Main goals</p>
              <div className="mt-3 grid gap-2">
                {activeField.goals.map((goal) => (
                  <div
                    key={goal}
                    className="rounded-md border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-slate-300"
                  >
                    {goal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {fieldBooks.length > 0 ? (
        <>
          <div className="mt-6">
            <BookCompletionSummary books={fieldBooks} />
          </div>

          <div className="mt-6">
            <BookFilters
              categories={categories}
              search={search}
              status={status}
              category={category}
              onSearchChange={setSearch}
              onStatusChange={setStatus}
              onCategoryChange={setCategory}
            />
          </div>

          <div className="mt-6 grid gap-4">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.035] p-8 text-center text-slate-400">
              No books match the current filters.
            </div>
          )}
        </>
      ) : (
        <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.035] p-8 text-center text-slate-400">
          This dashboard field does not have books attached yet.
        </div>
      )}
    </section>
  )
}
