import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hi, I would like to know more about your Gurgaon Escort Service.')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-28 right-4 md:bottom-5 md:right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white px-3.5 py-3 shadow-lg shadow-emerald-900/25 hover:bg-[#20bd5a] hover:shadow-xl transition-all duration-300"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
    </a>
  );
}
