import { MessageSquareText, UserRoundCheck, CalendarCheck, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: MessageSquareText,
    step: '01',
    title: 'Share Your Preference',
    description:
      'Call or WhatsApp us with your location, preferred time, and the kind of companion experience you are looking for.',
  },
  {
    icon: UserRoundCheck,
    step: '02',
    title: 'Choose with Confidence',
    description:
      'We share available verified profiles and help you select the right companion based on your preferences and schedule.',
  },
  {
    icon: CalendarCheck,
    step: '03',
    title: 'Confirm Discreetly',
    description:
      'Once confirmed, we handle the coordination professionally. Your details remain private and communication stays confidential.',
  },
  {
    icon: Sparkles,
    step: '04',
    title: 'Enjoy the Experience',
    description:
      'Your companion arrives on time at your hotel or residence in Gurugram, ready to provide a polished and comfortable experience.',
  },
];

export default function BookingProcess() {
  return (
    <section id="booking" className="section-padding bg-white">
      <div className="container-luxury">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#671725] mb-3">Booking Process</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a0a0d] leading-tight">
            Simple, Private &amp; Quick Booking
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We&apos;ve made booking a Gurgaon Escort Service straightforward and stress-free. 
            No complicated steps, no unnecessary delays &mdash; just a respectful process designed around your comfort.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="relative">
                <div className="bg-[#fffaf9] border border-rose-100/80 rounded-2xl p-6 h-full hover:shadow-lg hover:shadow-rose-950/5 transition-all duration-300">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#671725] text-white flex items-center justify-center shadow-md shadow-rose-950/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-3xl font-bold text-rose-100">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-rose-200" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
