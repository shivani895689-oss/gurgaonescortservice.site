import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/home/CtaSection';
import { siteConfig } from '@/data/siteConfig';
import { breadcrumbSchema, jsonLdScript, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Discreet Handling of Your Data",
  description:
    "How Gurgaon Escort Service handles inquiries, personal details and privacy when you contact us for premium companionship in Gurugram. Read the full policy.",
  path: "/privacy-policy",
  keywords: ["Gurgaon escort privacy policy","data protection escort service"],
});

const sections = [
  {
    "title": "Information We Collect",
    "paragraphs": [
      "We collect only the information you choose to share when contacting us, such as your name, phone number, messaging details, preferred location, booking time, and any preferences you provide for coordination.",
      "We may also collect basic technical data such as browser type, device information, and approximate usage analytics to improve website performance and user experience."
    ]
  },
  {
    "title": "How We Use Information",
    "paragraphs": [
      "Information shared with us is used to respond to inquiries, coordinate bookings, confirm availability, improve our service quality, and maintain communication related to your request.",
      "We do not sell your personal information. We only use your details for legitimate service communication and operational purposes."
    ]
  },
  {
    "title": "Confidentiality & Discretion",
    "paragraphs": [
      "Discretion is a core part of our service. We handle inquiries with care and aim to limit access to personal information to those who need it for coordination.",
      "While we take reasonable measures to protect information, no online or messaging communication method can be guaranteed as completely secure. Please share only information necessary for your booking."
    ]
  },
  {
    "title": "Third-Party Services",
    "paragraphs": [
      "Our website may use third-party tools for analytics, hosting, communication, or performance. These services may process limited data according to their own privacy policies.",
      "When you contact us through WhatsApp, phone, or email, your communication is also subject to the privacy practices of those platforms."
    ]
  },
  {
    "title": "Your Choices",
    "paragraphs": [
      "You may request that we update or remove your contact details from our active communication records, subject to any legal or operational requirements.",
      "By using our website or contacting us, you acknowledge this Privacy Policy and consent to the handling of information as described here."
    ]
  }
];

export default function Page() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Read how Gurgaon Escort Service handles inquiries, communication details, and privacy when you contact us for premium companionship services in Gurugram."
      />
      <section className="section-padding bg-white">
        <div className="container-luxury max-w-4xl">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-serif text-2xl font-bold text-[#4a4d52] mb-4">{section.title}</h2>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
            <div className="rounded-2xl bg-[#fdf8f5] border border-gray-200/60 p-6 text-sm text-gray-600">
              <p><span className="font-semibold text-gray-800">Last updated:</span> {new Date().getFullYear()}</p>
              <p className="mt-2">For questions related to this page, contact us at <a href={`mailto:${siteConfig.email}`} className="text-[#2f3338] font-medium hover:underline">{siteConfig.email}</a> or call <a href={`tel:${siteConfig.phone}`} className="text-[#2f3338] font-medium hover:underline">{siteConfig.phoneDisplay}</a>.</p>
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
