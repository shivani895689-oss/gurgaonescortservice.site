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
import { siteConfig } from '@/data/siteConfig';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Gurgaon Escort Service | Premium & Discreet Escorts in Gurugram',
  description: siteConfig.description,
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
