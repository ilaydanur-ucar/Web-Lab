# Web LAB - Kişisel Portföy

## ✨ Proje Hakkında
Bu proje, **Web Tasarımı ve Programlama** dersi genelindeki laboratuvar görevleri (LAB-1, LAB-2 ve LAB-3) kapsamında adım adım geliştirilmiş modern bir **Kişisel Portföy** uygulamasıdır. 

Uygulamanın inşasında tamamen modern web geliştirme standartları göz önünde bulundurulmuş olup **Vite + React + TypeScript** teknolojilerinden yararlanılmıştır. Başlangıçta temel bileşenlerle kurgulanan bu proje, özellikle Veri Bilimi ve Makine Öğrenmesi alanındaki uzmanlığımı yansıtacak şekilde revize edilmiştir.

## 👩‍💻 Geliştirici Bilgileri
- **Ad Soyad:** İlayda Nur Uçar
- **Öğrenci No:** 235541054
- **Uzmanlık Alanı:** Veri Bilimi (Data Science), Makine Öğrenmesi (Machine Learning), Yapay Zeka (AI)

## 🛠️ Kullanılan Teknolojiler
- React 18
- TypeScript
- Vite
- Semantik HTML5
- Modern CSS3 (CSS Variables, Flexbox, Grid Layout, Fluid Typography)

## 📌 Proje Özellikleri ve Laboratuvar Çıktıları

### LAB-2 Kapsamı (Semantik Yapı & Erişilebilirlik)
- **Doğru Semantik HTML5 Hiyerarşisi:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, ve `<footer>` etiketlerinin standartlara uygun kullanımı.
- **Erişilebilirlik (A11y) Standartları:** Ekran okuyucular için ARIA etiketleri (`aria-label`, `aria-hidden`), klavye erişimi için `skip link` (Ana içeriğe atla) özelliği ve mantıksal başlık (heading) hiyerarşisi.
- **Form Doğrulama (Validation):** Kullanıcı deneyimini artıran eş zamanlı frontend form validasyonları (`required`, `minlength`, doğru `type` kullanımları).
- **Lighthouse Başarısı:** Erişilebilirlik (Accessibility) testlerinden 90+ puan garantisi.

### LAB-3 Kapsamı (Modern Tasarım & Responsive Layout)
- **Design Tokens (Tasarım Değişkenleri):** Proje genelindeki renk, boşluk (`spacing`) ve yazı tipleri için merkezi `:root` CSS değişkenlerinin (`tokens.css`) oluşturulması.
- **Fluid Typography (Akıcı Tipografi):** Ekran boyutlarına göre organik olarak büyüyüp küçülen, minimum - vw - maksimum değerlerini temel alan `clamp()` fonksiyonu ile yönetilmiş yazılar.
- **Mobile-First Yaklaşım:** Tasarımın öncelikle mobil ekranlar için kodlanması ve ekran genişledikçe (`min-width` medya sorguları kullanılarak) Masaüstü (1024px+) ve Tablet (640px+) kırılımlarının (breakpoints) devreye girmesi.
- **Modern Layout Sistemleri:** Navigasyon ve diğer yatay dizilimler için esnek **Flexbox**, proje kartları vb. iki boyutlu ızgara yapıları içinse **CSS Grid** (`repeat(auto-fit)`) sistemlerinin kullanılması.

## 🚀 Kurulum

Projeyi yerel bilgisayarınızda (local) çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. Proje dosyalarını indirin veya klonlayın.
2. Terminal (veya Komut İstemcisi) üzerinden proje dizinine gidin.
3. Gerekli bağımlılıkları (paketleri) yüklemek için şu komutu çalıştırın:
```bash
npm install
```

## 💻 Çalıştırma

Projeyi geliştirme modunda (development) ayağa kaldırmak için:
```bash
npm run dev
```

Ardından tarayıcınızdan `http://localhost:5173` adresine giderek portföy uygulamasını canlı olarak görüntüleyebilirsiniz.
