import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certifications from './components/Certifications'

function App() {
  return (
    <main className="bg-bg min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
    </main>
  )
}

export default App