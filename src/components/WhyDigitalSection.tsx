import React from 'react';
import { Search, Crown, Sparkles, MessageCircle, TrendingUp, CheckCircle } from 'lucide-react';

export const WhyDigitalSection: React.FC = () => {
  const benefits = [
    {
      title: 'Better Online Presence',
      tagline: 'Discoverability & Visibility',
      description: 'Help customers discover and understand the business online. When guests search for food, cuisine types, or ambient cafés in your neighborhood, your business stands out with verified menus and direct reservation channels.',
      icon: Search,
      points: ['Local search visibility on Google Maps', 'Always up-to-date business hours & location', 'Direct table bookings without third-party fees'],
    },
    {
      title: 'Professional Brand Image',
      tagline: 'Trust & Distinction',
      description: 'Give restaurants and cafés a modern digital identity. Build an unforgettable signature aesthetic that signals culinary excellence, hygiene standards, and hospitality warmth before guests even step through your doors.',
      icon: Crown,
      points: ['Signature color palette and typography', 'High-resolution food & interior photography', 'Cohesive digital presence across every screen'],
    },
    {
      title: 'Easy Customer Experience',
      tagline: 'Accessibility & Frictionless Flow',
      description: 'Make menus, information and ordering easier to access. Guests scan a table QR code and instantly browse dishes with vivid photos, spice level badges, allergen warnings, and chef specials without waiting for paper menus.',
      icon: Sparkles,
      points: ['Zero app downloads or registrations required', 'Clear allergen and dietary preference tags', 'Real-time item availability indication'],
    },
    {
      title: 'Simple Ordering',
      tagline: 'Direct WhatsApp Connection',
      description: 'Reduce friction through digital and WhatsApp-based ordering. Diners customize their items and send structured order receipts directly to your WhatsApp business line, eliminating phone misunderstandings and commission deductions.',
      icon: MessageCircle,
      points: ['Pre-formatted order summaries sent straight to chat', 'Zero aggregator commission fees', 'Direct customer relationship ownership'],
    },
    {
      title: 'Modern Marketing',
      tagline: 'Engaging Food Storytelling',
      description: 'Use professional videos and social content to promote the business. In today’s visual dining culture, sensory food reels and curated social media posts turn casual scrollers into enthusiastic dine-in visitors.',
      icon: TrendingUp,
      points: ['High-impact 4K cinematic reels & AI video clips', 'Weekly story offers and special event graphics', 'Sharable digital content built for modern guests'],
    },
  ];

  return (
    <section className="relative py-28 bg-[#090b0f] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-mono mb-3">
            Strategic Value
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
            Your Customers Are Digital. Your Business Should Be Too.
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base md:text-lg">
            Modern guests expect instant mobile information, interactive menus, and effortless ordering. Here is how digital transformation elevates daily operations.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className={`p-7 rounded-2xl glass-panel border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                  idx === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-neutral-400 tracking-wider">
                      {b.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display mt-2">
                    {b.title}
                  </h3>

                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/5 space-y-2">
                  {b.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
