import React, { useState, useRef, useEffect } from 'react';
import { StoneProduct } from '../types';
import { Play, Pause, Volume2, VolumeX, Sun, Droplets, Sparkles, Layers, RefreshCw, Eye } from 'lucide-react';

interface AnimatedStoneVideoProps {
  stone?: StoneProduct;
  title?: string;
  subtitle?: string;
  videoUrl?: string;
  posterUrl?: string;
  stoneName?: string;
  compact?: boolean;
  autoPlay?: boolean;
  onOpenFullModal?: () => void;
}

export const AnimatedStoneVideo: React.FC<AnimatedStoneVideoProps> = ({
  stone,
  title,
  subtitle,
  videoUrl,
  posterUrl,
  stoneName,
  compact = false,
  autoPlay = true,
  onOpenFullModal
}) => {
  const resolvedTitle = title || (stone ? `${stone.name} Quarry Extraction & Processing` : "Rajasthan Sandstone & Natural Quarry Extraction");
  const resolvedSubtitle = subtitle || (stone ? `${stone.category} • ${stone.origin}` : "Direct Gangsaw Diamond-Wire Slicing & Hand-Cleft Dressing");
  const resolvedVideoUrl = videoUrl || stone?.videoUrl || "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-rocky-cliff-with-sea-waves-41664-large.mp4";
  const resolvedPosterUrl = posterUrl || stone?.imageUrl || "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80";
  const resolvedStoneName = stoneName || stone?.name || "Dholpur Beige Royal Sandstone";

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [interactiveMode, setInteractiveMode] = useState<'video' | 'sunlight' | 'waterproof'>('video');
  const [sunAngle, setSunAngle] = useState(45); // degrees
  const [waterTested, setWaterTested] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          // Autoplay policy fallback
          setIsPlaying(false);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className={`relative bg-[#141210] rounded-sm overflow-hidden border border-[#2D2821] shadow-xl ${compact ? 'p-3' : 'p-4 sm:p-6'}`}>
      
      {/* Top Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[#25211A]">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C2A379] animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C2A379]">
              Live Geological Texture & Motion Cinema
            </span>
          </div>
          <h4 className="font-serif text-base sm:text-lg font-bold text-[#FAF7F2] mt-0.5">
            {resolvedTitle}
          </h4>
          {!compact && (
            <p className="text-xs text-[#9E9689] mt-0.5">
              {resolvedSubtitle}
            </p>
          )}
        </div>

        {/* View Switcher: Live Video vs Solar Light vs Water Repellency */}
        <div className="flex items-center gap-1.5 bg-[#1B1814] p-1 rounded-sm border border-[#2E2921]">
          <button
            type="button"
            onClick={() => setInteractiveMode('video')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-xs transition-colors flex items-center gap-1.5 ${
              interactiveMode === 'video'
                ? 'bg-[#C2A379] text-[#12100E]'
                : 'text-[#A8A195] hover:text-[#FAF7F2]'
            }`}
          >
            <Play className="w-3 h-3" />
            <span>Video</span>
          </button>

          <button
            type="button"
            onClick={() => setInteractiveMode('sunlight')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-xs transition-colors flex items-center gap-1.5 ${
              interactiveMode === 'sunlight'
                ? 'bg-[#C2A379] text-[#12100E]'
                : 'text-[#A8A195] hover:text-[#FAF7F2]'
            }`}
          >
            <Sun className="w-3 h-3" />
            <span>Solar Glint</span>
          </button>

          <button
            type="button"
            onClick={() => setInteractiveMode('waterproof')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-xs transition-colors flex items-center gap-1.5 ${
              interactiveMode === 'waterproof'
                ? 'bg-[#C2A379] text-[#12100E]'
                : 'text-[#A8A195] hover:text-[#FAF7F2]'
            }`}
          >
            <Droplets className="w-3 h-3" />
            <span>Sealing Test</span>
          </button>

          {onOpenFullModal && (
            <button
              type="button"
              onClick={onOpenFullModal}
              className="px-2.5 py-1 text-xs font-semibold rounded-xs bg-[#2B2318] hover:bg-[#3B3020] text-[#E8D4B8] border border-[#C2A379]/40 transition-colors flex items-center gap-1 ml-1"
              title="Open Complete Stone Knowledge & Geological Dossier"
            >
              <Eye className="w-3 h-3 text-[#C2A379]" />
              <span className="hidden sm:inline">Dossier</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Display Screen */}
      <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden bg-[#0A0908] border border-white/5">
        
        {/* Mode 1: Ambient Looping Video */}
        {interactiveMode === 'video' && (
          <>
            {!videoError ? (
              <video
                ref={videoRef}
                src={resolvedVideoUrl}
                poster={resolvedPosterUrl}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onError={() => setVideoError(true)}
                className="w-full h-full object-cover brightness-95"
              />
            ) : (
              /* Fallback animated visual if browser blocks third-party video */
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={resolvedPosterUrl}
                  alt={resolvedStoneName}
                  className="w-full h-full object-cover animate-pulse transition-all duration-1000 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              </div>
            )}

            {/* Cinematic Overlay Scanlines & Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* Video Controls Overlay */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#F5F2EB]">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="p-2 rounded-full bg-black/60 hover:bg-[#C2A379] hover:text-[#12100E] border border-white/20 backdrop-blur-sm transition-colors"
                  aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>

                <button
                  type="button"
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-black/60 hover:bg-[#C2A379] hover:text-[#12100E] border border-white/20 backdrop-blur-sm transition-colors"
                  aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>

                <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-sm border border-white/10 text-[11px] font-mono text-[#E8D4B8]">
                  4K Architectural Feed • {resolvedStoneName}
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-[11px] bg-black/60 px-3 py-1 rounded-sm border border-white/10 text-[#C2A379]">
                <Layers className="w-3.5 h-3.5" />
                <span>Calibrated 20mm Gangsaw Slice</span>
              </div>
            </div>
          </>
        )}

        {/* Mode 2: Interactive Solar Glint / Sunlight Angle Simulator */}
        {interactiveMode === 'sunlight' && (
          <div className="relative w-full h-full overflow-hidden flex flex-col justify-end p-4">
            <img
              src={resolvedPosterUrl}
              alt={resolvedStoneName}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-300"
              style={{
                filter: `brightness(${0.8 + (Math.sin((sunAngle * Math.PI) / 180) * 0.4)}) contrast(1.1)`
              }}
            />

            {/* Dynamic Solar Ray Overlay */}
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-300 mix-blend-overlay"
              style={{
                background: `linear-gradient(${sunAngle}deg, rgba(255,223,160,0.6) 0%, rgba(194,163,121,0.2) 50%, rgba(0,0,0,0.4) 100%)`
              }}
            />

            <div className="relative z-10 bg-black/75 backdrop-blur-md p-3.5 rounded-sm border border-white/15 max-w-md">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-[#FAF7F2] flex items-center gap-1.5">
                  <Sun className="w-4 h-4 text-[#F3C262]" />
                  <span>Sun Incident Angle ({sunAngle}°)</span>
                </span>
                <span className="text-[11px] font-mono text-[#C2A379]">
                  {sunAngle < 60 ? '08:30 AM Morning' : sunAngle < 120 ? '12:30 PM High Noon' : '17:45 PM Golden Hour'}
                </span>
              </div>

              <input
                type="range"
                min="15"
                max="165"
                value={sunAngle}
                onChange={(e) => setSunAngle(Number(e.target.value))}
                className="w-full h-1.5 bg-[#2E2820] rounded-lg appearance-none cursor-pointer accent-[#C2A379]"
              />

              <p className="text-[11px] text-[#A69E92] mt-2 leading-relaxed">
                Observe the natural mica glint and subtle sedimentary strata shadows as ambient sunlight shifts across the hand-split sandstone cleft.
              </p>
            </div>
          </div>
        )}

        {/* Mode 3: Sealing & Water Repellency Demonstration */}
        {interactiveMode === 'waterproof' && (
          <div className="relative w-full h-full overflow-hidden flex flex-col justify-end p-4">
            <img
              src={posterUrl}
              alt={stoneName}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Water Drops Simulator Animation */}
            {waterTested && (
              <div className="absolute inset-0 pointer-events-none">
                {[
                  { top: '35%', left: '42%', size: 'w-6 h-6' },
                  { top: '48%', left: '55%', size: 'w-8 h-8' },
                  { top: '62%', left: '38%', size: 'w-5 h-5' },
                  { top: '40%', left: '68%', size: 'w-7 h-7' }
                ].map((drop, idx) => (
                  <div
                    key={idx}
                    className={`absolute ${drop.size} rounded-full bg-white/40 border border-white/80 shadow-inner backdrop-blur-xs animate-bounce`}
                    style={{ top: drop.top, left: drop.left, animationDuration: `${1.2 + idx * 0.3}s` }}
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-1 ml-1 opacity-90" />
                  </div>
                ))}
              </div>
            )}

            <div className="relative z-10 bg-black/80 backdrop-blur-md p-4 rounded-sm border border-white/15 max-w-lg">
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-[#5DADE2]" />
                  <span className="font-semibold text-xs text-[#FAF7F2]">
                    Hydrophobic Nano-Sealing Inspection
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setWaterTested(!waterTested)}
                  className="px-3 py-1 bg-[#2980B9] hover:bg-[#3498DB] text-white text-xs font-semibold rounded-xs transition-colors flex items-center gap-1.5"
                >
                  <RefreshCw className={`w-3 h-3 ${waterTested ? 'animate-spin' : ''}`} />
                  <span>{waterTested ? 'Reset Test' : 'Dispense Water Drops'}</span>
                </button>
              </div>

              <p className="text-[11px] text-[#A69E92] leading-relaxed">
                TerraStone applies deep-penetrating silane-siloxane fluoropolymers on request. Water contact angle exceeds 110°, causing precipitation and poolside chlorine to bead and roll off without staining or efflorescence.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer Spec Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pt-3 border-t border-[#25211A] text-xs text-[#9E9689]">
        <div>
          <span className="text-[#6E675B] block text-[10px] uppercase">Quarry Extraction</span>
          <span className="text-[#E5DFD3] font-medium">Bhilwara & Dholpur</span>
        </div>
        <div>
          <span className="text-[#6E675B] block text-[10px] uppercase">Sawing Method</span>
          <span className="text-[#E5DFD3] font-medium">Multi-Diamond Gangsaw</span>
        </div>
        <div>
          <span className="text-[#6E675B] block text-[10px] uppercase">Slip Rating</span>
          <span className="text-[#C2A379] font-medium">R11 / ANSI A326.3 Pass</span>
        </div>
        <div>
          <span className="text-[#6E675B] block text-[10px] uppercase">Porosity Index</span>
          <span className="text-[#E5DFD3] font-medium">&lt; 1.25% Low Absorption</span>
        </div>
      </div>
    </div>
  );
};
