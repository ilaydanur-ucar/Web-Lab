import { useState } from 'react'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import DarkModeToggle from './components/DarkModeToggle'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import UIKit from './pages/UIKit'

type Page = 'portfolio' | 'uikit'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('portfolio')

  useScrollAnimation(currentPage === 'portfolio')

  if (currentPage === 'uikit') {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <DarkModeToggle />
        <div className="p-4">
          <button
            onClick={() => setCurrentPage('portfolio')}
            className="text-primary hover:text-primary-dark font-medium transition-colors cursor-pointer"
          >
            ← Portfoye Don
          </button>
        </div>
        <UIKit />
      </div>
    )
  }

  return (
    <>
      <DarkModeToggle />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-white p-2 z-50"
      >
        Ana icerage atla
      </a>

      <Header onNavigateUIKit={() => setCurrentPage('uikit')} />

      <main id="main-content" className="bg-white dark:bg-gray-950">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

export default App
