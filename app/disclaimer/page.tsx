import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/home/CtaSection';
import { disclaimerExtras } from '@/data/legalExtras';
import { siteConfig } from '@/data/siteConfig';
import { breadcrumbSchema, jsonLdScript, pageMetadata, webPageSchema } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: "Disclaimer | Content, Age & Service Limits",
  description:
    "Important disclaimer for Gurgaon Escort Service on website content, adult-only access, service communication, availability and user responsibility.",
  path: "/disclaimer",
  keywords: ["Gurgaon escort service disclaimer","escort website disclaimer gurugram","profile verification disclaimer","escort service information gurgaon","booking disclaimer gurugram escorts","gurgaon companion service notice","terms of use escort website","escort service gurgaon legal notice","18+ escort website gurgaon","escort service liability gurugram","escort booking responsibility gurgaon","escort service content notice gurugram"],
});

const sections = [
  {
    "title": "Adult-Only Access",
    "paragraphs": [
      "This website is intended strictly for adults aged 18 years or older. By continuing to browse or contact us, you confirm that you meet the legal age requirement in your location.",
      "If you are under 18 or if such content is not permitted in your jurisdiction, you should leave this website immediately."
    ]
  },
  {
    "title": "General Information",
    "paragraphs": [
      "The content on this website is provided for informational and service coordination purposes only. While we aim for accuracy, details such as availability, profiles, images, response times, and coverage may change.",
      "Nothing on this website should be interpreted as a guarantee of specific availability, outcomes, or suitability for every request."
    ]
  },
  {
    "title": "Respectful & Lawful Use",
    "paragraphs": [
      "Gurgaon Escort Service expects all visitors and clients to communicate respectfully and comply with applicable laws and local regulations.",
      "We reserve the right to refuse communication or service where a request appears unsafe, unlawful, disrespectful, or inconsistent with our policies."
    ]
  },
  {
    "title": "External Links & Third Parties",
    "paragraphs": [
      "The website may reference or link to third-party platforms such as WhatsApp, phone, email, or map services. We are not responsible for the content, availability, or privacy practices of external services.",
      "Any interaction with third-party platforms is governed by their own terms and policies."
    ]
  }
];

export default function Page() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: "Disclaimer", path: "/disclaimer" },
  ]);
  const pageSchema = webPageSchema({
    name: "Disclaimer",
    description: "Important information about the content, profiles and services described on Gurgaon Escort Service, and how to verify details before booking.",
    path: "/disclaimer",
    pageType: 'WebPage',
  });


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript([breadcrumb, pageSchema])} />
      <PageHero
        eyebrow="Legal"
        title="Disclaimer"
        description="Important disclaimer for Gurgaon Escort Service regarding website content, adult access, service communication, and user responsibility."
      />
      <section className="section-padding bg-white">
        <div className="container-luxury max-w-4xl">
          <div className="space-y-10">
            {[...sections, ...disclaimerExtras].map((section) => (
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

