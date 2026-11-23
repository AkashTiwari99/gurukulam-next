'use client';

import * as React from 'react';
import { Sparkles, RefreshCw, Copy, Check, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { ShlokaLineRenderer } from '@/components/reader/ShlokaLineRenderer';

interface Subhashita {
  id: string;
  theme: string;
  source: string;
  sanskrit: string;
  hindi: string;
  english: string;
  anvaya: string;
}

const SUBHASHITAS: Subhashita[] = [
  {
    id: 'vidya-mahatmya',
    theme: 'विद्या महिमा • The Glory of Knowledge',
    source: 'भर्तृहरि नीतिशतकम्',
    sanskrit: 'विद्या नाम नरस्य रूपमधिकं प्रच्छन्नगुप्तं धनम् ।\nविद्या भोगकरी यशःसुखकरी विद्या गुरूणां गुरुः ॥',
    hindi: 'विद्या मनुष्य का वास्तविक सौन्दर्य है और उसका गुप्त रूप से सुरक्षित धन है। विद्या सुख-साधन, यश और आनन्द देने वाली है, और विद्या सभी गुरुओं की भी गुरु है।',
    english: 'Knowledge is the true beauty of man and a well-guarded secret treasure. It yields pleasures, fame, and happiness; indeed, knowledge is the supreme guide among all teachers.',
    anvaya: 'विद्या (ज्ञान) = नरस्य अधिकं रूपम् (मनुष्य का श्रेष्ठ रूप); प्रच्छन्नगुप्तं धनम् (सुरक्षित धन); भोगकरी यशःसुखकरी (सुख व यश प्रदाता); गुरूणां गुरुः (परम गुरु)।',
  },
  {
    id: 'udyoga-dhirata',
    theme: 'उद्यम एवं कर्म • The Power of Right Action',
    source: 'हितोपदेश',
    sanskrit: 'उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः ।\nन हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः ॥',
    hindi: 'सभी कार्य केवल परिश्रम (उद्यम) से ही सिद्ध होते हैं, कोरे मनोरथों (इच्छाओं) से नहीं। सोते हुए सिंह के मुख में हिरण स्वयं प्रवेश नहीं करते।',
    english: 'Endeavors achieve success through deliberate effort, never through mere wishful thinking. Prey does not walk of its own accord into the mouth of a slumbering lion.',
    anvaya: 'कार्याणि उद्यमेन एव सिध्यन्ति (कार्य परिश्रम से सिद्ध होते हैं); मनोरथैः न (इच्छाओं से नहीं); सुप्तस्य सिंहस्य मुखे (सोए सिंह के मुख में); मृगाः न प्रविशन्ति (मृग नहीं आते)।',
  },
  {
    id: 'satya-dharma',
    theme: 'सत्य एवं सनातन धर्म • Truth & Cosmic Harmony',
    source: 'मनुस्मृति / महाभारत',
    sanskrit: 'सत्यं ब्रूयात् प्रियं ब्रूयात् न ब्रूयात् सत्यमप्रियम् ।\nप्रियं च नानृतं ब्रूयात् एष धर्मः सनातनः ॥',
    hindi: 'सत्य बोलें, जो प्रिय और कल्याणकारी हो। अप्रिय और आहत करने वाला सत्य न बोलें, और प्रिय लगने वाला असत्य भी न बोलें—यही सनातन धर्म है।',
    english: 'Speak the truth that is kind and beneficial; avoid hurtful speech even if true, and never speak pleasant falsehoods. This is the eternal path of Dharma.',
    anvaya: 'सत्यं प्रियं च ब्रूयात् (कल्याणकारी सत्य बोलें); अप्रियं सत्यं न ब्रूयात् (कठोर सत्य से बचें); अनृतं प्रियं च न ब्रूयात् (मीठा असत्य न बोलें); एषः सनातनः धर्मः (यही सनातन धर्म है)।',
  },
  {
    id: 'paropakara',
    theme: 'परोपकार • Selfless Service to Creation',
    source: 'सुभाषितरत्नभाण्डागारम्',
    sanskrit: 'परोपकाराय फलन्ति वृक्षाः परोपकाराय वहन्ति नद्यः ।\nपरोपकाराय दुहन्ति गावः परोपकारार्थमिदं शरीरम् ॥',
    hindi: 'वृक्ष दूसरों के लिए फल देते हैं, नदियाँ दूसरों के लिए बहती हैं, गायें दूसरों के पोषण के लिए दूध देती हैं—इसी प्रकार यह मानव शरीर भी परोपकार के लिए ही है।',
    english: 'Trees yield sweet fruits for others, rivers flow to quench others, cows grant milk for the nourishment of all; likewise, this human embodiment exists for benevolent service.',
    anvaya: 'वृक्षाः परोपकाराय फलन्ति; नद्यः परोपकाराय वहन्ति; गावः परोपकाराय दुहन्ति; इदम् शरीरम् अपि परोपकारार्थम् अस्ति।',
  },
  {
    id: 'guru-kripa',
    theme: 'गुरु वन्दना • Reverence to the Enlightener',
    source: 'स्कन्द पुराण • गुरु गीता',
    sanskrit: 'अखण्डमण्डलाकारं व्याप्तं येन चराचरम् ।\nतत्पदं दर्शितं येन तस्मै श्रीगुरवे नमः ॥',
    hindi: 'जिस अखण्ड मण्डल रूप परम सत्य से यह सम्पूर्ण चर और अचर जगत् व्याप्त है, उस दिव्य परम पद का जिन्होंने हमें साक्षात्कार कराया, उन श्रीगुरुदेव को सादर नमन।',
    english: 'To that revered Master who revealed the Supreme Reality that permeates the unbroken cosmic sphere of all moving and unmoving beings, my humble prostrations.',
    anvaya: 'येन अखण्डमण्डलाकारं चराचरं व्याप्तम् (जिससे सम्पूर्ण चर-अचर व्याप्त है); येन तत् पदं दर्शितम् (जिन्होंने वह परम पद दिखाया); तस्मै श्रीगुरवे नमः (उन गुरु को प्रणाम)।',
  },
];

export function DailySubhashitaWidget() {
  const [index, setIndex] = React.useState(0);
  const [copied, setCopied] = React.useState(false);
  const [showAnvaya, setShowAnvaya] = React.useState(false);
  const [isRotating, setIsRotating] = React.useState(false);

  const current = SUBHASHITAS[index];

  const handleNext = () => {
    setIsRotating(true);
    setIndex((prev) => (prev + 1) % SUBHASHITAS.length);
    setShowAnvaya(false);
    setTimeout(() => setIsRotating(false), 300);
  };

  const handleCopy = () => {
    const textToCopy = `${current.sanskrit}\n\nभावार्थ:\n${current.hindi}\n\nEnglish:\n${current.english}\n— ${current.source} | Gurukulam`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface via-surface to-subtle/70 border border-border-strong shadow-subtle hover:shadow-elevated transition-all duration-300 p-6 sm:p-10">
        {/* Subtle Decorative Aura */}
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-accent-soft/40 blur-3xl pointer-events-none" />

        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-border-subtle">
          <div className="flex items-center space-x-2.5">
            <span className="p-2 rounded-2xl bg-accent-soft text-accent flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <span className="text-[11px] font-bold text-accent uppercase tracking-wider font-mono">
                दैनिक सुभाषितम् • Daily Vedic Insight
              </span>
              <p className="text-xs text-textMuted font-medium mt-0.5">
                {current.theme}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-medium text-textSecondary px-2.5 py-1 rounded-full bg-subtle border border-border-subtle">
              {current.source}
            </span>

            {/* Cycle Button */}
            <button
              type="button"
              onClick={handleNext}
              className="p-2 rounded-full text-textSecondary hover:text-accent hover:bg-subtle transition-all duration-200"
              title="अन्य सुभाषित देखें (Next Verse)"
              aria-label="Next subhashita"
            >
              <RefreshCw className={`w-4 h-4 ${isRotating ? 'animate-spin' : ''}`} />
            </button>

            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopy}
              className="p-2 rounded-full text-textSecondary hover:text-accent hover:bg-subtle transition-all duration-200"
              title="श्लोक व भावार्थ कॉपी करें"
              aria-label="Copy subhashita"
            >
              {copied ? (
                <Check className="w-4 h-4 text-status-success" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Verse Text Rendered with Strict Metrical Breaks */}
        <div className="py-6 sm:py-8">
          <ShlokaLineRenderer
            text={current.sanskrit}
            className="text-textPrimary"
          />
        </div>

        {/* Translations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border-subtle">
          {/* Hindi Bhavartha */}
          <div className="p-4 rounded-2xl bg-subtle/50 border border-border-subtle space-y-1.5">
            <span className="inline-block text-[11px] font-bold text-accent bg-accent-soft px-2 py-0.5 rounded">
              हिन्दी भावार्थ
            </span>
            <p className="font-devanagari text-xs sm:text-sm text-textSecondary leading-relaxed">
              {current.hindi}
            </p>
          </div>

          {/* English Translation */}
          <div className="p-4 rounded-2xl bg-subtle/30 border border-border-subtle space-y-1.5">
            <span className="inline-block text-[11px] font-bold text-textPrimary bg-surface border border-border-subtle px-2 py-0.5 rounded">
              English Meaning
            </span>
            <p className="text-xs sm:text-sm text-textMuted leading-relaxed italic">
              "{current.english}"
            </p>
          </div>
        </div>

        {/* Anvaya & Deeper Analysis Accordion */}
        <div className="mt-4 pt-2">
          <button
            type="button"
            onClick={() => setShowAnvaya(!showAnvaya)}
            className="flex items-center space-x-1.5 text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{showAnvaya ? 'अन्वय एवं शब्दार्थ छुपाएँ' : 'अन्वय एवं व्याकरण विश्लेषण देखें (Word-by-word Analysis)'}</span>
            {showAnvaya ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showAnvaya && (
            <div className="mt-3 p-4 rounded-2xl bg-subtle/70 border border-border-subtle text-xs text-textSecondary font-devanagari leading-relaxed animate-fadeIn">
              <span className="font-bold text-textPrimary block mb-1">पदच्छेद एवं अन्वय:</span>
              <p>{current.anvaya}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
