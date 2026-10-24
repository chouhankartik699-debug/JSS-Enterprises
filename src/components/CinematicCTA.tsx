import React from 'react';
import { ArrowRight, Sparkles, MessageCircle, ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface CinematicCTAProps {
  onStartProject: () => void;
  onContactClick: () => void;
}

export const CinematicCTA: React.FC<CinematicCTAProps> = ({ onStartProject, onContactClick }) => {
  return (
    <section className="relative py-32 bg-[#060709] overflow-hidden flex items-center justify-center border-t border-white/5">
      {/* Abstract 3D glowing horizon & ambient rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-600/20 via-amber-400/10 to-amber-600/20 rounded-full blur-[160px]" />
        {/* Subtle grid plane */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Animated glowing arrow indicator moving toward the CTA */}
        <div className="mb-6 flex flex-col items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
          <div className="h-8 w-0.5 bg-gradient-to-b from-transparent via-amber-400 to-amber-500" />
          <ChevronDown className="w-5 h-5 text-amber-400 animate-bounce" />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-mono font-medium mb-3">
          Step Into Tomorrow
        </span>

        {/* Big Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-display tracking-tight leading-tight max-w-3xl">
          Is Your Business Ready For Its{' '}
          <span className="text-gradient-amber drop-shadow-[0_0_40px_rgba(245,158,11,0.5)]">
            Digital Future?
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed">
          Take your restaurant or café from traditional to digital with JSS Enterprises.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 text-base font-semibold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-xl shadow-[0_0_35px_rgba(245,158,11,0.6)] hover:shadow-[0_0_50px_rgba(245,158,11,0.8)] hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer font-display"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 text-neutral-950" />
          </button>

          <button
            onClick={onContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl backdrop-blur-md transition-all cursor-pointer"
          >
            <span>Contact JSS Enterprises</span>
          </button>
        </div>

        {/* Direct WhatsApp Quick Connect */}
        <div className="mt-8 flex items-center gap-2 text-xs text-neutral-400">
          <span>Need immediate assistance?</span>
          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('Hello JSS Enterprises, I would like to consult about transforming my restaurant/café.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 underline underline-offset-4"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
