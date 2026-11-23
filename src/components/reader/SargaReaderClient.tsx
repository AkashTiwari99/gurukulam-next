'use client';

import * as React from 'react';
import { ShlokaCard, Verse } from './ShlokaCard';
import { Search, ZoomIn, ZoomOut, Eye, EyeOff, Bookmark, Share2, Check } from 'lucide-react';

interface SargaReaderClientProps {
  verses: Verse[];
  kandaTitle: string;
  sargaTitle: string;
  sargaNum: number;
  totalVerses: number;
}

export function SargaReaderClient({
  verses,
  kandaTitle,
  sargaTitle,
  sargaNum,
  totalVerses,
}: SargaReaderClientProps) {
  const [fontSizeLevel, setFontSizeLevel] = React.useState<number>(1); // 0: Normal, 1: Large, 2: X-Large
  const [expandAll, setExpandAll] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [bookmarks, setBookmarks] = React.useState<Record<string, boolean>>({});

  // Load bookmarks & font size from localStorage
  React.useEffect(() => {
    try {
      const savedBm = localStorage.getItem('gurukulam_bookmarks');
      if (savedBm) setBookmarks(JSON.parse(savedBm));
      const savedFs = localStorage.getItem('gurukulam_reader_font');
      if (savedFs) setFontSizeLevel(parseInt(savedFs, 10));
    } catch (_) {}
  }, []);

  const toggleBookmark = (verseId: string) => {
    const updated = { ...bookmarks, [verseId]: !bookmarks[verseId] };
    if (!updated[verseId]) delete updated[verseId];
    setBookmarks(updated);
    try {
      localStorage.setItem('gurukulam_bookmarks', JSON.stringify(updated));
    } catch (_) {}
  };

  const changeFontSize = (delta: number) => {
    const next = Math.max(0, Math.min(2, fontSizeLevel + delta));
    setFontSizeLevel(next);
    try {
      localStorage.setItem('gurukulam_reader_font', next.toString());
    } catch (_) {}
  };

  // Font size mapping
  const verseFontClasses = [
    'text-base sm:text-lg md:text-xl leading-relaxed',
    'text-lg sm:text-xl md:text-2xl leading-loose',
    'text-xl sm:text-2xl md:text-3xl leading-loose',
  ][fontSizeLevel];

  // Verse filtering
  const query = searchQuery.trim().toLowerCase();
  const filteredVerses = query
    ? verses.filter(
        (v) =>
          v.text.toLowerCase().includes(query) ||
          (v.number && v.number.includes(query)) ||
          (v.uvacha && v.uvacha.toLowerCase().includes(query)) ||
          (v.vyakhya && v.vyakhya.text.toLowerCase().includes(query))
      )
    : verses;

  return (
    <div className="space-y-6">
      {/* Sarga Header Title */}
      <div className="text-center space-y-3">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent uppercase tracking-wider">
          {kandaTitle}
        </span>
        <h1 className="font-devanagari text-2xl sm:text-3xl md:text-4xl font-bold text-textPrimary">
          {sargaTitle}
        </h1>
        <p className="text-xs sm:text-sm text-textMuted">
          कुल श्लोक संख्या: <span className="font-semibold text-textPrimary">{totalVerses}</span>
          {query && ` • मिले: ${filteredVerses.length}`}
        </p>
      </div>

      {/* Reader Controls Toolbar (Sticky or docked) */}
      <div className="p-3 sm:p-4 rounded-2xl bg-surface border border-border-subtle shadow-subtle flex flex-wrap items-center justify-between gap-3">
        {/* Search within chapter */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-3.5 h-3.5 text-textMuted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="इस सर्ग में खोजें (Search in this sarga)..."
            className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-border-subtle bg-subtle/40 text-textPrimary text-xs focus:outline-none focus:border-accent"
          />
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          {/* Font Size Adjuster */}
          <div className="flex items-center rounded-xl border border-border-subtle bg-subtle/50 p-0.5">
            <button
              type="button"
              onClick={() => changeFontSize(-1)}
              disabled={fontSizeLevel <= 0}
              className="p-1.5 rounded-lg text-textSecondary hover:text-textPrimary disabled:opacity-30 disabled:hover:text-textSecondary text-xs"
              title="अक्षर छोटे करें (A-)"
              aria-label="Decrease font size"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 text-[11px] font-semibold text-textMuted">
              {['A', 'A+', 'A++'][fontSizeLevel]}
            </span>
            <button
              type="button"
              onClick={() => changeFontSize(1)}
              disabled={fontSizeLevel >= 2}
              className="p-1.5 rounded-lg text-textSecondary hover:text-textPrimary disabled:opacity-30 disabled:hover:text-textSecondary text-xs"
              title="अक्षर बड़े करें (A+)"
              aria-label="Increase font size"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Expand/Collapse All Commentary Toggle */}
          <button
            type="button"
            onClick={() => setExpandAll(!expandAll)}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-border-subtle bg-subtle/50 hover:bg-subtle text-textSecondary hover:text-textPrimary text-xs font-medium transition-colors"
            title={expandAll ? 'सभी व्याख्या समेटें' : 'सभी व्याख्या खोलें'}
          >
            {expandAll ? <EyeOff className="w-3.5 h-3.5 text-accent" /> : <Eye className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">
              {expandAll ? 'व्याख्या समेटें' : 'व्याख्या विस्तार'}
            </span>
          </button>
        </div>
      </div>

      {/* Verses List */}
      <div className="space-y-6">
        {filteredVerses.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-surface border border-border-subtle text-textMuted space-y-2">
            <p className="text-base font-semibold">कोई श्लोक नहीं मिला</p>
            <p className="text-xs">कृपया अन्य शब्द या संख्या टाइप करें।</p>
          </div>
        ) : (
          filteredVerses.map((verse, idx) => (
            <ShlokaCard
              key={verse.id || idx}
              verse={verse}
              index={idx}
              fontSizeClass={verseFontClasses}
              forceExpandVyakhya={expandAll}
              isBookmarked={!!bookmarks[verse.id]}
              onToggleBookmark={() => toggleBookmark(verse.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
