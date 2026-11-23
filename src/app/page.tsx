import { Metadata } from 'next';
import {
  Sparkles,
  ArrowRight,
  Quote,
} from 'lucide-react';
import { DailySubhashitaWidget } from '@/components/home/DailySubhashitaWidget';
import { InteractiveDinacharya } from '@/components/home/InteractiveDinacharya';
import { InteractivePillars } from '@/components/home/InteractivePillars';
import { InteractiveFAQ } from '@/components/home/InteractiveFAQ';
import { HomeInteractiveSections } from '@/components/home/HomeInteractiveSections';

export const metadata: Metadata = {
  title: 'Gurukulam | Reviving Ancient Vedic Wisdom & Sanskrit Heritage',
  description:
    'A traditional yet modern digital Gurukul featuring the complete 24,000 verses of Valmiki Ramayana, Shlok Mala audio recitations, and Vedic typing tools.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-canvas space-y-24 pb-24">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold border border-accent/20 animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5" />
            <span>गुरुकुलम् • Ancient Wisdom for Modern Times</span>
          </div>

          <h1 className="font-devanagari text-4xl sm:text-5xl md:text-6xl font-extrabold text-textPrimary tracking-tight leading-tight">
            सनातन ज्ञान एवं वैदिक वाङ्मय का आधुनिक प्रवेशद्वार
          </h1>

          <p className="text-base sm:text-lg text-textSecondary max-w-2xl mx-auto leading-relaxed">
            Uncover the timeless teachings of the Vedas, Valmiki Ramayana, and classical Darshanas — offering clarity, mental stillness, and moral guidance for today's complex world.
          </p>

          {/* Action Buttons (Keyboard link removed as requested; accessible in Navbar) */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="/about"
              className="px-7 py-3 rounded-full bg-accent hover:bg-accent-hover text-on-accent text-sm font-semibold transition-all shadow-subtle hover:shadow-elevated flex items-center space-x-2 group min-h-[44px]"
            >
              <span>गुरुकुल परिचय (About Gurukulam)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/campus"
              className="px-6 py-3 rounded-full border border-border-subtle bg-surface hover:bg-subtle text-textPrimary text-sm font-semibold transition-all shadow-subtle min-h-[44px] flex items-center"
            >
              परिसर दर्शन (Campus Life)
            </a>
            <a
              href="/programs"
              className="px-6 py-3 rounded-full border border-border-subtle bg-surface hover:bg-subtle text-textSecondary hover:text-textPrimary text-sm font-medium transition-all min-h-[44px] flex items-center"
            >
              अभ्यासक्रम (Programs)
            </a>
          </div>

          {/* Heritage Metrics Strip */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-border-subtle/80">
            <div className="p-3 text-center">
              <span className="font-devanagari text-xl sm:text-2xl font-bold text-accent block">
                २३,३५८+
              </span>
              <span className="text-[11px] text-textMuted font-medium uppercase tracking-wider">
                रामायण श्लोक
              </span>
            </div>
            <div className="p-3 text-center">
              <span className="font-devanagari text-xl sm:text-2xl font-bold text-accent block">
                ६४५
              </span>
              <span className="text-[11px] text-textMuted font-medium uppercase tracking-wider">
                सम्पूर्ण सर्ग
              </span>
            </div>
            <div className="p-3 text-center">
              <span className="font-devanagari text-xl sm:text-2xl font-bold text-accent block">
                १०+
              </span>
              <span className="text-[11px] text-textMuted font-medium uppercase tracking-wider">
                ग्रन्थ एवं शोध पत्र
              </span>
            </div>
            <div className="p-3 text-center">
              <span className="font-devanagari text-xl sm:text-2xl font-bold text-accent block">
                १००%
              </span>
              <span className="text-[11px] text-textMuted font-medium uppercase tracking-wider">
                प्रामाणिक परम्परा
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Daily Subhashita / Wisdom Section */}
      <DailySubhashitaWidget />

      {/* 3. Our Core Teachings (Restored from Legacy with authentic imagery) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">
            मूल स्तम्भ • Foundations
          </span>
          <h2 className="font-devanagari text-3xl font-bold text-textPrimary">
            Our Core Teachings
          </h2>
          <p className="text-sm text-textMuted max-w-lg mx-auto">
            Bridging ancient experiential knowledge with contemporary intellectual and ethical challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Vedic Wisdom */}
          <div className="rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle hover:shadow-elevated transition-all overflow-hidden flex flex-col group">
            <div className="relative aspect-[16/10] overflow-hidden bg-subtle">
              <img
                src="/images/card4.jpg"
                alt="Vedic Wisdom Manuscripts"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-accent text-on-accent uppercase tracking-wider shadow-subtle">
                Featured
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-devanagari text-xl font-bold text-textPrimary group-hover:text-accent transition-colors">
                  Vedic Wisdom
                </h3>
                <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                  Explore the sacred Samhitas and Upanishads and their profound practical application in cultivating mental equilibrium, ethical decision-making, and consciousness expansion.
                </p>
              </div>
              <div className="pt-3 border-t border-border-subtle">
                <a
                  href="/about"
                  className="text-xs font-semibold text-accent flex items-center space-x-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Learn About Philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Gurukul System */}
          <div className="rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle hover:shadow-elevated transition-all overflow-hidden flex flex-col group">
            <div className="relative aspect-[16/10] overflow-hidden bg-subtle">
              <img
                src="/images/card3.jpg"
                alt="Traditional Gurukul Education System"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-devanagari text-xl font-bold text-textPrimary group-hover:text-accent transition-colors">
                  Gurukul System
                </h3>
                <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                  Experience the traditional residential education paradigm that nurtures holistic human development through intimate mentor-disciple dialogues, self-study, and nature communion.
                </p>
              </div>
              <div className="pt-3 border-t border-border-subtle">
                <a
                  href="/campus"
                  className="text-xs font-semibold text-accent flex items-center space-x-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Discover Campus Life</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Ramayana Studies */}
          <div className="rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle hover:shadow-elevated transition-all overflow-hidden flex flex-col group">
            <div className="relative aspect-[16/10] overflow-hidden bg-subtle">
              <img
                src="/images/card2.jpg"
                alt="Valmiki Ramayana Scripture Study"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-devanagari text-xl font-bold text-textPrimary group-hover:text-accent transition-colors">
                  Valmiki Ramayana
                </h3>
                <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                  Immerse yourself in the immortal epic of Bhagavan Sri Rama, uncovering profound lessons in governance, familial loyalty, dharma under adversity, and highest human virtue.
                </p>
              </div>
              <div className="pt-3 border-t border-border-subtle">
                <a
                  href="/library"
                  className="text-xs font-semibold text-accent flex items-center space-x-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Explore in Library</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Gurukul Daily Schedule (दिनचर्या) */}
      <InteractiveDinacharya />

      {/* 5. Interactive 4 Pillars of Learning (शिक्षा के चार स्तम्भ) */}
      <InteractivePillars />

      {/* 6. Shastric Quote Section (Restored from Legacy) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-14 rounded-3xl bg-surface border border-border-strong text-center space-y-4 shadow-subtle relative overflow-hidden">
          <div className="w-12 h-12 rounded-full bg-accent-soft text-accent mx-auto flex items-center justify-center mb-2 shadow-subtle">
            <Quote className="w-6 h-6" />
          </div>

          <blockquote className="font-devanagari text-xl sm:text-2xl md:text-3xl font-semibold text-textPrimary leading-relaxed max-w-3xl mx-auto">
            "The true teacher defends his pupils against his own personal influence, empowering them to discover eternal truth for themselves."
          </blockquote>

          <cite className="block text-xs sm:text-sm font-medium text-accent uppercase tracking-wider not-italic">
            — Ancient Vedic Wisdom • आचार्य लक्षणम्
          </cite>
        </div>
      </section>

      {/* 7. Featured Programs Preview Grid (Restored from Legacy) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">
            अभ्यासक्रम • Specialized Courses
          </span>
          <h2 className="font-devanagari text-3xl font-bold text-textPrimary">
            Featured Educational Programs
          </h2>
          <p className="text-sm text-textMuted max-w-lg mx-auto">
            Transform your understanding through rigorous, authentic pedagogical modules.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center font-bold">
                सं
              </div>
              <h4 className="font-bold text-base text-textPrimary">Sanskrit Studies</h4>
              <p className="text-xs text-textSecondary leading-relaxed">
                Learn the divine devavani Sanskrit language connecting us directly to original mantras and roots.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-border-subtle">
              <a href="/programs" className="text-xs font-semibold text-accent hover:text-accent-hover">
                Explore Curriculum →
              </a>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-surface border-2 border-accent/40 shadow-subtle transition-all flex flex-col justify-between relative">
            <span className="absolute -top-3 right-4 px-2 py-0.5 rounded-full text-[10px] font-bold bg-accent text-on-accent uppercase tracking-wider">
              Core
            </span>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center font-bold">
                यो
              </div>
              <h4 className="font-bold text-base text-textPrimary">Yoga & Meditation</h4>
              <p className="text-xs text-textSecondary leading-relaxed">
                Discover unshakeable inner peace and physical harmony through authentic Patanjali Ashtanga yoga.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-border-subtle">
              <a href="/programs" className="text-xs font-semibold text-accent hover:text-accent-hover">
                Explore Curriculum →
              </a>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center font-bold">
                वे
              </div>
              <h4 className="font-bold text-base text-textPrimary">Vedic Philosophy</h4>
              <p className="text-xs text-textSecondary leading-relaxed">
                Dive deep into the six classical Darshanas: Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, and Vedanta.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-border-subtle">
              <a href="/programs" className="text-xs font-semibold text-accent hover:text-accent-hover">
                Explore Curriculum →
              </a>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center font-bold">
                आ
              </div>
              <h4 className="font-bold text-base text-textPrimary">Ayurvedic Living</h4>
              <p className="text-xs text-textSecondary leading-relaxed">
                Master classical principles of Dinacharya, Ritucharya, doshic balance, and satvik dietetics.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-border-subtle">
              <a href="/programs" className="text-xs font-semibold text-accent hover:text-accent-hover">
                Explore Curriculum →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Interactive Frequently Asked Questions (FAQ) */}
      <InteractiveFAQ />

      {/* 9. Interactive Testimonials & Newsletter */}
      <HomeInteractiveSections />
    </div>
  );
}
