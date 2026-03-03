# CSS Kararlari

## 1. Breakpoint Secimi
- **640px** ve **1024px** secildi cunku icerigimiz bu noktalarda dogal olarak degisiyor: 640px'te navigasyon linkleri yan yana sigabiliyor ve "Hakkimda" bolumu yatay duzene gecebiliyor. 1024px'te ise 3 proje karti yan yana rahatca yerlesiyor.
- Cihaz modeline gore degil, **icerigin bozuldugu noktaya** gore breakpoint belirledik. Bu, farkli cihazlarda tutarli bir deneyim saglar.

## 2. Layout Tercihleri
- **Header icin Flexbox** sectim cunku header tek boyutlu bir duzen: logo ve navigasyon elemanlarini bir eksen boyunca (yatay veya dikey) hizalamak yeterli. Flexbox bu is icin idealdir.
- **Proje kartlari icin CSS Grid** sectim cunku kartlar iki boyutlu bir izgara duzeni olusturuyor. Grid, satirlari ve sutunlari ayni anda kontrol etmemizi saglar.
- **auto-fit** kullandim cunku bos alan kaldiginda mevcut kartlarin genislemesini istiyorum. auto-fill bos sutunlari korur ama auto-fit onlari daraltip elemanlara yer acar.

## 3. Design Tokens
- **Kirmizi tonlari** (#b91c1c, #dc2626, #ef4444, #f87171) palette sectim cunku LAB-2'deki mevcut tasarimla uyumlu ve guclu, enerjik bir portfolyo izlenimi veriyor.
- **Spacing skalasi** 0.25rem'den 4rem'e kadar 7 kademeli bir olcek kullanir (xs, sm, md, lg, xl, 2xl, 3xl). Bu tutarli bosluk sistemi, tasarimda gorsel ritim olusturur.
- **Fluid typography** icin `clamp()` degerlerini `rem + vw` karisimi ile ayarladim. Ornegin basliklar `clamp(2rem, 1.4rem + 3vw, 2.8rem)` ile 320px'te 2rem, genis ekranda 2.8rem olur. Sadece `vw` kullanmak erisilebirlik sorununa yol acar (zoom calismaz), bu yuzden `rem` tabani zorunludur.

## 4. Responsive Stratejiler
- **Mobile-first** yaklasimi uyguladim: CSS'i once en kucuk ekran (mobil) icin yazdim, sonra `min-width` media query'leri ile tablet (640px+) ve masaustu (1024px+) icin kurallar ekledim. Bu yaklasim performans acisindan ustundur cunku mobil cihazlar yalnizca temel CSS'i yukler.
- **Breakpoint'lerde degisen elemanlar:** Header yonu (dikey → yatay), nav yonu (dikey → yatay), proje grid sutun sayisi (1 → auto-fit → 3), hakkimda bolumu yonu (dikey → yatay), section padding degerleri, form butonu genisligi (tam → otomatik).
- **Gorsel boyutlari** `max-width: 100%`, `object-fit: cover` ve sabit `height: 200px` ile yonettim. Bu, gorsellerin orantisini koruyarak kapsayiciya sigmesini saglar.
