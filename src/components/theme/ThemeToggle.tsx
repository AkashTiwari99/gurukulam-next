'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Laptop } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-border-subtle bg-surface flex items-center justify-center opacity-50">
        <Sun className="w-4 h-4 text-textMuted" />
      </div>
    );
  }

  const cycleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className="w-9 h-9 rounded-full border border-border-subtle bg-surface hover:bg-subtle flex items-center justify-center transition-all duration-200 text-textSecondary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
      title={`Current theme: ${theme} (Click to switch)`}
      aria-label="Switch color theme"
    >
      {theme === 'light' && <Sun className="w-4 h-4 text-accent" />}
      {theme === 'dark' && <Moon className="w-4 h-4 text-accent" />}
      {theme === 'system' && <Laptop className="w-4 h-4 text-accent" />}
    </button>
  );
}
