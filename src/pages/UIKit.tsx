import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Card from '../components/Card'
import Alert from '../components/Alert'

/**
 * UI Kit Sayfası — Premium Showcase
 *
 * Tüm component kütüphanesini varyantlarıyla sergileyen modern vitrin sayfası.
 * Glassmorphism, gradient arka planlar, micro-animasyonlar ve grid layout.
 */
export default function UIKit() {
    const [showAlert, setShowAlert] = useState(true)

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">

            {/* ═══ HERO HEADER ═══ */}
            <div className="relative overflow-hidden">
                {/* Decorative gradient blobs */}
                <div className="absolute top-[-120px] left-[-80px] w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
                <div className="absolute top-[-60px] right-[-100px] w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-3xl" aria-hidden="true" />

                <div className="relative px-6 sm:px-12 pt-12 pb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium mb-4">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Component Library v1.0
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">
                        UI Kit
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl">
                        Projede kullanılan tüm bileşenlerin varyant ve durum kataloğu.
                        Dark mode toggle ile iki temayı karşılaştırabilirsiniz.
                    </p>
                </div>
            </div>

            <div className="px-6 sm:px-12 pb-16 space-y-16">

                {/* ═══ BUTTONS ═══ */}
                <section>
                    <SectionHeader
                        number="01"
                        title="Buttons"
                        description="Primary, secondary, danger ve ghost varyantlarında, 3 farklı boyutta."
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                        {/* Renk Varyantları */}
                        <ShowcaseCard title="Renk Varyantları">
                            <div className="flex flex-wrap gap-3">
                                <Button variant="primary">Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="danger">Danger</Button>
                                <Button variant="ghost">Ghost</Button>
                            </div>
                        </ShowcaseCard>

                        {/* Boyut Varyantları */}
                        <ShowcaseCard title="Boyut Varyantları">
                            <div className="flex flex-wrap items-end gap-3">
                                <Button size="sm">Small</Button>
                                <Button size="md">Medium</Button>
                                <Button size="lg">Large</Button>
                            </div>
                        </ShowcaseCard>

                        {/* Disabled */}
                        <ShowcaseCard title="Disabled Durumu">
                            <div className="flex flex-wrap gap-3">
                                <Button variant="primary" disabled>Disabled Primary</Button>
                                <Button variant="secondary" disabled>Disabled Secondary</Button>
                                <Button variant="danger" disabled>Disabled Danger</Button>
                            </div>
                        </ShowcaseCard>

                        {/* Kombinasyonlar */}
                        <ShowcaseCard title="Boyut × Renk Kombinasyonları">
                            <div className="flex flex-wrap items-end gap-3">
                                <Button variant="primary" size="sm">SM Primary</Button>
                                <Button variant="danger" size="md">MD Danger</Button>
                                <Button variant="ghost" size="lg">LG Ghost</Button>
                            </div>
                        </ShowcaseCard>
                    </div>
                </section>

                {/* ═══ INPUTS ═══ */}
                <section>
                    <SectionHeader
                        number="02"
                        title="Inputs"
                        description="Form alanları: normal, hata durumu, yardım metni ve devre dışı varyantlarıyla."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <ShowcaseCard title="Normal Input">
                            <Input
                                id="ui-name"
                                label="Ad Soyad"
                                placeholder="Bir şey yazın..."
                            />
                        </ShowcaseCard>

                        <ShowcaseCard title="Hatalı Input">
                            <Input
                                id="ui-err"
                                label="E-posta"
                                error="Bu alan zorunludur"
                                placeholder="Hatalı alan"
                            />
                        </ShowcaseCard>

                        <ShowcaseCard title="Yardım Metni">
                            <Input
                                id="ui-help"
                                label="E-posta Adresi"
                                type="email"
                                helpText="E-posta adresinizi girin"
                                placeholder="ornek@mail.com"
                            />
                        </ShowcaseCard>

                        <ShowcaseCard title="Devre Dışı">
                            <Input
                                id="ui-dis"
                                label="Salt Okunur Alan"
                                disabled
                                value="Düzenlenemez"
                            />
                        </ShowcaseCard>
                    </div>
                </section>

                {/* ═══ CARDS ═══ */}
                <section>
                    <SectionHeader
                        number="03"
                        title="Cards"
                        description="Elevated (gölgeli), outlined (çerçeveli) ve filled (dolgulu) kart varyantları."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        <div className="group">
                            <p className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-widest">variant=&quot;elevated&quot;</p>
                            <Card variant="elevated" title="Elevated Card" className="group-hover:-translate-y-1 transition-transform">
                                <p>Gölge ile yükseltilmiş kart. Hover'da gölge artar.</p>
                            </Card>
                        </div>

                        <div className="group">
                            <p className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-widest">variant=&quot;outlined&quot;</p>
                            <Card variant="outlined" title="Outlined Card" className="group-hover:-translate-y-1 transition-transform">
                                <p>Çerçeveli (border) kart stili.</p>
                            </Card>
                        </div>

                        <div className="group">
                            <p className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-widest">variant=&quot;filled&quot;</p>
                            <Card
                                variant="filled"
                                title="Filled Card"
                                footer={<Button size="sm">Detay Gör</Button>}
                                className="group-hover:-translate-y-1 transition-transform"
                            >
                                <p>Dolgulu arka plan + footer bölümü.</p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* ═══ ALERTS ═══ */}
                <section>
                    <SectionHeader
                        number="04"
                        title="Alerts"
                        description="Bilgi, başarı, uyarı ve hata durumları için bildirim bileşenleri."
                    />

                    <div className="max-w-2xl space-y-4 mt-8">
                        <Alert variant="info" title="Bilgi">
                            Bilgilendirme mesajı. Kullanıcıya bilgi vermek için kullanılır.
                        </Alert>

                        <Alert variant="success" title="Başarılı">
                            İşlem başarıyla tamamlandı!
                        </Alert>

                        <Alert variant="warning" title="Uyarı">
                            Oturum 5 dakika sonra sona erecek.
                        </Alert>

                        {showAlert && (
                            <Alert
                                variant="error"
                                title="Hata"
                                dismissible
                                onDismiss={() => setShowAlert(false)}
                            >
                                Bağlantı kurulamadı. Tekrar deneyin. (✕ ile kapatılabilir)
                            </Alert>
                        )}
                    </div>
                </section>

                {/* ═══ SUMMARY GRID ═══ */}
                <section className="border-t border-gray-200 dark:border-gray-800 pt-12">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                        <StatCard number="4" label="Component" />
                        <StatCard number="15+" label="Varyant" />
                        <StatCard number="2" label="Tema" />
                        <StatCard number="3" label="Breakpoint" />
                    </div>
                </section>

            </div>
        </div>
    )
}

/* ─── Yardımcı Alt Bileşenler ─── */

/** Section başlık bileşeni — numaralı, gradient accent */
function SectionHeader({ number, title, description }: { number: string; title: string; description: string }) {
    return (
        <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/20">
                {number}
            </span>
            <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-1">{description}</p>
            </div>
        </div>
    )
}

/** Showcase kartı — glassmorphism efekti + başlık */
function ShowcaseCard({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="rounded-2xl border border-gray-200/60 dark:border-gray-700/40 bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm p-6 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300">
            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
                {title}
            </p>
            {children}
        </div>
    )
}

/** İstatistik kartı */
function StatCard({ number, label }: { number: string; label: string }) {
    return (
        <div className="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200/40 dark:border-gray-700/30">
            <p className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                {number}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">{label}</p>
        </div>
    )
}
