import React, { useState, useMemo } from 'react';
import { PageType, StoneProduct, StoneCategory, StoneFinish } from '../types';
import { STONE_PRODUCTS, COMPANY_INFO } from '../data/stoneData';
import { 
  Search, 
  Filter, 
  MapPin, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle,
  Maximize2,
  Package,
  BookOpen,
  Video,
  Star
} from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: (stone?: string) => void;
  onOpenSampleModal?: (stone?: string, product?: StoneProduct) => void;
  onSelectProduct: (product: StoneProduct) => void;
  onKnowAboutStone?: (product: StoneProduct) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onOpenSampleModal,
  onSelectProduct,
  onKnowAboutStone
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFinish, setSelectedFinish] = useState<string>('All');
  const [onlyPrioritySandstone, setOnlyPrioritySandstone] = useState<boolean>(false);

  const categories: (StoneCategory | 'All')[] = [
    'All',
    'Sandstone', // Priority category
    'Italian Marble',
    'Indian Marble',
    'Granite',
    'Limestone',
    'Quartzite',
    'Travertine',
    'Wall Cladding Stone',
    'Outdoor Paving Stone',
    'Custom Stone Slabs'
  ];

  const finishes: (StoneFinish | 'All')[] = [
    'All',
    'Polished',
    'Honed',
    'Flamed',
    'Leathered / Antique',
    'Bush Hammered',
    'Split Face / Rockface'
  ];

  const filteredProducts = useMemo(() => {
    const list = STONE_PRODUCTS.filter((product) => {
      // Priority Sandstone toggle
      if (onlyPrioritySandstone && !product.isPrimaryPriority) {
        return false;
      }

      // Category match
      const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
      
      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchSearch = query === '' || 
        product.name.toLowerCase().includes(query) ||
        product.origin.toLowerCase().includes(query) ||
        product.colorFamily.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      // Finish match
      const matchFinish = selectedFinish === 'All' || 
        product.recommendedFinishes.some(f => f.toLowerCase().includes(selectedFinish.toLowerCase()));

      return matchCategory && matchSearch && matchFinish;
    });

    // Priority ordering: products with isPrimaryPriority come first, ordered by priorityRank
    return [...list].sort((a, b) => {
      if (a.isPrimaryPriority && !b.isPrimaryPriority) return -1;
      if (!a.isPrimaryPriority && b.isPrimaryPriority) return 1;
      return (a.priorityRank || 99) - (b.priorityRank || 99);
    });
  }, [selectedCategory, searchQuery, selectedFinish, onlyPrioritySandstone]);

  return (
    <div className="bg-[#FBF9F5] text-[#292521] min-h-screen">
      
      {/* Page Header */}
      <section className="bg-[#141210] text-[#FAF7F2] py-20 border-b border-[#28241D] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24201A] border border-[#C2A379]/40 text-xs font-semibold uppercase tracking-[0.2em] text-[#C2A379]">
            <span>10 Distinct Architectural Stone Classes</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAF7F2]">
            Natural Stone Products Collection
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#C8C0B2] font-light leading-relaxed">
            Direct-from-source Italian marble, Indian heritage marble, granites, sandstones, limestones, quartzite, and custom cut architectural slabs.
          </p>

          <div className="pt-2 flex justify-center items-center gap-4 text-xs text-[#A8A195]">
            <span>Calibrated 18mm / 20mm / 30mm</span>
            <span>•</span>
            <span>Custom Gangsaw Block Cut</span>
            <span>•</span>
            <span>Full Dry-Lay Vein Matching</span>
          </div>

          {/* Quick Action Bars: AI Consultant & Sample Box */}
          <div className="pt-4 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => {
                onNavigate('ai-advisor');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-2.5 px-4 bg-[#231F1A] hover:bg-[#322C24] border border-[#C2A379]/50 rounded-sm text-xs text-[#E8D4B8] flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C2A379] animate-pulse" />
                <span className="font-semibold text-white">AI Stone Consultant</span>
              </div>
              <span className="font-bold text-[#C2A379] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Launch <ArrowRight className="w-3 h-3" />
              </span>
            </button>

            {onOpenSampleModal && (
              <button
                onClick={() => onOpenSampleModal()}
                className="w-full py-2.5 px-4 bg-[#262018] hover:bg-[#332A1F] border border-[#C2A379]/60 rounded-sm text-xs text-[#E8D4B8] flex items-center justify-between transition-all group shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <Package className="w-3.5 h-3.5 text-[#C2A379]" />
                  <span className="font-semibold text-white">Architect Sample Box</span>
                </div>
                <span className="font-bold text-[#C2A379] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Order 4-Piece Kit <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#E5DFD4] shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#8C8476] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search stone name, origin, color..."
                className="w-full bg-[#FAF7F2] border border-[#DCD5C8] rounded-sm pl-9 pr-3 py-2 text-xs text-[#1C1A17] focus:border-[#9A7A4E] focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#8C8476] hover:text-[#1C1A17]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Finish Filter Dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7A7367] shrink-0">
                Finish:
              </span>
              <select
                value={selectedFinish}
                onChange={(e) => setSelectedFinish(e.target.value)}
                className="bg-[#FAF7F2] border border-[#DCD5C8] rounded-sm px-3 py-2 text-xs text-[#1C1A17] focus:border-[#9A7A4E] focus:outline-none"
              >
                {finishes.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>

              <button
                onClick={() => onOpenQuoteModal()}
                className="ml-auto md:ml-2 px-4 py-2 bg-[#9A7A4E] hover:bg-[#85673E] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shrink-0"
              >
                Request Quote
              </button>
            </div>

          </div>

          {/* Category Tabs Horizontal Scroll & Priority Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-thin">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat && !onlyPrioritySandstone;
                const isSandstone = cat === 'Sandstone';
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setOnlyPrioritySandstone(false);
                    }}
                    className={`px-3 py-1.5 text-xs font-medium rounded-sm whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#1C1A17] text-[#FAF7F2] shadow-sm font-semibold'
                        : isSandstone
                        ? 'bg-[#FAF3E8] text-[#8C6B38] border border-[#C2A379]/70 font-semibold hover:bg-[#F3E8D3]'
                        : 'bg-[#FAF7F2] text-[#615A50] hover:bg-[#EFE8DD] border border-[#E2DBD0]'
                    }`}
                  >
                    {isSandstone && <Star className="w-3 h-3 text-[#C2A379] fill-[#C2A379]" />}
                    <span>{cat}</span>
                    {isSandstone && (
                      <span className="text-[9px] bg-[#C2A379] text-[#12100E] px-1.5 py-0.5 rounded-sm font-bold uppercase tracking-wider">
                        Primary
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Sandstone Priority Filter Toggle */}
            <button
              onClick={() => {
                setOnlyPrioritySandstone(!onlyPrioritySandstone);
                if (!onlyPrioritySandstone) {
                  setSelectedCategory('All');
                }
              }}
              className={`shrink-0 px-3 py-1.5 text-xs font-semibold rounded-sm transition-all flex items-center gap-1.5 border ${
                onlyPrioritySandstone
                  ? 'bg-[#9A7A4E] text-white border-[#85673E] shadow-sm'
                  : 'bg-[#1C1A17] text-[#E8D4B8] border-[#C2A379]/50 hover:bg-[#2A241C]'
              }`}
            >
              <Star className="w-3 h-3 text-[#C2A379] fill-[#C2A379]" />
              <span>{onlyPrioritySandstone ? 'Sandstone Priority Filter (Active)' : 'Filter: Sandstone Priority'}</span>
            </button>
          </div>

        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8 text-xs text-[#666055]">
          <span>
            Showing <strong>{filteredProducts.length}</strong> natural stone varieties
            {selectedCategory !== 'All' && <span> in <strong>{selectedCategory}</strong></span>}
          </span>

          {(selectedCategory !== 'All' || searchQuery !== '' || selectedFinish !== 'All') && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setSelectedFinish('All');
              }}
              className="text-[#9A7A4E] hover:underline font-semibold"
            >
              Reset all filters
            </button>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded border border-[#E5DFD4] p-8 space-y-4">
            <Layers className="w-12 h-12 text-[#9A7A4E] mx-auto opacity-50" />
            <h3 className="font-serif text-2xl font-bold text-[#1C1A17]">No Matching Stones Found</h3>
            <p className="text-sm text-[#7A7367] max-w-md mx-auto">
              We carry custom blocks and quarry reserves beyond the digital catalog. Contact our Bhilwara estimating desk directly for specific BOQ stone varieties.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                  setSelectedFinish('All');
                }}
                className="px-5 py-2.5 bg-[#1C1A17] text-white text-xs font-semibold uppercase tracking-wider rounded-sm"
              >
                Clear Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((stone) => (
              <div
                key={stone.id}
                id={`product-card-${stone.id}`}
                className={`bg-white rounded-sm border overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group ${
                  stone.isPrimaryPriority
                    ? 'border-[#C2A379] ring-1 ring-[#C2A379]/40'
                    : 'border-[#E2DBD0]'
                }`}
              >
                <div>
                  {/* Image Container with Quick View Zoom */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#ECE6DC]">
                    <img
                      src={stone.imageUrl}
                      alt={stone.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Category Tag */}
                    <div className="absolute top-3 left-3 bg-[#161412]/80 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-semibold text-[#C2A379] uppercase tracking-wider border border-[#C2A379]/30">
                      {stone.category}
                    </div>

                    {/* Primary Sandstone Priority Badge */}
                    {stone.isPrimaryPriority && (
                      <div className="absolute top-3 right-3 bg-[#C2A379] text-[#12100E] px-2.5 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <Star className="w-3 h-3 fill-[#12100E]" />
                        <span>Sandstone Priority</span>
                      </div>
                    )}

                    {/* Video Prompt on image */}
                    {stone.videoUrl && (
                      <button
                        onClick={() => onKnowAboutStone?.(stone)}
                        className="absolute bottom-3 left-3 bg-[#141210]/90 hover:bg-[#262018] backdrop-blur-sm text-[#E8D4B8] px-2.5 py-1 rounded text-[11px] font-medium tracking-wide border border-[#C2A379]/50 flex items-center gap-1.5 shadow transition-colors"
                        title="Watch animated stone video & quarry simulation"
                      >
                        <Video className="w-3.5 h-3.5 text-[#C2A379] animate-pulse" />
                        <span>Stone Video</span>
                      </button>
                    )}

                    <button
                      onClick={() => onSelectProduct(stone)}
                      className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-[#1C1A17] p-2 rounded shadow transition-all opacity-0 group-hover:opacity-100"
                      title="Inspect Specifications"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-xl font-bold text-[#1C1A17]">
                          {stone.name}
                        </h3>
                        {stone.isPrimaryPriority && (
                          <span className="text-[10px] text-[#8C6B38] font-bold uppercase tracking-wider bg-[#FAF3E8] px-2 py-0.5 rounded border border-[#C2A379]/40 shrink-0">
                            ★ Primary
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#8C8476] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#9A7A4E]" />
                        <span>{stone.origin}</span>
                      </p>
                    </div>

                    <p className="text-xs text-[#575148] line-clamp-2 leading-relaxed">
                      {stone.description}
                    </p>

                    <div className="bg-[#FAF7F2] p-2.5 rounded-sm border border-[#EFEAE2] space-y-1.5 text-[11px]">
                      <div className="flex justify-between text-[#6E665B]">
                        <span>Color / Veining:</span>
                        <span className="font-medium text-[#1C1A17] text-right truncate max-w-[170px]">{stone.colorFamily}</span>
                      </div>
                      <div className="flex justify-between text-[#6E665B]">
                        <span>Density:</span>
                        <span className="font-medium text-[#1C1A17]">{stone.density}</span>
                      </div>
                      <div className="flex justify-between text-[#6E665B]">
                        <span>Water Absorption:</span>
                        <span className="font-medium text-[#1C1A17]">{stone.waterAbsorption}</span>
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] uppercase font-bold text-[#7A7367] tracking-wider mb-1">
                        Available Finishes:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {stone.recommendedFinishes.map((f) => (
                          <span key={f} className="text-[10px] px-2 py-0.5 bg-[#FAF7F2] border border-[#E5DFD4] rounded text-[#5C5549]">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 space-y-2 border-t border-[#F2ECE3] mt-2 pt-4">
                  {/* Know About Stone Full Action Button */}
                  {onKnowAboutStone && (
                    <button
                      onClick={() => onKnowAboutStone(stone)}
                      className="w-full py-2 px-3 bg-[#1C1A17] hover:bg-[#2B251D] text-[#E8D4B8] border border-[#C2A379]/60 text-xs font-semibold tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 shadow-sm group/btn"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#C2A379] group-hover/btn:scale-110 transition-transform" />
                      <span>Know About Stone</span>
                      {stone.videoUrl && (
                        <span className="text-[10px] text-[#C2A379] bg-[#2E2820] px-1.5 py-0.2 rounded font-normal">
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
                      <span>Inspect Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-1.5">
                      {onOpenSampleModal && (
                        <button
                          onClick={() => onOpenSampleModal(stone.name, stone)}
                          className="px-2.5 py-1.5 bg-[#FAF7F2] hover:bg-[#EFE9DF] text-[#7A5B30] border border-[#D5C2A5] text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1"
                          title="Order physical 10x10 cm stone sample swatch"
                        >
                          <Package className="w-3 h-3 text-[#9A7A4E]" />
                          <span>Sample</span>
                        </button>
                      )}

                      <button
                        onClick={() => onOpenQuoteModal(stone.name)}
                        className="px-3.5 py-1.5 bg-[#9A7A4E] hover:bg-[#85673E] text-white text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors"
                      >
                        Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </section>

      {/* Custom Stone Slabs Sizing Callout */}
      <section className="py-16 bg-[#161412] text-[#FAF7F2] border-t border-[#2B2720] mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C2A379]">
                Bespoke Architectural Stonework
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#FBF9F5]">
                Custom Sizes, Bookmatched Slabs & Cut-to-Size BOQ
              </h2>
              <p className="text-sm text-[#CDC5B8] leading-relaxed">
                Do your architectural blueprints require custom 20mm bookmatched marble slabs, waterjet brass-inlaid flooring medallions, or calibrated 40mm flamed granite exterior pavers? TerraStone’s Bhilwara works manufactures strictly to your bill of quantities (BOQ).
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-[#A8A195] pt-2">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#C2A379]" /> ISO 9001:2015 Standards</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#C2A379]" /> CE & ASTM Performance</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#C2A379]" /> ISPM-15 Wooden Crates</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-4">
              <button
                onClick={() => onOpenQuoteModal('Custom Stone Slabs')}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#C2A379] hover:bg-[#D4B68D] text-[#12100E] text-xs font-bold tracking-widest uppercase rounded-sm transition-all text-center"
              >
                Inquire Custom Cut Slabs
              </button>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#25211C] border border-[#3E382E] text-[#FAF7F2] text-xs font-bold tracking-widest uppercase rounded-sm hover:bg-[#322C24] transition-all text-center"
              >
                Send Architectural BOQ
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
