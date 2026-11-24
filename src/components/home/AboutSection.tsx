import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const points = [
  'Verified companions with authentic profiles',
  'Discreet outcall to 5-star hotels and private residences',
  'Professional, respectful, and client-first communication',
  'Fast response across DLF, Cyber City, and Golf Course Road',
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-gray-950/10">
              <div className="aspect-[4/4.5] relative">
                <Image
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
                  alt="Elegant premium interior representing Gurgaon escort service experience"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-[#4a4d52]/25 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-2 sm:right-6 bg-white rounded-2xl border border-gray-200 shadow-lg p-5 max-w-[260px]">
              <p className="font-serif text-3xl font-bold text-[#2f3338]">Gurugram</p>
              <p className="text-sm text-gray-600 mt-1">Serving premium locations with a local, responsive team.</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">About Us</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a4d52] leading-tight">
              A Modern Gurgaon Escort Service Built on Trust &amp; Discretion
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Finding the right <strong className="text-gray-800">Gurgaon Escort Service</strong> should feel simple, safe, and respectful. 
                At {siteConfig.name}, we&apos;ve created a premium companion experience for people who value privacy, quality, and genuine human connection. 
                Whether you&apos;re visiting Gurugram for business, staying at a five-star hotel, or looking for a polished companion for a social evening, 
                our team is here to make the experience smooth from start to finish.
              </p>
              <p>
                What sets us apart is our focus on authenticity. We take care in presenting verified profiles, clear communication, and prompt local support. 
                Our companions are chosen not only for their elegance, but also for their confidence, warmth, and ability to make you feel comfortable in any setting &mdash; 
                from a quiet dinner in DLF to a high-profile event near Cyber City.
              </p>
              <p>
                We understand that every client is different. That&apos;s why our Gurgaon escort service is designed around your preferences, your schedule, and your need for discretion. 
                No awkward process, no unnecessary complications &mdash; just a professional, human experience you can trust.
              </p>
            </div>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#2f3338] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
