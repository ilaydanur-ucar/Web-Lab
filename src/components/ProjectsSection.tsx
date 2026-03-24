import { useState } from 'react'
import type { Project, Category, SortField, SortOrder } from '../types/project'
import { applyFilters } from '../utils/projectHelpers'
import { isValidExternalUrl } from '../utils/security'
import { CATEGORY_LABELS } from '../constants/navigation'
import { useFetchProjects } from '../hooks/useFetchProjects'
import Button from './Button'
import Input from './Input'
import Alert from './Alert'
import Card from './Card'

const CATEGORIES: (Category | 'all')[] = ['all', 'frontend', 'fullstack', 'backend']

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card variant="elevated" className="h-full hover:-translate-y-2 hover:shadow-xl transition-all group">
      <div className="h-[180px] bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-xl font-bold relative overflow-hidden">
        {project.title}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-shine" />
        {project.featured && (
          <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium">
            One Cikan
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 mb-4" aria-label="Kullanilan teknolojiler">
          {project.tech.map(t => (
            <li
              key={t}
              className="bg-primary-light dark:bg-primary/20 text-primary dark:text-red-300 px-3 py-1 rounded-full text-xs font-semibold"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
          <span className="text-xs text-gray-400">
            {project.year} &middot; {CATEGORY_LABELS[project.category]}
          </span>
          {project.sourceUrl && isValidExternalUrl(project.sourceUrl) && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:text-primary-dark font-medium transition-colors"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}

export default function ProjectsSection() {
  const { projects, loading, error } = useFetchProjects()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<Category | 'all'>('all')
  const [sortField, setSortField] = useState<SortField>('year')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')

  const filtered = applyFilters(projects, search, category, sortField, sortOrder)

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:h-1 after:w-20 after:bg-primary after:rounded">
          Projelerim
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 mb-8">
          Gerceklestirdigim ve ogrendigim projeler
        </p>

        {/* Hata durumu */}
        {error && (
          <div className="mb-6">
            <Alert variant="error" title="Hata">{error}</Alert>
          </div>
        )}

        {/* Filtreler */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex-1">
            <Input
              id="search"
              placeholder="Proje ara... (baslik, aciklama, teknoloji)"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className="flex gap-2 flex-wrap items-end">
            {CATEGORIES.map(cat => (
              <Button
                key={cat}
                variant={category === cat ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setCategory(cat)}
              >
                {CATEGORY_LABELS[cat]}
              </Button>
            ))}
          </div>

          <div className="flex gap-2 items-end">
            <select
              value={sortField}
              onChange={e => setSortField(e.target.value as SortField)}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            >
              <option value="year">Yil</option>
              <option value="title">Baslik</option>
            </select>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSortOrder(o => o === 'asc' ? 'desc' : 'asc')}
            >
              {sortOrder === 'asc' ? '↑ A-Z' : '↓ Z-A'}
            </Button>
          </div>
        </div>

        {/* Yukleniyor */}
        {loading && (
          <div className="flex justify-center py-16">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
              <p className="text-gray-500 dark:text-gray-400">Projeler yukleniyor...</p>
            </div>
          </div>
        )}

        {/* Bos sonuc */}
        {!loading && filtered.length === 0 && !error && (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Eslesen proje bulunamadi.
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-4"
              onClick={() => { setSearch(''); setCategory('all') }}
            >
              Filtreleri Temizle
            </Button>
          </div>
        )}

        {/* Proje listesi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <article
              key={project.id}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </article>
          ))}
        </div>

        {/* Sonuc sayisi */}
        {!loading && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 text-center">
            {filtered.length} / {projects.length} proje gosteriliyor
          </p>
        )}
      </div>
    </section>
  )
}
