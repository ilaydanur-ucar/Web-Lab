import { useDarkMode } from '../hooks/useDarkMode'

export default function DarkModeToggle() {
  const { toggle } = useDarkMode()

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer"
      aria-label="Tema degistir"
    >
      <span className="dark:hidden" aria-hidden="true">&#9790;</span>
      <span className="hidden dark:inline" aria-hidden="true">&#9728;</span>
    </button>
  )
}
