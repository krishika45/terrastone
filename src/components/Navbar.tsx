import React, { useState } from 'react';
import { PageType } from '../types';
import { COMPANY_INFO } from '../data/stoneData';
import { CompanyLogo } from './CompanyLogo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Globe, 
  ChevronRight, 
  Sparkles,
  ArrowUpRight,
  Package,
  Layers
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: (preselectedStone?: string) => void;
  onOpenSampleModal?: (preselectedStone?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuoteModal,
  onOpenSampleModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageType; isSpecial?: boolean }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Products', page: 'products' },
    { label: 'Applications', page: 'applications' },
    { label: 'Projects', page: 'projects' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'AI Stone Advisor', page: 'ai-advisor', isSpecial: true },
    { label: 'Contact Us', page: 'contact' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#161513] text-[#F5F2EB] shadow-md border-b border-[#2C2924]">
      {/* Top Utility Announcement Bar */}
      <div className="hidden lg:block bg-[#0E0D0B] border-b border-[#25221D] py-1.5 text-xs text-[#A8A298]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C2A379]" />
              <span>Bhilwara, Rajasthan (Est. {COMPANY_INFO.established})</span>
            </span>
            <span className="hidden xl:flex items-center gap-1.5 text-[#D4C8B5]">
              <Layers className="w-3.5 h-3.5 text-[#C2A379]" />
              <span className="text-[#E8D4B8] font-medium">★ Sandstone Primary Quarry Priority • Direct Gangsaw Slicing</span>
            </span>
            <span className="hidden 2xl:flex items-center gap-1.5 text-[#A8A298]">
              <Globe className="w-3.5 h-3.5 text-[#C2A379]" />
              <span>Global Exporter • Mundra Port</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-[#C2A379] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C2A379]" />
              <span className="font-medium tracking-wide">{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-[#3E3A33]">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center gap-1.5 hover:text-[#C2A379] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C2A379]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <button 
            id="nav-brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none"
            aria-label="TerraStone International - Home"
          >
            <CompanyLogo variant="nav" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  id={`nav-link-${item.page}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-sm relative flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#C2A379]'
                      : item.isSpecial
                      ? 'text-[#E8D4B8] hover:text-[#FAF7F2] hover:bg-[#2A241C]'
                      : 'text-[#DCD6CA] hover:text-[#FAF7F2] hover:bg-[#23201C]'
                  }`}
                >
                  {item.isSpecial && (
                    <Sparkles className="w-3.5 h-3.5 text-[#C2A379] animate-pulse" />
                  )}
                  <span>{item.label}</span>
                  {item.isSpecial && (
                    <span className="text-[9px] bg-[#C2A379]/20 text-[#C2A379] border border-[#C2A379]/40 px-1 py-0.2 rounded font-mono uppercase tracking-wider">
                      AI
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C2A379] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {onOpenSampleModal && (
              <button
                id="nav-order-samples-cta"
                onClick={() => onOpenSampleModal()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs uppercase font-semibold tracking-wider bg-[#221D17] hover:bg-[#2E271F] border border-[#C2A379]/50 text-[#E8D4B8] rounded-sm transition-all"
              >
                <Package className="w-3.5 h-3.5 text-[#C2A379]" />
                <span>Order Samples</span>
              </button>
            )}

            <button
              id="nav-get-quote-cta"
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase font-semibold tracking-wider bg-gradient-to-r from-[#C2A379] to-[#AD8E65] text-[#12100E] rounded-sm hover:from-[#D1B58F] hover:to-[#BD9C72] active:scale-95 transition-all shadow-sm shadow-[#C2A379]/10"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              id="mobile-quick-quote-btn"
              onClick={() => onOpenQuoteModal()}
              className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase bg-[#C2A379] text-[#12100E] rounded-sm"
            >
              Quote
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#DCD6CA] hover:text-white rounded-md focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161513] border-b border-[#2C2924] px-4 pt-3 pb-6 space-y-2">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  id={`mobile-nav-${item.page}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`flex items-center justify-between px-3 py-3 text-base font-medium rounded-sm ${
                    isActive
                      ? 'text-[#C2A379] bg-[#23201C] font-semibold'
                      : item.isSpecial
                      ? 'text-[#FAF7F2] bg-[#23201C]/60'
                      : 'text-[#E0D9CD] hover:bg-[#1E1B17]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.isSpecial && (
                      <Sparkles className="w-4 h-4 text-[#C2A379]" />
                    )}
                    <span>{item.label}</span>
                    {item.isSpecial && (
                      <span className="text-[10px] bg-[#C2A379]/20 text-[#C2A379] border border-[#C2A379]/40 px-1.5 py-0.2 rounded font-mono uppercase tracking-wider">
                        AI
                      </span>
                    )}
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#7C7569]" />
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#25221D] space-y-2.5">
            {onOpenSampleModal && (
              <button
                id="mobile-drawer-sample-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSampleModal();
                }}
                className="w-full py-3 bg-[#241F18] border border-[#C2A379]/60 text-[#E8D4B8] text-xs font-semibold tracking-widest uppercase rounded-sm flex items-center justify-center gap-2"
              >
                <Package className="w-4 h-4 text-[#C2A379]" />
                <span>Order Free Stone Sample Box</span>
              </button>
            )}

            <button
              id="mobile-drawer-quote-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 bg-[#C2A379] text-[#12100E] text-xs font-semibold tracking-widest uppercase rounded-sm flex items-center justify-center gap-2"
            >
              <span>Request Formal Price Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="text-xs text-[#9E9689] space-y-2 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C2A379]" />
                <span>Bhilwara, Rajasthan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C2A379]" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-[#C2A379]">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C2A379]" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
