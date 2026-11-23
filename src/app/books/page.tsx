import { Metadata } from 'next';
import { BookOpen, FileText, Download, Sparkles, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vedic Scriptures & Digital Library | Gurukulam',
  description: 'Explore the complete Valmiki Ramayana, Shlok Mala, and ancient Vedic wisdom literature in digital and PDF formats.',
};

const PDF_BOOKS = [
  {
    title: 'प्रथम श्लोक माला',
    file: '/pdf/प्रथम श्लोक माला.pdf',
    description: 'वाल्मीकि रामायण के चयनित श्लोक, अन्वय और भावार्थ सहित सचित्र संग्रह।',
  },
  {
    title: 'Vedic Wisdom in the 21st Century',
    file: '/pdf/Vedic Wisdom.pdf',
    description: 'Modern applications of ancient Indian epistemology and consciousness studies.',
  },
  {
    title: 'REVIVING VEDIC KNOWLEDGE',
    file: '/pdf/REVIVING VEDIC KNOWLEDGE.pdf',
    description: 'Foundations of traditional Gurukul pedagogies and scientific inquiry.',
  },
  {
    title: 'Ancient Educational Structures',
    file: '/pdf/Ancient Educational Structures.pdf',
    description: 'A scholarly overview of Takshashila, Nalanda, and forest academies.',
  },
  {
    title: 'Social Entrepreneurship with Vedic Wisdom',
    file: '/pdf/Social entrepreneurship with vedic wisdom.pdf',
    description: 'Dharmic commerce, ethics, and community sustainability.',
  },
  {
    title: 'The Wisdom of the Hindus',
    file: '/pdf/The wisdom of the Hindus.pdf',
    description: 'Classical insights from Upanishads, Darshanas, and sacred epics.',
  },
];

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-canvas py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ग्रन्थागार • Sacred Library</span>
          </div>
          <h1 className="font-devanagari text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary">
            शास्त्र, ग्रन्थ एवं डिजिटल वाङ्मय
          </h1>
          <p className="text-sm sm:text-base text-textSecondary max-w-2xl mx-auto">
            मूल आदिकाव्य वाल्मीकि रामायण, श्लोक संग्रह, और वैदिक शोध ग्रन्थों का विस्तृत डिजिटल पुस्तकालय।
          </p>
        </div>

        {/* Primary Scripture Gateways */}
        <section className="space-y-6">
          <h2 className="font-devanagari text-2xl font-bold text-textPrimary pb-2 border-b border-border-subtle">
            प्रमुख डिजिटल ग्रन्थ (Interactive Scriptures)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Ramayana Card */}
            <div className="p-8 rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent uppercase tracking-wider">
                  आदिकाव्यम्
                </span>
                <h3 className="font-devanagari text-2xl font-bold text-textPrimary">
                  श्रीमद्वाल्मीकिरामायणम्
                </h3>
                <p className="text-sm text-textSecondary leading-relaxed">
                  सम्पूर्ण ७ काण्ड, ६४५ सर्ग, और २३,०००+ श्लोक। मङ्गल श्लोक से आरम्भ करें या सीधे बालकाण्ड, अयोध्याकाण्ड आदि काण्डों में जाएँ।
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border-subtle flex items-center justify-between">
                <a
                  href="/books/ramayana"
                  className="px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-on-accent text-xs font-semibold transition-colors flex items-center space-x-1"
                >
                  <span>रामायण प्रवेश</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <span className="text-xs text-textMuted font-mono">६४५ सर्ग उपलब्ध</span>
              </div>
            </div>

            {/* Shlok Mala Card */}
            <div className="p-8 rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent uppercase tracking-wider">
                  ध्वनि एवं भावार्थ
                </span>
                <h3 className="font-devanagari text-2xl font-bold text-textPrimary">
                  श्लोक माला (Shlok Mala)
                </h3>
                <p className="text-sm text-textSecondary leading-relaxed">
                  रामायण के चयनित पवित्र श्लोक, ऑडियो उच्चारण, हिन्दी भावार्थ एवं अंग्रेजी अनुवाद सहित। माला १ और माला २ का संग्रह।
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border-subtle flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <a
                    href="/books/shlok-mala/1"
                    className="px-4 py-2 rounded-full bg-accent hover:bg-accent-hover text-on-accent text-xs font-semibold transition-colors"
                  >
                    माला १
                  </a>
                  <a
                    href="/books/shlok-mala/2"
                    className="px-4 py-2 rounded-full border border-border-subtle bg-subtle hover:bg-surface text-textPrimary text-xs font-semibold transition-colors"
                  >
                    माला २
                  </a>
                </div>
                <span className="text-xs text-textMuted font-mono">३४९ श्लोक ऑडियो</span>
              </div>
            </div>
          </div>
        </section>

        {/* Downloadable PDF Library */}
        <section className="space-y-6 pt-8 border-t border-border-subtle">
          <div className="flex items-center justify-between">
            <h2 className="font-devanagari text-2xl font-bold text-textPrimary">
              शोध एवं अध्ययन ग्रन्थ (PDF Library)
            </h2>
            <span className="text-xs text-textMuted">{PDF_BOOKS.length} ग्रन्थ उपलब्ध</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PDF_BOOKS.map((b, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-surface border border-border-subtle hover:border-border-strong shadow-subtle flex flex-col justify-between transition-all"
              >
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-accent-soft text-accent flex items-center justify-center mb-3">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="font-devanagari font-bold text-base text-textPrimary">
                    {b.title}
                  </h4>
                  <p className="text-xs text-textSecondary leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-border-subtle flex items-center justify-between">
                  <a
                    href={b.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-accent hover:text-accent-hover flex items-center space-x-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
