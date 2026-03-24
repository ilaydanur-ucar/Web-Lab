import { useState } from 'react'
import { SOCIAL_LINKS } from '../constants/navigation'
import Button from './Button'
import Input from './Input'
import Alert from './Alert'
import SocialLink from './SocialLink'

const LINKEDIN_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GITHUB_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-8 bg-gray-900 text-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Başlık */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            İletişime Geçin
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-lg mx-auto">
            Bir proje fikriniz mi var? İş birliği yapmak mı istiyorsunuz?
            Aşağıdaki formu doldurun veya sosyal medyadan ulaşın.
          </p>
        </div>

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

        <form
          className="max-w-[800px] mx-auto"
          onSubmit={(e) => {
            e.preventDefault()
            setFormSubmitted(true)
          }}
        >
          <fieldset className="border-none p-0 grid grid-cols-1 md:grid-cols-2 gap-6">
            <legend className="sr-only">İletişim Formu</legend>

            <Input
              id="name"
              label="Ad Soyad"
              type="text"
              required
              placeholder="Adınızı giriniz"
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
                <option value="">-- Seçiniz --</option>
                <option value="is">İş Teklifi</option>
                <option value="soru">Soru</option>
                <option value="oneri">Öneri</option>
              </select>
            </div>

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
                maxLength={2000}
                placeholder="Mesajınızı yazınız (en az 10 karakter)"
                aria-describedby="message-help"
                className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-800 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-y"
              />
              <p id="message-help" className="text-xs text-gray-500">En az 10, en fazla 2.000 karakter</p>
            </div>

            <div className="md:col-span-2">
              <Button variant="primary" size="lg" type="submit" className="w-full sm:w-auto">
                Gönder
              </Button>
            </div>
          </fieldset>
        </form>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch mt-12 pt-8 border-t border-gray-700">
          <SocialLink href={SOCIAL_LINKS.linkedin} label="LinkedIn Profili">
            {LINKEDIN_ICON}
            LinkedIn
          </SocialLink>
          <SocialLink href={SOCIAL_LINKS.github} label="GitHub Profili">
            {GITHUB_ICON}
            GitHub
          </SocialLink>
        </div>
      </div>
    </section>
  )
}
