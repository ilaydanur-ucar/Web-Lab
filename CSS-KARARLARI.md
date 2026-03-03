# CSS Kararları

## 1. Breakpoint Seçimi
- **Neden 640px ve 1024px seçtim?** Modern cihazların en yaygın çözünürlük kırılımlarını (tablet dikey ve masaüstü) baz alarak endüstri standardı olan Tailwind CSS breakpoint'lerini tercih ettim.
- **İçeriğim bu noktalarda nasıl değişiyor?** Mobil görünümlerde (0-639px) tüm akış `column` (tek sütun) şeklinde dikey yerleşirken, 640px cihazlarda navigasyon ve yetenek kartları Flex ile çoklu yerleşime (`wrap`) geçiyor. 1024px ekranlarda hero section yan yana, proje kartları ise standart 3 sütuna oturuyor.

## 2. Layout Tercihleri
- **Header için neden Flexbox seçtim?** Site logosunu sol uçta, navigasyon bağlantılarını sağ uçta tutmak (`justify-content: space-between`) Flexbox'ın yatay alan (tek boyutlu uzay) yönetimi için kusursuz bir kullanım senaryosuydu.
- **Proje kartları için neden Grid seçtim?** Grid yapısı ile proje kartlarını çoklu satır ve sütun mantığında, kart içindeki elemanları eşitleyerek dizmek (`grid-template-columns: repeat`) çok daha temiz bir iki boyutlu uzay kontrolü sağladı.
- **`auto-fit` mi `auto-fill` mi kullandım, neden?** Esnek grid yapısı içinde boşta kalan (içi boş div'lerin) alanı korumasını istemediğim ve ekran genişledikçe elemanların esnek şekilde (`1fr`) ekrana yayılmasını hedeflediğim için `auto-fit` kullandım.

## 3. Design Tokens
- **Hangi renk paletini seçtim ve neden?** Kişisel markamı yansıtan ve dinamik bir hissiyat veren kontrastlı Kırmızı (`#EB2424`) üzerine koyu alanlar kullandım. Bu kırmızı dikkat çekiciliği korurken okumayı engellememek için `tokens.css` içine gömüldü.
- **Spacing skalasını nasıl belirledim?** Base 4px ölçü matrisini Fluid Typography konsepti ile birleştirerek statik boşluklar (`rem`, `px`) vermek yerine esnek (`clamp()`) değişkenli spacing CSS Token'leri oluşturdum: `var(--space-md)`.
- **Fluid typography için clamp değerlerini nasıl ayarladım?** `clamp(min, vw mantığı, max)` parametreleri sayesinde yazılar mobil boyuttayken 16px seviyesinde tutulup, ekran genişledikçe `vw` değişkeni ile büyüyerek Max değere kadar akıcı (`zoom-out` olmadan) ve erişilebilir metin kalmasını sağladım.

## 4. Responsive Stratejiler
- **Mobile-first yaklaşımını nasıl uyguladım?** Herhangi bir min-width ya da max-width medya sorgusu olmadan, tüm CSS sınıflarının (Flex yönleri, tipografi vb.) "Varsayılan: Mobil" temelinde tasarlanmasını sağladım.
- **Hangi elemanlar breakpoint'lerde değişiyor?** Tüm kapsayıcı (`section`) boşlukları, `grid-template-columns` sayıları, form `fieldset` grid davranışları minimum ekran çözünürlüğü şartına bağlandı.
- **Görsel boyutları nasıl yönettim?** Kart içindeki fotoğraflar gibi kırılmadan kapsayıcı ile sığmasını istediğim elemanlara CSS ile `max-width: 100%` kullanılarak akıcılık katarken, oran bozulmasını önlemek için `object-fit: cover` ve `object-fit: contain` kullanıldı.
