'use client';

import * as React from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  questionEnglish: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: 'prior-sanskrit',
    question: 'क्या गुरुकुल में अध्ययन के लिए पूर्व संस्कृत ज्ञान अनिवार्य है?',
    questionEnglish: 'Is prior Sanskrit knowledge mandatory to study at Gurukulam?',
    answer:
      'बिल्कुल नहीं। गुरुकुल में प्रारम्भिक स्तर (वर्णमाला, शुद्ध वैदिक स्वर-उच्चारण एवं पाणिनीय व्याकरण) से लेकर उच्च दर्शन तक का शिक्षण शून्य से आरम्भ कराया जाता है। कोई भी जिज्ञासु यहाँ से अपनी यात्रा आरम्भ कर सकता है।',
  },
  {
    id: 'online-learning',
    question: 'आधुनिक कामकाजी लोग और छात्र यहाँ ऑनलाइन कैसे अध्ययन कर सकते हैं?',
    questionEnglish: 'How can working professionals and modern students learn online?',
    answer:
      'हमारे डिजिटल ग्रन्थागार (Library Hub) में वाल्मीकि रामायण के सम्पूर्ण २४,००० श्लोक, श्लोक माला का स्वर-उच्चारण ऑडियो, शोध ग्रन्थ PDFs और वैदिक कीबोर्ड निःशुल्क उपलब्ध हैं। आप अपनी गति और सुविधानुसार अध्ययन कर सकते हैं।',
  },
  {
    id: 'residential-discipline',
    question: 'गुरुकुल में आवासीय अध्ययन के क्या नियम और दिनचर्या हैं?',
    questionEnglish: 'What are the rules and daily routine for residential scholars?',
    answer:
      'आवासीय छात्रों के लिए प्रातः ब्रह्म मुहूर्त (4:30 AM) जागरण, दैनिक अग्निहोत्र, योग, सात्त्विक आहार, गोसेवा और अध्ययन का एक अनुशासित क्रम होता है। आश्रम में प्रकृति के सान्निध्य में व्यसन-मुक्त और एकाग्र जीवन का पालन किया जाता है।',
  },
  {
    id: 'ramayana-study',
    question: 'वाल्मीकि रामायण का अध्ययन किस पद्धति से कराया जाता है?',
    questionEnglish: 'What methodology is followed for studying the Valmiki Ramayana?',
    answer:
      'वाल्मीकि रामायण के सातों काण्डों (बालकाण्ड से उत्तरकाण्ड) के ६४५ सर्गों का अध्ययन पारम्परिक मङ्गल श्लोकों, वक्ता निर्धारण (उवाच), और प्राचीन संस्कृत व्याख्याओं (जैसे तिलक, भूषण आदि) के साथ प्रामाणिक रूप में कराया जाता है।',
  },
  {
    id: 'core-vision',
    question: 'आधुनिक युग में प्राचीन गुरुकुल परम्परा की क्या प्रासंगिकता है?',
    questionEnglish: 'What is the relevance of ancient Gurukul tradition in the modern age?',
    answer:
      'आज के तनावपूर्ण और सूचना-बहुल युग में गुरुकुल शिक्षा मानसिक शांति, एकाग्रता, नैतिक संबल और आत्म-ज्ञान प्रदान करती है। यह केवल सूचना देना नहीं, बल्कि सर्वांगीण चरित्र निर्माण और प्रज्ञा का जागरण है।',
  },
];

export function InteractiveFAQ() {
  const [openId, setOpenId] = React.useState<string | null>('prior-sanskrit');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center space-y-2 mb-10">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">
          जिज्ञासा एवं समाधान • Knowledge Queries
        </span>
        <h2 className="font-devanagari text-2xl sm:text-3xl font-bold text-textPrimary">
          अक्सर पूछे जाने वाले प्रश्न (FAQ)
        </h2>
        <p className="text-xs sm:text-sm text-textMuted max-w-lg mx-auto">
          Find answers to common questions about admissions, scriptural study, online tools, and ashram life.
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl sm:rounded-3xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'bg-surface border-accent shadow-subtle'
                  : 'bg-surface/70 border-border-subtle hover:border-border-strong hover:bg-surface'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors min-h-[54px]"
                aria-expanded={isOpen}
              >
                <div className="flex items-center space-x-3.5 pr-2">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-accent text-on-accent'
                        : 'bg-subtle text-textSecondary'
                    }`}
                  >
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-devanagari font-bold text-sm sm:text-base text-textPrimary">
                      {faq.question}
                    </h3>
                    <p className="text-[11px] text-textMuted font-medium mt-0.5">
                      {faq.questionEnglish}
                    </p>
                  </div>
                </div>

                <div className="p-1 rounded-full text-textMuted hover:text-accent flex-shrink-0">
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-accent" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-border-subtle/60 text-xs sm:text-sm text-textSecondary leading-relaxed font-devanagari animate-fadeIn">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
