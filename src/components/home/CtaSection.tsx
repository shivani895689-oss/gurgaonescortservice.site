import { Phone, MessageCircle, Shield, Clock } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function CtaSection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#2f3338] via-[#52111d] to-[#2a090f]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#B8BDC4]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container-luxury relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#D8DCE2] mb-4">Book with Confidence</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready for a Premium Gurgaon Escort Service Experience?
          </h2>
          <p className="mt-5 text-base md:text-lg text-gray-100/85 leading-relaxed max-w-2xl mx-auto">
            Whether you need a companion near DLF, Cyber City, Golf Course Road, or anywhere in Gurugram, 
            our team is here to help you book quickly, privately, and with complete peace of mind.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`tel:${siteConfig.phone}`} className="btn-wine bg-white! text-[#2f3338]! hover:bg-gray-100! px-7! py-3.5! text-sm font-semibold">
              <Phone className="w-4 h-4" />
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hi, I would like to book a premium companion in Gurgaon.')}`}
              className="btn-luxury-whatsapp px-7! py-3.5! text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-200/80">
            <span className="inline-flex items-center gap-2"><Shield className="w-4 h-4 text-[#D8DCE2]" /> Discreet &amp; Confidential</span>
            <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4 text-[#D8DCE2]" /> 24/7 Available in Gurugram</span>
          </div>
        </div>
      </div>
    </section>
  );
}
