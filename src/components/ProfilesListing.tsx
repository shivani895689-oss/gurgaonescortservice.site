'use client';

import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import ProfileCard from '@/components/ProfileCard';
import { profiles } from '@/lib/profiles';
import { categories } from '@/lib/categories';

const allCategory = { slug: 'all', name: 'All Profiles', icon: '✦' };

export default function ProfilesListing() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return profiles.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <>
      <div className="rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm sm:p-6 mb-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, location, or category..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-[#2f3338] placeholder:text-gray-400 outline-none transition focus:border-[#2f3338]/30 focus:bg-white"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <SlidersHorizontal className="h-4 w-4 text-[#2f3338]" />
            <span>{filtered.length} profile{filtered.length !== 1 ? 's' : ''} found</span>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {[allCategory, ...categories].map((cat) => {
            const active = activeCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setActiveCategory(cat.slug)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                  active
                    ? 'border-[#2f3338] bg-[#2f3338] text-white'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-[#2f3338]'
                }`}
              >
                <span aria-hidden>{cat.icon}</span>
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((profile, index) => (
            <ProfileCard key={profile.id} profile={profile} priority={index < 3} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-gray-200/80 bg-white p-12 text-center shadow-sm">
          <p className="font-serif text-2xl text-[#2f3338]">No profiles found</p>
          <p className="mt-3 text-gray-500">
            Try a different category or search term. New profiles are added regularly.
          </p>
          <button
            type="button"
            onClick={() => { setActiveCategory('all'); setQuery(''); }}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#2f3338] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4a4d52]"
          >
            Clear Filters
          </button>
        </div>
      )}
    </>
  );
}
