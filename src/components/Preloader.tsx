import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'brand' | 'transformation' | 'done'>('brand');

  useEffect(() => {
    // Check if user already saw the intro during this session
    const seen = sessionStorage.getItem('jss_intro_seen');
    if (seen === 'true') {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => {
      setPhase('transformation');
    }, 1300);

    const t2 = setTimeout(() => {
      setPhase('done');
      sessionStorage.setItem('jss_intro_seen', 'true');
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('jss_intro_seen', 'true');
    setPhase('done');
    onComplete();
  };

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060709] px-6 text-center select-none"
      >
        {/* Subtle background ambient glow */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-xl">
          <AnimatePresence mode="wait">
            {phase === 'brand' ? (
              <motion.div
                key="brand"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-3"
              >
                <div className="inline-block text-xs uppercase tracking-[0.3em] text-amber-400/80 font-medium">
                  Digital Transformation Agency
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white font-display">
                  JSS ENTERPRISES
                </h1>
                <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4" />
              </motion.div>
            ) : (
              <motion.div
                key="transformation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <div className="flex items-center justify-center gap-3 text-2xl md:text-4xl font-display font-semibold text-white">
                  <span className="text-neutral-400">Traditional</span>
                  <span className="text-amber-400 font-mono">→</span>
                  <span className="text-gradient-amber">Digital Future</span>
                </div>
                <p className="text-xs md:text-sm text-neutral-400 max-w-md mx-auto">
                  Modernizing restaurants & cafés through next-generation web, menus & video
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Skip button */}
        <button
          onClick={handleSkip}
          className="absolute bottom-8 right-8 text-xs font-medium text-neutral-400 hover:text-white transition-colors border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md"
        >
          Skip Intro
        </button>

        {/* Minimal loading progress line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.8, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-300"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
