const hexStyle = { clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" };

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { name: "Facebook", href: "https://www.facebook.com/FenetreSystems/", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg> },
    { name: "Instagram", href: "https://www.instagram.com/fenetresystems/", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg> },
    { name: "X / Twitter", href: "https://x.com/FenetreSystems", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/fenetresystems/", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
    { name: "Pinterest", href: "https://tr.pinterest.com/fenetresystems/", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" /></svg> },
    { name: "YouTube", href: "https://www.youtube.com/@FenetreSystems", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
  ];

  const products = [
    { name: "Honeycomb Perde", href: "/" },
    { name: "Plise Perde", href: "/" },
    { name: "Düet Perde", href: "/" },
    { name: "Jaluzi Perde", href: "/" },
    { name: "Zip Perde", href: "/" },
    { name: "Sineklik", href: "/" },
    { name: "Plise Sineklik", href: "/" },
  ];

  return (
    <footer className="bg-[#2d3847] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-11 flex items-center justify-center bg-[#83bd81]"
                style={hexStyle}
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                  <path d="M12 3L19 7V17L12 21L5 17V7Z" fill="white" fillOpacity="0.9" />
                  <path d="M12 7L16 9.5V14.5L12 17L8 14.5V9.5Z" fill="#83bd81" />
                  <path d="M12 10L14.5 11.5V14L12 15.5L9.5 14V11.5Z" fill="white" fillOpacity="0.7" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-base">Fenetre Systems</div>
                <div className="text-[#83bd81] text-[10px] font-semibold tracking-widest uppercase">Honeycomb Perde</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">
              Türkiye&apos;nin Gebze ilçesinde üretilen, Avrupa&apos;ya ihraç edilen premium hücreli perde sistemleri.
              Enerji tasarrufu, ses yalıtımı ve estetik bir arada.
            </p>
            <div className="flex gap-2">
              {socials.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-9 flex items-center justify-center transition-colors bg-white/10 hover:bg-[#83bd81]"
                  style={hexStyle}
                  aria-label={name}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 tracking-wide uppercase text-[10px] opacity-60">Ürünler</h4>
            <ul className="space-y-2">
              {products.map(({ name, href }) => (
                <li key={name}>
                  <a href={href} className="text-white/60 hover:text-[#83bd81] text-sm transition-colors">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 tracking-wide uppercase text-[10px] opacity-60">İletişim</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="tel:+905403363873" className="hover:text-[#83bd81] transition-colors block">
                  📞 +90 540 336 38 73
                </a>
              </li>
              <li>
                <a href="https://wa.me/905403363873" target="_blank" rel="noopener noreferrer" className="hover:text-[#83bd81] transition-colors block">
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:info@fenetresystems.com" className="hover:text-[#83bd81] transition-colors block">
                  ✉️ info@fenetresystems.com
                </a>
              </li>
              <li className="leading-relaxed">
                📍 Cumhuriyet Mah. 2233 Sok. No:4/A<br />
                Gebze / Kocaeli
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <span>© {year} Fenetre Systems. Tüm hakları saklıdır.</span>
          <div className="flex items-center gap-1">
            <span>Üretici:</span>
            <a
              href="https://www.fenetresystems.com"
              target="_blank"
              rel="dofollow noopener"
              className="text-[#83bd81] hover:text-[#b8ddb7] font-semibold ml-1"
            >
              Fenetre Systems
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
