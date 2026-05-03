"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Ürünlerimiz", href: "#urunler" },
  { label: "Neden Fenetre?", href: "#marka-degeri" },
  { label: "Nasıl Çalışır?", href: "#surec" },
  { label: "Hizmet Bölgelerimiz", href: "#hizmet-bolgesi" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#cta" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#83bd81]/20"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div
              className="relative w-10 h-11 flex items-center justify-center"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", background: "#83bd81" }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <path d="M12 3L19 7V17L12 21L5 17V7Z" fill="white" fillOpacity="0.9" />
                <path d="M12 7L16 9.5V14.5L12 17L8 14.5V9.5Z" fill="#83bd81" />
                <path d="M12 10L14.5 11.5V14L12 15.5L9.5 14V11.5Z" fill="white" fillOpacity="0.7" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[#404e5e] text-base tracking-tight group-hover:text-[#83bd81] transition-colors">
                Fenetre Systems
              </span>
              <span className="text-[10px] text-[#83bd81] font-semibold tracking-widest uppercase">
                Honeycomb Perde
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#404e5e] hover:text-[#83bd81] rounded-lg hover:bg-[#eef7ee] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+905403363873"
              className="hidden md:flex items-center gap-2 bg-[#83bd81] hover:bg-[#6aaa68] text-white font-semibold text-sm px-4 py-2.5 rounded-full shadow-sm"
            >
              <Phone size={15} />
              0540 336 38 73
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg text-[#404e5e] hover:bg-[#eef7ee]"
              aria-label="Menü"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[#83bd81]/20 shadow-xl">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-[#404e5e] font-medium text-sm rounded-xl hover:bg-[#eef7ee] hover:text-[#83bd81]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+905403363873"
              className="mt-2 flex items-center justify-center gap-2 bg-[#83bd81] text-white font-semibold text-sm px-4 py-3 rounded-xl"
            >
              <Phone size={16} />
              0540 336 38 73
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
