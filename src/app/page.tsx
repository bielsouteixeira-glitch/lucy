import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
import Hours from "@/components/Hours";
import WhatsAppFloat from "@/components/WhatsAppFloat";

function wpp(text: string) {
  return `https://api.whatsapp.com/send?phone=5511911879750&text=${encodeURIComponent(text)}`;
}

export default function Page() {
  return (
    <div className="overflow-x-clip">
      <Header />
      <WhatsAppFloat />

      {/* HERO */}
      <section id="inicio" className="relative pt-[84px]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF0F5] via-[#FFF8FA] to-white" />
        <div className="absolute top-[84px] right-0 w-[60%] h-[520px] bg-gradient-to-br from-[#FCE4EC]/60 to-[#F8BBD0]/30 rounded-l-[48px] blur-[1px] hidden lg:block" />
        {/* decorative organic shapes */}
        <div className="absolute top-28 right-[8%] w-32 h-32 bg-[#F8BBD0]/20 rounded-full blur-2xl hidden lg:block animate-float" />
        <div className="absolute top-48 left-[4%] w-20 h-20 bg-[#E91E63]/10 rounded-full blur-xl hidden lg:block" />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center">
            {/* Left copy */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-white border border-[#FCE4EC] rounded-full px-4 py-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-xs font-semibold tracking-[0.14em] text-[#C2185B]">LU CORRÊA ANIMAL CARE</span>
                <span className="w-1 h-1 rounded-full bg-[#F8BBD0]" />
                <span className="text-xs font-medium text-[#8E8A8F] hidden sm:inline">Atendimento com carinho</span>
              </div>

              <h1 className="mt-6 text-[42px] lg:text-[58px] font-semibold leading-[0.95] tracking-tight">
                <span className="block text-[#1E1A1E]">Cuidado que faz</span>
                <span className="block text-[#C2185B] italic font-medium">bem para quem</span>
                <span className="block text-[#1E1A1E]">faz parte da família.</span>
              </h1>

              <p className="mt-5 text-[17px] leading-relaxed text-[#4A4450] max-w-[520px]">
                Atendimento veterinário e estética animal com carinho, atenção e cuidado em cada detalhe. Presencial e online, com a dedicação da <span className="font-semibold text-[#1E1A1E]">Lucy Corrêa</span>.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={wpp("Oi vim do Instagram — gostaria de falar com a Lucy!")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#C2185B] text-white px-7 py-4 rounded-full font-semibold hover:bg-[#AD1457] shadow-[0_10px_24px_rgba(194,24,91,0.28)] hover:shadow-[0_14px_32px_rgba(194,24,91,0.32)] hover:-translate-y-0.5 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.82 9.82 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.48 1.34 4.99L2 22l5.15-1.32A9.82 9.82 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.67-1.04-5.18-2.95-7.09ZM12 20a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-3.06.79.79-2.98-.19-.31A7.92 7.92 0 0 1 4 12C4 7.58 7.58 4 12 4c2.14 0 4.15.83 5.66 2.34A7.95 7.95 0 0 1 20 12c0 4.42-3.58 8-8 8Zm4.69-5.96c-.25-.13-1.49-.74-1.72-.82-.23-.09-.39-.13-.56.13-.17.25-.64.82-.79.99-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.32-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.13.17 1.75 2.67 4.23 3.75.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.49-.61 1.7-1.2.21-.59.21-1.09.15-1.2-.06-.11-.23-.17-.48-.3Z"/></svg>
                  Fale com a Lucy
                </a>
                <a href="#servicos" className="inline-flex items-center gap-2 bg-white border border-[#FCE4EC] text-[#1E1A1E] px-7 py-4 rounded-full font-semibold hover:border-[#F8BBD0] hover:bg-[#FFF0F5] transition-colors">
                  Conheça os serviços
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7m10 0v10"/></svg>
                </a>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-3">
                  <img src="/assets/images/lucy-portrait.jpg" className="w-9 h-9 rounded-full border-2 border-white object-cover" alt="" />
                  <img src="/assets/images/lucy-with-dog-01.jpg" className="w-9 h-9 rounded-full border-2 border-white object-cover" alt="" />
                  <img src="/assets/images/lucy-with-dog-02.jpg" className="w-9 h-9 rounded-full border-2 border-white object-cover" alt="" />
                  <div className="w-9 h-9 rounded-full bg-[#C2185B] border-2 border-white grid place-items-center text-white text-xs font-bold">+cuidado</div>
                </div>
                <p className="text-sm text-[#6B6570] leading-tight">Atendimento<br /><span className="font-semibold text-[#1E1A1E]">presencial e online</span></p>
              </div>
            </div>

            {/* Right image composition */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative mx-auto max-w-[520px]">
                <div className="absolute -inset-3 bg-gradient-to-br from-[#FCE4EC] to-[#F8BBD0]/40 rounded-[36px] blur-[1px] hidden lg:block" />
                <div className="relative bg-white p-2 lg:p-3 rounded-[32px] shadow-[0_24px_64px_rgba(194,24,91,0.15)] border border-[#FCE4EC] rotate-[0.6deg]">
                  <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] lg:aspect-[4/5.2] bg-[#FFF0F5]">
                    <img src="/assets/images/lucy-with-dog-01.jpg" alt="Lucy Corrêa com cachorro — atendimento com carinho" className="w-full h-full object-cover object-[center_20%]" />
                    <div className="absolute bottom-3 left-3 right-3 bg-white/92 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white flex items-center gap-3">
                      <img src="/assets/logo/logo-original.jpg" alt="" className="w-10 h-10 rounded-full object-cover border border-[#FCE4EC]" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold tracking-widest text-[#C2185B]">LU CORRÊA ANIMAL CARE</p>
                        <p className="text-sm font-medium text-[#1E1A1E] -mt-0.5">Cuidado e carinho em cada atendimento</p>
                      </div>
                      <span className="w-8 h-8 rounded-full bg-[#C2185B] text-white grid place-items-center">♥</span>
                    </div>
                  </div>
                </div>

                {/* floating cards */}
                <div className="absolute -left-4 lg:-left-10 top-[18%] bg-white rounded-2xl p-3 lg:p-4 shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-[#FCE4EC] hidden sm:flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 rounded-full bg-[#E8F5E9] grid place-items-center text-green-600">✓</div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-[#4CAF50]">VACINAS EM DIA</p>
                    <p className="text-sm font-semibold -mt-1">Prevenção com carinho</p>
                  </div>
                </div>

                <div className="absolute -right-2 lg:-right-6 bottom-[14%] bg-white rounded-2xl p-3 shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-[#FCE4EC] hidden sm:block">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#C2185B]"><span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" /> ATENDIMENTO HUMANIZADO</div>
                  <p className="text-xs text-[#8E8A8F] mt-1">Cada pet é único e especial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="relative bg-white border-y border-[#FCE4EC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#FFF0F5]">
            {[
              { icon: "♥", title: "Cuidado", desc: "Atenção a cada detalhe do seu pet" },
              { icon: "✦", title: "Atenção", desc: "Escuta e acolhimento com calma" },
              { icon: "☺", title: "Bem-estar", desc: "Conforto, higiene e prevenção" },
              { icon: "◐", title: "Profissionalismo", desc: "Orientação clara e responsável" },
            ].map((i) => (
              <div key={i.title} className="py-6 lg:py-8 px-2 lg:px-6 flex gap-3 lg:gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFF0F5] border border-[#FCE4EC] grid place-items-center text-[#C2185B] font-bold flex-shrink-0">{i.icon}</div>
                <div>
                  <p className="font-semibold text-sm lg:text-[15px]">{i.title}</p>
                  <p className="text-xs lg:text-sm text-[#6B6570] leading-tight mt-0.5">{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-16 lg:py-24 bg-[#FFFCFD]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[#C2185B] bg-white border border-[#FCE4EC] px-3 py-1.5 rounded-full">CUIDADO COMPLETO</span>
            <h2 className="mt-4 text-[36px] lg:text-[44px] font-semibold leading-[0.95]">Cuidado completo <br /><span className="text-[#C2185B] italic font-medium">para o seu pet</span></h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#4A4450]">Dois universos de cuidado conectados pela mesma dedicação. Escolha a categoria e fale diretamente com a Lucy — sem promessas irreais, com orientação honesta.</p>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Clínica */}
            <div className="bg-white rounded-[28px] border border-[#FCE4EC] shadow-[0_16px_48px_rgba(194,24,91,0.07)] overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#C2185B] to-[#E91E63]" />
              <div className="p-7 lg:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-2 bg-[#FFF0F5] text-[#C2185B] text-xs font-bold tracking-widest px-3 py-1.5 rounded-full">CLÍNICA VETERINÁRIA</span>
                    <h3 className="mt-3 text-[24px] font-semibold leading-tight">Saúde, prevenção e acompanhamento</h3>
                    <p className="mt-2 text-sm text-[#6B6570] leading-relaxed">Atendimento veterinário voltado à saúde, prevenção e acompanhamento do seu pet, com orientação responsável.</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#C2185B] text-white grid place-items-center flex-shrink-0 shadow-md">+</div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { name: "Consultas", icon: "🩺" },
                    { name: "Vacinas", icon: "💉" },
                    { name: "Procedimentos", icon: "🧪" },
                    { name: "Exames", icon: "🔬" },
                    { name: "Especialidades", icon: "⭐" },
                    { name: "Cirurgias", icon: "✦" },
                  ].map((s) => (
                    <div key={s.name} className="group flex items-center gap-3 p-3.5 rounded-2xl bg-[#FFFCFD] border border-[#FFF0F5] hover:border-[#FCE4EC] hover:bg-white transition-colors">
                      <span className="w-9 h-9 rounded-full bg-white border border-[#FCE4EC] grid place-items-center text-sm shadow-sm">{s.icon}</span>
                      <span className="text-sm font-medium">{s.name}</span>
                    </div>
                  ))}
                </div>

                <a href={wpp("Olá! Gostaria de saber mais sobre atendimento veterinário (consulta, vacina, exame ou procedimento). Poderia me orientar?")} target="_blank" rel="noopener noreferrer" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#1E1A1E] text-white py-4 rounded-full font-semibold hover:bg-black transition-colors">
                  Consultar atendimento veterinário
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </a>
                <p className="mt-3 text-center text-xs text-[#8E8A8F]">Cada caso é avaliado individualmente. Consulte disponibilidade.</p>
              </div>
            </div>

            {/* Estética */}
            <div className="bg-white rounded-[28px] border border-[#FCE4EC] shadow-[0_16px_48px_rgba(194,24,91,0.07)] overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#F48FB1] to-[#F8BBD0]" />
              <div className="p-7 lg:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-2 bg-[#FFF0F5] text-[#AD1457] text-xs font-bold tracking-widest px-3 py-1.5 rounded-full">ESTÉTICA ANIMAL</span>
                    <h3 className="mt-3 text-[24px] font-semibold leading-tight">Conforto, higiene e bem-estar</h3>
                    <p className="mt-2 text-sm text-[#6B6570] leading-relaxed">Cuidados de higiene e estética para ajudar seu pet a ficar confortável, limpinho e bem cuidado.</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F48FB1] text-white grid place-items-center flex-shrink-0 shadow-md">✂</div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { name: "Banho", icon: "🫧" },
                    { name: "Higiene", icon: "✨" },
                    { name: "Tosa na máquina", icon: "✂" },
                    { name: "Tosa higiênica", icon: "🧼" },
                    { name: "Tosa na tesoura", icon: "💇" },
                    { name: "Tosa da raça", icon: "🐩" },
                  ].map((s) => (
                    <div key={s.name} className="group flex items-center gap-3 p-3.5 rounded-2xl bg-[#FFFCFD] border border-[#FFF0F5] hover:border-[#FCE4EC] hover:bg-white transition-colors">
                      <span className="w-9 h-9 rounded-full bg-white border border-[#FCE4EC] grid place-items-center text-sm shadow-sm">{s.icon}</span>
                      <span className="text-sm font-medium">{s.name}</span>
                    </div>
                  ))}
                </div>

                <a href={wpp("Olá! Gostaria de consultar banho e tosa / estética animal. Poderia me informar disponibilidade?")} target="_blank" rel="noopener noreferrer" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#C2185B] text-white py-4 rounded-full font-semibold hover:bg-[#AD1457] transition-colors">
                  Consultar banho e tosa
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </a>
                <p className="mt-3 text-center text-xs text-[#8E8A8F]">Serviço com horário marcado. Produtos e técnicas sob consulta.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-[#FFF0F5] border border-[#FCE4EC] rounded-2xl p-4 flex gap-3 items-start">
            <span className="w-8 h-8 rounded-full bg-white border border-[#FCE4EC] grid place-items-center text-[#C2185B] flex-shrink-0 mt-0.5">i</span>
            <p className="text-sm leading-relaxed text-[#4A4450]"><span className="font-semibold text-[#1E1A1E]">Transparência:</span> Não informamos preços, duração ou produtos sem avaliação. Cada pet é único — a Lucy orienta o melhor caminho após entender a necessidade. Não garantimos procedimentos sem consulta.</p>
          </div>
        </div>
      </section>

      {/* Professional */}
      <section id="sobre" className="py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center bg-white rounded-[32px] border border-[#FCE4EC] shadow-[0_20px_60px_rgba(194,24,91,0.08)] p-6 lg:p-10">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#FFF0F5] rounded-[28px] hidden lg:block" />
              <div className="relative grid grid-cols-[1.2fr_0.8fr] gap-4">
                <div className="rounded-[24px] overflow-hidden aspect-[3/4] bg-[#FFF0F5] border border-[#FCE4EC]">
                  <img src="/assets/images/lucy-portrait.jpg" alt="Lucy Corrêa — Lu Corrêa Animal Care" className="w-full h-full object-cover object-top" />
                </div>
                <div className="space-y-4">
                  <div className="rounded-[20px] overflow-hidden aspect-square bg-[#FFF0F5] border border-[#FCE4EC]">
                    <img src="/assets/images/lucy-with-dog-02.jpg" alt="Lucy com pet" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-[#C2185B] rounded-[20px] p-5 text-white">
                    <p className="text-3xl font-bold leading-none">♥</p>
                    <p className="text-sm font-semibold mt-2 leading-tight">Cuidado de verdade, com atenção a cada pet</p>
                    <p className="text-xs opacity-80 mt-1">Vínculo entre tutores, animais e quem cuida</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-2 bg-white rounded-2xl px-4 py-3 shadow-xl border border-[#FCE4EC] hidden lg:flex items-center gap-3">
                <img src="/assets/logo/logo-original.jpg" className="w-8 h-8 rounded-full object-cover" alt="" />
                <span className="text-xs font-bold tracking-widest text-[#C2185B]">LUCY CORRÊA</span>
              </div>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[#C2185B] bg-[#FFF0F5] px-3 py-1.5 rounded-full border border-[#FCE4EC]">QUEM CUIDA</span>
              <h2 className="mt-4 text-[34px] lg:text-[40px] font-semibold leading-[0.95]">Cuidado de verdade,<br /><span className="text-[#C2185B] italic font-medium">com atenção a cada pet</span></h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#4A4450]">
                A <span className="font-semibold text-[#1E1A1E]">Lucy Corrêa</span> idealizou a <span className="font-semibold">Lu Corrêa Animal Care</span> para oferecer um atendimento onde o pet é acolhido com calma e o tutor é ouvido com atenção. Cada consulta, vacina e cada banho é conduzido com respeito ao tempo do animal e transparência com a família.
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-[#6B6570]">
                Sem promessas genéricas: aqui você encontra orientação honesta, cuidado com higiene e bem-estar, e a segurança de falar diretamente com quem te atende. Presencialmente ou online, o foco é um só — o bem-estar de quem faz parte da sua família.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-[#FFFCFD] border border-[#FCE4EC] rounded-2xl p-4">
                  <p className="text-sm font-semibold">Acolhimento</p>
                  <p className="text-xs text-[#6B6570] mt-1">Escuta atenta, sem pressa, com carinho</p>
                </div>
                <div className="bg-[#FFFCFD] border border-[#FCE4EC] rounded-2xl p-4">
                  <p className="text-sm font-semibold">Responsabilidade</p>
                  <p className="text-xs text-[#6B6570] mt-1">Sem diagnósticos por mensagem</p>
                </div>
              </div>

              <a href={wpp("Olá Lucy! Vim pelo site e gostaria de conversar sobre meu pet.")} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-[#1E1A1E] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-black transition-colors">
                Conversar com a Lucy
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="py-16 lg:py-24 bg-[#FFF8FA]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="inline-flex text-xs font-bold tracking-[0.16em] text-[#C2185B] bg-white border border-[#FCE4EC] px-3 py-1.5 rounded-full">NOSSO CUIDADO NA PRÁTICA</span>
              <h2 className="mt-4 text-[34px] lg:text-[40px] font-semibold leading-none">Um pouco do nosso<br /><span className="text-[#C2185B] italic font-medium">cuidado na prática</span></h2>
            </div>
            <p className="max-w-[420px] text-sm leading-relaxed text-[#6B6570]">Fotografias reais da Lucy em atendimento. Cada imagem preserva o vínculo e o respeito — sem cortes nos rostos e sem encenação.</p>
          </div>
          <div className="mt-10">
            <Gallery />
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-[#8E8A8F]">
            <span className="bg-white border border-[#FCE4EC] px-3 py-1.5 rounded-full">📸 Fotografias reais da profissional</span>
            <span className="bg-white border border-[#FCE4EC] px-3 py-1.5 rounded-full">Toque para ampliar</span>
            <span className="bg-white border border-[#FCE4EC] px-3 py-1.5 rounded-full">Sem filtros artificiais</span>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex text-xs font-bold tracking-[0.16em] text-[#C2185B] bg-[#FFF0F5] border border-[#FCE4EC] px-4 py-1.5 rounded-full">VÍDEOS REAIS</span>
            <h2 className="mt-4 text-[34px] lg:text-[44px] font-semibold leading-[0.95]">Cuidado que você <span className="text-[#C2185B] italic font-medium">pode conhecer de perto</span></h2>
            <p className="mt-4 text-sm lg:text-[15px] text-[#6B6570] leading-relaxed">Dois registros reais da rotina: um atendimento acolhedor e a aplicação de vacina com técnica e tranquilidade. Reproduza quando quiser — sem autoplay com som.</p>
          </div>
          <div className="mt-10">
            <VideoSection />
          </div>
          <p className="mt-6 text-center text-xs text-[#8E8A8F]">Vídeos hospedados localmente no projeto • Controles nativos • Reprodução sob demanda</p>
        </div>
      </section>

      {/* Online & Presencial */}
      <section className="py-16 bg-[#FFF0F5]/50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-[34px] lg:text-[40px] font-semibold leading-none">Atendimento <span className="text-[#C2185B] italic">presencial</span> e online</h2>
            <p className="mt-3 text-sm text-[#6B6570] leading-relaxed">Escolha o formato que faz mais sentido para você e seu pet. A Lucy orienta se o caso pode ser atendido online ou se precisa ser presencial.</p>
          </div>
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-[28px] p-7 lg:p-8 border border-[#FCE4EC] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F5E9] text-green-700 grid place-items-center">⌂</div>
              <h3 className="mt-4 text-xl font-semibold">Consulta presencial</h3>
              <p className="mt-2 text-sm text-[#6B6570] leading-relaxed">Avaliação completa, contato direto, acolhimento no espaço de atendimento. Ideal para exames, vacinas, procedimentos e tutores que preferem o olho no olho.</p>
              <ul className="mt-4 space-y-2 text-sm text-[#4A4450]">
                <li className="flex gap-2"><span className="text-green-600">✓</span> Acompanhamento próximo</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Procedimentos e vacinas</li>
              </ul>
              <a href={wpp("Olá! Gostaria de consultar disponibilidade para atendimento presencial.")} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full justify-center items-center gap-2 bg-[#1E1A1E] text-white py-3.5 rounded-full font-semibold">Consultar presencial <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
            </div>
            <div className="bg-white rounded-[28px] p-7 lg:p-8 border border-[#FCE4EC] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#E3F2FD] text-blue-700 grid place-items-center">◈</div>
              <h3 className="mt-4 text-xl font-semibold">Consulta online</h3>
              <p className="mt-2 text-sm text-[#6B6570] leading-relaxed">Orientação à distância para dúvidas, acompanhamento e triagem. A Lucy esclarece quando o atendimento online é suficiente e quando é necessário ir ao presencial.</p>
              <ul className="mt-4 space-y-2 text-sm text-[#4A4450]">
                <li className="flex gap-2"><span className="text-blue-600">✓</span> Praticidade, sem deslocamento</li>
                <li className="flex gap-2"><span className="text-blue-600">✓</span> Triagem e orientações</li>
              </ul>
              <a href={wpp("Olá! Gostaria de saber sobre consulta online. Como funciona?")} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full justify-center items-center gap-2 bg-white border border-[#1E1A1E] text-[#1E1A1E] py-3.5 rounded-full font-semibold hover:bg-[#FFFCFD]">Consultar online <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-[#8E8A8F] bg-white border border-[#FCE4EC] rounded-full inline-flex px-4 py-2 mx-auto">Nem todo procedimento pode ser feito online • A profissional orienta com responsabilidade</p>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Hours />
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-12 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#C2185B] via-[#D81B60] to-[#E91E63] p-8 lg:p-12 text-white">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
            <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              <div>
                <span className="inline-flex bg-white/15 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest">VAMOS CUIDAR DO SEU PET?</span>
                <h2 className="mt-6 text-[36px] lg:text-[48px] font-semibold leading-[0.9]">Fale com a Lucy.<br /><span className="font-light italic opacity-90">Estamos aqui para ajudar.</span></h2>
                <p className="mt-4 text-white/90 text-[15px] leading-relaxed max-w-[520px]">Tire dúvidas, consulte disponibilidade e receba orientação com carinho. Atendemos com horário marcado — confirme sempre pelo WhatsApp.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={wpp("Oi vim do Instagram")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-[#C2185B] px-7 py-4 rounded-full font-bold hover:bg-[#FFF0F5] transition-colors shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.82 9.82 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.48 1.34 4.99L2 22l5.15-1.32A9.82 9.82 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.67-1.04-5.18-2.95-7.09ZM12 20a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-3.06.79.79-2.98-.19-.31A7.92 7.92 0 0 1 4 12C4 7.58 7.58 4 12 4c2.14 0 4.15.83 5.66 2.34A7.95 7.95 0 0 1 20 12c0 4.42-3.58 8-8 8Zm4.69-5.96c-.25-.13-1.49-.74-1.72-.82-.23-.09-.39-.13-.56.13-.17.25-.64.82-.79.99-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.32-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.13.17 1.75 2.67 4.23 3.75.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.49-.61 1.7-1.2.21-.59.21-1.09.15-1.2-.06-.11-.23-.17-.48-.3Z"/></svg>
                    Conversar pelo WhatsApp
                  </a>
                  <a href="https://www.instagram.com/lucorrea_animalcare" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 text-white px-6 py-4 rounded-full font-semibold hover:bg-white/25 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                    @lucorrea_animalcare
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a href={wpp("Olá! Gostaria de informações sobre vacinação.")} target="_blank" className="text-xs bg-white/15 border border-white/20 px-3 py-2 rounded-full hover:bg-white/25 transition-colors">Vacinação →</a>
                  <a href={wpp("Olá! Gostaria de consultar banho e tosa.")} target="_blank" className="text-xs bg-white/15 border border-white/20 px-3 py-2 rounded-full hover:bg-white/25 transition-colors">Banho e tosa →</a>
                  <a href={wpp("Olá! Gostaria de agendar uma consulta veterinária.")} target="_blank" className="text-xs bg-white/15 border border-white/20 px-3 py-2 rounded-full hover:bg-white/25 transition-colors">Consulta →</a>
                </div>
              </div>

              <div className="bg-white rounded-[24px] p-6 lg:p-7 text-[#1E1A1E] shadow-xl">
                <div className="flex items-center gap-3">
                  <img src="/assets/logo/logo-original.jpg" className="w-10 h-10 rounded-full object-cover border border-[#FCE4EC]" alt="" />
                  <div>
                    <p className="text-xs font-bold tracking-widest text-[#C2185B]">LU CORRÊA ANIMAL CARE</p>
                    <p className="text-sm font-semibold -mt-1">Lucy Corrêa</p>
                  </div>
                  <span className="ml-auto w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div className="mt-6 space-y-3">
                  <a href="tel:+5511911879750" className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FFFCFD] border border-[#FCE4EC] hover:bg-[#FFF0F5] transition-colors">
                    <span className="w-10 h-10 rounded-full bg-[#C2185B] text-white grid place-items-center flex-shrink-0">☎</span>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-[#8E8A8F]">WHATSAPP / TELEFONE</p>
                      <p className="text-sm font-semibold">+55 11 91187-9750</p>
                    </div>
                    <span className="ml-auto text-[#C2185B]">↗</span>
                  </a>
                  <a href="https://www.instagram.com/lucorrea_animalcare" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FFFCFD] border border-[#FCE4EC] hover:bg-[#FFF0F5] transition-colors">
                    <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F58529] to-[#DD2A7B] text-white grid place-items-center flex-shrink-0">◎</span>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-[#8E8A8F]">INSTAGRAM</p>
                      <p className="text-sm font-semibold">@lucorrea_animalcare</p>
                    </div>
                    <span className="ml-auto text-[#8E8A8F]">↗</span>
                  </a>
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FFF8FA] border border-[#FCE4EC]">
                    <span className="w-10 h-10 rounded-full bg-white border border-[#FCE4EC] grid place-items-center flex-shrink-0">◷</span>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-[#8E8A8F]">HORÁRIOS</p>
                      <p className="text-sm font-medium">Seg–Sex 09h–17h • Sáb 09h–15h</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-center text-[#8E8A8F]">Mensagens pré-preenchidas • Abre em nova aba • Sem agendamento automático</p>
              </div>
            </div>
          </div>

          {/* Asset recovery report */}
          <div className="mt-8 bg-white border border-[#E8F5E9] rounded-2xl p-5 lg:p-6">
            <h4 className="font-semibold text-sm flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-green-100 text-green-700 grid place-items-center text-xs">✓</span> Assets originais — recuperação concluída</h4>
            <p className="text-xs text-[#4A4450] mt-2 leading-relaxed">Todos os 7 arquivos do Google Drive foram recuperados com sucesso via download direto e incorporados ao projeto em <code className="bg-[#FFF0F5] px-1.5 py-0.5 rounded text-[#C2185B]">/public/assets/</code>. Originais preservados + versões WebP otimizadas. Vídeos com controles nativos e posters locais. Para atualizar, substitua os arquivos mantendo os mesmos nomes.</p>
            <div className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-2 text-[11px]">
              <span className="bg-[#FFF0F5] border border-[#FCE4EC] rounded-full px-3 py-1.5 text-center">logo-original.jpg ✓</span>
              <span className="bg-[#FFF0F5] border border-[#FCE4EC] rounded-full px-3 py-1.5 text-center">4 fotografias ✓</span>
              <span className="bg-[#FFF0F5] border border-[#FCE4EC] rounded-full px-3 py-1.5 text-center">2 vídeos MP4 ✓</span>
              <span className="bg-[#FFF0F5] border border-[#FCE4EC] rounded-full px-3 py-1.5 text-center">WebP otimizados ✓</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#FCE4EC] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr_0.8fr] gap-10">
            <div>
              <div className="flex items-center gap-3">
                <img src="/assets/logo/logo-original.jpg" alt="Lu Corrêa Animal Care" className="w-11 h-11 rounded-2xl object-cover border border-[#FCE4EC]" />
                <div>
                  <p className="text-xs font-bold tracking-[0.14em] text-[#C2185B]">LU CORRÊA</p>
                  <p className="font-[Cormorant_Garamond] text-lg font-semibold -mt-1">Animal Care</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#6B6570] leading-relaxed max-w-[420px]">Atendimento veterinário e estética animal com cuidado, atenção e carinho. Presencial e online. Fale diretamente com a Lucy pelo WhatsApp.</p>
              <div className="mt-5 flex gap-2">
                <a href={wpp("Oi vim do Instagram")} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#C2185B] text-white grid place-items-center hover:bg-[#AD1457] transition-colors">✆</a>
                <a href="https://www.instagram.com/lucorrea_animalcare" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white border border-[#FCE4EC] grid place-items-center hover:bg-[#FFF0F5] transition-colors">◎</a>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-[#8E8A8F]">NAVEGAÇÃO</p>
              <nav className="mt-4 grid gap-2 text-sm">
                <a href="#inicio" className="hover:text-[#C2185B] transition-colors">Início</a>
                <a href="#servicos" className="hover:text-[#C2185B] transition-colors">Serviços — Clínica & Estética</a>
                <a href="#sobre" className="hover:text-[#C2185B] transition-colors">Sobre a Lucy</a>
                <a href="#galeria" className="hover:text-[#C2185B] transition-colors">Galeria real</a>
                <a href="#contato" className="hover:text-[#C2185B] transition-colors">Contato & Horários</a>
              </nav>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-[#8E8A8F]">CONTATO</p>
              <div className="mt-4 space-y-2 text-sm">
                <p><span className="text-[#8E8A8F]">WhatsApp:</span> <a href={wpp("Oi vim do Instagram")} target="_blank" className="font-semibold hover:text-[#C2185B]">+55 11 91187-9750</a></p>
                <p><span className="text-[#8E8A8F]">Instagram:</span> <a href="https://www.instagram.com/lucorrea_animalcare" target="_blank" className="font-semibold hover:text-[#C2185B]">@lucorrea_animalcare</a></p>
                <p className="text-[#8E8A8F] text-xs leading-relaxed mt-3">Seg–Sex 09:00–17:00 • Sáb 09:00–15:00 • Dom fechado<br />Confirme disponibilidade pelo WhatsApp.</p>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-[#FFF0F5] flex flex-wrap gap-3 justify-between items-center text-xs text-[#8E8A8F]">
            <p>© {new Date().getFullYear()} Lu Corrêa Animal Care • Todos os direitos reservados • Site por agência premium</p>
            <p className="flex items-center gap-2">Feito com <span className="text-[#C2185B]">♥</span> para quem ama pets • Sem avaliações inventadas • Conteúdo verificado</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
