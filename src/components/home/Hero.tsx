import Image from 'next/image';
import { Phone, MessageCircle, Shield, Clock, MapPin, Star } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const highlights = [
  { icon: Shield, text: 'Verified & Discreet' },
  { icon: Clock, text: 'Available 24/7' },
  { icon: MapPin, text: 'Fast Gurugram Outcall' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fdf8f5] pt-10 md:pt-14 pb-16 md:pb-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gray-200/50 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gray-200/40 blur-3xl" />
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-gray-200/60 to-transparent" />
      </div>

      <div className="container-luxury relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#2f3338] shadow-sm mb-6">
              <Star className="w-3.5 h-3.5 fill-[#B8BDC4] text-[#B8BDC4]" />
              Gurugram&apos;s Trusted Premium Companion Service
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-[#4a4d52] tracking-tight">
              Gurgaon Escort{' '}
              <span className="block text-[#2f3338]">Service</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              Experience a refined, private, and genuinely welcoming companion service in Gurgaon. 
              At {siteConfig.name}, we connect you with verified companions for premium hotel outcalls, 
              social evenings, and discreet personal time across Gurugram &mdash; with care, class, and complete confidentiality.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`tel:${siteConfig.phone}`} className="btn-wine px-7! py-3.5! text-sm">
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
                WhatsApp Booking
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="flex w-8 h-8 items-center justify-center rounded-full bg-gray-100 text-[#2f3338]">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B8BDC4] text-[#B8BDC4]" />
                ))}
              </div>
              <p><span className="font-semibold text-gray-700">Trusted by clients</span> across DLF, Cyber City &amp; Golf Course Road</p>
            </div>
          </div>

          <div className="relative lg:pl-4">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-950/10 border border-white/60 bg-white">
              <div className="relative aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5]">
                <Image
                  src="/img/gurgaon-escort-service-premium-companion.webp"
                  alt="Verified premium escort in Gurgaon available 24/7 for discreet hotel outcall"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#4a4d52]/70 via-[#4a4d52]/10 to-transparent" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8">
                <div className="bg-white/12 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-white">
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-200/80 mb-2">Premium Experience</p>
                  <p className="font-serif text-2xl font-semibold leading-snug">Discretion. Elegance. Genuine Connection.</p>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <p className="text-xl font-bold text-[#D8DCE2]">24/7</p>
                      <p className="text-[11px] text-gray-200/80 uppercase tracking-wide">Available</p>
                    </div>
                    <div className="text-center border-x border-white/15">
                      <p className="text-xl font-bold text-[#D8DCE2]">20-30</p>
                      <p className="text-[11px] text-gray-200/80 uppercase tracking-wide">Min Arrival</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-[#D8DCE2]">100%</p>
                      <p className="text-[11px] text-gray-200/80 uppercase tracking-wide">Private</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-2 sm:-left-6 top-8 bg-white rounded-2xl shadow-xl shadow-gray-950/10 border border-gray-200 p-4 max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#2f3338]">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Verified Profiles</p>
                  <p className="text-xs text-gray-500">Authentic & trusted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
