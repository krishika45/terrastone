import React from 'react';
import { PageType } from '../types';
import { COMPANY_INFO, STONE_PRODUCTS } from '../data/stoneData';
import { CompanyLogo } from './CompanyLogo';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Compass, 
  FileText,
  Layers
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: (stone?: string) => void;
  onOpenSampleModal?: (stone?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigate, 
  onOpenQuoteModal,
  onOpenSampleModal 
}) => {
  const currentYear = new Date().getFullYear();

  const productCategories = [
    "Sandstone",
    "Italian Marble",
    "Indian Marble",
    "Granite",
    "Limestone",
    "Quartzite",
    "Travertine",
    "Wall Cladding Stone",
    "Outdoor Paving Stone",
    "Custom Stone Slabs"
  ];

  const applicationsList = [
    { name: "Luxury Homes & Villas", page: "applications" as PageType },
    { name: "Hotels & Resorts", page: "applications" as PageType },
    { name: "Commercial Towers", page: "applications" as PageType },
    { name: "Kitchen Countertops", page: "applications" as PageType },
    { name: "Bathrooms & Spas", page: "applications" as PageType },
    { name: "Exterior Facades", page: "applications" as PageType },
    { name: "Landscaping & Paving", page: "applications" as PageType },
    { name: "Monuments & Heritage", page: "applications" as PageType }
  ];

  return (
    <footer className="bg-[#12110F] text-[#D4CDC1] border-t border-[#25221D] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#25221D]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-[#1E1B17] border border-[#C2A379]/30 flex items-center justify-center shrink-0 text-[#C2A379]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#F5F2EB] uppercase tracking-wider">Direct Quarry Sourcing</h4>
              <p className="text-xs text-[#9E9689] mt-1 leading-relaxed">Direct relationships with premier mines across Rajasthan, South India, and Italy.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-[#1E1B17] border border-[#C2A379]/30 flex items-center justify-center shrink-0 text-[#C2A379]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#F5F2EB] uppercase tracking-wider">Dry-Lay Inspection</h4>
              <p className="text-xs text-[#9E9689] mt-1 leading-relaxed">Full floor pre-assembly and optical vein matching prior to export packaging.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-[#1E1B17] border border-[#C2A379]/30 flex items-center justify-center shrink-0 text-[#C2A379]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#F5F2EB] uppercase tracking-wider">Global Export Ready</h4>
              <p className="text-xs text-[#9E9689] mt-1 leading-relaxed">ISPM-15 wooden crates and CE / ASTM tested durability for 45+ international markets.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-[#1E1B17] border border-[#C2A379]/30 flex items-center justify-center shrink-0 text-[#C2A379]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#F5F2EB] uppercase tracking-wider">Custom Architectural BOQ</h4>
              <p className="text-xs text-[#9E9689] mt-1 leading-relaxed">5-axis CNC waterjet cutting and bespoke profiling to exact architectural drawings.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-[#25221D]">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left focus:outline-none"
            >
              <CompanyLogo variant="nav" />
            </button>
            
            <p className="text-xs text-[#C2A379] italic font-serif tracking-wide">
              “{COMPANY_INFO.tagline}”
            </p>

            <p className="text-sm text-[#A69E92] leading-relaxed max-w-md">
              Bhilwara, Rajasthan-based natural stone manufacturing and export house established in 2012. Specializing in primary Rajasthan Sandstone sourcing, world-class architectural marble, granite, and bespoke stonecraft for landmark residences, luxury resorts, and monumental buildings worldwide.
            </p>

            <div className="space-y-3 pt-2 text-sm text-[#CDC5B8]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C2A379] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  <strong>Head Office & Works:</strong><br />
                  {COMPANY_INFO.headOffice}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C2A379] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-xs hover:text-[#C2A379] transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C2A379] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs hover:text-[#C2A379] transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#C2A379] shrink-0" />
                <span className="text-xs">
                  {COMPANY_INFO.website}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5F2EB] mb-4 border-l-2 border-[#C2A379] pl-2.5">
              Natural Stone Range
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A195]">
              {productCategories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      onNavigate('products');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#C2A379] text-left transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#524B40] group-hover:bg-[#C2A379] transition-colors" />
                    <span>{cat}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Applications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5F2EB] mb-4 border-l-2 border-[#C2A379] pl-2.5">
              Key Applications
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A195]">
              {applicationsList.map((app) => (
                <li key={app.name}>
                  <button
                    onClick={() => {
                      onNavigate('applications');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#C2A379] text-left transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#524B40] group-hover:bg-[#C2A379] transition-colors" />
                    <span>{app.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links & Actions */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5F2EB] mb-4 border-l-2 border-[#C2A379] pl-2.5">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs text-[#A8A195]">
                <li>
                  <button onClick={() => { onNavigate('about'); window.scrollTo({ top: 0 }); }} className="hover:text-[#C2A379] transition-colors">
                    About TerraStone
                  </button>
                </li>
                <li>
                  <button onClick={() => { onNavigate('projects'); window.scrollTo({ top: 0 }); }} className="hover:text-[#C2A379] transition-colors">
                    Landmark Projects
                  </button>
                </li>
                <li>
                  <button onClick={() => { onNavigate('gallery'); window.scrollTo({ top: 0 }); }} className="hover:text-[#C2A379] transition-colors">
                    Stone Photo Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0 }); }} className="hover:text-[#C2A379] transition-colors">
                    Contact & Inquiry
                  </button>
                </li>
              </ul>
            </div>

            <div className="bg-[#1B1814] p-4 rounded-sm border border-[#2F2A22] space-y-2">
              <h5 className="text-xs font-semibold text-[#F5F2EB] uppercase tracking-wider">
                Need Commercial Pricing?
              </h5>
              <p className="text-[11px] text-[#9E9689] leading-relaxed">
                Connect with our export desk for FOB / CIF quotes, container packing schedules, and stone samples.
              </p>
              <div className="space-y-2 pt-1">
                <button
                  id="footer-quote-btn"
                  onClick={() => onOpenQuoteModal()}
                  className="w-full py-2 bg-[#C2A379] text-[#12100E] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#D4B68D] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Request Price Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {onOpenSampleModal && (
                  <button
                    id="footer-sample-btn"
                    onClick={() => onOpenSampleModal()}
                    className="w-full py-2 bg-[#25201A] border border-[#C2A379]/40 text-[#E8D4B8] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#322A21] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Order Stone Sample Box</span>
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#7A7367] gap-4">
          <div>
            © {COMPANY_INFO.established} – {currentYear} {COMPANY_INFO.name}. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6 text-[11px]">
            <span>Bhilwara, Rajasthan, India</span>
            <span>•</span>
            <span>ISO 9001:2015 Certified Production</span>
            <span>•</span>
            <span>ISPM-15 Export Packaging</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
