import React from 'react';
import { PageType } from '../types';
import { COMPANY_INFO, WHY_CHOOSE_US } from '../data/stoneData';
import { 
  Building2, 
  MapPin, 
  Award, 
  Calendar, 
  Globe2, 
  ShieldCheck, 
  Factory, 
  Layers, 
  Compass, 
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  Box
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: (stone?: string) => void;
  onOpenSampleModal?: (stone?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onOpenSampleModal
}) => {
  return (
    <div className="bg-[#FBF9F5] text-[#292521]">
      
      {/* Page Header */}
      <section className="bg-[#141210] text-[#FAF7F2] py-20 border-b border-[#28241D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=2000&q=80"
            alt="Jaipur Stone Architecture"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24201A] border border-[#C2A379]/40 text-xs font-semibold uppercase tracking-[0.2em] text-[#C2A379]">
            <Compass className="w-3.5 h-3.5" />
            <span>Bhilwara, Rajasthan Heritage • Global Reach</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAF7F2]">
            About TerraStone International
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#C8C0B2] font-light leading-relaxed">
            Crafting the earth’s most exquisite natural minerals into timeless architectural masterpieces since 2012.
          </p>

          <p className="text-xs uppercase tracking-[0.25em] text-[#C2A379] italic font-serif pt-2">
            “{COMPANY_INFO.tagline}”
          </p>
        </div>
      </section>

      {/* Overview & Jaipur Roots */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9A7A4E]">
              <span className="w-6 h-[1.5px] bg-[#9A7A4E]" />
              <span>Our Story & Sourcing Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1A17] leading-tight">
              Rooted in the Historic Stone Capital of India
            </h2>

            <p className="text-base text-[#524B42] leading-relaxed">
              TerraStone International is a Bhilwara, Rajasthan-based natural stone company specializing in the sourcing, processing, and supply of premium marble, granite, sandstone, limestone, and other natural stones. The company serves residential, commercial, hospitality, and architectural projects across India and international markets.
            </p>

            <p className="text-sm text-[#615A50] leading-relaxed">
              Rajasthan has long been celebrated as the cradle of legendary stonemasonry—having yielded the white marble of the Taj Mahal and the sandstone of iconic royal palaces. Established in 2012, TerraStone combines this centuries-old artisan intuition with 21st-century Italian automated processing machinery at our facility in Bhilwara, Rajasthan.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded border border-[#E2DBD0] shadow-sm">
                <div className="font-serif text-2xl font-bold text-[#9A7A4E]">2012</div>
                <div className="text-xs font-semibold text-[#1C1A17] uppercase tracking-wider mt-0.5">Established Year</div>
                <p className="text-[11px] text-[#7A7367] mt-1">Over a decade of uninterrupted manufacturing & export growth.</p>
              </div>

              <div className="p-4 bg-white rounded border border-[#E2DBD0] shadow-sm">
                <div className="font-serif text-2xl font-bold text-[#9A7A4E]">Bhilwara, Rajasthan</div>
                <div className="text-xs font-semibold text-[#1C1A17] uppercase tracking-wider mt-0.5">Manufacturing Base</div>
                <p className="text-[11px] text-[#7A7367] mt-1">Integrated gangsaw, multi-blade cutting & calibration works.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#DCD5C8] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="TerraStone Slab Processing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-[#F2ECE1] rounded border border-[#E0D8CB] text-xs text-[#5C5549] flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#9A7A4E] shrink-0" />
              <span>
                <strong>Factory Address:</strong> {COMPANY_INFO.headOffice}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Sourcing & Processing Infrastructure */}
      <section className="py-20 bg-[#161412] text-[#FAF7F2] border-y border-[#29251E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C2A379]">
              <span className="w-6 h-[1.5px] bg-[#C2A379]" />
              <span>Infrastructure</span>
              <span className="w-6 h-[1.5px] bg-[#C2A379]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FBF9F5]">
              State-of-the-Art Processing Works
            </h2>
            <p className="text-sm text-[#A8A195]">
              Equipped to transform raw multi-ton quarry blocks into laser-calibrated slabs, bespoke architectural carvings, and precision cut-to-size panels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1E1B18] p-8 rounded-sm border border-[#302B22] space-y-4">
              <div className="w-12 h-12 rounded bg-[#29241D] border border-[#C2A379]/30 flex items-center justify-center text-[#C2A379]">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#F5F2EB]">
                Diamond Gangsaws & Multi-Wire
              </h3>
              <p className="text-xs text-[#A8A195] leading-relaxed">
                High-speed Italian diamond multi-wire saws slice colossal marble and granite blocks with uniform 18mm, 20mm, and 30mm thickness without deflection or blade drift.
              </p>
            </div>

            <div className="bg-[#1E1B18] p-8 rounded-sm border border-[#302B22] space-y-4">
              <div className="w-12 h-12 rounded bg-[#29241D] border border-[#C2A379]/30 flex items-center justify-center text-[#C2A379]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#F5F2EB]">
                Automated Resin Line & Polishing
              </h3>
              <p className="text-xs text-[#A8A195] leading-relaxed">
                Vacuum-assisted epoxy resin infusion reinforces natural fissures, paired with 24-head automatic polishing lines delivering mirror gloss finishes (95+ glossometer score).
              </p>
            </div>

            <div className="bg-[#1E1B18] p-8 rounded-sm border border-[#302B22] space-y-4">
              <div className="w-12 h-12 rounded bg-[#29241D] border border-[#C2A379]/30 flex items-center justify-center text-[#C2A379]">
                <Box className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#F5F2EB]">
                CNC Waterjet & Bespoke Joinery
              </h3>
              <p className="text-xs text-[#A8A195] leading-relaxed">
                5-axis CNC router and waterjet cutting machinery execute intricate architectural moldings, curved steps, bookmatched wall inlays, and custom vanity basins.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Quality Control & Safe Packaging Standards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9A7A4E]">
              <span className="w-6 h-[1.5px] bg-[#9A7A4E]" />
              <span>Inspection & Logistics</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1A17]">
              Uncompromising Quality Inspection & Safe Export Packaging
            </h2>

            <p className="text-sm text-[#524B42] leading-relaxed">
              Every shipment departing our Bhilwara works undergoes a stringent 3-phase quality audit to ensure you receive flawless, installation-ready natural stone.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9A7A4E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#1C1A17]">Dry-Lay Pre-Assembly</h4>
                  <p className="text-xs text-[#666055] mt-0.5">Slabs are laid out across our expansive inspection bay to preview veining flow, tonal transitions, and numbering sequence before crate packaging.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9A7A4E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#1C1A17]">ISPM-15 Certified Sea-Worthy Crates</h4>
                  <p className="text-xs text-[#666055] mt-0.5">Heat-treated pine timber crates with polyethylene shrink-wrapping, thermo-foam cushioning, corner protectors, and high-tensile steel banding for ocean freight.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9A7A4E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#1C1A17]">Fast Port Logistics (Mundra & Nhava Sheva)</h4>
                  <p className="text-xs text-[#666055] mt-0.5">Direct express freight corridor from Bhilwara to Gujarat (Mundra) and Mumbai (JNPT), ensuring prompt vessel departure and real-time container tracking.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-sm border border-[#E0D8CB] shadow-sm space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#1C1A17]">
              The 8 TerraStone Core Commitments
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {WHY_CHOOSE_US.map((item) => (
                <div key={item.title} className="p-3 bg-[#FAF7F2] rounded border border-[#EDE6DC]">
                  <div className="font-bold text-[#1C1A17]">{item.title}</div>
                  <div className="text-[11px] text-[#6E665A] mt-0.5">{item.description}</div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#EFE8DC] flex items-center justify-between">
              <span className="text-xs text-[#8C8476]">Ready to evaluate physical samples?</span>
              <button
                onClick={() => (onOpenSampleModal ? onOpenSampleModal() : onOpenQuoteModal())}
                className="px-4 py-2 bg-[#9A7A4E] hover:bg-[#85673E] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1.5"
              >
                <span>Request Sample Box</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Prompt */}
      <section className="py-16 bg-[#F2ECE1] border-t border-[#E0D8CB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1A17]">
            Visit Our Works in Bhilwara, Rajasthan
          </h3>
          <p className="text-sm text-[#5C5549] max-w-xl mx-auto leading-relaxed">
            Architects, interior designers, developers, and international buyers are warmly invited to inspect live blocks and calibrated slabs at our manufacturing center.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0 });
              }}
              className="px-6 py-3 bg-[#1C1A17] hover:bg-[#2E2923] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
            >
              Contact Bhilwara Office
            </button>
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-6 py-3 bg-[#9A7A4E] hover:bg-[#85673E] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
            >
              Request Commercial Quote
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
