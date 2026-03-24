import { useEffect, useState } from 'react'
import type { Project, Category, SortField, SortOrder } from './types/project'
import { fetchProjects } from './services/projectService'
import { applyFilters } from './utils/projectHelpers'
import Button from './components/Button'
import Input from './components/Input'
import Alert from './components/Alert'
import Card from './components/Card'
import UIKit from './pages/UIKit'

function App() {
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'uikit'>('portfolio')
  const [formSubmitted, setFormSubmitted] = useState(false)

  // --- PROJECT STATE ---
  const [projects, setProjects] = useState<Project[]>([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<Category | 'all'>('all')
  const [sortField, setSortField] = useState<SortField>('year')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // --- VERI CEKME ---
  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchProjects()
        setProjects(data)
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Bilinmeyen hata'
        )
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  // --- TURETILMIS (DERIVED) VERI ---
  const filtered = applyFilters(
    projects, search, category,
    sortField, sortOrder
  )

  const categories: (Category | 'all')[] =
    ['all', 'frontend', 'fullstack', 'backend']

  const categoryLabels: Record<Category | 'all', string> = {
    all: 'Tumu',
    frontend: 'Frontend',
    fullstack: 'Full Stack',
    backend: 'Backend',
  }

  // Scroll animations
  useEffect(() => {
    if (currentPage !== 'portfolio') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [currentPage])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  // ─── UI Kit Sayfasi ───
  if (currentPage === 'uikit') {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer"
          aria-label="Tema degistir"
        >
          <span className="dark:hidden">&#9790;</span>
          <span className="hidden dark:inline">&#9728;</span>
        </button>

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

  // ─── Portfolyo Sayfasi ───
  return (
    <>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-white p-2 z-50"
      >
        Ana icerage atla
      </a>

      {/* ═══ NAVBAR ═══ */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b-2 border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent animate-slide-in-left">
            IU
          </h1>

          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleSmoothScroll(e, '#about')}
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-primary-light dark:hover:bg-gray-800 transition-colors"
                >
                  Hakkimda
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleSmoothScroll(e, '#projects')}
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-primary-light dark:hover:bg-gray-800 transition-colors"
                >
                  Projelerim
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-primary-light dark:hover:bg-gray-800 transition-colors"
                >
                  Iletisim
                </a>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('uikit')}
                  className="px-3 py-1 rounded-md text-primary font-medium hover:bg-primary-light dark:hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  UI Kit
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="bg-white dark:bg-gray-950">
        {/* ═══ HERO SECTION ═══ */}
        <section className="min-h-[auto] lg:min-h-[85vh] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 sm:px-8 py-16 lg:py-24 max-w-[1400px] mx-auto">
          <div className="animate-slide-in-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-gray-900 dark:text-white">
              Merhaba! Ben{' '}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Ilayda
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Yazilim Muhendisligi ogrencisi, yazilim gelistirici ve veri bilimci.
              Verileri analiz etmek, makine ogrenmesi modelleri egitmek ve yapay zeka
              cozumleri uretme uzerine calisiyorum. Yenilikci analitik projelerle
              gercek dunya problemlerine cozum buluyorum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, '#projects')}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-lg shadow-lg shadow-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 transition-all"
              >
                Projelerimi Gor
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-primary border-2 border-primary font-semibold rounded-lg hover:bg-primary-light dark:hover:bg-gray-700 hover:-translate-y-1 transition-all"
              >
                Bana Ulas
              </a>
            </div>
          </div>

          <div className="order-first lg:order-last flex justify-center animate-fade-in" aria-hidden="true">
            <div className="w-[clamp(200px,20vw,350px)] h-[clamp(200px,20vw,350px)] rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-[clamp(60px,8vw,120px)] font-bold shadow-2xl shadow-primary/30 animate-float relative">
              IU
              <div className="absolute inset-[-10px] rounded-full bg-gradient-to-br from-primary to-transparent opacity-20 animate-rotate" />
            </div>
          </div>
        </section>

        {/* ═══ ABOUT SECTION ═══ */}
        <section id="about" className="py-16 sm:py-24 px-4 sm:px-8 bg-white dark:bg-gray-950">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:h-1 after:w-20 after:bg-primary after:rounded">
              Hakkimda
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 mb-12">
              Kim oldugum ve neler yapabilecegim
            </p>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Yazilim Muhendisligi bolumunde egitim alan, analitik dusunmeyi ve
                  verilerden anlamli sonuclar cikarmayi hedefleyen bir gelisitriciyim.
                  Temel yazilim gelistirme prensiplerine hakim olmakla beraber, asil
                  uzmanlik alanini Veri Bilimi (Data Science), Makine Ogrenmesi
                  (Machine Learning) ve Yapay Zeka (AI) olusturuyor.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Buyuk veri setlerini islemek, istatistiksel modeller olusturmak ve
                  yapay zeka cozumleri gelistirmek uzerine projeler uretiyorum.
                  Amacim, karmasik verileri islenebilir ongorulere donusturmek.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Kullandigim Teknolojiler
                </h3>
                <ul className="flex flex-wrap gap-4 mt-4" aria-label="Beceri etiketleri">
                  {[
                    { name: 'Python', icon: 'python/python-original.svg' },
                    { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
                    { name: 'Docker', icon: 'docker/docker-original.svg' },
                    { name: 'GitLab', icon: 'gitlab/gitlab-original.svg' },
                    { name: 'TensorFlow', icon: 'tensorflow/tensorflow-original.svg' },
                    { name: 'Pandas', icon: 'pandas/pandas-original.svg' },
                  ].map((skill) => (
                    <li
                      key={skill.name}
                      className="flex flex-col items-center justify-center gap-2 p-4 w-[110px] h-[110px] bg-gray-50 dark:bg-gray-800 rounded-xl hover:-translate-y-1 hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition-all cursor-default"
                    >
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`}
                        alt={skill.name}
                        className="w-[50px] h-[50px] object-contain drop-shadow-sm"
                      />
                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-200 text-center">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROJECTS SECTION — STATE-BASED ═══ */}
        <section id="projects" className="py-16 sm:py-24 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:h-1 after:w-20 after:bg-primary after:rounded">
              Projelerim
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 mb-8">
              Gerceklestirdigim ve ogrendigim projeler
            </p>

            {/* HATA DURUMU */}
            {error && (
              <div className="mb-6">
                <Alert variant="error" title="Hata">
                  {error}
                </Alert>
              </div>
            )}

            {/* FILTRELER */}
            <div className="flex flex-col lg:flex-row gap-4 mb-8 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              {/* Arama */}
              <div className="flex-1">
                <Input
                  id="search"
                  placeholder="Proje ara... (baslik, aciklama, teknoloji)"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>

              {/* Kategori filtreleri */}
              <div className="flex gap-2 flex-wrap items-end">
                {categories.map(cat => (
                  <Button
                    key={cat}
                    variant={category === cat ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => setCategory(cat)}
                  >
                    {categoryLabels[cat]}
                  </Button>
                ))}
              </div>

              {/* Siralama */}
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
                  onClick={() => setSortOrder(
                    o => o === 'asc' ? 'desc' : 'asc'
                  )}
                >
                  {sortOrder === 'asc' ? '↑ A-Z' : '↓ Z-A'}
                </Button>
              </div>
            </div>

            {/* YUKLENIYOR */}
            {loading && (
              <div className="flex justify-center py-16">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                  <p className="text-gray-500 dark:text-gray-400">Projeler yukleniyor...</p>
                </div>
              </div>
            )}

            {/* BOS SONUC */}
            {!loading && filtered.length === 0 && !error && (
              <div className="text-center py-16">
                <p className="text-2xl mb-2">🔍</p>
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

            {/* PROJE LISTESI */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, index) => (
                <article
                  key={project.id}
                  className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card variant="elevated" className="h-full hover:-translate-y-2 hover:shadow-xl transition-all group">
                    {/* Gradient banner */}
                    <div className="h-[180px] bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-xl font-bold relative overflow-hidden">
                      {project.title}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-shine" />
                      {/* Featured badge */}
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

                      {/* Teknoloji etiketleri */}
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

                      {/* Alt bilgi */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                        <span className="text-xs text-gray-400">
                          {project.year} &middot; {categoryLabels[project.category]}
                        </span>
                        {project.sourceUrl && (
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
                </article>
              ))}
            </div>

            {/* SONUC SAYISI */}
            {!loading && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 text-center">
                {filtered.length} / {projects.length} proje gosteriliyor
              </p>
            )}
          </div>
        </section>

        {/* ═══ CONTACT SECTION ═══ */}
        <section id="contact" className="dark py-16 sm:py-24 px-4 sm:px-8 bg-gradient-to-br from-dark to-dark-surface text-white">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-2 relative inline-block mx-auto block w-max after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-20 after:bg-primary after:rounded">
              Baglantiya Gecin
            </h2>
            <p className="text-lg text-gray-400 text-center mt-4 mb-12">
              Bir projeniz mi var? Hadi konusalim!
            </p>

            {formSubmitted && (
              <div className="max-w-[800px] mx-auto mb-8">
                <Alert
                  variant="success"
                  title="Mesajiniz Gonderildi!"
                  dismissible
                  onDismiss={() => setFormSubmitted(false)}
                >
                  En kisa surede size donus yapacagim. Tesekkurler!
                </Alert>
              </div>
            )}

            <form
              className="max-w-[800px] mx-auto"
              action="#"
              method="POST"
              onSubmit={(e) => {
                e.preventDefault()
                setFormSubmitted(true)
              }}
            >
              <fieldset className="border-none p-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                <legend className="sr-only">Iletisim Formu</legend>

                <Input
                  id="name"
                  label="Ad Soyad"
                  type="text"
                  required
                  placeholder="Adinizi giriniz"
                />

                <Input
                  id="email"
                  label="E-posta"
                  type="email"
                  required
                  placeholder="ornek@mail.com"
                  helpText="E-posta adresinizi girin"
                />

                <div className="space-y-1">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition-colors [&>option]:bg-gray-800 [&>option]:text-white"
                  >
                    <option value="">-- Seciniz --</option>
                    <option value="is">Is Teklifi</option>
                    <option value="soru">Soru</option>
                    <option value="oneri">Oneri</option>
                  </select>
                </div>

                <div className="space-y-1 md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Mesajiniz
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    minLength={10}
                    placeholder="Mesajinizi yaziniz (en az 10 karakter)"
                    aria-describedby="message-error"
                    className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-800 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-y"
                  />
                </div>

                <div className="md:col-span-2">
                  <Button variant="primary" size="lg" type="submit" className="w-full sm:w-auto">
                    Gonder
                  </Button>
                </div>
              </fieldset>
            </form>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch mt-8 pt-8 border-t border-white/10">
              <a
                href="https://www.linkedin.com/in/ilaydanurucar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/15 hover:border-white hover:-translate-y-1 hover:shadow-lg transition-all"
                aria-label="LinkedIn Profili"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/ilaydanur-ucar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/15 hover:border-white hover:-translate-y-1 hover:shadow-lg transition-all"
                aria-label="GitHub Profili"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2026 Ilayda Nur Ucar. Tum haklari saklidir.</p>
      </footer>
    </>
  )
}

export default App
