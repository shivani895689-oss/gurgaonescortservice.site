import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

type Subject = { name: string; kind: string; slug: string };

export function TimingBlock({ subject }: { subject: Subject }) {
  return (
    <section className="section-padding bg-white border-t border-gray-200/70">
      <div className="container-luxury max-w-4xl">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Timing</p>
        <h2 className="font-serif text-3xl font-bold text-gray-900">The best time to book {subject.name} in Gurgaon</h2>
        <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
          <p>
            Timing decides more bookings than price does. Gurgaon runs on office hours: between nine and eleven in the morning the expressway is solid,
            and between six and eight in the evening every road from Cyber City to Golf Course Road is a queue. A companion travelling at those hours
            takes longer to arrive, so the calmest windows are late morning, early afternoon or after nine at night.
          </p>
          <p>
            Weekdays are for business travellers. Most weekday bookings come from guests staying in hotels along Golf Course Road, MG Road or Aerocity
            who finish a meeting at seven and want company at nine. Weekends are for residents: Friday and Saturday evenings fill first, then Sunday
            afternoons for lunches and long drives. If you have a specific date in mind, booking a day ahead is enough; booking a week ahead guarantees it.
          </p>
          <p>
            Seasonal patterns are real as well. The wedding season from November to February keeps companions booked for receptions and family functions,
            and the monsoon in July and August slows every arrival because of waterlogging near Subhash Chowk and the Sohna Road underpasses. During
            Diwali and the last week of December, hotels are full, rates rise and availability drops, so plan earlier than you would in April.
          </p>
          <p>
            Short-notice bookings are possible at any hour, including late night, but they work best inside a ten-kilometre radius. If you are in Manesar,
            Sector 95 or on the Dwarka Expressway, an hour of notice removes most of the uncertainty. The team will always tell you honestly whether a
            slot is realistic rather than accept a booking that will arrive late.
          </p>
        </div>
      </div>
    </section>
  );
}

export function EtiquetteBlock({ subject }: { subject: Subject }) {
  const items = [
    {
      title: 'Keep the first message short',
      text: 'Area, date, time and duration. That is all the team needs to check availability. Long introductions are not necessary and are never shared beyond the person handling your booking.',
    },
    {
      title: 'Be clear about the venue',
      text: 'A hotel name with the tower or wing, or a society with the gate number. Vague locations are the single biggest cause of late arrivals in Gurgaon, where security desks can add ten minutes on their own.',
    },
    {
      title: 'Agree the arrangement before you meet',
      text: 'The rate and duration are confirmed in writing at booking. Nothing changes at the door, and if you want to extend the evening, you say so during the booking rather than at the end.',
    },
    {
      title: 'Pay the companion directly',
      text: 'Cash or UPI, settled with the companion rather than through a link. No card details, no deposits to strangers and no separate "booking fee" - if someone asks for one, it is not us.',
    },
    {
      title: 'Respect the boundaries you agreed',
      text: 'Whatever was discussed at booking is what the evening is. Requests made mid-way that were not agreed can be declined, and the companion is never obliged to explain why.',
    },
    {
      title: 'Keep phones off the table',
      text: 'Photographs of the companion are not taken without permission, and she will not photograph you. If you are at an event where photos are expected, say so before the booking so it can be handled properly.',
    },
    {
      title: 'Say something afterwards',
      text: 'A one-line message about how the evening went helps the next booking immeasurably. It is also how regular clients get first choice of a companion calendar.',
    },
  ];
  return (
    <section className="section-padding bg-[#faf8f5] border-t border-gray-200/70">
      <div className="container-luxury max-w-4xl">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Etiquette</p>
        <h2 className="font-serif text-3xl font-bold text-gray-900">Seven things that make a {subject.kind} booking go well</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          None of this is complicated, but the difference between a good evening and an awkward one is almost always in these details rather than in
          the profile itself. Clients who follow them tend to book the same companion again.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="flex items-start gap-2 font-semibold text-[#2f3338]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8a7f6d]" />
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExtraFaqBlock({ subject, phoneDisplay }: { subject: Subject; phoneDisplay: string }) {
  const faqs = [
    {
      question: 'How quickly can ' + subject.name + ' reach me in Gurgaon?',
      answer:
        'Inside DLF, Cyber City, Golf Course Road, MG Road and Sohna Road, thirty to sixty minutes is typical once a booking is confirmed. New Gurgaon sectors beyond 65, Manesar and the Dwarka Expressway need roughly an hour, and the team will tell you before you commit rather than after.',
    },
    {
      question: 'Do you need an advance payment for a ' + subject.kind + ' booking?',
      answer:
        'No. Payment is settled directly with the companion at the meeting, in cash or by UPI. We never ask for deposits, gift cards, crypto or card details over chat, and any message that does is not from this site.',
    },
    {
      question: 'Can I book ' + subject.name + ' for a hotel stay in Gurgaon?',
      answer:
        'Yes, hotel bookings are the most common arrangement. Share the property name when you write so the guest policy can be checked first; five-star hotels on Golf Course Road and MG Road generally allow visitors, while some budget properties do not.',
    },
    {
      question: 'Is the booking confidential?',
      answer:
        'It is. Companions use a first name only, arrive and leave separately, never discuss the booking in public and do not keep messages after the meeting. Nothing is posted on social media and no client details are stored beyond the current arrangement.',
    },
    {
      question: 'What happens if I need to cancel?',
      answer:
        'Tell the team as early as you can, and there is no charge for cancelling before the companion leaves. If she is already travelling, a small travel amount may be discussed. Nothing is ever added to a future booking without agreement.',
    },
    {
      question: 'Can I request a specific language or personality?',
      answer:
        'Yes, and it is worth doing at booking. Languages, conversation style and the kind of evening you want - quiet dinner, social event, long conversation - are all matched in advance, which is why the first message matters more than the profile photo.',
    },
  ];
  return (
    <section className="section-padding bg-white border-t border-gray-200/70">
      <div className="container-luxury max-w-4xl">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Answers</p>
        <h2 className="font-serif text-3xl font-bold text-gray-900">More {subject.kind} questions, answered</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-2xl border border-gray-200 bg-[#faf8f5] p-5 group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#2f3338]">
                <span>{faq.question}</span>
                <span className="text-xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-600">
          Still unsure? Call or WhatsApp <span className="font-semibold text-[#2f3338]">{phoneDisplay}</span> and ask directly. There is no obligation
          to book after a question.
        </p>
      </div>
    </section>
  );
}

export function AlternativesBlock({
  subject,
  items,
}: {
  subject: Subject;
  items: { name: string; path: string; label: string; tagline: string; specialties: string[] }[];
}) {
  return (
    <section className="section-padding bg-[#faf8f5] border-t border-gray-200/70">
      <div className="container-luxury max-w-4xl">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Other Companions</p>
        <h2 className="font-serif text-3xl font-bold text-gray-900">If {subject.name} is booked, who else fits</h2>
        <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
          <p>
            Availability changes hour by hour, and the practical question at nine on a Friday is not who is best but who is free. These are the
            companions most often suggested when {subject.name} has no slot left. Each works across the same Gurgaon neighbourhoods and follows the
            same booking process, so nothing about the evening changes except the person.
          </p>
          <p>
            Choosing between them is usually about temperament rather than appearance. If you want conversation that runs long, pick a companion whose
            listed strengths match the evening you have in mind; if you want an event handled smoothly, pick one who works events regularly. The team
            can make the introduction in one message when you name the person you are interested in.
          </p>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.path} className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-[#2f3338]">
                <Link href={item.path} className="hover:underline">
                  {item.name}
                </Link>{' '}
                <span className="text-sm font-normal text-gray-500">{item.label}</span>
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.tagline}. Best for {item.specialties.slice(0, 3).join(', ').toLowerCase()}.</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
