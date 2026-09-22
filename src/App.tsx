/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageType, StoneProduct, GalleryItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { LightboxModal } from './components/LightboxModal';
import { SampleRequestModal } from './components/SampleRequestModal';
import { KnowAboutStoneModal } from './components/KnowAboutStoneModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { AiAdvisorPage } from './pages/AiAdvisorPage';
import { COMPANY_INFO } from './data/stoneData';
import { MessageCircle, ArrowUp, Sparkles } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedStoneForQuote, setSelectedStoneForQuote] = useState<string | undefined>(undefined);
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [selectedStoneForSample, setSelectedStoneForSample] = useState<string | undefined>(undefined);
  const [inspectedProduct, setInspectedProduct] = useState<StoneProduct | null>(null);
  const [knowledgeProduct, setKnowledgeProduct] = useState<StoneProduct | null>(null);
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (stoneName?: string) => {
    setSelectedStoneForQuote(stoneName);
    setQuoteModalOpen(true);
  };

  const handleOpenSampleModal = (stoneName?: string) => {
    setSelectedStoneForSample(stoneName);
    setSampleModalOpen(true);
  };

  const handleSelectProduct = (product: StoneProduct) => {
    setInspectedProduct(product);
  };

  const handleOpenKnowAboutStone = (product: StoneProduct) => {
    setKnowledgeProduct(product);
  };

  const handleOpenLightbox = (item: GalleryItem) => {
    setActiveLightboxItem(item);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1E2022] font-sans">
      {/* Top Main Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenSampleModal={handleOpenSampleModal}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenSampleModal={handleOpenSampleModal}
            onSelectProduct={handleSelectProduct}
            onKnowAboutStone={handleOpenKnowAboutStone}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenSampleModal={handleOpenSampleModal}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenSampleModal={handleOpenSampleModal}
            onSelectProduct={handleSelectProduct}
            onKnowAboutStone={handleOpenKnowAboutStone}
          />
        )}

        {currentPage === 'applications' && (
          <ApplicationsPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentPage === 'ai-advisor' && (
          <AiAdvisorPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenSampleModal={handleOpenSampleModal}
      />

      {/* Commercial Price Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedStone={selectedStoneForQuote}
        onOpenSampleModal={handleOpenSampleModal}
      />

      {/* Architectural Stone Sample Kit Request Modal */}
      <SampleRequestModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
        preselectedStone={selectedStoneForSample}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Product Spec Inspector Modal */}
      <ProductDetailModal
        product={inspectedProduct}
        onClose={() => setInspectedProduct(null)}
        onInquire={(stoneName) => handleOpenQuoteModal(stoneName)}
        onOrderSample={(prod) => handleOpenSampleModal(prod.name)}
        onKnowAboutStone={handleOpenKnowAboutStone}
      />

      {/* Educational Stone Knowledge & Animated Video Dossier Modal */}
      <KnowAboutStoneModal
        product={knowledgeProduct}
        onClose={() => setKnowledgeProduct(null)}
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenSampleModal={handleOpenSampleModal}
      />

      {/* High-Res Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
        onInquire={(stoneName) => handleOpenQuoteModal(stoneName)}
      />

      {/* Floating Action Buttons: AI Advisor, WhatsApp & Scroll to Top */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            id="scroll-to-top-btn"
            className="w-10 h-10 rounded-full bg-[#1C1A17] text-[#FAF7F2] border border-[#3E382E] shadow-lg flex items-center justify-center hover:bg-[#342F29] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating AI Consultant Button */}
        <button
          onClick={() => handleNavigate('ai-advisor')}
          id="floating-ai-advisor-btn"
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#1C1A17] via-[#2A241C] to-[#1C1A17] text-[#C2A379] border border-[#C2A379]/60 shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all group relative"
          aria-label="Open AI Stone Advisor"
        >
          <Sparkles className="w-5 h-5 text-[#C2A379] animate-pulse" />
          <span className="absolute right-14 bg-[#141210] text-[#FAF7F2] text-[11px] font-semibold py-1 px-3 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C2A379]" />
            AI Stone Advisor
          </span>
        </button>

        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20TerraStone%20International,%20I%20am%20interested%20in%20your%20natural%20stone%20collection.`}
          target="_blank"
          rel="noreferrer"
          id="floating-whatsapp-btn"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all group relative"
          aria-label="Chat with TerraStone on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-14 bg-[#141210] text-[#FAF7F2] text-[11px] font-semibold py-1 px-3 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
