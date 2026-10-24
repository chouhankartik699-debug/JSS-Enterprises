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
    <section id="about" className="relative py-16 sm:py-28 bg-[#090b0e] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-amber-500/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-mono mb-2 sm:mb-3">
            About JSS Enterprises
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            We Bring Traditional Businesses Into The Digital World.
          </h2>
          <p className="mt-3 sm:mt-5 text-sm sm:text-lg text-neutral-300 leading-relaxed">
            JSS Enterprises Udaipur aur pure Rajasthan ke restaurants aur cafés ko modernize karne me madad karta hai. Websites aur QR menus se lekar social media reels aur direct WhatsApp ordering tak, hum aapke business ko ek powerful digital identity dete hain.
          </p>
        </div>

        {/* Dual Realm Animated Interactive Comparison */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Interactive Mode & Explanations */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="inline-flex p-1 bg-neutral-900 rounded-xl border border-white/10 w-full">
                <button
                  onClick={() => setActiveTab('traditional')}
                  className={`flex-1 px-3 sm:px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all min-h-[44px] cursor-pointer ${
                    activeTab === 'traditional'
                      ? 'bg-neutral-800 text-amber-300 shadow-md border border-neutral-700'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                    <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Traditional Setup
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('digital')}
                  className={`flex-1 px-3 sm:px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all min-h-[44px] cursor-pointer ${
                    activeTab === 'digital'
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 shadow-lg shadow-amber-500/20'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                    <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    JSS Digital Setup
                  </span>
                </button>
              </div>

              {activeTab === 'traditional' ? (
                <div className="glass-panel p-5 sm:p-8 rounded-2xl border-white/5 space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-amber-500 font-semibold text-xs sm:text-sm">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 shrink-0" />
                    <span>The Traditional Restaurant Bottleneck</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Zyadatar restaurants sirf purane paper menus aur phone calls par depend rehte hain jisse kayi problems hoti hain:
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold shrink-0">✕</span>
                      <span>Har bar price badalne par menu card reprint karwane ka kharcha</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold shrink-0">✕</span>
                      <span>Delivery apps ko 20–30% heavy commission dena</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold shrink-0">✕</span>
                      <span>Customers ko dishes ki visual photos dekhne ko na milna</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold shrink-0">✕</span>
                      <span>Google aur social media par local reach aur discovery kam hona</span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="glass-panel-amber p-5 sm:p-8 rounded-2xl border-amber-500/20 space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs sm:text-sm">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
                    <span>The Modern Digital Dining Experience</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                    JSS Enterprises aapke café/restaurant ko direct mobile channels deta hai bina kisi commission ke:
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Phone camera se instant QR scan — bina kisi app download ke</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Direct WhatsApp cart checkout — 0% platform commission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Cinematic 4K promo reels jo Instagram par nayi footfall laye</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Aapke customers ka direct data aur repeat orders aapke paas</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <button
              onClick={scrollToServices}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors pt-1 group cursor-pointer"
            >
              <span>Hamari services explore karein</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column: Visual Side-by-Side Representation */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-950 flex flex-col sm:flex-row min-h-[300px] sm:min-h-[380px]">
            {/* Traditional Half */}
            <div className={`relative flex-1 transition-all duration-500 overflow-hidden ${activeTab === 'traditional' ? 'flex-[1.5]' : 'flex-[0.8] opacity-60'}`}>
              <img
                src={ASSETS.traditionalBistro}
                alt="Traditional restaurant interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-75 contrast-110 min-h-[180px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 sm:p-6 flex flex-col justify-end">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-amber-300/80 font-mono font-semibold">
                  Traditional Legacy
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white font-display mt-0.5 sm:mt-1">Paper & Manual Orders</h4>
                <p className="text-[11px] sm:text-xs text-neutral-300 mt-0.5">
                  Offline dining bina kisi smart digital connection ke.
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
                className="w-full h-full object-cover filter brightness-90 contrast-105 min-h-[180px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 sm:p-6 flex flex-col justify-end">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-amber-400 font-mono font-semibold">
                  Digital Future
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white font-display mt-0.5 sm:mt-1">Smart Connected Dining</h4>
                <p className="text-[11px] sm:text-xs text-neutral-300 mt-0.5">
                  Fast QR menu, instant WhatsApp cart & 3D website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
