import { Metadata } from 'next';
import Link from 'next/link';
import { Compass, BookOpen, ShieldCheck, Heart, Sparkles, Sun, ArrowRight, Share2, Globe, Brain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sanatan Dharma Philosophy & Research Initiative | Gurukulam',
  description:
    'Explore the universal principles of Sanatan Dharma, the four Purusharthas, and Gurukulam’s interdisciplinary research initiative bridging ancient Vedic wisdom with modern science.',
};

const PURUSHARTHAS = [
  {
    num: '१',
    sanskrit: 'धर्म (Dharma)',
    title: 'Cosmic Order & Righteous Duty',
    description:
      'Living with moral integrity, truthfulness (Satya), non-injury (Ahimsa), and conscious harmony with cosmic law (Rta). Dharma sustains and upholds human society.',
  },
  {
    num: '२',
    sanskrit: 'अर्थ (Artha)',
    title: 'Prosperity & Sustainable Wealth',
    description:
      'The ethical generation and utilization of material resources to support one’s family, alleviate suffering, sustain societal institutions, and perform altruistic acts.',
  },
  {
    num: '३',
    sanskrit: 'काम (Kama)',
    title: 'Aesthetic Joy & Right Desire',
    description:
      'The refined pursuit of beauty, art, literature, emotional fulfillment, and cultural creativity, always guided and sanctified by the boundaries of Dharma.',
  },
  {
    num: '४',
    sanskrit: 'मोक्ष (Moksha)',
    title: 'Spiritual Liberation & Transcendence',
    description:
      'The ultimate culmination of human birth: liberation from the cycle of rebirth (Samsara), realizing the non-dual identity of the individual soul (Atman) with Supreme Reality (Brahman).',
  },
];

const INITIATIVE_PILLARS = [
  {
    icon: BookOpen,
    title: 'Preserving Ancient Wisdom',
    description:
      'Digitizing brittle palm-leaf manuscripts and rare Sanskrit commentaries, ensuring that millennia of philosophical, astronomical, and medicinal knowledge are immortalized.',
  },
  {
    icon: ShieldCheck,
    title: 'Countering Misinterpretations',
    description:
      'Providing authoritative, academically rigorous translations with original Devanagari text and classical commentary to counter inaccurate or superficial portrayals.',
  },
  {
    icon: Brain,
    title: 'Consciousness & Modern Science',
    description:
      'Fostering interdisciplinary dialogues between traditional Vedanta scholars and modern neuroscientists, exploring the nature of mind, perception, and quantum observer principles.',
  },
  {
    icon: Globe,
    title: 'Open-Access Knowledge Repository',
    description:
      'Democratizing access to sacred wisdom with free, public-domain digitized texts, virtual keyboards, search engines, and multi-lingual glossaries for worldwide seekers.',
  },
];

export default function SanatanDharmaPage() {
  return (
    <div className="min-h-screen bg-canvas py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">
            शाश्वत दर्शन • Eternal Philosophy
          </span>
          <h1 className="font-devanagari text-4xl sm:text-5xl font-bold text-textPrimary tracking-tight">
            Sanatan Dharma & Research
          </h1>
          <p className="text-base sm:text-lg text-textSecondary leading-relaxed">
            धर्मात् सर्वं प्रभवति धर्मात् प्रवर्तते जगत् • The beginningless, universal principles of truth, cosmic harmony, and consciousness.
          </p>
        </div>

        {/* Core Philosophical Exposition */}
        <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-border-subtle shadow-subtle space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-accent font-mono">
            Philosophical Foundation
          </span>
          <h2 className="font-devanagari text-3xl font-bold text-textPrimary leading-snug">
            सनातन धर्म का यथार्थ स्वरूप (True Essence of Sanatan Dharma)
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-textSecondary leading-relaxed">
            <p>
              The Sanskrit word <strong className="text-textPrimary">Sanatan</strong> translates to that which is eternal, timeless, and beginningless, while <strong className="text-textPrimary">Dharma</strong> stems from the root <em>dhṛ</em> (to uphold, sustain, or bind together: <em>धारणाद् धर्म इत्याहुर्धर्मो धारयते प्रजाः</em>).
            </p>
            <p>
              Unlike creed-based dogma, Sanatan Dharma is a comprehensive, empirical way of living in conscious resonance with the underlying laws of the cosmos (<em>Rta</em>). It posits that truth is singular, though perceived and expressed variously by wise seers (<em>एकं सद्विप्रा बहुधा वदन्ति</em>).
            </p>
            <p>
              Through experiential inquiry (<em>Anubhava</em>) supported by Shruti (revealed knowledge) and Yukti (logical discernment), every human being is invited to discover their innate divinity and navigate the earthly realm with compassion, balance, and fearlessness.
            </p>
          </div>
        </div>

        {/* Four Purusharthas Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="font-devanagari text-3xl font-bold text-textPrimary">
              चतुर्विध पुरुषार्थ (The Four Aims of Human Life)
            </h2>
            <p className="text-sm text-textSecondary">
              Classical Indian philosophy outlines four balanced goals that ensure holistic personal fulfillment and social harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PURUSHARTHAS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-accent-soft text-accent flex items-center justify-center font-bold text-sm font-devanagari">
                      {item.num}
                    </span>
                    <span className="text-xs font-mono font-semibold text-accent">
                      PURUSHARTHA
                    </span>
                  </div>

                  <div>
                    <h3 className="font-devanagari font-bold text-xl text-textPrimary">
                      {item.sanskrit}
                    </h3>
                    <p className="text-xs font-semibold text-textMuted mt-0.5">
                      {item.title}
                    </p>
                  </div>

                  <p className="text-xs text-textSecondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research & Knowledge Initiative Section (from legacy Sanatan Dharma.html) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-border-subtle shadow-subtle space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">
              अनुसन्धान एवं ज्ञान विस्तार • Research Initiative
            </span>
            <h2 className="font-devanagari text-3xl font-bold text-textPrimary">
              Empowering Research and Knowledge Sharing
            </h2>
            <p className="text-sm text-textSecondary leading-relaxed">
              Why this initiative matters: bringing traditional scholarship into fruitful dialogue with modern science, cognitive psychology, and international academic standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INITIATIVE_PILLARS.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-subtle/50 border border-border-subtle hover:border-accent transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-textPrimary">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Join the Movement Callout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-subtle/50 border border-border-subtle text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="font-devanagari text-2xl font-bold text-textPrimary">
            Participate in Our Research & Translation Circle
          </h3>
          <p className="text-sm text-textSecondary leading-relaxed">
            Whether you are a traditional Sanskrit pandit, a modern university researcher, or an inquisitive student, we invite you to contribute to our open-source scriptural preservation projects.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-accent text-on-accent text-sm font-semibold hover:bg-accent-hover transition-colors shadow-subtle"
            >
              <span>Join Research Circle</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/books/ramayana"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-border-subtle bg-surface hover:bg-subtle text-sm font-semibold text-textPrimary transition-colors"
            >
              <span>Explore Ramayana Corpus</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
