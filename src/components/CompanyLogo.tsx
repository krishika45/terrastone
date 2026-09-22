import React from 'react';

interface CompanyLogoProps {
  variant?: 'nav' | 'footer' | 'large' | 'symbol-only';
  className?: string;
  showSubtitle?: boolean;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  variant = 'nav',
  className = '',
  showSubtitle = true
}) => {
  if (variant === 'symbol-only') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 60 60"
          className="w-10 h-10 drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Octagonal Masonry Shield */}
          <polygon
            points="18,4 42,4 56,18 56,42 42,56 18,56 4,42 4,18"
            className="fill-[#1A1815] stroke-[#C2A379]/70"
            strokeWidth="1.5"
          />
          {/* Inner Faceted Stone Cleavage Line */}
          <polygon
            points="20,8 40,8 52,20 52,40 40,52 20,52 8,40 8,20"
            className="fill-gradient stroke-[#E8D4B8]/40"
            strokeWidth="1"
          />
          {/* Geometric Monolithic "T" & "S" Stone Form */}
          <path
            d="M17 18 H43 V24 H33 V44 H27 V24 H17 V18 Z"
            className="fill-[#C2A379]"
          />
          {/* Golden Strata Accent - Sandstone sedimentary line */}
          <line
            x1="12"
            y1="32"
            x2="48"
            y2="32"
            stroke="#F5E8D4"
            strokeWidth="1.5"
            strokeDasharray="2 3"
          />
          {/* Central Quarry Gem Diamond */}
          <polygon
            points="30,28 34,32 30,36 26,32"
            className="fill-[#FAF7F2]"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'large') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="relative mb-3 group">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#C2A379]/20 via-[#E8D4B8]/30 to-[#C2A379]/20 blur-sm opacity-60 group-hover:opacity-100 transition duration-700" />
          <svg
            viewBox="0 0 72 72"
            className="w-16 h-16 relative transform group-hover:scale-105 transition-transform duration-500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Hexagonal Ashlar Facet */}
            <polygon
              points="36,4 66,20 66,52 36,68 6,52 6,20"
              fill="#181512"
              stroke="#C2A379"
              strokeWidth="2"
            />
            {/* Inner Sandstone Layer Lines */}
            <line x1="16" y1="26" x2="56" y2="26" stroke="#C2A379" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="10" y1="36" x2="62" y2="36" stroke="#E8D4B8" strokeWidth="1.5" strokeOpacity="0.8" />
            <line x1="16" y1="46" x2="56" y2="46" stroke="#C2A379" strokeWidth="1" strokeOpacity="0.4" />
            {/* Chiseled Monolith Keystone */}
            <path
              d="M26 22 H46 L42 50 H30 L26 22 Z"
              fill="url(#goldGradientLarge)"
              stroke="#F5E8D4"
              strokeWidth="0.8"
            />
            {/* Core T-Craft Cut */}
            <path
              d="M32 28 H40 V44 H32 V28 Z"
              fill="#14120F"
            />
            <defs>
              <linearGradient id="goldGradientLarge" x1="26" y1="22" x2="46" y2="50" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F5E8D4" />
                <stop offset="0.5" stopColor="#C2A379" />
                <stop offset="1" stopColor="#96774D" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div>
          <div className="flex items-center justify-center gap-2">
            <span className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF7F2] font-['Cormorant_Garamond',serif]">
              TERRASTONE
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="h-[1px] w-6 bg-[#C2A379]/60" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#C2A379]">
              INTERNATIONAL
            </span>
            <span className="h-[1px] w-6 bg-[#C2A379]/60" />
          </div>
          {showSubtitle && (
            <p className="text-[11px] text-[#A69F94] tracking-widest uppercase mt-1 font-light">
              Rajasthan Sandstone & Natural Stone Works • Est. 2012
            </p>
          )}
        </div>
      </div>
    );
  }

  // Nav and Footer variants
  return (
    <div className={`flex items-center gap-3.5 group text-left ${className}`}>
      {/* Bespoke Architectural Stone Monogram */}
      <div className="relative shrink-0">
        <div className="w-11 h-11 rounded-sm bg-gradient-to-br from-[#2D2821] via-[#1E1B17] to-[#141210] border border-[#C2A379]/50 flex items-center justify-center p-1.5 shadow-lg group-hover:border-[#E8D4B8] transition-colors duration-300">
          <svg
            viewBox="0 0 48 48"
            className="w-full h-full transform group-hover:rotate-45 transition-transform duration-500 ease-out"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Precision Diamond-Wire Cut Ashlar */}
            <polygon
              points="24,3 45,24 24,45 3,24"
              className="fill-[#1A1815] stroke-[#C2A379]"
              strokeWidth="1.5"
            />
            {/* Concentric Sandstone Geological Grain Bands */}
            <polygon
              points="24,9 39,24 24,39 9,24"
              className="stroke-[#E8D4B8]/50"
              strokeWidth="1"
            />
            {/* Golden Core Facet */}
            <polygon
              points="24,15 33,24 24,33 15,24"
              className="fill-[#C2A379] stroke-[#F5E8D4]/80"
              strokeWidth="1"
            />
            {/* Center Monolithic Point */}
            <circle cx="24" cy="24" r="2.2" className="fill-[#141210]" />
          </svg>
        </div>
        {/* Subtle Cornerstone Gold Accent Pip */}
        <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-[#C2A379] rounded-full border border-[#141210]" />
      </div>

      {/* Typography Hierarchy */}
      <div className="min-w-0">
        <div className="flex items-baseline gap-1.5">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#FAF7F2] group-hover:text-[#E8D4B8] transition-colors">
            TerraStone
          </span>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#C2A379] bg-[#C2A379]/10 px-1.5 py-0.5 rounded-xs border border-[#C2A379]/20">
            Intl
          </span>
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#A69F94] tracking-wide font-normal truncate">
            <span className="text-[#C2A379] font-medium">Sandstone & Marble</span>
            <span>•</span>
            <span className="hidden xs:inline">Bhilwara, Rajasthan</span>
          </div>
        )}
      </div>
    </div>
  );
};
