import { Metadata } from 'next';
import { BookOpen, Award, Sparkles, Clock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vedic Educational Programs | Gurukulam',
  description: 'Structured courses in Sanskrit grammar, Valmiki Ramayana, Vedic chanting, Upanishads, and Dharmic ethics.',
};

const PROGRAMS = [
  {
    title: 'संस्कृत भाषा एवं व्याकरण (Paninian Sanskrit)',
    duration: '६ मास • 6 Months',
    level: 'Beginner to Intermediate',
    description: 'Master Devanagari reading, Sandhi rules, Subanta, Tinganta, and classical conversational Sanskrit.',
  },
  {
    title: 'वाल्मीकि रामायण स्वाध्याय (Ramayana Studies)',
    duration: '१ वर्ष • 1 Year',
    level: 'Comprehensive',
    description: 'In-depth recitation, poetic analysis, and philosophical exposition of all seven Kandas of the Adikavya.',
  },
  {
    title: 'वैदिक मन्त्रोच्चारण (Vedic Phonetics & Svaras)',
    duration: '३ मास • 3 Months',
    level: 'Advanced',
    description: 'Rigvedic and Yajurvedic chanting techniques focusing on pure Shiksha (phonetics), Udatta, Anudatta, and Svarita.',
  },
  {
    title: 'उपनिषद् एवं भगवद्गीता (Vedanta Foundations)',
    duration: '६ मास • 6 Months',
    level: 'Intermediate',
    description: 'Core concepts of Brahma, Atman, Karma, and Moksha through principal Upanishadic dialogues and the Gita.',
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-canvas py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">
            विद्याक्रम • Curriculum
          </span>
          <h1 className="font-devanagari text-4xl sm:text-5xl font-bold text-textPrimary">
            Vedic Educational Programs
          </h1>
          <p className="text-sm sm:text-base text-textSecondary max-w-2xl mx-auto leading-relaxed">
            Time-tested pedagogies designed to cultivate deep intellectual acuity, moral clarity, and spiritual poise.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROGRAMS.map((p, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">
                    {p.level}
                  </span>
                  <span className="text-xs text-textMuted flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{p.duration}</span>
                  </span>
                </div>

                <h3 className="font-devanagari text-xl font-bold text-textPrimary">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border-subtle flex items-center justify-between">
                <a
                  href="/contact"
                  className="text-xs font-semibold text-accent hover:text-accent-hover flex items-center space-x-1"
                >
                  <span>Enquire / Register</span>
                  <CheckCircle className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
