import React from 'react';

interface CompanyLogoProps {
  variant?: 'nav' | 'footer' | 'large' | 'symbol-only';
  className?: string;
  showSubtitle?: boolean;
  theme?: 'dark' | 'light' | 'auto';
}

/**
 * Exact Vector Reproduction of the Official TerraStone International Monolith Logo:
 * - 3D Chiseled Slate-Grey Stone Block with crystalline angular facets
 * - Recessed Architectural "T" with White Horizontal Bar & Terracotta Sandstone Stem
 * - Royal Blue Intertwined Serpentine "S" with White Border & Cyan Specular Highlight
 * - Terracotta Earth Arched Horizon Line
 * - "TERRA STONE" Bold Geometric Typography
 * - "• INTERNATIONAL •" Royal Blue Tracking Wordmark
 */
export const StoneMonolithEmblem: React.FC<{
  size?: number;
  className?: string;
  showArc?: boolean;
}> = ({ size = 48, className = '', showArc = true }) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size * 0.95 }}
    >
      <svg
        viewBox="0 0 200 190"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Deep Royal Blue Gradient for S */}
          <linearGradient id="emblemBlueGrad" x1="20%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor="#12569E" />
            <stop offset="50%" stopColor="#0B427F" />
            <stop offset="100%" stopColor="#072C58" />
          </linearGradient>

          {/* Cyan/Lapis Specular Ribbon on S */}
          <linearGradient id="emblemRibbonGleam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4FA0F2" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#1B6DC2" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0B427F" stopOpacity="0.1" />
          </linearGradient>

          {/* Rock Top Slope Gradient */}
          <linearGradient id="emblemRockTop" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6C7D8F" />
            <stop offset="100%" stopColor="#516172" />
          </linearGradient>

          {/* Terracotta Sandstone Earth Gradient */}
          <linearGradient id="emblemTerracotta" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7E553B" />
            <stop offset="50%" stopColor="#9E7051" />
            <stop offset="100%" stopColor="#7E553B" />
          </linearGradient>

          {/* Soft Bevel Inner Shadow */}
          <filter id="emblemInset" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* ========================================================
            1. 3D CHISELED STONE MONOLITH BLOCK (Slate Grey Rock)
            ======================================================== */}
        <g filter="url(#emblemInset)">
          {/* Dark Recessed Backing Behind Letters */}
          <polygon
            points="38,40 162,40 168,142 32,142"
            fill="#2D3742"
          />

          {/* Top Sloping Stone Bevel / Ridge */}
          <polygon
            points="18,32 100,18 182,32 162,42 38,42"
            fill="url(#emblemRockTop)"
            stroke="#7C8E9F"
            strokeWidth="0.8"
          />

          {/* Left Rock Face - Multiple Jagged Chiseled Facets */}
          <polygon points="18,32 38,42 34,74 12,66" fill="#4B5868" />
          <polygon points="12,66 34,74 32,108 8,100" fill="#3B4653" />
          <polygon points="8,100 32,108 32,142 16,146 10,126" fill="#2E3743" />
          <polygon points="32,142 38,142 36,150 20,152 16,146" fill="#242B34" />

          {/* Right Rock Face - Multiple Jagged Chiseled Facets */}
          <polygon points="182,32 162,42 166,74 188,66" fill="#586878" />
          <polygon points="188,66 166,74 168,108 192,100" fill="#465361" />
          <polygon points="192,100 168,108 168,142 184,146 190,126" fill="#36424E" />
          <polygon points="168,142 162,142 164,150 180,152 184,146" fill="#28313B" />

          {/* Bottom Rock Ground Facet */}
          <polygon
            points="36,150 100,154 164,150 168,142 32,142"
            fill="#222830"
          />

          {/* Sharp Chiseled White Chamfer Lines (Rock Opening Trim) */}
          <polyline
            points="38,42 18,32 100,18 182,32 162,42"
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <polyline
            points="38,42 32,142 100,151 168,142 162,42"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>

        {/* ========================================================
            2. MONOGRAM "T" (White Top Bar & Terracotta Vertical Stem)
            ======================================================== */}
        {/* Left White Arm of the T */}
        <polygon
          points="38,42 102,42 102,68 68,68 68,68 38,68"
          fill="#FFFFFF"
          stroke="#FFFFFF"
          strokeWidth="1"
        />

        {/* Right White Continuation of T Bar (Connecting to Top Right Rock Edge) */}
        <polygon
          points="102,42 162,42 162,68 140,68 102,42"
          fill="#FFFFFF"
        />

        {/* Vertical Stem of "T" - Solid Terracotta Sandstone Brown with White Outline */}
        <rect
          x="78"
          y="68"
          width="28"
          height="74"
          fill="url(#emblemTerracotta)"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinejoin="miter"
        />

        {/* ========================================================
            3. MONOGRAM "S" (Intertwined Royal Blue with White Trim)
            ======================================================== */}
        {/* Thick White Isolation Halo Stroke */}
        <path
          d="M 124 42 
             H 156 
             V 74 
             H 124 
             C 124 64, 118 58, 108 58 
             C 98 58, 92 64, 92 72 
             C 92 84, 102 91, 122 100 
             C 148 111, 162 124, 162 144 
             C 162 164, 142 178, 114 178 
             C 86 178, 70 162, 68 140 
             L 102 140 
             C 104 150, 112 156, 122 156 
             C 130 156, 138 150, 138 142 
             C 138 132, 130 126, 110 118 
             C 84 107, 68 94, 68 72 
             C 68 50, 88 42, 124 42 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="8"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* S Main Geometric Ribbon Body (Royal Blue Gradient) */}
        <path
          d="M 124 42 
             H 156 
             V 74 
             H 124 
             C 124 64, 118 58, 108 58 
             C 98 58, 92 64, 92 72 
             C 92 84, 102 91, 122 100 
             C 148 111, 162 124, 162 144 
             C 162 164, 142 178, 114 178 
             C 86 178, 70 162, 68 140 
             L 102 140 
             C 104 150, 112 156, 122 156 
             C 130 156, 138 150, 138 142 
             C 138 132, 130 126, 110 118 
             C 84 107, 68 94, 68 72 
             C 68 50, 88 42, 124 42 Z"
          fill="url(#emblemBlueGrad)"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinejoin="miter"
        />

        {/* Specular Inner Ribbon Highlight on S */}
        <path
          d="M 124 42 
             H 156 
             V 70 
             C 130 70, 112 76, 108 86 
             C 126 94, 154 106, 158 136"
          fill="none"
          stroke="url(#emblemRibbonGleam)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Top Right Architectural Cut on S */}
        <rect
          x="126"
          y="42"
          width="30"
          height="32"
          fill="url(#emblemBlueGrad)"
          stroke="#FFFFFF"
          strokeWidth="3"
        />

        {/* ========================================================
            4. CURVED TERRACOTTA HORIZON ARC
            ======================================================== */}
        {showArc && (
          <path
            d="M 22 175 
               Q 100 152 178 175 
               Q 100 158 22 175 Z"
            fill="url(#emblemTerracotta)"
          />
        )}
      </svg>
    </div>
  );
};

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  variant = 'nav',
  className = '',
  showSubtitle = true,
  theme = 'auto'
}) => {
  // SYMBOL-ONLY VARIANT (Ideal for compact icons, mobile headers, or app bar)
  if (variant === 'symbol-only') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <StoneMonolithEmblem size={44} showArc={true} />
      </div>
    );
  }

  // LARGE HERO / ABOUT PAGE VARIANT (Full Stacked Center Lockup matching the official image)
  if (variant === 'large') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {/* 3D Chiseled Stone Monolith Emblem */}
        <div className="relative mb-2 transition-transform duration-500 hover:scale-105">
          <StoneMonolithEmblem size={130} showArc={true} />
        </div>

        {/* Typography Stack */}
        <div className="space-y-1">
          {/* TERRA STONE Wordmark */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.14em] text-[#FAF7F2] font-sans">
            TERRA STONE
          </h1>

          {/* • INTERNATIONAL • Sub-tier with Royal Blue Tracking */}
          <div className="flex items-center justify-center gap-2 pt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E7051]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.32em] text-[#5EA2EB]">
              INTERNATIONAL
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E7051]" />
          </div>

          {showSubtitle && (
            <p className="text-[11px] text-[#A69E92] tracking-widest uppercase mt-2 font-light">
              Architectural Sandstone & Natural Stone Concessions • Bhilwara, Rajasthan
            </p>
          )}
        </div>
      </div>
    );
  }

  // NAV & FOOTER VARIANTS (Horizontal Responsive Header Lockup)
  const isFooter = variant === 'footer';

  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 group text-left select-none ${className}`}>
      {/* Official 3D Monolith Stone Logo Mark */}
      <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
        <StoneMonolithEmblem 
          size={isFooter ? 48 : 42} 
          showArc={true} 
        />
      </div>

      {/* Typography Hierarchy */}
      <div className="min-w-0">
        <div className="flex flex-col">
          {/* TERRA STONE */}
          <div className="flex items-center">
            <span className="font-sans text-lg sm:text-xl font-black tracking-[0.12em] text-[#FAF7F2] group-hover:text-[#E8D4B8] transition-colors leading-tight">
              TERRA STONE
            </span>
          </div>

          {/* • INTERNATIONAL • */}
          <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.24em] text-[#5EA2EB] leading-tight mt-0.5">
            <span className="w-1 h-1 rounded-full bg-[#9E7051] shrink-0" />
            <span className="text-[#6BA8ED] group-hover:text-[#8CC2FF] transition-colors whitespace-nowrap">
              INTERNATIONAL
            </span>
            <span className="w-1 h-1 rounded-full bg-[#9E7051] shrink-0" />
          </div>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-1.5 text-[10px] text-[#8C8476] tracking-wider font-normal truncate mt-1 hidden sm:flex">
            <span className="text-[#C2A379] font-medium">Rajasthan Sandstone</span>
            <span className="text-[#4A4237]">•</span>
            <span className="text-[#A69E92]">Bhilwara Quarry Works</span>
          </div>
        )}
      </div>
    </div>
  );
};

