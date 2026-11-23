'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, BookOpen, Compass, ArrowRight } from 'lucide-react';

interface FastSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const KANDAS_INDEX = [
  { slug: 'balakanda', name: 'बालकाण्ड (Balakanda)', max: 77 },
  { slug: 'ayodhyakanda', name: 'अयोध्याकाण्ड (Ayodhyakanda)', max: 119 },
  { slug: 'aranyakanda', name: 'आरण्यकाण्ड (Aranyakanda)', max: 75 },
  { slug: 'kishkindhakanda', name: 'किष्किन्धाकाण्ड (Kishkindhakanda)', max: 67 },
  { slug: 'sundarakanda', name: 'सुन्दरकाण्ड (Sundarakanda)', max: 68 },
  { slug: 'yuddhakanda', name: 'युद्धकाण्ड (Yuddhakanda)', max: 128 },
  { slug: 'uttarakanda', name: 'उत्तरकाण्ड (Uttarakanda)', max: 111 },
];

export function FastSearchModal({ isOpen, onClose }: FastSearchModalProps) {
  const [query, setQuery] = React.useState('');
  const router = useRouter();
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Search logic
  const normalized = query.trim().toLowerCase();

  // Check for verse pattern like "1.1.1" -> Kanda 1 (bala), Sarga 1, Verse 1
  const verseMatch = normalized.match(/^(\d+)\.(\d+)(\.(\d+))?$/);

  const filteredKandas = KANDAS_INDEX.filter((k) =>
    k.name.toLowerCase().includes(normalized) || k.slug.includes(normalized)
  );

  const handleNavigate = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-lg bg-surface border border-border-strong rounded-2xl shadow-elevated overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-border-subtle bg-subtle/50">
          <Search className="w-5 h-5 text-textMuted mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Kanda, Sarga or enter Shloka (e.g. 1.1.1)..."
            className="w-full bg-transparent text-textPrimary placeholder-textMuted focus:outline-none text-base"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-textMuted hover:text-textPrimary hover:bg-surface transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-border-subtle">
          {/* Quick Verse Navigation Helper */}
          {verseMatch && (
            <div
              onClick={() => {
                const kandaNum = parseInt(verseMatch[1], 10);
                const sargaNum = parseInt(verseMatch[2], 10);
                const kanda = KANDAS_INDEX[kandaNum - 1] || KANDAS_INDEX[0];
                handleNavigate(`/books/ramayana/${kanda.slug}/sarga-${sargaNum}`);
              }}
              className="p-3 rounded-xl hover:bg-accent-soft cursor-pointer flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center space-x-3">
                <BookOpen className="w-4 h-4 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-textPrimary">
                    Jump to Shloka {query}
                  </p>
                  <p className="text-xs text-textMuted">
                    Direct navigate to chapter
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          )}

          {/* Kandas matches */}
          <div className="py-2">
            <p className="px-3 py-1 text-xs font-semibold text-textMuted uppercase tracking-wider">
              Ramayana Kandas
            </p>
            {filteredKandas.map((kanda) => (
              <div
                key={kanda.slug}
                onClick={() => handleNavigate(`/books/ramayana/${kanda.slug}/sarga-1`)}
                className="p-3 rounded-xl hover:bg-subtle cursor-pointer flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-textPrimary">
                    {kanda.name}
                  </span>
                </div>
                <span className="text-xs text-textMuted font-mono">
                  1–{kanda.max} Sargas
                </span>
              </div>
            ))}
          </div>

          {/* Quick Navigation Pages */}
          <div className="py-2">
            <p className="px-3 py-1 text-xs font-semibold text-textMuted uppercase tracking-wider">
              Quick Links
            </p>
            <div
              onClick={() => handleNavigate('/books/ramayana')}
              className="p-3 rounded-xl hover:bg-subtle cursor-pointer flex items-center space-x-3 transition-colors"
            >
              <Compass className="w-4 h-4 text-textMuted" />
              <span className="text-sm text-textPrimary">
                रामायण मङ्गल श्लोक (Mangala Shloka)
              </span>
            </div>
            <div
              onClick={() => handleNavigate('/books/shlok-mala/1')}
              className="p-3 rounded-xl hover:bg-subtle cursor-pointer flex items-center space-x-3 transition-colors"
            >
              <Compass className="w-4 h-4 text-textMuted" />
              <span className="text-sm text-textPrimary">श्लोक माला (Shlok Mala)</span>
            </div>
            <div
              onClick={() => handleNavigate('/keyboard')}
              className="p-3 rounded-xl hover:bg-subtle cursor-pointer flex items-center space-x-3 transition-colors"
            >
              <Compass className="w-4 h-4 text-textMuted" />
              <span className="text-sm text-textPrimary">
                Vedic Devanagari Keyboard
              </span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-border-subtle bg-subtle/30 flex justify-between items-center text-xs text-textMuted">
          <span>Navigate with mouse or keyboard</span>
          <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border-subtle font-mono text-[10px]">
            ESC to close
          </kbd>
        </div>
      </div>
    </div>
  );
}
