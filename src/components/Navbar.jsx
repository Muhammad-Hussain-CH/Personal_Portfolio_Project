import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact']

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrolledClass = theme === 'light'
    ? 'bg-[#FFF8F5]/90 backdrop-blur-md border-b border-orange/15'
    : 'bg-bg/90 backdrop-blur-md border-b border-orange/10'

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? scrolledClass : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="#" className="font-grotesk font-bold text-xl text-white tracking-tight">
          M<span className="text-orange">H</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-inter text-base text-white/50 hover:text-orange transition-colors duration-200 tracking-wide"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center justify-center w-9 h-9 rounded-md border border-white/10 text-white/40 hover:text-orange hover:border-orange/40 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#contact"
            className="font-inter text-base font-medium px-5 py-2 rounded-md border border-orange text-orange hover:bg-orange hover:text-bg transition-all duration-200"
          >
            Hire Me
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-md border-t border-orange/10 px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-inter text-base text-white/60 hover:text-orange transition-colors"
            >
              {link}
            </a>
          ))}
          <button
            onClick={toggle}
            className="flex items-center gap-2 font-inter text-base text-white/60 hover:text-orange transition-colors"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="font-inter text-base font-medium px-4 py-2 rounded-md border border-orange text-orange text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
