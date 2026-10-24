import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles, Building2, Smartphone } from 'lucide-react';
import { ASSETS } from '../config/siteConfig';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const [activeTab, setActiveTab] = useState<'traditional' | 'digital'>('digital');

  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative py-28 bg-[#090b0e] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-mono mb-3">
            About JSS Enterprises
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            We Bring Traditional Businesses Into The Digital World.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed">
            JSS Enterprises is a digital services company focused on helping restaurants and cafés modernize their customer experience and online presence. From websites and QR menus to promotional content and digital ordering solutions, we help businesses create a stronger and more professional digital identity.
          </p>
        </div>

        {/* Dual Realm Animated Interactive Comparison */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Mode & Explanations */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex p-1 bg-neutral-900 rounded-xl border border-white/10 w-full sm:w-auto">
                <button
                  onClick={() => setActiveTab('traditional')}
                  className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                    activeTab === 'traditional'
                      ? 'bg-neutral-800 text-amber-300 shadow-md border border-neutral-700'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Traditional Setup
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('digital')}
                  className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                    activeTab === 'digital'
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 shadow-lg shadow-amber-500/20'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    JSS Digital Setup
                  </span>
                </button>
              </div>

              {activeTab === 'traditional' ? (
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-amber-500 font-semibold text-sm">
                    <AlertCircle className="w-5 h-5 text-amber-500" />
                    <span>The Traditional Restaurant Bottleneck</span>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    Most beloved traditional dining establishments rely entirely on physical paper menus, offline word of mouth, and hectic telephone calls.
                  </p>
                  <ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
                    <li className="flex items-start gap-2.5">
                      <span className="text-rose-400 mt-0.5">✕</span>
                      <span>Constant reprinting costs whenever prices or ingredients adjust</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-rose-400 mt-0.5">✕</span>
                      <span>High 20–30% commissions surrendered to third-party delivery apps</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-rose-400 mt-0.5">✕</span>
                      <span>No visual preview of dishes for new curious guests</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-rose-400 mt-0.5">✕</span>
                      <span>Limited visibility beyond guests physically passing by the street</span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="glass-panel-amber p-6 sm:p-8 rounded-2xl border-amber-500/20 space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span>The Modern Digital Dining Experience</span>
                  </div>
                  <p className="text-sm text-neutral-200 leading-relaxed">
                    JSS Enterprises equips your café or restaurant with direct digital channels that protect your brand identity and customer loyalty.
                  </p>
                  <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Instant QR menu scanning with zero app installation required</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Direct WhatsApp cart checkout with 0% platform commission</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Cinematic 4K promo reels capturing sensory food appeal</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Full ownership of guest relationships and reservation data</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <button
              onClick={scrollToServices}
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors pt-2 group"
            >
              <span>Explore our transformation capabilities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column: Visual Side-by-Side Representation */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-950 flex flex-col sm:flex-row min-h-[380px]">
            {/* Traditional Half */}
            <div className={`relative flex-1 transition-all duration-500 overflow-hidden ${activeTab === 'traditional' ? 'flex-[1.5]' : 'flex-[0.8] opacity-60'}`}>
              <img
                src={ASSETS.traditionalBistro}
                alt="Traditional restaurant interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-75 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs uppercase tracking-wider text-amber-300/80 font-mono font-semibold">
                  Traditional Legacy
                </span>
                <h4 className="text-lg font-bold text-white font-display mt-1">Paper & Manual Workflow</h4>
                <p className="text-xs text-neutral-300 mt-1">
                  Cozy hospitality without the modern digital connection.
                </p>
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-full h-0.5 sm:w-0.5 sm:h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent z-10" />

            {/* Digital Transformation Half */}
            <div className={`relative flex-1 transition-all duration-500 overflow-hidden ${activeTab === 'digital' ? 'flex-[1.5]' : 'flex-[0.8] opacity-60'}`}>
              <img
                src={ASSETS.heroDigital}
                alt="Modern digital restaurant experience"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-mono font-semibold">
                  Digital Future
                </span>
                <h4 className="text-lg font-bold text-white font-display mt-1">Smart Connected Dining</h4>
                <p className="text-xs text-neutral-300 mt-1">
                  Seamless QR menus, WhatsApp ordering & interactive 3D web experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
