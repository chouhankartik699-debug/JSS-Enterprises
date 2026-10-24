import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-28 bg-[#08090b] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-mono mb-3">
            Implementation Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
            From Idea To Digital
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base md:text-lg">
            A structured, 6-phase engineering and creative workflow designed to transform your business smoothly without disrupting daily kitchen and service operations.
          </p>
        </div>

        {/* 6-Step Interactive Timeline */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Step Selection Cards / Stepper */}
          <div className="lg:col-span-5 space-y-3">
            {SITE_CONFIG.processSteps.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'glass-panel-amber border-amber-500/40 shadow-lg shadow-amber-500/10'
                      : 'glass-panel border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xl font-mono font-bold ${
                        isActive ? 'text-amber-400' : 'text-neutral-500'
                      }`}
                    >
                      {item.step}
                    </span>
                    <div>
                      <h4
                        className={`text-base font-bold font-display ${
                          isActive ? 'text-white' : 'text-neutral-300'
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-400 line-clamp-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-amber-400 text-neutral-950 font-bold text-xs'
                        : 'text-neutral-600'
                    }`}
                  >
                    {isActive ? '✓' : <ArrowRight className="w-3.5 h-3.5" />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Active Phase Detailed Showcase */}
          <div className="lg:col-span-7">
            <div className="glass-panel-amber p-8 sm:p-10 rounded-3xl border-amber-500/30 shadow-2xl relative overflow-hidden">
              {/* Top ambient illumination */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl sm:text-5xl font-mono font-extrabold text-amber-400/90">
                  {SITE_CONFIG.processSteps[activeStep].step}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
                  Phase {activeStep + 1} of 6
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {SITE_CONFIG.processSteps[activeStep].title}
              </h3>

              <p className="mt-4 text-neutral-200 text-sm sm:text-base leading-relaxed">
                {SITE_CONFIG.processSteps[activeStep].desc}
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                <div className="text-xs uppercase tracking-wider text-amber-400 font-mono">
                  Primary Milestone & Deliverable
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-900/80 border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-semibold text-white">
                    {SITE_CONFIG.processSteps[activeStep].deliverable}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                <span>Transformation Progress</span>
                <span className="font-mono text-amber-400">
                  {Math.round(((activeStep + 1) / 6) * 100)}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-neutral-800 rounded-full mt-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-500"
                  style={{ width: `${((activeStep + 1) / 6) * 100}%` }}
                />
              </div>

              {/* Step Navigation Controls */}
              <div className="mt-8 flex items-center justify-between">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  ← Previous Phase
                </button>
                <button
                  disabled={activeStep === 5}
                  onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
                  className="px-5 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Next Phase →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
