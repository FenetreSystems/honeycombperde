import { MapPin, Clock, Package2, CheckCircle2 } from "lucide-react";

const hexStyle = { clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" };

const europeCountries = [
  { flag: "🇩🇪", name: "Almanya", cities: "Berlin, Hamburg, Münih, Köln, Frankfurt, Stuttgart", days: "5-7" },
  { flag: "🇳🇱", name: "Hollanda", cities: "Amsterdam, Rotterdam, Den Haag, Utrecht", days: "5-7" },
  { flag: "🇧🇪", name: "Belçika", cities: "Brüksel, Antwerp, Gent, Brugge", days: "6-8" },
  { flag: "🇫🇷", name: "Fransa", cities: "Paris, Lyon, Marsilya, Bordeaux, Toulouse", days: "6-8" },
  { flag: "🇦🇹", name: "Avusturya", cities: "Viyana, Graz, Salzburg, Innsbruck", days: "6-8" },
  { flag: "🇨🇭", name: "İsviçre", cities: "Zürih, Cenevre, Basel, Bern", days: "6-9" },
  { flag: "🇮🇹", name: "İtalya", cities: "Roma, Milano, Turin, Napoli", days: "7-9" },
  { flag: "🇪🇸", name: "İspanya", cities: "Madrid, Barselona, Valencia, Sevilla", days: "7-10" },
  { flag: "🇸🇪", name: "İsveç", cities: "Stockholm, Göteborg, Malmö", days: "7-10" },
  { flag: "🇩🇰", name: "Danimarka", cities: "Kopenhag, Aarhus, Odense", days: "7-9" },
  { flag: "🇳🇴", name: "Norveç", cities: "Oslo, Bergen, Trondheim", days: "7-10" },
  { flag: "🇵🇱", name: "Polonya", cities: "Varşova, Kraków, Wrocław, Gdańsk", days: "6-8" },
];

const trRegions = [
  { name: "Marmara", cities: "İstanbul, Bursa, Kocaeli, Sakarya, Tekirdağ, Edirne" },
  { name: "Ege", cities: "İzmir, Denizli, Manisa, Aydın, Muğla, Afyon, Uşak, Kütahya" },
  { name: "Akdeniz", cities: "Antalya, Mersin, Adana, Hatay, Isparta, Burdur, Kahramanmaraş" },
  { name: "İç Anadolu", cities: "Ankara, Konya, Kayseri, Eskişehir, Sivas, Yozgat, Kırıkkale" },
  { name: "Karadeniz", cities: "Samsun, Trabzon, Rize, Zonguldak, Bartın, Kastamonu, Sinop" },
  { name: "Doğu Anadolu", cities: "Erzurum, Malatya, Elazığ, Diyarbakır, Van, Muş, Bitlis" },
  { name: "Güneydoğu Anadolu", cities: "Gaziantep, Şanlıurfa, Mardin, Adıyaman, Siirt, Batman" },
];

export default function ServiceAreasSection() {
  return (
    <section id="hizmet-bolgesi" className="section-py bg-gradient-to-b from-[#f8faf8] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="inline-block bg-[#eef7ee] text-[#83bd81] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Hizmet Bölgeleri
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#404e5e] mb-4">
            Türkiye'nin 81 İlinden{" "}
            <span className="text-gradient">Avrupa'nın Her Köşesine</span>
          </h2>
          <p className="text-[#5a6a7e] max-w-2xl mx-auto text-base">
            Fenetre Systems, hem yurt içinde hem de Avrupa&apos;nın tüm ülkelerine{" "}
            <strong className="text-[#404e5e]">adrese teslim</strong> hizmet verir.
            Türkiye&apos;de montaj dahildir; Avrupa siparişleri demonte ve kurulum rehberiyle gönderilir.
          </p>
        </div>

        {/* İki kolon: Türkiye + Avrupa */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">

          {/* Türkiye */}
          <div className="bg-white rounded-3xl border border-[#e8f3e8] overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-[#404e5e] to-[#2d3847] px-6 py-5 flex items-center gap-3">
              <span className="text-2xl">🇹🇷</span>
              <div>
                <h3 className="text-white font-bold text-base">Türkiye Teslimat</h3>
                <p className="text-white/60 text-xs">81 il · Montaj dahil · 2-4 iş günü</p>
              </div>
              <div className="ml-auto">
                <div className="flex items-center gap-1.5 bg-[#83bd81] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  <CheckCircle2 size={12} />
                  Montaj Dahil
                </div>
              </div>
            </div>
            <div className="p-6 space-y-3">
              {trRegions.map(({ name, cities }) => (
                <div key={name} className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#83bd81] mt-2 shrink-0" />
                  <div>
                    <span className="font-semibold text-[#404e5e] text-sm">{name}: </span>
                    <span className="text-[#5a6a7e] text-xs">{cities}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 pb-6">
              <div className="bg-[#eef7ee] rounded-xl p-4 grid grid-cols-3 gap-3 text-center">
                {[
                  { val: "81", lbl: "İl" },
                  { val: "2-4", lbl: "İş Günü" },
                  { val: "Ücretsiz", lbl: "Montaj" },
                ].map(({ val, lbl }) => (
                  <div key={lbl}>
                    <div className="font-extrabold text-[#83bd81] text-lg">{val}</div>
                    <div className="text-[10px] text-[#5a6a7e]">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Avrupa */}
          <div className="bg-white rounded-3xl border border-[#e8f3e8] overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-[#83bd81] to-[#6aaa68] px-6 py-5 flex items-center gap-3">
              <span className="text-2xl">🇪🇺</span>
              <div>
                <h3 className="text-white font-bold text-base">Avrupa Teslimat</h3>
                <p className="text-white/70 text-xs">30+ ülke · DHL/DPD · 4-10 iş günü</p>
              </div>
              <div className="ml-auto">
                <div className="flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  <Package2 size={12} />
                  Takipli Kargo
                </div>
              </div>
            </div>
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {europeCountries.map(({ flag, name, cities, days }) => (
                <div key={name} className="flex items-start gap-2.5 bg-[#f8faf8] rounded-xl px-3 py-2.5">
                  <span className="text-base mt-0.5">{flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[#404e5e] text-xs">{name}</div>
                    <div className="text-[10px] text-[#5a6a7e] truncate">{cities}</div>
                  </div>
                  <div className="shrink-0 text-[10px] font-bold text-[#83bd81] bg-[#eef7ee] px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Clock size={9} />
                    {days}g
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 pb-5">
              <div className="bg-[#eef7ee] rounded-xl p-4 grid grid-cols-3 gap-3 text-center">
                {[
                  { val: "30+", lbl: "Ülke" },
                  { val: "4-10", lbl: "Gün Teslimat" },
                  { val: "DHL/DPD", lbl: "Kargo" },
                ].map(({ val, lbl }) => (
                  <div key={lbl}>
                    <div className="font-extrabold text-[#83bd81] text-base">{val}</div>
                    <div className="text-[10px] text-[#5a6a7e]">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Delivery info */}
        <div className="bg-gradient-to-br from-[#eef7ee] to-white rounded-3xl border border-[#83bd81]/25 p-8">
          <h3 className="text-lg font-bold text-[#404e5e] mb-6 text-center">Teslimat Süreci</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "📦", title: "Sipariş", desc: "WhatsApp veya telefon ile ölçü ve model bildirir sipariş verirsiniz." },
              { icon: "🏭", title: "Üretim", desc: "Gebze fabrikamızda 3-5 iş günü üretim ve kalite kontrol süreci." },
              { icon: "🚚", title: "Kargo", desc: "DHL Express veya DPD ile takip numarası anında size iletilir." },
              { icon: "🏠", title: "Teslim", desc: "Türkiye'de montajlı teslim, Avrupa'da demonte + kurulum rehberi." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-16 flex items-center justify-center text-2xl bg-white border border-[#e8f3e8] shadow-sm" style={hexStyle}>
                  {icon}
                </div>
                <div>
                  <div className="font-bold text-[#404e5e] text-sm mb-1">{title}</div>
                  <div className="text-xs text-[#5a6a7e] leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
