import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ShlokMalaClient } from '@/components/reader/ShlokMalaClient';
import shlokMala1 from '@/content/shlok_mala/shlok_mala_1.json';
import shlokMala2 from '@/content/shlok_mala/shlok_mala_2.json';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const malaNum = parseInt(params.id, 10);
  return {
    title: `श्लोक माला ${malaNum} - वाल्मीकि रामायण | Gurukulam`,
    description: `वाल्मीकि रामायण के पवित्र श्लोकों का संग्रह - श्लोक माला ${malaNum} शुद्ध ऑडियो उच्चारण, हिन्दी भावार्थ एवं आङ्ग्ल अनुवाद सहित।`,
  };
}

export default function ShlokMalaPage({ params }: PageProps) {
  const malaNum = parseInt(params.id, 10);
  const data = malaNum === 1 ? shlokMala1 : malaNum === 2 ? shlokMala2 : null;

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-canvas py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Link
              href="/books/shlok-mala/1"
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all min-h-[38px] flex items-center ${
                malaNum === 1
                  ? 'bg-accent text-on-accent shadow-subtle'
                  : 'bg-surface border border-border-subtle text-textSecondary hover:border-accent'
              }`}
            >
              श्लोक माला १
            </Link>
            <Link
              href="/books/shlok-mala/2"
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all min-h-[38px] flex items-center ${
                malaNum === 2
                  ? 'bg-accent text-on-accent shadow-subtle'
                  : 'bg-surface border border-border-subtle text-textSecondary hover:border-accent'
              }`}
            >
              श्लोक माला २
            </Link>
          </div>

          <h1 className="font-devanagari text-3xl sm:text-4xl font-bold text-textPrimary">
            {data.title}
          </h1>
          <p className="text-sm text-textSecondary max-w-xl mx-auto">
            वाल्मीकि रामायण के महत्त्वपूर्ण श्लोक, हिन्दी भावार्थ, आङ्ग्ल अनुवाद एवं शुद्ध वैदिक उच्चारण सहित। (कुल {data.totalShlokas} श्लोक)
          </p>
        </div>

        {/* Shlok List Client */}
        <ShlokMalaClient data={data} />
      </div>
    </div>
  );
}
