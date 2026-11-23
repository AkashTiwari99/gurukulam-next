'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '../theme/ThemeToggle';
import { FontSizeControl } from '../theme/FontSizeControl';
import { FastSearchModal } from '../search/FastSearchModal';
import { Search, Menu, X, ChevronDown, BookOpen } from 'lucide-react';

const ABOUT_LINKS = [
  { href: '/about', label: 'About Gurukulam', desc: 'Our origin, heritage & pedagogies' },
  { href: '/vision-mission', label: 'Vision & Mission', desc: 'Preserving scriptures & holistic education' },
  { href: '/sanatan-dharma', label: 'Sanatan Dharma', desc: 'Cosmic order, ethics & research' },
  { href: '/team', label: 'Faculty & Acharyas', desc: 'Vedic scholars & instructors' },
];

const DIRECT_NAV_LINKS = [
  { href: '/programs', label: 'Programs' },
  { href: '/campus', label: 'Campus' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/keyboard', label: 'कीबोर्ड' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = React.useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  const aboutRef = React.useRef<HTMLDivElement>(null);

  // Close menus on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
  }, [pathname]);

  // Close on Escape or click outside
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setAboutDropdownOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isLibraryActive =
    pathname === '/library' || pathname.startsWith('/books');
  const isAboutActive = ABOUT_LINKS.some((l) => pathname === l.href);

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

          {/* Desktop Navigation (Clean & Uncluttered) */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Desktop navigation">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-150 ${
                pathname === '/'
                  ? 'bg-accent-soft text-accent font-semibold'
                  : 'text-textSecondary hover:text-textPrimary hover:bg-subtle'
              }`}
            >
              Home
            </Link>

            {/* Direct Library Link */}
            <Link
              href="/library"
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-150 ${
                isLibraryActive
                  ? 'bg-accent-soft text-accent font-semibold'
                  : 'text-textSecondary hover:text-textPrimary hover:bg-subtle'
              }`}
            >
              Library
            </Link>

            {/* Direct Links */}
            {DIRECT_NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
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

            {/* 2. About Dropdown */}
            <div
              ref={aboutRef}
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <Link
                href="/about"
                onClick={() => setAboutDropdownOpen(false)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center space-x-1 transition-all duration-150 ${
                  isAboutActive
                    ? 'bg-accent-soft text-accent font-semibold'
                    : 'text-textSecondary hover:text-textPrimary hover:bg-subtle'
                }`}
                aria-expanded={aboutDropdownOpen}
                aria-haspopup="true"
              >
                <span>About</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${
                    aboutDropdownOpen ? 'rotate-180 text-accent' : ''
                  }`}
                />
              </Link>

              {aboutDropdownOpen && (
                <div className="absolute right-0 mt-1 w-64 rounded-2xl bg-surface border border-border-subtle shadow-elevated p-2 space-y-1 animate-fadeIn z-50">
                  {ABOUT_LINKS.map((subLink) => {
                    const isSubActive = pathname === subLink.href;
                    return (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className={`block px-3 py-2 rounded-xl text-left transition-colors ${
                          isSubActive
                            ? 'bg-accent-soft text-accent'
                            : 'hover:bg-subtle text-textPrimary'
                        }`}
                      >
                        <div className="text-sm font-medium">{subLink.label}</div>
                        <div className="text-[11px] text-textMuted leading-tight mt-0.5">
                          {subLink.desc}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
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

            {/* Global Font Size Scaler */}
            <FontSizeControl />

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
          <div className="lg:hidden border-b border-border-subtle bg-surface/98 backdrop-blur-lg px-4 pt-3 pb-6 space-y-1 animate-fadeIn shadow-elevated max-h-[calc(100vh-4rem)] overflow-y-auto">
            <Link
              href="/"
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === '/' ? 'bg-accent-soft text-accent font-semibold' : 'text-textPrimary hover:bg-subtle'
              }`}
            >
              Home
            </Link>

            {/* Direct Mobile Library Link */}
            <Link
              href="/library"
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isLibraryActive
                  ? 'bg-accent-soft text-accent font-semibold'
                  : 'text-textPrimary hover:bg-subtle'
              }`}
            >
              Library (ग्रन्थागार)
            </Link>

            {/* Direct Links */}
            {DIRECT_NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-accent-soft text-accent font-semibold'
                      : 'text-textPrimary hover:bg-subtle'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile About Accordion */}
            <div className="border-t border-border-subtle py-1 my-1">
              <button
                type="button"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-textPrimary hover:bg-subtle"
              >
                <span>About & Philosophy</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${
                    mobileAboutOpen ? 'rotate-180 text-accent' : ''
                  }`}
                />
              </button>
              {mobileAboutOpen && (
                <div className="pl-4 pr-2 space-y-1 mt-1">
                  {ABOUT_LINKS.map((subLink) => {
                    const isSubActive = pathname === subLink.href;
                    return (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          isSubActive
                            ? 'bg-accent-soft text-accent font-semibold'
                            : 'text-textSecondary hover:text-textPrimary hover:bg-subtle'
                        }`}
                      >
                        {subLink.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile Text Size & Theme Bar */}
            <div className="pt-3 mt-2 border-t border-border-subtle flex items-center justify-between px-4">
              <span className="text-xs text-textMuted font-medium">Text Size & Theme:</span>
              <div className="flex items-center space-x-2">
                <FontSizeControl />
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Fast Search Dialog */}
      <FastSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
