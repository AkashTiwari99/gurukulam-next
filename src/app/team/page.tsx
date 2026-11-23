import { Metadata } from 'next';
import Link from 'next/link';
import { Award, ShieldCheck, Heart, Users, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Team & Faculty | Gurukulam',
  description:
    'Meet the dedicated Vedic scholars, Sanskrit professors, yoga masters, and philosophy mentors guiding the academic and spiritual life at Gurukulam.',
};

const TEAM_MEMBERS = [
  {
    name: 'Vedic Scholar',
    sanskritTitle: 'वरिष्ठ वेदाचार्य',
    role: 'Senior Faculty - Vedic Studies',
    image: '/images/card1.jpg',
    bio: 'Expert in Vedic philosophy, Shruti recitation, and classical Sanskrit interpretation with over 20 years of traditional teaching experience across prominent Indian gurukuls.',
  },
  {
    name: 'Yoga Instructor',
    sanskritTitle: 'योग एवं स्वास्थ्य निदेशक',
    role: 'Director - Yoga & Wellness',
    image: '/images/card2.jpg',
    bio: 'Certified traditional yoga master specializing in classical Hatha yoga, breathwork (Pranayama), Patanjali Yoga Sutras, and their contemporary therapeutic applications.',
  },
  {
    name: 'Sanskrit Professor',
    sanskritTitle: 'संस्कृत भाषा समन्वयक',
    role: 'Sanskrit Language Coordinator',
    image: '/images/card3.jpg',
    bio: 'Dedicated to making Paninian Sanskrit accessible to modern learners through innovative pedagogical methods, interactive Devanagari tools, and structural grammar parsing.',
  },
  {
    name: 'Philosophy Mentor',
    sanskritTitle: 'दर्शन एवं पाठ्यक्रम विशेषज्ञ',
    role: 'Curriculum & Philosophy Developer',
    image: '/images/card4.jpg',
    bio: 'Bridges ancient philosophical wisdom (Vedanta, Samkhya, Mimamsa) with contemporary scientific thought and practical, grounded daily life application.',
  },
];

const CORE_VALUES = [
  {
    icon: Award,
    title: 'Excellence (उत्कर्ष)',
    description:
      'We maintain the highest pedagogical standards in teaching, textual preservation, and individual mentorship.',
  },
  {
    icon: ShieldCheck,
    title: 'Authenticity (प्रमाणिकता)',
    description:
      'We preserve the unadulterated essence of ancient traditions without compromising traditional Shruti and Smriti rigor.',
  },
  {
    icon: Heart,
    title: 'Accessibility (सुलभता)',
    description:
      'We make profound sacred wisdom freely and easily available to genuine seekers of all backgrounds worldwide.',
  },
  {
    icon: Users,
    title: 'Community (सत्संग)',
    description:
      'We nurture a supportive, compassionate learning environment that encourages lifelong bonds and ethical citizenship.',
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-canvas py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">
            गुरुमण्डल • Faculty & Mentors
          </span>
          <h1 className="font-devanagari text-4xl sm:text-5xl font-bold text-textPrimary tracking-tight">
            Our Faculty & Scholars
          </h1>
          <p className="text-base sm:text-lg text-textSecondary leading-relaxed">
            Guided by dedicated scholars, yoga masters, and traditional pedagogues committed to transmitting timeless wisdom with devotion and clarity.
          </p>
        </div>

        {/* Team Grid with Real Photography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <div
              key={i}
              className="rounded-3xl bg-surface border border-border-subtle overflow-hidden hover:border-accent shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-subtle relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-surface/90 text-accent font-devanagari backdrop-blur-sm border border-border-subtle">
                    {member.sanskritTitle}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-bold text-lg text-textPrimary leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-accent mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-xs text-textSecondary leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-accent hover:text-accent-hover inline-flex items-center space-x-1"
                >
                  <span>Connect with Faculty</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Our Values Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-border-subtle shadow-subtle space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">
              मूल्य एवं सिद्धान्त • Core Pillars
            </span>
            <h2 className="font-devanagari text-3xl font-bold text-textPrimary">
              Our Values (हमारे आदर्श)
            </h2>
            <p className="text-sm text-textSecondary leading-relaxed">
              These fundamental principles guide every course we teach, every scripture we preserve, and every interaction with our global student community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-subtle/50 border border-border-subtle hover:border-accent transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-textPrimary">
                    {val.title}
                  </h3>
                  <p className="text-xs text-textSecondary leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
