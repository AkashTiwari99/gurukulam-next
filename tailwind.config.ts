import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--bg-canvas)',
        surface: 'var(--bg-surface)',
        subtle: 'var(--bg-subtle)',
        glass: 'var(--bg-glass)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        textMuted: 'var(--text-muted)',
        accent: {
          DEFAULT: 'var(--accent-primary)',
          hover: 'var(--accent-hover)',
          soft: 'var(--accent-soft)',
          on: 'var(--text-on-accent)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          strong: 'var(--border-strong)',
        },
        status: {
          success: 'var(--status-success)',
          warning: 'var(--status-warning)',
          danger: 'var(--status-danger)',
          info: 'var(--status-info)',
        },
      },
      boxShadow: {
        subtle: 'var(--shadow-sm)',
        elevated: 'var(--shadow-md)',
      },
      fontFamily: {
        vedic: ['"Siddhanta"', '"Adishila SanVedic"', '"AdishilaSanVedic"', '"Noto Serif Devanagari"', 'serif'],
        siddhanta: ['"Siddhanta"', '"Adishila SanVedic"', 'serif'],
        adishila: ['"Adishila SanVedic"', '"AdishilaSanVedic"', '"Siddhanta"', 'serif'],
        devanagari: ['"Siddhanta"', '"Adishila SanVedic"', '"AdishilaSanVedic"', '"Noto Serif Devanagari"', 'serif'],
        sans: ['"Poppins"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
