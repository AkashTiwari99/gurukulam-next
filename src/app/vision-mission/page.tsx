import { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Compass, ShieldCheck, Heart, Leaf, Target, TrendingUp, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vision & Mission • संकल्प एवं लक्ष्य | Gurukulam',
  description: 'Our comprehensive charter to preserve Vedic knowledge systems, bridge ancient Darshanas with modern science, and cultivate ethical wisdom.',
};

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-canvas py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold">
            <Target className="w-3.5 h-3.5" />
            <span>संकल्प एवं ध्येय • Institutional Charter</span>
          </div>

          <h1 className="font-devanagari text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary leading-tight">
            Our Vision & Sacred Mission
          </h1>

          <p className="text-base sm:text-lg text-textSecondary max-w-2xl mx-auto leading-relaxed">
            Revitalizing the primordial wisdom of Sanatan Dharma to heal modern fragmentation, nurture moral clarity, and foster universal flourishing.
          </p>
        </div>

        {/* Vision Statement Box */}
        <section className="p-8 sm:p-10 rounded-3xl bg-surface border border-border-subtle shadow-subtle space-y-5">
          <div className="flex items-center space-x-2 text-accent font-semibold text-xs tracking-wider uppercase">
            <Compass className="w-4 h-4" />
            <span>The Core Vision • दृष्टि</span>
          </div>

          <h2 className="font-devanagari text-2xl sm:text-3xl font-bold text-textPrimary">
            ऋषि संस्कृति का पुनर्जागरण एवं सार्वभौमिक कल्याण
          </h2>

          <p className="text-sm sm:text-base text-textSecondary leading-relaxed">
            We envision a world where the profound spiritual, psychological, and ecological insights of the Vedic civilization are universally accessible, rigorously studied, and practically embodied by global citizens. A civilization where technological mastery is anchored in moral restraint (<em>Dharma</em>), and material progress serves inner liberation (<em>Moksha</em>).
          </p>
        </section>

        {/* The 4 Mission Pillars */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-devanagari text-2xl sm:text-3xl font-bold text-textPrimary">
              चतुर्विध अभियान स्तम्भ (The 4 Mission Pillars)
            </h2>
            <p className="text-xs sm:text-sm text-textMuted">
              Our concrete commitment to preservation, research, pedagogy, and global outreach.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-accent-soft text-accent flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-devanagari font-bold text-lg text-textPrimary">
                १. शास्त्रीय प्रामाणिकता (Shastric Authenticity)
              </h3>
              <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                Protecting and digitizing original Vedic Samhitas, Upanishads, and the Valmiki Ramayana without ideological dilution, translating Sanskrit texts with fidelity to traditional Darshanic commentaries.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-accent-soft text-accent flex items-center justify-center font-bold">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="font-devanagari font-bold text-lg text-textPrimary">
                २. आधुनिक ज्ञान-समन्वय (Epistemic Synthesis)
              </h3>
              <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                Fostering interdisciplinary dialogues between Vedic epistemology, consciousness studies, neurobiology, quantum philosophy, and systemic ecological models.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-accent-soft text-accent flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-devanagari font-bold text-lg text-textPrimary">
                ३. चित्त-शुद्धि एवं चरित्र (Character Cultivation)
              </h3>
              <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                Prioritizing personal transformation (<em>Chitta Shuddhi</em>) over rote information accumulation. Training students in self-discipline (<em>Tapas</em>), truthfulness (<em>Satya</em>), and empathetic service (<em>Seva</em>).
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-accent-soft text-accent flex items-center justify-center font-bold">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-devanagari font-bold text-lg text-textPrimary">
                ४. सार्वभौमिक सुलभता (Universal Inclusivity)
              </h3>
              <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                Democratizing access to sacred scriptures through free, high-performance web readers, phonetic virtual keyboards, and word-by-word multilingual translations for learners worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Why Sanatan Dharma Matters Today */}
        <section className="p-8 sm:p-10 rounded-3xl bg-surface border border-border-subtle shadow-subtle space-y-6">
          <h2 className="font-devanagari text-2xl font-bold text-textPrimary">
            वर्तमान युग में सनातन दर्शन की अपरिहार्यता (Why It Matters Today)
          </h2>

          <div className="space-y-4 text-sm text-textSecondary leading-relaxed">
            <div className="p-4 rounded-2xl bg-subtle/60 border border-border-subtle space-y-1">
              <h4 className="font-bold text-textPrimary text-base">
                मानसिक स्वास्थ्य एवं एकाग्रता (Mental Poise in an Age of Distraction)
              </h4>
              <p>
                In a hyper-stimulated digital landscape plagued by attention deficits and anxiety, the Patanjali Ashtanga Yoga system, Pranayama, and Gayatri Japa provide proven neuro-cognitive stabilization.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-subtle/60 border border-border-subtle space-y-1">
              <h4 className="font-bold text-textPrimary text-base">
                प्रौद्योगिकी एवं कृत्रिम बुद्धिमत्ता में नैतिक दिशा (Ethical Guardrails for Emerging AI)
              </h4>
              <p>
                As autonomous algorithms and artificial intelligence reshape society, the Vedic framework of the four <em>Purusharthas</em> ensures that technological intelligence never divorces itself from empathy, karma accountability, and societal equilibrium.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-subtle/60 border border-border-subtle space-y-1">
              <h4 className="font-bold text-textPrimary text-base">
                पर्यावरणीय चेतना (Ecological Reverence)
              </h4>
              <p>
                The <em>Bhumi Sukta</em> of the Atharvaveda proclaims: <em>"माता भूमिः पुत्रोऽहं पृथिव्याः"</em> (The Earth is my Mother, I am her child). Restoring this sacred consciousness is the ultimate antidote to the climate and ecological crises.
              </p>
            </div>
          </div>
        </section>

        {/* Institutional Roadmap */}
        <section className="text-center p-8 rounded-3xl bg-accent-soft border border-accent/20 space-y-4">
          <h3 className="font-devanagari text-xl font-bold text-textPrimary">
            आगामी संकल्प • Strategic Milestones
          </h3>
          <p className="text-xs sm:text-sm text-textSecondary max-w-xl mx-auto leading-relaxed">
            Digitizing 100+ unpublished Sanskrit manuscripts, developing an offline mobile PWA Vedic reader, and inaugurating global Gurukul teacher fellowships.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-on-accent text-xs font-semibold shadow-subtle transition-colors min-h-[44px]"
            >
              <span>Join our Mission / Volunteer</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
