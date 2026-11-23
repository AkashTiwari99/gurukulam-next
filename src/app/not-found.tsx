import Link from 'next/link';
import { Compass, BookOpen, Home, Keyboard, Phone, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-canvas flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center space-y-8 bg-surface p-8 sm:p-12 rounded-3xl border border-border-subtle shadow-subtle">
        {/* Vedic Symbol Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>४०४ • अनधिगत पथः</span>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="font-devanagari text-4xl sm:text-5xl font-bold text-textPrimary tracking-tight">
            पृष्ठं न लब्धम्
          </h1>
          <p className="text-sm sm:text-base text-textSecondary leading-relaxed">
            The page or scripture you are looking for does not exist or has been relocated within our unified digital repository.
          </p>
        </div>

        {/* Quick Recovery Navigation Links */}
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <Link
            href="/"
            className="p-3.5 rounded-2xl border border-border-subtle bg-subtle/50 hover:bg-accent-soft hover:border-accent flex items-center space-x-3 transition-colors group min-h-[44px]"
          >
            <div className="w-8 h-8 rounded-xl bg-surface flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
              <Home className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-textPrimary">मुखपृष्ठ (Home)</p>
              <p className="text-[11px] text-textMuted">Return to front portal</p>
            </div>
          </Link>

          <Link
            href="/library"
            className="p-3.5 rounded-2xl border border-border-subtle bg-subtle/50 hover:bg-accent-soft hover:border-accent flex items-center space-x-3 transition-colors group min-h-[44px]"
          >
            <div className="w-8 h-8 rounded-xl bg-surface flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-textPrimary">ग्रन्थागार (Library Hub)</p>
              <p className="text-[11px] text-textMuted">All scriptures & PDFs</p>
            </div>
          </Link>

          <Link
            href="/books/ramayana"
            className="p-3.5 rounded-2xl border border-border-subtle bg-subtle/50 hover:bg-accent-soft hover:border-accent flex items-center space-x-3 transition-colors group min-h-[44px]"
          >
            <div className="w-8 h-8 rounded-xl bg-surface flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-textPrimary">वाल्मीकि रामायण</p>
              <p className="text-[11px] text-textMuted">7 Kandas & 645 Sargas</p>
            </div>
          </Link>

          <Link
            href="/keyboard"
            className="p-3.5 rounded-2xl border border-border-subtle bg-subtle/50 hover:bg-accent-soft hover:border-accent flex items-center space-x-3 transition-colors group min-h-[44px]"
          >
            <div className="w-8 h-8 rounded-xl bg-surface flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
              <Keyboard className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-textPrimary">Vedic Keyboard</p>
              <p className="text-[11px] text-textMuted">Vedic Devanagari typing</p>
            </div>
          </Link>
        </div>

        {/* Contact help link */}
        <div className="pt-4 border-t border-border-subtle flex items-center justify-center space-x-2 text-xs text-textMuted">
          <span>Need assistance?</span>
          <Link href="/contact" className="text-accent hover:underline font-semibold flex items-center space-x-1">
            <Phone className="w-3 h-3" />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
