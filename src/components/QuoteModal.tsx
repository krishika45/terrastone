import React, { useState, useEffect } from 'react';
import { QuoteFormData } from '../types';
import { COMPANY_INFO, STONE_PRODUCTS } from '../data/stoneData';
import { X, CheckCircle, Calculator, Phone, Send, ArrowRight, ShieldCheck, FileCheck, Package } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedStone?: string;
  onOpenSampleModal?: (stoneName?: string) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedStone,
  onOpenSampleModal
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyOrProject: '',
    stoneType: preselectedStone || 'Italian Marble',
    estimatedArea: '1500',
    unit: 'Sq. Ft.',
    application: 'Flooring',
    finishPreference: 'Polished',
    destinationType: 'International Export',
    destinationCity: '',
    timeline: 'Within 30 Days',
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');

  useEffect(() => {
    if (preselectedStone) {
      setFormData(prev => ({ ...prev, stoneType: preselectedStone }));
    }
  }, [preselectedStone]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `TS-${Math.floor(100000 + Math.random() * 900000)}`;
    setInquiryRef(refCode);
    setSubmitted(true);
  };

  const stoneCategories = [
    "Italian Marble",
    "Indian Marble",
    "Granite",
    "Sandstone",
    "Limestone",
    "Quartzite",
    "Travertine",
    "Wall Cladding Stone",
    "Outdoor Paving Stone",
    "Custom Stone Slabs"
  ];

  const applicationsList = [
    "Flooring",
    "Kitchens & Countertops",
    "Bathrooms & Spas",
    "Exterior Walls & Cladding",
    "Landscaping & Pool Decks",
    "Hotels & Resorts",
    "Luxury Homes",
    "Commercial Buildings",
    "Monuments & Carvings"
  ];

  const finishesList = [
    "Polished",
    "Honed",
    "Flamed (Thermal Anti-Slip)",
    "Leathered / Antique",
    "Split Face / Rockface",
    "Bush Hammered",
    "Brushed",
    "Bookmatched Slabs"
  ];

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-[#1C1A17] text-[#FAF7F2] rounded-md border border-[#3A352C] w-full max-w-3xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#141210] border-b border-[#2C2720] px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-[#C2A379]/10 border border-[#C2A379]/40 flex items-center justify-center text-[#C2A379]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold tracking-tight text-[#FBF9F5]">
                {submitted ? 'Inquiry Dispatched' : 'Request Commercial Stone Quote'}
              </h3>
              <p className="text-xs text-[#A8A195]">
                Direct from TerraStone International Works • Bhilwara, Rajasthan, India
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 text-[#9E9689] hover:text-[#FAF7F2] hover:bg-[#28241E] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-[#C2A379]/20 border border-[#C2A379] rounded-full mx-auto flex items-center justify-center text-[#C2A379]">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C2A379]">
                Inquiry Reference: {inquiryRef}
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#FBF9F5]">
                Thank You, {formData.fullName}!
              </h4>
              <p className="text-sm text-[#CDC5B8] max-w-lg mx-auto leading-relaxed">
                Your quotation request for <strong>{formData.stoneType}</strong> ({formData.estimatedArea} {formData.unit}) has been sent to our stone estimating and export desk in Bhilwara, Rajasthan.
              </p>
            </div>

            <div className="bg-[#141210] border border-[#2F2922] p-4 rounded-md max-w-md mx-auto text-left text-xs text-[#A8A195] space-y-2">
              <div className="flex justify-between py-1 border-b border-[#25221D]">
                <span>Stone Requirement:</span>
                <span className="font-medium text-[#FAF7F2]">{formData.stoneType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#25221D]">
                <span>Application & Finish:</span>
                <span className="font-medium text-[#FAF7F2]">{formData.application} ({formData.finishPreference})</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#25221D]">
                <span>Destination:</span>
                <span className="font-medium text-[#FAF7F2]">{formData.destinationType} - {formData.destinationCity || 'Port of Discharge'}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Direct Desk Contact:</span>
                <span className="font-medium text-[#C2A379]">{COMPANY_INFO.phone}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20TerraStone,%20I%20just%20submitted%20quotation%20request%20ref%20${inquiryRef}%20for%20${encodeURIComponent(formData.stoneType)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-2"
              >
                <span>Chat on WhatsApp Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#2A2621] text-[#E0D8CB] hover:bg-[#34302A] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
            {/* Architectural Sample Box Switcher Banner */}
            {onOpenSampleModal && (
              <div className="bg-gradient-to-r from-[#241F18] via-[#1E1B16] to-[#252019] p-3 rounded border border-[#C2A379]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <Package className="w-5 h-5 text-[#C2A379] shrink-0" />
                  <div>
                    <span className="font-bold text-[#FAF7F2]">Need to see and touch physical stone swatches first?</span>
                    <p className="text-[11px] text-[#A8A195]">Request our curated 4-Piece Architectural Sample Box with certified ASTM specs.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenSampleModal(formData.stoneType);
                  }}
                  className="px-3.5 py-1.5 bg-[#C2A379] hover:bg-[#D4B68D] text-[#12100E] font-bold text-[11px] uppercase tracking-wider rounded whitespace-nowrap transition-colors flex items-center gap-1.5 self-end sm:self-center"
                >
                  <Package className="w-3.5 h-3.5" />
                  <span>Order Sample Kit</span>
                </button>
              </div>
            )}

            {/* Guarantee Callout */}
            <div className="bg-[#141210] p-3 rounded border border-[#2E2820] flex items-center gap-3 text-xs text-[#C8C0B2]">
              <ShieldCheck className="w-5 h-5 text-[#C2A379] shrink-0" />
              <span>
                <strong>Factory-Direct Guarantee:</strong> All orders processed at our Bhilwara works with ISPM-15 export seaworthy packing, calibrated thickness, and 100% dry-lay inspection.
              </span>
            </div>

            {/* Row 1: Stone & Application */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#D4CDC1] uppercase tracking-wider mb-1.5">
                  Natural Stone Category *
                </label>
                <select
                  value={formData.stoneType}
                  onChange={(e) => setFormData({ ...formData, stoneType: e.target.value })}
                  className="w-full bg-[#141210] border border-[#3A342B] rounded px-3 py-2 text-sm text-[#FAF7F2] focus:border-[#C2A379] focus:outline-none"
                  required
                >
                  {stoneCategories.map((stone) => (
                    <option key={stone} value={stone}>{stone}</option>
                  ))}
                  {STONE_PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.name}>Specific: {prod.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#D4CDC1] uppercase tracking-wider mb-1.5">
                  Architectural Application *
                </label>
                <select
                  value={formData.application}
                  onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                  className="w-full bg-[#141210] border border-[#3A342B] rounded px-3 py-2 text-sm text-[#FAF7F2] focus:border-[#C2A379] focus:outline-none"
                  required
                >
                  {applicationsList.map((app) => (
                    <option key={app} value={app}>{app}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 2: Quantity & Finish */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-[#D4CDC1] uppercase tracking-wider mb-1.5">
                  Estimated Quantity / Area *
                </label>
                <div className="flex">
                  <input
                    type="number"
                    min="1"
                    value={formData.estimatedArea}
                    onChange={(e) => setFormData({ ...formData, estimatedArea: e.target.value })}
                    placeholder="e.g. 1500"
                    className="w-full bg-[#141210] border border-[#3A342B] rounded-l px-3 py-2 text-sm text-[#FAF7F2] focus:border-[#C2A379] focus:outline-none"
                    required
                  />
                  <select
                    value={formData.unit}
                    onChange={(e) => setFormData({ ...formData, unit: e.target.value as any })}
                    className="bg-[#24201A] border border-l-0 border-[#3A342B] rounded-r px-3 py-2 text-xs font-semibold text-[#C2A379] focus:outline-none"
                  >
                    <option value="Sq. Ft.">Sq. Ft.</option>
                    <option value="Sq. Meters">Sq. Meters</option>
                    <option value="Containers">Containers (FCL)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#D4CDC1] uppercase tracking-wider mb-1.5">
                  Surface Finish
                </label>
                <select
                  value={formData.finishPreference}
                  onChange={(e) => setFormData({ ...formData, finishPreference: e.target.value })}
                  className="w-full bg-[#141210] border border-[#3A342B] rounded px-3 py-2 text-sm text-[#FAF7F2] focus:border-[#C2A379] focus:outline-none"
                >
                  {finishesList.map((fin) => (
                    <option key={fin} value={fin}>{fin}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: Destination & Logistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#D4CDC1] uppercase tracking-wider mb-1.5">
                  Shipment Destination *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, destinationType: 'International Export' })}
                    className={`py-2 px-3 text-xs font-semibold rounded border transition-colors ${
                      formData.destinationType === 'International Export'
                        ? 'bg-[#C2A379] text-[#12100E] border-[#C2A379]'
                        : 'bg-[#141210] text-[#A8A195] border-[#3A342B]'
                    }`}
                  >
                    Global Export
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, destinationType: 'Domestic (India)' })}
                    className={`py-2 px-3 text-xs font-semibold rounded border transition-colors ${
                      formData.destinationType === 'Domestic (India)'
                        ? 'bg-[#C2A379] text-[#12100E] border-[#C2A379]'
                        : 'bg-[#141210] text-[#A8A195] border-[#3A342B]'
                    }`}
                  >
                    Domestic India
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#D4CDC1] uppercase tracking-wider mb-1.5">
                  Destination City / Port of Discharge *
                </label>
                <input
                  type="text"
                  value={formData.destinationCity}
                  onChange={(e) => setFormData({ ...formData, destinationCity: e.target.value })}
                  placeholder="e.g. Dubai, London, New York, or Mumbai"
                  className="w-full bg-[#141210] border border-[#3A342B] rounded px-3 py-2 text-sm text-[#FAF7F2] focus:border-[#C2A379] focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Row 4: Client Information */}
            <div className="border-t border-[#29251F] pt-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C2A379] mb-3">
                Your Contact Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs text-[#A8A195] mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Alexander Wright"
                    className="w-full bg-[#141210] border border-[#3A342B] rounded px-3 py-2 text-sm text-[#FAF7F2] focus:border-[#C2A379] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#A8A195] mb-1">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@architecture.com"
                    className="w-full bg-[#141210] border border-[#3A342B] rounded px-3 py-2 text-sm text-[#FAF7F2] focus:border-[#C2A379] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#A8A195] mb-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 or +91..."
                    className="w-full bg-[#141210] border border-[#3A342B] rounded px-3 py-2 text-sm text-[#FAF7F2] focus:border-[#C2A379] focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs text-[#A8A195] mb-1">
                Project Specifics, BOQ Thickness, or Bookmatch Preferences (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                placeholder="Mention desired slab thickness (e.g. 20mm), edge detailing, or physical sample box request..."
                className="w-full bg-[#141210] border border-[#3A342B] rounded px-3 py-2 text-sm text-[#FAF7F2] focus:border-[#C2A379] focus:outline-none"
              />
            </div>

            {/* Submit Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[11px] text-[#8C8476] flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-[#C2A379]" />
                <span>Formal itemized PDF estimate provided within 24 business hours.</span>
              </div>

              <button
                type="submit"
                id="submit-stone-quote-btn"
                className="w-full sm:w-auto px-8 py-3 bg-[#C2A379] hover:bg-[#D4B68D] text-[#12100E] font-semibold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Submit Quotation Request</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
