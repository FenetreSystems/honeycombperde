import { Home, Building2, Hotel, Stethoscope, GraduationCap, Briefcase } from "lucide-react";

const hexStyle = { clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" };

const spaces = [
  {
    icon: Home,
    room: "Yatak Odası",
    title: "Tam Karanlık, Tam Dinlenme",
    body: "Blackout honeycomb perde, sabah ışığını yüzde yüz engeller. Ses azaltma özelliği apartman gürültüsünü bastırır. Uyku kalitesini doğrudan etkileyen iki faktör — ışık ve ses — tek üründe çözülür.",
    tags: ["Blackout Kumaş", "Ses Yalıtımı", "Motorlu Seçenek"],
    color: "#404e5e",
  },
  {
    icon: Building2,
    room: "Oturma Odası",
    title: "Gün Işığını Kontrol Edin",
    body: "Yarı geçirgen kumaşlar doğal ışığı filtreler; güneşin radyant ısısını keserken manzarayı kapatmaz. Yaz öğlelerinde oda sıcaklığı belirgin düşer, TV ekranındaki yansıma sorunu da ortadan kalkar.",
    tags: ["Yarı Geçirgen", "Yaz Serinliği", "Manzara Koruma"],
    color: "#83bd81",
  },
  {
    icon: Briefcase,
    room: "Ev Ofisi",
    title: "Konsantrasyonu Artıran Ortam",
    body: "32 dB ses azaltma, video konferanslarda arka plan gürültüsünü minimize eder. Işık kontrolü, ekranda çalışma süresini konfora taşır.",
    tags: ["Akustik Performans", "Işık Yönetimi", "Enerji Tasarrufu"],
    color: "#404e5e",
  },
  {
    icon: Stethoscope,
    room: "Klinik & Muayenehane",
    title: "Hijyenik, Silinebilir Yüzey",
    body: "Islak bez ile silinebilen kumaş yüzeyi, sağlık tesisleri için zorunlu hijyen standardını karşılar. UV engelleme özelliği sterilizasyon süreçlerine destek verir.",
    tags: ["Silinebilir Kumaş", "UV Engelleme", "CE Belgeli"],
    color: "#83bd81",
  },
  {
    icon: Hotel,
    room: "Otel & Konaklama",
    title: "Misafir Memnuniyetini Yükselt",
    body: "Zincirli motorlu sistem, oda yönetim sistemiyle entegre çalışır. Güneşin doğuşuyla açılan, gece kendiliğinden kapanan perde; enerji tasarrufu ve misafir konforu sağlar.",
    tags: ["Motorlu", "Akıllı Ev Uyumlu", "Toplu Sipariş"],
    color: "#404e5e",
  },
  {
    icon: GraduationCap,
    room: "Okul & Eğitim",
    title: "Projeksiyon Odaklı Tasarım",
    body: "Blackout ya da yüzde 5 openness kumaşlar, projeksiyon ve akıllı tahta kullanımını destekler. Ses yalıtımı, komşu sınıflardan gelen gürültüyü azaltır.",
    tags: ["Blackout", "Ses Yalıtımı", "Uzun Ömürlü"],
    color: "#83bd81",
  },
];

export default function ApplicationSection() {
  return (
    <section id="uygulama" className="section-py bg-[#f8faf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="inline-block bg-[#eef7ee] text-[#83bd81] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Uygulama Alanları
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404e5e] mb-4">
            Her Mekânda{" "}
            <span className="text-gradient">Kusursuz Uyum</span>
          </h2>
          <p className="text-[#5a6a7e] max-w-2xl mx-auto text-base">
            <a href="/" className="text-[#83bd81] font-semibold hover:underline">Pliseli perde</a> ve{" "}
            <a href="/" className="text-[#83bd81] font-semibold hover:underline">hücreli perde</a> sistemlerimiz,
            konuttan ticarete geniş bir kullanım yelpazesine sahiptir.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map(({ icon: Icon, room, title, body, tags, color }) => (
            <div key={room} className="card-hover bg-white rounded-2xl overflow-hidden border border-[#e8f3e8] shadow-sm group">
              {/* Header strip */}
              <div
                className="px-6 py-5 flex items-center gap-3"
                style={{ background: `${color}12` }}
              >
                <div
                  className="w-12 h-14 flex items-center justify-center"
                  style={{ ...hexStyle, background: color }}
                >
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>
                    {room}
                  </div>
                  <h3 className="font-bold text-[#2d3847] text-sm">{title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                <p className="text-sm text-[#5a6a7e] leading-relaxed mb-4">{body}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full border"
                      style={{ borderColor: `${color}40`, color, background: `${color}10` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Montaj senaryoları */}
        <div className="mt-14 bg-white rounded-3xl border border-[#e8f3e8] p-8 shadow-sm">
          <h3 className="text-xl font-bold text-[#404e5e] mb-6 text-center">
            Montaj Senaryoları
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#eef7ee] to-white">
                  <th className="px-5 py-3 text-left text-[#404e5e] font-bold">Montaj Türü</th>
                  <th className="px-5 py-3 text-left text-[#404e5e] font-bold">Konum</th>
                  <th className="px-5 py-3 text-left text-[#404e5e] font-bold">Avantaj</th>
                  <th className="px-5 py-3 text-left text-[#404e5e] font-bold">Tercih Alanı</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["İçten Montaj", "Pencere içi", "En iyi yalıtım, temiz görüntü", "Ev, otel"],
                  ["Dıştan Montaj", "Duvara veya tavana", "Daha büyük görünüm, esnek ölçü", "Büyük cepheler"],
                  ["Tavan Montajı", "Doğrudan tavana", "Maksimum cam görünümü", "Yüksek mekânlar"],
                  ["Çerçeve Üstü", "Pencere çerçevesi üstü", "Hızlı kurulum, taşıma kolay", "Kiralık daireler"],
                ].map(([type, pos, adv, pref], i) => (
                  <tr key={type} className={i % 2 === 0 ? "bg-white" : "bg-[#f8faf8]"}>
                    <td className="px-5 py-3 font-semibold text-[#404e5e]">{type}</td>
                    <td className="px-5 py-3 text-[#5a6a7e]">{pos}</td>
                    <td className="px-5 py-3 text-[#5a6a7e]">{adv}</td>
                    <td className="px-5 py-3 text-[#83bd81] font-medium">{pref}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
