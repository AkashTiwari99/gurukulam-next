'use client';

import * as React from 'react';
import { formatShlokaLines, getShlokaMeterClass } from '@/lib/formatShloka';

interface ShlokaLineRendererProps {
  text: string;
  className?: string;
  lineClassName?: string;
  overrideMeterClass?: string;
}

export function ShlokaLineRenderer({
  text,
  className = '',
  lineClassName = '',
  overrideMeterClass,
}: ShlokaLineRendererProps) {
  const lines = React.useMemo(() => formatShlokaLines(text), [text]);
  const meterClass = React.useMemo(
    () => overrideMeterClass || getShlokaMeterClass(lines),
    [overrideMeterClass, lines]
  );

  // Check if this is a prose passage (e.g. Mangala #17 preface)
  const isProse = lines.length > 0 && lines.some((l) => l.length > 150);

  if (lines.length === 0) {
    return null;
  }

  if (isProse) {
    return (
      <div className={`font-devanagari text-textPrimary leading-relaxed space-y-3 text-left sm:text-justify text-sm sm:text-base ${className}`}>
        {lines.map((p, idx) => (
          <p key={idx} className="break-words">
            {p}
          </p>
        ))}
      </div>
    );
  }

  return (
    <div className={`shloka-container ${className}`}>
      <div
        className={`font-devanagari font-semibold text-textPrimary text-center py-2 space-y-1.5 sm:space-y-2 ${meterClass}`}
      >
        {lines.map((line, idx) => (
          <span
            key={idx}
            className={`shloka-line ${lineClassName}`}
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}
