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
    images: [{ url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', width: 1200, height: 630, alt: 'Gurgaon Escort Service' }],
  },
    twitter: {
      card: 'summary_large_image',
      title: 'Gurgaon Escort Service',
      description: siteConfig.description,
      images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'],
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
