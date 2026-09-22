import React from 'react';
import { GalleryItem } from '../types';
import { X, MapPin, Tag } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onInquire: (stoneName: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onInquire
}) => {
  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-[#181613] rounded-md border border-[#3A342B] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full max-h-[70vh] object-contain"
          />
        </div>

        <div className="p-6 bg-[#141210] border-t border-[#2C2720] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[#C2A379]/15 text-[#C2A379] border border-[#C2A379]/30 rounded">
                {item.category}
              </span>
              <span className="text-xs text-[#8E8679] flex items-center gap-1">
                <Tag className="w-3 h-3 text-[#C2A379]" />
                {item.stoneName}
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#FBF9F5]">
              {item.title}
            </h3>
            {item.location && (
              <p className="text-xs text-[#A8A195] flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#C2A379]" />
                <span>{item.location}</span>
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => {
                onClose();
                onInquire(item.stoneName);
              }}
              className="w-full md:w-auto px-5 py-2.5 bg-[#C2A379] hover:bg-[#D4B68D] text-[#12100E] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all"
            >
              Inquire for This Stone
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
