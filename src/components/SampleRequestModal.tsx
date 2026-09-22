import React, { useState, useEffect } from 'react';
import { StoneProduct, StoneSampleSelection, SampleRequestFormData } from '../types';
import { STONE_PRODUCTS, COMPANY_INFO } from '../data/stoneData';
import {
  X,
  Package,
  Layers,
  Check,
  Plus,
  Trash2,
  Send,
  Plane,
  ShieldCheck,
  Sparkles,
  Phone,
  FileText,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Info
} from 'lucide-react';

interface SampleRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedStone?: string;
  initialStoneProduct?: StoneProduct | null;
  onOpenQuoteModal?: (stoneName?: string) => void;
}

export const SampleRequestModal: React.FC<SampleRequestModalProps> = ({
  isOpen,
  onClose,
  preselectedStone,
  initialStoneProduct,
  onOpenQuoteModal
}) => {
  const [selectedSamples, setSelectedSamples] = useState<StoneSampleSelection[]>([]);
  const [formData, setFormData] = useState<Omit<SampleRequestFormData, 'samples'>>({
    fullName: '',
    firmOrCompany: '',
    profession: 'Architect',
    email: '',
    phone: '',
    deliveryAddress: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    country: 'United States',
    projectName: '',
    urgency: 'Express Air Courier (DHL/FedEx 3-5 days)',
    sampleNotes: ''
  });

  const [activeTab, setActiveTab] = useState<'kit-builder' | 'shipping'>('kit-builder');
  const [stoneSearch, setStoneSearch] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dispatchRef, setDispatchRef] = useState('');
  const [activePreset, setActivePreset] = useState<string | null>(null);

  // Initialize or add preselected stone when modal opens
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      const targetStone = initialStoneProduct || 
        (preselectedStone ? STONE_PRODUCTS.find(p => p.name.toLowerCase() === preselectedStone.toLowerCase()) : null);

      if (targetStone) {
        setSelectedSamples([
          {
            stoneId: targetStone.id,
            stoneName: targetStone.name,
            category: targetStone.category,
            imageUrl: targetStone.imageUrl,
            origin: targetStone.origin,
            finish: targetStone.recommendedFinishes[0] || 'Polished',
            size: '10x10 cm (Standard Swatch)',
            thickness: targetStone.standardThicknesses[0] || '20mm'
          }
        ]);
      } else if (selectedSamples.length === 0) {
        // Default popular architect set
        const defaultStone = STONE_PRODUCTS[0];
        if (defaultStone) {
          setSelectedSamples([
            {
              stoneId: defaultStone.id,
              stoneName: defaultStone.name,
              category: defaultStone.category,
              imageUrl: defaultStone.imageUrl,
              origin: defaultStone.origin,
              finish: 'Polished',
              size: '10x10 cm (Standard Swatch)',
              thickness: '20mm'
            }
          ]);
        }
      }
    }
  }, [isOpen, preselectedStone, initialStoneProduct]);

  if (!isOpen) return null;

  const handleAddStone = (stone: StoneProduct) => {
    if (selectedSamples.some(s => s.stoneId === stone.id)) return;
    if (selectedSamples.length >= 4) return;

    setSelectedSamples(prev => [
      ...prev,
      {
        stoneId: stone.id,
        stoneName: stone.name,
        category: stone.category,
        imageUrl: stone.imageUrl,
        origin: stone.origin,
        finish: stone.recommendedFinishes[0] || 'Polished',
        size: '10x10 cm (Standard Swatch)',
        thickness: stone.standardThicknesses[0] || '20mm'
      }
    ]);
  };

  const handleRemoveStone = (stoneId: string) => {
    setSelectedSamples(prev => prev.filter(s => s.stoneId !== stoneId));
  };

  const handleUpdateFinish = (stoneId: string, finish: string) => {
    setSelectedSamples(prev =>
      prev.map(s => (s.stoneId === stoneId ? { ...s, finish } : s))
    );
  };

  const handleUpdateSize = (stoneId: string, size: StoneSampleSelection['size']) => {
    setSelectedSamples(prev =>
      prev.map(s => (s.stoneId === stoneId ? { ...s, size } : s))
    );
  };

  const handleApplyPreset = (name: string, stoneIds: string[]) => {
    setActivePreset(name);
    const matched = STONE_PRODUCTS.filter(p => stoneIds.includes(p.id));
    const newItems: StoneSampleSelection[] = matched.slice(0, 4).map(p => ({
      stoneId: p.id,
      stoneName: p.name,
      category: p.category,
      imageUrl: p.imageUrl,
      origin: p.origin,
      finish: p.recommendedFinishes[0] || 'Polished',
      size: '10x10 cm (Standard Swatch)',
      thickness: p.standardThicknesses[0] || '20mm'
    }));
    setSelectedSamples(newItems);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSamples.length === 0) return;
    const refCode = `SMP-RAJ-${Math.floor(100000 + Math.random() * 900000)}`;
    setDispatchRef(refCode);
    setSubmitted(true);
  };

  const filteredCatalogStones = STONE_PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(stoneSearch.toLowerCase()) ||
      p.category.toLowerCase().includes(stoneSearch.toLowerCase()) ||
      p.origin.toLowerCase().includes(stoneSearch.toLowerCase());
    const notSelected = !selectedSamples.some(s => s.stoneId === p.id);
    return matchesSearch && notSelected;
  });

  const countries = [
    'United States',
    'United Arab Emirates',
    'United Kingdom',
    'Australia',
    'Canada',
    'India',
    'Saudi Arabia',
    'Germany',
    'Qatar',
    'Singapore',
    'Kuwait',
    'Italy',
    'France',
    'Oman',
    'New Zealand',
    'Other International'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div
        className="bg-[#191714] text-[#FAF7F2] rounded-lg border border-[#3A352C] w-full max-w-4xl overflow-hidden shadow-2xl relative my-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#12100E] border-b border-[#2C2720] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-[#C2A379]/15 border border-[#C2A379]/30 flex items-center justify-center text-[#C2A379]">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FAF7F2]">
                  Architectural Stone Sample Box
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-[#C2A379]/20 text-[#C2A379] px-2 py-0.5 rounded border border-[#C2A379]/40">
                  Express Air Dispatch
                </span>
              </div>
              <p className="text-xs text-[#A8A195]">
                Curate up to 4 calibrated stone specimens (10x10 cm / 15x15 cm) with certified ASTM test specs
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#9E9689] hover:text-[#FAF7F2] hover:bg-[#28241E] rounded-md transition-colors"
            aria-label="Close Sample Request Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation Screen */
          <div className="p-8 sm:p-10 space-y-6 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#C2A379]/20 border border-[#C2A379] flex items-center justify-center mx-auto text-[#C2A379]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#C2A379] font-bold">
                Order Confirmed & Prepared for Packing
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
                Your Sample Box is Being Assembled
              </h4>
              <p className="text-xs text-[#A8A195]">
                Dispatch Reference Code:{' '}
                <span className="font-mono text-[#E8D4B8] font-bold text-sm bg-white/5 px-2 py-0.5 rounded border border-white/10">
                  {dispatchRef}
                </span>
              </p>
            </div>

            {/* Selected Swatches Summary */}
            <div className="bg-[#12100E] p-4 rounded-md border border-[#2D2821] text-left space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#A8A195] border-b border-white/10 pb-2 flex items-center justify-between">
                <span>Enclosed Specimens ({selectedSamples.length})</span>
                <span className="text-[#C2A379]">Bhilwara Works Logistics Desk</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedSamples.map(sample => (
                  <div key={sample.stoneId} className="flex items-center gap-3 p-2 bg-[#1C1A17] rounded border border-white/5">
                    <img
                      src={sample.imageUrl}
                      alt={sample.stoneName}
                      className="w-12 h-12 object-cover rounded border border-white/10"
                    />
                    <div className="text-xs min-w-0">
                      <div className="font-semibold text-[#FAF7F2] truncate">{sample.stoneName}</div>
                      <div className="text-[11px] text-[#A8A195]">{sample.finish} • {sample.size}</div>
                      <div className="text-[10px] text-[#C2A379]">{sample.origin}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-[#8C8476] flex items-center justify-between">
                <span>Courier: DHL International Priority Air</span>
                <span>Destination: {formData.city}, {formData.country}</span>
              </div>
            </div>

            <div className="p-4 bg-[#231F1A] rounded-md border border-[#C2A379]/30 text-xs text-[#CDC5B8] flex items-start gap-3 text-left">
              <ShieldCheck className="w-5 h-5 text-[#C2A379] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Sample Box Inclusions:</strong> Each natural stone specimen includes laser-engraved identification, calibrated thickness, ASTM test certificates (water absorption, density, compressive strength), and high-resolution digital dry-lay scan QR codes.
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20TerraStone,%20I%20have%20ordered%20Stone%20Sample%20Kit%20Ref:%20${dispatchRef}%20for%20${encodeURIComponent(formData.firmOrCompany || formData.fullName)}.%20Please%20confirm%20courier%20AWB%20dispatch.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Track on WhatsApp</span>
              </a>

              {onOpenQuoteModal && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenQuoteModal(selectedSamples[0]?.stoneName);
                  }}
                  className="px-5 py-3 bg-[#241F18] hover:bg-[#322A21] border border-[#C2A379]/60 text-[#E8D4B8] font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#C2A379]" />
                  <span>Request Full Slabs Quote</span>
                </button>
              )}

              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 bg-[#C2A379] hover:bg-[#D4B68D] text-[#12100E] font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form Content with 2 Tabs */
          <form onSubmit={handleSubmit}>
            {/* Step Selector Tabs */}
            <div className="grid grid-cols-2 border-b border-[#2C2720] text-xs font-semibold uppercase tracking-wider bg-[#141210]">
              <button
                type="button"
                onClick={() => setActiveTab('kit-builder')}
                className={`py-3.5 px-4 text-center flex items-center justify-center gap-2 transition-colors border-r border-[#2C2720] ${
                  activeTab === 'kit-builder'
                    ? 'text-[#C2A379] bg-[#1E1B17] border-b-2 border-b-[#C2A379]'
                    : 'text-[#8C8476] hover:text-[#FAF7F2]'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>1. Select Stone Swatches ({selectedSamples.length}/4)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('shipping')}
                className={`py-3.5 px-4 text-center flex items-center justify-center gap-2 transition-colors ${
                  activeTab === 'shipping'
                    ? 'text-[#C2A379] bg-[#1E1B17] border-b-2 border-b-[#C2A379]'
                    : 'text-[#8C8476] hover:text-[#FAF7F2]'
                }`}
              >
                <Plane className="w-4 h-4" />
                <span>2. Courier & Architectural Studio Details</span>
              </button>
            </div>

            <div className="p-6 max-h-[68vh] overflow-y-auto space-y-6">
              {activeTab === 'kit-builder' ? (
                /* Tab 1: Stone Swatch Selector & Box Preview */
                <div className="space-y-6">
                  {/* Curated Sample Box Visual Tray */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-serif text-base font-bold text-[#FAF7F2] flex items-center gap-2">
                          <Package className="w-4 h-4 text-[#C2A379]" />
                          <span>Curated Architectural Swatch Box</span>
                        </h4>
                        <p className="text-xs text-[#8C8476]">
                          Up to 4 stone specimens per sample box. Select custom finish and dimensions.
                        </p>
                      </div>
                      <span className="text-xs font-mono px-2 py-1 rounded bg-[#2A241C] text-[#C2A379] border border-[#C2A379]/30">
                        {selectedSamples.length} / 4 Slots Filled
                      </span>
                    </div>

                    {/* Wooden / Dark Slate Presentation Tray */}
                    <div className="bg-[#12100E] p-4 rounded-md border border-[#332D24] shadow-inner">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {[0, 1, 2, 3].map(slotIndex => {
                          const sample = selectedSamples[slotIndex];
                          const product = sample ? STONE_PRODUCTS.find(p => p.id === sample.stoneId) : null;

                          return (
                            <div
                              key={slotIndex}
                              className={`aspect-square rounded-sm border p-3 flex flex-col justify-between relative transition-all ${
                                sample
                                  ? 'bg-[#1C1A17] border-[#C2A379]/40 shadow-md'
                                  : 'bg-[#171512] border-dashed border-[#3A342B] items-center justify-center text-center'
                              }`}
                            >
                              {sample ? (
                                <>
                                  <div className="relative aspect-[16/10] rounded overflow-hidden border border-white/10 mb-2">
                                    <img
                                      src={sample.imageUrl}
                                      alt={sample.stoneName}
                                      className="w-full h-full object-cover"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => handleRemoveStone(sample.stoneId)}
                                      className="absolute top-1 right-1 p-1 bg-black/70 hover:bg-red-900/80 text-white rounded transition-colors"
                                      title="Remove swatch"
                                    >
                                      <Trash2 className="w-3 h-3 text-red-300" />
                                    </button>
                                  </div>

                                  <div className="space-y-1.5 text-left flex-1 flex flex-col justify-between">
                                    <div>
                                      <div className="font-semibold text-xs text-[#FAF7F2] truncate">
                                        {sample.stoneName}
                                      </div>
                                      <div className="text-[10px] text-[#C2A379] flex items-center gap-1">
                                        <span>{sample.origin}</span>
                                      </div>
                                    </div>

                                    {/* Finish Selector */}
                                    <div className="space-y-1">
                                      <label className="text-[9px] uppercase tracking-wider text-[#7C7569] font-bold block">
                                        Surface Finish:
                                      </label>
                                      <select
                                        value={sample.finish}
                                        onChange={e => handleUpdateFinish(sample.stoneId, e.target.value)}
                                        className="w-full bg-[#12100E] border border-[#2F2922] text-[#E0D8CC] text-[10px] rounded px-1.5 py-1 focus:border-[#C2A379] outline-none"
                                      >
                                        {(product?.recommendedFinishes || ['Polished', 'Honed', 'Flamed', 'Leathered']).map(f => (
                                          <option key={f} value={f}>
                                            {f}
                                          </option>
                                        ))}
                                      </select>
                                    </div>

                                    {/* Size Selector */}
                                    <div className="space-y-1">
                                      <label className="text-[9px] uppercase tracking-wider text-[#7C7569] font-bold block">
                                        Sample Spec:
                                      </label>
                                      <select
                                        value={sample.size}
                                        onChange={e => handleUpdateSize(sample.stoneId, e.target.value as any)}
                                        className="w-full bg-[#12100E] border border-[#2F2922] text-[#E0D8CC] text-[10px] rounded px-1.5 py-1 focus:border-[#C2A379] outline-none"
                                      >
                                        <option value="10x10 cm (Standard Swatch)">10x10 cm Swatch</option>
                                        <option value="15x15 cm (Architectural Tile)">15x15 cm Tile</option>
                                        <option value="Bookmatched Mini-Set (Pair)">Bookmatch Set</option>
                                      </select>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <div className="p-3 text-center space-y-1.5 my-auto">
                                  <div className="w-8 h-8 rounded-full border border-dashed border-[#5A5043] flex items-center justify-center mx-auto text-[#7A7061]">
                                    <Plus className="w-4 h-4" />
                                  </div>
                                  <div className="text-[11px] font-semibold text-[#8C8476]">
                                    Slot {slotIndex + 1} Empty
                                  </div>
                                  <div className="text-[9px] text-[#5C5549]">
                                    Pick from catalog below
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Fast Architect Presets */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C8476] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C2A379]" />
                      <span>One-Click Curated Architect Palettes</span>
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => handleApplyPreset('italian', ['statuario-marble', 'calacatta-gold-marble', 'carrara-white-marble', 'botticino-classic'])}
                        className={`p-2.5 rounded text-left border text-xs transition-colors ${
                          activePreset === 'italian'
                            ? 'bg-[#2A241C] border-[#C2A379] text-[#FAF7F2]'
                            : 'bg-[#141210] border-[#2C2720] text-[#B8AF9F] hover:bg-[#201C17]'
                        }`}
                      >
                        <div className="font-bold text-white">Classic Italian Marble Kit</div>
                        <div className="text-[10px] text-[#8C8476]">Statuario, Calacatta, Carrara, Botticino</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleApplyPreset('rajasthan-heritage', ['makrana-white-marble', 'rajasthan-black-granite', 'dholpur-beige-sandstone', 'jodhpur-pink-sandstone'])}
                        className={`p-2.5 rounded text-left border text-xs transition-colors ${
                          activePreset === 'rajasthan-heritage'
                            ? 'bg-[#2A241C] border-[#C2A379] text-[#FAF7F2]'
                            : 'bg-[#141210] border-[#2C2720] text-[#B8AF9F] hover:bg-[#201C17]'
                        }`}
                      >
                        <div className="font-bold text-white">Rajasthan Heritage Palette</div>
                        <div className="text-[10px] text-[#8C8476]">Makrana, Black Granite, Dholpur & Jodhpur</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleApplyPreset('outdoor-cladding', ['kota-blue-limestone', 'desert-gold-quartzite', 'teakwood-sandstone', 'steel-grey-granite'])}
                        className={`p-2.5 rounded text-left border text-xs transition-colors ${
                          activePreset === 'outdoor-cladding'
                            ? 'bg-[#2A241C] border-[#C2A379] text-[#FAF7F2]'
                            : 'bg-[#141210] border-[#2C2720] text-[#B8AF9F] hover:bg-[#201C17]'
                        }`}
                      >
                        <div className="font-bold text-white">Exterior & Paving Spec</div>
                        <div className="text-[10px] text-[#8C8476]">Kota Stone, Quartzite, Teakwood & Granite</div>
                      </button>
                    </div>
                  </div>

                  {/* Stone Catalog Selector */}
                  <div className="space-y-3 pt-2 border-t border-[#29241E]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8A195]">
                        Add More Natural Stones from Quarry Reserves
                      </h4>
                      <input
                        type="text"
                        value={stoneSearch}
                        onChange={e => setStoneSearch(e.target.value)}
                        placeholder="Search marble, granite, sandstone..."
                        className="bg-[#12100E] border border-[#2E2821] rounded px-3 py-1.5 text-xs text-[#EAE4D9] focus:border-[#C2A379] outline-none w-full sm:w-60"
                      />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 max-h-56 overflow-y-auto pr-1 scrollbar-thin">
                      {filteredCatalogStones.map(stone => {
                        const canAdd = selectedSamples.length < 4;
                        return (
                          <div
                            key={stone.id}
                            className="bg-[#141210] p-2 rounded border border-[#2A251E] flex flex-col justify-between group hover:border-[#C2A379]/50 transition-all text-xs"
                          >
                            <div className="relative aspect-[4/3] rounded overflow-hidden mb-1.5">
                              <img
                                src={stone.imageUrl}
                                alt={stone.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                              <span className="absolute bottom-1 left-1 bg-black/80 px-1.5 py-0.5 rounded text-[9px] text-[#C2A379]">
                                {stone.category}
                              </span>
                            </div>

                            <div className="mb-2">
                              <div className="font-semibold text-[#FAF7F2] truncate text-[11px]">
                                {stone.name}
                              </div>
                              <div className="text-[10px] text-[#8C8476] truncate">{stone.origin}</div>
                            </div>

                            <button
                              type="button"
                              disabled={!canAdd}
                              onClick={() => handleAddStone(stone)}
                              className={`w-full py-1 text-[11px] font-semibold rounded flex items-center justify-center gap-1 transition-colors ${
                                canAdd
                                  ? 'bg-[#29241E] hover:bg-[#C2A379] hover:text-[#12100E] text-[#D8CFBF]'
                                  : 'bg-[#1C1A17] text-[#554E43] cursor-not-allowed'
                              }`}
                            >
                              <Plus className="w-3 h-3" />
                              <span>{canAdd ? 'Add Swatch' : 'Box Full'}</span>
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Proceed to Shipping Button */}
                  <div className="pt-2 flex justify-between items-center border-t border-[#29241E]">
                    <span className="text-xs text-[#8C8476]">
                      {selectedSamples.length === 0
                        ? 'Select at least 1 stone sample to proceed'
                        : `${selectedSamples.length} specimen(s) selected`}
                    </span>
                    <button
                      type="button"
                      disabled={selectedSamples.length === 0}
                      onClick={() => setActiveTab('shipping')}
                      className={`px-5 py-2.5 text-xs uppercase font-bold tracking-wider rounded-sm flex items-center gap-2 transition-all ${
                        selectedSamples.length > 0
                          ? 'bg-[#C2A379] hover:bg-[#D4B68D] text-[#12100E]'
                          : 'bg-[#29241E] text-[#6E6659] cursor-not-allowed'
                      }`}
                    >
                      <span>Proceed to Delivery Info</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Tab 2: Architectural Studio & Courier Shipping */
                <div className="space-y-4">
                  <div className="p-3 bg-[#231F1A] rounded border border-[#C2A379]/30 text-xs text-[#CDC5B8] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-[#C2A379]" />
                      <span>
                        Samples in Dispatch Tray:{' '}
                        <strong className="text-white">
                          {selectedSamples.map(s => s.stoneName).join(', ')}
                        </strong>
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab('kit-builder')}
                      className="text-[#C2A379] hover:underline font-semibold text-[11px]"
                    >
                      Edit Stones
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#CDC5B8] block mb-1">
                        Full Name / Principal Specifier *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Ar. David Miller"
                        className="w-full bg-[#12100E] border border-[#2E2820] rounded px-3 py-2 text-xs text-[#EAE4D9] focus:border-[#C2A379] outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#CDC5B8] block mb-1">
                        Architecture Studio / Design Firm *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firmOrCompany}
                        onChange={e => setFormData({ ...formData, firmOrCompany: e.target.value })}
                        placeholder="e.g. Miller & Partners Architects"
                        className="w-full bg-[#12100E] border border-[#2E2820] rounded px-3 py-2 text-xs text-[#EAE4D9] focus:border-[#C2A379] outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#CDC5B8] block mb-1">
                        Professional Role *
                      </label>
                      <select
                        value={formData.profession}
                        onChange={e => setFormData({ ...formData, profession: e.target.value as any })}
                        className="w-full bg-[#12100E] border border-[#2E2820] rounded px-3 py-2 text-xs text-[#EAE4D9] focus:border-[#C2A379] outline-none"
                      >
                        <option value="Architect">Architect</option>
                        <option value="Interior Designer">Interior Designer</option>
                        <option value="General Contractor">General Contractor</option>
                        <option value="Stone Importer/Wholesaler">Stone Importer / Wholesaler</option>
                        <option value="Real Estate Developer">Real Estate Developer</option>
                        <option value="Private Homeowner">Private Luxury Homeowner</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#CDC5B8] block mb-1">
                        Project Name or Application
                      </label>
                      <input
                        type="text"
                        value={formData.projectName}
                        onChange={e => setFormData({ ...formData, projectName: e.target.value })}
                        placeholder="e.g. Waterfront Villa Flooring, Hotel Lobby"
                        className="w-full bg-[#12100E] border border-[#2E2820] rounded px-3 py-2 text-xs text-[#EAE4D9] focus:border-[#C2A379] outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#CDC5B8] block mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="david@millerarchitects.com"
                        className="w-full bg-[#12100E] border border-[#2E2820] rounded px-3 py-2 text-xs text-[#EAE4D9] focus:border-[#C2A379] outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#CDC5B8] block mb-1">
                        Phone / WhatsApp (with Country Code) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834 or +971 50 123 4567"
                        className="w-full bg-[#12100E] border border-[#2E2820] rounded px-3 py-2 text-xs text-[#EAE4D9] focus:border-[#C2A379] outline-none"
                      />
                    </div>
                  </div>

                  {/* Destination Shipping Address */}
                  <div className="space-y-3 pt-2 border-t border-[#29241E]">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#A8A195] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C2A379]" />
                      <span>Physical Delivery Destination for Air Courier</span>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#CDC5B8] block mb-1">
                        Studio / Office Street Address *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.deliveryAddress}
                        onChange={e => setFormData({ ...formData, deliveryAddress: e.target.value })}
                        placeholder="Suite 400, 750 Design Avenue, Building B"
                        className="w-full bg-[#12100E] border border-[#2E2820] rounded px-3 py-2 text-xs text-[#EAE4D9] focus:border-[#C2A379] outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-[#CDC5B8] block mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={e => setFormData({ ...formData, city: e.target.value })}
                          placeholder="Dubai / New York"
                          className="w-full bg-[#12100E] border border-[#2E2820] rounded px-3 py-2 text-xs text-[#EAE4D9] focus:border-[#C2A379] outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-[#CDC5B8] block mb-1">
                          State / Province
                        </label>
                        <input
                          type="text"
                          value={formData.stateProvince}
                          onChange={e => setFormData({ ...formData, stateProvince: e.target.value })}
                          placeholder="NY / Dubai / CA"
                          className="w-full bg-[#12100E] border border-[#2E2820] rounded px-3 py-2 text-xs text-[#EAE4D9] focus:border-[#C2A379] outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-[#CDC5B8] block mb-1">
                          Postal / Zip Code *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.postalCode}
                          onChange={e => setFormData({ ...formData, postalCode: e.target.value })}
                          placeholder="10001"
                          className="w-full bg-[#12100E] border border-[#2E2820] rounded px-3 py-2 text-xs text-[#EAE4D9] focus:border-[#C2A379] outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-[#CDC5B8] block mb-1">
                          Country *
                        </label>
                        <select
                          value={formData.country}
                          onChange={e => setFormData({ ...formData, country: e.target.value })}
                          className="w-full bg-[#12100E] border border-[#2E2820] rounded px-3 py-2 text-xs text-[#EAE4D9] focus:border-[#C2A379] outline-none"
                        >
                          {countries.map(c => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#CDC5B8] block mb-1">
                        Special Instructions or Additional Stone Notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.sampleNotes}
                        onChange={e => setFormData({ ...formData, sampleNotes: e.target.value })}
                        placeholder="Mention edge profile requirements, preferred dry-lay vein direction, or multiple finish samples..."
                        className="w-full bg-[#12100E] border border-[#2E2820] rounded px-3 py-2 text-xs text-[#EAE4D9] focus:border-[#C2A379] outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Submission and Dispatch Guarantee */}
                  <div className="p-3 bg-[#141210] rounded border border-white/5 text-[11px] text-[#8C8476] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Plane className="w-3.5 h-3.5 text-[#C2A379]" />
                      <span>Complimentary air express dispatch for verified commercial projects</span>
                    </span>
                    <span className="text-[#C2A379]">Bhilwara Dispatch Centre</span>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-[#29241E]">
                    <button
                      type="button"
                      onClick={() => setActiveTab('kit-builder')}
                      className="text-xs text-[#A8A195] hover:text-[#FAF7F2] font-semibold"
                    >
                      ← Back to Swatch Selection
                    </button>

                    <button
                      type="submit"
                      className="px-7 py-3 bg-[#C2A379] hover:bg-[#D4B68D] text-[#12100E] font-bold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center gap-2 shadow-lg shadow-[#C2A379]/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Dispatch My Sample Kit</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
