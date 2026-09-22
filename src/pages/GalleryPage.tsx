import React, { useState } from 'react';
import { PageType, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/stoneData';
import { 
  Maximize2, 
  Tag, 
  MapPin, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: (stone?: string) => void;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onOpenLightbox
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Marble', 'Granite', 'Cladding', 'Outdoor', 'Projects', 'Textures'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="bg-[#FBF9F5] text-[#292521] min-h-screen">
      
      {/* Header */}
      <section className="bg-[#141210] text-[#FAF7F2] py-20 border-b border-[#28241D] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24201A] border border-[#C2A379]/40 text-xs font-semibold uppercase tracking-[0.2em] text-[#C2A379]">
            <span>Visual Showcase</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAF7F2]">
            Architectural Stone Gallery
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#C8C0B2] font-light leading-relaxed">
            Immerse yourself in high-resolution photography of our natural marble bookmatches, granite facades, sandstone carvings, and tranquil outdoor sanctuaries.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-[#E5DFD4] sticky top-20 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-sm whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#1C1A17] text-[#FAF7F2] font-semibold'
                    : 'bg-[#FAF7F2] text-[#615A50] hover:bg-[#EFE8DD] border border-[#E2DBD0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-xs text-[#8C8476] hidden md:inline">
            Click any image to enlarge & inspect
          </span>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => onOpenLightbox(item)}
              className="group cursor-pointer bg-white rounded-sm border border-[#E2DBD0] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE5DC]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-white/90 rounded-full text-[#1C1A17] shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-[#12100E]/80 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#C2A379] rounded border border-[#C2A379]/30">
                  {item.category}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-[#1C1A17] group-hover:text-[#9A7A4E] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between text-xs text-[#7A7367]">
                  <span className="flex items-center gap-1 font-medium text-[#1C1A17]">
                    <Tag className="w-3 h-3 text-[#9A7A4E]" />
                    <span>{item.stoneName}</span>
                  </span>

                  {item.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#9A7A4E]" />
                      <span>{item.location}</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-[#F2ECE3] flex items-center justify-between pt-3">
                <span className="text-xs text-[#9A7A4E] font-semibold flex items-center gap-1">
                  <span>Enlarge Preview</span>
                  <ArrowRight className="w-3 h-3" />
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenQuoteModal(item.stoneName);
                  }}
                  className="px-3 py-1 bg-[#FAF7F2] hover:bg-[#EFE8DD] border border-[#E2DBD0] text-[11px] font-semibold text-[#1C1A17] rounded transition-colors"
                >
                  Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Stone Request */}
      <section className="py-16 bg-[#161412] text-[#FAF7F2] border-t border-[#2B2720]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C2A379]">
            <Sparkles className="w-4 h-4" />
            <span>Looking for a Specific Color or Quarry Batch?</span>
          </div>
          <h3 className="font-serif text-3xl font-bold text-[#FBF9F5]">
            We Source Rare Natural Veins On-Demand
          </h3>
          <p className="text-sm text-[#CDC5B8] leading-relaxed max-w-xl mx-auto">
            Our geological procurement team in Bhilwara and Carrara can source targeted block batches matching your interior designer’s moodboard renderings.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-8 py-3.5 bg-[#C2A379] hover:bg-[#D4B68D] text-[#12100E] text-xs font-bold uppercase tracking-widest rounded-sm transition-all"
            >
              Request Custom Sourcing
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
