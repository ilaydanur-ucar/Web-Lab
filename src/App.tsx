import { useEffect } from 'react'
import './App.css'

function App() {
  // Smooth scroll and animations
  useEffect(() => {
    // Scroll animations for elements
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.project-card, .section-title, .about-content').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* LAB-3: Erişilebilirlik (A11y) - Skip Link */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo" aria-label="Site Logosu">İU</div>
        {/* LAB-3: Semantik <nav> */}
        <nav aria-label="Ana navigasyon">
          <ul className="nav-links">
            <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>Hakkımda</a></li>
            <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>Projelerim</a></li>
            <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-content">
            <h1>Merhaba! Ben <span>İlayda</span></h1>
            <p>Yazılım Mühendisliği öğrencisi, yazılım geliştirici ve veri bilimci. Verileri analiz etmek, makine öğrenmesi modelleri eğitmek ve yapay zeka çözümleri üretme üzerine çalışıyorum. Yenilikçi analitik projelerle gerçek dünya problemlerine çözüm buluyorum.</p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary" onClick={(e) => handleSmoothScroll(e, '#projects')}>Projelerimi Gör</a>
              <a href="#contact" className="btn btn-secondary" onClick={(e) => handleSmoothScroll(e, '#contact')}>Bana Ulaş</a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="avatar-circle">İU</div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="about">
          <div className="container">
            <h2 className="section-title">Hakkımda</h2>
            <p className="section-subtitle">Kim olduğum ve neler yapabileceğim</p>

            <div className="about-content">
              <div className="about-text">
                <p>Yazılım Mühendisliği bölümünde eğitim alan, analitik düşünmeyi ve verilerden anlamlı sonuçlar çıkarmayı hedefleyen bir geliştiriciyim. Temel yazılım geliştirme prensiplerine hakim olmakla beraber, asıl uzmanlık alanımı Veri Bilimi (Data Science), Makine Öğrenmesi (Machine Learning) ve Yapay Zeka (AI) oluşturuyor.</p>
                <p>Büyük veri setlerini işlemek, istatistiksel modeller oluşturmak ve yapay zeka çözümleri geliştirmek üzerine projeler üretiyorum. Amacım, karmaşık verileri işlenebilir öngörülere dönüştürmek.</p>
              </div>
              <div>
                <h3 className="skills-title">Kullandığım Teknolojiler</h3>
                <ul className="skills-grid" aria-label="Beceri etiketleri">
                  <li className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="skill-icon" />
                    <span>Python</span>
                  </li>
                  <li className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="skill-icon" />
                    <span>PostgreSQL</span>
                  </li>
                  <li className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="skill-icon" />
                    <span>Docker</span>
                  </li>
                  <li className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" alt="GitLab" className="skill-icon" />
                    <span>GitLab</span>
                  </li>
                  <li className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="skill-icon" />
                    <span>TensorFlow</span>
                  </li>
                  <li className="skill-item">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="Pandas" className="skill-icon" />
                    <span>Pandas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="projects">
          <div className="container">
            <h2 className="section-title">Projelerim</h2>
            <p className="section-subtitle">Gerçekleştirdiğim ve öğrendiğim projeler</p>

            <div className="projects-grid">
              <article className="project-card">
                <div className="project-image" aria-hidden="true">ElektrAize</div>
                <div className="project-content">
                  <h3 className="project-title">ElektrAize</h3>
                  <p className="project-description">81 il bazlı enerji tüketimi, tahminleme ve anomali tespit sistemi.</p>
                  <ul className="project-tags" aria-label="Kullanılan teknolojiler">
                    <li className="project-tag">Python</li>
                  </ul>
                </div>
              </article>

              <article className="project-card">
                <div className="project-image" aria-hidden="true">LiveKit Agents</div>
                <div className="project-content">
                  <h3 className="project-title">python-agents-examples</h3>
                  <p className="project-description">Forked from livekit-examples/python-agents-examples. Comprehensive collection of examples for LiveKit Agents with Python.</p>
                  <ul className="project-tags" aria-label="Kullanılan teknolojiler">
                    <li className="project-tag">TypeScript</li>
                    <li className="project-tag">Python</li>
                  </ul>
                </div>
              </article>

              <article className="project-card">
                <div className="project-image" aria-hidden="true">WindSentinel</div>
                <div className="project-content">
                  <h3 className="project-title">WindSentinel</h3>
                  <p className="project-description">Event-Driven Microservice Architecture for Early Fault Detection in Wind Turbines Using SCADA Data and Field Measurements.</p>
                  <ul className="project-tags" aria-label="Kullanılan teknolojiler">
                    <li className="project-tag">Microservices</li>
                    <li className="project-tag">SCADA</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION - LAB-3 Form Gereksinimi Eklendi */}
        <section id="contact" className="contact">
          <div className="container">
            <h2 className="section-title">Bağlantıya Geçin</h2>
            <p className="section-subtitle">Bir projeniz mi var? Hadi konuşalım!</p>

            {/* LAB-3 Semantic Form yapısı modern tasarıma dahil edildi */}
            <form className="modern-form" action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
              <fieldset>
                <legend className="visually-hidden">İletişim Formu</legend>

                <div className="form-group">
                  <label htmlFor="name">Ad Soyad</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    placeholder="Adınızı giriniz"
                    aria-describedby="name-error"
                  />
                  <small id="name-error" className="error-msg" role="alert"></small>
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-posta</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="ornek@mail.com"
                    aria-describedby="email-error"
                  />
                  <small id="email-error" className="error-msg" role="alert"></small>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Konu</label>
                  <select id="subject" name="subject" required aria-describedby="subject-error">
                    <option value="">-- Seçiniz --</option>
                    <option value="is">İş Teklifi</option>
                    <option value="soru">Soru</option>
                    <option value="oneri">Öneri</option>
                  </select>
                  <small id="subject-error" className="error-msg" role="alert"></small>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Mesajınız</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    minLength={10}
                    placeholder="Mesajınızı yazınız (en az 10 karakter)"
                    aria-describedby="message-error"
                  ></textarea>
                  <small id="message-error" className="error-msg" role="alert"></small>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">Gönder</button>
              </fieldset>
            </form>

            <div className="contact-buttons">
              <a href="#" className="btn btn-outline" aria-label="LinkedIn Profili">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                LinkedIn
              </a>
              <a href="#" className="btn btn-outline" aria-label="GitHub Profili">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2026 İlayda Nur Uçar. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App
