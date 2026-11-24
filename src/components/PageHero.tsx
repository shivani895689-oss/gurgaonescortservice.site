import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHero({ eyebrow, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#1a0a0d] text-white py-16 md:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#671725]/30 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className="container-luxury relative">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-500" />}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-[#F3E5AB] transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gray-200">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#F3E5AB] mb-3">{eyebrow}</p>
        )}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white max-w-4xl">
          {title}
        </h1>
        <p className="mt-5 text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">{description}</p>
      </div>
    </section>
  );
}
