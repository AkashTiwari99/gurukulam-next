import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Gurukulam | Reviving Ancient Vedic Wisdom & Scriptures',
  description: 'Digital Vedic Gurukul platform featuring complete Valmiki Ramayana, Shlok Mala, authentic Sanskrit commentaries, and Vedic typing tools.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sa" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Anti-FOUC Pre-hydration Theme & Font Size Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var m = (stored === 'light' || stored === 'dark' || stored === 'system') ? stored : 'system';
                  var isDark = m === 'dark' || (m === 'system' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  var t = isDark ? 'dark' : 'light';
                  var el = document.documentElement;
                  el.setAttribute('data-theme', t);
                  el.setAttribute('data-theme-mode', m);
                  el.style.colorScheme = t;

                  var savedScale = localStorage.getItem('gurukulam_font_scale');
                  if (savedScale) {
                    var parsed = parseInt(savedScale, 10);
                    if (!isNaN(parsed) && parsed >= 80 && parsed <= 160) {
                      el.style.fontSize = parsed + '%';
                      el.setAttribute('data-font-scale', parsed.toString());
                    }
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-canvas text-textPrimary min-h-screen flex flex-col font-sans selection:bg-accent-soft selection:text-accent">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <Navbar />
          <main id="main-content" className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
