export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
      <p>&copy; {year} Ilayda Nur Ucar. Tum haklari saklidir.</p>
    </footer>
  )
}
