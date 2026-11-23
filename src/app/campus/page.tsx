import { Metadata } from 'next';
import Link from 'next/link';
import {
  Home,
  BookOpen,
  Sparkles,
  Utensils,
  Sun,
  Flame,
  Heart,
  Compass,
  MapPin,
  Car,
  Clock,
  ArrowRight,
  Camera,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Campus & Sacred Environment | Gurukulam',
  description:
    'Experience the serene Vedic Gurukul campus nestled in natural harmony, featuring traditional Vastu architecture, Yajnashala, Granthalaya, and our daily Dinacharya schedule.',
};

const FACILITIES = [
  {
    icon: Home,
    title: 'Residential Quarters',
    subtitle: 'आश्रम आवास',
    description:
      'Simple, comfortable living spaces designed for focus, reflection, and quiet contemplation. Each residence houses 4–6 students with shared study areas, fostering camaraderie and satvik discipline.',
  },
  {
    icon: Sun,
    title: 'Learning Halls (Shalas)',
    subtitle: 'विद्या मण्डपम्',
    description:
      'Traditional open-air halls where students gather to learn directly from Acharyas. Designed with natural lighting, cross-ventilation, and sacred geometry to maintain high cognitive vitality.',
  },
  {
    icon: Flame,
    title: 'Meditation & Yajnashala',
    subtitle: 'यज्ञशाला एवं ध्यान कक्ष',
    description:
      'Dedicated consecrated spaces for daily Agnihotra fire ceremonies, Vedic havans, and silent meditation. The constant resonance of Vedic mantras creates an atmosphere of profound serenity.',
  },
  {
    icon: Heart,
    title: 'Organic Herb Gardens',
    subtitle: 'औषध वन एवं वाटिका',
    description:
      'Extensive gardens cultivated with sacred Tulsi, Bilva, Neem, and indigenous herbs where students practice sustainable living and learn practical Ayurvedic botany.',
  },
  {
    icon: Utensils,
    title: 'Sattvic Kitchen',
    subtitle: 'अन्नपूर्णा शाला',
    description:
      'Pure vegetarian, wholesome meals prepared fresh three times daily according to classical Ayurvedic dietary principles, utilizing produce grown directly in our organic campus gardens.',
  },
  {
    icon: BookOpen,
    title: 'Ancient Library (Granthalaya)',
    subtitle: 'ग्रन्थालय एवं पाण्डुलिपि कक्ष',
    description:
      'A sanctuary housing thousands of classical commentaries, palm-leaf manuscript facsimiles, critical editions of the Valmiki Ramayana, and contemporary Indological research materials.',
  },
];

const DINACHARYA = [
  {
    time: '4:30 AM',
    title: 'Brahma Muhurta (ब्राह्ममुहूर्त)',
    description:
      'The day begins during the sacred pre-dawn hours, ideal for deep meditation, inner stillness, and self-study.',
  },
  {
    time: '6:00 AM',
    title: 'Yoga & Pranayama (योगाभ्यास)',
    description:
      'Classical Hatha yoga postures and breath regulation to awaken physical vigor and mental clarity.',
  },
  {
    time: '7:30 AM',
    title: 'Morning Prayers & Breakfast (प्रातः सन्ध्या व अल्पाहार)',
    description:
      'Community chanting of the Gayatri and peace mantras, followed by a wholesome sattvic breakfast.',
  },
  {
    time: '9:00 AM',
    title: 'Morning Academic Sessions (विद्या स्वाध्याय)',
    description:
      'Rigorous study of Sanskrit grammar (Ashtadhyayi), Vedic phonetics (Shiksha), and Vedic texts.',
  },
  {
    time: '12:30 PM',
    title: 'Midday Meal & Rest (मध्याह्न भोजन एवं विश्राम)',
    description:
      'Nutritious Ayurvedic lunch in the Annapurna hall followed by quiet contemplation and restorative rest.',
  },
  {
    time: '2:30 PM',
    title: 'Afternoon Discourse & Shastrartha (शास्त्रार्थ व गोष्ठी)',
    description:
      'Philosophical discussions, scriptural debates, verse memorization, and practical application workshops.',
  },
  {
    time: '6:00 PM',
    title: 'Evening Prayers & Agnihotra (सायं सन्ध्या व अग्निहोत्र)',
    description:
      'Gathering at dusk around the sacred fire for evening oblations, mantra chanting, and deep gratitude.',
  },
  {
    time: '7:30 PM',
    title: 'Light Dinner & Satsang (लघु आहार एवं सत्सङ्ग)',
    description:
      'A light nourishing meal accompanied by devotional singing (bhajans) or reflections with senior Acharyas.',
  },
  {
    time: '9:30 PM',
    title: 'Rest & Silence (शान्ति एवं शयन)',
    description:
      'Early retirement into restful sleep, preparing mind and body for the auspicious morning dawn.',
  },
];

export default function CampusPage() {
  return (
    <div className="min-h-screen bg-canvas py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Hero Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">
            गुरुकुल परिसर • Sacred Environment
          </span>
          <h1 className="font-devanagari text-4xl sm:text-5xl font-bold text-textPrimary tracking-tight">
            Our Sacred Learning Space
          </h1>
          <p className="text-base sm:text-lg text-textSecondary leading-relaxed">
            A serene sanctuary where nature, ancient Vedic Vastu architecture, and traditional gurukul discipline converge to nurture noble minds.
          </p>
        </div>

        {/* Feature Split Box with Real Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-surface border border-border-subtle shadow-subtle">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-accent font-mono">
              Vastu & Natural Harmony
            </span>
            <h2 className="font-devanagari text-3xl font-bold text-textPrimary leading-snug">
              प्राकृतिक एवं शान्त वातावरण
            </h2>
            <p className="text-sm sm:text-base text-textSecondary leading-relaxed">
              Designed according to classical Indian Vastu Shastra, our Gurukul campus fosters deep meditative focus and undisturbed scholarship. Surrounded by native medicinal flora, open-air Mandapams, and sacred Yajnashalas, students experience a lifestyle untouched by the chaotic noise of urban life.
            </p>
            <p className="text-sm sm:text-base text-textSecondary leading-relaxed">
              Every building is oriented to capture natural daylight and morning breezes, creating an organic environment where learning feels natural and uplifting.
            </p>
            <div className="pt-2">
              <Link
                href="/gallery"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
              >
                <Camera className="w-4 h-4" />
                <span>Explore Campus Photo Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border-subtle bg-subtle aspect-[4/3] shadow-md relative group">
            <img
              src="/images/fire_2_opt.webp"
              alt="Gurukulam Sacred Fire Ceremony"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6">
              <p className="text-white text-xs font-medium">
                Daily morning Agnihotra in the consecrated campus Yajnashala
              </p>
            </div>
          </div>
        </div>

        {/* Campus Facilities (Full 6 Grid) */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-devanagari text-3xl font-bold text-textPrimary">
              परिसर की प्रमुख सुविधाएं (Our Facilities)
            </h2>
            <p className="text-sm text-textSecondary max-w-xl mx-auto">
              Every facility on campus is purposefully created to support authentic Vedic scholarship, mental clarity, and satvik living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((facility, i) => {
              const IconComponent = facility.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-surface border border-border-subtle hover:border-accent shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-accent-soft text-accent flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-devanagari text-accent font-semibold block">
                        {facility.subtitle}
                      </span>
                      <h3 className="font-bold text-lg text-textPrimary mt-0.5">
                        {facility.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Life at Gurukulam — Daily Gurukul Dinacharya */}
        <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-border-subtle shadow-subtle space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">
              दिनचर्या • Daily Rhythm
            </span>
            <h2 className="font-devanagari text-3xl font-bold text-textPrimary">
              Life at Gurukulam (दिनचर्या)
            </h2>
            <p className="text-sm text-textSecondary leading-relaxed">
              A balanced rhythm aligning human biological clocks with the cycles of nature, fostering physical vigor, emotional balance, and spiritual depth.
            </p>
          </div>

          {/* Timeline List */}
          <div className="relative border-l-2 border-accent/30 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
            {DINACHARYA.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-surface shadow-sm group-hover:scale-125 transition-transform" />

                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded-md bg-accent-soft text-accent text-xs font-mono font-bold">
                      {step.time}
                    </span>
                    <h3 className="font-devanagari text-base sm:text-lg font-bold text-textPrimary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Finding Us & Campus Visits */}
        <div className="p-8 sm:p-10 rounded-3xl bg-subtle/50 border border-border-subtle space-y-6">
          <div className="space-y-2">
            <h3 className="font-devanagari text-2xl font-bold text-textPrimary">
              Visiting the Campus (परिसर दर्शन)
            </h3>
            <p className="text-sm text-textSecondary max-w-2xl leading-relaxed">
              We warmly welcome sincere seekers, prospective students, and scholars. Please notify us prior to your arrival so that arrangements for boarding and personal guidance can be prepared.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-surface border border-border-subtle space-y-2">
              <MapPin className="w-5 h-5 text-accent" />
              <h4 className="font-bold text-sm text-textPrimary">Address</h4>
              <p className="text-xs text-textSecondary leading-relaxed">
                Gurukulam Ashram, Himalayan Foothills, Rishikesh-Haridwar Highway, Uttarakhand, India.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border-subtle space-y-2">
              <Car className="w-5 h-5 text-accent" />
              <h4 className="font-bold text-sm text-textPrimary">Getting Here</h4>
              <p className="text-xs text-textSecondary leading-relaxed">
                Easily accessible via Dehradun Jolly Grant Airport (40 km) or Haridwar Junction Railway Station (25 km).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border-subtle space-y-2">
              <Clock className="w-5 h-5 text-accent" />
              <h4 className="font-bold text-sm text-textPrimary">Visiting Hours</h4>
              <p className="text-xs text-textSecondary leading-relaxed">
                Monday to Saturday: 9:00 AM – 5:00 PM. Sunday: Open for public satsang & Yajnas.
              </p>
            </div>
          </div>

          <div className="pt-2 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-accent text-on-accent text-sm font-semibold hover:bg-accent-hover transition-colors shadow-subtle"
            >
              <span>Schedule a Campus Visit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
