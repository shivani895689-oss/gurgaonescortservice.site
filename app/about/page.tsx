import type { Metadata } from 'next';
import { Shield, Heart, Clock, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import AboutSection from '@/components/home/AboutSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TrustBar from '@/components/home/TrustBar';
import CtaSection from '@/components/home/CtaSection';
import HubContent from '@/components/HubContent';
import { breadcrumbSchema, jsonLdScript, pageMetadata, serviceSchema, webPageSchema } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'About Us | Premium Gurgaon Escort Service',
  description:
    'Learn about Gurgaon Escort Service by Alina: verified profiles, privacy-first coordination and 24/7 discreet companionship across Gurugram and Delhi NCR.',
  path: '/about',
  keywords: [
    'about Gurgaon escort service',
    'about Alina companions Gurugram',
    'verified escorts Gurgaon',
    'trusted escort agency Gurgaon',
    'escort service company Gurugram',
    'who we are gurgaon escorts',
    'premium companion agency gurgaon',
    '24/7 escort service gurgaon',
    'escort service since 2019 gurgaon',
    'discreet escort agency gurugram',
    'gurgaon escorts reviews',
    'why choose gurgaon escort service',
    'verified companion profiles gurugram',
    'privacy first escort booking gurgaon',
    'professional escort agency gurugram',
    'experienced escorts in gurgaon',
    'best companion agency gurugram',
  ],
  imageAlt: 'About Gurgaon Escort Service by Alina',
});

const values = [
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Every inquiry, conversation, and booking is handled with strict confidentiality and respectful discretion.',
  },
  {
    icon: CheckCircle2,
    title: 'Verified Standards',
    description: 'We focus on authentic profiles, clear communication, and a premium experience that matches expectations.',
  },
  {
    icon: Clock,
    title: 'Responsive Coordination',
    description: 'Our team is available 24/7 to guide you through availability, location coverage, and smooth booking coordination.',
  },
  {
    icon: Heart,
    title: 'Respectful Experience',
    description: 'We believe premium companionship should feel comfortable, professional, and thoughtfully coordinated from start to finish.',
  },
];

export default function AboutPage() {
  const schema = [
    webPageSchema({
      name: 'About Us | Premium Gurgaon Escort Service by Alina',
      description:
        'Learn about Gurgaon Escort Service by Alina - a premium, discreet companion agency in Gurugram focused on verified profiles, respectful coordination and 24/7 availability.',
      path: '/about',
      pageType: 'AboutPage',
    }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
    ]),
    serviceSchema({
      name: 'Gurgaon Escort Service by Alina',
      description:
        'Premium companion agency in Gurugram offering verified companions, discreet booking, and 24/7 availability for hotels and private residences.',
      path: '/about',
      areaServed: ['Gurgaon', 'Gurugram', 'Delhi NCR'],
    }),
  ];

  return (
    <>
      {schema.map((item, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(item)} />
      ))}
      <PageHero
        eyebrow="About Us"
        title="A Premium Companion Experience Built on Trust"
        description="Gurgaon Escort Service by Alina is designed for clients who value discretion, quality, and a seamless booking experience across Gurugram's most premium locations."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />
      <AboutSection />

      <section className="section-padding bg-[#fdf8f5]">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">Our Values</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4a4d52]">
              The Standards Behind <span className="gradient-text-gold">Our Service</span>
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Every interaction is guided by professionalism, privacy, and a commitment to making premium companionship feel effortless and respectful.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#2f3338]/8 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#2f3338]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TrustBar />
      <WhyChooseUs />
      <HubContent page="about" />
      <CtaSection />
    </>
  );
}


