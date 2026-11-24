import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-[#fdf8f5] px-4 py-20">
      <div className="max-w-xl w-full text-center">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#2f3338] mb-3">404 Error</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#4a4d52] mb-4">Page Not Found</h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved. 
          If you&apos;re looking for a trusted Gurgaon Escort Service, our team is available 24/7 to help.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-wine">
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <a href={`tel:${siteConfig.phone}`} className="btn-outline-wine">
            <Phone className="w-4 h-4" /> Call Us
          </a>
        </div>
      </div>
    </main>
  );
}
