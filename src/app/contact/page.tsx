'use client';

import * as React from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-canvas py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-soft text-accent">
            सम्पर्क • Reach Out
          </span>
          <h1 className="font-devanagari text-4xl sm:text-5xl font-bold text-textPrimary">
            Contact & Inquiries
          </h1>
          <p className="text-sm sm:text-base text-textSecondary max-w-xl mx-auto">
            Connect with our Acharyas and administration for admissions, scriptural inquiries, or campus visits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Details Card */}
          <div className="p-8 rounded-3xl bg-surface border border-border-subtle shadow-subtle space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-bold text-lg text-textPrimary">Get in Touch</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="text-xs text-textMuted">Telephone</p>
                    <a
                      href="tel:+919986279053"
                      className="text-sm font-semibold text-textPrimary hover:text-accent transition-colors"
                    >
                      +91 9986279053
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="text-xs text-textMuted">Email Address</p>
                    <a
                      href="mailto:a7333ji@gmail.com"
                      className="text-sm font-semibold text-textPrimary hover:text-accent transition-colors block"
                    >
                      a7333ji@gmail.com
                    </a>
                    <a
                      href="mailto:contact@gurukulam.edu"
                      className="text-xs text-textSecondary hover:text-accent transition-colors block mt-0.5"
                    >
                      contact@gurukulam.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="text-xs text-textMuted">Campus Location</p>
                    <p className="text-sm font-semibold text-textPrimary">
                      Gurukulam Sacred Ashram, Foothills of the Himalayas, Uttarakhand, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-subtle/60 text-xs text-textSecondary border border-border-subtle">
              Visiting hours: Mon–Sat, 9:00 AM – 5:00 PM (Prior appointment recommended).
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-surface border border-border-subtle shadow-subtle">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-14 h-14 rounded-full bg-accent-soft text-accent mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-textPrimary">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-textSecondary max-w-md mx-auto">
                  धन्यवाद! Thank you for reaching out. Our team will respond to your query shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-border-subtle hover:bg-subtle text-xs font-semibold text-textPrimary"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-textSecondary">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-subtle/40 text-textPrimary text-sm focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-textSecondary">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-subtle/40 text-textPrimary text-sm focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-textSecondary">
                    Subject
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Program Admissions or Manuscript Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-subtle/40 text-textPrimary text-sm focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-textSecondary">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message or inquiry here..."
                    className="w-full px-4 py-2.5 rounded-xl border border-border-subtle bg-subtle/40 text-textPrimary text-sm focus:outline-none focus:border-accent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-accent hover:bg-accent-hover text-on-accent text-sm font-semibold transition-all shadow-subtle flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
