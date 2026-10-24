import React, { useState } from 'react';
import { 
  Send, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Loader2 
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    city: '',
    businessType: 'Restaurant',
    service: preselectedService || 'Complete Digital Transformation',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const businessTypes = ['Restaurant', 'Café', 'Other'];

  const servicesList = [
    'Website Development',
    '3D & Interactive Websites',
    'Promotional Video Creation',
    'AI Video Creation',
    'QR & Digital Menu',
    'WhatsApp Ordering',
    'Social Media Creatives',
    'Digital Branding',
    'Complete Digital Transformation',
    'Other',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.businessName || !formData.email || !formData.phone) {
      setErrorMessage('Please fill in all required fields (Name, Business Name, Phone, and Email).');
      return;
    }

    setIsSubmitting(true);
    // Simulate inquiry submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const generateWhatsAppUrl = () => {
    const text = `Hello JSS Enterprises!\n\nI want to transform my business:\n- Name: ${formData.name || 'Inquirer'}\n- Business: ${formData.businessName || 'Restaurant/Café'}\n- Business Type: ${formData.businessType}\n- Interested In: ${formData.service}\n- City: ${formData.city || 'Not specified'}\n- Requirement: ${formData.message || 'I would like to explore digital transformation.'}`;
    return `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="relative py-28 bg-[#07080a] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-mono mb-3">
            Inquire & Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
            Let's Build Something Modern.
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base md:text-lg">
            Ready to upgrade your restaurant or café? Share your details below, or reach out directly on WhatsApp for an immediate consultation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Contact Info & Direct WhatsApp Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Highlight Box */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel-amber border-amber-500/30 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Instant WhatsApp Desk</h3>
                  <p className="text-xs text-emerald-400 font-mono">Response within minutes</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Skip the back-and-forth email queue. Chat directly with the JSS Enterprises transformation team about your restaurant requirements.
              </p>
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>

            {/* Direct Coordinates */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border-white/5 space-y-5">
              <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
                Direct Communication
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">{SITE_CONFIG.contact.email}</span>
                </a>

                <a
                  href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{SITE_CONFIG.contact.phoneDisplay}</span>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{SITE_CONFIG.contact.city}</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{SITE_CONFIG.contact.operatingHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Comprehensive Lead Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl glass-panel border-white/10 shadow-2xl relative">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">Inquiry Received</h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. The JSS Enterprises team will review your business requirements for <strong className="text-amber-400">{formData.businessName}</strong> and contact you promptly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-xl bg-emerald-500 text-neutral-950 font-semibold text-xs inline-flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward to WhatsApp for Immediate Reply</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          businessName: '',
                          phone: '',
                          email: '',
                          city: '',
                          businessType: 'Restaurant',
                          service: 'Complete Digital Transformation',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-white/10 text-neutral-300 hover:text-white text-xs font-medium"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Your Name */}
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                        Your Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Marco Rossi"
                        className="w-full bg-neutral-900/90 border border-white/10 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                        Restaurant / Café Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Artisan Woodfire Café"
                        className="w-full bg-neutral-900/90 border border-white/10 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                        Phone Number <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 80059 90150"
                        className="w-full bg-neutral-900/90 border border-white/10 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                        Email Address <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="owner@yourrestaurant.com"
                        className="w-full bg-neutral-900/90 border border-white/10 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* City */}
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                        City / Location
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Udaipur, Jaipur, Ahmedabad"
                        className="w-full bg-neutral-900/90 border border-white/10 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                    </div>

                    {/* Business Type */}
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                        Business Type
                      </label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full bg-neutral-900/90 border border-white/10 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors cursor-pointer"
                      >
                        {businessTypes.map((type) => (
                          <option key={type} value={type} className="bg-neutral-900 text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Service Interested In */}
                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-neutral-900/90 border border-white/10 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors cursor-pointer"
                    >
                      {servicesList.map((srv) => (
                        <option key={srv} value={srv} className="bg-neutral-900 text-white">
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                      Project Requirement / Notes
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your menu, seating capacity, current pain points, or timeline..."
                      className="w-full bg-neutral-900/90 border border-white/10 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-semibold text-sm md:text-base text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:brightness-110 shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer font-display disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Project Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
