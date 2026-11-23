'use client';

import * as React from 'react';
import { Quote, Send, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The Vedic Studies program transformed my understanding of ancient texts and their practical application in modern life. The mentor-disciple environment is truly irreplaceable.',
    name: 'Rahul Sharma',
    role: 'Vedic Studies Graduate',
    image: '/images/student 1.jpg',
  },
  {
    quote:
      'Learning Sanskrit directly through classical Paninian phonetics opened an entirely new universe of philosophical clarity that no English translation could ever convey.',
    name: 'Priya Patel',
    role: 'Sanskrit Program Alumna',
    image: '/images/student-2-120.webp',
  },
  {
    quote:
      'The residential Gurukul discipline, morning Agnihotra, and silent study amidst nature taught me a deep mental serenity that I now carry into every aspect of life.',
    name: 'Amit Kumar',
    role: 'Residential Program Scholar',
    image: '/images/student 3.jpg',
  },
];

export function HomeInteractiveSections() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  // Auto-cycle testimonials gently
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const activeTestimonial = TESTIMONIALS[currentSlide];

  return (
    <div className="space-y-20">
      {/* Student Testimonials Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">
            अनुभव • Voices of Wisdom
          </span>
          <h2 className="font-devanagari text-2xl sm:text-3xl font-bold text-textPrimary">
            विद्यार्थी अनुभव (Student Experiences)
          </h2>
          <p className="text-xs sm:text-sm text-textMuted">
            Hear from seekers who have immersed themselves in the living Vedic tradition.
          </p>
        </div>

        <div className="relative p-8 sm:p-12 rounded-3xl bg-surface border border-border-subtle shadow-subtle min-h-[260px] flex flex-col justify-between transition-all">
          <Quote className="w-10 h-10 text-accent/25 mb-4" />

          <p className="font-devanagari text-base sm:text-lg text-textPrimary leading-relaxed italic">
            "{activeTestimonial.quote}"
          </p>

          <div className="mt-8 pt-6 border-t border-border-subtle flex items-center justify-between">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-border-strong bg-subtle flex-shrink-0">
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-sm text-textPrimary">
                  {activeTestimonial.name}
                </h4>
                <p className="text-xs text-accent">
                  {activeTestimonial.role}
                </p>
              </div>
            </div>

            {/* Slide Navigation Dots */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentSlide(i)}
                  className="p-2 min-h-[36px] min-w-[36px] flex items-center justify-center"
                  aria-label={`Show testimonial ${i + 1}`}
                >
                  <span
                    className={`h-2.5 rounded-full transition-all block ${
                      currentSlide === i ? 'w-8 bg-accent' : 'w-2.5 bg-border-strong hover:bg-textMuted'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stay Connected Newsletter Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-surface to-subtle border border-border-subtle shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-md">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Newsletter
            </span>
            <h3 className="font-devanagari text-2xl font-bold text-textPrimary">
              Stay Connected With Gurukulam
            </h3>
            <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
              Subscribe for periodic scriptural insights, upcoming Sanskrit workshops, and sacred festival discourses.
            </p>
          </div>

          <div className="flex-1 max-w-md">
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-accent-soft border border-accent/20 flex items-center space-x-3 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-status-success flex-shrink-0" />
                <span className="text-xs font-medium text-textPrimary">
                  धन्यवाद! You have successfully subscribed to the Gurukulam newsletter.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 px-4 py-3 rounded-full border border-border-subtle bg-surface text-textPrimary text-xs sm:text-sm focus:outline-none focus:border-accent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-on-accent text-xs font-semibold transition-colors flex items-center justify-center space-x-1.5 shadow-subtle flex-shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
