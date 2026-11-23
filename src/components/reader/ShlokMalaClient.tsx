'use client';

import * as React from 'react';
import {
  Volume2,
  Pause,
  Play,
  Copy,
  Check,
  X,
  FastForward,
  RotateCcw,
} from 'lucide-react';

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

function formatTime(seconds: number): string {
  if (!seconds || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export function ShlokMalaClient({ data }: { data: MalaData }) {
  const [activeShlok, setActiveShlok] = React.useState<ShlokItem | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [playbackRate, setPlaybackRate] = React.useState(1.0);
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const getAudioSrc = (audioFile: string) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return `${basePath}/audio/shlok_mala/${audioFile}`;
  };

  const toggleAudio = (shlok: ShlokItem) => {
    if (!shlok.audio) return;
    const audioSrc = getAudioSrc(shlok.audio);

    if (activeShlok?.id === shlok.id && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else if (activeShlok?.id === shlok.id && !isPlaying) {
      audioRef.current?.play().catch((err) => console.error('Audio play error:', err));
      setIsPlaying(true);
    } else {
      setActiveShlok(shlok);
      if (audioRef.current) {
        audioRef.current.src = audioSrc;
        audioRef.current.playbackRate = playbackRate;
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.error('Audio play error:', err));
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = nextTime;
      setCurrentTime(nextTime);
    }
  };

  const cycleSpeed = () => {
    const speeds = [1.0, 1.25, 1.5, 0.75];
    const nextIdx = (speeds.indexOf(playbackRate) + 1) % speeds.length;
    const nextSpeed = speeds[nextIdx];
    setPlaybackRate(nextSpeed);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextSpeed;
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);

    // Auto-advance to next shloka in mala
    if (activeShlok) {
      const currentIndex = data.shlokas.findIndex((s) => s.id === activeShlok.id);
      if (currentIndex !== -1 && currentIndex < data.shlokas.length - 1) {
        const nextShlok = data.shlokas[currentIndex + 1];
        if (nextShlok.audio) {
          toggleAudio(nextShlok);
        }
      }
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const closePlayer = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setActiveShlok(null);
    setCurrentTime(0);
  };

  return (
    <div className="space-y-6 pb-28">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={handleEnded}
      />

      {/* Shloka Cards List */}
      {data.shlokas.map((shlok) => {
        const isThisActive = activeShlok?.id === shlok.id;
        const isThisPlaying = isThisActive && isPlaying;

        return (
          <article
            key={shlok.id}
            id={shlok.id}
            className={`p-6 sm:p-8 rounded-2xl bg-surface border transition-all duration-200 shadow-subtle ${
              isThisActive
                ? 'border-accent ring-1 ring-accent/30 bg-surface'
                : 'border-border-subtle hover:border-border-strong'
            }`}
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
                    onClick={() => toggleAudio(shlok)}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all shadow-subtle ${
                      isThisPlaying
                        ? 'bg-accent text-on-accent scale-105'
                        : 'border border-border-subtle bg-subtle hover:bg-accent-soft text-textSecondary hover:text-accent'
                    }`}
                    title="उच्चारण सुनें"
                  >
                    {isThisPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>विराम (Pause)</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-accent" />
                        <span>उच्चारण सुनें (Play)</span>
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

      {/* Floating Bottom Audio Player Bar */}
      {activeShlok && (
        <div className="fixed bottom-4 left-4 right-4 max-w-2xl mx-auto z-40 bg-surface/95 backdrop-blur-md border border-border-strong rounded-3xl p-3 sm:p-4 shadow-elevated animate-fadeIn">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center space-x-3 overflow-hidden">
              <button
                type="button"
                onClick={() => toggleAudio(activeShlok)}
                className="w-10 h-10 rounded-full bg-accent text-on-accent flex items-center justify-center flex-shrink-0 hover:bg-accent-hover transition-colors shadow-subtle"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" />
                )}
              </button>

              <div className="min-w-0">
                <p className="text-xs font-bold text-accent truncate">
                  {activeShlok.badge}
                </p>
                <p className="text-xs text-textSecondary truncate font-devanagari">
                  {activeShlok.sanskrit.split('\n')[0]}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 flex-shrink-0">
              {/* Playback speed */}
              <button
                type="button"
                onClick={cycleSpeed}
                className="px-2 py-1 rounded-lg border border-border-subtle text-[11px] font-semibold text-textSecondary hover:text-accent hover:bg-subtle transition-colors"
                title="Playback Speed"
              >
                {playbackRate}x
              </button>

              {/* Close */}
              <button
                type="button"
                onClick={closePlayer}
                className="p-1.5 rounded-full text-textMuted hover:text-textPrimary hover:bg-subtle transition-colors"
                aria-label="Close player"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Seek progress bar & time */}
          <div className="flex items-center space-x-3 text-[11px] text-textMuted font-mono">
            <span className="w-8 text-right">{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-subtle rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <span className="w-8">{formatTime(duration)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
