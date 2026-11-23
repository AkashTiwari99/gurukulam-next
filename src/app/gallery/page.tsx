import { Metadata } from 'next';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { Sparkles, Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gallery • छायाचित्र वीथिका | Gurukulam',
  description: 'Visual chronicles of sacred yajna rituals, palm-leaf manuscripts, mentor-disciple Sanskrit classes, and tranquil campus life at Gurukulam.',
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-canvas py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold">
            <Camera className="w-3.5 h-3.5" />
            <span>छायाचित्र वीथिका • Visual Archives</span>
          </div>

          <h1 className="font-devanagari text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary">
            गुरुकुल छायाचित्र वीथिका (Gallery)
          </h1>

          <p className="text-sm sm:text-base text-textSecondary max-w-2xl mx-auto leading-relaxed">
            यज्ञ-अग्निहोत्र की पावन ज्वालाएं, प्राचीन संस्कृत पाण्डुलिपियों का अनुशीलन, और प्रकृति के सान्निध्य में ऋषि-परम्परा का सजीव दर्शन।
          </p>
        </div>

        {/* Interactive Filterable Gallery Grid with Lightbox */}
        <GalleryGrid />
      </div>
    </div>
  );
}
