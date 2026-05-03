import { MessageSquare, Ruler, Factory, Package, Truck, Wrench } from "lucide-react";

const hexStyle = { clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" };

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Ücretsiz Danışmanlık",
    body: "WhatsApp ya da telefon yoluyla pencere ölçülerinizi, mekânın ışık ihtiyacını ve bütçe tercihini paylaşırsınız. Uzman ekibimiz doğru kumaş ve mekanizmayı öneren kısa bir brifing yapar.",
  },
  {
    num: "02",
    icon: Ruler,
    title: "Ölçü & Tasarım",
    body: "Türkiye'deyseniz teknik ekibimiz yerinde ölçüm alır. Avrupa'daysa rehberimize göre kendiniz ölçer, formu doldurursunuz. Milimetrik hassasiyetle kesim dosyası hazırlanır.",
  },
  {
    num: "03",
    icon: Factory,
    title: "Fabrika Üretimi",
    body: "Gebze tesisimizde otomatik kesim hattı ve elle kontrol aşamalarından geçen kumaş parçaları, mekanizma profilleriyle birleştirilir. Ortalama üretim süresi 3-5 iş günüdür.",
  },
  {
    num: "04",
    icon: Package,
    title: "Kalite Kontrolü & Paketleme",
    body: "Her ürün çıkış öncesinde gerilim, çekme ve renk kontrolünden geçer. Kırılmaya karşı korumalı sert karton ve balonlu naylon ile çift katmanlı paketlenir.",
  },
  {
    num: "05",
    icon: Truck,
    title: "Teslimat",
    body: "Türkiye'de kapıya demonte teslim; 81 ilde adrese gönderim. Avrupa siparişleri DHL Express veya DPD ağıyla 4-10 iş günü içinde kapıya ulaşır. Takip numarası anında iletilir.",
  },
  {
    num: "06",
    icon: Wrench,
    title: "Montaj & Destek",
    body: "Türkiye'de montaj ekibimiz randevu günü sahaya iner; 30-90 dakikada kurulum tamamlanır. Avrupa'ya gönderilen ürünlerde adım adım kurulum videosu ve yazılı rehber kargo içindedir.",
  },
];

export default function ProcessSection() {
  return (
    <section id="surec" className="section-py bg-gradient-to-b from-[#f8faf8] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="inline-block bg-[#eef7ee] text-[#83bd81] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Süreç
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404e5e] mb-4">
            Siparişten Kuruluma{" "}
            <span className="text-gradient">6 Adım</span>
          </h2>
          <p className="text-[#5a6a7e] max-w-2xl mx-auto text-base">
            Nasıl çalışıyoruz sorusunun yanıtı — danışmanlıktan montaja kadar şeffaf, öngörülebilir bir deneyim.
          </p>
        </div>

        {/* Desktop: connected steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(8.33%-8px)] right-[calc(8.33%-8px)] h-0.5 bg-gradient-to-r from-[#e8f3e8] via-[#83bd81] to-[#e8f3e8] z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {steps.map(({ num, icon: Icon, title, body }) => (
              <div key={num} className="relative z-10 flex flex-col items-center text-center group">
                {/* Step circle */}
                <div className="w-16 h-[74px] bg-white flex items-center justify-center mb-4 shadow-md group-hover:bg-[#83bd81] transition-colors border-2 border-[#83bd81]" style={hexStyle}>
                  <Icon size={24} className="text-[#83bd81] group-hover:text-white transition-colors" />
                </div>
                <div className="text-[10px] font-bold text-[#83bd81] tracking-widest mb-1">{num}</div>
                <h3 className="font-bold text-[#404e5e] text-xs mb-2 leading-tight">{title}</h3>
                <p className="text-[10px] text-[#5a6a7e] leading-relaxed hidden lg:block">{body}</p>
              </div>
            ))}
          </div>

          {/* Mobile: card list */}
          <div className="lg:hidden mt-8 space-y-4">
            {steps.map(({ num, icon: Icon, title, body }) => (
              <div key={num} className="flex gap-4 bg-white rounded-2xl border border-[#e8f3e8] p-5 shadow-sm">
                <div className="w-14 h-16 flex items-center justify-center shrink-0 bg-[#eef7ee]" style={hexStyle}>
                  <Icon size={20} className="text-[#83bd81]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#83bd81] tracking-widest mb-0.5">{num}</div>
                  <h3 className="font-bold text-[#404e5e] text-sm mb-1">{title}</h3>
                  <p className="text-xs text-[#5a6a7e] leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-14 bg-gradient-to-r from-[#404e5e] to-[#2d3847] rounded-3xl p-8 md:p-10 text-center hc-bg-dark relative overflow-hidden">
          <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3 relative z-10">
            Ölçü almaktan başlayın — ücretsiz ve bağlayıcı değil.
          </h3>
          <p className="text-white/70 text-sm mb-6 relative z-10 max-w-lg mx-auto">
            Uzman ekibimiz, pencere tipinize göre en doğru modeli ve rengi önerir.{" "}
            <a href="/" className="text-[#83bd81] hover:text-[#b8ddb7] font-semibold underline underline-offset-2">Güneşlik perde</a>{" "}
            mi, yoksa{" "}
            <a href="/" className="text-[#83bd81] hover:text-[#b8ddb7] font-semibold underline underline-offset-2">yaysız cordless perde</a>{" "}
            mi daha uygun — bunu konuşarak belirliyoruz.
          </p>
          <a
            href="https://wa.me/905403363873?text=Ücretsiz%20danışmanlık%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-2 bg-[#83bd81] hover:bg-[#6aaa68] text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all hover:scale-[1.02]"
          >
            Ücretsiz Danışmanlık Başlat
          </a>
        </div>
      </div>
    </section>
  );
}
