'use client';

import * as React from 'react';
import { Ear, Brain, Compass, Sparkles, ArrowRight } from 'lucide-react';

interface Pillar {
  id: string;
  stepNumber: string;
  nameSanskrit: string;
  nameEnglish: string;
  subTitle: string;
  icon: React.ElementType;
  definition: string;
  explanation: string;
  modernParallel: string;
  quote: string;
}

const PILLARS: Pillar[] = [
  {
    id: 'shravana',
    stepNumber: 'सोपान १',
    nameSanskrit: 'श्रवणम् (Shravanam)',
    nameEnglish: 'Attentive Listening & Absorption',
    subTitle: 'The Genesis of Perception',
    icon: Ear,
    definition: 'वेदान्तवाक्यानां तात्पर्यनिर्णयानुकूलमानसिकव्यापारः श्रवणम् ।',
    explanation:
      'The foundational art of receptive listening. In traditional Gurukula pedagogy, the student suspends personal prejudices to receive scriptural wisdom and acoustic vibrations directly from the living voice of the Acharya.',
    modernParallel:
      'Cognitive Psychology: Deep Focused Attention, Active Auditory Processing, and overcoming cognitive bias.',
    quote: 'श्रोतव्यः खल्वरे द्रष्टव्यः मन्तव्यो निदिध्यासितव्यः — बृहदारण्यकोपनिषद्',
  },
  {
    id: 'manana',
    stepNumber: 'सोपान २',
    nameSanskrit: 'मननम् (Mananam)',
    nameEnglish: 'Critical Inquiry & Rational Deliberation',
    subTitle: 'The Furnace of Logic',
    icon: Brain,
    definition: 'युक्त्या सम्भावितदोषनिराकरणपूर्वकं वस्तुस्थिरीकरणं मननम् ।',
    explanation:
      'Rigorous intellectual interrogation. Knowledge is never blindly accepted. Disciples employ Nyaya logic, formulate counter-arguments (Purvapaksha), and resolve apparent contradictions through unsparing intellectual debate.',
    modernParallel:
      'Modern Science: Dialectical Reasoning, Socratic Method, and Hypothesis Falsification.',
    quote: 'तर्कप्रतिष्ठानादपि अन्यथानुमेयमिति चेत् — ब्रह्मसूत्र',
  },
  {
    id: 'nididhyasana',
    stepNumber: 'सोपान ३',
    nameSanskrit: 'निदिध्यासनम् (Nididhyasanam)',
    nameEnglish: 'Meditative Internalization & Assimilation',
    subTitle: 'The Flow of Unbroken Awareness',
    icon: Compass,
    definition: 'विजातीयप्रत्ययतिरस्कारपूर्वक-सजातीयप्रत्ययप्रवाहीकरणं निदिध्यासनम् ।',
    explanation:
      'Continuous meditative contemplation. The intellectual conclusion reached during Manana is steadily stabilized in the heart through silent contemplation until the mind flows unbrokenly in that truth like a stream of poured oil (Tailadharavat).',
    modernParallel:
      'Neurobiology: Synaptic Consolidation, Neural Repatterning, and Deep Flow States.',
    quote: 'यतो वाचो निवर्तन्ते अप्राप्य मनसा सह — तैत्तिरीयोपनिषद्',
  },
  {
    id: 'sakshatkara',
    stepNumber: 'सोपान ४',
    nameSanskrit: 'साक्षात्कारः (Sakshatkara)',
    nameEnglish: 'Direct Experiential Realization',
    subTitle: 'Embodied Living Truth',
    icon: Sparkles,
    definition: 'अपरोक्षानुभूतिरूपं अखण्डसत्यज्ञानमेव साक्षात्कारः ।',
    explanation:
      'The ultimate culmination of Vedic education. Wisdom ceases to be an external theory, concept, or memory. It becomes living, immediate self-realization (Aparokshanubhuti) radiating through every action, decision, and breath.',
    modernParallel:
      'Humanistic Science: Self-Actualization, Transpersonal Consciousness, and Embodied Wisdom.',
    quote: 'भिद्यते हृदयग्रन्थिश्छिद्यन्ते सर्वसंशयाः — मुण्डकोपनिषद्',
  },
];

export function InteractivePillars() {
  const [activeId, setActiveId] = React.useState('shravana');
  const activePillar = PILLARS.find((p) => p.id === activeId) || PILLARS[0];
  const Icon = activePillar.icon;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-10">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">
          प्राचीन शिक्षण पद्धति • Vedic Pedagogy
        </span>
        <h2 className="font-devanagari text-2xl sm:text-3xl md:text-4xl font-bold text-textPrimary">
          शिक्षा के चार स्तम्भ (The 4 Pillars of Vedic Learning)
        </h2>
        <p className="text-xs sm:text-sm text-textMuted max-w-xl mx-auto">
          Unlike rote memorization, Vedic education guides the seeker through an unbroken four-stage alchemy from hearing to living realization.
        </p>
      </div>

      {/* 4 Interactive Selector Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
        {PILLARS.map((pillar) => {
          const PIcon = pillar.icon;
          const isCurrent = pillar.id === activeId;
          return (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setActiveId(pillar.id)}
              className={`p-4 sm:p-5 rounded-2xl sm:rounded-3xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[110px] ${
                isCurrent
                  ? 'bg-surface border-accent shadow-subtle ring-2 ring-accent/20 scale-102'
                  : 'bg-surface/60 border-border-subtle hover:border-border-strong hover:bg-surface'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className="text-[10px] font-mono font-bold text-accent uppercase">
                  {pillar.stepNumber}
                </span>
                <PIcon
                  className={`w-4 h-4 ${
                    isCurrent ? 'text-accent' : 'text-textMuted'
                  }`}
                />
              </div>

              <div>
                <h3 className="font-devanagari font-bold text-sm sm:text-base text-textPrimary truncate">
                  {pillar.nameSanskrit.split(' ')[0]}
                </h3>
                <p className="text-[11px] text-textMuted truncate mt-0.5">
                  {pillar.nameEnglish.split(' ')[0]}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Pillar Expanded View */}
      <div className="p-6 sm:p-10 rounded-3xl bg-surface border border-border-strong shadow-subtle hover:shadow-elevated transition-all duration-300">
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
          <div className="space-y-4 flex-1">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-accent-soft text-accent flex items-center justify-center shadow-subtle flex-shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-bold">
                  {activePillar.stepNumber} • {activePillar.subTitle}
                </span>
                <h3 className="font-devanagari text-xl sm:text-2xl font-bold text-textPrimary">
                  {activePillar.nameSanskrit}
                </h3>
              </div>
            </div>

            {/* Classical Definition */}
            <div className="p-4 rounded-2xl bg-subtle/70 border border-border-subtle space-y-1">
              <span className="text-[10px] font-bold text-accent uppercase tracking-wider block">
                पारिभाषिक लक्षणम् (Classical Definition):
              </span>
              <p className="font-devanagari text-xs sm:text-sm text-textPrimary font-semibold leading-relaxed">
                {activePillar.definition}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
              {activePillar.explanation}
            </p>
          </div>

          {/* Side Insight Box */}
          <div className="lg:w-80 flex-shrink-0 space-y-4">
            <div className="p-5 rounded-2xl bg-subtle/50 border border-border-subtle space-y-2">
              <span className="text-[10px] font-bold text-accent uppercase tracking-wider block">
                आधुनिक विज्ञान में प्रासंगिकता:
              </span>
              <p className="text-xs text-textSecondary leading-relaxed">
                {activePillar.modernParallel}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-accent-soft/30 border border-accent/20">
              <span className="text-[10px] font-bold text-accent uppercase tracking-wider block mb-1">
                उपनिषद् वाक्य:
              </span>
              <p className="font-devanagari text-xs text-textPrimary italic">
                "{activePillar.quote}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
