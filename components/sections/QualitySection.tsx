import { CheckCircle2, FlaskConical, Layers3, Recycle } from "lucide-react";

const hexStyle = { clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" };

const materials = [
  {
    icon: Layers3,
    title: "Çok Katmanlı Poliester Örgü",
    body: "İç kısımdaki hareketsiz hava cebi, sesin ve ısının geçişini engeller. Dış katman, UV ışınlarını filtreleyen özel pigment boyayla işlenmiştir. Mekanik gerilme testlerinde 50.000 açma-kapama döngüsüne dayanıklılığı doğrulanmıştır.",
  },
  {
    icon: FlaskConical,
    title: "Kimyasal Açıdan Güvenli Kumaş",
    body: "RoHS ve OEKO-TEX Standard 100 sertifikası; zararlı kimyasal madde içermediğini kanıtlar. Çocuk odaları ve hastaneler için ek güvence sağlar. Her üretim serisinde bağımsız laboratuvar testi yapılır.",
  },
  {
    icon: CheckCircle2,
    title: "Kalite Kontrol Aşamaları",
    body: "Üretimde dört ayrı kontrol noktası vardır: kumaş giriş kontrolü, kesim doğrulama, montaj testi ve çıkış görsel denetimi. Hata oranı, yüzde 0.3'ün altında tutulmaktadır.",
  },
  {
    icon: Recycle,
    title: "Çevreci Üretim Süreçleri",
    body: "Kesim atıkları geri dönüşüm sistemine alınır. Su bazlı boyama prosesi, organik solvent kullanımını sıfırlar. 2025 yılı hedefi: üretim başına karbon ayak izini yüzde 20 azaltmak.",
  },
];

export default function QualitySection() {
  return (
    <section id="kalite" className="section-py bg-[#f8faf8] hc-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="inline-block bg-[#eef7ee] text-[#83bd81] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Malzeme & Kalite
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404e5e] mb-4">
            Üstün Kumaş,{" "}
            <span className="text-gradient">Uzun Ömürlü Performans</span>
          </h2>
          <p className="text-[#5a6a7e] max-w-2xl mx-auto text-base">
            Fenetre Systems&apos;ın{" "}
            <a href="/" className="text-[#83bd81] font-semibold hover:underline">hücreli perde</a>{" "}
            kumaşları, Türkiye&apos;deki fabrikamızda özel formüle edilmiş ipliklerle dokunur.
            Yabancı kaynak kullanılmaz; hammaddeden bitmiş ürüne her aşama kendi kontrolümüzdedir.
            <a href="/" className="text-[#83bd81] font-semibold hover:underline ml-1">Enerji tasarruflu perde</a>{" "}
            tercih edenler için kumaş R-değerleri bağımsız laboratuvarda test edilmiş, belgelenmiştir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {materials.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card-hover bg-white rounded-2xl p-7 border border-[#e8f3e8] shadow-sm flex gap-5">
              <div
                className="w-14 h-16 flex items-center justify-center bg-[#eef7ee] shrink-0"
                style={hexStyle}
              >
                <Icon size={22} className="text-[#83bd81]" />
              </div>
              <div>
                <h3 className="font-bold text-[#404e5e] text-base mb-2">{title}</h3>
                <p className="text-sm text-[#5a6a7e] leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sertifikalar */}
        <div className="bg-white rounded-3xl border border-[#e8f3e8] p-8 shadow-sm mb-8">
          <h3 className="text-lg font-bold text-[#404e5e] mb-6 text-center">Sertifikalar & Standartlar</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { code: "EN 13120", name: "Pencere Örtüsü Standardı" },
              { code: "CE", name: "Avrupa Uygunluk" },
              { code: "RoHS", name: "Zararlı Madde Yok" },
              { code: "OEKO-TEX", name: "Tekstil Güvenliği" },
              { code: "ISO 9001", name: "Kalite Yönetimi" },
            ].map(({ code, name }) => (
              <div key={code} className="flex flex-col items-center text-center gap-2 bg-[#f8faf8] rounded-2xl p-4 border border-[#e8f3e8]">
                <div
                  className="w-14 h-16 flex items-center justify-center text-white font-bold text-[11px] text-center leading-tight"
                  style={{ ...hexStyle, background: "linear-gradient(135deg, #83bd81, #6aaa68)" }}
                >
                  {code}
                </div>
                <div className="text-[10px] text-[#5a6a7e] font-medium leading-tight">{name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Mevsim Koruma Bloğu */}
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {/* Kış */}
          <div className="bg-gradient-to-br from-[#eef7ee] to-white rounded-2xl border border-[#83bd81]/30 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-14 flex items-center justify-center text-xl"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", background: "#404e5e" }}
              >
                ❄️
              </div>
              <div>
                <div className="font-bold text-[#404e5e] text-base">Kış Performansı</div>
                <div className="text-[#83bd81] text-xs font-semibold">Isı Kaybını Engeller</div>
              </div>
            </div>
            <p className="text-sm text-[#5a6a7e] leading-relaxed mb-4">
              Çift hücreli yapının iki hava cebi, pencere camıyla oda arasında hareketsiz bir tampon oluşturur. Radyatörden yükselen sıcaklık camdan dışarı kaçmak yerine odada tutulur. Isıtma süresi kısalır, termostat daha erken kapanır.
            </p>
            <ul className="space-y-1.5 text-xs text-[#5a6a7e]">
              {["R-değeri 2.4 m²K/W'a kadar", "Cam yüzeyinde yoğuşmayı azaltır", "Radyatör verimliliğini artırır", "Soğuk hava akımını (draft) keser"].map(f => (
                <li key={f} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#83bd81] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Yaz */}
          <div className="bg-gradient-to-br from-[#fff9ee] to-white rounded-2xl border border-amber-200/60 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-14 flex items-center justify-center text-xl"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", background: "#f59e0b" }}
              >
                ☀️
              </div>
              <div>
                <div className="font-bold text-[#404e5e] text-base">Yaz Performansı</div>
                <div className="text-amber-500 text-xs font-semibold">Güneş Isısını Dışarıda Tutar</div>
              </div>
            </div>
            <p className="text-sm text-[#5a6a7e] leading-relaxed mb-4">
              Yaz güneşinin radyant enerjisi, camdan geçerek odayı hızla ısıtır — bu yükün büyük bölümünü klima taşır. Honeycomb perde, güneş ışınlarını yüzde 94'e varan oranda bloke ederek iç mekan sıcaklığını düşürür. Klima daha az çalışır, tüketim düşer.
            </p>
            <ul className="space-y-1.5 text-xs text-[#5a6a7e]">
              {["%94'e kadar güneş ısısı engelleme", "UV radyasyonunu %96 filtreler", "İç yüzey sıcaklığını 6-8°C düşürür", "Klima çalışma süresini kısaltır"].map(f => (
                <li key={f} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mevsimsel karşılaştırma tablosu */}
        <div className="bg-white rounded-3xl border border-[#e8f3e8] overflow-hidden shadow-sm mb-8">
          <div className="px-6 py-4 bg-gradient-to-r from-[#eef7ee] to-white">
            <h3 className="font-bold text-[#404e5e] text-base">Mevsimsel Enerji Performansı</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#f8faf8] border-b border-[#e8f3e8]">
                  <th className="px-5 py-3 text-left text-[#404e5e] font-bold text-xs uppercase tracking-wide">Sezon</th>
                  <th className="px-5 py-3 text-left text-[#404e5e] font-bold text-xs uppercase tracking-wide">Sorun</th>
                  <th className="px-5 py-3 text-left text-[#404e5e] font-bold text-xs uppercase tracking-wide">Honeycomb'un Etkisi</th>
                  <th className="px-5 py-3 text-left text-[#404e5e] font-bold text-xs uppercase tracking-wide">Tahmini Tasarruf</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["❄️  Kış", "Cam üzerinden ısı kaybı", "Hava cebi camı yalıtır, radyatör daha verimli çalışır", "%20-30 ısıtma"],
                  ["☀️  Yaz", "Güneş radyant ısısı içeri girer", "Solar enerjiyi %94 keser, klima yükü azalır", "%20-25 soğutma"],
                  ["🍂  İlkbahar / Sonbahar", "Ani sıcaklık değişimleri", "Tampon hava tabakası geçiş dönemlerini dengeler", "Isıtma/soğutma başlangıcını geciktirir"],
                ].map(([season, problem, effect, saving], i) => (
                  <tr key={season} className={i % 2 === 0 ? "bg-white" : "bg-[#f8faf8]"}>
                    <td className="px-5 py-3 font-semibold text-[#404e5e] text-xs whitespace-nowrap">{season}</td>
                    <td className="px-5 py-3 text-[#5a6a7e] text-xs">{problem}</td>
                    <td className="px-5 py-3 text-[#5a6a7e] text-xs">{effect}</td>
                    <td className="px-5 py-3 text-[#83bd81] font-semibold text-xs">{saving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Fabric options table */}
        <div className="bg-white rounded-3xl border border-[#e8f3e8] overflow-hidden shadow-sm">
          <div className="px-6 py-4 bg-gradient-to-r from-[#eef7ee] to-white">
            <h3 className="font-bold text-[#404e5e] text-base">Kumaş Kategorileri</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#f8faf8] border-b border-[#e8f3e8]">
                  <th className="px-5 py-3 text-left font-bold text-[#404e5e] text-xs uppercase tracking-wide">Kumaş Tipi</th>
                  <th className="px-5 py-3 text-left font-bold text-[#404e5e] text-xs uppercase tracking-wide">Işık Geçirgenliği</th>
                  <th className="px-5 py-3 text-left font-bold text-[#404e5e] text-xs uppercase tracking-wide">Mahremiyet</th>
                  <th className="px-5 py-3 text-left font-bold text-[#404e5e] text-xs uppercase tracking-wide">Kullanım Alanı</th>
                  <th className="px-5 py-3 text-left font-bold text-[#404e5e] text-xs uppercase tracking-wide">Enerji Katkısı</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Translucent (Yarı Şeffaf)", "%10 - %30", "Orta", "Oturma odası, mutfak", "★★★☆☆"],
                  ["Dim-Out (Karartmalı)", "%3 - %8", "Yüksek", "Yatak odası, çocuk odası", "★★★★☆"],
                  ["Blackout (Tam Karartma)", "%0", "Tam", "Sinema odası, bebek odası", "★★★★★"],
                  ["Solar Screen (Güneşlik)", "%5 - %14", "Düşük", "Cam balkon, teras", "★★★★☆"],
                ].map(([type, light, priv, use, energy], i) => (
                  <tr key={type} className={i % 2 === 0 ? "bg-white" : "bg-[#f8faf8]"}>
                    <td className="px-5 py-3 font-semibold text-[#404e5e] text-xs">{type}</td>
                    <td className="px-5 py-3 text-[#5a6a7e] text-xs">{light}</td>
                    <td className="px-5 py-3 text-[#5a6a7e] text-xs">{priv}</td>
                    <td className="px-5 py-3 text-[#5a6a7e] text-xs">{use}</td>
                    <td className="px-5 py-3 text-[#83bd81] text-xs">{energy}</td>
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
