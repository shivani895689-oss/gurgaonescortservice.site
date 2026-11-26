import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import AboutSection from '@/components/home/AboutSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import AreasSection from '@/components/home/AreasSection';
import BookingProcess from '@/components/home/BookingProcess';
import CtaSection from '@/components/home/CtaSection';
import FaqSection from '@/components/home/FaqSection';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Gurgaon Escort Service | Premium & Discreet Companions',
  description:
    'Premium, verified and discreet escorts in Gurgaon for 5-star hotels, private residences and DLF. Confidential 24/7 bookings across Gurugram. Call or WhatsApp.',
  path: '/',
  keywords: [
    'Gurgaon escort service',
    'escorts in Gurgaon',
    'Gurugram escorts',
    'call girls in Gurgaon',
    'premium escorts Gurugram',
    'escort service near me Gurgaon',
    'hotel outcall escorts Gurgaon',
    'independent escorts Gurugram',
  ],
});

export default function Home() {
  return (
    <>
      <Hero />
      <section className="border-b border-gray-100 bg-white">
        <div className="container-luxury py-5">
          <p className="page-summary max-w-4xl text-sm leading-relaxed text-gray-700">
            <span className="font-semibold text-[#2f3338]">Quick answer: </span>
            Gurgaon Escort Service by Alina is a premium companion agency in Gurugram, open 24 hours a day. We arrange
            verified companions for 5-star hotels, serviced apartments and private residences across DLF, Cyber City,
            Golf Course Road, MG Road, Sohna Road and 76 other sectors. Bookings are confirmed on call or WhatsApp
            within minutes, and the arrangement cost is agreed before arrival.
          </p>
        </div>
      </section>
      <TrustBar />
      <AboutSection />
      <CategoriesSection />
      <ServicesSection />
      <WhyChooseUs />
      <AreasSection />
      <BookingProcess />
      <CtaSection />
      <FaqSection />
    </>
  );
}
