type ProgressBarProps = {
  value: number
  accent?: 'blue' | 'green' | 'violet'
  large?: boolean
}

const accentClasses = {
  blue: 'from-sky-400 to-cyan-300',
  green: 'from-emerald-400 to-lime-300',
  violet: 'from-violet-400 to-fuchsia-300',
}

export function ProgressBar({ value, accent = 'blue', large }: ProgressBarProps) {
  const safeValue = Math.min(100, Math.max(0, value))

  return (
    <div
      className={`overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10 ${
        large ? 'h-4' : 'h-2.5'
      }`}
      aria-label={`${safeValue}% complete`}
    >
      <div
        className={`h-full rounded-full bg-gradient-to-r ${accentClasses[accent]} transition-all duration-700`}
        style={{ width: `${safeValue}%` }}
      />
    </div>
  )
}
