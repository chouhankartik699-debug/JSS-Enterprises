import React, { useState } from 'react';
import { ArrowRight, Sparkles, Smartphone, UtensilsCrossed, ChevronDown } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';
import { SITE_CONFIG } from '../config/siteConfig';

interface Hero3DProps {
  onStartProject: () => void;
}

export const Hero3D: React.FC<Hero3DProps> = ({ onStartProject }) => {
  const [viewMode, setViewMode] = useState<'digital' | 'traditional'>('digital');

  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Three.js interactive 3D WebGL background */}
      <Hero3DCanvas mode={viewMode} />

      {/* Ambient gradient meshes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-amber-500/15 via-amber-700/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#08090b] via-[#08090b]/80 to-transparent pointer-events-none" />

      {/* Main Content Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Brand Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-amber-500/20 text-xs md:text-sm text-neutral-300 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="font-semibold text-amber-300 font-display">TRADITIONAL BUSINESS. DIGITAL FUTURE.</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.08] max-w-4xl">
          Transform Your Traditional Business Into a{' '}
          <span className="text-gradient-amber drop-shadow-[0_0_35px_rgba(245,158,11,0.4)]">
            Digital Experience
          </span>
          .
        </h1>

        {/* Supporting text */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed font-normal">
          {SITE_CONFIG.supportingMessage} From modern responsive websites and contactless QR menus to viral promotional videos and commission-free WhatsApp ordering.
        </p>

        {/* Interactive 3D Mode Toggle */}
        <div className="mt-8 flex items-center justify-center p-1.5 rounded-xl bg-neutral-900/80 border border-white/10 backdrop-blur-md">
          <button
            onClick={() => setViewMode('traditional')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
              viewMode === 'traditional'
                ? 'bg-neutral-800 text-amber-300 border border-amber-500/30 shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Traditional Perspective</span>
          </button>
          <button
            onClick={() => setViewMode('digital')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
              viewMode === 'digital'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-semibold shadow-lg shadow-amber-500/25'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Digital Transformation View</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm md:text-base font-semibold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-xl shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:shadow-[0_0_40px_rgba(245,158,11,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer font-display"
          >
            <span>Start Your Transformation</span>
            <ArrowRight className="w-4 h-4 text-neutral-950" />
          </button>

          <button
            onClick={scrollToServices}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm md:text-base font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl backdrop-blur-md transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Explore Services</span>
          </button>
        </div>

        {/* Value Proposition Pills (Unboxed Editorial Rule Compliant) */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs md:text-sm text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Bespoke Restaurant & Café Web Design</span>
          </div>
          <span className="text-neutral-700 hidden sm:inline">·</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Commission-Free WhatsApp Ordering</span>
          </div>
          <span className="text-neutral-700 hidden sm:inline">·</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>Cinematic & AI Video Production</span>
          </div>
        </div>
      </div>

      {/* Down arrow scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-neutral-500 hover:text-amber-400 transition-colors flex flex-col items-center gap-1 cursor-pointer"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};
