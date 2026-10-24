import React, { useState } from 'react';
import { Laptop, Smartphone, QrCode, MessageSquare, Play, Sparkles, Send, Check } from 'lucide-react';
import { ASSETS } from '../config/siteConfig';

export const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'laptop' | 'qr' | 'whatsapp' | 'video'>('laptop');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const tabs = [
    { id: 'laptop' as const, label: 'Bespoke Website', icon: Laptop },
    { id: 'qr' as const, label: 'QR Digital Menu', icon: QrCode },
    { id: 'whatsapp' as const, label: 'WhatsApp Ordering', icon: MessageSquare },
    { id: 'video' as const, label: 'Promotional Reel', icon: Play },
  ];

  return (
    <section id="work" className="relative py-28 bg-[#090a0d] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-mono mb-3">
            Digital Architecture & Design
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
            See The Transformation
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base md:text-lg">
            Explore interactive prototypes showcasing how culinary concepts, contactless menus, and direct ordering interfaces are brought to life.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="mt-12 flex items-center justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-neutral-900/90 border border-white/10 rounded-2xl backdrop-blur-md">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 shadow-lg shadow-amber-500/25'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Mockup Display Canvas with 3D Depth */}
        <div className="mt-14 max-w-4xl mx-auto">
          {/* 1. Laptop Website Mockup */}
          {activeTab === 'laptop' && (
            <div className="group relative rounded-3xl p-3 sm:p-6 glass-panel border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.01] hover:border-amber-500/40">
              {/* Laptop Shell Top Bar */}
              <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="px-4 py-1 rounded-md bg-neutral-950 text-neutral-400 font-mono text-[11px] border border-white/5 truncate max-w-xs">
                  https://bistro-modern.jssenterprises.com
                </div>
                <span className="text-[11px] text-amber-400 font-mono font-medium">SSL SECURED</span>
              </div>

              {/* Laptop Screen Content */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-neutral-950 shadow-inner">
                <img
                  src={ASSETS.showcaseWebsite}
                  alt="Modern restaurant website concept"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
                    Responsive Showcase Concept
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                    Bespoke Gastronomy Web Portal
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mt-1">
                    Custom built for high-end dining: table reservations, menu filters, Google Maps synchronization, and instant load times.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 2. QR Digital Menu Mockup */}
          {activeTab === 'qr' && (
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-4">
              {/* Phone Frame */}
              <div className="relative w-full max-w-[320px] rounded-[40px] border-4 border-neutral-700 bg-neutral-950 p-3 shadow-2xl shadow-amber-500/10 hover:border-amber-400/60 transition-all duration-300">
                <div className="w-32 h-5 bg-neutral-800 rounded-full mx-auto mb-2" />
                <div className="rounded-[30px] overflow-hidden aspect-[9/16] bg-neutral-900 relative">
                  <img
                    src={ASSETS.showcaseQr}
                    alt="Smartphone QR digital menu"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-24 h-1 bg-neutral-600 rounded-full mx-auto mt-2" />
              </div>

              {/* Feature Points */}
              <div className="max-w-md space-y-4">
                <div className="text-xs uppercase font-mono tracking-widest text-amber-400 font-medium">
                  Mobile Menu Experience
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Effortless Smartphone QR Menu
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Guests scan a QR code placed on their table and immediately access high-res imagery, ingredients, allergen warnings, and prices.
                </p>

                <div className="space-y-3 pt-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <QrCode className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-white font-medium">
                      Zero app installation needed — works directly in Safari & Chrome
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-white font-medium">
                      Update prices and out-of-stock items in real-time from your phone
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. WhatsApp Ordering Mockup */}
          {activeTab === 'whatsapp' && (
            <div className="max-w-xl mx-auto rounded-3xl p-6 glass-panel border-white/10 shadow-2xl">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  WA
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    JSS WhatsApp Ordering Bridge
                  </h4>
                  <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Kitchen Bot Online
                  </span>
                </div>
              </div>

              {/* Chat Messages Simulation */}
              <div className="space-y-3 py-3 font-sans text-xs sm:text-sm">
                <div className="bg-neutral-800 text-neutral-200 p-3.5 rounded-2xl rounded-tl-sm max-w-[85%]">
                  👋 Welcome to <strong className="text-amber-400">Artisan Bistro</strong>! What would you like to order today?
                </div>

                <div className="bg-emerald-900/60 border border-emerald-500/30 text-white p-4 rounded-2xl rounded-tr-sm ml-auto max-w-[90%] space-y-2">
                  <div className="font-semibold text-emerald-300 flex items-center justify-between">
                    <span>🛒 New Order #JSS-842</span>
                    <span className="text-[11px] font-mono">12:34 PM</span>
                  </div>
                  <div className="text-xs text-neutral-200 divide-y divide-white/10">
                    <div className="py-1 flex justify-between">
                      <span>1× Truffle Mushroom Risotto</span>
                      <span className="font-mono text-amber-300">$22.50</span>
                    </div>
                    <div className="py-1 flex justify-between">
                      <span>2× Smoked Vanilla Cold Brew</span>
                      <span className="font-mono text-amber-300">$13.50</span>
                    </div>
                    <div className="py-1.5 flex justify-between font-bold text-white">
                      <span>Total Amount:</span>
                      <span className="font-mono text-emerald-400">$36.00</span>
                    </div>
                  </div>
                  <div className="text-[11px] text-neutral-300 pt-1">
                    📍 Table #04 · Dine-In · Note: Less ice in cold brew
                  </div>
                </div>

                <div className="bg-neutral-800 text-neutral-200 p-3.5 rounded-2xl rounded-tl-sm max-w-[85%] flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Order received & sent to the kitchen! Estimated time: 15 mins.</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <input
                  type="text"
                  disabled
                  placeholder="Automated structured WhatsApp order message..."
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-neutral-400 cursor-not-allowed"
                />
                <button
                  disabled
                  className="p-2.5 rounded-xl bg-emerald-500 text-neutral-950 cursor-not-allowed opacity-80"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* 4. Promotional Video Preview Mockup */}
          {activeTab === 'video' && (
            <div className="relative rounded-3xl overflow-hidden aspect-video bg-neutral-950 border border-white/10 shadow-2xl group">
              <img
                src={ASSETS.heroDigital}
                alt="Promotional video preview"
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isVideoPlaying ? 'scale-105 filter brightness-105' : 'filter brightness-75'
                }`}
              />

              {/* Play Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center">
                <button
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow-2xl shadow-amber-500/50 hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                  aria-label={isVideoPlaying ? 'Pause video preview' : 'Play video preview'}
                >
                  <Play className={`w-8 h-8 ${isVideoPlaying ? 'opacity-80' : 'translate-x-0.5'}`} fill="currentColor" />
                </button>

                <h4 className="text-xl sm:text-2xl font-bold text-white font-display mt-6">
                  {isVideoPlaying ? 'Simulated 4K Hospitality Reel Playing' : 'Cinematic 4K Food & Ambience Reel'}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-md mt-2">
                  Designed for Instagram Reels, TikTok & YouTube Shorts to entice local food lovers.
                </p>

                {isVideoPlaying && (
                  <div className="mt-4 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-[11px] font-mono text-amber-300 animate-pulse">
                    ● SIMULATED PREVIEW ACTIVE
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
