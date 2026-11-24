'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, Search } from 'lucide-react';
import type { LandingPage } from '@/data/landingPages';

type GroupKey = 'all' | 'dlf' | 'sectors' | 'localities';

const GROUPS: { key: GroupKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'dlf', label: 'DLF Phases' },
  { key: 'sectors', label: 'Sectors' },
  { key: 'localities', label: 'Localities & Hubs' },
];

function getGroup(page: LandingPage): Exclude<GroupKey, 'all'> {
  const name = (page.locationName || '').toLowerCase();
  if (name.startsWith('dlf phase')) return 'dlf';
  if (name.startsWith('sector ')) return 'sectors';
  return 'localities';
}

export default function LocationLandingGrid({ pages }: { pages: LandingPage[] }) {
  const [query, setQuery] = useState('');
  const [activeGroup, setActiveGroup] = useState<GroupKey>('all');

  const counts = useMemo(() => {
    const base: Record<GroupKey, number> = { all: pages.length, dlf: 0, sectors: 0, localities: 0 };
    for (const p of pages) base[getGroup(p)] += 1;
    return base;
  }, [pages]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return pages.filter((p) => {
      if (activeGroup !== 'all' && getGroup(p) !== activeGroup) return false;
      if (!q) return true;
      const name = (p.locationName || '').toLowerCase();
      const title = p.title.toLowerCase();
      const slug = p.slug.toLowerCase();
      return name.includes(q) || title.includes(q) || slug.includes(q);
    });
  }, [pages, query, activeGroup]);

  return (
    <div>
      <div className="max-w-2xl mx-auto mb-8">
        <label htmlFor="location-search" className="sr-only">Search locations</label>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            id="location-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by area, sector, or location..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-rose-100 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#671725]/20 focus:border-[#671725]/40 transition"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label="Location groups">
        {GROUPS.map((g) => {
          const active = activeGroup === g.key;
          return (
            <button
              key={g.key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveGroup(g.key)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                active
                  ? 'bg-[#671725] text-white border-[#671725] shadow-sm'
                  : 'bg-white text-gray-700 border-rose-100 hover:border-[#671725]/30 hover:text-[#671725]'
              }`}
            >
              {g.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${active ? 'bg-white/20 text-white' : 'bg-rose-50 text-gray-500'}`}>
                {counts[g.key]}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mb-6 text-sm text-gray-500 text-center">
        Showing <span className="font-semibold text-[#671725]">{filtered.length}</span> of {pages.length} locations
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-12 px-4 rounded-2xl border border-dashed border-rose-200 bg-[#fffaf9] text-gray-500">
          No locations found{query ? <> for &ldquo;{query}&rdquo;</> : ''}. Try a different search or filter.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((page) => (
            <Link
              key={page.slug}
              href={`/${page.slug}`}
              className="group block bg-[#fffaf9] rounded-2xl border border-rose-100/80 p-6 shadow-sm hover:shadow-xl hover:shadow-rose-950/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#671725]/10 flex items-center justify-center shrink-0 group-hover:bg-[#671725] transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-[#671725] group-hover:text-[#F3E5AB] transition-colors duration-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#671725]/70 mb-1">Service Area</p>
                  <h3 className="font-serif text-xl font-semibold text-[#1a0a0d] group-hover:text-[#671725] transition-colors leading-snug">
                    {page.locationName || page.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-5 line-clamp-3">
                {page.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#671725] group-hover:gap-2.5 transition-all">
                View {page.locationName || 'Area'} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
