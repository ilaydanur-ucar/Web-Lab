const SKILLS = [
  { name: 'Python', icon: 'python/python-original.svg' },
  { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
  { name: 'Docker', icon: 'docker/docker-original.svg' },
  { name: 'GitLab', icon: 'gitlab/gitlab-original.svg' },
  { name: 'TensorFlow', icon: 'tensorflow/tensorflow-original.svg' },
  { name: 'Pandas', icon: 'pandas/pandas-original.svg' },
] as const

export default function AboutSection() {
  return (
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
              verilerden anlamli sonuclar cikarmayi hedefleyen bir gelistiriciyim.
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
              {SKILLS.map((skill) => (
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
  )
}
