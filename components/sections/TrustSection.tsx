"use client";
import { useState } from "react";
import { Star, ChevronDown } from "lucide-react";

const hexStyle = { clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" };

const reviews = [
  { name: "Müge Yıldırım", city: "İstanbul", flag: "🇹🇷", rating: 5, date: "Mar 2025", title: "Kışın ısı farkı inanılmaz", body: "Kuzeye bakan yatak odama taktırdım. Tek kat cam vardı, ama perde sonrası oda fark edilir ısındı. Sabahları yataktan kalkmak artık işkence değil." },
  { name: "Ercan Demirtaş", city: "Köln, DE", flag: "🇩🇪", rating: 5, date: "Oca 2025", title: "DHL ile 6 günde, sıkı paket", body: "Almanya'dan sipariş verirken hasar konusunda çok endişeliydim. İçi balonlu naylon ve kartonla sıkıştırılmıştı. Profil çizilmemiş, perde hasar görmemiş. 45 dakikada monte ettim." },
  { name: "Selin Kaya", city: "Ankara", flag: "🇹🇷", rating: 5, date: "Şub 2025", title: "Bebek odası için biçilmiş kaftan", body: "6 aylık bebek için tam karanlık lazımdı. Blackout kumaşı seçtim. Gündüz uyuturken camın önüne battaniye asmaktan kurtuldum. Sokak sesi de belirgin azaldı." },
  { name: "Ahmad Rahimi", city: "Rotterdam, NL", flag: "🇳🇱", rating: 5, date: "Şub 2025", title: "Energy bill dropped noticeably", body: "Heatbill in our apartment was always high. After installing honeycomb blinds in all rooms, the bill dropped noticeably. Product quality very good, delivery 8 days." },
  { name: "Zeynep Arslan", city: "Bursa", flag: "🇹🇷", rating: 5, date: "Ara 2024", title: "3 farklı ölçü, hepsi milimetre tam", body: "3 farklı genişlikte pencere var. Üçü de hatasız geldi. Kumaş rengi kataloktakiyle birebir. Beyaz seçtim, odayı aydınlattı." },
  { name: "Mehmet Çelik", city: "Frankfurt, DE", flag: "🇩🇪", rating: 5, date: "Kas 2024", title: "İkinci kez sipariş verdim", body: "İlk siparişte yatak odasına taktırdım, çok memnun oldum. Bu sefer çocuk odasına da aldım. Ölçü konusunda asla hata yapmıyor." },
  { name: "Ayşe Öztürk", city: "İzmir", flag: "🇹🇷", rating: 4, date: "Eki 2024", title: "Kumaş şık, mekanizma başta biraz sertti", body: "Perde çok güzel görünüyor. İlk haftada ip mekanizması biraz sertti, sonradan yumuşadı. Genel olarak kaliteli." },
  { name: "Hasan Yılmaz", city: "Viyana, AT", flag: "🇦🇹", rating: 5, date: "Eki 2024", title: "Wien'e 9 günde geldi", body: "Beklediğimden kısa sürdü. Takip numarasıyla her adımı izledim. Kumaş kalitesi Avusturya mağazalarından daha iyi, şaşırdım." },
  { name: "Nurcan Solmaz", city: "Adana", flag: "🇹🇷", rating: 5, date: "Eyl 2024", title: "Yazın serin, kışın ılık", body: "Güney cephede oturuyorum. Yaz aylarında fırın gibi olurdu. Perde sonrası klima tüketimim belirgin düştü. Faturada farkı gördüm." },
  { name: "Pierre Moreau", city: "Paris, FR", flag: "🇫🇷", rating: 5, date: "Eyl 2024", title: "Livraison rapide, qualité excellente", body: "Reçu en 7 jours à Paris. La qualité du tissu est supérieure aux marques locales. L'isolation thermique est réelle. Très satisfait." },
  { name: "Bülent Ergin", city: "Kocaeli", flag: "🇹🇷", rating: 5, date: "Ağu 2024", title: "Fabrikaya gidip aldım, etkilendim", body: "Gebze'deki tesise bizzat gittim. Temiz ve düzenli bir üretim hattı. Kaliteyi gözlerimle gördükten sonra sipariş verdim." },
  { name: "Tanja Hoffmann", city: "Münih, DE", flag: "🇩🇪", rating: 5, date: "Ağu 2024", title: "Schallschutz wirklich spürbar", body: "Ich wohne an einer belebten Straße. Die Geräuschdämmung ist tatsächlich wahrnehmbar. Preis-Leistungs-Verhältnis besser als deutsche Anbieter." },
  { name: "Gülay Başaran", city: "Trabzon", flag: "🇹🇷", rating: 5, date: "Tem 2024", title: "Nem ve yoğuşma da azaldı", body: "Trabzon'da kış uzun ve nemli. Bu perde hem ısıyı tutuyor hem de nemin cama yüklenmesini engelliyor. Yoğuşma sorunu belirgin azaldı." },
  { name: "Christoph Bauer", city: "Zürih, CH", flag: "🇨🇭", rating: 5, date: "Haz 2024", title: "Schweizer Qualitätserwartungen erfüllt", body: "In der Schweiz haben wir hohe Ansprüche. Die Honeycomb-Jalousien haben diese erfüllt. Lieferzeit war 8 Tage, Stoff ist robust." },
  { name: "Semra Yücel", city: "Ankara", flag: "🇹🇷", rating: 5, date: "Haz 2024", title: "Ses yalıtımı gerçekten işe yarıyor", body: "Sokak gürültüsünden şikâyetçiyseniz bunu deneyin. Komşu arabası, yol sesi azalıyor. Tamamen yok olmuyor ama fark çok belirgin." },
  { name: "Leila Khorasani", city: "Amsterdam, NL", flag: "🇳🇱", rating: 5, date: "May 2024", title: "Perfect voor ons hoekhuis", body: "Ons huis heeft veel ramen. De op maat gesneden jaloezieën passen precies. De kleur zandbeige past mooi bij de muren." },
  { name: "Tarık Şahin", city: "İstanbul", flag: "🇹🇷", rating: 4, date: "May 2024", title: "Kalite üstün, teslimat 7 gün oldu", body: "Bu fiyata bu kalite olmaz diyebileceğiniz türden. Kargo 5 gün yerine 7 günde geldi ama ürünü elinize aldığında affediyorsunuz." },
  { name: "Elena Papadopoulos", city: "Brüksel, BE", flag: "🇧🇪", rating: 5, date: "Nis 2024", title: "Très bon rapport qualité/prix", body: "Commandé pour trois chambres. Arrivé en Belgique en 9 jours sans dommage. La qualité du tissu dépasse les marques locales." },
  { name: "Kemal Aydın", city: "Kayseri", flag: "🇹🇷", rating: 5, date: "Nis 2024", title: "Ofise 12 adet toplu sipariş", body: "12 pencere için aynı renk ve model aldık. Toplu sipariş için özel fiyat verildi. Teslimat hızlıydı, iş aksamadı." },
  { name: "Ingrid Larsen", city: "Oslo, NO", flag: "🇳🇴", rating: 5, date: "Kas 2023", title: "Real difference in cold climate", body: "Oslo winters are harsh. The window no longer feels cold to the touch. Double-cell design clearly traps air. Very happy." },
  { name: "Sedat Polat", city: "Eskişehir", flag: "🇹🇷", rating: 4, date: "Kas 2023", title: "Numune istedim, 3 günde geldi", body: "120 renk seçeneğinden doğruyu bulmak zordu. WhatsApp'tan numune istedim, 3 günde elime ulaştı. Sonuçta doğru rengi seçtim." },
  { name: "Fatma Erdoğan", city: "Samsun", flag: "🇹🇷", rating: 5, date: "Eyl 2023", title: "Çocuğumun alerjisi azaldı", body: "Toz tutmayan kumaş yapısı sayesinde odada toz birikimi azaldı. Alerjik riniti olan çocuğumun şikâyetleri belirgin düştü. Beklenmedik bir fayda." },
  { name: "Lars Eriksson", city: "Stockholm, SE", flag: "🇸🇪", rating: 5, date: "Ağu 2023", title: "Swedish summer nights sorted", body: "In Sweden, summers mean very late sunsets. Blackout honeycomb makes the bedroom dark at 10pm when sun is still up. Winters warmer too." },
  { name: "Gül Tekin", city: "Mersin", flag: "🇹🇷", rating: 5, date: "Tem 2023", title: "Sahil evinde 2 yıl, renk solmadı", body: "Sahilde tuz ve nem yüksek. Kumaşın nem çekmediğini ve solmadığını söylediklerinde inanmadım. 2 yıl sonra gerçekten aynı renkte." },
  { name: "Carlos Mendez", city: "Barselona, ES", flag: "🇪🇸", rating: 5, date: "Haz 2023", title: "Calidad superior al precio", body: "En Barcelona pocas opciones de calidad. Llegó en 7 días, la reducción de calor en verano es notable. Muy recomendado." },
  { name: "Murat Öztürk", city: "Diyarbakır", flag: "🇹🇷", rating: 5, date: "May 2023", title: "Yazın 40 derece, perde fark yarattı", body: "Yaz ayları burada zorlu geçer. Perde taktıktan sonra odanın sıcaklığı ölçülebilir azaldı. Klima süresini yarıya indirdim." },
  { name: "Birgit Schmitt", city: "Düsseldorf, DE", flag: "🇩🇪", rating: 5, date: "Mar 2023", title: "Tolles Produkt aus der Türkei", body: "Ich war skeptisch ob die Qualität stimmt. Das Produkt hat mich überrascht — Nähte sauber, Stoff hochwertig. Klare Empfehlung." },
  { name: "Esra Çakır", city: "Antalya", flag: "🇹🇷", rating: 5, date: "Şub 2023", title: "Otel odalarına 24 adet aldık", body: "Butik otelimizin tüm odaları için sipariş verdim. Motorlu modeller oda sistemiyle entegre çalışıyor. Misafirler sürekli övüyor." },
  { name: "Stefan Gruber", city: "Graz, AT", flag: "🇦🇹", rating: 5, date: "Oca 2023", title: "Heizkosten deutlich gesunken", body: "Nach der Installation habe ich die Heizung weniger gebraucht. Die Wärmedämmung der Honeycomb-Struktur ist effektiv. Zahlt sich mittelfristig." },
  { name: "Derya Karataş", city: "İstanbul", flag: "🇹🇷", rating: 5, date: "Ara 2022", title: "Minimalist tasarımla mükemmel uyum", body: "Evimiz sade ve beyaz. Pek çok perde stili mekânı bozuyor. Honeycomb çok şık ve temiz duruyor. Tam aradığım estetik." },
  { name: "Marco Bianchi", city: "Milano, IT", flag: "🇮🇹", rating: 5, date: "Kas 2022", title: "Ottima qualità e spedizione veloce", body: "Consegnato a Milano in 8 giorni. La qualità del tessuto è sorprendentemente buona. L'isolamento termico è evidente. Lo consiglio." },
  { name: "Hatice Doğan", city: "Konya", flag: "🇹🇷", rating: 5, date: "Eki 2022", title: "5 pencere, 5 farklı ölçü, hata yok", body: "Evimin 5 penceresi var, hepsi farklı boyutta. Her biri etiketlenmiş şekilde, ayrı ayrı paketlenmiş geldi. Montaj ekibi de karıştırmadı." },
  { name: "Bertrand Dupont", city: "Lyon, FR", flag: "🇫🇷", rating: 5, date: "Eyl 2022", title: "Nuits d'été beaucoup plus confortables", body: "Les étés à Lyon sont chauds. Le store honeycomb blackout rend la chambre sombre et plus fraîche. Livraison 7 jours, emballage parfait." },
  { name: "Özgür Yaman", city: "Gaziantep", flag: "🇹🇷", rating: 5, date: "Ağu 2022", title: "Zemin kat, artık mahremiyetim var", body: "Zemin katta oturuyorum, yoldan içeri bakılabiliyordu. Yarı geçirgen perde seçtim; dışarıdan içerisi görünmüyor, içeriden dışarısı görünüyor." },
];

const INITIAL_SHOW = 9;

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={12} className={s <= rating ? "fill-amber-400 text-amber-400" : "text-gray-200 fill-gray-200"} />
      ))}
    </div>
  );
}

export default function TrustSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? reviews : reviews.slice(0, INITIAL_SHOW);
  const avg = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="yorumlar" className="section-py bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-[#eef7ee] text-[#83bd81] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Müşteri Yorumları
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404e5e] mb-3">
            Gerçek Kullanıcılar,{" "}
            <span className="text-gradient">Gerçek Deneyimler</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(s => <Star key={s} size={20} className="fill-amber-400 text-amber-400" />)}
            </div>
            <span className="text-2xl font-extrabold text-[#404e5e]">{avg}</span>
            <span className="text-[#5a6a7e] text-sm">/ 5 — {reviews.length} değerlendirme</span>
          </div>
          <p className="text-[#5a6a7e] text-sm max-w-xl mx-auto">
            Türkiye'den 30&apos;dan fazla Avrupa şehrine; gerçek kullanıcıların{" "}
            <a href="/" className="text-[#83bd81] font-semibold hover:underline">honeycomb perde</a> deneyimleri.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((r) => (
            <div key={r.name + r.city} className="card-hover bg-[#f8faf8] hover:bg-white rounded-2xl p-5 border border-[#e8f3e8] flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-10 h-[46px] flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ ...hexStyle, background: "linear-gradient(135deg, #83bd81, #404e5e)" }}
                  >
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#404e5e] text-sm">{r.name}</div>
                    <div className="text-[11px] text-[#5a6a7e]">{r.flag} {r.city} · {r.date}</div>
                  </div>
                </div>
                <StarRow rating={r.rating} />
              </div>
              <div>
                <div className="font-semibold text-[#404e5e] text-sm mb-1">{r.title}</div>
                <p className="text-xs text-[#5a6a7e] leading-relaxed line-clamp-4">{r.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show more */}
        {!showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 border-2 border-[#83bd81] text-[#83bd81] hover:bg-[#83bd81] hover:text-white font-bold px-7 py-3 rounded-xl transition-all"
            >
              Tüm Yorumları Gör ({reviews.length})
              <ChevronDown size={18} />
            </button>
          </div>
        )}

        {/* Trust stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: "%97", lbl: "Memnuniyet Oranı" },
            { val: "40K+", lbl: "Teslim Edilen Perde" },
            { val: "30+", lbl: "Avrupa Ülkesi" },
            { val: "2 Yıl", lbl: "Fabrika Garantisi" },
          ].map(({ val, lbl }) => (
            <div key={lbl} className="bg-gradient-to-br from-[#eef7ee] to-white rounded-2xl px-5 py-5 text-center border border-[#e8f3e8]">
              <div className="text-2xl font-extrabold text-[#83bd81]">{val}</div>
              <div className="text-xs text-[#5a6a7e] mt-1 font-medium">{lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
