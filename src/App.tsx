import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { AboutSection } from './components/AboutSection';
import { TransformationSection } from './components/TransformationSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyDigitalSection } from './components/WhyDigitalSection';
import { ProcessSection } from './components/ProcessSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyUsSection } from './components/WhyUsSection';
import { CinematicCTA } from './components/CinematicCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
  const [introFinished, setIntroFinished] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [preselectedService, setPreselectedService] = useState<string>('Complete Digital Transformation');
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Track scroll progress for subtle top progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenContactWithService = (serviceName: string) => {
    setPreselectedService(serviceName);
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = () => {
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen relative transition-colors duration-300 selection:bg-amber-500/30 selection:text-amber-800 ${
        isLight ? 'bg-slate-50 text-slate-900' : 'bg-[#08090b] text-[#f4f4f5]'
      }`}
    >
      {/* Opening Intro Animation */}
      <Preloader onComplete={() => setIntroFinished(true)} />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Top Scroll Progress Indicator Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-300 shadow-[0_0_10px_#f59e0b] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Glass Navigation */}
      <Navbar onOpenContact={handleStartProject} />

      {/* Main Content Flow */}
      <main className={`transition-opacity duration-700 ${introFinished ? 'opacity-100' : 'opacity-90'}`}>
        {/* 1. Full-Screen Cinematic 3D Hero */}
        <Hero3D onStartProject={handleStartProject} />

        {/* 2. About JSS Enterprises */}
        <AboutSection />

        {/* 3. Traditional → Digital Interactive Comparison */}
        <TransformationSection />

        {/* 4. Core Services (3D Tilt Cards) */}
        <ServicesSection onSelectServiceForContact={handleOpenContactWithService} />

        {/* 5. Why Digital Transformation (Honest Value Cards) */}
        <WhyDigitalSection />

        {/* 6. Our 6-Step Implementation Roadmap */}
        <ProcessSection />

        {/* 7. Portfolio & Device Showcase */}
        <PortfolioSection />

        {/* 8. Why JSS Enterprises (Value Pillars) */}
        <WhyUsSection />

        {/* 9. Cinematic Horizon CTA */}
        <CinematicCTA onStartProject={handleStartProject} onContactClick={handleStartProject} />

        {/* 10. Contact & Project Inquiry Section */}
        <ContactSection preselectedService={preselectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
