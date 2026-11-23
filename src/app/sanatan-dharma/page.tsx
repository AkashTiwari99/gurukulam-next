import { Metadata } from 'next';
import { Sparkles, Compass, Shield, Sun } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sanatan Dharma Vision & Philosophy | Gurukulam',
  description: 'Understand the universal principles of Sanatan Dharma — the eternal cosmic order, dharma, karma, and liberation.',
};

export default function SanatanDharmaPage() {
  return (
    <div className="min-h-screen bg-canvas py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">
            शाश्वत दर्शन • Eternal Philosophy
          </span>
          <h1 className="font-devanagari text-4xl sm:text-5xl font-bold text-textPrimary">
            Sanatan Dharma
          </h1>
          <p className="text-base sm:text-lg text-textSecondary max-w-2xl mx-auto leading-relaxed">
            धर्मात् सर्वं प्रभवति धर्मात् प्रवर्तते जगत् • The eternal cosmic order upholding the universe and human consciousness.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-border-subtle shadow-subtle space-y-6">
          <h2 className="font-devanagari text-2xl font-bold text-textPrimary">
            सनातन धर्म का यथार्थ स्वरूप
          </h2>
          <p className="text-sm sm:text-base text-textSecondary leading-relaxed">
            The word <em>Sanatan</em> means beginningless and endless (eternal), while <em>Dharma</em> signifies that which sustains, upholds, and harmonizes existence (<em>dhārayatīti dharmaḥ</em>). Unlike dogma or sectarian belief, Sanatan Dharma is an empirical science of living in alignment with cosmic truth (<em>Rta</em>).
          </p>
          <p className="text-sm sm:text-base text-textSecondary leading-relaxed">
            It invites every individual to explore the depths of reality through direct experiential realization (<em>Anubhava</em>), guided by the Vedas, Upanishads, and the exemplar conduct embodied in the Valmiki Ramayana by Maryada Purushottam Bhagavan Sri Rama.
          </p>
        </div>

        {/* Four Purusharthas */}
        <div className="space-y-6">
          <h3 className="font-devanagari text-2xl font-bold text-textPrimary text-center">
            चतुर्विध पुरुषार्थ (The Four Goals of Human Life)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-accent-soft text-accent font-devanagari">
                १. धर्म (Dharma)
              </span>
              <h4 className="font-bold text-base text-textPrimary">Righteous Duty & Harmony</h4>
              <p className="text-xs text-textSecondary leading-relaxed">
                Living with moral integrity, truthfulness, and non-violence in accordance with cosmic law.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-accent-soft text-accent font-devanagari">
                २. अर्थ (Artha)
              </span>
              <h4 className="font-bold text-base text-textPrimary">Prosperity & Resourcefulness</h4>
              <p className="text-xs text-textSecondary leading-relaxed">
                Honest pursuit of wealth and material security to support family, society, and dharmic deeds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-accent-soft text-accent font-devanagari">
                ३. काम (Kama)
              </span>
              <h4 className="font-bold text-base text-textPrimary">Aesthetic Joy & Fulfillment</h4>
              <p className="text-xs text-textSecondary leading-relaxed">
                Noble desires, appreciation of art, beauty, affection, and cultural creativity governed by Dharma.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-accent-soft text-accent font-devanagari">
                ४. मोक्ष (Moksha)
              </span>
              <h4 className="font-bold text-base text-textPrimary">Spiritual Liberation</h4>
              <p className="text-xs text-textSecondary leading-relaxed">
                Transcendence of the cycle of birth and death; union with the Supreme Self (Paramatman).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
