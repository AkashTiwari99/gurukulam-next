import { Metadata } from 'next';
import { LibraryHub } from '@/components/library/LibraryHub';
import { Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Library (ग्रन्थागार) | Gurukulam',
  description:
    'Comprehensive digital repository featuring Srimad Valmiki Ramayana, Shlok Mala audio recitations, and scholarly Vedic research publications in interactive and PDF formats.',
};

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-canvas py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>डिजिटल ग्रन्थागार • Sacred Library Hub</span>
          </div>
          <h1 className="font-devanagari text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary tracking-tight">
            शास्त्र, ग्रन्थ एवं डिजिटल वाङ्मय
          </h1>
          <p className="text-sm sm:text-base text-textSecondary max-w-2xl mx-auto leading-relaxed">
            मूल आदिकाव्य वाल्मीकि रामायण, श्लोक संग्रह, और वैदिक शोध ग्रन्थों का एकीकृत डिजिटल पुस्तकालय। यहाँ आप सीधे ऑनलाइन पढ़ सकते हैं या पीडीएफ डाउनलोड कर सकते हैं।
          </p>
        </div>

        {/* Unified Interactive Library Hub */}
        <LibraryHub />
      </div>
    </div>
  );
}
