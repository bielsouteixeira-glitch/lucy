"use client";
import { useRef, useState } from "react";

export default function VideoSection() {
  const v1 = useRef<HTMLVideoElement>(null);
  const v2 = useRef<HTMLVideoElement>(null);
  const [p1, setP1] = useState(false);
  const [p2, setP2] = useState(false);

  return (
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
      {/* Video 1 - Atendimento */}
      <div className="group bg-white rounded-[28px] overflow-hidden border border-[#FCE4EC] shadow-[0_16px_40px_rgba(194,24,91,0.08)] hover:shadow-[0_24px_56px_rgba(194,24,91,0.12)] transition-all">
        <div className="relative aspect-[4/3] bg-[#FFF0F5] overflow-hidden">
          <video
            ref={v1}
            src="/assets/videos/atendimento.mp4"
            poster="/assets/posters/atendimento-poster.jpg"
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            onPlay={() => setP1(true)}
            onPause={() => setP1(false)}
          />
          {!p1 && (
            <div className="pointer-events-none absolute inset-0 grid place-items-center bg-gradient-to-t from-black/20 to-transparent">
              <div className="w-14 h-14 rounded-full bg-white shadow-lg grid place-items-center text-[#C2185B]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.14v14l11-7z"/></svg>
              </div>
            </div>
          )}
        </div>
        <div className="p-6 lg:p-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C2185B] bg-[#FFF0F5] px-3 py-1.5 rounded-full">ATENDIMENTO REAL • CONSULTA</span>
          <h3 className="text-[22px] font-semibold mt-3 leading-tight">Cuidado que você vê em cada detalhe</h3>
          <p className="text-[14px] leading-relaxed text-[#6B6570] mt-2">A Lucy em atendimento, acolhendo com calma, carinho e atenção. Um registro real da rotina de cuidado com quem faz parte da família.</p>
          <div className="flex items-center gap-2 mt-4 text-sm text-[#8E8A8F]"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Vídeo real, sem áudio automático</div>
        </div>
      </div>

      {/* Video 2 - Vacina */}
      <div className="group bg-white rounded-[28px] overflow-hidden border border-[#FCE4EC] shadow-[0_16px_40px_rgba(194,24,91,0.08)] hover:shadow-[0_24px_56px_rgba(194,24,91,0.12)] transition-all">
        <div className="relative aspect-[4/3] bg-[#FFF0F5] overflow-hidden">
          <video
            ref={v2}
            src="/assets/videos/vacina.mp4"
            poster="/assets/posters/vacina-poster.jpg"
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            onPlay={() => setP2(true)}
            onPause={() => setP2(false)}
          />
          {!p2 && (
            <div className="pointer-events-none absolute inset-0 grid place-items-center bg-gradient-to-t from-black/20 to-transparent">
              <div className="w-14 h-14 rounded-full bg-white shadow-lg grid place-items-center text-[#C2185B]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.14v14l11-7z"/></svg>
              </div>
            </div>
          )}
        </div>
        <div className="p-6 lg:p-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C2185B] bg-[#FFF0F5] px-3 py-1.5 rounded-full">ROTINA VETERINÁRIA • VACINAÇÃO</span>
          <h3 className="text-[22px] font-semibold mt-3 leading-tight">Vacinação com segurança e tranquilidade</h3>
          <p className="text-[14px] leading-relaxed text-[#6B6570] mt-2">Aplicação realizada com técnica, calma e cuidado — respeitando o tempo do pet e transmitindo segurança ao tutor.</p>
          <div className="flex items-center gap-2 mt-4 text-sm text-[#8E8A8F]"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Procedimento real com controle do tutor</div>
        </div>
      </div>
    </div>
  );
}
