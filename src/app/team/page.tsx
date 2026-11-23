import { Metadata } from 'next';
import { Sparkles, Users, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Acharyas & Scholars | Gurukulam',
  description: 'Meet the dedicated Vedic scholars, Sanskrit grammarians, and pedagogues guiding the Gurukulam academic mission.',
};

const TEAM = [
  {
    name: 'आचार्य विद्याधर शास्त्री (Acharya Vidyadhar)',
    role: 'Kulapati & Head of Vedic Studies',
    desc: 'Expert in Shukla Yajurveda and Paninian grammar with over 35 years of traditional Gurukul teaching.',
  },
  {
    name: 'डॉ. आनन्दमयी देवी (Dr. Anandamayi)',
    role: 'Dean of Sanskrit Epics & Darshanas',
    desc: 'Specialist in Valmiki Ramayana, comparative philosophy, and ancient manuscript preservation.',
  },
  {
    name: 'आचार्य राघव शर्मा (Acharya Raghav Sharma)',
    role: 'Instructor of Vedic Chanting & Shiksha',
    desc: 'Traditional master of Rigvedic Padapatha, Kramapatha, and Samavedic musical intonations.',
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-canvas py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">
            गुरुमण्डल • Faculty & Acharyas
          </span>
          <h1 className="font-devanagari text-4xl sm:text-5xl font-bold text-textPrimary">
            Acharyas & Scholars
          </h1>
          <p className="text-base text-textSecondary max-w-xl mx-auto leading-relaxed">
            Guided by revered masters lifelong committed to the living transmission of Vedic wisdom.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM.map((member, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle hover:shadow-elevated transition-all space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent-soft text-accent flex items-center justify-center font-bold text-lg">
                {member.name.charAt(0)}
              </div>

              <div>
                <h3 className="font-devanagari font-bold text-lg text-textPrimary leading-snug">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-accent mt-1">
                  {member.role}
                </p>
              </div>

              <p className="text-xs text-textSecondary leading-relaxed">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
