'use client';

import * as React from 'react';
import { Volume2, Pause, Copy, Check } from 'lucide-react';

interface ShlokItem {
  id: string;
  badge: string;
  sanskrit: string;
  hindi: string;
  english: string;
  audio: string;
}

interface MalaData {
  malaNumber: number;
  title: string;
  totalShlokas: number;
  shlokas: ShlokItem[];
}

export function ShlokMalaClient({ data }: { data: MalaData }) {
  const [activeAudio, setActiveAudio] = React.useState<string | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const toggleAudio = (audioFile: string) => {
    if (!audioFile) return;
    const audioSrc = `/audio/shlok_mala/${audioFile}`;

    if (activeAudio === audioSrc && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.src = audioSrc;
        audioRef.current.play();
        setActiveAudio(audioSrc);
        setIsPlaying(true);
      }
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      <audio
        ref={audioRef}
        onEnded={() => {
          setIsPlaying(false);
          setActiveAudio(null);
        }}
      />

      {data.shlokas.map((shlok) => {
        const isThisPlaying =
          isPlaying && activeAudio === `/audio/shlok_mala/${shlok.audio}`;

        return (
          <article
            key={shlok.id}
            id={shlok.id}
            className="p-6 sm:p-8 rounded-2xl bg-surface border border-border-subtle hover:border-border-strong shadow-subtle transition-all duration-200"
          >
            {/* Header Badge & Audio Control */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-subtle">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent-soft text-accent border border-accent/20">
                {shlok.badge}
              </span>

              <div className="flex items-center space-x-2">
                {shlok.audio && (
                  <button
                    type="button"
                    onClick={() => toggleAudio(shlok.audio)}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      isThisPlaying
                        ? 'bg-accent text-on-accent'
                        : 'border border-border-subtle bg-subtle hover:bg-accent-soft text-textSecondary hover:text-accent'
                    }`}
                    title="उच्चारण सुनें"
                  >
                    {isThisPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>विराम</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-accent" />
                        <span>उच्चारण सुनें</span>
                      </>
                    )}
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => handleCopy(shlok.id, shlok.sanskrit)}
                  className="p-1.5 rounded-lg text-textMuted hover:text-accent hover:bg-subtle transition-colors"
                  title="Copy Shloka"
                >
                  {copiedId === shlok.id ? (
                    <Check className="w-4 h-4 text-status-success" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Sanskrit Verse */}
            <div className="font-devanagari text-lg sm:text-xl font-semibold leading-loose text-textPrimary text-center whitespace-pre-line py-3">
              {shlok.sanskrit}
            </div>

            {/* Translations */}
            <div className="mt-6 pt-4 border-t border-border-subtle space-y-4">
              {shlok.hindi && (
                <div className="p-4 rounded-xl bg-subtle/50 border border-border-subtle font-devanagari text-sm sm:text-base leading-relaxed text-textSecondary">
                  <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-accent-soft text-accent mb-2">
                    हिन्दी
                  </span>
                  <p>{shlok.hindi}</p>
                </div>
              )}

              {shlok.english && (
                <div className="p-4 rounded-xl bg-subtle/30 border border-border-subtle text-xs sm:text-sm leading-relaxed text-textMuted italic">
                  <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-surface border border-border-subtle text-textSecondary mb-2 not-italic">
                    English
                  </span>
                  <p>{shlok.english}</p>
                </div>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
