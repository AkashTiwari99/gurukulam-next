import * as React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border-subtle bg-surface/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Vision */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-accent text-on-accent flex items-center justify-center font-bold text-xs shadow-subtle">
                GURU
              </div>
              <span className="font-bold text-lg text-textPrimary">Gurukulam</span>
            </div>
            <p className="text-sm text-textSecondary max-w-md leading-relaxed">
              Dedicated to reviving and disseminating the profound spiritual, philosophical, and moral wisdom of Sanatan Dharma through authentic Vedic scriptures, digitized Sanskrit texts, and modern educational tools.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-textMuted">
              <a
                href="tel:+919986279053"
                className="inline-flex items-center space-x-1.5 hover:text-accent transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>+91 9986279053</span>
              </a>
              <a
                href="mailto:a7333ji@gmail.com"
                className="inline-flex items-center space-x-1.5 hover:text-accent transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>a7333ji@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Scriptures & Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-textMuted uppercase tracking-wider">
              Scriptures & Tools
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/books/ramayana" className="text-textSecondary hover:text-accent transition-colors">
                  श्री वाल्मीकि रामायण (24,000 Shlokas)
                </Link>
              </li>
              <li>
                <Link href="/books/shlok-mala/1" className="text-textSecondary hover:text-accent transition-colors">
                  श्लोक माला (Audio Recitation)
                </Link>
              </li>
              <li>
                <Link href="/keyboard" className="text-textSecondary hover:text-accent transition-colors">
                  Vedic Devanagari Virtual Keyboard
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-textSecondary hover:text-accent transition-colors">
                  Digital Granthalaya & PDFs
                </Link>
              </li>
            </ul>
          </div>

          {/* Gurukul & Philosophy */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-textMuted uppercase tracking-wider">
              About & Campus
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-textSecondary hover:text-accent transition-colors">
                  About Gurukulam
                </Link>
              </li>
              <li>
                <Link href="/vision-mission" className="text-textSecondary hover:text-accent transition-colors">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link href="/sanatan-dharma" className="text-textSecondary hover:text-accent transition-colors">
                  Sanatan Dharma Philosophy
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-textSecondary hover:text-accent transition-colors">
                  Faculty & Acharyas
                </Link>
              </li>
              <li>
                <Link href="/campus" className="text-textSecondary hover:text-accent transition-colors">
                  Campus & Dinacharya Schedule
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-textSecondary hover:text-accent transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-textSecondary hover:text-accent transition-colors">
                  Contact & Campus Visits
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between text-xs text-textMuted gap-4">
          <p>© {new Date().getFullYear()} Gurukulam. All rights reserved.</p>
          <p className="text-center sm:text-right font-devanagari">
            सत्यमेव जयते नानृतम् • धर्मो रक्षति रक्षितः
          </p>
        </div>
      </div>
    </footer>
  );
}
