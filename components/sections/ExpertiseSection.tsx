import { Thermometer, Volume2, Sun, Zap, Layers, Wrench } from "lucide-react";

const hexStyle = { clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" };

const expertiseAreas = [
  {
    icon: Thermometer,
    title: "Isı Yalıtım Mühendisliği",
    body: "Pencere, binanın en zayıf enerji noktasıdır. Tek hücreli honeycomb perdeler R-değerini 1.2 m²K/W'a, çift hücreli modeller ise 2.4 m²K/W'a taşır. Bu, çift camın katkısını pekiştiren ekstra bir bariyer demektir.",
    metric: { val: "2.4", unit: "m²K/W", lbl: "R-Değeri" },
  },
  {
    icon: Volume2,
    title: "Akustik Performans",
    body: "Hücrelerin içindeki hareketsiz hava, ses dalgalarını sönümler. 38mm derin hücreli model, 500 Hz frekans bandında ortalama 32 dB azaltma sağlar. Ev ofisi, bebek odası ve yatak odası için kritik.",
    metric: { val: "32", unit: "dB", lbl: "Ses Azaltma" },
  },
  {
    icon: Sun,
    title: "Güneş Kontrolü & UV Filtre",
    body: "Openness faktörü %0'dan %14'e kadar seçilebilen kumaş yelpazesi; doğal ışığı içeri alırken ultraviyole radyasyonu %96 oranında keser. Mobilya ve zemin kaplamalarının solmasını önler.",
    metric: { val: "%96", unit: "", lbl: "UV Engelleme" },
  },
  {
    icon: Zap,
    title: "4 Mevsim Enerji Tasarrufu",
    body: "Kışın radyatör ısısını dışarı vermez; yazın güneşin radyant enerjisini camdan içeri sokmaz. Isıtma ve soğutma faturasını birlikte ele aldığınızda yıllık tasarruf yüzde 25-30'a ulaşır. Kendi kendini finanse eden bir yatırım.",
    metric: { val: "%30", unit: "", lbl: "Yıllık Fatura Düşüşü" },
  },
  {
    icon: Layers,
    title: "Kumaş Katmanları & Yapı",
    body: "Poliester ve polipropilen ipliklerden oluşan çok katlı örgü; sıcaklık değişimlerinde genleşmez, nem çekmez. Solmaz pigment boyası ile renk garantisi 5 yıl.",
    metric: { val: "5 yıl", unit: "", lbl: "Renk Garantisi" },
  },
  {
    icon: Wrench,
    title: "Mekanizma Çeşitliliği",
    body: "İp sistemi, yaysız cordless, tek zincir ve tam motorlu Somfy/Dooya uyumlu seçenekler. Motorlu modeller akıllı ev sistemi (Z-Wave, Zigbee, WiFi) ile entegre çalışır.",
    metric: { val: "4", unit: "tip", lbl: "Mekanizma" },
  },
];

export default function ExpertiseSection() {
  return (
    <section id="deneyim" className="section-py bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="inline-block bg-[#eef7ee] text-[#83bd81] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Teknik Uzmanlık
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404e5e] mb-4">
            Neden{" "}
            <a href="/" className="text-gradient hover:opacity-80 transition-opacity">
              Honeycomb Perde
            </a>{" "}
            Bu Kadar Etkili?
          </h2>
          <p className="text-[#5a6a7e] max-w-2xl mx-auto text-base leading-relaxed">
            Bal peteği geometrisi, doğanın en verimli yapı formülüdür. Bu formu perde teknolojisine uyarlayan Fenetre Systems, her hücreyi belirli fizik kurallarına göre tasarlar.{" "}
            <a href="/" className="text-[#83bd81] font-semibold hover:underline">Isı yalıtımlı perde</a>{" "}
            arıyorsanız çift hücreli modeller, tek katmanlı sistemlere kıyasla iki kat daha yüksek R-değeri sunar.{" "}
            <a href="/" className="text-[#83bd81] font-semibold hover:underline">Çift hücreli honeycomb perde</a>{" "}
            seçimi, özellikle kuzey ve batı cephe pencerelerde fatura tasarrufunu doğrudan etkiler.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map(({ icon: Icon, title, body, metric }) => (
            <div key={title} className="card-hover group bg-[#f8faf8] hover:bg-white rounded-2xl p-6 border border-[#e8f3e8] transition-all">
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-14 h-16 flex items-center justify-center bg-[#eef7ee] group-hover:bg-[#83bd81] transition-colors"
                  style={hexStyle}
                >
                  <Icon size={22} className="text-[#83bd81] group-hover:text-white transition-colors" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-[#83bd81]">
                    {metric.val}
                    {metric.unit && <span className="text-sm font-semibold ml-0.5">{metric.unit}</span>}
                  </div>
                  <div className="text-[10px] text-[#5a6a7e] font-medium">{metric.lbl}</div>
                </div>
              </div>
              <h3 className="font-bold text-[#404e5e] text-sm mb-2">{title}</h3>
              <p className="text-xs text-[#5a6a7e] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-[#404e5e] mb-6 text-center">
            Perde Türleri Karşılaştırması
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-[#e8f3e8] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#404e5e] text-white">
                  <th className="px-5 py-4 text-left font-semibold">Özellik</th>
                  <th className="px-5 py-4 text-center font-semibold bg-[#83bd81]">Honeycomb</th>
                  <th className="px-5 py-4 text-center font-semibold">Jaluzi</th>
                  <th className="px-5 py-4 text-center font-semibold">Stor Perde</th>
                  <th className="px-5 py-4 text-center font-semibold">Plise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Isı Yalıtımı", "★★★★★", "★★☆☆☆", "★★★☆☆", "★★★☆☆"],
                  ["Ses Azaltma", "★★★★☆", "★☆☆☆☆", "★★☆☆☆", "★★★☆☆"],
                  ["UV Koruma", "★★★★★", "★★★☆☆", "★★★★☆", "★★★★☆"],
                  ["Estetik Görünüm", "★★★★★", "★★★☆☆", "★★★★☆", "★★★★☆"],
                  ["Enerji Tasarrufu", "★★★★★", "★★☆☆☆", "★★★☆☆", "★★★☆☆"],
                  ["Temizlik Kolaylığı", "★★★★☆", "★★★☆☆", "★★★★☆", "★★★☆☆"],
                ].map(([prop, hc, jlz, stor, plise], i) => (
                  <tr key={prop} className={i % 2 === 0 ? "bg-white" : "bg-[#f8faf8]"}>
                    <td className="px-5 py-3 font-medium text-[#404e5e]">{prop}</td>
                    <td className="px-5 py-3 text-center text-[#83bd81] font-semibold bg-[#eef7ee]">{hc}</td>
                    <td className="px-5 py-3 text-center text-[#5a6a7e]">{jlz}</td>
                    <td className="px-5 py-3 text-center text-[#5a6a7e]">{stor}</td>
                    <td className="px-5 py-3 text-center text-[#5a6a7e]">{plise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#5a6a7e] mt-3 text-center">
            * Değerlendirmeler EN 13120 ve PNNL test verilerine dayanmaktadır.
          </p>
        </div>
      </div>
    </section>
  );
}
