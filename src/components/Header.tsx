import { isValidScrollTarget } from '../utils/security'
import { NAV_LINKS } from '../constants/navigation'

interface HeaderProps {
  onNavigateUIKit: () => void
}

function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>, targetId: string) {
  e.preventDefault()
  if (!isValidScrollTarget(targetId)) return
  const target = document.querySelector(targetId)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Header({ onNavigateUIKit }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b-2 border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent animate-slide-in-left">
          IU
        </h1>

        <nav aria-label="Ana navigasyon">
          <ul className="flex flex-wrap gap-2">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <a
                  href={link.id}
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-primary-light dark:hover:bg-gray-800 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={onNavigateUIKit}
                className="px-3 py-1 rounded-md text-primary font-medium hover:bg-primary-light dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                UI Kit
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
