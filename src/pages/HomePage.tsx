import React, { useState } from 'react';
import { PageType, StoneProduct } from '../types';
import { 
  COMPANY_INFO, 
  WHY_CHOOSE_US, 
  STONE_PRODUCTS, 
  APPLICATIONS, 
  PROJECTS,
  STONE_FINISH_GUIDE 
} from '../data/stoneData';
import { AnimatedStoneVideo } from '../components/AnimatedStoneVideo';
import { 
  ArrowRight, 
  CheckCircle2, 
  Gem, 
  LayoutGrid, 
  Sliders, 
  Coins, 
  ShieldCheck, 
  Truck, 
  Globe, 
  Layers, 
  Sparkles, 
  PhoneCall, 
  MapPin, 
  Compass,
  ArrowUpRight,
  Package,
  BookOpen,
  Video,
  Star,
  Play
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: (stone?: string) => void;
  onOpenSampleModal?: (stone?: string, product?: StoneProduct) => void;
  onSelectProduct: (product: StoneProduct) => void;
  onKnowAboutStone?: (product: StoneProduct) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onOpenSampleModal,
  onSelectProduct,
  onKnowAboutStone
}) => {
  const [activeSandstoneId, setActiveSandstoneId] = useState<string>('kandla-grey-sandstone');

  const iconMap: Record<string, React.ReactNode> = {
    Gem: <Gem className="w-5 h-5 text-[#C2A379]" />,
    LayoutGrid: <LayoutGrid className="w-5 h-5 text-[#C2A379]" />,
    Sliders: <Sliders className="w-5 h-5 text-[#C2A379]" />,
    Coins: <Coins className="w-5 h-5 text-[#C2A379]" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-[#C2A379]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#C2A379]" />,
    Truck: <Truck className="w-5 h-5 text-[#C2A379]" />,
    Globe: <Globe className="w-5 h-5 text-[#C2A379]" />
  };

  const prioritySandstones = STONE_PRODUCTS.filter(
    (p) => p.category === 'Sandstone' || p.isPrimaryPriority
  );

  const activeSandstone = 
    prioritySandstones.find((s) => s.id === activeSandstoneId) || prioritySandstones[0];

  // Prioritize Sandstones at the top of featured list
  const featuredStones = [...STONE_PRODUCTS]
    .sort((a, b) => {
      if (a.isPrimaryPriority && !b.isPrimaryPriority) return -1;
      if (!a.isPrimaryPriority && b.isPrimaryPriority) return 1;
      return (a.priorityRank || 99) - (b.priorityRank || 99);
    })
    .slice(0, 6);
  const featuredApps = APPLICATIONS.slice(0, 6);
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="space-y-0 text-[#2B2723]">

      {/* Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] bg-[#12100E] text-[#FAF7F2] flex items-center justify-center overflow-hidden">
        {/* Background Image with Architectural Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="TerraStone Natural Stone Architecture"
            className="w-full h-full object-cover object-center brightness-[0.40] contrast-[1.1] scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/50 to-transparent" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#12100E]/40 to-[#12100E]/90" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A241C]/80 border border-[#C2A379]/40 backdrop-blur-md text-xs font-semibold uppercase tracking-[0.2em] text-[#C2A379]">
            <Compass className="w-3.5 h-3.5" />
            <span>Bhilwara, Rajasthan • Manufacturer, Supplier & Exporter • Est. 2012</span>
          </div>

          {/* User Requested Hero Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF7F2] leading-[1.15]">
            Premium Natural Stone for Extraordinary Spaces
          </h1>

          {/* User Requested Hero Subheading */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#DDD5C7] leading-relaxed font-light">
            Discover carefully selected marble, granite, sandstone and limestone crafted for modern architecture and timeless interiors.
          </p>

          {/* User Requested Hero CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              id="hero-explore-products-btn"
              onClick={() => {
                onNavigate('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-[#C2A379] hover:bg-[#D4B68D] text-[#12100E] text-xs font-bold tracking-[0.2em] uppercase rounded-sm shadow-lg shadow-[#C2A379]/20 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-ai-advisor-btn"
              onClick={() => {
                onNavigate('ai-advisor');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-4 bg-[#231F1A]/80 hover:bg-[#322C24] text-[#E8D4B8] border border-[#C2A379]/60 hover:border-[#C2A379] text-xs font-bold tracking-[0.15em] uppercase rounded-sm backdrop-blur-md transition-all flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-[#C2A379] animate-pulse" />
              <span>AI Stone Advisor</span>
            </button>

            {onOpenSampleModal && (
              <button
                id="hero-sample-kit-btn"
                onClick={() => onOpenSampleModal()}
                className="w-full sm:w-auto px-7 py-4 bg-[#2A231A] hover:bg-[#382E22] text-[#E8D4B8] border border-[#C2A379]/70 text-xs font-bold tracking-[0.15em] uppercase rounded-sm backdrop-blur-md transition-all flex items-center justify-center gap-2 group"
              >
                <Package className="w-4 h-4 text-[#C2A379]" />
                <span>Order Sample Box</span>
              </button>
            )}

            <button
              id="hero-get-quote-btn"
              onClick={() => onOpenQuoteModal()}
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-[#FAF7F2] border border-[#C2A379]/60 hover:border-[#C2A379] text-xs font-bold tracking-[0.2em] uppercase rounded-sm backdrop-blur-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4 text-[#C2A379]" />
            </button>
          </div>

          {/* Tagline Ribbon */}
          <div className="pt-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C2A379]/90 italic font-serif">
              “{COMPANY_INFO.tagline}”
            </p>
          </div>

        </div>

        {/* Bottom subtle scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-[#8C8476] flex items-center gap-2">
          <span className="w-8 h-[1px] bg-[#C2A379]/40" />
          <span className="uppercase tracking-widest text-[10px] text-[#A8A195]">Manufacturing Works • Bhilwara, Rajasthan</span>
          <span className="w-8 h-[1px] bg-[#C2A379]/40" />
        </div>
      </section>

      {/* Stats Counter Ribbon */}
      <section className="bg-[#1C1A17] text-[#FAF7F2] border-y border-[#2E2820] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {COMPANY_INFO.stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="font-serif text-3xl md:text-4xl font-bold text-[#C2A379] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-[#A8A195]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Stone Consultant & Quarry Intelligence Banner */}
      <section className="py-14 bg-gradient-to-b from-[#161513] to-[#1E1B17] text-[#FAF7F2] border-b border-[#2E2820]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-lg bg-gradient-to-r from-[#24201A] via-[#1D1A16] to-[#252019] border border-[#C2A379]/30 shadow-2xl relative overflow-hidden">
            {/* Background geometric accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C2A379]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              
              <div className="lg:col-span-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C2A379]/20 border border-[#C2A379]/40 text-[#E8D4B8] text-xs font-semibold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 text-[#C2A379] animate-pulse" />
                  <span>Next-Gen Stone Engineering</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#FAF7F2]">
                  TerraStone AI Stone Consultant & Quarry Locator
                </h3>

                <p className="text-sm text-[#C8BFB2] leading-relaxed max-w-2xl">
                  Grounded with <strong>live Google Search</strong> for real-time ASTM/EN durability standards and global market comparisons, plus <strong>Google Maps Grounding</strong> to pinpoint Rajasthan quarry belts and export freight routes direct to Mundra Port.
                </p>

                <div className="flex flex-wrap gap-2 pt-1 text-xs">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[#DCD6CA]">
                    🔍 Real-Time Google Search Grounded
                  </span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[#DCD6CA]">
                    🗺️ Google Maps Quarry & Port Corridors
                  </span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[#DCD6CA]">
                    📐 1-Click BOQ Sizing & Quotation
                  </span>
                </div>
              </div>

              <div className="lg:col-span-1 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  id="homepage-launch-ai-consultant-btn"
                  onClick={() => {
                    onNavigate('ai-advisor');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-4 bg-[#C2A379] hover:bg-[#D4B68D] text-[#12100E] text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-lg shadow-[#C2A379]/20 flex items-center justify-center gap-2 group"
                >
                  <Sparkles className="w-4 h-4 text-[#12100E]" />
                  <span>Launch AI Consultant</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenQuoteModal()}
                  className="px-6 py-3.5 bg-transparent hover:bg-white/5 text-[#FAF7F2] border border-[#C2A379]/40 hover:border-[#C2A379] text-xs font-bold uppercase tracking-widest rounded-sm transition-colors text-center"
                >
                  Request Direct Stone Quote
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* About Company Teaser */}
      <section className="py-20 bg-[#FBF9F5] border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9A7A4E]">
                <span className="w-6 h-[1.5px] bg-[#9A7A4E]" />
                <span>About TerraStone International</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1A17] leading-tight">
                Bhilwara, Rajasthan-Based Natural Stone Excellence Since 2012
              </h2>

              <p className="text-base text-[#575148] leading-relaxed">
                TerraStone International is a Bhilwara, Rajasthan-based natural stone company specializing in the sourcing, processing, and supply of premium marble, granite, sandstone, limestone, and other natural stones. The company serves residential, commercial, hospitality, and architectural projects across India and international markets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-sm border border-[#E5DFD4] space-y-1 shadow-sm">
                  <div className="text-xs font-bold text-[#9A7A4E] uppercase tracking-wider">Manufacturing Base</div>
                  <p className="text-xs text-[#666055]">Bhilwara, Rajasthan with multi-wire cutting, calibration & gangsaw lines.</p>
                </div>
                <div className="p-4 bg-white rounded-sm border border-[#E5DFD4] space-y-1 shadow-sm">
                  <div className="text-xs font-bold text-[#9A7A4E] uppercase tracking-wider">Global Exporter</div>
                  <p className="text-xs text-[#666055]">Seamless freight through Mundra and Nhava Sheva ports with seaworthy ISPM-15 wooden packaging.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="home-learn-more-about-btn"
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1C1A17] hover:text-[#9A7A4E] border-b-2 border-[#9A7A4E] pb-1 transition-colors"
                >
                  <span>Learn More About Our Facilities & Heritage</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#E0D8CB] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                  alt="TerraStone Slab Processing and Inspection"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-[#161412] text-[#FBF9F5] p-5 rounded-sm border border-[#C2A379]/40 shadow-xl max-w-xs">
                <div className="text-xs text-[#C2A379] font-bold uppercase tracking-wider">Direct Factory Sourcing</div>
                <p className="text-xs text-[#CDC5B8] mt-1">Zero middlemen, calibrated tolerances, and strict optical vein matching.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Primary Priority Sandstone Showcase Section with Interactive Video */}
      <section className="py-20 bg-[#161412] text-[#FAF7F2] border-b border-[#2C2720] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C2A379]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C2A379]/15 border border-[#C2A379]/40 text-[#E8D4B8] text-xs font-semibold uppercase tracking-widest">
                <Star className="w-3.5 h-3.5 text-[#C2A379] fill-[#C2A379]" />
                <span>Primary Priority Quarry Heritage • Bhilwara & Rajasthan</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF7F2]">
                Architectural Sandstone Collection
              </h2>

              <p className="text-sm sm:text-base text-[#C2BAAD] font-light leading-relaxed">
                Direct quarry concessions in Rajasthan delivering sub-zero freeze-thaw certified quartz arenite sandstones. Featuring calibrated gangsaw slabs, thermal pool copings, and split-face elevation claddings.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  onNavigate('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-3 bg-[#26211A] hover:bg-[#342C21] text-[#E8D4B8] border border-[#C2A379]/60 text-xs font-bold uppercase tracking-wider rounded-sm transition-all flex items-center gap-2"
              >
                <span>All Sandstones</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C2A379]" />
              </button>
            </div>
          </div>

          {/* Sandstone Variety Selector Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-thin">
            {prioritySandstones.map((stone) => {
              const isSelected = stone.id === activeSandstone.id;
              return (
                <button
                  key={stone.id}
                  onClick={() => setActiveSandstoneId(stone.id)}
                  className={`px-4 py-2 text-xs font-medium rounded-sm whitespace-nowrap transition-all flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-[#C2A379] text-[#12100E] font-bold border-[#C2A379] shadow-lg shadow-[#C2A379]/20'
                      : 'bg-[#221D17] text-[#C2BAAD] hover:bg-[#2F271E] border-[#3E362C]'
                  }`}
                >
                  <Star className={`w-3 h-3 ${isSelected ? 'fill-[#12100E] text-[#12100E]' : 'text-[#C2A379]'}`} />
                  <span>{stone.name}</span>
                  {stone.videoUrl && (
                    <span className={`text-[9px] px-1 py-0.2 rounded font-semibold ${isSelected ? 'bg-[#12100E] text-[#C2A379]' : 'bg-[#141210] text-[#A69E92]'}`}>
                      Video
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Interactive Sandstone Spotlight: Animated Video & Quarry Intelligence */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1A1815] p-6 sm:p-8 rounded-lg border border-[#3A3328] shadow-2xl">
            
            {/* Left: Animated Stone Video Player */}
            <div className="lg:col-span-7">
              <AnimatedStoneVideo 
                stone={activeSandstone} 
                autoPlay={true}
                onOpenFullModal={() => onKnowAboutStone?.(activeSandstone)}
              />
            </div>

            {/* Right: Technical Dossier & Quick Actions */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#C2A379] uppercase tracking-wider font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeSandstone.origin}</span>
                  <span className="text-[#554E43]">•</span>
                  <span>Primary Quarry Direct</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2] mt-1">
                  {activeSandstone.name}
                </h3>
                <p className="text-xs text-[#9E9689] mt-0.5 font-sans">
                  Color / Texture: <strong className="text-[#FAF7F2]">{activeSandstone.colorFamily}</strong>
                </p>
              </div>

              <p className="text-sm text-[#C8BFB2] leading-relaxed">
                {activeSandstone.description}
              </p>

              {/* Physical Spec Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-[#12100E] rounded border border-[#2D2820]">
                  <span className="text-[10px] text-[#8C8476] uppercase tracking-wider block">Compressive Strength</span>
                  <span className="text-sm font-semibold text-[#E8D4B8] font-mono mt-0.5 block">{activeSandstone.compressiveStrength}</span>
                </div>
                <div className="p-3 bg-[#12100E] rounded border border-[#2D2820]">
                  <span className="text-[10px] text-[#8C8476] uppercase tracking-wider block">Water Absorption</span>
                  <span className="text-sm font-semibold text-[#E8D4B8] font-mono mt-0.5 block">{activeSandstone.waterAbsorption}</span>
                </div>
                <div className="p-3 bg-[#12100E] rounded border border-[#2D2820]">
                  <span className="text-[10px] text-[#8C8476] uppercase tracking-wider block">Bulk Density</span>
                  <span className="text-sm font-semibold text-[#E8D4B8] font-mono mt-0.5 block">{activeSandstone.density}</span>
                </div>
                <div className="p-3 bg-[#12100E] rounded border border-[#2D2820]">
                  <span className="text-[10px] text-[#8C8476] uppercase tracking-wider block">Petrology</span>
                  <span className="text-sm font-semibold text-[#E8D4B8] truncate mt-0.5 block">98% Quartz Arenite</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                {onKnowAboutStone && (
                  <button
                    onClick={() => onKnowAboutStone(activeSandstone)}
                    className="w-full py-3.5 px-4 bg-[#C2A379] hover:bg-[#D4B68D] text-[#12100E] font-bold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C2A379]/15"
                  >
                    <BookOpen className="w-4 h-4 text-[#12100E]" />
                    <span>Know Everything About {activeSandstone.name}</span>
                  </button>
                )}

                <div className="grid grid-cols-2 gap-3">
                  {onOpenSampleModal && (
                    <button
                      onClick={() => onOpenSampleModal(activeSandstone.name, activeSandstone)}
                      className="py-3 px-3 bg-[#241F18] hover:bg-[#342B20] border border-[#C2A379]/50 text-[#E8D4B8] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Package className="w-3.5 h-3.5 text-[#C2A379]" />
                      <span>Order Sample</span>
                    </button>
                  )}

                  <button
                    onClick={() => onOpenQuoteModal(activeSandstone.name)}
                    className="py-3 px-3 bg-[#1D1914] hover:bg-[#2A2319] border border-[#3E362C] text-[#C2BAAD] hover:text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Get BOQ Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Featured Products Collection */}
      <section className="py-20 bg-[#F4EFEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9A7A4E] mb-2">
                <span className="w-6 h-[1.5px] bg-[#9A7A4E]" />
                <span>Our Products</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1A17]">
                Featured Stone Collection
              </h2>
              <p className="text-sm text-[#666055] mt-2 max-w-xl">
                Explore Italian marble, Indian marble, granite, sandstone, limestone, quartzite, and travertine sourced from prime quarries.
              </p>
            </div>

            <button
              id="home-view-all-products-btn"
              onClick={() => {
                onNavigate('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1A17] text-[#FAF7F2] hover:bg-[#2F2B26] text-xs font-bold uppercase tracking-wider rounded-sm transition-all"
            >
              <span>View All 10 Categories</span>
              <ArrowRight className="w-4 h-4 text-[#C2A379]" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStones.map((stone) => (
              <div
                key={stone.id}
                id={`featured-stone-card-${stone.id}`}
                className={`bg-white rounded-sm border overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between ${
                  stone.isPrimaryPriority
                    ? 'border-[#C2A379] ring-1 ring-[#C2A379]/40'
                    : 'border-[#E5DFD4]'
                }`}
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE5DC]">
                    <img
                      src={stone.imageUrl}
                      alt={stone.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#161412]/80 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-semibold text-[#C2A379] uppercase tracking-wider border border-[#C2A379]/30">
                      {stone.category}
                    </div>

                    {stone.isPrimaryPriority && (
                      <div className="absolute top-3 right-3 bg-[#C2A379] text-[#12100E] px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow">
                        <Star className="w-3 h-3 fill-[#12100E]" />
                        <span>Priority</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-xl font-bold text-[#1C1A17]">
                        {stone.name}
                      </h3>
                    </div>

                    <p className="text-xs text-[#8C8476] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#9A7A4E]" />
                      <span>{stone.origin}</span>
                    </p>

                    <p className="text-xs text-[#575148] line-clamp-2 leading-relaxed">
                      {stone.description}
                    </p>

                    <div className="pt-2 border-t border-[#EFEAE1] flex flex-wrap gap-1">
                      {stone.recommendedFinishes.slice(0, 3).map((fin) => (
                        <span key={fin} className="text-[10px] px-2 py-0.5 bg-[#FAF7F2] text-[#6E665B] rounded border border-[#E8E2D7]">
                          {fin}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2 border-t border-[#F2ECE3] mt-2 pt-4">
                  {onKnowAboutStone && (
                    <button
                      onClick={() => onKnowAboutStone(stone)}
                      className="w-full py-2 px-3 bg-[#1C1A17] hover:bg-[#2A241C] text-[#E8D4B8] border border-[#C2A379]/50 text-xs font-semibold tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#C2A379]" />
                      <span>Know About Stone</span>
                      {stone.videoUrl && (
                        <span className="text-[10px] text-[#C2A379] bg-[#2C241B] px-1.5 py-0.2 rounded font-normal">
                          + Video
                        </span>
                      )}
                    </button>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <button
                      onClick={() => onSelectProduct(stone)}
                      className="text-xs font-semibold text-[#1C1A17] hover:text-[#9A7A4E] transition-colors py-1.5 flex items-center gap-1"
                    >
                      <span>View Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-1.5">
                      {onOpenSampleModal && (
                        <button
                          onClick={() => onOpenSampleModal(stone.name, stone)}
                          className="px-2.5 py-1.5 bg-[#FAF7F2] hover:bg-[#EFE9DF] text-[#7A5B30] border border-[#D5C2A5] text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1"
                          title="Order physical calibrated stone sample"
                        >
                          <Package className="w-3 h-3 text-[#9A7A4E]" />
                          <span>Sample</span>
                        </button>
                      )}

                      <button
                        onClick={() => onOpenQuoteModal(stone.name)}
                        className="px-3.5 py-1.5 bg-[#9A7A4E] hover:bg-[#85673E] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Architectural Stone Sample Box & Material Evaluation Kit */}
      <section className="py-20 bg-gradient-to-b from-[#1C1A17] via-[#141210] to-[#1C1A17] text-[#FAF7F2] border-y border-[#2E2820] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Sample Box Display */}
            <div className="lg:col-span-6">
              <div className="bg-[#12100E] p-6 sm:p-8 rounded-lg border border-[#C2A379]/30 shadow-2xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2.5">
                    <Package className="w-5 h-5 text-[#C2A379]" />
                    <span className="font-serif font-bold text-sm tracking-wide text-[#FAF7F2]">
                      TerraStone Curated Sample Dispatch Box
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-[#C2A379]/20 text-[#C2A379] px-2 py-0.5 rounded border border-[#C2A379]/40">
                    4-Piece Swatch Set
                  </span>
                </div>

                {/* 4 Swatch Tiles Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { name: 'Makrana Pure White Marble', origin: 'Nagaur, Rajasthan', finish: 'Mirror Polished', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
                    { name: 'Rajasthan Black Granite', origin: 'Bhilwara Belt', finish: 'Flamed & Brushed', img: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80' },
                    { name: 'Calacatta Gold Italian', origin: 'Carrara, Italy', finish: 'Bookmatched Vein', img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80' },
                    { name: 'Dholpur Beige Sandstone', origin: 'Dholpur, Rajasthan', finish: 'Honed Matte', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80' }
                  ].map((swatch, idx) => (
                    <div key={idx} className="bg-[#1C1A17] p-2.5 rounded border border-white/10 group hover:border-[#C2A379] transition-all">
                      <div className="aspect-[4/3] rounded overflow-hidden mb-2 relative">
                        <img src={swatch.img} alt={swatch.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className="absolute bottom-1 right-1 text-[9px] bg-black/80 text-[#C2A379] px-1 rounded">10x10 cm</span>
                      </div>
                      <div className="font-semibold text-xs text-[#FAF7F2] truncate">{swatch.name}</div>
                      <div className="text-[10px] text-[#A8A195]">{swatch.finish}</div>
                      <div className="text-[9px] text-[#C2A379]">{swatch.origin}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-[#8C8476]">
                  <span>Laser-etched ASTM QR Spec Sheet on reverse</span>
                  <span className="text-[#C2A379]">Worldwide Air Courier within 24h</span>
                </div>
              </div>
            </div>

            {/* Content & Action */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C2A379]/15 border border-[#C2A379]/30 text-[#C2A379] text-xs font-semibold uppercase tracking-widest">
                <Package className="w-3.5 h-3.5" />
                <span>Tactile Material Evaluation</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF7F2] leading-tight">
                Evaluate Real Stone Swatches Before Specification
              </h2>

              <p className="text-sm text-[#C8BFB2] leading-relaxed">
                Photos cannot convey the cool resonance of genuine Makrana marble, the non-slip tactile traction of flamed Bhilwara granite, or the subtle mineral veining of Italian Calacatta. Our sample kits allow architects and project directors to present physical specimens directly to clients.
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#DCD6CA]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C2A379] shrink-0 mt-0.5" />
                  <span><strong>Precision Sizing:</strong> Calibrated 10x10 cm or 15x15 cm tiles in 18mm/20mm thickness.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C2A379] shrink-0 mt-0.5" />
                  <span><strong>Finish Variety:</strong> Compare Polished, Honed, Flamed, Leathered, and Bush Hammered side-by-side.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C2A379] shrink-0 mt-0.5" />
                  <span><strong>Express Logistics:</strong> Dispatched via DHL/FedEx International Priority direct to your studio.</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                {onOpenSampleModal && (
                  <button
                    onClick={() => onOpenSampleModal()}
                    className="px-7 py-3.5 bg-[#C2A379] hover:bg-[#D4B68D] text-[#12100E] font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C2A379]/20 group"
                  >
                    <Package className="w-4 h-4 text-[#12100E]" />
                    <span>Curate My Free Sample Box</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}

                <button
                  onClick={() => {
                    onNavigate('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-transparent hover:bg-white/5 text-[#FAF7F2] border border-[#C2A379]/50 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors text-center"
                >
                  Browse 120+ Quarry Stones
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#161513] text-[#FAF7F2] border-y border-[#29251E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C2A379]">
              <span className="w-6 h-[1.5px] bg-[#C2A379]" />
              <span>Craftsmanship & Trust</span>
              <span className="w-6 h-[1.5px] bg-[#C2A379]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FBF9F5]">
              Why Choose TerraStone?
            </h2>
            <p className="text-sm text-[#A8A195] leading-relaxed">
              We uphold uncompromising standards from block extraction to port loading, ensuring precision calibration and pristine surface finishes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.title}
                id={`why-choose-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-[#1D1B18] p-6 rounded-sm border border-[#2F2A21] hover:border-[#C2A379]/50 transition-colors space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-sm bg-[#29241C] border border-[#C2A379]/30 flex items-center justify-center">
                    {iconMap[item.icon] || <CheckCircle2 className="w-5 h-5 text-[#C2A379]" />}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#F5F2EB]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9E9689] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#29241D] flex items-center text-[11px] text-[#C2A379] font-medium">
                  <span>TerraStone Standard</span>
                </div>
              </div>
            ))}
          </div>

          {/* Export Guarantee Banner */}
          <div className="mt-12 p-6 bg-[#211E1A] rounded-sm border border-[#3A3328] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-sm bg-[#C2A379]/15 border border-[#C2A379]/40 flex items-center justify-center shrink-0 text-[#C2A379]">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#F5F2EB]">International Shipping from Mundra & Nhava Sheva</h4>
                <p className="text-xs text-[#A8A195]">Comprehensive freight documentation, fumigation certificates (ISPM-15), and customs clearance support.</p>
              </div>
            </div>

            <button
              onClick={() => onOpenQuoteModal()}
              className="px-6 py-3 bg-[#C2A379] hover:bg-[#D4B68D] text-[#12100E] text-xs font-bold uppercase tracking-wider rounded-sm shrink-0 transition-colors"
            >
              Export Inquiry Desk
            </button>
          </div>

        </div>
      </section>

      {/* Main Applications Section */}
      <section className="py-20 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9A7A4E] mb-2">
                <span className="w-6 h-[1.5px] bg-[#9A7A4E]" />
                <span>Architectural Versatility</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1A17]">
                Main Architectural Applications
              </h2>
              <p className="text-sm text-[#666055] mt-2 max-w-xl">
                Engineered for luxury homes, hotels & resorts, commercial facades, kitchens, bathrooms, flooring, and landscaping.
              </p>
            </div>

            <button
              id="home-view-all-apps-btn"
              onClick={() => {
                onNavigate('applications');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9A7A4E] hover:text-[#7A5F3A] transition-colors"
            >
              <span>Explore All 9 Applications</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredApps.map((app) => (
              <div
                key={app.id}
                id={`featured-app-card-${app.id}`}
                onClick={() => {
                  onNavigate('applications');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group cursor-pointer bg-white rounded-sm border border-[#E5DFD4] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={app.imageUrl}
                      alt={app.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 text-white">
                      <span className="text-[10px] uppercase tracking-widest text-[#E6CDAA] font-semibold">{app.category}</span>
                      <h3 className="font-serif text-lg font-bold text-white leading-snug">{app.title}</h3>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <p className="text-xs text-[#575148] leading-relaxed line-clamp-2">
                      {app.description}
                    </p>
                    <div className="text-[11px] text-[#7A7367]">
                      <strong className="text-[#1C1A17]">Recommended: </strong>
                      {app.recommendedStones.slice(0, 2).join(', ')}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between text-xs text-[#9A7A4E] font-semibold border-t border-[#F2ECE3] mt-2 pt-3">
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="py-20 bg-[#1A1815] text-[#FAF7F2] border-t border-[#29251E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C2A379] mb-2">
                <span className="w-6 h-[1.5px] bg-[#C2A379]" />
                <span>Our Portfolio</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FBF9F5]">
                Landmark Architectural Projects
              </h2>
              <p className="text-sm text-[#A8A195] mt-2 max-w-xl">
                Supplying natural stone for five-star resorts, private ocean villas, and premier corporate towers in India and overseas.
              </p>
            </div>

            <button
              id="home-view-all-projects-btn"
              onClick={() => {
                onNavigate('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#24201A] border border-[#3A3328] hover:border-[#C2A379] text-[#E0D8CB] hover:text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4 text-[#C2A379]" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((proj) => (
              <div
                key={proj.id}
                id={`featured-proj-${proj.id}`}
                className="bg-[#201D19] rounded-sm border border-[#302B22] overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={proj.imageUrl}
                      alt={proj.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#12100E]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#C2A379] rounded">
                      {proj.clientType}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#8E8678]">
                      <span>{proj.location}</span>
                      <span>Completed {proj.completionYear}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#F5F2EB]">
                      {proj.title}
                    </h3>

                    <p className="text-xs text-[#A8A195] line-clamp-3 leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="text-xs text-[#C2A379] pt-1">
                      <strong>Area:</strong> {proj.areaCovered}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-[#29241D] flex flex-wrap gap-1 text-[11px] text-[#A69E92]">
                    {proj.stonesUsed.map((s) => (
                      <span key={s} className="px-2 py-0.5 bg-[#171512] rounded border border-[#2B2720]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Surface Finishes Visual Guide Teaser */}
      <section className="py-20 bg-[#F4EFEA] border-t border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9A7A4E]">
              <span className="w-6 h-[1.5px] bg-[#9A7A4E]" />
              <span>Artisanal Textures</span>
              <span className="w-6 h-[1.5px] bg-[#9A7A4E]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1A17]">
              Custom Surface Finishes
            </h2>
            <p className="text-sm text-[#666055] leading-relaxed">
              Every space has specific slip resistance and lighting requirements. Our Bhilwara works applies precision finishes to meet exact architectural parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STONE_FINISH_GUIDE.slice(0, 6).map((fin) => (
              <div
                key={fin.name}
                className="bg-white p-6 rounded-sm border border-[#E5DFD4] space-y-2 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-[#1C1A17]">{fin.name}</h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9A7A4E] bg-[#F9F6F0] px-2 py-0.5 rounded border border-[#EBE3D5]">
                    {fin.tag}
                  </span>
                </div>
                <p className="text-xs text-[#575148] leading-relaxed">
                  {fin.description}
                </p>
                <div className="text-[11px] text-[#7A7367] pt-2 border-t border-[#F2ECE3]">
                  <strong>Ideal For: </strong> {fin.idealFor}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Global Call to Action Banner */}
      <section className="py-20 bg-[#161513] text-[#FAF7F2] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80"
            alt="Marble Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C2A379]">
            <Sparkles className="w-4 h-4" />
            <span>Consult With Our Natural Stone Specialists</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FBF9F5]">
            Have an Upcoming Architectural Project?
          </h2>

          <p className="text-sm sm:text-base text-[#CDC5B8] max-w-2xl mx-auto leading-relaxed">
            From single container sample requests to multi-ton calibrated slab supply for commercial towers, TerraStone provides turnkey sourcing, custom sizing, and international logistics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              id="cta-bottom-quote-btn"
              onClick={() => onOpenQuoteModal()}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#C2A379] hover:bg-[#D4B68D] text-[#12100E] text-xs font-bold tracking-widest uppercase rounded-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Get Immediate Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#25211B] hover:bg-[#302B23] border border-[#3E382E] text-[#F5F2EB] text-xs font-bold tracking-widest uppercase rounded-sm transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#C2A379]" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
          </div>

          <div className="text-xs text-[#8C8476] pt-4">
            {COMPANY_INFO.headOffice}
          </div>
        </div>
      </section>

    </div>
  );
};
