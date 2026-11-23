'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '../theme/ThemeToggle';
import { FastSearchModal } from '../search/FastSearchModal';
import { Search, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/books', label: 'Books' },
  { href: '/books/ramayana', label: 'रामायण' },
  { href: '/books/shlok-mala/1', label: 'श्लोक माला' },
  { href: '/keyboard', label: 'कीबोर्ड' },
  { href: '/programs', label: 'Programs' },
  { href: '/campus', label: 'Campus' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  // Close mobile drawer on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close on Escape
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border-subtle bg-canvas/80 backdrop-blur-md transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center space-x-3 group min-h-[44px]">
            <div className="w-10 h-10 rounded-full bg-accent text-on-accent flex items-center justify-center font-bold text-sm shadow-subtle group-hover:scale-105 transition-transform duration-200">
              GURU
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight text-textPrimary group-hover:text-accent transition-colors">
                Gurukulam
              </span>
              <span className="text-[10px] text-textMuted tracking-wider uppercase font-medium">
                Reviving Ancient Wisdom
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Desktop navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-accent-soft text-accent font-semibold'
                      : 'text-textSecondary hover:text-textPrimary hover:bg-subtle'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions: Search, Theme Toggle, Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-border-subtle bg-surface hover:bg-subtle text-textMuted hover:text-textPrimary text-xs transition-colors shadow-subtle min-h-[36px]"
              aria-label="Open search"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 rounded bg-subtle text-[10px] font-mono border border-border-subtle">
                ⌘K
              </kbd>
            </button>

            {/* Theme Switcher */}
            <ThemeToggle />

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-textSecondary hover:text-textPrimary hover:bg-subtle focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-border-subtle bg-surface/98 backdrop-blur-lg px-4 pt-3 pb-6 space-y-1 animate-fadeIn shadow-elevated">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors min-h-[44px] flex items-center ${
                    isActive
                      ? 'bg-accent-soft text-accent font-semibold'
                      : 'text-textPrimary hover:bg-subtle'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Fast Search Dialog */}
      <FastSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
