"use client";
export default function WhatsAppFloat() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5511911879750&text=Oi%20vim%20do%20Instagram"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-[64px] h-[64px] rounded-full bg-[#25D366] text-white grid place-items-center shadow-[0_12px_32px_rgba(37,211,102,0.45)] hover:scale-105 transition-transform"
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.82 9.82 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.48 1.34 4.99L2 22l5.15-1.32A9.82 9.82 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.67-1.04-5.18-2.95-7.09ZM12 20a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-3.06.79.79-2.98-.19-.31A7.92 7.92 0 0 1 4 12C4 7.58 7.58 4 12 4c2.14 0 4.15.83 5.66 2.34A7.95 7.95 0 0 1 20 12c0 4.42-3.58 8-8 8Zm4.69-5.96c-.25-.13-1.49-.74-1.72-.82-.23-.09-.39-.13-.56.13-.17.25-.64.82-.79.99-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.32-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.13.17 1.75 2.67 4.23 3.75.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.49-.61 1.7-1.2.21-.59.21-1.09.15-1.2-.06-.11-.23-.17-.48-.3Z"/></svg>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white" />
    </a>
  );
}
