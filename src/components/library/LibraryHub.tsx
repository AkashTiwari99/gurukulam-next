'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  FileText,
  Download,
  ExternalLink,
  Search,
  Sparkles,
  ChevronRight,
  Headphones,
  ScrollText,
  Bookmark,
} from 'lucide-react';

export interface LibraryItem {
  id: string;
  title: string;
  sanskritTitle?: string;
  category: 'scripture' | 'pdf';
  type: string;
  description: string;
  authorOrSource?: string;
  linkHref: string;
  pdfHref?: string;
  isInteractive?: boolean;
  hasAudio?: boolean;
  totalStats?: string;
  badge?: string;
}

export const LIBRARY_COLLECTION: LibraryItem[] = [
  // 1. Interactive Core Scriptures
  {
    id: 'ramayana',
    title: 'Srimad Valmiki Ramayana',
    sanskritTitle: 'श्रीमद्वाल्मीकिरामायणम्',
    category: 'scripture',
    type: 'आदिकाव्यम् • Epic Sanskrit Scripture',
    description:
      'The foundational epic of Sanatan Dharma in 7 Kandas, 645 Sargas, and 23,358 verses. Features traditional Mangala Shlokas, speaker attribution, and collapsible Sanskrit commentaries.',
    authorOrSource: 'Maharshi Valmiki',
    linkHref: '/books/ramayana',
    isInteractive: true,
    totalStats: '७ काण्ड • ६४५ सर्ग • २३,३५८ श्लोक',
    badge: 'Core Scripture',
  },
  {
    id: 'shlok-mala-1',
    title: 'Shlok Mala — Volume 1 (With Audio)',
    sanskritTitle: 'श्लोक माला — प्रथम भाग',
    category: 'scripture',
    type: 'पवित्र श्लोक संग्रह • Chanting & Recitation',
    description:
      'Handpicked verses from the Valmiki Ramayana with authentic vocal recitations, Hindi bhavartha, and English translations. Complete with floating audio player and speed controls.',
    authorOrSource: 'Valmiki Ramayana Collection',
    linkHref: '/books/shlok-mala/1',
    isInteractive: true,
    hasAudio: true,
    totalStats: '१२० श्लोक • ऑडियो सहित',
    badge: 'Audio Player',
  },
  {
    id: 'shlok-mala-2',
    title: 'Shlok Mala — Volume 2',
    sanskritTitle: 'श्लोक माला — द्वितीय भाग',
    category: 'scripture',
    type: 'नीति एवं दर्शन • Dharmic Maxims',
    description:
      'An inspiring anthology of classical Sanskrit verses focusing on righteous leadership, filial devotion, fortitude, and ethical governance.',
    authorOrSource: 'Valmiki Ramayana Collection',
    linkHref: '/books/shlok-mala/2',
    isInteractive: true,
    totalStats: '२२९ श्लोक संग्रह',
    badge: 'Wisdom Verses',
  },

  // 2. Downloadable & Online PDF Research Granthas (from legacy website)
  {
    id: 'pratham-shlok-mala-pdf',
    title: 'प्रथम श्लोक माला (सचित्र संग्रह)',
    sanskritTitle: 'प्रथम श्लोक माला',
    category: 'pdf',
    type: 'सचित्र ग्रन्थ • Illustrated Edition',
    description:
      'वाल्मीकि रामायण के चयनित प्रेरक श्लोक, अन्वय, पदच्छेद और सरल हिन्दी-अंग्रेजी भावार्थ सहित सचित्र संकलन।',
    authorOrSource: 'Gurukulam Editorial Board',
    linkHref: '/pdf/प्रथम श्लोक माला.pdf',
    pdfHref: '/pdf/प्रथम श्लोक माला.pdf',
    totalStats: 'Illustrated PDF',
  },
  {
    id: 'reviving-vedic-knowledge',
    title: 'Reviving Vedic Knowledge',
    sanskritTitle: 'वैदिक ज्ञान पुनरुद्धार',
    category: 'pdf',
    type: 'शोध ग्रन्थ • Research Guide',
    description:
      'A comprehensive scholarly guide exploring the timeless epistemology of the Vedas, traditional forest academies, and their scientific harmony with modern physics.',
    authorOrSource: 'Vedic Research Foundation',
    linkHref: '/pdf/REVIVING VEDIC KNOWLEDGE.pdf',
    pdfHref: '/pdf/REVIVING VEDIC KNOWLEDGE.pdf',
    totalStats: 'Scholarly PDF',
  },
  {
    id: 'ancient-educational-structures',
    title: 'Ancient Educational Structures',
    sanskritTitle: 'प्राचीन शिक्षा प्रणालियाँ',
    category: 'pdf',
    type: 'इतिहास एवं शिक्षाशास्त्र • Pedagogy',
    description:
      'In-depth historical monograph on the residential Gurukul system, Takshashila, Nalanda, and the guru-shishya parampara of ancient Bharat.',
    authorOrSource: 'Gurukulam Academic Press',
    linkHref: '/pdf/Ancient Educational Structures.pdf',
    pdfHref: '/pdf/Ancient Educational Structures.pdf',
    totalStats: 'Academic Monograph',
  },
  {
    id: 'social-entrepreneurship',
    title: 'Social Entrepreneurship with Vedic Wisdom',
    sanskritTitle: 'वैदिक अर्थशास्त्र एवं सामाजिक उद्यम',
    category: 'pdf',
    type: 'अर्थशास्त्र एवं नैतिकता • Dharmic Commerce',
    description:
      'Applying ancient Dharmic principles of Artha, ecological stewardship, and sustainable community wealth to modern corporate governance and social enterprises.',
    authorOrSource: 'Dharmic Studies Circle',
    linkHref: '/pdf/Social entrepreneurship with vedic wisdom.pdf',
    pdfHref: '/pdf/Social entrepreneurship with vedic wisdom.pdf',
    totalStats: 'Management Treatise',
  },
  {
    id: 'wisdom-of-hindus',
    title: 'The Wisdom of the Hindus',
    sanskritTitle: 'भारतीय तत्त्वदर्शन',
    category: 'pdf',
    type: 'दार्शनिक वाङ्मय • Classical Philosophy',
    description:
      'Classical anthology of profound insights compiled from the Upanishads, Bhagavad Gita, the six Darshanas, and sacred Itihasas.',
    authorOrSource: 'Indological Compendium',
    linkHref: '/pdf/The wisdom of the Hindus.pdf',
    pdfHref: '/pdf/The wisdom of the Hindus.pdf',
    totalStats: '12.7 MB Complete Edition',
  },
  {
    id: 'vedic-wisdom-1',
    title: 'Vedic Wisdom in the 21st Century',
    sanskritTitle: 'आधुनिक परिप्रेक्ष्य में वैदिक दर्शन',
    category: 'pdf',
    type: 'चेतना एवं विज्ञान • Epistemology',
    description:
      'Bridging ancient Vedic cosmology, meditation sciences, and mind-body harmony with contemporary cognitive neuroscience and wellness.',
    authorOrSource: 'Consciousness Studies Group',
    linkHref: '/pdf/Vedic Wisdom.pdf',
    pdfHref: '/pdf/Vedic Wisdom.pdf',
    totalStats: 'Foundation Edition',
  },
  {
    id: 'vedic-wisdom-2',
    title: 'Vedic Wisdom — Volume 2',
    sanskritTitle: 'वैदिक दर्शन — द्वितीय भाग',
    category: 'pdf',
    type: 'उच्चतर तत्त्वमीमांसा • Advanced Metaphysics',
    description:
      'Advanced reflections on the universal principles of Rta, cosmic order, nature reverence, and spiritual transcendence (Moksha).',
    authorOrSource: 'Consciousness Studies Group',
    linkHref: '/pdf/VEDIC WISDOM 2.pdf',
    pdfHref: '/pdf/VEDIC WISDOM 2.pdf',
    totalStats: 'Advanced Monograph',
  },
];

export function LibraryHub() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState<'all' | 'scripture' | 'pdf'>('all');

  const filteredItems = LIBRARY_COLLECTION.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;
    const matchesQuery =
      item.title.toLowerCase().includes(q) ||
      (item.sanskritTitle && item.sanskritTitle.toLowerCase().includes(q)) ||
      item.description.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  const scriptures = filteredItems.filter((item) => item.category === 'scripture');
  const pdfs = filteredItems.filter((item) => item.category === 'pdf');

  return (
    <div className="space-y-12">
      {/* Search & Category Filter Controls */}
      <div className="p-4 sm:p-6 rounded-3xl bg-surface border border-border-subtle shadow-subtle space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-textMuted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ग्रन्थ या विषय खोजें (Search scriptures, books, topics)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-border-subtle bg-subtle/50 text-textPrimary placeholder-textMuted text-xs sm:text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center space-x-1.5 self-start sm:self-auto overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === 'all'
                  ? 'bg-accent text-on-accent shadow-subtle'
                  : 'bg-subtle text-textSecondary hover:text-textPrimary'
              }`}
            >
              सभी ग्रन्थ ({LIBRARY_COLLECTION.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('scripture')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === 'scripture'
                  ? 'bg-accent text-on-accent shadow-subtle'
                  : 'bg-subtle text-textSecondary hover:text-textPrimary'
              }`}
            >
              आदिकाव्य एवं श्लोक माला (3)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('pdf')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === 'pdf'
                  ? 'bg-accent text-on-accent shadow-subtle'
                  : 'bg-subtle text-textSecondary hover:text-textPrimary'
              }`}
            >
              शोध ग्रन्थ एवं PDFs (7)
            </button>
          </div>
        </div>

        {searchQuery && (
          <p className="text-xs text-textMuted pt-1">
            खोज परिणाम: <span className="font-semibold text-textPrimary">{filteredItems.length}</span> ग्रन्थ मिले
          </p>
        )}
      </div>

      {/* Section 1: Interactive Core Scriptures */}
      {scriptures.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-accent font-mono">
                Interactive Sanskrit Corpus
              </span>
              <h2 className="font-devanagari text-2xl font-bold text-textPrimary">
                मूल आदिकाव्य एवं श्लोक संग्रह
              </h2>
            </div>
            <span className="text-xs text-textMuted font-mono">{scriptures.length} ग्रन्थ</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scriptures.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-accent-soft text-accent uppercase tracking-wider">
                      {item.badge || item.type}
                    </span>
                    {item.hasAudio && (
                      <span className="p-1 rounded-lg bg-accent-soft text-accent" title="Includes Audio Chanting">
                        <Headphones className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-devanagari text-xl font-bold text-textPrimary group-hover:text-accent transition-colors">
                      {item.sanskritTitle || item.title}
                    </h3>
                    <p className="text-xs text-textMuted font-medium mt-0.5">
                      {item.title}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border-subtle flex items-center justify-between">
                  <Link
                    href={item.linkHref}
                    className="inline-flex items-center space-x-1 px-4 py-2 rounded-full bg-accent hover:bg-accent-hover text-on-accent text-xs font-semibold transition-colors shadow-subtle min-h-[36px]"
                  >
                    <span>प्रवेश करें (Read Now)</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  {item.totalStats && (
                    <span className="text-[11px] text-textMuted font-mono">
                      {item.totalStats}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section 2: Research & Study PDFs */}
      {pdfs.length > 0 && (
        <section id="pdfs" className="space-y-6 pt-4">
          <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-accent font-mono">
                Downloadable & Online Reading
              </span>
              <h2 className="font-devanagari text-2xl font-bold text-textPrimary">
                वैदिक शोध एवं अध्ययन ग्रन्थ (PDFs)
              </h2>
            </div>
            <span className="text-xs text-textMuted font-mono">{pdfs.length} ग्रन्थ उपलब्ध</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pdfs.map((b) => (
              <div
                key={b.id}
                className="p-6 rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-accent-soft text-accent flex items-center justify-center">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-medium text-textMuted px-2 py-0.5 rounded-md bg-subtle">
                      PDF Edition
                    </span>
                  </div>

                  <div>
                    <h3 className="font-devanagari font-bold text-base text-textPrimary group-hover:text-accent transition-colors leading-snug">
                      {b.title}
                    </h3>
                    {b.sanskritTitle && b.sanskritTitle !== b.title && (
                      <p className="text-xs text-accent font-medium mt-0.5">
                        {b.sanskritTitle}
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-textSecondary leading-relaxed line-clamp-3">
                    {b.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between">
                  <a
                    href={b.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-accent hover:text-accent-hover transition-colors min-h-[44px] py-1"
                  >
                    <span>Read Online</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={b.pdfHref || b.linkHref}
                    download
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl border border-border-subtle bg-subtle hover:bg-accent-soft hover:text-accent text-textPrimary text-xs font-medium transition-colors min-h-[44px]"
                    title="Download PDF to device"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Extensibility & Contribution Note */}
      <div className="p-8 sm:p-10 rounded-3xl bg-subtle/50 border border-border-subtle text-center space-y-4 max-w-3xl mx-auto">
        <h3 className="font-devanagari text-2xl font-bold text-textPrimary">
          नये ग्रन्थ एवं पाण्डुलिपियों का संकलन
        </h3>
        <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
          गुरुकुलम ग्रन्थागार निरंतर विस्तारित हो रहा है। यदि आपके पास कोई दुर्लभ वैदिक पाण्डुलिपि, टीका या अनुवाद है जिसे आप डिजिटल रूप में प्रकाशित करना चाहते हैं, तो हमारे शोध संकाय से सम्पर्क करें।
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-accent text-on-accent text-xs sm:text-sm font-semibold hover:bg-accent-hover transition-colors shadow-subtle"
          >
            <span>ग्रन्थ सहयोग हेतु सम्पर्क करें (Contribute a Book)</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
