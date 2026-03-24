import { useState } from 'react'
import type { Project } from '../types/project'
import { isValidExternalUrl } from '../utils/security'
import { CATEGORY_LABELS } from '../constants/navigation'
import { useFetchProjects } from '../hooks/useFetchProjects'
import Alert from './Alert'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false)

  const gradients = [
    'from-red-600 to-red-800',
    'from-red-700 to-rose-900',
    'from-rose-600 to-red-800',
    'from-red-500 to-red-700',
    'from-rose-700 to-red-900',
    'from-red-600 to-rose-800',
  ]

  return (
    <div
      className="opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 120}ms`, animationFillMode: 'forwards' }}
    >
      <div className="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700 group flex flex-col">
        {/* Gradient banner */}
        <div className={`h-44 bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center relative overflow-hidden`}>
          <span className="text-white text-xl font-bold tracking-wide drop-shadow-lg z-10">
            {project.title}
          </span>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-shine" />
          {project.featured && (
            <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium border border-white/30">
              Öne Çıkan
            </span>
          )}
          <span className="absolute bottom-3 left-3 bg-black/30 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md">
            {project.year}
          </span>
        </div>

        {/* İçerik */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <span className="text-xs text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md whitespace-nowrap ml-2">
              {CATEGORY_LABELS[project.category]}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Detay alanı */}
          {(project.problem || project.solution || project.role) && (
            <>
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-xs text-primary hover:text-primary-dark font-medium mb-3 self-start cursor-pointer transition-colors"
              >
                {expanded ? '− Detayları gizle' : '+ Detayları göster'}
              </button>

              {expanded && (
                <div className="mb-4 space-y-3 text-sm border-l-2 border-primary/30 pl-4">
                  {project.problem && (
                    <div>
                      <span className="font-semibold text-gray-700 dark:text-gray-200">Problem: </span>
                      <span className="text-gray-600 dark:text-gray-400">{project.problem}</span>
                    </div>
                  )}
                  {project.solution && (
                    <div>
                      <span className="font-semibold text-gray-700 dark:text-gray-200">Çözüm: </span>
                      <span className="text-gray-600 dark:text-gray-400">{project.solution}</span>
                    </div>
                  )}
                  {project.role && (
                    <div>
                      <span className="font-semibold text-gray-700 dark:text-gray-200">Rolüm: </span>
                      <span className="text-gray-600 dark:text-gray-400">{project.role}</span>
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {/* Teknoloji etiketleri */}
          <ul className="flex flex-wrap gap-2 mb-4 mt-auto" aria-label="Kullanılan teknolojiler">
            {project.tech.map(t => (
              <li
                key={t}
                className="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-xs font-semibold"
              >
                {t}
              </li>
            ))}
          </ul>

          {/* Alt linkler */}
          <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-gray-700">
            {project.sourceUrl && isValidExternalUrl(project.sourceUrl) && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark font-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </a>
            )}
            {project.demoUrl && isValidExternalUrl(project.demoUrl) && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-primary font-medium transition-colors"
              >
                Canlı Demo →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const { projects, loading, error } = useFetchProjects()

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Projelerim
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Gerçek problemlere çözüm üreten, uçtan uca geliştirdiğim projeler.
            Her birinde farklı teknolojiler ve yaklaşımlar denedim.
          </p>
        </div>

        {/* Hata durumu */}
        {error && (
          <div className="mb-6">
            <Alert variant="error" title="Hata">{error}</Alert>
          </div>
        )}

        {/* Yükleniyor */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
              <p className="text-gray-500 dark:text-gray-400">Projeler yükleniyor...</p>
            </div>
          </div>
        )}

        {/* Proje listesi */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}

        {/* Sonuç sayısı */}
        {!loading && projects.length > 0 && (
          <p className="text-sm text-gray-400 mt-8 text-center">
            {projects.length} proje gösteriliyor
          </p>
        )}
      </div>
    </section>
  )
}
