import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import { BookOpen, Sparkles, ChevronRight } from 'lucide-react';

interface MangalaData {
  title: string;
  header: string;
  totalVerses: number;
  verses: {
    id: string;
    number: number;
    text: string;
  }[];
}

interface KandaMeta {
  id: string;
  slug: string;
  nameDevanagari: string;
  order: number;
  totalSargas: number;
  totalVerses: number;
  description: string;
}

export const metadata: Metadata = {
  title: 'मङ्गल श्लोकाः - वाल्मीकि रामायण | Gurukulam',
  description: 'श्रीमद्वाल्मीकिरामायणम् मङ्गल श्लोक एवं सातों काण्डों (बालकाण्ड से उत्तरकाण्ड) का सम्पूर्ण संग्रह।',
};

function getMangalaData(): MangalaData {
  const filePath = path.join(process.cwd(), 'content', 'ramayana', 'mangala_shloka.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

function getKandasMeta(): KandaMeta[] {
  const filePath = path.join(process.cwd(), 'content', 'ramayana', 'kandas_meta.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

export default function RamayanaGatewayPage() {
  const mangala = getMangalaData();
  const kandas = getKandasMeta();

  return (
    <div className="min-h-screen bg-canvas py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header Hero */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>श्रीमद्वाल्मीकिरामायणम्</span>
          </div>

          <h1 className="font-devanagari text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary leading-tight">
            {mangala.header}
          </h1>

          <p className="text-sm sm:text-base text-textSecondary max-w-2xl mx-auto">
            आदिकाव्य वाल्मीकि रामायण के सातों काण्डों का प्रामाणिक अध्ययन करने से पूर्व परम्परागत मङ्गल श्लोक।
          </p>
        </div>

        {/* Mangala Shloka Verses List */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
            <h2 className="font-devanagari text-xl font-bold text-textPrimary">
              मङ्गल श्लोकाः
            </h2>
            <span className="text-xs text-textMuted font-medium">
              कुल {mangala.totalVerses} श्लोक
            </span>
          </div>

          <div className="space-y-4">
            {mangala.verses.map((v) => (
              <div
                key={v.id}
                id={v.id}
                className="p-6 sm:p-7 rounded-2xl bg-surface border border-border-subtle hover:border-accent/30 shadow-subtle transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent-soft text-accent">
                    मङ्गल #{v.number}
                  </span>
                </div>
                <p className="font-devanagari text-lg sm:text-xl font-medium leading-loose text-textPrimary text-center whitespace-pre-line">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Kandas Navigation Grid */}
        <section className="space-y-6 pt-8 border-t border-border-subtle">
          <div className="text-center space-y-2">
            <h2 className="font-devanagari text-2xl font-bold text-textPrimary">
              रामायण के सप्त काण्ड (Seven Kandas)
            </h2>
            <p className="text-xs sm:text-sm text-textMuted">
              अध्ययन आरम्भ करने के लिए किसी भी काण्ड पर क्लिक करें:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {kandas.map((k) => (
              <a
                key={k.slug}
                href={`/books/ramayana/${k.slug}/sarga-1`}
                className="p-5 rounded-2xl bg-surface border border-border-subtle hover:border-accent shadow-subtle hover:shadow-elevated transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-devanagari text-lg font-bold text-textPrimary group-hover:text-accent transition-colors">
                      {k.nameDevanagari}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-subtle text-textSecondary font-mono">
                      {k.totalSargas} सर्ग
                    </span>
                  </div>
                  <p className="text-xs text-textSecondary leading-relaxed line-clamp-2">
                    {k.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-xs font-medium text-accent">
                  <span>सर्ग १ से पढ़ना आरम्भ करें</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
