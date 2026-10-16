"use client";
import { useState } from "react";

const images = [
  { src: "/assets/images/lucy-with-dog-01.jpg", label: "Cuidado com carinho", tall: true },
  { src: "/assets/images/lucy-portrait.jpg", label: "Lucy Corrêa" },
  { src: "/assets/images/lucy-additional.jpg", label: "Atendimento acolhedor", tall: true },
  { src: "/assets/images/lucy-with-dog-02.jpg", label: "Momentos de carinho" },
];

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(img.src)}
            className={`group relative overflow-hidden rounded-[24px] bg-[#FFF0F5] ${img.tall ? "row-span-1 lg:row-span-2 aspect-[4/5] lg:aspect-auto" : "aspect-square"} ${i===1 ? "lg:translate-y-6" : ""} ${i===3 ? "lg:-translate-y-4" : ""} shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] transition-all`}
          >
            <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
              <p className="text-white text-sm font-medium flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md grid place-items-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg></span>
                {img.label}
              </p>
            </div>
          </button>
        ))}
      </div>
      {active && (
        <div onClick={() => setActive(null)} className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md grid place-items-center p-6 cursor-zoom-out animate-[fadeIn_0.2s_ease]">
          <img src={active} alt="Ampliação" className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain" />
          <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white text-black grid place-items-center">✕</button>
        </div>
      )}
    </>
  );
}
