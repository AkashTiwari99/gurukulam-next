'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Grid, ChevronDown, Search, X } from 'lucide-react';

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
  const [sargaFilter, setSargaFilter] = React.useState('');

  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const prevSarga = currentSarga > 1 ? currentSarga - 1 : null;
  const nextSarga = currentSarga < totalSargas ? currentSarga + 1 : null;

  const currentKandaIndex = KANDAS_LIST.findIndex((k) => k.slug === currentKanda);
  const prevKanda = currentKandaIndex > 0 ? KANDAS_LIST[currentKandaIndex - 1] : null;
  const nextKanda = currentKandaIndex >= 0 && currentKandaIndex < KANDAS_LIST.length - 1 ? KANDAS_LIST[currentKandaIndex + 1] : null;

  // Lock body scroll when sarga modal is open
  React.useEffect(() => {
    if (sargaModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [sargaModalOpen]);

  // Click outside listener
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setKandaDropdownOpen(false);
      }
    };
    if (kandaDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [kandaDropdownOpen]);

  const navigateTo = (kandaSlug: string, sargaNum: number) => {
    router.push(`/books/ramayana/${kandaSlug}/sarga-${sargaNum}`);
    setSargaModalOpen(false);
    setKandaDropdownOpen(false);
  };

  // Filter sargas for jump modal
  const allSargaNumbers = Array.from({ length: totalSargas }, (_, i) => i + 1);
  const filteredSargas = sargaFilter.trim()
    ? allSargaNumbers.filter((n) => n.toString().includes(sargaFilter.trim()))
    : allSargaNumbers;

  return (
    <>
      <div className="sticky top-16 z-30 w-full bg-surface/90 backdrop-blur-md border-b border-border-subtle py-2.5 px-3 sm:px-4 shadow-subtle transition-colors">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-1.5 sm:gap-2">
          {/* Previous Sarga */}
          {prevSarga ? (
            <button
              onClick={() => navigateTo(currentKanda, prevSarga)}
              className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-full border border-border-subtle hover:bg-subtle text-xs sm:text-sm font-medium text-textSecondary hover:text-accent transition-colors min-h-[38px]"
              aria-label={`पूर्व सर्ग ${prevSarga}`}
            >
              <ChevronLeft className="w-4 h-4 flex-shrink-0" />
              <span className="hidden md:inline">पूर्व सर्ग {prevSarga}</span>
              <span className="md:hidden">सर्ग {prevSarga}</span>
            </button>
          ) : prevKanda ? (
            <button
              onClick={() => navigateTo(prevKanda.slug, prevKanda.total)}
              className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-full border border-border-subtle hover:bg-subtle text-xs sm:text-sm font-medium text-textSecondary hover:text-accent transition-colors min-h-[38px]"
              aria-label={`पूर्व काण्ड ${prevKanda.name}`}
            >
              <ChevronLeft className="w-4 h-4 flex-shrink-0" />
              <span className="hidden md:inline">← {prevKanda.name}</span>
              <span className="md:hidden">← पूर्व</span>
            </button>
          ) : (
            <Link
              href="/books/ramayana"
              className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-full border border-border-subtle hover:bg-subtle text-xs sm:text-sm font-medium text-textSecondary hover:text-accent transition-colors min-h-[38px]"
            >
              <ChevronLeft className="w-4 h-4 flex-shrink-0" />
              <span>मङ्गल श्लोक</span>
            </Link>
          )}

          {/* Central Kanda & Sarga Selector */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            {/* Kanda Selector Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setKandaDropdownOpen(!kandaDropdownOpen)}
                className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-full bg-accent-soft text-accent hover:bg-accent/20 text-xs sm:text-sm font-semibold transition-colors min-h-[38px]"
                aria-expanded={kandaDropdownOpen}
                aria-haspopup="true"
              >
                <span className="truncate max-w-[110px] sm:max-w-none">{currentKandaTitle}</span>
                <ChevronDown className="w-3.5 h-3.5 flex-shrink-0" />
              </button>

              {kandaDropdownOpen && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-52 bg-surface border border-border-strong rounded-2xl shadow-elevated p-2 z-50 animate-fadeIn max-h-80 overflow-y-auto">
                  <Link
                    href="/books/ramayana"
                    className="block px-3 py-2 rounded-xl text-xs font-medium text-textPrimary hover:bg-subtle hover:text-accent transition-colors min-h-[36px] flex items-center"
                  >
                    मङ्गल श्लोक
                  </Link>
                  <div className="h-px bg-border-subtle my-1" />
                  {KANDAS_LIST.map((k) => (
                    <button
                      key={k.slug}
                      onClick={() => navigateTo(k.slug, 1)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors min-h-[36px] flex items-center justify-between ${
                        k.slug === currentKanda
                          ? 'bg-accent text-on-accent font-semibold'
                          : 'text-textPrimary hover:bg-subtle'
                      }`}
                    >
                      <span>{k.name}</span>
                      <span className="text-[11px] opacity-75 font-mono">{k.total} सर्ग</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sarga Grid Modal Trigger */}
            <button
              type="button"
              onClick={() => setSargaModalOpen(true)}
              className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-full border border-border-subtle bg-surface hover:bg-subtle text-xs sm:text-sm font-medium text-textPrimary transition-colors min-h-[38px]"
              aria-label={`सर्ग ${currentSarga} चुनें`}
            >
              <Grid className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <span>सर्ग {currentSarga}</span>
            </button>
          </div>

          {/* Next Sarga */}
          {nextSarga ? (
            <button
              onClick={() => navigateTo(currentKanda, nextSarga)}
              className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-full border border-border-subtle hover:bg-subtle text-xs sm:text-sm font-medium text-textSecondary hover:text-accent transition-colors min-h-[38px]"
              aria-label={`अग्रिम सर्ग ${nextSarga}`}
            >
              <span className="hidden md:inline">अग्रिम सर्ग {nextSarga}</span>
              <span className="md:hidden">सर्ग {nextSarga}</span>
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
            </button>
          ) : nextKanda ? (
            <button
              onClick={() => navigateTo(nextKanda.slug, 1)}
              className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-full bg-accent hover:bg-accent-hover text-on-accent text-xs sm:text-sm font-semibold transition-colors min-h-[38px]"
              aria-label={`अग्रिम काण्ड ${nextKanda.name}`}
            >
              <span className="hidden md:inline">{nextKanda.name} →</span>
              <span className="md:hidden">अग्रिम →</span>
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
            </button>
          ) : (
            <Link
              href="/books/ramayana"
              className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-full bg-accent hover:bg-accent-hover text-on-accent text-xs sm:text-sm font-semibold transition-colors min-h-[38px]"
            >
              <span>सम्पूर्ण →</span>
            </Link>
          )}
        </div>
      </div>

      {/* Sarga Jump Modal */}
      {sargaModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-2xl bg-surface border border-border-strong rounded-3xl shadow-elevated p-5 sm:p-6 max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
              <div>
                <h3 className="font-bold text-lg text-textPrimary">
                  {currentKandaTitle} — सर्ग चयन
                </h3>
                <p className="text-xs text-textMuted">
                  कुल {totalSargas} सर्ग उपलब्ध हैं
                </p>
              </div>
              <button
                onClick={() => {
                  setSargaModalOpen(false);
                  setSargaFilter('');
                }}
                className="p-2 rounded-xl text-textMuted hover:text-textPrimary hover:bg-subtle min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Sarga Number Filter */}
            <div className="pt-3 pb-2">
              <div className="relative">
                <Search className="w-4 h-4 text-textMuted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={sargaFilter}
                  onChange={(e) => setSargaFilter(e.target.value)}
                  placeholder="सर्ग संख्या खोजें (Filter sarga number, e.g. 5, 24)..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-border-subtle bg-subtle/50 text-textPrimary text-xs focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            {/* Sargas Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-2 py-3 overflow-y-auto">
              {filteredSargas.map((sNum) => (
                <button
                  key={sNum}
                  onClick={() => navigateTo(currentKanda, sNum)}
                  className={`h-11 rounded-xl text-sm font-semibold transition-all flex items-center justify-center min-h-[44px] ${
                    sNum === currentSarga
                      ? 'bg-accent text-on-accent shadow-subtle scale-105'
                      : 'border border-border-subtle bg-subtle/40 text-textPrimary hover:border-accent hover:text-accent'
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
