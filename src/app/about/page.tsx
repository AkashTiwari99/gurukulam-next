import { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Compass, BookOpen, Heart, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Gurukulam | Reviving Ancient Wisdom',
  description: 'Learn about the mission, heritage, and pedagogies of Gurukulam — blending Vedic sciences with modern inquiry.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-canvas py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>परम्परा एवं दर्शन • Our Heritage</span>
          </div>
          <h1 className="font-devanagari text-4xl sm:text-5xl font-bold text-textPrimary">
            About Gurukulam
          </h1>
          <p className="text-base sm:text-lg text-textSecondary max-w-2xl mx-auto leading-relaxed">
            Reconnecting modern seekers with the primordial wisdom of the Vedas, Upavedas, and ancient Indian Darshanas.
          </p>
        </div>

        {/* Story Section */}
        <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-border-subtle shadow-subtle space-y-6">
          <h2 className="font-devanagari text-2xl font-bold text-textPrimary">
            गुरुकुल शिक्षा प्रणाली का पुनरुद्धार
          </h2>
          <p className="text-sm sm:text-base text-textSecondary leading-relaxed">
            Gurukulam was established with a singular vision: to preserve and disseminate the pure, unadulterated wisdom of the Vedic civilization in the digital era. Ancient Gurukuls were not mere classrooms; they were holistic residential communities where philosophy, astronomy, mathematics, medicine, and spiritual self-realization were taught in intimate harmony with nature.
          </p>
          <p className="text-sm sm:text-base text-textSecondary leading-relaxed">
            Today, Gurukulam combines the rigor of classical Sanskrit textual scholarship with the accessibility of modern digital web architecture, enabling anyone around the globe to study the sacred texts of Sanatan Dharma without linguistic or geographic barriers.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-3">
            <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-textPrimary">Vedic Pedagogy</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Rooted in Shruti (listening), Smriti (remembering), and Manana (deep contemplation).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-3">
            <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-textPrimary">Digitized Scriptures</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Complete Sanskrit texts with word-by-word meaning, commentaries, and audio recitations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-3">
            <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-textPrimary">Character & Dharma</h3>
            <p className="text-xs text-textSecondary leading-relaxed">
              Cultivating inner purity, truthfulness (Satya), self-discipline, and compassion for all living beings.
            </p>
          </div>
        </div>

        {/* Exploratory Pathways / CTA */}
        <div className="p-8 sm:p-10 rounded-3xl bg-subtle/50 border border-border-subtle text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="font-devanagari text-2xl font-bold text-textPrimary">
            आगे की यात्रा आरम्भ करें
          </h3>
          <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
            आश्रम परिसर, नियमित अभ्यासक्रम अथवा डिजिटल ग्रन्थागार के माध्यम से प्राचीन वाङ्मय का स्वाध्याय करें।
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/library"
              className="inline-flex items-center space-x-1.5 px-6 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-on-accent text-xs font-semibold shadow-subtle transition-colors min-h-[44px]"
            >
              <span>डिजिटल ग्रन्थागार (Library)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/campus"
              className="inline-flex items-center space-x-1.5 px-6 py-2.5 rounded-full border border-border-subtle bg-surface hover:bg-subtle text-textPrimary text-xs font-semibold transition-colors min-h-[44px]"
            >
              <span>परिसर दर्शन (Campus)</span>
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center space-x-1.5 px-6 py-2.5 rounded-full border border-border-subtle bg-surface hover:bg-subtle text-textSecondary hover:text-textPrimary text-xs font-semibold transition-colors min-h-[44px]"
            >
              <span>अभ्यासक्रम (Programs)</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
