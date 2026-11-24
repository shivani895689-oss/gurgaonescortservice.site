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

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    url: siteConfig.url,
    type: 'website',
    images: [{ url: '/images/hero/hero-main.webp', width: 1200, height: 630, alt: 'Gurgaon Escort Service' }],
  },
};

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
