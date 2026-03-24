const SKILL_CATEGORIES = [
  {
    title: 'Backend & Veri',
    skills: [
      { name: 'Python', icon: 'python/python-original.svg' },
      { name: 'FastAPI', icon: 'fastapi/fastapi-original.svg' },
      { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
    ],
  },
  {
    title: 'AI & ML',
    skills: [
      { name: 'TensorFlow', icon: 'tensorflow/tensorflow-original.svg' },
      { name: 'Pandas', icon: 'pandas/pandas-original.svg' },
    ],
  },
  {
    title: 'DevOps & Araçlar',
    skills: [
      { name: 'Docker', icon: 'docker/docker-original.svg' },
      { name: 'Git', icon: 'git/git-original.svg' },
      { name: 'GitLab', icon: 'gitlab/gitlab-original.svg' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: 'react/react-original.svg' },
      { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
      { name: 'Tailwind', icon: 'tailwindcss/tailwindcss-original.svg' },
    ],
  },
] as const

const LEARNING_NOW = ['Mikroservis Mimarisi', 'API Güvenliği', 'Derin Öğrenme', 'Cloud Deployment']

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-[1400px] mx-auto">
        {/* Başlık */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Hakkımda
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Kim olduğum, neyle ilgilendiğim ve neler yapabildiğim
          </p>
        </div>

        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Metin */}
          <div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
              Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim.
              Temel uzmanlık alanlarım <strong className="text-gray-900 dark:text-white">Veri Bilimi</strong>,{' '}
              <strong className="text-gray-900 dark:text-white">Makine Öğrenmesi</strong> ve{' '}
              <strong className="text-gray-900 dark:text-white">Yapay Zekâ</strong> odaklı yazılım geliştirme.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Büyük veri setlerini işlemek, istatistiksel modeller oluşturmak ve
              yapay zekâ çözümleri geliştirmek üzerine projeler üretiyorum.
              Amacım, karmaşık verileri uygulanabilir öngörülere dönüştürmek
              ve gerçek dünya problemlerine çözüm sunmak.
            </p>

            {/* Şu an öğreniyorum */}
            <div className="mt-8 p-5 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-900/40">
              <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-wide">
                Şu An Öğreniyorum
              </h4>
              <div className="flex flex-wrap gap-2">
                {LEARNING_NOW.map(item => (
                  <span
                    key={item}
                    className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm px-3 py-1.5 rounded-lg border border-red-200 dark:border-red-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Kategorili yetenekler */}
          <div className="space-y-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.title}>
                <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 px-4 py-2.5 bg-gray-50 dark:bg-gray-800 rounded-xl hover:-translate-y-0.5 hover:shadow-md transition-all cursor-default border border-gray-100 dark:border-gray-700"
                    >
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`}
                        alt={skill.name}
                        className="w-7 h-7 object-contain"
                      />
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
