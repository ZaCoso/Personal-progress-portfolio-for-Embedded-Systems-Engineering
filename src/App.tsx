import { ElectronicsRoadmap } from './components/ElectronicsRoadmap'
import { Hero } from './components/Hero'
import { Layout } from './components/Layout'
import { ProjectsSection } from './components/ProjectsSection'
import { books } from './data/books'
import { roadmapFields } from './data/roadmapFields'

function App() {
  return (
    <Layout>
      <Hero />
      <ElectronicsRoadmap books={books} fields={roadmapFields} />
      <ProjectsSection />
    </Layout>
  )
}

export default App
