import React, { useState } from 'react';
import { PageType, ApplicationItem } from '../types';
import { APPLICATIONS } from '../data/stoneData';
import { 
  Building, 
  Home, 
  Hotel, 
  Utensils, 
  Bath, 
  Layers, 
  Columns, 
  Trees, 
  Landmark, 
  ArrowRight,
  CheckCircle,
  ShieldCheck
} from 'lucide-react';

interface ApplicationsPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: (stone?: string) => void;
}

export const ApplicationsPage: React.FC<ApplicationsPageProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const applicationIcons: Record<string, React.ReactNode> = {
    'luxury-homes': <Home className="w-5 h-5 text-[#9A7A4E]" />,
    'hotels-resorts': <Hotel className="w-5 h-5 text-[#9A7A4E]" />,
    'commercial-buildings': <Building className="w-5 h-5 text-[#9A7A4E]" />,
    'kitchens': <Utensils className="w-5 h-5 text-[#9A7A4E]" />,
    'bathrooms': <Bath className="w-5 h-5 text-[#9A7A4E]" />,
    'flooring': <Layers className="w-5 h-5 text-[#9A7A4E]" />,
    'exterior-walls': <Columns className="w-5 h-5 text-[#9A7A4E]" />,
    'landscaping': <Trees className="w-5 h-5 text-[#9A7A4E]" />,
    'monuments': <Landmark className="w-5 h-5 text-[#9A7A4E]" />
  };

  const filteredApps = activeTab === 'all' 
    ? APPLICATIONS 
    : APPLICATIONS.filter(a => a.id === activeTab);

  return (
    <div className="bg-[#FBF9F5] text-[#292521] min-h-screen">
      
      {/* Header */}
      <section className="bg-[#141210] text-[#FAF7F2] py-20 border-b border-[#28241D] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24201A] border border-[#C2A379]/40 text-xs font-semibold uppercase tracking-[0.2em] text-[#C2A379]">
            <span>Architectural Engineering & Specification</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAF7F2]">
            Main Stone Applications
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#C8C0B2] font-light leading-relaxed">
            Tailored geological solutions for luxury homes, hotels & resorts, commercial facades, kitchens, bathrooms, flooring, landscaping, and civic monuments.
          </p>
        </div>
      </section>

      {/* Application Navigation Filter Pills */}
      <section className="bg-white border-b border-[#E5DFD4] sticky top-20 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-sm whitespace-nowrap transition-colors ${
                activeTab === 'all'
                  ? 'bg-[#1C1A17] text-[#FAF7F2] font-semibold'
                  : 'bg-[#FAF7F2] text-[#615A50] hover:bg-[#EFE8DD] border border-[#E2DBD0]'
              }`}
            >
              All 9 Applications
            </button>

            {APPLICATIONS.map((app) => (
              <button
                key={app.id}
                onClick={() => setActiveTab(app.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-sm whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  activeTab === app.id
                    ? 'bg-[#1C1A17] text-[#FAF7F2] font-semibold'
                    : 'bg-[#FAF7F2] text-[#615A50] hover:bg-[#EFE8DD] border border-[#E2DBD0]'
                }`}
              >
                <span>{app.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Applications Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredApps.map((app, index) => {
          const isReversed = index % 2 === 1;
          return (
            <div
              key={app.id}
              id={`application-item-${app.id}`}
              className="bg-white rounded-sm border border-[#E2DBD0] overflow-hidden shadow-sm p-6 sm:p-8 lg:p-10"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                isReversed ? 'lg:flex-row-reverse' : ''
              }`}>
                
                {/* Image Section */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#DCD5C8] shadow-md group">
                    <img
                      src={app.imageUrl}
                      alt={app.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#161412]/80 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-[#C2A379] rounded border border-[#C2A379]/30">
                      {app.category}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9A7A4E]">
                      {applicationIcons[app.id]}
                      <span>{app.category}</span>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1A17]">
                      {app.title}
                    </h2>
                    <p className="text-xs italic text-[#7A7367] font-serif">
                      "{app.tagline}"
                    </p>
                  </div>

                  <p className="text-sm text-[#524B42] leading-relaxed">
                    {app.description}
                  </p>

                  {/* Recommendations Table */}
                  <div className="bg-[#FAF7F2] p-4 rounded-sm border border-[#EBE3D7] space-y-2 text-xs">
                    <div>
                      <span className="font-bold text-[#1C1A17]">Recommended Stones: </span>
                      <span className="text-[#666055]">{app.recommendedStones.join(', ')}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#1C1A17]">Ideal Finishes: </span>
                      <span className="text-[#666055]">{app.recommendedFinishes.join(', ')}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#1C1A17]">Calibrated Thickness: </span>
                      <span className="text-[#9A7A4E] font-medium">{app.recommendedThickness}</span>
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#1C1A17]">
                      Architectural Advantages:
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#5C5549]">
                      {app.keyBenefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#9A7A4E] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={() => onOpenQuoteModal(app.recommendedStones[0])}
                      className="px-5 py-2.5 bg-[#9A7A4E] hover:bg-[#85673E] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1.5"
                    >
                      <span>Inquire for {app.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => {
                        onNavigate('products');
                        window.scrollTo({ top: 0 });
                      }}
                      className="px-5 py-2.5 bg-[#F2ECE1] hover:bg-[#E8E0D2] text-[#1C1A17] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
                    >
                      View Recommended Stones
                    </button>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Call to action */}
      <section className="py-16 bg-[#161412] text-[#FAF7F2] border-t border-[#2B2720]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="font-serif text-3xl font-bold text-[#FBF9F5]">
            Architectural Specification Assistance
          </h3>
          <p className="text-sm text-[#C8C0B2] leading-relaxed max-w-xl mx-auto">
            Need ASTM water absorption data, slip-resistance coefficient test results (BS 7976-2), or structural anchoring details for facade cladding?
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-8 py-3.5 bg-[#C2A379] hover:bg-[#D4B68D] text-[#12100E] text-xs font-bold uppercase tracking-widest rounded-sm transition-all"
            >
              Consult with TerraStone Technical Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
