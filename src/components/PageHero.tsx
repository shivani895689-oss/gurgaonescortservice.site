import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHero({ eyebrow, title, description, subtitle, breadcrumbs }: PageHeroProps) {
  const body = description ?? subtitle ?? '';
  return (
    <section className="relative overflow-hidden bg-[#4a4d52] text-white py-16 md:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#2f3338]/30 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[#B8BDC4]/10 blur-3xl" />
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
                    <Link href={crumb.href} className="hover:text-[#D8DCE2] transition-colors">
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
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#D8DCE2] mb-3">{eyebrow}</p>
        )}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white max-w-4xl">
          {title}
        </h1>
        {body && <p className="mt-5 text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">{body}</p>}
      </div>
    </section>
  );
}
