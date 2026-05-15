export type Status = 'Completed' | 'In Progress' | 'Not Started'

export type ProgressArea = {
  name: string
  description: string
  status: Status
  progress: number
}

export type Book = {
  id: number
  title: string
  author: string
  pages: number
  fields: string[]
  status: Status
  progress: number
  startDate: string
  category: string
  coverImage?: string
}

export type RoadmapField = {
  id: string
  name: string
  summary: string
  goals: string[]
  bookCategories: string[]
  status: Status
  progress: number
  accent: 'blue' | 'green' | 'violet'
  credential?: string
}
