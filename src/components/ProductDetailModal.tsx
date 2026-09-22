import React from 'react';
import { StoneProduct } from '../types';
import { X, Check, Globe, Layers, Droplets, Shield, ArrowRight, Package, BookOpen, Video } from 'lucide-react';

interface ProductDetailModalProps {
  product: StoneProduct | null;
  onClose: () => void;
  onInquire: (stoneName: string) => void;
  onOrderSample?: (product: StoneProduct) => void;
  onKnowAboutStone?: (product: StoneProduct) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onInquire,
  onOrderSample,
  onKnowAboutStone
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-[#191714] text-[#FAF7F2] rounded-md border border-[#3A342B] w-full max-w-4xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#12100E] border-b border-[#2C2720] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase bg-[#C2A379]/15 text-[#C2A379] border border-[#C2A379]/30 rounded-sm">
              {product.category}
            </span>
            <span className="text-xs text-[#8C8476]">
              Origin: {product.origin}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#9E9689] hover:text-[#FAF7F2] hover:bg-[#28241E] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Image Preview with Texture Badge */}
            <div className="space-y-3">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#2D2821] group">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#12100E]/85 backdrop-blur-md p-3 rounded-sm border border-white/10 text-xs flex justify-between items-center">
                  <span className="text-[#A8A195]">Texture / Pattern:</span>
                  <span className="font-medium text-[#FAF7F2]">{product.texturePattern}</span>
                </div>
              </div>

              {/* Physical Spec Badges */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-[#141210] p-2.5 rounded-sm border border-[#2A2620]">
                  <Layers className="w-4 h-4 text-[#C2A379] mx-auto mb-1" />
                  <div className="text-[10px] text-[#7A7367] uppercase tracking-wider">Density</div>
                  <div className="font-semibold text-[#E5DFD3]">{product.density}</div>
                </div>

                <div className="bg-[#141210] p-2.5 rounded-sm border border-[#2A2620]">
                  <Droplets className="w-4 h-4 text-[#C2A379] mx-auto mb-1" />
                  <div className="text-[10px] text-[#7A7367] uppercase tracking-wider">Absorption</div>
                  <div className="font-semibold text-[#E5DFD3]">{product.waterAbsorption}</div>
                </div>

                <div className="bg-[#141210] p-2.5 rounded-sm border border-[#2A2620]">
                  <Shield className="w-4 h-4 text-[#C2A379] mx-auto mb-1" />
                  <div className="text-[10px] text-[#7A7367] uppercase tracking-wider">Strength</div>
                  <div className="font-semibold text-[#E5DFD3]">{product.compressiveStrength || 'ASTM Tested'}</div>
                </div>
              </div>
            </div>

            {/* Description & Technical Breakdown */}
            <div className="space-y-5">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#FAF7F2]">
                  {product.name}
                </h3>
                <p className="text-xs font-medium text-[#C2A379] mt-1 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Quarried from {product.origin}</span>
                </p>
              </div>

              <p className="text-sm text-[#CDC5B8] leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-3 pt-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8A195] mb-2">
                    Available Surface Finishes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.recommendedFinishes.map((finish) => (
                      <span
                        key={finish}
                        className="px-2.5 py-1 text-xs bg-[#24201A] border border-[#3A342B] rounded-sm text-[#E0D8CB] flex items-center gap-1"
                      >
                        <Check className="w-3 h-3 text-[#C2A379]" />
                        <span>{finish}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8A195] mb-2">
                    Standard Calibrated Thickness
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.standardThicknesses.map((thickness) => (
                      <span
                        key={thickness}
                        className="px-2.5 py-1 text-xs bg-[#1A1814] border border-[#2E2820] rounded-sm text-[#C2A379] font-mono"
                      >
                        {thickness}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8A195] mb-2">
                    Prime Architectural Applications
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.recommendedApplications.map((app) => (
                      <span
                        key={app}
                        className="px-2 py-0.5 text-xs text-[#CDC5B8] bg-[#141210] border border-[#28241E] rounded-sm"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#29251F] flex flex-col sm:flex-row flex-wrap gap-3">
                {onKnowAboutStone && (
                  <button
                    onClick={() => {
                      onClose();
                      onKnowAboutStone(product);
                    }}
                    className="w-full sm:w-auto px-5 py-3 bg-[#241F18] hover:bg-[#342A1E] border border-[#C2A379] text-[#E8D4B8] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <BookOpen className="w-4 h-4 text-[#C2A379]" />
                    <span>Know About This Stone</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    onClose();
                    onInquire(product.name);
                  }}
                  className="w-full sm:w-auto px-5 py-3 bg-[#C2A379] hover:bg-[#D4B68D] text-[#12100E] font-semibold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Quote & Slabs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {onOrderSample && (
                  <button
                    onClick={() => {
                      onClose();
                      onOrderSample(product);
                    }}
                    className="w-full sm:w-auto px-5 py-3 bg-[#1A1815] hover:bg-[#28241F] border border-[#C2A379]/40 text-[#D4C8B5] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2"
                  >
                    <Package className="w-4 h-4 text-[#C2A379]" />
                    <span>Order Stone Sample</span>
                  </button>
                )}

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-3 bg-[#141210] text-[#8C8476] hover:text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors sm:ml-auto"
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
