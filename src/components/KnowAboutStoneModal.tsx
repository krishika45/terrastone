import React, { useState } from 'react';
import { StoneProduct } from '../types';
import { COMPANY_INFO } from '../data/stoneData';
import { AnimatedStoneVideo } from './AnimatedStoneVideo';
import {
  X,
  BookOpen,
  Layers,
  ShieldCheck,
  Flame,
  Droplets,
  Sparkles,
  MapPin,
  Calendar,
  CheckCircle,
  Package,
  ArrowRight,
  Sun,
  Compass,
  FileText,
  Sliders,
  Award,
  Video
} from 'lucide-react';

interface KnowAboutStoneModalProps {
  product: StoneProduct | null;
  isOpen?: boolean;
  onClose: () => void;
  onOrderSample?: (stoneName: string, product: StoneProduct) => void;
  onInquire?: (stoneName: string) => void;
  onOpenQuoteModal?: (stoneName?: string) => void;
  onOpenSampleModal?: (stoneName?: string) => void;
}

export const KnowAboutStoneModal: React.FC<KnowAboutStoneModalProps> = ({
  product,
  isOpen = Boolean(product),
  onClose,
  onOrderSample,
  onInquire,
  onOpenQuoteModal,
  onOpenSampleModal
}) => {
  const [activeTab, setActiveTab] = useState<'geology' | 'video' | 'architectural' | 'specs' | 'maintenance'>('geology');
  const [selectedFinishPreview, setSelectedFinishPreview] = useState<string>('Natural Cleft / Honed');

  const effectiveOpen = isOpen !== undefined ? isOpen : Boolean(product);
  if (!effectiveOpen || !product) return null;

  const k = product.knowledge;

  // Fallback defaults if knowledge object is partial
  const geologicalAge = k?.geologicalAge || "Upper Proterozoic (~650 to 900 Million Years Old)";
  const geologicalFormation = k?.geologicalFormation || 
    `${product.name} originated through ancient marine sedimentation where quartzitic grains and mineral silicates bonded under deep lithostatic pressure across the Vindhyan and Aravalli basins of Rajasthan.`;
  const architecturalHeritage = k?.architecturalHeritage ||
    `A cornerstone of majestic Indo-Saracenic and European architecture, prized for centuries across royal palatial pavilions, British colonial municipal facades, and modern private villas.`;
  const climateResilience = k?.climateResilience ||
    `Maintains complete structural integrity from -25°C freezing winters to +52°C desert summers. Excellent UV pigment stability that never bleaches or oxidizes.`;
  const tactileFeel = k?.tactileFeel ||
    `Organic, fine-to-medium grit texture providing natural high-traction slip resistance under wet barefoot conditions, while remaining cool to the touch under midday sunlight.`;
  const chemicalComposition = k?.chemicalComposition || "Silica (SiO₂) 92–96%, Iron Oxides (Fe₂O₃) 1.5%, Alumina (Al₂O₃) 1.8%, Loss on Ignition < 0.5%";
  const mohsHardness = k?.mohsHardness || "6.5 – 7.0 (Harder than structural steel)";
  const recommendedMaintenance = k?.recommendedMaintenance ||
    "Clean with neutral-pH stone soap and water. Apply a breathable, deep-penetrating silane/siloxane impregnating sealer every 3 to 5 years for high-exposure outdoor pool and facade zones.";

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">
      <div 
        className="bg-[#181512] text-[#FAF7F2] rounded-md border border-[#3E372D] w-full max-w-5xl overflow-hidden shadow-2xl relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#12100E] border-b border-[#2C2720] px-5 sm:px-7 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-[#231F1A] border border-[#C2A379]/40 flex items-center justify-center text-[#C2A379]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C2A379]">
                  Stone Geological Dossier & Architectural Guide
                </span>
                {product.isPrimaryPriority && (
                  <span className="bg-[#C2A379] text-[#12100E] text-[10px] font-bold uppercase px-2 py-0.5 rounded-xs tracking-wider">
                    ★ Primary Quarry Priority
                  </span>
                )}
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF7F2] tracking-tight">
                {product.name}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#9E9689] hover:text-[#FAF7F2] hover:bg-[#28241E] rounded-md transition-colors"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-[#141210] border-b border-[#2C2720] px-5 sm:px-7 flex overflow-x-auto text-xs font-medium uppercase tracking-wider gap-1">
          {[
            { id: 'geology', label: 'Geological Genesis', icon: Layers },
            { id: 'video', label: 'Live Video & Motion Cinema', icon: Video },
            { id: 'architectural', label: 'Heritage & Climate', icon: Compass },
            { id: 'specs', label: 'ASTM & Technical Specs', icon: FileText },
            { id: 'maintenance', label: 'Finishes & Sealing', icon: Sliders },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-3.5 border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
                  isActive
                    ? 'border-[#C2A379] text-[#C2A379] bg-[#1F1B16] font-semibold'
                    : 'border-transparent text-[#9E9689] hover:text-[#FAF7F2] hover:bg-[#1A1713]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-7 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* TAB 1: GEOLOGY & FORMATION */}
          {activeTab === 'geology' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                
                {/* Visual Specimen Swatch */}
                <div className="space-y-3">
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#352F25] group shadow-inner">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-2 left-2 bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded-xs border border-white/10 text-[10px] uppercase font-mono text-[#E8D4B8]">
                      Origin: {product.origin}
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 bg-black/85 backdrop-blur-md p-2 rounded-xs border border-white/10 text-[11px] text-center text-[#C2A379]">
                      {product.texturePattern}
                    </div>
                  </div>

                  <div className="bg-[#12100E] p-3 rounded-sm border border-[#2A251E] space-y-2 text-xs">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-[#8C8476]">Geological Period</span>
                      <span className="font-semibold text-[#FAF7F2] text-right">{geologicalAge}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-[#8C8476]">Hardness Rating</span>
                      <span className="font-semibold text-[#C2A379]">{mohsHardness}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8C8476]">Classification</span>
                      <span className="font-semibold text-[#FAF7F2]">{product.category}</span>
                    </div>
                  </div>
                </div>

                {/* Narrative Formation Story */}
                <div className="md:col-span-2 space-y-4">
                  <div className="bg-[#1D1914] p-5 rounded-sm border border-[#3A3327]">
                    <h3 className="font-serif text-lg font-bold text-[#E8D4B8] mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#C2A379]" />
                      <span>The Geological Origin & Earth Pressures</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#CDC5B8] leading-relaxed">
                      {geologicalFormation}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#141210] p-4 rounded-sm border border-[#2D271F] space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#C2A379] uppercase">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Quarry Location</span>
                      </div>
                      <p className="text-xs text-[#E5DFD3]">
                        {k?.quarryLocation || `${product.origin} • Bhilwara Logistics Processing Hub`}
                      </p>
                      <p className="text-[11px] text-[#8C8476]">
                        Direct-to-gangsaw extraction bypassing brokers for absolute color & vein batch consistency.
                      </p>
                    </div>

                    <div className="bg-[#141210] p-4 rounded-sm border border-[#2D271F] space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#C2A379] uppercase">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Structural Homogeneity</span>
                      </div>
                      <p className="text-xs text-[#E5DFD3]">
                        Density: {product.density} | Water Absorption: {product.waterAbsorption}
                      </p>
                      <p className="text-[11px] text-[#8C8476]">
                        High mineral compaction guarantees zero structural micro-cleavage or delamination.
                      </p>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  {k?.keyHighlights && k.keyHighlights.length > 0 && (
                    <div className="bg-[#161411] p-4 rounded-sm border border-[#2D2821]">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8A195] mb-2">
                        Distinctive Geological Traits
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#CDC5B8]">
                        {k.keyHighlights.map((trait, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-[#C2A379] shrink-0 mt-0.5" />
                            <span>{trait}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: ANIMATED STONE VIDEO */}
          {activeTab === 'video' && (
            <div className="space-y-4">
              <AnimatedStoneVideo
                title={`${product.name} — Live Quarry & Texture Cinema`}
                subtitle={`Gangsaw extraction, solar angle deflection, and hydrophobic surface sealing inspection for ${product.category}.`}
                posterUrl={product.imageUrl}
                stoneName={product.name}
              />
              <div className="p-4 bg-[#141210] rounded-sm border border-[#2D2720] text-xs text-[#A8A195] flex items-center justify-between">
                <span>Want to see this stone live in person before placing your commercial order?</span>
                {onOrderSample && (
                  <button
                    onClick={() => {
                      onClose();
                      onOrderSample(product.name, product);
                    }}
                    className="px-4 py-2 bg-[#C2A379] hover:bg-[#D4B68D] text-[#12100E] font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1.5"
                  >
                    <Package className="w-3.5 h-3.5" />
                    <span>Order 4-Piece Swatch Kit</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: ARCHITECTURAL HERITAGE & CLIMATE */}
          {activeTab === 'architectural' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Architectural Pedigree */}
                <div className="bg-[#1D1914] p-5 rounded-sm border border-[#3A3327] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C2A379]">
                    <Compass className="w-4 h-4" />
                    <span>Architectural Lineage & Monumental Heritage</span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#FAF7F2]">
                    Centuries of Proven Durability
                  </h4>
                  <p className="text-xs sm:text-sm text-[#CDC5B8] leading-relaxed">
                    {architecturalHeritage}
                  </p>
                  <div className="pt-2 border-t border-white/10 text-xs text-[#8C8476]">
                    Specified by premier architects for private villas, five-star resorts, and embassy compound envelopes worldwide.
                  </div>
                </div>

                {/* Weather & Climate Durability */}
                <div className="bg-[#1D1914] p-5 rounded-sm border border-[#3A3327] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C2A379]">
                    <Sun className="w-4 h-4" />
                    <span>Extreme Climate & Weather Resistance</span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#FAF7F2]">
                    Engineered by Nature for All Latitudes
                  </h4>
                  <p className="text-xs sm:text-sm text-[#CDC5B8] leading-relaxed">
                    {climateResilience}
                  </p>
                  <div className="pt-2 border-t border-white/10 text-xs text-[#8C8476]">
                    Passes 50 freeze-thaw cycles without spalling or mass loss (ASTM C88 / EN 12371 standards).
                  </div>
                </div>

              </div>

              {/* Tactile & Sensory Experience */}
              <div className="bg-[#141210] p-5 rounded-sm border border-[#2C2720] space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C2A379] flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Tactile Sensation & Barefoot Comfort</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#CDC5B8] leading-relaxed">
                  {tactileFeel}
                </p>
              </div>

              {/* Recommended Applications Matrix */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8A195] mb-3">
                  Recommended Architectural Applications
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  {product.recommendedApplications.map((app, idx) => (
                    <div key={idx} className="bg-[#1C1A17] p-3 rounded-sm border border-white/5 text-center">
                      <span className="font-medium text-[#FAF7F2]">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ASTM & TECHNICAL DATA */}
          {activeTab === 'specs' && (
            <div className="space-y-6">
              <div className="bg-[#141210] p-5 rounded-sm border border-[#2E2820]">
                <h3 className="font-serif text-base font-bold text-[#FAF7F2] mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C2A379]" />
                  <span>ASTM International & European CE Physical Test Results</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                  <div className="p-3 bg-[#1C1A16] rounded border border-white/5">
                    <span className="text-[#8C8476] block text-[10px] uppercase">Specific Gravity / Density</span>
                    <span className="text-sm font-semibold text-[#FAF7F2] font-mono mt-0.5 block">{product.density}</span>
                    <span className="text-[10px] text-[#A69E92]">ASTM C97 Certified</span>
                  </div>

                  <div className="p-3 bg-[#1C1A16] rounded border border-white/5">
                    <span className="text-[#8C8476] block text-[10px] uppercase">Water Absorption by Weight</span>
                    <span className="text-sm font-semibold text-[#FAF7F2] font-mono mt-0.5 block">{product.waterAbsorption}</span>
                    <span className="text-[10px] text-[#A69E92]">Low Capillary Suction</span>
                  </div>

                  <div className="p-3 bg-[#1C1A16] rounded border border-white/5">
                    <span className="text-[#8C8476] block text-[10px] uppercase">Compressive Strength</span>
                    <span className="text-sm font-semibold text-[#C2A379] font-mono mt-0.5 block">{product.compressiveStrength || '110 MPa'}</span>
                    <span className="text-[10px] text-[#A69E92]">ASTM C170 Certified</span>
                  </div>

                  <div className="p-3 bg-[#1C1A16] rounded border border-white/5">
                    <span className="text-[#8C8476] block text-[10px] uppercase">Scratch Resistance</span>
                    <span className="text-sm font-semibold text-[#FAF7F2] font-mono mt-0.5 block">{mohsHardness}</span>
                    <span className="text-[10px] text-[#A69E92]">High Mineral Resilience</span>
                  </div>

                  <div className="p-3 bg-[#1C1A16] rounded border border-white/5">
                    <span className="text-[#8C8476] block text-[10px] uppercase">Calibrated Thicknesses</span>
                    <span className="text-sm font-semibold text-[#FAF7F2] font-mono mt-0.5 block">{product.standardThicknesses.join(', ')}</span>
                    <span className="text-[10px] text-[#A69E92]">Multi-Wire Calibrated</span>
                  </div>

                  <div className="p-3 bg-[#1C1A16] rounded border border-white/5">
                    <span className="text-[#8C8476] block text-[10px] uppercase">Export Packing Standard</span>
                    <span className="text-sm font-semibold text-[#FAF7F2] font-mono mt-0.5 block">ISPM-15 Fumigated</span>
                    <span className="text-[10px] text-[#A69E92]">Reinforced Maritime Crates</span>
                  </div>
                </div>
              </div>

              {/* Chemical Matrix */}
              <div className="p-4 bg-[#181512] rounded-sm border border-[#352F25] text-xs">
                <span className="text-[#C2A379] font-semibold uppercase tracking-wider block mb-1">
                  Spectrometric Mineral Composition:
                </span>
                <p className="text-[#CDC5B8] font-mono leading-relaxed">
                  {chemicalComposition}
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: FINISHES & MAINTENANCE */}
          {activeTab === 'maintenance' && (
            <div className="space-y-6">
              {/* Finishes Carousel / Selector */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8A195] mb-3">
                  Available Artisanal Finishes for {product.name}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  {product.recommendedFinishes.map((finish) => (
                    <button
                      key={finish}
                      type="button"
                      onClick={() => setSelectedFinishPreview(finish)}
                      className={`p-3 rounded-sm border text-left transition-all ${
                        selectedFinishPreview === finish
                          ? 'bg-[#29231B] border-[#C2A379] text-[#FAF7F2]'
                          : 'bg-[#141210] border-white/5 text-[#A8A195] hover:border-white/20'
                      }`}
                    >
                      <div className="font-semibold text-xs">{finish}</div>
                      <div className="text-[10px] text-[#7A7367] mt-1">Available in slabs & tiles</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Maintenance Guide */}
              <div className="bg-[#1D1914] p-5 rounded-sm border border-[#3A3327] space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C2A379] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Architectural Sealing & Long-Term Maintenance</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#CDC5B8] leading-relaxed">
                  {recommendedMaintenance}
                </p>
              </div>

              <div className="p-4 bg-[#141210] rounded-sm border border-[#2D2821] text-xs text-[#A8A195] space-y-2">
                <div className="font-semibold text-[#FAF7F2]">TerraStone Technical Support Desk:</div>
                <p>
                  Our export desk at Bhilwara works provides full ASTM test certificates, MSDS sealer sheets, and 3D dry-lay slab images with every commercial order before shipment.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="bg-[#12100E] border-t border-[#2C2720] px-5 sm:px-7 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#8C8476] text-center sm:text-left">
            Export Logistics: FOB Mundra Port / CIF Worldwide • Factory: Bhilwara, Rajasthan
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {(onOrderSample || onOpenSampleModal) && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onOrderSample) {
                    onOrderSample(product.name, product);
                  } else if (onOpenSampleModal) {
                    onOpenSampleModal(product.name);
                  }
                }}
                className="flex-1 sm:flex-none px-4 py-2.5 bg-[#252019] hover:bg-[#342A20] border border-[#C2A379]/50 text-[#E8D4B8] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <Package className="w-4 h-4 text-[#C2A379]" />
                <span>Order Sample</span>
              </button>
            )}

            {(onInquire || onOpenQuoteModal) && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onInquire) {
                    onInquire(product.name);
                  } else if (onOpenQuoteModal) {
                    onOpenQuoteModal(product.name);
                  }
                }}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-[#C2A379] hover:bg-[#D4B68D] text-[#12100E] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Request Slab Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 bg-[#1B1814] text-[#8C8476] hover:text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
