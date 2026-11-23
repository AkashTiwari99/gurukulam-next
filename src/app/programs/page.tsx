import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Sparkles, Clock, CheckCircle, ArrowRight, Compass, Heart, Sun } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vedic Educational Programs | Gurukulam',
  description:
    'Explore authentic courses in Vedic Studies, Sanskrit Immersion, Yoga & Meditation, Ayurveda Basics, Valmiki Ramayana, and Yoga Teacher Training at Gurukulam.',
};

const PROGRAMS = [
  {
    id: 'vedic-studies',
    title: 'Vedic Studies (वेद स्वाध्याय)',
    duration: '१ वर्ष • 1 Year',
    level: 'Comprehensive',
    icon: BookOpen,
    description:
      'Immerse yourself in the ancient wisdom of the Vedas through structured modules covering Samhitas, Brahmanas, Aranyakas, and principal Upanishads. Explore their philosophical depth and contemporary relevance.',
    syllabus: [
      'Introduction to Rigveda, Yajurveda, Samaveda & Atharvaveda',
      'Vedic chanting phonetics (Shiksha) & basic accents',
      'Core philosophical dialogues from principal Upanishads',
      'Vedic cosmology, ethics, and contemporary relevance',
    ],
    linkText: 'Explore Vedic Library',
    linkHref: '/library',
  },
  {
    id: 'sanskrit-immersion',
    title: 'Sanskrit Immersion (संस्कृत भाषा शिक्षण)',
    duration: '६ मास • 6 Months',
    level: 'Beginner to Intermediate',
    icon: Compass,
    description:
      'Learn the divine language of Sanskrit through our immersive courses designed for all levels. Master Devanagari writing, Paninian grammatical fundamentals, Subanta, Tinganta, and classical conversational fluency.',
    syllabus: [
      'Devanagari script mastery and phonetic pronunciation',
      'Sandhi rules, noun declensions, and verb conjugations',
      'Direct Sanskrit conversation (Sambhāṣaṇam)',
      'Reading foundational verses from classical Subhashitas',
    ],
    linkText: 'Virtual Keyboard Tool',
    linkHref: '/keyboard',
  },
  {
    id: 'yoga-meditation',
    title: 'Yoga & Meditation (योग एवं ध्यान साधना)',
    duration: '३ मास • 3 Months',
    level: 'All Levels',
    icon: Sun,
    description:
      'Experience the profound physical and spiritual benefits of traditional Yoga and meditation. Guided by certified instructors, learn classical Hatha yoga postures, pranayama, and Dharana contemplation.',
    syllabus: [
      'Classical Surya Namaskara and foundational Asanas',
      'Nadi Shodhana, Bhastrika, and Kapalabhati Pranayama',
      'Patanjali Yoga Sutras introductory discourses',
      'Chakra awareness and silent mindfulness meditation',
    ],
    linkText: 'View Campus Routine',
    linkHref: '/campus',
  },
  {
    id: 'ayurveda-basics',
    title: 'Ayurveda Basics (आयुर्वेद एवं जीवनशैली)',
    duration: '३ मास • 3 Months',
    level: 'Foundation',
    icon: Heart,
    description:
      'Discover the ancient science of life and holistic wellness through fundamental Ayurvedic principles. Understand your individual Prakriti (Tridosha constitution), seasonal regimens (Ritucharya), and sattvic dietetics.',
    syllabus: [
      'Understanding Vata, Pitta, and Kapha doshic profiles',
      'Dinacharya (daily regimen) & Ritucharya (seasonal harmony)',
      'Kitchen pharmacy: Common herbs and spices for natural immunity',
      'Ayurvedic principles of digestion (Agni) and sattvic nutrition',
    ],
    linkText: 'Enquire for Next Cohort',
    linkHref: '/contact',
  },
  {
    id: 'ramayana-classes',
    title: 'Ramayana Studies (श्री वाल्मीकि रामायण स्वाध्याय)',
    duration: '६ मास • 6 Months',
    level: 'Intermediate',
    icon: BookOpen,
    description:
      'Discover timeless stories, poetic meters (Anushtup Chhanda), and life lessons from the epic Ramayana through structured classes. Analyze the exemplar character of Sri Rama as Maryada Purushottam.',
    syllabus: [
      'Sanskrit chanting of Balakanda Mangala Shlokas',
      'Exposition of poetic meters and narrative symbolism',
      'Dharmic ethics in governance, family, and statecraft',
      'Comparing classical commentaries and allegorical meanings',
    ],
    linkText: 'Read Ramayana Online',
    linkHref: '/books/ramayana',
  },
  {
    id: 'yoga-teacher-training',
    title: 'Yoga Teacher Training (योग शिक्षक प्रशिक्षण)',
    duration: '२ मास • 200 Hours Intensive',
    level: 'Advanced / Professional',
    icon: Sparkles,
    description:
      'Comprehensive, certified yoga teacher training program covering asana biomechanics, pranayama sequencing, yogic anatomy, instructional pedagogy, and immersion in the Patanjali Yoga Darshana.',
    syllabus: [
      'In-depth study of 50+ classical asanas with alignments',
      'Yogic anatomy, physiology, and injury prevention',
      'Teaching methodology, sequencing, and class delivery',
      'Study of the Bhagavad Gita and classical Yogic ethics',
    ],
    linkText: 'Apply for Certification',
    linkHref: '/contact',
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-canvas py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">
            विद्याक्रम • Our Programs
          </span>
          <h1 className="font-devanagari text-4xl sm:text-5xl font-bold text-textPrimary tracking-tight">
            Vedic Educational Programs
          </h1>
          <p className="text-base sm:text-lg text-textSecondary leading-relaxed">
            Time-tested pedagogies designed to cultivate deep intellectual acuity, moral clarity, and spiritual poise through direct engagement with ancient scriptures.
          </p>
        </div>

        {/* Programs Grid (All 6 Programs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                id={program.id}
                className="p-8 rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-medium text-textMuted flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{program.duration}</span>
                    </span>
                  </div>

                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-accent-soft text-accent uppercase tracking-wider mb-2">
                      {program.level}
                    </span>
                    <h3 className="font-devanagari text-xl font-bold text-textPrimary">
                      {program.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-border-subtle">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-textMuted">
                      Key Syllabus Modules:
                    </p>
                    <ul className="space-y-1.5 text-xs text-textSecondary">
                      {program.syllabus.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                  <Link
                    href={program.linkHref}
                    className="text-xs font-semibold text-accent hover:text-accent-hover inline-flex items-center space-x-1"
                  >
                    <span>{program.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-3 py-1.5 rounded-xl bg-subtle hover:bg-accent-soft hover:text-accent text-textPrimary text-xs font-medium transition-colors"
                  >
                    Enroll / Inquire
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Admissions & Guidance Callout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-subtle/50 border border-border-subtle text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="font-devanagari text-2xl font-bold text-textPrimary">
            Need Guidance Choosing a Course?
          </h3>
          <p className="text-sm text-textSecondary leading-relaxed">
            Our Acharyas provide personalized counseling to help you choose the ideal program based on your prior Sanskrit knowledge, meditative background, and personal aspirations.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-accent text-on-accent text-sm font-semibold hover:bg-accent-hover transition-colors shadow-subtle"
            >
              <span>Speak with an Academic Advisor</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
