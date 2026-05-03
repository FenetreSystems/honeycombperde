import { ChevronDown, Shield, Truck, Star, Leaf } from "lucide-react";

const hexStyle = { clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" };

const HoneycombBg = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="hc-hero" x="0" y="0" width="56" height="97" patternUnits="userSpaceOnUse">
        <path
          d="M28 2L54 17v30L28 62 2 47V17z"
          fill="none"
          stroke="#404e5e"
          strokeWidth="1.5"
        />
        <path
          d="M28 66L54 81v30L28 126 2 111V81z"
          fill="none"
          stroke="#404e5e"
          strokeWidth="1.5"
        />
        <path
          d="M0 49L-26 64v30L-2 109 2 111"
          fill="none"
          stroke="#404e5e"
          strokeWidth="1.5"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hc-hero)" />
  </svg>
);

const HexCell = ({ size = 80, fill = "#83bd81", opacity = 0.08 }: { size?: number; fill?: string; opacity?: number }) => {
  const h = size;
  const w = size * (2 / Math.sqrt(3));
  const pts = [
    [w / 2, 0],
    [w, h / 4],
    [w, (3 * h) / 4],
    [w / 2, h],
    [0, (3 * h) / 4],
    [0, h / 4],
  ]
    .map((p) => p.join(","))
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="absolute pointer-events-none">
      <polygon points={pts} fill={fill} fillOpacity={opacity} />
    </svg>
  );
};

const stats = [
  { value: "15+", label: "Yıllık Deneyim" },
  { value: "40.000+", label: "Mutlu Müşteri" },
  { value: "30+", label: "Avrupa Ülkesi" },
  { value: "4-10", label: "Günde Teslimat" },
];

const badges = [
  { icon: Shield, text: "2 Yıl Garanti" },
  { icon: Truck, text: "Avrupa'ya Kapıya Teslim" },
  { icon: Star, text: "Premium Kalite" },
  { icon: Leaf, text: "Enerji Tasarrufu" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#f8faf8] via-white to-[#eef7ee]"
    >
      <HoneycombBg />

      {/* Decorative hex clusters */}
      <div className="absolute top-24 right-8 md:right-24 hidden md:block">
        <div className="relative w-48 h-48">
          <div className="absolute top-0 left-6"><HexCell size={70} fill="#83bd81" opacity={0.18} /></div>
          <div className="absolute top-10 left-0"><HexCell size={55} fill="#404e5e" opacity={0.1} /></div>
          <div className="absolute top-8 left-14"><HexCell size={50} fill="#83bd81" opacity={0.12} /></div>
          <div className="absolute top-20 left-8"><HexCell size={40} fill="#404e5e" opacity={0.08} /></div>
        </div>
      </div>
      <div className="absolute bottom-16 left-4 md:left-16 hidden md:block">
        <div className="relative w-36 h-36">
          <div className="absolute top-0 left-0"><HexCell size={60} fill="#83bd81" opacity={0.1} /></div>
          <div className="absolute top-12 left-10"><HexCell size={45} fill="#404e5e" opacity={0.08} /></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#eef7ee] border border-[#83bd81]/40 text-[#404e5e] text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#83bd81] animate-pulse" />
              Türkiye'den Avrupa'ya Premium Perde
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#404e5e] leading-[1.1] mb-6">
              <span className="text-gradient">Honeycomb Perde</span>
              <br />
              Kışın Sıcak,
              <br />
              <span className="text-[#83bd81]">Yazın Serin Tutar</span>
            </h1>

            <p className="text-lg text-[#5a6a7e] leading-relaxed mb-8 max-w-xl">
              Bal peteği hücre yapısı, kışın dışarıdaki soğuğu bloke ederken yazın güneşin radyant ısısını camdan içeri sokmaz. Klima ve ısıtma faturanızı yüzde 30&apos;a varan oranda düşüren bir{" "}
              <strong className="text-[#404e5e] font-semibold">dört mevsim enerji kalkanı</strong>. Türkiye genelinde montajlı, Avrupa&apos;nın tüm ülkelerine 4-10 günde kapıya teslim.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="https://wa.me/905403363873?text=Honeycomb%20Perde%20fiyat%20almak%20istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#83bd81] hover:bg-[#6aaa68] text-white font-bold text-base px-7 py-4 rounded-2xl shadow-lg shadow-[#83bd81]/30 transition-all hover:scale-[1.02]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.549 4.116 1.512 5.849L0 24l6.335-1.482A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.964-1.349l-.356-.212-3.759.879.894-3.663-.232-.376A9.8 9.8 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                </svg>
                WhatsApp ile Fiyat Al
              </a>
              <a
                href="tel:+905403363873"
                className="flex items-center justify-center gap-2 bg-white border-2 border-[#404e5e] text-[#404e5e] hover:bg-[#404e5e] hover:text-white font-bold text-base px-7 py-4 rounded-2xl transition-all"
              >
                Hemen Ara: 0540 336 38 73
              </a>
            </div>

            {/* Badge row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {badges.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5 shadow-sm border border-[#e8f3e8]">
                  <Icon size={16} className="text-[#83bd81] shrink-0" />
                  <span className="text-xs font-medium text-[#404e5e] leading-tight">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side — Honeycomb product illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Main card */}
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-[#404e5e]/10 overflow-hidden border border-[#e8f3e8]">
                {/* Honeycomb visual */}
                <div className="bg-gradient-to-br from-[#eef7ee] to-[#f0f5f0] p-8 pt-10 pb-6">
                  <svg viewBox="0 0 320 200" className="w-full" xmlns="http://www.w3.org/2000/svg" aria-label="Honeycomb Perde Yapısı">
                    {/* Window frame */}
                    <rect x="10" y="10" width="300" height="180" rx="4" fill="#404e5e" fillOpacity="0.12" stroke="#404e5e" strokeWidth="3" strokeOpacity="0.3" />
                    <rect x="16" y="16" width="288" height="168" rx="2" fill="white" fillOpacity="0.6" />

                    {/* Honeycomb hexagon cells grid */}
                    {[0, 1, 2, 3, 4, 5, 6].map((col) =>
                      [0, 1, 2, 3].map((row) => {
                        const cw = 38;
                        const ch = 22;
                        const qx = cw / 4;   // 9.5
                        const hy = ch / 2;   // 11
                        const x = 22 + col * 40 + (row % 2 === 1 ? 20 : 0);
                        const y = 24 + row * 36;
                        const pts = `${x+qx},${y} ${x+3*qx},${y} ${x+cw},${y+hy} ${x+3*qx},${y+ch} ${x+qx},${y+ch} ${x},${y+hy}`;
                        return (
                          <polygon
                            key={`${col}-${row}`}
                            points={pts}
                            fill="#83bd81"
                            fillOpacity={0.13 + (col + row) * 0.02}
                            stroke="#83bd81"
                            strokeWidth="0.8"
                            strokeOpacity="0.5"
                          />
                        );
                      })
                    )}

                    {/* Labels */}
                    <text x="160" y="178" textAnchor="middle" fill="#404e5e" fillOpacity="0.6" fontSize="9" fontFamily="Inter,sans-serif">
                      Çift Katmanlı Hücreli Kumaş Yapısı
                    </text>
                  </svg>
                </div>

                {/* Card info */}
                <div className="px-6 py-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-[#404e5e] text-base">Honeycomb Perde</h3>
                      <p className="text-xs text-[#83bd81] font-semibold mt-0.5">Fenetre Systems Premium Serisi</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={12} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {[
                      { val: "%94", lbl: "Güneş Isısı Engeli" },
                      { val: "38dB", lbl: "Ses Azaltma" },
                      { val: "%30", lbl: "Klima + Isıtma Tasarrufu" },
                    ].map(({ val, lbl }) => (
                      <div key={lbl} className="bg-[#f8faf8] rounded-xl py-2 px-1">
                        <div className="font-bold text-[#83bd81] text-sm">{val}</div>
                        <div className="text-[10px] text-[#5a6a7e] mt-0.5 leading-tight">{lbl}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating trust badge */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-[#e8f3e8]">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-10 flex items-center justify-center bg-[#eef7ee]" style={hexStyle}>
                    <Shield size={14} className="text-[#83bd81]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#5a6a7e]">Garanti</p>
                    <p className="text-xs font-bold text-[#404e5e]">2 Yıl</p>
                  </div>
                </div>
              </div>

              {/* Floating delivery badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-[#e8f3e8]">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-10 flex items-center justify-center bg-[#eef7ee]" style={hexStyle}>
                    <Truck size={14} className="text-[#83bd81]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#5a6a7e]">Avrupa Teslimat</p>
                    <p className="text-xs font-bold text-[#404e5e]">4-10 Gün</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-white rounded-2xl px-6 py-5 text-center shadow-sm border border-[#e8f3e8]">
              <div className="text-3xl font-extrabold text-[#83bd81]">{value}</div>
              <div className="text-sm text-[#5a6a7e] mt-1 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={28} className="text-[#83bd81]" />
      </div>
    </section>
  );
}
