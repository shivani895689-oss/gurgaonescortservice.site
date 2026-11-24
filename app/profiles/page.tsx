import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ProfilesListing from '@/components/ProfilesListing';

export const metadata: Metadata = {
  title: 'Profiles - Premium Companions in Gurgaon',
  description:
    'Browse verified premium companion profiles in Gurgaon and nearby locations. Filter by category including Russian, Indian, VIP, college girl, Bhabhi, and more.',
  alternates: { canonical: '/profiles' },
  openGraph: {
    title: 'Profiles - Premium Companions in Gurgaon',
    description:
      'Browse verified premium companion profiles in Gurgaon and nearby locations. Filter by category and find your perfect match.',
    type: 'website',
  },
};

export default function ProfilesPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Our Profiles"
        subtitle="Browse verified premium companions across Gurgaon and nearby locations. Choose by category, location, and preference for a discreet and premium experience."
      />
      <section className="section-padding">
        <div className="container-luxury">
          <ProfilesListing />
        </div>
      </section>
    </main>
  );
}
