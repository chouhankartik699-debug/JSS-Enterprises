/**
 * Central configuration for JSS Enterprises
 * Easily edit phone, email, addresses, and social links here.
 */

import digitalHeroImg from '@/src/assets/images/hero_digital_restaurant_1790777623043.jpg';
import traditionalBistroImg from '@/src/assets/images/traditional_bistro_interior_1790777636388.jpg';
import showcaseWebsiteImg from '@/src/assets/images/showcase_restaurant_website_1790777651535.jpg';
import showcaseQrImg from '@/src/assets/images/showcase_qr_digital_menu_1790777662724.jpg';

export const ASSETS = {
  heroDigital: digitalHeroImg,
  traditionalBistro: traditionalBistroImg,
  showcaseWebsite: showcaseWebsiteImg,
  showcaseQr: showcaseQrImg,
};

export const SITE_CONFIG = {
  brandName: 'JSS ENTERPRISES',
  tagline: 'Traditional Business. Digital Future.',
  supportingMessage: 'We transform traditional restaurants and cafés into modern digital experiences.',
  
  contact: {
    email: 'jssenterprises1101@gmail.com',
    phoneDisplay: '+91 80059 90150',
    phoneRaw: '+918005990150',
    whatsappNumber: '918005990150',
    whatsappDefaultMessage: 'Hello JSS Enterprises! I am interested in transforming my restaurant / café into a modern digital experience.',
    city: 'Udaipur, Rajasthan, India',
    operatingHours: 'Mon - Sat: 9:00 AM - 7:00 PM IST',
  },

  socialLinks: {
    instagram: 'https://instagram.com/jssenterprises',
    whatsapp: 'https://wa.me/918005990150',
    youtube: 'https://youtube.com/@jssenterprises',
    linkedin: 'https://linkedin.com/company/jssenterprises',
  },

  services: [
    {
      id: 'website-dev',
      title: 'Website Development',
      tag: 'Core Experience',
      shortDesc: 'Modern, responsive and conversion-focused websites specifically designed for restaurants and cafés.',
      fullDesc: 'We craft high-performance culinary websites with high-res food showcases, automated reservation booking, integrated Google Maps location search, and lightning-fast mobile loading for hungry guests on the go.',
      features: ['Mobile-optimized responsive design', 'Instant table reservation forms', 'SEO & Google Maps integration', 'Fast CDN asset caching'],
      icon: 'Globe',
    },
    {
      id: '3d-websites',
      title: '3D & Interactive Websites',
      tag: 'Next-Gen Experience',
      shortDesc: 'Immersive websites using modern animations, interactive elements and 3D experiences.',
      fullDesc: 'Elevate your dining brand above ordinary flat websites. We build 3D virtual restaurant tours, interactive 3D dish visualizers, and spatial scroll choreography that leave unforgettable first impressions.',
      features: ['Interactive 3D table layout explorer', 'WebGL ambient lighting & particles', 'Scroll-driven story choreography', 'Cross-device hardware accelerated'],
      icon: 'Box',
    },
    {
      id: 'promo-videos',
      title: 'Promotional Video Creation',
      tag: 'High Impact',
      shortDesc: 'Professional promotional videos and short-form content designed for digital marketing.',
      fullDesc: 'Cinematic food and café ambience reels that make dishes look irresistible. Tailored for Instagram Reels, YouTube Shorts, and paid advertisements to capture foot traffic and dine-in reservations.',
      features: ['4K cinematic color grading', 'Dynamic motion graphics & sound design', 'Optimized 9:16 and 16:9 vertical cuts', 'Food styling and montage direction'],
      icon: 'Video',
    },
    {
      id: 'ai-videos',
      title: 'AI Video Creation',
      tag: 'Creative AI',
      shortDesc: 'Creative AI-powered promotional content for restaurants, cafés and brands.',
      fullDesc: 'Leverage cutting-edge generative video and automated creative production to rapidly launch seasonal campaigns, festival specials, and dynamic digital ads without weeks of filming delays.',
      features: ['Generative visual concepts & animations', 'Multilingual promo voiceovers', 'Rapid campaign turnaround', 'Trend-reactive social clips'],
      icon: 'Sparkles',
    },
    {
      id: 'qr-menu',
      title: 'QR & Digital Menu',
      tag: 'Frictionless',
      shortDesc: 'Replace traditional paper menus with modern mobile-friendly digital menus.',
      fullDesc: 'Say goodbye to torn, stained, and outdated paper menus. Provide contactless smartphone QR menus with instant price updates, rich dish photos, allergen badges, chef recommendations, and daily specials.',
      features: ['Instant QR code scanning on any phone', 'Zero app download required', 'Live price & item availability toggle', 'Multilingual & dietary tags'],
      icon: 'QrCode',
    },
    {
      id: 'whatsapp-ordering',
      title: 'WhatsApp Ordering',
      tag: 'Direct Sales',
      shortDesc: 'Create a simple ordering experience where customers can send their orders directly through WhatsApp.',
      fullDesc: 'Enable customers to browse your digital menu, customize their order with toppings and notes, and send an automated, structured order receipt straight to your WhatsApp business line without paying heavy aggregator commissions.',
      features: ['Instant cart-to-WhatsApp message', 'Zero platform commission cuts', 'Direct customer relationship retention', 'Pickup & home delivery routing'],
      icon: 'MessageSquare',
    },
    {
      id: 'social-creatives',
      title: 'Social Media Creatives',
      tag: 'Brand Growth',
      shortDesc: 'Professional promotional graphics, offers, posts and digital content.',
      fullDesc: 'Consistent, eye-catching visual feeds that build loyal local communities. We create weekly post templates, story offers, festival greetings, and menu highlight carousels aligned with your brand identity.',
      features: ['Branded typography & palette harmony', 'Weekly engagement story templates', 'Weekend special promotional graphics', 'Instagram aesthetic grid curation'],
      icon: 'Layers',
    },
    {
      id: 'digital-branding',
      title: 'Digital Branding',
      tag: 'Visual Identity',
      shortDesc: 'Create a consistent and professional digital identity for businesses.',
      fullDesc: 'Transform a casual eatery into an iconic hospitality brand. We define logo refinements, cohesive color palettes, digital typography systems, packaging stickers, and brand guidelines for all digital touchpoints.',
      features: ['Complete digital brand book', 'Iconography & logo lockups', 'Packaging & print-ready vector assets', 'Consistent digital guidelines'],
      icon: 'Palette',
    },
  ],

  transformationComparisons: [
    {
      id: 'menu',
      title: 'Paper Menu vs QR Digital Menu',
      traditional: 'Paper Menu',
      traditionalDesc: 'Static paper prints prone to damage, expensive reprinting for price changes, and no photos of dishes.',
      digital: 'QR Digital Menu',
      digitalDesc: 'Instant phone scan, rich photography, real-time pricing updates, and dietary preference filters.',
      stat: 'Zero Reprinting Costs',
    },
    {
      id: 'presence',
      title: 'Offline Business vs Professional Online Presence',
      traditional: 'Offline Business',
      traditionalDesc: 'Relying purely on passing foot traffic and word of mouth, invisible to tourists and searchers.',
      digital: 'Professional Online Presence',
      digitalDesc: 'Modern branded website, Google Maps discoverability, online reservations, and 24/7 visibility.',
      stat: 'Global & Local Reach',
    },
    {
      id: 'promotion',
      title: 'Traditional Promotion vs Digital Content',
      traditional: 'Traditional Promotion',
      traditionalDesc: 'Distributing printed pamphlets and street banners that are costly and difficult to track.',
      digital: 'Professional Digital Content',
      digitalDesc: 'Cinematic food reels, AI video ads, and engaging social posts reaching targeted food lovers.',
      stat: 'Measurable Inbound Impact',
    },
    {
      id: 'ordering',
      title: 'Manual Ordering vs WhatsApp Ordering',
      traditional: 'Manual Ordering',
      traditionalDesc: 'Busy telephone lines, handwriting errors, lost order slips, and heavy commissions on third-party aggregators.',
      digital: 'Digital / WhatsApp Ordering',
      digitalDesc: 'Structured cart summary sent direct to WhatsApp with customer details, dish notes, and zero commission.',
      stat: '100% Direct Profit Retention',
    },
    {
      id: 'brand',
      title: 'Basic Brand vs Modern Digital Identity',
      traditional: 'Basic Brand',
      traditionalDesc: 'Generic signage, inconsistent fonts, and no cohesive visual voice across customer touchpoints.',
      digital: 'Modern Digital Identity',
      digitalDesc: 'Premium aesthetic, signature colors, sleek packaging, and memorable digital presence.',
      stat: 'Lasting Brand Loyalty',
    },
  ],

  processSteps: [
    {
      step: '01',
      title: 'Understand',
      desc: 'We analyze your restaurant or café, target audience, culinary specialties, and existing operations.',
      deliverable: 'Hospitality Discovery Audit',
    },
    {
      step: '02',
      title: 'Plan',
      desc: 'We define the custom digital strategy: selecting the optimal mix of website, QR menu, ordering flows, and video assets.',
      deliverable: 'Transformation Blueprint',
    },
    {
      step: '03',
      title: 'Design',
      desc: 'Our design studio crafts high-end UI mockups, 3D interactive elements, and bespoke visual assets tailored to your cuisine.',
      deliverable: 'High-Fidelity Prototypes & Brand Guidelines',
    },
    {
      step: '04',
      title: 'Build',
      desc: 'We engineer lightning-fast responsive code, integrate WhatsApp ordering workflows, and configure QR menu databases.',
      deliverable: 'Production Application & QR Assets',
    },
    {
      step: '05',
      title: 'Launch',
      desc: 'We deploy your digital platform live, train your team on updating menu items, and launch promotional social reels.',
      deliverable: 'Live Deployment & Staff Onboarding',
    },
    {
      step: '06',
      title: 'Grow',
      desc: 'Continuous enhancements, seasonal campaign videos, and performance optimization to keep your digital brand ahead.',
      deliverable: 'Quarterly Creative & Digital Support',
    },
  ],
};
