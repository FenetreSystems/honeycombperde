import { Phone, Mail, MapPin, Clock } from "lucide-react";

const hexStyle = { clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" };

export default function CTASection() {
  return (
    <section id="cta" className="section-py bg-gradient-to-br from-[#404e5e] via-[#2d3847] to-[#404e5e] relative overflow-hidden">
      {/* Honeycomb bg pattern */}
      <div className="absolute inset-0 hc-bg-dark pointer-events-none" />

      {/* Decorative hex */}
      <svg className="absolute top-0 right-0 w-64 h-64 opacity-5" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M100 10L190 60V140L100 190L10 140V60Z" stroke="white" strokeWidth="2" />
        <path d="M100 40L160 75V145L100 180L40 145V75Z" stroke="white" strokeWidth="1.5" />
        <path d="M100 70L130 88V124L100 142L70 124V88Z" stroke="white" strokeWidth="1" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Main CTA */}
          <div>
            <span className="inline-block bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 border border-white/20">
              Hemen Başlayın
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              Pencerenizi{" "}
              <span className="text-[#83bd81]">Dönüştürün</span>
              , Faturanızı{" "}
              <span className="text-[#83bd81]">Düşürün</span>
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-4">
              Türkiye&apos;de montajlı, Avrupa&apos;ya kapıya teslim.{" "}
              <strong className="text-white">Ölçü almak ücretsiz</strong>, teklif bağlayıcı değil.
              <br />
              <a href="/" className="text-[#83bd81] hover:text-[#b8ddb7] font-semibold">Jaluzi perde</a> ya da{" "}
              <a href="/" className="text-[#83bd81] hover:text-[#b8ddb7] font-semibold">plise sineklik</a>{" "}
              ihtiyacınız için de aynı hattan ulaşabilirsiniz.
            </p>
            <p className="text-white/60 text-sm mb-8">
              Bayilik ve toplu sipariş fırsatları için de WhatsApp&apos;tan yazın.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/905403363873?text=Merhaba,%20honeycomb%20perde%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-[#83bd81] hover:bg-[#6aaa68] text-white font-bold px-7 py-4 rounded-2xl shadow-lg transition-all hover:scale-[1.02]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.549 4.116 1.512 5.849L0 24l6.335-1.482A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.964-1.349l-.356-.212-3.759.879.894-3.663-.232-.376A9.8 9.8 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                </svg>
                WhatsApp ile Fiyat Al
              </a>
              <a
                href="tel:+905403363873"
                className="flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-bold px-7 py-4 rounded-2xl transition-all"
              >
                <Phone size={18} />
                0540 336 38 73
              </a>
            </div>

            {/* Bayilik */}
            <div className="mt-6">
              <a
                href="https://wa.me/905403363873?text=Bayilik%20başvurusu%20yapmak%20istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#83bd81] hover:text-[#b8ddb7] text-sm font-semibold border border-[#83bd81]/40 px-5 py-2.5 rounded-xl hover:border-[#83bd81] transition-all"
              >
                Bayilik İçin WhatsApp ile Başvur →
              </a>
            </div>
          </div>

          {/* Right: Contact info */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-5">
            <h3 className="text-white font-bold text-lg mb-6">İletişim Bilgileri</h3>

            <div className="space-y-4">
              <a href="tel:+905403363873" className="flex items-center gap-4 group">
                <div className="w-11 h-[52px] flex items-center justify-center shrink-0 bg-[#83bd81]/20 group-hover:bg-[#83bd81] transition-colors" style={hexStyle}>
                  <Phone size={16} className="text-[#83bd81] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-white/50 text-xs">Telefon</div>
                  <div className="text-white font-semibold">+90 540 336 38 73</div>
                </div>
              </a>

              <a href="https://wa.me/905403363873" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-11 h-[52px] flex items-center justify-center shrink-0 bg-[#83bd81]/20 group-hover:bg-[#83bd81] transition-colors" style={hexStyle}>
                  <svg className="w-5 h-5 text-[#83bd81] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51c-.173-.008-.371-.01-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.549 4.116 1.512 5.849L0 24l6.335-1.482A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.964-1.349l-.356-.212-3.759.879.894-3.663-.232-.376A9.8 9.8 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/50 text-xs">WhatsApp</div>
                  <div className="text-white font-semibold">+90 540 336 38 73</div>
                </div>
              </a>

              <a href="mailto:info@fenetresystems.com" className="flex items-center gap-4 group">
                <div className="w-11 h-[52px] flex items-center justify-center shrink-0 bg-[#83bd81]/20 group-hover:bg-[#83bd81] transition-colors" style={hexStyle}>
                  <Mail size={16} className="text-[#83bd81] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-white/50 text-xs">E-Posta</div>
                  <div className="text-white font-semibold">info@fenetresystems.com</div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-11 h-[52px] flex items-center justify-center shrink-0 bg-[#83bd81]/20" style={hexStyle}>
                  <MapPin size={16} className="text-[#83bd81]" />
                </div>
                <div>
                  <div className="text-white/50 text-xs">Adres</div>
                  <div className="text-white font-semibold text-sm leading-relaxed">
                    Cumhuriyet Mah. 2233 Sok. No:4/A<br />
                    Gebze / Kocaeli, Türkiye
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-[52px] flex items-center justify-center shrink-0 bg-[#83bd81]/20" style={hexStyle}>
                  <Clock size={16} className="text-[#83bd81]" />
                </div>
                <div>
                  <div className="text-white/50 text-xs">Çalışma Saatleri</div>
                  <div className="text-white font-semibold text-sm">
                    Hft içi: 08:00 – 18:00 · Cmt: 09:00 – 14:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
