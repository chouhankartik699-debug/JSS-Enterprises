import React from 'react';
import { Utensils, Layout, Smartphone, Clapperboard, ShoppingBag, Zap, Check } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const pillars = [
    {
      title: 'Restaurant-Focused Solutions',
      desc: 'We do not build generic business sites. Every feature, menu interaction, and booking layout is designed around food culture, kitchen timing, and dining habits.',
      icon: Utensils,
    },
    {
      title: 'Modern Design',
      desc: 'Cinematic visual aesthetics, dark luxury finishes, and fluid animations that make your establishment look world-class.',
      icon: Layout,
    },
    {
      title: 'Mobile-First Experience',
      desc: 'Over 85% of restaurant searches occur on phones. Our websites and QR menus load instantly on every smartphone.',
      icon: Smartphone,
    },
    {
      title: 'Creative Content',
      desc: 'In-house video creation, 4K food cinematography, and AI-powered promotional visual assets to feed your social channels.',
      icon: Clapperboard,
    },
    {
      title: 'Easy Digital Ordering',
      desc: 'Frictionless QR menu and WhatsApp ordering flows that bypass hefty aggregator commission fees.',
      icon: ShoppingBag,
    },
    {
      title: 'Complete Digital Transformation',
      desc: 'From initial brand audit to live deployment, menu digitalization, and post-launch creative growth, we manage the entire evolution.',
      icon: Zap,
    },
  ];

  return (
    <section className="relative py-28 bg-[#08090b] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-mono mb-3">
            The JSS Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
            More Than Just A Website.
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base md:text-lg">
            We create complete digital experiences designed around the way modern customers discover, explore and interact with restaurants and cafés.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-7 rounded-2xl glass-panel border-white/5 hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-amber-400/90 font-mono">
                  <Check className="w-3.5 h-3.5" />
                  <span>JSS Standard Deliverable</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
