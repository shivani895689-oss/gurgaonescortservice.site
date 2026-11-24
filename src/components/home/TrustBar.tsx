import { ShieldCheck, Clock3, Lock, MapPinned } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'Verified Companions',
    desc: 'Authentic profiles with careful screening and quality standards.',
  },
  {
    icon: Lock,
    title: 'Complete Discretion',
    desc: 'Your privacy is respected at every step, from first message to booking.',
  },
  {
    icon: Clock3,
    title: '24/7 Availability',
    desc: 'Day or night, our team is ready to assist you across Gurugram.',
  },
  {
    icon: MapPinned,
    title: 'Local Gurugram Coverage',
    desc: 'Fast outcall service to premium hotels, homes, and business hubs.',
  },
];

export default function TrustBar() {
  return (
    <section className="bg-[#2f3338] text-white py-10 md:py-12" aria-label="Service highlights">
      <div className="container-luxury">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#D8DCE2]" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-white mb-1">{item.title}</h2>
                  <p className="text-xs text-gray-200/80 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
