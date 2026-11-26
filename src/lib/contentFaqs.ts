export type ContentFaq = { question: string; answer: string };

/** Shared FAQ copy used by the on-page block and the FAQPage schema. */
export function extraFaqs(name: string, kind: string): ContentFaq[] {
  return [
    {
      question: 'How quickly can ' + name + ' reach me in Gurgaon?',
      answer:
        'Inside DLF, Cyber City, Golf Course Road, MG Road and Sohna Road, thirty to sixty minutes is typical once a booking is confirmed. New Gurgaon sectors beyond 65, Manesar and the Dwarka Expressway need roughly an hour, and the team will tell you before you commit rather than after.',
    },
    {
      question: 'Do you need an advance payment for a ' + kind + ' booking?',
      answer:
        'No. Payment is settled directly with the companion at the meeting, in cash or by UPI. We never ask for deposits, gift cards, crypto or card details over chat, and any message that does is not from this site.',
    },
    {
      question: 'Can I book ' + name + ' for a hotel stay in Gurgaon?',
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
}
