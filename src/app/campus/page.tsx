import { Metadata } from 'next';
import { Home, Trees, ShieldCheck, Sun, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Campus & Sacred Environment | Gurukulam',
  description: 'Experience the serene Vedic Gurukul campus nestled in natural harmony, designed according to Vastu Shastra principles.',
};

export default function CampusPage() {
  return (
    <div className="min-h-screen bg-canvas py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">
            गुरुकुल परिसर • Sacred Campus
          </span>
          <h1 className="font-devanagari text-4xl sm:text-5xl font-bold text-textPrimary">
            Our Sacred Learning Space
          </h1>
          <p className="text-sm sm:text-base text-textSecondary max-w-2xl mx-auto leading-relaxed">
            A harmonious synthesis of traditional Vedic Vastu architecture, pristine natural greenery, and contemplative quietude.
          </p>
        </div>

        {/* Overview Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 sm:p-10 rounded-3xl bg-surface border border-border-subtle shadow-subtle">
          <div className="space-y-4">
            <h2 className="font-devanagari text-2xl font-bold text-textPrimary">
              प्राकृतिक एवं शान्त वातावरण
            </h2>
            <p className="text-sm text-textSecondary leading-relaxed">
              Designed according to classical Indian Vastu Shastra, our Gurukul campus fosters deep meditative focus and undisturbed scholarship. Surrounded by native medicinal flora, open-air Mandapams, and sacred Yajnashalas, students experience a lifestyle untouched by the chaotic noise of urban life.
            </p>
            <p className="text-sm text-textSecondary leading-relaxed">
              Every space is purposefully curated to facilitate introspection, early morning sandhyavandanam, and collective scripture chanting.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border-subtle bg-subtle aspect-video flex items-center justify-center">
            <img
              src="/images/fire_2_opt.webp"
              alt="Gurukulam Campus Sacred Space"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="space-y-6">
          <h3 className="font-devanagari text-2xl font-bold text-textPrimary text-center">
            परिसर की प्रमुख सुविधाएं (Campus Facilities)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-2">
              <Trees className="w-8 h-8 text-accent mb-2" />
              <h4 className="font-bold text-base text-textPrimary">Yajnashala & Havankund</h4>
              <p className="text-xs text-textSecondary leading-relaxed">
                Dedicated sacred space for daily Vedic homam, agnihotra, and mantra chanting.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-2">
              <BookOpen className="w-8 h-8 text-accent mb-2" />
              <h4 className="font-bold text-base text-textPrimary">Granthalaya (Library)</h4>
              <p className="text-xs text-textSecondary leading-relaxed">
                Houses ancient palm-leaf manuscript facsimiles, Sanskrit lexicons, and modern commentaries.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-2">
              <Home className="w-8 h-8 text-accent mb-2" />
              <h4 className="font-bold text-base text-textPrimary">Ashram Quarters</h4>
              <p className="text-xs text-textSecondary leading-relaxed">
                Simple, eco-conscious residential quarters encouraging austerity (tapas) and satvik living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
