import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana iceriye atla
      </a>

      <header>
        <h1>Ilayda Nur Ucar</h1>
        <p className="subtitle">Bilgisayar Muhendisligi Ogrencisi</p>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            <img
              src="https://ui-avatars.com/api/?name=Ilayda+Nur+Ucar&size=150&background=6366f1&color=fff&rounded=true"
              alt="Ilayda Nur Ucar'in profil fotografi"
              width="150"
              height="150"
            />
            <figcaption>Ilayda Nur Ucar</figcaption>
          </figure>
          <p>
            Merhaba! Ben Ilayda Nur Ucar. Bilgisayar Muhendisligi bolumunde
            okuyorum. Web gelistirme, yazilim tasarimi ve yeni teknolojiler
            ogrenmekle ilgileniyorum.
          </p>
          <h3>Kullandigim Teknolojiler</h3>
          <ul className="tech-list">
            <li>HTML5 &amp; CSS3</li>
            <li>JavaScript &amp; TypeScript</li>
            <li>React</li>
            <li>Git &amp; GitHub</li>
            <li>Python</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>

          <article className="project-card">
            <h3>Web Lab Projesi</h3>
            <p>
              Vite + React + TypeScript kullanilarak olusturulmus
              modern bir web uygulamasi. Semantik HTML5 ve
              erisilebirlik ilkelerine uygun olarak gelistirilmistir.
            </p>
            <p><strong>Teknolojiler:</strong> React, TypeScript, Vite</p>
          </article>

          <article className="project-card">
            <h3>Kisisel Portfolyo Sayfasi</h3>
            <p>
              Semantik HTML5 etiketleri, erisilebirlik (a11y) standartlari
              ve form dogrulama ozellikleri ile olusturulmus tek sayfalik
              portfolyo web sitesi.
            </p>
            <p><strong>Teknolojiler:</strong> HTML5, CSS3, React</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST">
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  placeholder="Adinizi giriniz"
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
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  placeholder="Mesajinizi yaziniz (en az 10 karakter)"
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Ilayda Nur Ucar. Tum haklari saklidir.</p>
      </footer>
    </>
  )
}

export default App
