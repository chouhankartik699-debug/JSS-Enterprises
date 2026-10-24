import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Transformation', href: '#transformation' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? isLight
              ? 'py-2 sm:py-3 header-scrolled'
              : 'py-2 sm:py-3 bg-[#08090b]/90 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/40'
            : 'py-2.5 sm:py-5 bg-gradient-to-b from-[#08090b]/80 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Zone 1: Logo Wordmark (Compact on 9:16 mobile) */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className={`flex items-center gap-1.5 sm:gap-2 group shrink min-w-0 ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}
          >
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-amber-500 group-hover:scale-125 transition-transform shadow-[0_0_10px_#f59e0b] shrink-0" />
            <span className="font-extrabold tracking-tight font-display text-sm sm:text-xl truncate">
              {SITE_CONFIG.brandName}
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop only) */}
          <nav className={`hidden lg:flex items-center gap-7 text-sm font-medium ${isLight ? 'text-slate-700' : 'text-neutral-300'}`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative py-1 group transition-colors ${
                  isLight ? 'hover:text-amber-700' : 'hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions (Mobile-Optimized) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Theme Toggle - Icon only on mobile to save space */}
            <ThemeToggle />

            {/* Desktop WhatsApp Link */}
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-all border ${
                isLight
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                  : 'text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border-white/10'
              }`}
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp</span>
            </a>

            {/* Start CTA Button - hidden on 9:16 mobile screens (as it's in the bottom bar), visible on sm+ */}
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs md:text-sm font-semibold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-lg shadow-[0_0_20px_-3px_rgba(245,158,11,0.5)] hover:shadow-[0_0_25px_rgba(245,158,11,0.7)] active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-950" />
            </button>

            {/* Mobile Hamburger Menu Button - Always visible & high contrast */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center min-w-[38px] min-h-[38px] lg:hidden ${
                isLight
                  ? 'bg-slate-100 border-slate-300 text-slate-800 active:bg-slate-200'
                  : 'bg-white/5 border-white/10 text-neutral-200 active:bg-white/15'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Perfect for 9:16 Portrait Phones) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Menu Card Sheet */}
          <div
            className={`fixed top-14 left-3 right-3 rounded-2xl p-5 shadow-2xl z-50 max-h-[82vh] overflow-y-auto border animate-in fade-in slide-in-from-top-4 duration-200 ${
              isLight
                ? 'bg-white border-slate-200 text-slate-900 shadow-2xl'
                : 'bg-[#0e1015] border-white/15 text-neutral-200 shadow-[0_10px_40px_rgba(0,0,0,0.8)]'
            }`}
          >
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-inherit">
              <span className={`text-xs uppercase tracking-widest font-mono font-medium ${isLight ? 'text-slate-500' : 'text-neutral-400'}`}>
                Navigation Menu
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-md text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3.5 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between active:scale-[0.99] ${
                    isLight
                      ? 'text-slate-800 hover:text-amber-700 hover:bg-slate-50 active:bg-slate-100'
                      : 'text-neutral-200 hover:text-white hover:bg-white/5 active:bg-white/10'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className={`text-xs font-mono ${isLight ? 'text-slate-400' : 'text-neutral-600'}`}>→</span>
                </a>
              ))}
            </div>

            <div className={`mt-5 pt-4 border-t flex flex-col gap-2.5 ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3.5 px-4 rounded-xl text-center font-bold text-sm bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 shadow-md active:scale-[0.98]"
              >
                Start Your Project
              </button>
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-4 rounded-xl text-center font-medium text-sm border flex items-center justify-center gap-2 active:scale-[0.98] ${
                  isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-800'
                    : 'bg-white/5 border-white/10 text-neutral-200'
                }`}
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
