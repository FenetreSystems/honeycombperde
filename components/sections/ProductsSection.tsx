import { ArrowRight, Check } from "lucide-react";

const hexStyle = { clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" };

const mainProduct = {
  name: "Honeycomb Perde",
  slug: "honeycomb-perde",
  tagline: "Bal Peteği Hücre Teknolojisi",
  description:
    "Çift ya da tek katmanlı hava cepleri, camla oda arasında doğal bir yalıtım bariyeri kurar. Fenetre Systems'ın geliştirdiği özel kumaş, ışığı istediğiniz oranda geçirirken ısıyı muhafaza eder. Kışın radyatör masrafını azaltır; yazın klima yükünü hafifletir.",
  features: [
    "Çift & tek hücreli model seçenekleri",
    "Güneşlik, yarı geçirgen, blackout kumaş",
    "25mm, 38mm, 64mm katlama derinliği",
    "İpli, yaylı (cordless) ve motorlu mekanizma",
    "Özel ölçüye üretim — standart kesim yok",
    "Solmaz boyama teknolojisi, silinebilir kumaş",
  ],
  specs: [
    { label: "Isı Yalıtım Değeri (R)", value: "1.2 – 2.4 m²K/W" },
    { label: "Ses Azaltma", value: "25 – 38 dB" },
    { label: "UV Engelleme", value: "%96'ya kadar" },
    { label: "Katlama Derinliği", value: "25 / 38 / 64 mm" },
    { label: "Genişlik Aralığı", value: "40 cm – 400 cm" },
    { label: "Renk Paleti", value: "120+ ton" },
  ],
};

const otherProducts = [
  {
    name: "Sineklik",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="4" y="4" width="32" height="32" rx="3" stroke="#83bd81" strokeWidth="2" />
        <path d="M4 10h32M4 16h32M4 22h32M4 28h32M10 4v32M16 4v32M22 4v32M28 4v32" stroke="#83bd81" strokeWidth="1.2" strokeOpacity="0.5" />
      </svg>
    ),
    desc: "Isıya dayanıklı alüminyum profil ve yüksek gözenekli polyester ağ. Yazın sinekten tam koruma, kışın rüzgar bariyeri.",
  },
  {
    name: "Plise Sineklik",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="4" y="4" width="32" height="32" rx="3" stroke="#404e5e" strokeWidth="2" />
        <path d="M10 4v32M16 4v32M22 4v32M28 4v32" stroke="#404e5e" strokeWidth="2" strokeOpacity="0.35" />
        <path d="M4 10h32M4 22h32" stroke="#83bd81" strokeWidth="1.5" strokeOpacity="0.5" />
      </svg>
    ),
    desc: "Akordeon katlamalı yapı; kullanmadığınızda iki yana toplanır. Dar pervazlarda bile yer kaplamaz.",
  },
  {
    name: "Plise Perde",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="5" y="4" width="30" height="32" rx="2" fill="#eef7ee" stroke="#83bd81" strokeWidth="1.5" />
        {[8, 14, 20, 26, 32].map((y, i) => (
          <path key={i} d={`M5 ${y} L20 ${y - 3} L35 ${y}`} stroke="#83bd81" strokeWidth="1.5" fill="none" />
        ))}
      </svg>
    ),
    desc: "Hafif polipropilen kumaş ve estetik kıvrımlar. Minimalist mekânlar için ideal; filtrelenmiş doğal ışık.",
  },
  {
    name: "Jaluzi Perde",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="5" y="6" width="30" height="3" rx="1.5" fill="#404e5e" fillOpacity="0.8" />
        {[12, 18, 24, 30].map((y, i) => (
          <rect key={i} x="5" y={y} width="30" height="2.5" rx="1.25" fill="#404e5e" fillOpacity={0.6 - i * 0.08} />
        ))}
        <line x1="12" y1="6" x2="12" y2="36" stroke="#83bd81" strokeWidth="1" />
        <line x1="28" y1="6" x2="28" y2="36" stroke="#83bd81" strokeWidth="1" />
      </svg>
    ),
    desc: "Alüminyum lamel teknolojisi. Açı ayarıyla %0'dan %100'e tam ışık kontrolü; ofis ve ticari alanlar için tercih.",
  },
  {
    name: "Düet Perde",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="5" y="4" width="30" height="32" rx="2" fill="white" stroke="#404e5e" strokeWidth="1.5" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect key={i} x="5" y={4 + i * 5} width="30" height="2.5" rx="0" fill={i % 2 === 0 ? "#83bd81" : "white"} fillOpacity={i % 2 === 0 ? 0.5 : 0} />
        ))}
        <rect x="5" y="4" width="30" height="32" rx="2" stroke="#404e5e" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    desc: "Şeffaf ve opak bantların dönüşümlü örüntüsü. Güneş açısına göre ışık ve mahremiyet dengesini ayarlar.",
  },
  {
    name: "Zip Perde",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="5" y="4" width="30" height="32" rx="2" fill="#f0f5f0" stroke="#404e5e" strokeWidth="1.5" />
        <line x1="5" y1="4" x2="5" y2="36" stroke="#83bd81" strokeWidth="3" />
        <line x1="35" y1="4" x2="35" y2="36" stroke="#83bd81" strokeWidth="3" />
        <rect x="8" y="8" width="24" height="24" rx="1" fill="#83bd81" fillOpacity="0.15" />
      </svg>
    ),
    desc: "Fermuarlı kenar ray sistemi; rüzgar ve güneş baskısına karşı tam sızdırmazlık. Dış cephe ve teras kullanımı.",
  },
];

export default function ProductsSection() {
  return (
    <section id="urunler" className="section-py bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#eef7ee] text-[#83bd81] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Ürün Ailesi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404e5e] mb-4">
            Her Pencere İçin{" "}
            <span className="text-gradient">Doğru Çözüm</span>
          </h2>
          <p className="text-[#5a6a7e] max-w-2xl mx-auto text-base leading-relaxed">
            Fenetre Systems, perde sistemlerinde altı farklı ürün kategorisiyle her mekân gereksinimini karşılar. Ölçüye özel üretim, standart kesim yoktur.
          </p>
        </div>

        {/* Ana ürün: Honeycomb */}
        <div className="bg-gradient-to-br from-[#eef7ee] via-white to-[#f8faf8] rounded-3xl border border-[#83bd81]/25 overflow-hidden mb-12 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Sol: Görsel */}
            <div className="relative p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-[#eef7ee] to-white">
              <div className="relative w-full max-w-xs">
                {/* Büyük honeycomb SVG illustrasyon */}
                <svg viewBox="0 0 280 320" className="w-full drop-shadow-xl" xmlns="http://www.w3.org/2000/svg" aria-label="Honeycomb Perde Detay">
                  {/* Çerçeve */}
                  <rect x="10" y="10" width="260" height="300" rx="8" fill="white" stroke="#e8f3e8" strokeWidth="3" />
                  {/* Üst ray */}
                  <rect x="10" y="10" width="260" height="16" rx="4" fill="#404e5e" fillOpacity="0.15" />
                  {/* Hexagon hücreler — gerçek 6 gen */}
                  {Array.from({ length: 6 }, (_, row) =>
                    Array.from({ length: 5 }, (_, col) => {
                      const cw = 44;
                      const ch = 26;
                      const gap = 4;
                      const qx = cw / 4;   // 11
                      const hy = ch / 2;   // 13
                      const x = 18 + col * (cw + gap) + (row % 2 === 1 ? (cw + gap) / 2 : 0);
                      const y = 36 + row * (ch + gap + 4);
                      const alpha = 0.12 + ((row * 5 + col) % 7) * 0.04;
                      const pts = `${x+qx},${y} ${x+3*qx},${y} ${x+cw},${y+hy} ${x+3*qx},${y+ch} ${x+qx},${y+ch} ${x},${y+hy}`;
                      return (
                        <polygon
                          key={`${row}-${col}`}
                          points={pts}
                          fill="#83bd81"
                          fillOpacity={alpha}
                          stroke="#83bd81"
                          strokeWidth="0.8"
                          strokeOpacity="0.4"
                        />
                      );
                    })
                  )}
                  {/* Alt ray */}
                  <rect x="10" y="294" width="260" height="16" rx="4" fill="#404e5e" fillOpacity="0.12" />
                  {/* İp mekanizması */}
                  <line x1="80" y1="26" x2="80" y2="295" stroke="#404e5e" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 3" />
                  <line x1="200" y1="26" x2="200" y2="295" stroke="#404e5e" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 3" />
                  {/* Label */}
                  <text x="140" y="310" textAnchor="middle" fill="#83bd81" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif">
                    Fenetre Systems · Honeycomb Serisi
                  </text>
                </svg>
                {/* Floating label */}
                <div className="absolute -right-4 top-8 bg-[#83bd81] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  Çift Hücreli
                </div>
                <div className="absolute -left-4 bottom-12 bg-[#404e5e] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  Enerji A+ Sınıfı
                </div>
              </div>
            </div>

            {/* Sağ: İçerik */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#83bd81] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  Ana Ürün
                </span>
                <span className="text-[#5a6a7e] text-sm">{mainProduct.tagline}</span>
              </div>

              <h2 className="text-3xl font-extrabold text-[#404e5e] mb-4">
                <a href="/" className="hover:text-[#83bd81] transition-colors">
                  {mainProduct.name}
                </a>
              </h2>

              <p className="text-[#5a6a7e] text-base leading-relaxed mb-6">
                {mainProduct.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {mainProduct.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#404e5e]">
                    <Check size={16} className="text-[#83bd81] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Specs table */}
              <div className="border border-[#e8f3e8] rounded-2xl overflow-hidden mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#eef7ee]">
                      <th className="text-left px-4 py-2.5 text-[#404e5e] font-semibold text-xs uppercase tracking-wide">Teknik Özellik</th>
                      <th className="text-left px-4 py-2.5 text-[#404e5e] font-semibold text-xs uppercase tracking-wide">Değer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mainProduct.specs.map((s, i) => (
                      <tr key={s.label} className={i % 2 === 0 ? "bg-white" : "bg-[#f8faf8]"}>
                        <td className="px-4 py-2.5 text-[#5a6a7e]">{s.label}</td>
                        <td className="px-4 py-2.5 font-semibold text-[#404e5e]">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <a
                href="https://wa.me/905403363873?text=Honeycomb%20Perde%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#83bd81] hover:bg-[#6aaa68] text-white font-bold px-7 py-3.5 rounded-xl shadow-md transition-all"
              >
                Fiyat Teklifi Al
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Diğer ürünler */}
        <h3 className="text-xl font-bold text-[#404e5e] mb-6 text-center">
          Diğer Ürünlerimiz
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProducts.map((p) => (
            <div key={p.name} className="card-hover bg-white rounded-2xl border border-[#e8f3e8] p-6 flex flex-col gap-4">
              <div className="w-14 h-16 flex items-center justify-center bg-[#eef7ee]" style={hexStyle}>
                {p.icon}
              </div>
              <div>
                <h4 className="font-bold text-[#404e5e] text-base mb-2">
                  <a href="/" className="hover:text-[#83bd81] transition-colors">
                    {p.name}
                  </a>
                </h4>
                <p className="text-sm text-[#5a6a7e] leading-relaxed">{p.desc}</p>
              </div>
              <a
                href="https://wa.me/905403363873"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 text-[#83bd81] font-semibold text-sm hover:text-[#6aaa68]"
              >
                Bilgi Al <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
