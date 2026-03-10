import { useEffect, useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Alert from './components/Alert'
import Card from './components/Card'
import UIKit from './pages/UIKit'

function App() {
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'uikit'>('portfolio')
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Scroll animations — class-based toggle (Tailwind çakışmasını önler)
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

  // ─── UI Kit Sayfası ───
  if (currentPage === 'uikit') {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer"
          aria-label="Tema değiştir"
        >
          <span className="dark:hidden">&#9790;</span>
          <span className="hidden dark:inline">&#9728;</span>
        </button>

        {/* Geri butonu */}
        <div className="p-4">
          <button
            onClick={() => setCurrentPage('portfolio')}
            className="text-primary hover:text-primary-dark font-medium transition-colors cursor-pointer"
          >
            ← Portföye Dön
          </button>
        </div>

        <UIKit />
      </div>
    )
  }

  // ─── Portföy Sayfası ───
  return (
    <>
      {/* Dark Mode Toggle — Fixed */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      {/* Skip Link — A11y */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-white p-2 z-50"
      >
        Ana içeriğe atla
      </a>

      {/* ═══ NAVBAR ═══ */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b-2 border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          {/* Logo */}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent animate-slide-in-left">
            İU
          </h1>

          {/* Navigasyon */}
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleSmoothScroll(e, '#about')}
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-primary-light dark:hover:bg-gray-800 transition-colors"
                >
                  Hakkımda
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
                  İletişim
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
          {/* Hero içerik */}
          <div className="animate-slide-in-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-gray-900 dark:text-white">
              Merhaba! Ben{' '}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                İlayda
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Yazılım Mühendisliği öğrencisi, yazılım geliştirici ve veri bilimci.
              Verileri analiz etmek, makine öğrenmesi modelleri eğitmek ve yapay zeka
              çözümleri üretme üzerine çalışıyorum. Yenilikçi analitik projelerle
              gerçek dünya problemlerine çözüm buluyorum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, '#projects')}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-lg shadow-lg shadow-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 transition-all"
              >
                Projelerimi Gör
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-primary border-2 border-primary font-semibold rounded-lg hover:bg-primary-light dark:hover:bg-gray-700 hover:-translate-y-1 transition-all"
              >
                Bana Ulaş
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="order-first lg:order-last flex justify-center animate-fade-in" aria-hidden="true">
            <div className="w-[clamp(200px,20vw,350px)] h-[clamp(200px,20vw,350px)] rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-[clamp(60px,8vw,120px)] font-bold shadow-2xl shadow-primary/30 animate-float relative">
              İU
              <div className="absolute inset-[-10px] rounded-full bg-gradient-to-br from-primary to-transparent opacity-20 animate-rotate" />
            </div>
          </div>
        </section>

        {/* ═══ ABOUT SECTION ═══ */}
        <section id="about" className="py-16 sm:py-24 px-4 sm:px-8 bg-white dark:bg-gray-950">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:h-1 after:w-20 after:bg-primary after:rounded">
              Hakkımda
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 mb-12">
              Kim olduğum ve neler yapabileceğim
            </p>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Metin */}
              <div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Yazılım Mühendisliği bölümünde eğitim alan, analitik düşünmeyi ve
                  verilerden anlamlı sonuçlar çıkarmayı hedefleyen bir geliştiriciyim.
                  Temel yazılım geliştirme prensiplerine hakim olmakla beraber, asıl
                  uzmanlık alanımı Veri Bilimi (Data Science), Makine Öğrenmesi
                  (Machine Learning) ve Yapay Zeka (AI) oluşturuyor.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Büyük veri setlerini işlemek, istatistiksel modeller oluşturmak ve
                  yapay zeka çözümleri geliştirmek üzerine projeler üretiyorum.
                  Amacım, karmaşık verileri işlenebilir öngörülere dönüştürmek.
                </p>
              </div>

              {/* Teknolojiler */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Kullandığım Teknolojiler
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

        {/* ═══ PROJECTS SECTION ═══ */}
        <section id="projects" className="py-16 sm:py-24 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-2 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:h-1 after:w-20 after:bg-primary after:rounded">
              Projelerim
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 mb-12">
              Gerçekleştirdiğim ve öğrendiğim projeler
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Proje 1 */}
              <article className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
                <Card variant="elevated" className="h-full hover:-translate-y-2 hover:shadow-xl transition-all">
                  <div className="h-[200px] bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-2xl font-bold relative overflow-hidden">
                    ElektrAize
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-shine" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      ElektrAize
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                      81 il bazlı enerji tüketimi, tahminleme ve anomali tespit sistemi.
                    </p>
                    <ul className="flex flex-wrap gap-2" aria-label="Kullanılan teknolojiler">
                      <li className="bg-primary-light dark:bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        Python
                      </li>
                    </ul>
                  </div>
                </Card>
              </article>

              {/* Proje 2 */}
              <article className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
                <Card variant="elevated" className="h-full hover:-translate-y-2 hover:shadow-xl transition-all">
                  <div className="h-[200px] bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-2xl font-bold relative overflow-hidden">
                    LiveKit Agents
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-shine" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      python-agents-examples
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                      Forked from livekit-examples/python-agents-examples. Comprehensive
                      collection of examples for LiveKit Agents with Python.
                    </p>
                    <ul className="flex flex-wrap gap-2" aria-label="Kullanılan teknolojiler">
                      <li className="bg-primary-light dark:bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        TypeScript
                      </li>
                      <li className="bg-primary-light dark:bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        Python
                      </li>
                    </ul>
                  </div>
                </Card>
              </article>

              {/* Proje 3 */}
              <article className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
                <Card variant="elevated" className="h-full hover:-translate-y-2 hover:shadow-xl transition-all">
                  <div className="h-[200px] bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-2xl font-bold relative overflow-hidden">
                    WindSentinel
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-shine" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      WindSentinel
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                      Event-Driven Microservice Architecture for Early Fault Detection
                      in Wind Turbines Using SCADA Data and Field Measurements.
                    </p>
                    <ul className="flex flex-wrap gap-2" aria-label="Kullanılan teknolojiler">
                      <li className="bg-primary-light dark:bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        Microservices
                      </li>
                      <li className="bg-primary-light dark:bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        SCADA
                      </li>
                    </ul>
                  </div>
                </Card>
              </article>
            </div>
          </div>
        </section>

        {/* ═══ CONTACT SECTION ═══ */}
        <section id="contact" className="dark py-16 sm:py-24 px-4 sm:px-8 bg-gradient-to-br from-dark to-dark-surface text-white">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-2 relative inline-block mx-auto block w-max after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-20 after:bg-primary after:rounded">
              Bağlantıya Geçin
            </h2>
            <p className="text-lg text-gray-400 text-center mt-4 mb-12">
              Bir projeniz mi var? Hadi konuşalım!
            </p>

            {/* Alert — Form gönderim bildirimi */}
            {formSubmitted && (
              <div className="max-w-[800px] mx-auto mb-8">
                <Alert
                  variant="success"
                  title="Mesajınız Gönderildi!"
                  dismissible
                  onDismiss={() => setFormSubmitted(false)}
                >
                  En kısa sürede size dönüş yapacağım. Teşekkürler!
                </Alert>
              </div>
            )}

            {/* Form — Input ve Button componentleri kullanılıyor */}
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
                <legend className="sr-only">İletişim Formu</legend>

                {/* Input Component — Ad Soyad */}
                <Input
                  id="name"
                  label="Ad Soyad"
                  type="text"
                  required
                  placeholder="Adınızı giriniz"
                />

                {/* Input Component — E-posta */}
                <Input
                  id="email"
                  label="E-posta"
                  type="email"
                  required
                  placeholder="ornek@mail.com"
                  helpText="E-posta adresinizi girin"
                />

                {/* Select (Input component'i select desteklemediği için doğrudan) */}
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
                    <option value="">-- Seçiniz --</option>
                    <option value="is">İş Teklifi</option>
                    <option value="soru">Soru</option>
                    <option value="oneri">Öneri</option>
                  </select>
                </div>

                {/* Textarea (not Input component but styled consistently) */}
                <div className="space-y-1 md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    minLength={10}
                    placeholder="Mesajınızı yazınız (en az 10 karakter)"
                    aria-describedby="message-error"
                    className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-800 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-y"
                  />
                </div>

                {/* Button Component — Gönder */}
                <div className="md:col-span-2">
                  <Button variant="primary" size="lg" type="submit" className="w-full sm:w-auto">
                    Gönder
                  </Button>
                </div>
              </fieldset>
            </form>

            {/* Sosyal linkler */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch mt-8 pt-8 border-t border-white/10">
              <a
                href="#"
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
                href="#"
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
        <p>&copy; 2026 İlayda Nur Uçar. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App
