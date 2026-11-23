import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { KandaNavigation } from '@/components/reader/KandaNavigation';
import { SargaReaderClient } from '@/components/reader/SargaReaderClient';
import { Verse } from '@/components/reader/ShlokaCard';

interface SargaData {
  kanda: string;
  kandaTitle: string;
  sarga: number;
  sargaTitle: string;
  totalVerses: number;
  verses: Verse[];
}

interface PageProps {
  params: {
    kanda: string;
    sarga: string;
  };
}

const KANDAS_ORDER: { slug: string; name: string; total: number }[] = [
  { slug: 'balakanda', name: 'बालकाण्ड', total: 77 },
  { slug: 'ayodhyakanda', name: 'अयोध्याकाण्ड', total: 119 },
  { slug: 'aranyakanda', name: 'आरण्यकाण्ड', total: 75 },
  { slug: 'kishkindhakanda', name: 'किष्किन्धाकाण्ड', total: 67 },
  { slug: 'sundarakanda', name: 'सुन्दरकाण्ड', total: 68 },
  { slug: 'yuddhakanda', name: 'युद्धकाण्ड', total: 128 },
  { slug: 'uttarakanda', name: 'उत्तरकाण्ड', total: 111 },
];

const KANDAS_TOTAL_MAP: Record<string, number> = {
  balakanda: 77,
  ayodhyakanda: 119,
  aranyakanda: 75,
  kishkindhakanda: 67,
  sundarakanda: 68,
  yuddhakanda: 128,
  uttarakanda: 111,
};

export async function generateStaticParams() {
  const params: { kanda: string; sarga: string }[] = [];

  for (const [kanda, total] of Object.entries(KANDAS_TOTAL_MAP)) {
    for (let s = 1; s <= total; s++) {
      params.push({
        kanda,
        sarga: `sarga-${s}`,
      });
    }
  }

  return params;
}

function getSargaData(kanda: string, sargaParam: string): SargaData | null {
  const match = sargaParam.match(/sarga-(\d+)/);
  if (!match) return null;
  const sargaNum = parseInt(match[1], 10);

  const filePath = path.join(
    process.cwd(),
    'content',
    'ramayana',
    kanda,
    `sarga_${sargaNum}.json`
  );

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as SargaData;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = getSargaData(params.kanda, params.sarga);
  if (!data) return { title: 'सर्ग नॉट फाउंड | Gurukulam' };

  return {
    title: `${data.sargaTitle} - ${data.kandaTitle} | वाल्मीकि रामायण - Gurukulam`,
    description: `वाल्मीकि रामायण ${data.kandaTitle} ${data.sargaTitle} - ${data.totalVerses} मूल संस्कृत श्लोक एवं प्रामाणिक व्याख्या।`,
  };
}

export default function SargaPage({ params }: PageProps) {
  const data = getSargaData(params.kanda, params.sarga);

  if (!data) {
    notFound();
  }

  const totalSargas = KANDAS_TOTAL_MAP[params.kanda] || data.sarga;
  const currentKandaIndex = KANDAS_ORDER.findIndex((k) => k.slug === params.kanda);
  const nextKanda = currentKandaIndex >= 0 && currentKandaIndex < KANDAS_ORDER.length - 1 ? KANDAS_ORDER[currentKandaIndex + 1] : null;
  const prevKanda = currentKandaIndex > 0 ? KANDAS_ORDER[currentKandaIndex - 1] : null;

  return (
    <div className="min-h-screen bg-canvas pb-24">
      {/* Kanda Navigation Bar */}
      <KandaNavigation
        currentKanda={params.kanda}
        currentKandaTitle={data.kandaTitle}
        currentSarga={data.sarga}
        totalSargas={totalSargas}
      />

      {/* Main Content with Interactive Reader Features */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-12">
        <SargaReaderClient
          verses={data.verses}
          kandaTitle={data.kandaTitle}
          sargaTitle={data.sargaTitle}
          sargaNum={data.sarga}
          totalVerses={data.totalVerses}
        />

        {/* Bottom Sarga Jump Links */}
        <div className="mt-16 pt-8 border-t border-border-subtle flex items-center justify-between gap-3">
          {data.sarga > 1 ? (
            <Link
              href={`/books/ramayana/${params.kanda}/sarga-${data.sarga - 1}`}
              className="px-5 py-2.5 rounded-full border border-border-subtle bg-surface hover:bg-subtle text-sm font-medium text-textPrimary hover:text-accent transition-colors shadow-subtle min-h-[44px] flex items-center"
            >
              ← पूर्व सर्ग ({data.sarga - 1})
            </Link>
          ) : prevKanda ? (
            <Link
              href={`/books/ramayana/${prevKanda.slug}/sarga-${prevKanda.total}`}
              className="px-5 py-2.5 rounded-full border border-border-subtle bg-surface hover:bg-subtle text-sm font-medium text-textPrimary hover:text-accent transition-colors shadow-subtle min-h-[44px] flex items-center"
            >
              ← पूर्व काण्ड: {prevKanda.name} (सर्ग {prevKanda.total})
            </Link>
          ) : (
            <Link
              href="/books/ramayana"
              className="px-5 py-2.5 rounded-full border border-border-subtle bg-surface hover:bg-subtle text-sm font-medium text-textPrimary hover:text-accent transition-colors shadow-subtle min-h-[44px] flex items-center"
            >
              ← मङ्गल श्लोक
            </Link>
          )}

          {data.sarga < totalSargas ? (
            <Link
              href={`/books/ramayana/${params.kanda}/sarga-${data.sarga + 1}`}
              className="px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-on-accent text-sm font-semibold transition-colors shadow-subtle min-h-[44px] flex items-center"
            >
              अग्रिम सर्ग ({data.sarga + 1}) →
            </Link>
          ) : nextKanda ? (
            <Link
              href={`/books/ramayana/${nextKanda.slug}/sarga-1`}
              className="px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-on-accent text-sm font-semibold transition-colors shadow-subtle min-h-[44px] flex items-center"
            >
              अग्रिम काण्ड: {nextKanda.name} (सर्ग १) →
            </Link>
          ) : (
            <Link
              href="/books/ramayana"
              className="px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-on-accent text-sm font-semibold transition-colors shadow-subtle min-h-[44px] flex items-center"
            >
              रामायण सम्पूर्ण (मङ्गल श्लोक) →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
