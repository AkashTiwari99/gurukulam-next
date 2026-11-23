import { Metadata } from 'next';
import { BookOpen, Sparkles, Keyboard, Compass, ArrowRight, ShieldCheck, Flame, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gurukulam | Reviving Ancient Vedic Wisdom',
  description: 'A minimalist digital Gurukul dedicated to authentic Vedic scriptures, digitized Sanskrit texts, and sacred study tools.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold border border-accent/20 animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5" />
            <span>गुरुकुलम् • Reviving Sacred Sanskrit & Vedic Heritage</span>
          </div>

          <h1 className="font-devanagari text-4xl sm:text-5xl md:text-6xl font-extrabold text-textPrimary tracking-tight leading-tight">
            सनातन ज्ञान एवं वैदिक वाङ्मय का आधुनिक प्रवेशद्वार
          </h1>

          <p className="text-base sm:text-lg text-textSecondary max-w-2xl mx-auto leading-relaxed">
            श्रीमद्वाल्मीकिरामायणम् के सम्पूर्ण २४,००० श्लोक, प्रामाणिक संस्कृत व्याख्या, श्लोकमाला ऑडियो पठन एवं वैदिक टंकण यन्त्र — शुद्ध, निर्मल और आधुनिक अनुभव के साथ।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a
              href="/books/ramayana"
              className="px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-on-accent text-sm font-semibold transition-all shadow-subtle hover:shadow-elevated flex items-center space-x-2 group"
            >
              <BookOpen className="w-4 h-4" />
              <span>वाल्मीकि रामायण पढ़ें</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/books/shlok-mala/1"
              className="px-6 py-3 rounded-full border border-border-subtle bg-surface hover:bg-subtle text-textPrimary text-sm font-semibold transition-all shadow-subtle"
            >
              श्लोक माला (Audio)
            </a>
            <a
              href="/keyboard"
              className="px-6 py-3 rounded-full border border-border-subtle bg-surface hover:bg-subtle text-textSecondary hover:text-textPrimary text-sm font-medium transition-all"
            >
              वैदिक कीबोर्ड
            </a>
          </div>
        </div>
      </section>

      {/* Featured Gateways Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border-subtle">
        <div className="text-center space-y-2 mb-12">
          <h2 className="font-devanagari text-2xl sm:text-3xl font-bold text-textPrimary">
            प्रमुख अध्ययन अनुभाग
          </h2>
          <p className="text-sm text-textMuted">
            अध्ययन, पठन एवं अनुसंधान के लिए मुख्य स्तम्भ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Valmiki Ramayana */}
          <a
            href="/books/ramayana"
            className="p-8 rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle hover:shadow-elevated transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-soft text-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-devanagari text-2xl font-bold text-textPrimary group-hover:text-accent transition-colors">
                श्रीमद्वाल्मीकिरामायणम्
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                बालकाण्ड से लेकर उत्तरकाण्ड तक सातों काण्डों के सम्पूर्ण ६४५ सर्ग एवं २३,०००+ श्लोक प्रामाणिक संस्कृत व्याख्या सहित।
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-semibold text-accent">
              <span>मङ्गल श्लोक एवं काण्ड देखें</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 2: Shlok Mala */}
          <a
            href="/books/shlok-mala/1"
            className="p-8 rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle hover:shadow-elevated transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-soft text-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-devanagari text-2xl font-bold text-textPrimary group-hover:text-accent transition-colors">
                श्लोक माला संग्रह
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                आदिकाव्य के विशिष्ट श्लोकों का संग्रह, शुद्ध वैदिक उच्चारण हेतु इन-बिल्ट ऑडियो प्लेयर, हिन्दी भावार्थ और आङ्ग्ल अनुवाद।
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-semibold text-accent">
              <span>उच्चारण एवं भावार्थ सुनें</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 3: Vedic Keyboard */}
          <a
            href="/keyboard"
            className="p-8 rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle hover:shadow-elevated transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-soft text-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Keyboard className="w-6 h-6" />
              </div>
              <h3 className="font-devanagari text-2xl font-bold text-textPrimary group-hover:text-accent transition-colors">
                वैदिक देवनागरी कीबोर्ड
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                ऋग्वेद, यजुर्वेद और सामवेद के स्वरित, उदात्त, अनुदात्त एवं दुर्लभ चिह्नों को किसी भी मोबाइल या कंप्यूटर पर सीधे टाइप करें।
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-semibold text-accent">
              <span>टंकण आरम्भ करें</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </section>

      {/* Gurukul Vision Section */}
      <section className="bg-surface/50 border-t border-border-subtle py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-subtle text-textSecondary text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 text-accent" />
            <span>प्राचीन परम्परा • आधुनिक तकनीक</span>
          </div>

          <h2 className="font-devanagari text-3xl sm:text-4xl font-bold text-textPrimary">
            ऋषि संस्कृति का पुनरुद्धार
          </h2>

          <p className="text-base text-textSecondary leading-relaxed">
            गुरुकुलम का संकल्प भारतीय ज्ञान परंपरा, उपनिषदों, वेदों और रामायण की कालजयी शिक्षाओं को बिना किसी मिलावट के अगली पीढ़ी तक सहज, सुंदर और डिजिटल रूप में पहुंचाना है।
          </p>

          <div className="pt-4 flex justify-center">
            <a
              href="/about"
              className="px-6 py-2.5 rounded-full border border-border-subtle hover:border-accent text-sm font-semibold text-textPrimary hover:text-accent transition-colors"
            >
              हमारे बारे में और जानें →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
