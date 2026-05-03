import { Award, Factory, Globe2, HeartHandshake } from "lucide-react";

const hexStyle = { clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" };

const pillars = [
  {
    icon: Factory,
    title: "Türkiye'de Üretim",
    body: "Gebze'deki tesisimizde her ürün birebir ölçüye, sıfır toleransla kesilir. Dış kaynak kullanmadan kontrol ettiğimiz üretim hattı, tutarlı kaliteyi garanti eder.",
  },
  {
    icon: Globe2,
    title: "Avrupa'ya Gönderim",
    body: "Almanya, Hollanda, Belçika, Fransa, Avusturya ve İsviçre başta olmak üzere tüm AB ülkelerine 4-10 işgünü içinde kapıya teslim. Paket, taşıma şoklarına karşı çift katmanlı koruma altında.",
  },
  {
    icon: Award,
    title: "Avrupa Standartları",
    body: "EN 13120 pencere örtüsü standardına uyum, CE uygunluk beyanı ve RoHS sertifikası; ürettiğimiz her partide bu belgeler güncellenir.",
  },
  {
    icon: HeartHandshake,
    title: "Satış Sonrası Destek",
    body: "2 yıl fabrika garantisi. Mekanizma arızası ya da kumaş kusurunda yerinde müdahale veya parça değişimi. Türkiye'de montaj ekibimiz sahada, Avrupa siparişlerinde rehberli kurulum videomuz elinizdedir.",
  },
];

export default function BrandValueSection() {
  return (
    <section id="marka-degeri" className="section-py bg-[#f8faf8] hc-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Story */}
          <div>
            <span className="inline-block bg-[#eef7ee] text-[#83bd81] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              Marka Değeri
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404e5e] leading-tight mb-6">
              Fenetre Systems —{" "}
              <span className="text-gradient">15 Yılda</span> İnşa Edilen Güven
            </h2>

            <p className="text-[#5a6a7e] text-base leading-relaxed mb-4">
              Sektörde başlayan bir atölye hikâyesi, 2010 yılında{" "}
              <strong className="text-[#404e5e]">Fenetre Systems</strong> markasıyla kurumsallaştı. Bugün Kocaeli Gebze'deki fabrikamız, yılda 40.000 pencereyi aşan kapasitesiyle Türkiye'nin önde gelen perde üreticileri arasında yerini aldı.
            </p>
            <p className="text-[#5a6a7e] text-base leading-relaxed mb-4">
              <em className="text-[#404e5e]">Honeycomb perde</em> uzmanlığımız, onlarca yurt dışı satışın birikmesiyle oluştu. Her Avrupa siparişi bize yeni bir kullanıcı alışkanlığı öğretti; bu bilgi birikimi, ürünlerimizin sürekli gelişmesinin arkasındaki motordur.{" "}
              <a href="/" className="text-[#83bd81] font-semibold hover:underline">Motorlu perde sistemi</a>{" "}
              talebinin özellikle Almanya ve Hollanda'dan yoğunlaştığını, bu talebin ürün geliştirme sürecimizi doğrudan yönlendirdiğini belirtmek gerekir.
            </p>
            <p className="text-[#5a6a7e] text-base leading-relaxed mb-8">
              <u className="decoration-[#83bd81]">Almanya'dan Avusturya'ya</u>, İsviçre'den Fransa'ya uzanan müşteri tabanımız, kalitenin sınır tanımadığını kanıtlıyor. Fenetre Systems ile sipariş verirken yalnızca bir perde değil; ölçülmüş, sertifikalı ve güvence altındaki bir çözüm ediniyorsunuz.{" "}
              <a href="/" className="text-[#83bd81] font-semibold hover:underline">Blackout honeycomb perde</a>{" "}
              modellerimiz özellikle iklim kontrolü hassas mekânlarda tercih edilen standart haline geldi.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {["EN 13120", "CE Uyumlu", "RoHS", "ISO 9001", "2 Yıl Garanti"].map((cert) => (
                <span
                  key={cert}
                  className="bg-white border border-[#83bd81]/40 text-[#404e5e] text-xs font-semibold px-4 py-2 rounded-full shadow-sm"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="card-hover bg-white rounded-2xl p-6 border border-[#e8f3e8] shadow-sm"
              >
                <div className="w-14 h-16 flex items-center justify-center mb-4 bg-[#eef7ee]" style={hexStyle}>
                  <Icon size={22} className="text-[#83bd81]" />
                </div>
                <h3 className="font-bold text-[#404e5e] text-sm mb-2">{title}</h3>
                <p className="text-xs text-[#5a6a7e] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16 bg-white rounded-3xl border border-[#e8f3e8] p-8 shadow-sm overflow-hidden relative">
          <div className="absolute inset-0 hc-bg opacity-40 pointer-events-none" />
          <h3 className="text-xl font-bold text-[#404e5e] mb-8 text-center relative z-10">
            Büyüme Yolculuğumuz
          </h3>
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { year: "2010", event: "Gebze'de kuruluş, ilk atölye" },
              { year: "2014", event: "Honeycomb hattı devreye alındı" },
              { year: "2018", event: "İlk Almanya siparişi sevk edildi" },
              { year: "2024", event: "30+ Avrupa ülkesine teslimat" },
            ].map((item, i) => (
              <div key={item.year} className="flex flex-col items-center text-center">
                <div
                  className="w-12 h-14 flex items-center justify-center text-white font-bold text-sm mb-3 shadow-md"
                  style={{ ...hexStyle, background: i % 2 === 0 ? "#83bd81" : "#404e5e" }}
                >
                  {item.year.slice(2)}
                </div>
                <div className="text-xs font-bold text-[#404e5e] mb-1">{item.year}</div>
                <div className="text-xs text-[#5a6a7e]">{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
