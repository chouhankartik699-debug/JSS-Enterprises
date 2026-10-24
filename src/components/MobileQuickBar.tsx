import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const MobileQuickBar: React.FC<{ onStartProject: () => void }> = ({ onStartProject }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#08090b]/95 backdrop-blur-xl border-t border-white/10 p-2.5 px-3 shadow-[0_-4px_25px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2">
        {/* Direct Phone Call Button */}
        <a
          href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs font-semibold active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Call Now</span>
        </a>

        {/* Direct WhatsApp Chat Button */}
        <a
          href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsappDefaultMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-emerald-500 text-neutral-950 text-xs font-bold active:scale-95 transition-transform shadow-lg shadow-emerald-500/20"
        >
          <MessageCircle className="w-4 h-4 text-neutral-950 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Start Project Inquiry Button */}
        <button
          onClick={onStartProject}
          className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 text-xs font-bold active:scale-95 transition-transform shadow-lg shadow-amber-500/25"
        >
          <span>Start Project</span>
        </button>
      </div>
    </div>
  );
};
