import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <div className="site-title">İlayda Nur Uçar</div>
        <p className="subtitle">Bilgisayar Mühendisliği Öğrencisi</p>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <div className="about-content">
            <figure>
              <img
                src="https://ui-avatars.com/api/?name=İlayda+Nur+Uçar&size=200&background=eb2424&color=fff&rounded=true"
                alt="İlayda Nur Uçar'ın profil fotoğrafı"
                width="200"
                height="200"
              />
              <figcaption>İlayda Nur Uçar</figcaption>
            </figure>
            <div className="about-text">
              <p>
                Merhaba! Ben İlayda Nur Uçar. Bilgisayar Mühendisliği bölümünde
                okuyorum. Web geliştirme, yazılım tasarımı ve yeni teknolojiler
                öğrenmekle ilgileniyorum.
              </p>
              <h3>Kullandığım Teknolojiler</h3>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Git</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img
                src="https://placehold.co/600x300/eb2424/ffffff?text=Web+Lab+Projesi"
                alt="Web Lab Projesi ekran görüntüsü"
              />
              <h3>Web Lab Projesi</h3>
              <p>
                Vite + React + TypeScript kullanılarak oluşturulmuş
                modern bir web uygulaması. Semantik HTML5 ve
                erişilebilirlik ilkelerine uygun olarak geliştirilmiştir.
              </p>
              <ul className="skill-tags">
                <li>React</li>
                <li>TypeScript</li>
                <li>Vite</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                src="https://placehold.co/600x300/eb2424/ffffff?text=Portfolyo+Sayfasi"
                alt="Kişisel Portföy Sayfası ekran görüntüsü"
              />
              <h3>Kişisel Portföy Sayfası</h3>
              <p>
                Semantik HTML5 etiketleri, erişilebilirlik (a11y) standartları
                ve form doğrulama özellikleri ile oluşturulmuş tek sayfalık
                portföy web sitesi.
              </p>
              <ul className="skill-tags">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>React</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                src="https://placehold.co/600x300/eb2424/ffffff?text=Hava+Durumu+App"
                alt="Hava Durumu uygulaması ekran görüntüsü"
              />
              <h3>Hava Durumu Uygulaması</h3>
              <p>
                OpenWeather API ile anlık hava durumu bilgisi sunan
                modern ve responsive bir web uygulaması.
              </p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
                <li>CSS3</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST">
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
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
                <label htmlFor="email">E-posta:</label>
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
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
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

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 İlayda Nur Uçar. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App
