import { ChevronDown } from 'lucide-react';
import { generalFaqs } from '@/data/siteConfig';

interface FaqSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  faqs?: { question: string; answer: string }[];
  id?: string;
  includeSchema?: boolean;
}

export default function FaqSection({
  eyebrow = 'Frequently Asked Questions',
  title = 'Common Questions About Our Gurgaon Escort Service',
  description = 'Clear answers about booking, privacy, coverage, and what to expect when you contact our team in Gurugram.',
  faqs = generalFaqs,
  id = 'faq',
  includeSchema = true,
}: FaqSectionProps) {
  const faqSchema = includeSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <section id={id} className="section-padding bg-[#fffaf9]">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#671725] mb-3">{eyebrow}</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a0a0d]">{title}</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">{description}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group bg-white border border-rose-100/60 rounded-2xl overflow-hidden shadow-sm"
              open={index === 0}
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 text-left font-semibold text-[#1a0a0d] hover:text-[#671725] transition-colors list-none [&::-webkit-details-marker]:hidden">
                <span className="text-base md:text-lg pr-4">{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-[#671725] shrink-0 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-5">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed border-t border-rose-50 pt-4">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
