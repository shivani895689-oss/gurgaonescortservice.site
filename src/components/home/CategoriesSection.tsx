import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/categories';

export default function CategoriesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#671725] mb-3">Categories</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a0a0d] leading-tight">
              Explore Our Companion Categories
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Browse by category to find the companion experience that matches your preference — from VIP elegance to friendly independent companions in Gurugram.
            </p>
          </div>
          <Link href="/categories" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#671725] hover:gap-2.5 transition-all shrink-0">
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(0, 6).map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
