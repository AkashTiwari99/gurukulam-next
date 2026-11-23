'use client';

import * as React from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Filter } from 'lucide-react';

interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  category: 'photos' | 'rituals' | 'manuscripts';
  title: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    url: '/images/BG Recitation _0.webp',
    alt: 'Bhagavad Gita recitation at Gurukulam',
    category: 'rituals',
    title: 'श्रीमद्भगवद्गीता स्वाध्याय • Gita Recitation',
    description: 'Students and Acharyas engaged in traditional collective Vedic chanting and recitation under morning sunlight.',
  },
  {
    id: 'g2',
    url: '/images/fire.webp',
    alt: 'Sacred Agnihotra fire ritual at Gurukulam',
    category: 'rituals',
    title: 'अग्निहोत्र यज्ञ • Sacred Agnihotra Ceremony',
    description: 'Daily morning and evening Vedic havan performed with traditional mantra chanting to purify cosmic and internal energy.',
  },
  {
    id: 'g3',
    url: '/images/card4.jpg',
    alt: 'Vedic wisdom manuscripts',
    category: 'manuscripts',
    title: 'प्राचीन तालपत्र ग्रन्थ • Palm-leaf Manuscripts',
    description: 'Rare handwritten Sanskrit manuscript codices preserved and studied in the Gurukul Granthalaya.',
  },
  {
    id: 'g4',
    url: '/images/card1.jpg',
    alt: 'Gurukul learning session',
    category: 'photos',
    title: 'गुरु-शिष्य परम्परा • Gurukul Dialogue',
    description: 'Intimate mentor-disciple philosophical discourse on Paninian Sanskrit phonetics and Upanishadic dialogues.',
  },
  {
    id: 'g5',
    url: '/images/card2.jpg',
    alt: 'Ramayana studies',
    category: 'manuscripts',
    title: 'आदिकाव्य रामायण अध्ययन • Ramayana Exegesis',
    description: 'Deep textual dissection of Valmiki Ramayana verses, examining poetic metres (Chandas) and moral principles.',
  },
  {
    id: 'g6',
    url: '/images/card3.jpg',
    alt: 'Gurukul campus life',
    category: 'photos',
    title: 'आश्रम जीवन • Contemplative Ashram Life',
    description: 'Simple, pure, and distraction-free communal living cultivating discipline, serenity, and satvik awareness.',
  },
  {
    id: 'g7',
    url: '/images/card5.jpg',
    alt: 'Traditional meditation practice',
    category: 'photos',
    title: 'ध्यान एवं प्राणायाम • Yogic Meditation',
    description: 'Morning meditation and breathing exercises aligned with Patanjali Yoga Sutras amidst natural serenity.',
  },
  {
    id: 'g8',
    url: '/images/card6-1080.webp',
    alt: 'Sacred Ramayana artistic illustration',
    category: 'manuscripts',
    title: 'धार्मिक कला एवं चित्रकला • Sacred Epics Art',
    description: 'Classical visual representations of the divine leelas of Bhagavan Sri Rama and Mother Sita.',
  },
  {
    id: 'g9',
    url: '/images/fire_2_opt.webp',
    alt: 'Campus architecture overview at Gurukulam',
    category: 'photos',
    title: 'वास्तुसम्मत गुरुकुल परिसर • Vastu Campus',
    description: 'Campus grounds designed according to ancient Indian Vastu Shastra principles to maximize tranquil energy.',
  },
  {
    id: 'g10',
    url: '/images/Hinduscriptures.webp',
    alt: 'Vedic scripture collection',
    category: 'manuscripts',
    title: 'वैदिक वाङ्मय भण्डार • Sacred Scripture Compendium',
    description: 'Comprehensive digital and physical repository of Vedic Samhitas, Brahmanas, Aranyakas, and Darshanas.',
  },
];

export function GalleryGrid() {
  const [filter, setFilter] = React.useState<'all' | 'photos' | 'rituals' | 'manuscripts'>('all');
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredItems.length]);

  // Lock body scroll when lightbox is open
  React.useEffect(() => {
    if (selectedIndex !== null) {
      const orig = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = orig;
      };
    }
  }, [selectedIndex]);

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            filter === 'all'
              ? 'bg-accent text-on-accent shadow-subtle'
              : 'border border-border-subtle bg-surface hover:bg-subtle text-textSecondary'
          }`}
        >
          All Media ({GALLERY_ITEMS.length})
        </button>
        <button
          type="button"
          onClick={() => setFilter('rituals')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            filter === 'rituals'
              ? 'bg-accent text-on-accent shadow-subtle'
              : 'border border-border-subtle bg-surface hover:bg-subtle text-textSecondary'
          }`}
        >
          यज्ञ एवं पाठ • Rituals & Chanting
        </button>
        <button
          type="button"
          onClick={() => setFilter('manuscripts')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            filter === 'manuscripts'
              ? 'bg-accent text-on-accent shadow-subtle'
              : 'border border-border-subtle bg-surface hover:bg-subtle text-textSecondary'
          }`}
        >
          पाण्डुलिपि एवं ग्रन्थ • Manuscripts
        </button>
        <button
          type="button"
          onClick={() => setFilter('photos')}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
            filter === 'photos'
              ? 'bg-accent text-on-accent shadow-subtle'
              : 'border border-border-subtle bg-surface hover:bg-subtle text-textSecondary'
          }`}
        >
          परिसर जीवन • Campus Life
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedIndex(index)}
            className="group relative rounded-3xl overflow-hidden bg-surface border border-border-subtle hover:border-accent shadow-subtle hover:shadow-elevated transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-subtle">
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-3 rounded-full bg-surface/90 text-accent shadow-subtle">
                  <ZoomIn className="w-5 h-5" />
                </span>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-accent-soft text-accent">
                  {item.category}
                </span>
                <h3 className="font-devanagari font-bold text-base text-textPrimary mt-2 group-hover:text-accent transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-textSecondary mt-1 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Accessible Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={filteredItems[selectedIndex].title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          style={{ overscrollBehavior: 'contain' }}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-surface/20 text-white hover:bg-surface/40 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-surface/20 text-white hover:bg-surface/40 transition-colors z-50 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-surface/20 text-white hover:bg-surface/40 transition-colors z-50 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full max-h-[90vh] bg-surface rounded-3xl overflow-hidden border border-border-strong shadow-elevated flex flex-col"
          >
            <div className="relative flex-1 bg-black/10 flex items-center justify-center max-h-[65vh] overflow-hidden">
              <img
                src={filteredItems[selectedIndex].url}
                alt={filteredItems[selectedIndex].alt}
                className="max-w-full max-h-[65vh] object-contain"
              />
            </div>

            <div className="p-6 bg-surface border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent bg-accent-soft px-2.5 py-0.5 rounded-full">
                  {filteredItems[selectedIndex].category}
                </span>
                <h3 className="font-devanagari text-lg sm:text-xl font-bold text-textPrimary mt-1.5">
                  {filteredItems[selectedIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-textSecondary mt-1 leading-relaxed max-w-2xl">
                  {filteredItems[selectedIndex].description}
                </p>
              </div>

              <div className="text-xs text-textMuted font-mono flex-shrink-0">
                {selectedIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
