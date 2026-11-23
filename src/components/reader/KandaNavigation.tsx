'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Grid, BookOpen, ChevronDown } from 'lucide-react';

interface KandaNavigationProps {
  currentKanda: string;
  currentKandaTitle: string;
  currentSarga: number;
  totalSargas: number;
}

const KANDAS_LIST = [
  { slug: 'balakanda', name: 'बालकाण्ड', total: 77 },
  { slug: 'ayodhyakanda', name: 'अयोध्याकाण्ड', total: 119 },
  { slug: 'aranyakanda', name: 'आरण्यकाण्ड', total: 75 },
  { slug: 'kishkindhakanda', name: 'किष्किन्धाकाण्ड', total: 67 },
  { slug: 'sundarakanda', name: 'सुन्दरकाण्ड', total: 68 },
  { slug: 'yuddhakanda', name: 'युद्धकाण्ड', total: 128 },
  { slug: 'uttarakanda', name: 'उत्तरकाण्ड', total: 111 },
];

export function KandaNavigation({
  currentKanda,
  currentKandaTitle,
  currentSarga,
  totalSargas,
}: KandaNavigationProps) {
  const router = useRouter();
  const [sargaModalOpen, setSargaModalOpen] = React.useState(false);
  const [kandaDropdownOpen, setKandaDropdownOpen] = React.useState(false);

  const prevSarga = currentSarga > 1 ? currentSarga - 1 : null;
  const nextSarga = currentSarga < totalSargas ? currentSarga + 1 : null;

  const navigateTo = (kandaSlug: string, sargaNum: number) => {
    router.push(`/books/ramayana/${kandaSlug}/sarga-${sargaNum}`);
    setSargaModalOpen(false);
    setKandaDropdownOpen(false);
  };

  return (
    <>
      <div className="sticky top-16 z-30 w-full bg-surface/90 backdrop-blur-md border-b border-border-subtle py-3 px-4 shadow-subtle transition-colors">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-2">
          {/* Previous Sarga */}
          {prevSarga ? (
            <button
              onClick={() => navigateTo(currentKanda, prevSarga)}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-full border border-border-subtle hover:bg-subtle text-xs sm:text-sm font-medium text-textSecondary hover:text-accent transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">पूर्व सर्ग {prevSarga}</span>
              <span className="sm:hidden">सर्ग {prevSarga}</span>
            </button>
          ) : (
            <a
              href="/books/ramayana"
              className="flex items-center space-x-1 px-3 py-1.5 rounded-full border border-border-subtle hover:bg-subtle text-xs sm:text-sm font-medium text-textSecondary hover:text-accent transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>मङ्गल श्लोक</span>
            </a>
          )}

          {/* Central Kanda & Sarga Selector */}
          <div className="flex items-center space-x-2">
            {/* Kanda Selector */}
            <div className="relative">
              <button
                onClick={() => setKandaDropdownOpen(!kandaDropdownOpen)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-accent-soft text-accent hover:bg-accent/20 text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>{currentKandaTitle}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {kandaDropdownOpen && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-48 bg-surface border border-border-strong rounded-2xl shadow-elevated p-2 z-50 animate-fadeIn">
                  <a
                    href="/books/ramayana"
                    className="block px-3 py-2 rounded-xl text-xs font-medium text-textPrimary hover:bg-subtle hover:text-accent transition-colors"
                  >
                    मङ्गल श्लोक
                  </a>
                  <div className="h-px bg-border-subtle my-1" />
                  {KANDAS_LIST.map((k) => (
                    <button
                      key={k.slug}
                      onClick={() => navigateTo(k.slug, 1)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                        k.slug === currentKanda
                          ? 'bg-accent text-on-accent font-semibold'
                          : 'text-textPrimary hover:bg-subtle'
                      }`}
                    >
                      {k.name} ({k.total})
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sarga Grid Modal Trigger */}
            <button
              onClick={() => setSargaModalOpen(true)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-border-subtle bg-surface hover:bg-subtle text-xs sm:text-sm font-medium text-textPrimary transition-colors"
            >
              <Grid className="w-3.5 h-3.5 text-accent" />
              <span>सर्ग {currentSarga}</span>
            </button>
          </div>

          {/* Next Sarga */}
          {nextSarga ? (
            <button
              onClick={() => navigateTo(currentKanda, nextSarga)}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-full border border-border-subtle hover:bg-subtle text-xs sm:text-sm font-medium text-textSecondary hover:text-accent transition-colors"
            >
              <span className="hidden sm:inline">अग्रिम सर्ग {nextSarga}</span>
              <span className="sm:hidden">सर्ग {nextSarga}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="w-20 text-right text-xs text-textMuted font-medium pr-2">
              काण्ड समाप्त
            </div>
          )}
        </div>
      </div>

      {/* Sarga Jump Modal */}
      {sargaModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-2xl bg-surface border border-border-strong rounded-3xl shadow-elevated p-6 max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
              <div>
                <h3 className="font-bold text-lg text-textPrimary">
                  {currentKandaTitle} — सर्ग चयन
                </h3>
                <p className="text-xs text-textMuted">
                  कुल {totalSargas} सर्ग उपलब्ध हैं। किसी भी सर्ग पर सीधे जाने के लिए क्लिक करें:
                </p>
              </div>
              <button
                onClick={() => setSargaModalOpen(false)}
                className="p-2 rounded-xl text-textMuted hover:text-textPrimary hover:bg-subtle"
              >
                ✕
              </button>
            </div>

            {/* Sargas Grid */}
            <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2 py-4 overflow-y-auto">
              {Array.from({ length: totalSargas }, (_, i) => i + 1).map((sNum) => (
                <button
                  key={sNum}
                  onClick={() => navigateTo(currentKanda, sNum)}
                  className={`h-11 rounded-xl text-sm font-semibold transition-all ${
                    sNum === currentSarga
                      ? 'bg-accent text-on-accent shadow-subtle scale-105'
                      : 'border border-border-subtle bg-subtle/50 text-textPrimary hover:border-accent hover:text-accent'
                  }`}
                >
                  {sNum}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
