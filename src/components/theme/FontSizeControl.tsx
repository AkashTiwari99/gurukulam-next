'use client';

import * as React from 'react';
import { Type, Minus, Plus, RotateCcw } from 'lucide-react';

const FONT_SCALES = [
  { label: 'Compact', value: 90 },
  { label: 'Normal', value: 100 },
  { label: 'Large', value: 115 },
  { label: 'X-Large', value: 130 },
];

export function FontSizeControl() {
  const [scale, setScale] = React.useState<number>(100);
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  // Load persisted font scale on mount
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem('gurukulam_font_scale');
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= 80 && parsed <= 160) {
          setScale(parsed);
          document.documentElement.style.fontSize = `${parsed}%`;
          document.documentElement.setAttribute('data-font-scale', parsed.toString());
        }
      }
    } catch (_) {}
  }, []);

  // Close menu on click outside or escape
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  const applyScale = (newScale: number) => {
    const clamped = Math.max(80, Math.min(150, newScale));
    setScale(clamped);
    document.documentElement.style.fontSize = `${clamped}%`;
    document.documentElement.setAttribute('data-font-scale', clamped.toString());
    try {
      localStorage.setItem('gurukulam_font_scale', clamped.toString());
      window.dispatchEvent(new CustomEvent('font-scale-change', { detail: clamped }));
    } catch (_) {}
  };

  const adjustStep = (delta: number) => {
    applyScale(scale + delta);
  };

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className={`h-9 px-2.5 rounded-full border border-border-subtle bg-surface hover:bg-subtle flex items-center space-x-1 transition-all duration-200 text-xs font-semibold ${
          scale !== 100
            ? 'text-accent border-accent/40 bg-accent-soft/30'
            : 'text-textSecondary hover:text-accent'
        } focus:outline-none focus:ring-2 focus:ring-accent min-h-[36px]`}
        title={`Text Size: ${scale}% (Click to adjust)`}
        aria-label="Adjust font size"
        aria-expanded={menuOpen}
      >
        <span className="font-serif font-bold text-sm tracking-tighter">Aa</span>
        {scale !== 100 && (
          <span className="text-[10px] font-mono font-medium text-accent">
            {scale}%
          </span>
        )}
      </button>

      {menuOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-surface border border-border-strong shadow-elevated p-4 space-y-3 z-50 animate-fadeIn text-textPrimary">
          <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
            <span className="text-xs font-bold uppercase tracking-wider text-textMuted">
              Text Size (फ़ॉन्ट आकार)
            </span>
            {scale !== 100 && (
              <button
                type="button"
                onClick={() => applyScale(100)}
                className="text-[11px] text-accent hover:underline flex items-center space-x-0.5"
                title="Reset to 100%"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Stepper with percentage */}
          <div className="flex items-center justify-between bg-subtle/60 rounded-xl p-1.5 border border-border-subtle">
            <button
              type="button"
              onClick={() => adjustStep(-5)}
              disabled={scale <= 80}
              className="w-8 h-8 rounded-lg bg-surface hover:bg-accent-soft hover:text-accent disabled:opacity-40 border border-border-subtle flex items-center justify-center transition-colors"
              title="Decrease size"
              aria-label="Decrease text size"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>

            <span className="font-mono text-xs font-bold text-textPrimary">
              {scale}%
            </span>

            <button
              type="button"
              onClick={() => adjustStep(5)}
              disabled={scale >= 150}
              className="w-8 h-8 rounded-lg bg-surface hover:bg-accent-soft hover:text-accent disabled:opacity-40 border border-border-subtle flex items-center justify-center transition-colors"
              title="Increase size"
              aria-label="Increase text size"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Preset Buttons */}
          <div className="grid grid-cols-4 gap-1.5 pt-1">
            {FONT_SCALES.map((preset) => (
              <button
                key={preset.value}
                type="button"
                onClick={() => applyScale(preset.value)}
                className={`py-1.5 rounded-lg text-[11px] font-semibold border transition-all ${
                  scale === preset.value
                    ? 'bg-accent text-on-accent border-accent shadow-xs'
                    : 'bg-surface hover:bg-subtle text-textSecondary border-border-subtle'
                }`}
              >
                {preset.value}%
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
