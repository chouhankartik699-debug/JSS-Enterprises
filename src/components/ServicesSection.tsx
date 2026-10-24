import React, { useState, useRef } from 'react';
import { 
  Globe, 
  Box, 
  Video, 
  Sparkles, 
  QrCode, 
  MessageSquare, 
  Layers, 
  Palette, 
  ArrowUpRight, 
  Check, 
  X 
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface ServicesSectionProps {
  onSelectServiceForContact: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForContact }) => {
  const [activeModalService, setActiveModalService] = useState<(typeof SITE_CONFIG.services)[0] | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return Globe;
      case 'Box': return Box;
      case 'Video': return Video;
      case 'Sparkles': return Sparkles;
      case 'QrCode': return QrCode;
      case 'MessageSquare': return MessageSquare;
      case 'Layers': return Layers;
      case 'Palette': return Palette;
      default: return Globe;
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#08090b] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-mono mb-3">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
            Everything Your Business Needs To Go Digital
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base md:text-lg">
            Purpose-built digital infrastructure engineered exclusively for restaurants, cafés, bistros, and hospitality brands.
          </p>
        </div>

        {/* 8 3D Interactive Service Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.services.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                Icon={Icon}
                onOpenDetails={() => setActiveModalService(service)}
                onSelectService={() => onSelectServiceForContact(service.title)}
              />
            );
          })}
        </div>
      </div>

      {/* Service Detailed Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveModalService(null)}
          />
          <div className="relative w-full max-w-2xl bg-[#0f1115] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden">
            {/* Subtle corner glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-mono font-medium">
                  {activeModalService.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
                  {activeModalService.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className="p-2 text-neutral-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
              {activeModalService.fullDesc}
            </p>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-4">
                What’s Included:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeModalService.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-neutral-400">
                Turnaround: Customized to your restaurant scale
              </span>
              <button
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  onSelectServiceForContact(title);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 shadow-lg shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request {activeModalService.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Sub-component for individual 3D tilt card
interface ServiceCardProps {
  service: (typeof SITE_CONFIG.services)[0];
  index: number;
  Icon: React.ElementType;
  onOpenDetails: () => void;
  onSelectService: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, Icon, onOpenDetails, onSelectService }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -8;
    const rY = ((x - centerX) / centerX) * 8;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-panel border-white/5 hover:border-amber-500/40 hover:shadow-[0_10px_30px_-5px_rgba(245,158,11,0.2)] transition-colors duration-300"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div>
        {/* Top bar with icon and index */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
            {service.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white font-display group-hover:text-amber-300 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          {service.shortDesc}
        </p>
      </div>

      {/* Card Actions */}
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
        <button
          onClick={onOpenDetails}
          className="text-xs text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1 transition-colors cursor-pointer"
        >
          <span>View Specs</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={onSelectService}
          className="text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          Inquire
        </button>
      </div>
    </div>
  );
};
