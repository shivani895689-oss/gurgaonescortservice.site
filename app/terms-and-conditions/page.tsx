import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/home/CtaSection';
import { siteConfig } from '@/data/siteConfig';
import { breadcrumbSchema, jsonLdScript, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions | Booking Rules & Conduct",
  description:
    "The terms for using this website and contacting Gurgaon Escort Service: eligibility, booking communication, payments, cancellations and acceptable conduct.",
  path: "/terms-and-conditions",
  keywords: ["Gurgaon escort terms","escort booking terms Gurugram"],
});

const sections = [
  {
    "title": "Website Use",
    "paragraphs": [
      "By accessing this website, you confirm that you are at least 18 years old and legally permitted to view adult-oriented companionship service information in your jurisdiction.",
      "You agree to use this website respectfully and lawfully. Any misuse, harassment, abusive communication, or unlawful activity may result in refusal of service."
    ]
  },
  {
    "title": "Service Communication",
    "paragraphs": [
      "Information on this website is provided for general inquiry and coordination purposes. Availability, response times, and service arrangements may vary based on location, timing, and verification requirements.",
      "Submitting an inquiry does not guarantee availability. All bookings are subject to confirmation through our official communication channels."
    ]
  },
  {
    "title": "User Responsibilities",
    "paragraphs": [
      "You agree to provide accurate and respectful information when making an inquiry. You are responsible for ensuring that your contact, location, and booking details are correct.",
      "Clients are expected to maintain respectful behavior, honor agreed arrangements, and follow any applicable hotel, residence, or local rules during a booking."
    ]
  },
  {
    "title": "Content & Intellectual Property",
    "paragraphs": [
      "All website content, branding, text, layout, and design elements are owned by or licensed to Gurgaon Escort Service unless otherwise stated. Unauthorized copying, reproduction, or misuse is prohibited.",
      "Images and descriptions are for presentation purposes. We may update website content, services, or availability at any time without prior notice."
    ]
  },
  {
    "title": "Limitation of Liability",
    "paragraphs": [
      "We strive to keep website information accurate and up to date, but we do not guarantee completeness or uninterrupted availability. Use of the website and reliance on its content is at your own discretion.",
      "To the maximum extent permitted by law, Gurgaon Escort Service is not liable for indirect, incidental, or consequential damages arising from website use or communication delays."
    ]
  }
];

export default function Page() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: "Terms & Conditions", path: "/terms-and-conditions" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Review the terms and conditions for using the Gurgaon Escort Service website and contacting our team for companionship coordination in Gurugram."
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
