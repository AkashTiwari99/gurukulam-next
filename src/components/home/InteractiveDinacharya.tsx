'use client';

import * as React from 'react';
import {
  Sun,
  BookOpen,
  Coffee,
  Compass,
  Moon,
  Clock,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface RoutinePhase {
  id: string;
  timeSlot: string;
  nameDevanagari: string;
  titleEnglish: string;
  icon: React.ElementType;
  description: string;
  mantra: string;
  activities: string[];
  keyBenefit: string;
}

const ROUTINE_PHASES: RoutinePhase[] = [
  {
    id: 'brahma-muhurta',
    timeSlot: '04:30 — 07:00 AM',
    nameDevanagari: 'प्रातःकाल • ब्रह्म मुहूर्त जागरण एवं अग्निहोत्र',
    titleEnglish: 'Dawn Awakening & Sacred Oblation',
    icon: Sun,
    description:
      'The day begins at Brahma Muhurta (approx. 96 minutes before sunrise) when natural sattva peaks. Disciples perform ceremonial ablutions, Yogic surya namaskar, pranayama, and the morning Agnihotra havan invoking solar energy.',
    mantra: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥',
    activities: [
      'ब्रह्म मुहूर्त जागरण (Pre-dawn rise)',
      'योग, प्राणायाम एवं सूर्य नमस्कार',
      'वैदिक सन्ध्या एवं दैनिक अग्निहोत्र',
    ],
    keyBenefit: 'Elevates mental clarity, aligns circadian biological rhythm, and purifies the atmosphere.',
  },
  {
    id: 'purvahna',
    timeSlot: '07:00 AM — 12:00 PM',
    nameDevanagari: 'पूर्वाह्न • वेद स्वाध्याय एवं पाणिनीय व्याकरण',
    titleEnglish: 'Core Scriptural & Linguistic Immersion',
    icon: BookOpen,
    description:
      'The highest cognitive learning window. Disciples engage in the oral memorization of the Samhitas with rigorous phonetic accuracy (Udatta, Anudatta, Svarita), Paninian grammar sutras, and Upanishadic inquiry.',
    mantra: 'सह नाववतु सह नौ भुनक्तु सह वीर्यं करवावहै । तेजस्वि नावधीतमस्तु मा विद्विषावहै ॥',
    activities: [
      'स्वर-शुद्ध वेद मन्त्रोच्चारण (Oral chanting)',
      'अष्टाध्यायी एवं धातुपाठ अभ्यास',
      'उपनिषद् एवं दर्शन शास्त्र स्वाध्याय',
    ],
    keyBenefit: 'Develops photographic auditory retention, linguistic mastery, and philosophical depth.',
  },
  {
    id: 'madhyahna',
    timeSlot: '12:00 — 03:00 PM',
    nameDevanagari: 'मध्याह्न • सात्त्विक भोजन, विश्राम एवं गोसेवा',
    titleEnglish: 'Midday Sustenance & Ecological Seva',
    icon: Coffee,
    description:
      'Partaking of fresh, satvik organic meals harvested from ashram gardens following traditional Vedic food blessing (Anna Sukta). Followed by brief meditative rest and devoted service at the indigenous goshala.',
    mantra: 'अन्नपतेऽन्नस्य नो देह्यनमीवस्य शुष्मिणः । प्र प्र दातारं तारिष ऊर्जं नो धेहि द्विपदे चतुष्पदे ॥',
    activities: [
      'अन्न-सूक्त सहित सात्त्विक भोजन',
      'गौशाला सेवा (Indigenous Cow Seva)',
      'आयुर्वेदिक वाटिका श्रमदान (Herb stewardship)',
    ],
    keyBenefit: 'Nurtures humility, harmony with animals and nature, and physical vitality.',
  },
  {
    id: 'aparahna',
    timeSlot: '03:00 — 06:00 PM',
    nameDevanagari: 'अपराह्न • षड्दर्शन शास्त्रार्थ एवं कला-कौशल',
    titleEnglish: 'Philosophical Debates & Applied Arts',
    icon: Compass,
    description:
      'Afternoon is devoted to intense logical debates (Shastrartha) under the guidance of Acharyas. Students learn Nyaya epistemology, Vedic astronomy, Dhanurveda (traditional archery), and classical music.',
    mantra: 'विद्ययाऽमृतमश्नुते । विद्या ददाति विनयं विनयाद्याति पात्रताम् ॥',
    activities: [
      'न्याय-वैशेषिक तर्क शास्त्रार्थ (Logical debate)',
      'वैदिक गणित एवं ज्योतिष खगोल विज्ञान',
      'धनुर्वेद, योग-क्रीड़ा एवं संगीत',
    ],
    keyBenefit: 'Sharpens intellectual discrimination (Viveka), critical reasoning, and bodily coordination.',
  },
  {
    id: 'sayankala',
    timeSlot: '06:00 — 09:30 PM',
    nameDevanagari: 'सायंकाल व निशा • सन्ध्या, सत्संग एवं मौन शयन',
    titleEnglish: 'Evening Sandhya, Discourse & Silence',
    icon: Moon,
    description:
      'As twilight descends, the ashram gathers for evening Sandhya Vandana, Vedic chanting around sacred fire, storytelling from the Ramayana, quiet introspective contemplation, and peaceful rest by 9:30 PM.',
    mantra: 'ॐ असतो मा सद्गमय तमसो मा ज्योतिर्गमय मृत्योर्माऽमृतं गमय ॥ ॐ शान्तिः शान्तिः शान्तिः ॥',
    activities: [
      'सायंकालीन सन्ध्या व दीप प्रज्वलन',
      'रामायण सत्संग एवं कीर्तन',
      'मौन ध्यान (Silent introspection) व शयन',
    ],
    keyBenefit: 'Dissolves mental stress, consolidates days learning into deep memory, and restores serenity.',
  },
];

export function InteractiveDinacharya() {
  const [activeTab, setActiveTab] = React.useState('brahma-muhurta');
  const current = ROUTINE_PHASES.find((p) => p.id === activeTab) || ROUTINE_PHASES[0];
  const Icon = current.icon;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center space-y-2 mb-10">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">
          आदर्श जीवन पद्धति • Living Tradition
        </span>
        <h2 className="font-devanagari text-2xl sm:text-3xl md:text-4xl font-bold text-textPrimary">
          गुरुकुल दैनिक दिनचर्या (Daily Life at Gurukulam)
        </h2>
        <p className="text-xs sm:text-sm text-textMuted max-w-xl mx-auto">
          Explore how ancient disciples balanced rigorous intellectual scholarship, physical discipline, and spiritual communion from pre-dawn to dusk.
        </p>
      </div>

      {/* Interactive Tabs Header */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
        {ROUTINE_PHASES.map((phase) => {
          const PhaseIcon = phase.icon;
          const isActive = phase.id === activeTab;
          return (
            <button
              key={phase.id}
              type="button"
              onClick={() => setActiveTab(phase.id)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-200 whitespace-nowrap min-h-[44px] ${
                isActive
                  ? 'bg-accent text-on-accent shadow-subtle scale-102'
                  : 'bg-surface border border-border-subtle text-textSecondary hover:text-textPrimary hover:bg-subtle'
              }`}
            >
              <PhaseIcon className="w-4 h-4 flex-shrink-0" />
              <span>{phase.timeSlot}</span>
            </button>
          );
        })}
      </div>

      {/* Active Phase Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-surface border border-border-strong shadow-subtle hover:shadow-elevated transition-all duration-300">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          {/* Main Info */}
          <div className="space-y-4 flex-1">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-accent-soft text-accent flex items-center justify-center flex-shrink-0 shadow-subtle">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="inline-flex items-center space-x-1 text-[11px] font-mono text-accent font-bold uppercase tracking-wider">
                  <Clock className="w-3 h-3" />
                  <span>{current.timeSlot}</span>
                </span>
                <h3 className="font-devanagari text-xl sm:text-2xl font-bold text-textPrimary">
                  {current.nameDevanagari}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-textSecondary leading-relaxed pt-1">
              {current.description}
            </p>

            {/* Sacred Mantra Box */}
            <div className="p-4 rounded-2xl bg-subtle/70 border border-border-subtle space-y-1.5">
              <span className="text-[10px] font-bold text-accent uppercase tracking-wider flex items-center space-x-1">
                <Sparkles className="w-3 h-3" />
                <span>सम्बद्ध मन्त्र / प्रार्थना</span>
              </span>
              <p className="font-devanagari text-xs sm:text-sm text-textPrimary font-semibold leading-relaxed">
                {current.mantra}
              </p>
            </div>
          </div>

          {/* Activities List & Purpose Box */}
          <div className="lg:w-80 flex-shrink-0 space-y-4">
            <div className="p-5 rounded-2xl bg-subtle/50 border border-border-subtle space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-textPrimary">
                प्रमुख अभ्यास एवं कर्म (Key Practices)
              </h4>
              <ul className="space-y-2">
                {current.activities.map((act, i) => (
                  <li key={i} className="flex items-start space-x-2 text-xs text-textSecondary font-devanagari">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-accent-soft/30 border border-accent/20">
              <span className="text-[10px] font-bold text-accent uppercase tracking-wider block mb-1">
                आध्यात्मिक एवं मानसिक फल:
              </span>
              <p className="text-xs text-textSecondary leading-relaxed">
                {current.keyBenefit}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
