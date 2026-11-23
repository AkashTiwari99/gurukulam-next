import { Metadata } from 'next';
import { VedicKeyboard } from '@/components/keyboard/VedicKeyboard';
import { Keyboard, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vedic Devanagari Virtual Keyboard | Gurukulam',
  description: 'Type Sanskrit, Vedic mantras, Samavedic svaras, and Devanagari diacritics directly in your browser with our responsive virtual keyboard.',
};

export default function KeyboardPage() {
  return (
    <div className="min-h-screen bg-canvas py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>वैदिक देवनागरी टङ्कण यन्त्र</span>
          </div>
          <h1 className="font-devanagari text-3xl sm:text-4xl font-bold text-textPrimary">
            Vedic Sanskrit Virtual Keyboard
          </h1>
          <p className="text-sm text-textSecondary max-w-xl mx-auto">
            स्वर, व्यञ्जन, ऋग्वैदिक एवं सामवैदिक उदात्त-अनुदात्त-स्वरित चिह्नों सहित शुद्ध वैदिक संस्कृत टंकण के लिए आधुनिक कीबोर्ड।
          </p>
        </div>

        <VedicKeyboard />
      </div>
    </div>
  );
}
