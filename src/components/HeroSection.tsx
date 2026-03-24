import { isValidScrollTarget } from '../utils/security'

function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>, targetId: string) {
  e.preventDefault()
  if (!isValidScrollTarget(targetId)) return
  const target = document.querySelector(targetId)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function HeroSection() {
  return (
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
  )
}
