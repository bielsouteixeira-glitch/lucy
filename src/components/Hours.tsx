"use client";
import { useEffect, useState } from "react";

const schedule = [
  { day: "Segunda", hours: "09:00 às 17:00", open: true },
  { day: "Terça", hours: "09:00 às 17:00", open: true },
  { day: "Quarta", hours: "09:00 às 17:00", open: true },
  { day: "Quinta", hours: "09:00 às 17:00", open: true },
  { day: "Sexta", hours: "09:00 às 17:00", open: true },
  { day: "Sábado", hours: "09:00 às 15:00", open: true, highlight: true },
  { day: "Domingo", hours: "Fechado", open: false },
];

function isOpenNow() {
  const now = new Date();
  const day = now.getDay(); // 0 Sun
  const h = now.getHours() + now.getMinutes()/60;
  if (day===0) return false;
  if (day===6) return h>=9 && h<15;
  return h>=9 && h<17;
}

export default function Hours() {
  const [openNow, setOpenNow] = useState<boolean | null>(null);
  useEffect(()=> setOpenNow(isOpenNow()), []);
  const todayIdx = new Date().getDay()===0 ? 6 : new Date().getDay()-1;

  return (
    <div className="bg-white rounded-[28px] border border-[#FCE4EC] shadow-[0_16px_40px_rgba(194,24,91,0.07)] overflow-hidden">
      <div className="p-6 lg:p-8 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h3 className="text-2xl font-semibold">Horários de atendimento</h3>
          <p className="text-sm text-[#6B6570] mt-1">Confirme sempre a disponibilidade pelo WhatsApp</p>
        </div>
        {openNow !== null && (
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border ${openNow ? "bg-green-50 text-green-700 border-green-200" : "bg-zinc-100 text-zinc-600 border-zinc-200"}`}>
            <span className={`w-2 h-2 rounded-full ${openNow ? "bg-green-500 animate-pulse" : "bg-zinc-400"}`} />
            {openNow ? "Aberto agora" : "Fechado no momento"}
          </div>
        )}
      </div>
      <div className="px-6 lg:px-8 pb-2">
        <div className="grid gap-2">
          {schedule.map((s, i) => (
            <div key={s.day} className={`flex items-center justify-between p-4 rounded-2xl border transition-colors ${s.highlight ? "bg-[#FFF0F5] border-[#F8BBD0]" : i===todayIdx ? "bg-[#FFF8FA] border-[#FCE4EC] shadow-sm" : "bg-[#FFFCFD] border-[#FFF0F5]"} ${!s.open ? "opacity-60" : ""}`}>
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full grid place-items-center text-xs font-bold ${s.open ? "bg-white text-[#C2185B] border border-[#FCE4EC]" : "bg-zinc-100 text-zinc-500"}`}>{s.day.slice(0,2).toUpperCase()}</span>
                <span className={`font-medium ${s.highlight ? "text-[#C2185B]" : "text-[#1E1A1E]"}`}>{s.day}</span>
                {i===todayIdx && <span className="text-[11px] font-bold tracking-widest text-[#C2185B] bg-white border border-[#FCE4EC] px-2 py-1 rounded-full">HOJE</span>}
              </div>
              <span className={`text-sm font-semibold ${s.open ? "text-[#1E1A1E]" : "text-zinc-500"}`}>{s.hours}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 lg:p-8 flex flex-wrap gap-3">
        <a href="https://api.whatsapp.com/send?phone=5511911879750&text=Ol%C3%A1!%20Gostaria%20de%20consultar%20a%20disponibilidade%20de%20hor%C3%A1rios" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#C2185B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#AD1457] transition-colors">
          Consultar disponibilidade
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <span className="inline-flex items-center text-sm text-[#8E8A8F] px-4">Atendimento com horário marcado • Confirme pelo WhatsApp</span>
      </div>
    </div>
  );
}
