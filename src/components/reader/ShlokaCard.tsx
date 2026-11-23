'use client';

import * as React from 'react';
import { Copy, Check, ChevronDown, ChevronUp, BookOpen, Volume2 } from 'lucide-react';

export interface Verse {
  id: string;
  type?: string;
  number?: string;
  uvacha?: string;
  text: string;
  vyakhya?: {
    id?: string;
    text: string;
  } | null;
}

interface ShlokaCardProps {
  verse: Verse;
  index: number;
}

export function ShlokaCard({ verse, index }: ShlokaCardProps) {
  const [showVyakhya, setShowVyakhya] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(verse.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getUvachaDisplay = (uvacha?: string) => {
    if (!uvacha) return null;
    const map: Record<string, string> = {
      valmiki: 'वाल्मीकिरुवाच',
      narada: 'नारद उवाच',
      rama: 'श्रीराम उवाच',
      sita: 'सीतोवाच',
      lakshmana: 'लक्ष्मण उवाच',
      dasharatha: 'दशरथ उवाच',
      brahma: 'ब्रह्मोवाच',
    };
    return map[uvacha.toLowerCase()] || `${uvacha} उवाच`;
  };

  return (
    <article
      id={verse.id}
      className="p-6 sm:p-8 rounded-2xl bg-surface border border-border-subtle hover:border-border-strong shadow-subtle transition-all duration-200 scroll-mt-24"
    >
      {/* Header with Badges & Actions */}
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-border-subtle">
        <div className="flex items-center space-x-2">
          {verse.number ? (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent border border-accent/20">
              श्लोक {verse.number}
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-subtle text-textSecondary">
              #{index + 1}
            </span>
          )}

          {verse.uvacha && (
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-subtle text-textSecondary font-devanagari">
              {getUvachaDisplay(verse.uvacha)}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-1">
          <button
            type="button"
            onClick={handleCopy}
            className="p-2 rounded-xl text-textMuted hover:text-accent hover:bg-subtle transition-colors"
            title="Copy Sanskrit Verse"
            aria-label="Copy Sanskrit verse"
          >
            {copied ? (
              <Check className="w-4 h-4 text-status-success" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Sanskrit Verse Text */}
      <div className="font-devanagari text-lg sm:text-xl md:text-2xl font-semibold leading-loose text-textPrimary text-center whitespace-pre-line py-2">
        {verse.text}
      </div>

      {/* Commentary (व्याख्या) Section */}
      {verse.vyakhya && verse.vyakhya.text && (
        <div className="mt-6 pt-4 border-t border-border-subtle">
          <button
            type="button"
            onClick={() => setShowVyakhya(!showVyakhya)}
            className="flex items-center justify-between w-full text-left py-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            <span className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>संस्कृत व्याख्या (Commentary)</span>
            </span>
            {showVyakhya ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {showVyakhya && (
            <div className="mt-3 p-4 sm:p-5 rounded-xl bg-subtle/60 border border-border-subtle font-devanagari text-sm sm:text-base leading-relaxed text-textSecondary animate-fadeIn">
              <p className="whitespace-pre-line">{verse.vyakhya.text}</p>
            </div>
          )}
        </div>
      )}
    </article>
  );
}
