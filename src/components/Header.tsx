"use client";
import { useEffect, useState } from "react";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5511911879750&text=Oi%20vim%20do%20Instagram";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const nav = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Galeria", href: "#galeria" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${
        scrolled ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(194,24,91,0.08)] border-[#FCE4EC]" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-[84px] flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl overflow-hidden bg-white shadow-[0_4px_16px_rgba(194,24,91,0.15)] border border-[#FCE4EC] flex items-center justify-center group-hover:shadow-[0_8px_24px_rgba(194,24,91,0.2)] transition-all">
            <img src="/assets/logo/logo-original.jpg" alt="Lu Corrêa Animal Care" className="w-full h-full object-cover" />
          </div>
          <div className="hidden sm:block leading-none">
            <p className="font-[Plus_Jakarta_Sans] font-bold text-[13px] tracking-[0.14em] text-[#C2185B]">LU CORRÊA</p>
            <p className="font-[Cormorant_Garamond] text-[18px] font-semibold -mt-1 text-[#1E1A1E]">Animal Care</p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md rounded-full p-1 border border-[#FCE4EC] shadow-sm">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="px-5 py-2 rounded-full text-sm font-medium text-[#4A4450] hover:text-[#C2185B] hover:bg-[#FFF0F5] transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/lucorrea_animalcare"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex w-10 h-10 rounded-full bg-white border border-[#FCE4EC] items-center justify-center text-[#C2185B] hover:bg-[#C2185B] hover:text-white hover:border-[#C2185B] transition-all"
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#C2185B] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#AD1457] shadow-[0_8px_20px_rgba(194,24,91,0.3)] hover:shadow-[0_12px_28px_rgba(194,24,91,0.35)] transition-all hover:-translate-y-0.5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.82 9.82 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.48 1.34 4.99L2 22l5.15-1.32A9.82 9.82 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.67-1.04-5.18-2.95-7.09ZM12 20a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-3.06.79.79-2.98-.19-.31A7.92 7.92 0 0 1 4 12C4 7.58 7.58 4 12 4c2.14 0 4.15.83 5.66 2.34A7.95 7.95 0 0 1 20 12c0 4.42-3.58 8-8 8Zm4.69-5.96c-.25-.13-1.49-.74-1.72-.82-.23-.09-.39-.13-.56.13-.17.25-.64.82-.79.99-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.32-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.13.17 1.75 2.67 4.23 3.75.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.49-.61 1.7-1.2.21-.59.21-1.09.15-1.2-.06-.11-.23-.17-.48-.3Z"/></svg>
            Conversar no WhatsApp
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 rounded-full bg-white border border-[#FCE4EC] grid place-items-center text-[#1E1A1E]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} /></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-[#FCE4EC] px-6 py-6 space-y-4 shadow-xl">
          <nav className="grid gap-1">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-[15px] font-medium text-[#4A4450] border-b border-[#FFF0F5] last:border-0">
                {n.label}
              </a>
            ))}
          </nav>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#C2185B] text-white py-3.5 rounded-full font-semibold">
            Conversar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
