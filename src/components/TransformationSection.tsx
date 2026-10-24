import React, { useState, useRef, useCallback } from 'react';
import { ArrowRight, MoveHorizontal, Sparkles, QrCode, Globe, Video, MessageSquare, Palette } from 'lucide-react';
import { SITE_CONFIG, ASSETS } from '../config/siteConfig';

export const TransformationSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedTransformation, setSelectedTransformation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const icons = [QrCode, Globe, Video, MessageSquare, Palette];

  return (
    <section id="transformation" className="relative py-28 bg-[#07080a] overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-mono mb-3">
            Interactive Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
            From Traditional To Digital
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base md:text-lg">
            Drag the transformation slider below to witness how traditional dining elements evolve into high-impact digital experiences.
          </p>
        </div>

        {/* Draggable Before / After Visual Showcase */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div
            ref={containerRef}
            className="relative h-[340px] sm:h-[460px] md:h-[520px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl select-none cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* Background: Digital Restaurant (After) */}
            <img
              src={ASSETS.heroDigital}
              alt="Digital restaurant after transformation"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover filter brightness-95"
            />
            <div className="absolute top-6 right-6 z-10 glass-panel-amber px-4 py-2 rounded-xl border-amber-500/30 text-xs font-semibold text-amber-300 font-display flex items-center gap-1.5 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>DIGITAL FUTURE</span>
            </div>

            {/* Foreground: Traditional Restaurant (Before) - Clipped */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={ASSETS.traditionalBistro}
                alt="Traditional restaurant before transformation"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover filter brightness-85 contrast-105"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw', maxWidth: 'none' }}
              />
              <div className="absolute top-6 left-6 z-10 glass-panel px-4 py-2 rounded-xl text-xs font-semibold text-neutral-300 font-display border-white/10 shadow-lg">
                <span>TRADITIONAL LEGACY</span>
              </div>
            </div>

            {/* Slider Dividing Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 shadow-[0_0_20px_#f59e0b] z-20 -translate-x-1/2"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Drag Handle Bubble */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-400 border-2 border-neutral-950 text-neutral-950 flex items-center justify-center shadow-xl shadow-amber-500/50 hover:scale-110 active:scale-95 transition-transform">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>

            {/* Bottom helper cue */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-neutral-950/80 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[11px] text-neutral-300 pointer-events-none">
              Drag horizontally to inspect transformation
            </div>
          </div>
        </div>

        {/* 5 Transformation Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SITE_CONFIG.transformationComparisons.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            const isSelected = selectedTransformation === idx;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedTransformation(idx)}
                className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'glass-panel-amber border-amber-500/40 shadow-xl shadow-amber-500/10 -translate-y-1'
                    : 'glass-panel border-white/5 hover:border-white/15 hover:-translate-y-0.5'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-neutral-400 font-medium">
                    {item.stat}
                  </span>
                </div>

                {/* Transformation Title */}
                <h3 className="text-base font-bold text-white font-display">
                  {item.title}
                </h3>

                {/* Comparison Details */}
                <div className="mt-4 space-y-3 pt-3 border-t border-white/5">
                  <div className="text-xs">
                    <div className="text-neutral-400 uppercase tracking-wider font-mono text-[10px] mb-1">
                      Traditional
                    </div>
                    <p className="text-neutral-400 line-through opacity-80">
                      {item.traditionalDesc}
                    </p>
                  </div>

                  <div className="text-xs">
                    <div className="text-amber-400 uppercase tracking-wider font-mono text-[10px] mb-1 flex items-center gap-1">
                      <span>Digital Evolution</span>
                      <ArrowRight className="w-3 h-3 text-amber-400" />
                    </div>
                    <p className="text-neutral-200 font-medium">
                      {item.digitalDesc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
