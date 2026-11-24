import { ShieldCheck, UserCheck, Clock, MessageSquareHeart, MapPin, BadgeCheck } from 'lucide-react';

const reasons = [
  {
    icon: UserCheck,
    title: 'Verified & Authentic Profiles',
    description:
      'We prioritize genuine profiles and clear presentation so you know exactly what to expect. Trust starts with transparency.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy Comes First',
    description:
      'From your first inquiry to the final booking, we handle every interaction with confidentiality and professional discretion.',
  },
  {
    icon: MapPin,
    title: 'Strong Local Presence',
    description:
      'Our team understands Gurugram well — from DLF and Cyber City to Golf Course Road — helping us deliver fast, smooth local service.',
  },
  {
    icon: Clock,
    title: '24/7 Responsive Support',
    description:
      'Need a last-minute booking or have a question late at night? Our support team is available around the clock to assist you.',
  },
  {
    icon: MessageSquareHeart,
    title: 'Respectful, Human Approach',
    description:
      'We believe great service feels comfortable and natural. Our communication is polite, clear, and focused on your comfort.',
  },
  {
    icon: BadgeCheck,
    title: 'Premium Quality Standards',
    description:
      'We maintain high standards for presentation, punctuality, and overall experience so every booking reflects our premium promise.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#671725] mb-3">Why Choose Us</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a0a0d] leading-tight">
              Why People Trust Our Gurgaon Escort Service
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              In a city as fast-moving as Gurugram, clients want a service that is reliable, discreet, and easy to book. 
              We&apos;ve built our reputation by focusing on the details that matter most: authenticity, privacy, and a genuinely premium experience.
            </p>
            <div className="mt-8 p-6 rounded-2xl bg-[#fffaf9] border border-rose-100">
              <p className="font-serif text-xl font-semibold text-[#671725] mb-2">A local service you can rely on</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Whether you&apos;re searching for a <strong className="text-gray-800">Gurgaon Escort Service near me</strong> or planning ahead for a special evening, 
                our team delivers a smooth, respectful, and confidential experience.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="rounded-2xl border border-rose-100/80 p-6 hover:border-rose-200 hover:shadow-md hover:shadow-rose-950/5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#671725]/8 text-[#671725] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
