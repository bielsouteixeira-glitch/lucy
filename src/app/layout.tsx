import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lucorrea-animalcare.com.br"),
  title: "Lu Corrêa Animal Care — Cuidado veterinário e estética animal com carinho",
  description: "Atendimento veterinário e estética animal com cuidado, atenção e carinho. Consultas presenciais e online, vacinas, exames, procedimentos e estética completa. Fale com a Lucy pelo WhatsApp.",
  keywords: ["clínica veterinária", "veterinária", "banho e tosa", "estética animal", "vacinas", "consultas veterinárias", "Lu Corrêa", "São Paulo"],
  authors: [{ name: "Lu Corrêa Animal Care" }],
  openGraph: {
    title: "Lu Corrêa Animal Care — Cuidado que faz bem para quem faz parte da família",
    description: "Atendimento veterinário e estética animal com carinho, atenção e cuidado em cada detalhe.",
    type: "website",
    locale: "pt_BR",
    url: "https://lucorrea-animalcare.com.br",
    siteName: "Lu Corrêa Animal Care",
    images: [{ url: "/assets/logo/logo-original.jpg", width: 1024, height: 1024, alt: "Lu Corrêa Animal Care - Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lu Corrêa Animal Care",
    description: "Cuidado veterinário e estética animal com carinho, atenção e carinho.",
  },
  icons: {
    icon: "/assets/logo/logo-original.jpg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#FFFCFD] text-[#1E1A1E] antialiased">{children}</body>
    </html>
  );
}
