'use client';

import * as React from 'react';
import { Copy, Check, ChevronDown, ChevronUp, BookOpen, Bookmark, Share2 } from 'lucide-react';

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
  fontSizeClass?: string;
  forceExpandVyakhya?: boolean;
  isBookmarked?: boolean;
  onToggleBookmark?: () => void;
}

export function ShlokaCard({
  verse,
  index,
  fontSizeClass = 'text-lg sm:text-xl md:text-2xl leading-loose',
  forceExpandVyakhya = false,
  isBookmarked = false,
  onToggleBookmark,
}: ShlokaCardProps) {
  const [showVyakhya, setShowVyakhya] = React.useState(forceExpandVyakhya);
  const [copied, setCopied] = React.useState(false);

  // Sync when parent changes forceExpandVyakhya
  React.useEffect(() => {
    setShowVyakhya(forceExpandVyakhya);
  }, [forceExpandVyakhya]);

  const handleCopy = () => {
    navigator.clipboard.writeText(verse.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}#${verse.id}` : '';
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `वाल्मीकि रामायण श्लोक ${verse.number || index + 1}`,
          text: verse.text,
          url,
        });
        return;
      } catch (_) {}
    }
    // Fallback: Copy URL with hash
    navigator.clipboard.writeText(url || verse.text);
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
      className={`p-6 sm:p-8 rounded-3xl bg-surface border shadow-subtle transition-all duration-200 scroll-mt-24 ${
        isBookmarked ? 'border-accent bg-accent-soft/20' : 'border-border-subtle hover:border-border-strong'
      }`}
    >
      {/* Header with Badges & Actions */}
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-border-subtle">
        <div className="flex items-center space-x-2">
          {verse.number ? (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent border border-accent/20">
              श्लोक {verse.number}
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-subtle text-textSecondary">
              #{index + 1}
            </span>
          )}

          {verse.uvacha && (
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-subtle text-textSecondary font-devanagari">
              {getUvachaDisplay(verse.uvacha)}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-1">
          {/* Bookmark Button */}
          {onToggleBookmark && (
            <button
              type="button"
              onClick={onToggleBookmark}
              className={`p-2 rounded-xl transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center ${
                isBookmarked
                  ? 'text-accent bg-accent-soft'
                  : 'text-textMuted hover:text-accent hover:bg-subtle'
              }`}
              title={isBookmarked ? 'बुकमार्क हटाया' : 'बुकमार्क करें'}
              aria-label="Bookmark shloka"
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>
          )}

          {/* Share Button */}
          <button
            type="button"
            onClick={handleShare}
            className="p-2 rounded-xl text-textMuted hover:text-accent hover:bg-subtle transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
            title="श्लोक शेयर करें"
            aria-label="Share shloka"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Copy Verse Button */}
          <button
            type="button"
            onClick={handleCopy}
            className="p-2 rounded-xl text-textMuted hover:text-accent hover:bg-subtle transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
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
      <div
        className={`font-devanagari font-semibold text-textPrimary text-center whitespace-pre-line break-words py-3 transition-all ${fontSizeClass}`}
      >
        {verse.text}
      </div>

      {/* Commentary (व्याख्या) Section */}
      {verse.vyakhya && verse.vyakhya.text && (
        <div className="mt-6 pt-4 border-t border-border-subtle">
          <button
            type="button"
            onClick={() => setShowVyakhya(!showVyakhya)}
            className="flex items-center justify-between w-full text-left py-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors min-h-[44px]"
          >
            <span className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4 flex-shrink-0" />
              <span>संस्कृत व्याख्या (Commentary)</span>
            </span>
            {showVyakhya ? (
              <ChevronUp className="w-4 h-4 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-4 h-4 flex-shrink-0" />
            )}
          </button>

          {showVyakhya && (
            <div className="mt-3 p-4 sm:p-5 rounded-2xl bg-subtle/60 border border-border-subtle font-devanagari text-sm sm:text-base leading-relaxed text-textSecondary animate-fadeIn">
              <p className="whitespace-pre-line">{verse.vyakhya.text}</p>
            </div>
          )}
        </div>
      )}
    </article>
  );
}
