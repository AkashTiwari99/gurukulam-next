import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { KandaNavigation } from '@/components/reader/KandaNavigation';
import { ShlokaCard, Verse } from '@/components/reader/ShlokaCard';

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

  return (
    <div className="min-h-screen bg-canvas pb-24">
      {/* Kanda Navigation Bar */}
      <KandaNavigation
        currentKanda={params.kanda}
        currentKandaTitle={data.kandaTitle}
        currentSarga={data.sarga}
        totalSargas={totalSargas}
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-12">
        {/* Sarga Header Title */}
        <div className="text-center mb-10 space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent uppercase tracking-wider">
            {data.kandaTitle}
          </span>
          <h1 className="font-devanagari text-2xl sm:text-3xl md:text-4xl font-bold text-textPrimary">
            {data.sargaTitle}
          </h1>
          <p className="text-sm text-textMuted">
            कुल श्लोक संख्या: <span className="font-semibold text-textPrimary">{data.totalVerses}</span>
          </p>
        </div>

        {/* Verses List */}
        <div className="space-y-6">
          {data.verses.map((verse, idx) => (
            <ShlokaCard key={verse.id || idx} verse={verse} index={idx} />
          ))}
        </div>

        {/* Bottom Sarga Jump Links */}
        <div className="mt-16 pt-8 border-t border-border-subtle flex items-center justify-between">
          {data.sarga > 1 ? (
            <a
              href={`/books/ramayana/${params.kanda}/sarga-${data.sarga - 1}`}
              className="px-5 py-2.5 rounded-full border border-border-subtle bg-surface hover:bg-subtle text-sm font-medium text-textPrimary hover:text-accent transition-colors shadow-subtle"
            >
              ← पूर्व सर्ग ({data.sarga - 1})
            </a>
          ) : (
            <a
              href="/books/ramayana"
              className="px-5 py-2.5 rounded-full border border-border-subtle bg-surface hover:bg-subtle text-sm font-medium text-textPrimary hover:text-accent transition-colors shadow-subtle"
            >
              ← मङ्गल श्लोक
            </a>
          )}

          {data.sarga < totalSargas ? (
            <a
              href={`/books/ramayana/${params.kanda}/sarga-${data.sarga + 1}`}
              className="px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-on-accent text-sm font-semibold transition-colors shadow-subtle"
            >
              अग्रिम सर्ग ({data.sarga + 1}) →
            </a>
          ) : (
            <span className="text-xs text-textMuted">काण्ड समाप्त</span>
          )}
        </div>
      </div>
    </div>
  );
}
