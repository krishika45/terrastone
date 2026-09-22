import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Search, 
  MapPin, 
  Globe, 
  Compass, 
  ExternalLink, 
  Send, 
  RotateCcw, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  AlertCircle, 
  Info, 
  Navigation,
  Quote
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { AIMessage, WebGroundingSource, MapGroundingSource } from '../types';
import { COMPANY_INFO, STONE_PRODUCTS } from '../data/stoneData';

interface AiAdvisorPageProps {
  onOpenQuoteModal: (stoneName?: string) => void;
  onNavigate: (page: any) => void;
}

export function AiAdvisorPage({ onOpenQuoteModal }: AiAdvisorPageProps) {
  const [activeTab, setActiveTab] = useState<'search' | 'maps' | 'specifier'>('search');
  
  // Search Mode State
  const [searchPrompt, setSearchPrompt] = useState('');
  const [searchCategory, setSearchCategory] = useState('All Stones');
  const [searchApplication, setSearchApplication] = useState('All Applications');
  const [searchHistory, setSearchHistory] = useState<AIMessage[]>([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  // Maps Mode State
  const [mapsPrompt, setMapsPrompt] = useState('');
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [locatingUser, setLocatingUser] = useState(false);
  const [locationStatus, setLocationStatus] = useState<string>('Bhilwara, Rajasthan (Default Center)');
  const [mapsHistory, setMapsHistory] = useState<AIMessage[]>([]);
  const [isMapsLoading, setIsMapsLoading] = useState(false);
  const [mapsError, setMapsError] = useState<string | null>(null);

  // Specifier Mode State
  const [projectArea, setProjectArea] = useState('Living Room & Foyer');
  const [stylePreference, setStylePreference] = useState('Contemporary Minimal');
  const [climateExposure, setClimateExposure] = useState('Indoor - Dry Condition');
  const [trafficLevel, setTrafficLevel] = useState('Residential Premium');
  const [specResults, setSpecResults] = useState<any | null>(null);
  const [isSpecGenerating, setIsSpecGenerating] = useState(false);

  // Initial welcome message for search
  useEffect(() => {
    if (searchHistory.length === 0) {
      setSearchHistory([
        {
          id: 'welcome-search',
          role: 'model',
          content: `Welcome to **TerraStone AI Stone Consultant**. I am grounded with **live Google Search** to provide up-to-date international natural stone intelligence, ASTM/EN durability benchmarks, finish matching, and global export insights. 

Ask me anything regarding marble, granite, sandstone, limestone, or request comparisons between Indian and European varieties for your architectural project.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
      ]);
    }

    if (mapsHistory.length === 0) {
      setMapsHistory([
        {
          id: 'welcome-maps',
          role: 'model',
          content: `Welcome to the **Quarry & Logistics Geographic Intelligence Hub**. Using **Google Maps Grounding**, I can locate natural stone quarries across Rajasthan and international basins, chart freight corridors from our Bhilwara works to export ports (Mundra & JNPT), or discover stone landmarks and regional masonry hubs near your project location.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
      ]);
    }
  }, []);

  // Request user coordinates
  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus('Geolocation is not supported by your browser.');
      return;
    }
    setLocatingUser(true);
    setLocationStatus('Detecting your GPS coordinates...');

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
        setLocationStatus(`Detected (${pos.coords.latitude.toFixed(3)}°N, ${pos.coords.longitude.toFixed(3)}°E)`);
        setLocatingUser(false);
      },
      (err) => {
        console.warn('Geolocation error:', err);
        setLocationStatus('Using Bhilwara, Rajasthan works as geographic reference.');
        setLocatingUser(false);
      },
      { timeout: 8000 }
    );
  };

  // Set Preset Location
  const handleSetPresetLocation = (lat: number, lng: number, label: string) => {
    setUserLocation({ latitude: lat, longitude: lng });
    setLocationStatus(label);
  };

  // Submit Search Query
  const handleSearchSubmit = async (customPrompt?: string) => {
    const query = customPrompt || searchPrompt;
    if (!query.trim() || isSearchLoading) return;

    setSearchError(null);
    const userMsg: AIMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setSearchHistory((prev) => [...prev, userMsg]);
    setSearchPrompt('');
    setIsSearchLoading(true);

    try {
      const response = await fetch('/api/ai/search-consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: query,
          stoneCategory: searchCategory !== 'All Stones' ? searchCategory : undefined,
          application: searchApplication !== 'All Applications' ? searchApplication : undefined,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Server returned an error.');
      }

      const modelMsg: AIMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: data.text,
        searchSources: data.searchSources,
        searchQueries: data.searchQueries,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setSearchHistory((prev) => [...prev, modelMsg]);
    } catch (err: any) {
      console.error('Search error:', err);
      setSearchError(err.message || 'Unable to connect to AI consultant. Please verify your GEMINI_API_KEY.');
    } finally {
      setIsSearchLoading(false);
    }
  };

  // Submit Maps Query
  const handleMapsSubmit = async (customPrompt?: string) => {
    const query = customPrompt || mapsPrompt;
    if (!query.trim() || isMapsLoading) return;

    setMapsError(null);
    const userMsg: AIMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMapsHistory((prev) => [...prev, userMsg]);
    setMapsPrompt('');
    setIsMapsLoading(true);

    try {
      const response = await fetch('/api/ai/maps-locate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: query,
          latitude: userLocation?.latitude,
          longitude: userLocation?.longitude,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Server returned an error.');
      }

      const modelMsg: AIMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: data.text,
        mapSources: data.mapSources,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMapsHistory((prev) => [...prev, modelMsg]);
    } catch (err: any) {
      console.error('Maps error:', err);
      setMapsError(err.message || 'Unable to connect to geographic locator. Please verify your GEMINI_API_KEY.');
    } finally {
      setIsMapsLoading(false);
    }
  };

  // Generate Specifier Recommendations
  const handleGenerateSpec = async () => {
    setIsSpecGenerating(true);
    const specPrompt = `Please generate an architectural stone specification recommendation for:
- Application Area: ${projectArea}
- Architectural Style: ${stylePreference}
- Climate & Exposure: ${climateExposure}
- Expected Foot Traffic: ${trafficLevel}

Recommend 2-3 specific stones from TerraStone's Rajasthan manufacturing catalog (e.g. Makrana White, Rajasthan Black Granite, Dholpur Beige Sandstone, Kota Stone, Rainforest Brown, Jaisalmer Yellow), recommended calibrated thicknesses (18mm, 20mm, 30mm), best surface finishes for slip safety (Flamed, Honed, Leathered, Polished), sealing protocol, and ASTM standard compliance.`;

    try {
      const response = await fetch('/api/ai/search-consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: specPrompt,
          stoneCategory: 'Natural Stone Specification',
          application: projectArea,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate specification.');
      }

      setSpecResults({
        area: projectArea,
        style: stylePreference,
        climate: climateExposure,
        traffic: trafficLevel,
        text: data.text,
        sources: data.searchSources,
      });
    } catch (err: any) {
      console.error('Spec generator error:', err);
      alert('Error generating specification: ' + (err.message || 'Connection error'));
    } finally {
      setIsSpecGenerating(false);
    }
  };

  // Quick prompt suggestions
  const searchPrompts = [
    "Compare Makrana White Marble vs Italian Carrara for luxury bathroom flooring & water absorption",
    "Latest ASTM C97 absorption and C170 flexural strength standards for exterior granite cladding",
    "Which natural stones are best suited for high-heat desert exterior facades with minimal thermal expansion?",
    "Rainforest Brown marble maintenance and sealing protocol in high-humidity luxury showers",
    "Current 2026 global architectural trends for bookmatched quartzite and flamed granite pavers"
  ];

  const mapsPrompts = [
    "Where are the key granite and sandstone quarry belts located near Bhilwara, Jodhpur, and Kota in Rajasthan?",
    "Map the container freight logistics route from TerraStone works in Bhilwara, Rajasthan to Mundra Port, Gujarat",
    "Locate the historic Makrana marble mining reserve and Kishangarh stone trading center in Rajasthan",
    "Find prominent natural stone processing clusters, port logistics terminals, and masonry supply hubs near my location",
    "What is the transit distance from Carrara, Italy quarry ports to Nhava Sheva (JNPT) for imported marble blocks?"
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-14 text-[#1C1A17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1C1A17] text-[#FAF7F2] text-xs font-semibold uppercase tracking-widest border border-[#3E382E]">
            <Sparkles className="w-3.5 h-3.5 text-[#C2A379]" />
            <span>AI Architectural Stone Consultant</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1A17]">
            Natural Stone Intelligence & Quarry Logistics
          </h1>

          <p className="text-base text-[#5C5549] max-w-2xl mx-auto leading-relaxed">
            Harnessing <strong>Gemini 3.5 Flash</strong> with real-time <strong>Google Search Grounding</strong> for live global specifications and <strong>Google Maps Grounding</strong> for quarry geography and export route tracking.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs">
            <span className="px-3 py-1 bg-white border border-[#E0D8CB] rounded-full text-[#4A4338] flex items-center gap-1.5 shadow-sm">
              <Globe className="w-3.5 h-3.5 text-[#9A7A4E]" /> Live Google Search Grounded
            </span>
            <span className="px-3 py-1 bg-white border border-[#E0D8CB] rounded-full text-[#4A4338] flex items-center gap-1.5 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#9A7A4E]" /> Live Google Maps Grounded
            </span>
            <span className="px-3 py-1 bg-white border border-[#E0D8CB] rounded-full text-[#4A4338] flex items-center gap-1.5 shadow-sm">
              <Compass className="w-3.5 h-3.5 text-[#9A7A4E]" /> Bhilwara, Rajasthan Works Verified
            </span>
          </div>
        </div>

        {/* Intelligence Mode Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 bg-[#EAE3D5] rounded-lg border border-[#DCD3C3] max-w-2xl w-full">
            <button
              onClick={() => setActiveTab('search')}
              id="ai-tab-search"
              className={`flex-1 py-2.5 px-4 rounded-md text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'search'
                  ? 'bg-[#1C1A17] text-[#FAF7F2] shadow-sm'
                  : 'text-[#5C5549] hover:text-[#1C1A17]'
              }`}
            >
              <Search className="w-4 h-4 text-[#C2A379]" />
              <span>Search Advisor</span>
              <span className="hidden sm:inline text-[10px] opacity-75 font-normal">(ASTM & Trends)</span>
            </button>

            <button
              onClick={() => setActiveTab('maps')}
              id="ai-tab-maps"
              className={`flex-1 py-2.5 px-4 rounded-md text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'maps'
                  ? 'bg-[#1C1A17] text-[#FAF7F2] shadow-sm'
                  : 'text-[#5C5549] hover:text-[#1C1A17]'
              }`}
            >
              <MapPin className="w-4 h-4 text-[#C2A379]" />
              <span>Quarry & Maps Locator</span>
              <span className="hidden sm:inline text-[10px] opacity-75 font-normal">(Geography)</span>
            </button>

            <button
              onClick={() => setActiveTab('specifier')}
              id="ai-tab-specifier"
              className={`flex-1 py-2.5 px-4 rounded-md text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'specifier'
                  ? 'bg-[#1C1A17] text-[#FAF7F2] shadow-sm'
                  : 'text-[#5C5549] hover:text-[#1C1A17]'
              }`}
            >
              <Layers className="w-4 h-4 text-[#C2A379]" />
              <span>BOQ Specifier</span>
              <span className="hidden sm:inline text-[10px] opacity-75 font-normal">(1-Click Quote)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Search-Grounded Architectural Stone Advisor */}
        {activeTab === 'search' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            {/* Left Column: Context Controls & Prompt Prompters */}
            <div className="lg:col-span-1 space-y-5">
              <div className="p-5 bg-white rounded-lg border border-[#E5DFD4] shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9A7A4E]">
                  <Globe className="w-4 h-4" />
                  <span>Google Search Grounding Engine</span>
                </div>
                <p className="text-xs text-[#666055] leading-relaxed">
                  Queries are processed by <strong>gemini-3.5-flash</strong> with real-time web retrieval to guarantee current technical benchmarks, ASTM testing metrics, and international trade facts.
                </p>

                {/* Filter helper dropdowns */}
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-[11px] font-bold text-[#4A4338] uppercase tracking-wider mb-1">
                      Focus Stone Category
                    </label>
                    <select
                      value={searchCategory}
                      onChange={(e) => setSearchCategory(e.target.value)}
                      className="w-full text-xs p-2.5 bg-[#FAF7F2] border border-[#DDD5C7] rounded focus:outline-none focus:border-[#9A7A4E]"
                    >
                      <option value="All Stones">All Natural Stones</option>
                      <option value="Indian Marble">Indian Marble (Makrana, Rainforest, etc.)</option>
                      <option value="Italian Marble">Italian Marble (Carrara, Statuario, etc.)</option>
                      <option value="Granite">Granite (Rajasthan Black, Tan Brown, etc.)</option>
                      <option value="Sandstone">Sandstone (Dholpur, Teakwood, Rainbow)</option>
                      <option value="Limestone & Kota">Limestone (Kota Stone, Jaisalmer)</option>
                      <option value="Quartzite">Quartzite & Onyx</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#4A4338] uppercase tracking-wider mb-1">
                      Target Architectural Application
                    </label>
                    <select
                      value={searchApplication}
                      onChange={(e) => setSearchApplication(e.target.value)}
                      className="w-full text-xs p-2.5 bg-[#FAF7F2] border border-[#DDD5C7] rounded focus:outline-none focus:border-[#9A7A4E]"
                    >
                      <option value="All Applications">All Applications</option>
                      <option value="Luxury Interior Flooring">Luxury Interior Flooring</option>
                      <option value="Bathroom & Wet Steam Shower">Bathroom & Wet Steam Shower</option>
                      <option value="Exterior Facade & Wall Cladding">Exterior Facade & Wall Cladding</option>
                      <option value="Outdoor Pool Deck & Pavers">Outdoor Pool Deck & Pavers</option>
                      <option value="Kitchen Island & Slabs">Kitchen Island & Heavy Slabs</option>
                      <option value="Monumental & Heritage Works">Monumental & Heritage Works</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Sample Prompts */}
              <div className="p-5 bg-white rounded-lg border border-[#E5DFD4] shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1C1A17]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C2A379]" />
                  <span>Curated Stone Inquiries</span>
                </div>
                <p className="text-xs text-[#7A7367]">
                  Click any query below to run a search-grounded consultation:
                </p>

                <div className="space-y-2">
                  {searchPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSearchSubmit(prompt)}
                      disabled={isSearchLoading}
                      className="w-full text-left p-2.5 rounded bg-[#FAF7F2] hover:bg-[#F0EAE0] border border-[#E2DBD0] text-xs text-[#3A352D] transition-colors leading-relaxed group"
                    >
                      <span className="font-medium group-hover:text-[#9A7A4E] transition-colors">{prompt}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Chat History & Input */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-lg border border-[#E5DFD4] shadow-sm min-h-[500px] flex flex-col justify-between overflow-hidden">
                
                {/* Chat Stream Header */}
                <div className="p-4 bg-[#F5EFE6] border-b border-[#E0D8CB] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1C1A17]">
                      Live Consultation Session
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setSearchHistory([
                        {
                          id: 'welcome-search',
                          role: 'model',
                          content: 'Conversation refreshed. Ask any question about natural stone specifications, finishes, or international trade.',
                          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        }
                      ]);
                      setSearchError(null);
                    }}
                    className="text-xs text-[#7A7367] hover:text-[#1C1A17] flex items-center gap-1 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Clear Chat</span>
                  </button>
                </div>

                {/* Messages Container */}
                <div className="p-4 sm:p-6 space-y-6 flex-grow overflow-y-auto max-h-[600px]">
                  {searchHistory.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div className="text-[11px] text-[#8C8476] mb-1 font-mono">
                        {msg.role === 'user' ? 'Architect / Client' : 'TerraStone AI Advisor'} • {msg.timestamp}
                      </div>

                      <div
                        className={`p-4 sm:p-5 rounded-lg max-w-[92%] leading-relaxed text-sm ${
                          msg.role === 'user'
                            ? 'bg-[#1C1A17] text-[#FAF7F2] rounded-tr-none'
                            : 'bg-[#FBF9F5] text-[#292521] border border-[#E2DBD0] rounded-tl-none shadow-sm'
                        }`}
                      >
                        <div className="prose prose-sm max-w-none text-[#292521] prose-headings:font-serif prose-headings:text-[#1C1A17] prose-headings:font-bold prose-headings:my-2 prose-p:my-2 prose-li:my-1 prose-strong:text-[#1C1A17]">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>

                        {/* Search Grounding Sources Accordion/Cards */}
                        {msg.searchSources && msg.searchSources.length > 0 && (
                          <div className="mt-4 pt-3 border-t border-[#E0D8CB] space-y-2">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-[#9A7A4E] uppercase tracking-wider">
                              <Globe className="w-3.5 h-3.5" />
                              <span>Live Google Search Sources ({msg.searchSources.length})</span>
                            </div>
                            <div className="flex flex-wrap gap-2 pt-1">
                              {msg.searchSources.map((source, sIdx) => (
                                <a
                                  key={sIdx}
                                  href={source.uri}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-[#F2ECE1] border border-[#D5CDBD] rounded text-xs text-[#3E382E] transition-colors shadow-xs"
                                >
                                  <ExternalLink className="w-3 h-3 text-[#9A7A4E]" />
                                  <span className="truncate max-w-[240px] font-medium">{source.title || source.uri}</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Search Queries Used */}
                        {msg.searchQueries && msg.searchQueries.length > 0 && (
                          <div className="mt-2 text-[11px] text-[#7A7367]">
                            <span className="font-semibold">Web Queries: </span>
                            {msg.searchQueries.join(', ')}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Loading State */}
                  {isSearchLoading && (
                    <div className="flex flex-col items-start">
                      <div className="text-[11px] text-[#8C8476] mb-1 font-mono">
                        TerraStone AI Advisor is researching via Google Search...
                      </div>
                      <div className="p-4 rounded-lg bg-[#FBF9F5] border border-[#E2DBD0] text-sm text-[#7A7367] flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-[#C2A379] border-t-transparent rounded-full animate-spin" />
                        <span>Consulting live stone registries & architectural standards...</span>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {searchError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <strong>Search Grounding Notice:</strong> {searchError}
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Field Form */}
                <div className="p-4 bg-[#F9F6F0] border-t border-[#E5DFD4]">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSearchSubmit();
                    }}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      value={searchPrompt}
                      onChange={(e) => setSearchPrompt(e.target.value)}
                      placeholder="Ask about stone varieties, ASTM standards, or finishes (e.g. Carrara vs Makrana)..."
                      disabled={isSearchLoading}
                      className="flex-grow p-3 text-sm bg-white border border-[#DDD5C7] rounded focus:outline-none focus:border-[#9A7A4E] shadow-inner text-[#1C1A17]"
                    />
                    <button
                      type="submit"
                      disabled={isSearchLoading || !searchPrompt.trim()}
                      className="px-6 py-3 bg-[#1C1A17] hover:bg-[#2F2A23] disabled:opacity-50 text-[#FAF7F2] text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-2 shrink-0"
                    >
                      <Send className="w-3.5 h-3.5 text-[#C2A379]" />
                      <span>Ask AI</span>
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Maps-Grounded Quarry & Logistics Locator */}
        {activeTab === 'maps' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            {/* Left Column: Geographic Controls */}
            <div className="lg:col-span-1 space-y-5">
              <div className="p-5 bg-white rounded-lg border border-[#E5DFD4] shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9A7A4E]">
                  <MapPin className="w-4 h-4" />
                  <span>Google Maps Grounding Engine</span>
                </div>
                <p className="text-xs text-[#666055] leading-relaxed">
                  Queries use <strong>gemini-3.5-flash with googleMaps tool</strong> to locate natural stone quarries, processing zones, port transit corridors, and architectural sites with verifiable Google Maps links.
                </p>

                {/* Location Detection */}
                <div className="p-3 bg-[#FAF7F2] rounded border border-[#E0D8CB] space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1C1A17]">
                    <span>Geographic Origin Point:</span>
                    <button
                      onClick={handleDetectLocation}
                      disabled={locatingUser}
                      className="text-[#9A7A4E] hover:underline flex items-center gap-1 font-semibold text-[11px]"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>{locatingUser ? 'Detecting...' : 'Use My GPS'}</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-[#666055] font-mono break-words">
                    {locationStatus}
                  </p>
                </div>

                {/* Preset Geographic Regions */}
                <div className="space-y-2 pt-1">
                  <label className="block text-[11px] font-bold text-[#4A4338] uppercase tracking-wider">
                    Quick Geographic Hubs
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <button
                      onClick={() => handleSetPresetLocation(25.3407, 74.6313, 'Bhilwara, Rajasthan Works (25.34°N, 74.63°E)')}
                      className="p-2 bg-[#FAF7F2] hover:bg-[#F0EAE0] border border-[#E0D8CB] rounded text-left font-medium text-[#292521] transition-colors"
                    >
                      📍 Bhilwara Works
                    </button>
                    <button
                      onClick={() => handleSetPresetLocation(26.5786, 74.8624, 'Kishangarh Marble Market (26.57°N, 74.86°E)')}
                      className="p-2 bg-[#FAF7F2] hover:bg-[#F0EAE0] border border-[#E0D8CB] rounded text-left font-medium text-[#292521] transition-colors"
                    >
                      📍 Kishangarh Hub
                    </button>
                    <button
                      onClick={() => handleSetPresetLocation(27.0373, 74.7297, 'Makrana Marble Quarries (27.03°N, 74.72°E)')}
                      className="p-2 bg-[#FAF7F2] hover:bg-[#F0EAE0] border border-[#E0D8CB] rounded text-left font-medium text-[#292521] transition-colors"
                    >
                      📍 Makrana Quarries
                    </button>
                    <button
                      onClick={() => handleSetPresetLocation(22.8394, 69.7042, 'Mundra Port Logistics (22.83°N, 69.70°E)')}
                      className="p-2 bg-[#FAF7F2] hover:bg-[#F0EAE0] border border-[#E0D8CB] rounded text-left font-medium text-[#292521] transition-colors"
                    >
                      🚢 Mundra Export Port
                    </button>
                  </div>
                </div>
              </div>

              {/* Sample Geographic Prompts */}
              <div className="p-5 bg-white rounded-lg border border-[#E5DFD4] shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1C1A17]">
                  <Compass className="w-3.5 h-3.5 text-[#C2A379]" />
                  <span>Geographic Inquiries</span>
                </div>
                <p className="text-xs text-[#7A7367]">
                  Click below to locate quarries and export pathways via Google Maps:
                </p>

                <div className="space-y-2">
                  {mapsPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleMapsSubmit(prompt)}
                      disabled={isMapsLoading}
                      className="w-full text-left p-2.5 rounded bg-[#FAF7F2] hover:bg-[#F0EAE0] border border-[#E2DBD0] text-xs text-[#3A352D] transition-colors leading-relaxed group"
                    >
                      <span className="font-medium group-hover:text-[#9A7A4E] transition-colors">{prompt}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Maps Stream & Google Maps Links Display */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-lg border border-[#E5DFD4] shadow-sm min-h-[500px] flex flex-col justify-between overflow-hidden">
                
                {/* Header */}
                <div className="p-4 bg-[#F5EFE6] border-b border-[#E0D8CB] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#9A7A4E]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1C1A17]">
                      Google Maps Grounding Session
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setMapsHistory([
                        {
                          id: 'welcome-maps',
                          role: 'model',
                          content: 'Geographic session refreshed. Enter any stone quarry, port, or regional masonry inquiry.',
                          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        }
                      ]);
                      setMapsError(null);
                    }}
                    className="text-xs text-[#7A7367] hover:text-[#1C1A17] flex items-center gap-1 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Clear Maps</span>
                  </button>
                </div>

                {/* Messages Container */}
                <div className="p-4 sm:p-6 space-y-6 flex-grow overflow-y-auto max-h-[600px]">
                  {mapsHistory.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div className="text-[11px] text-[#8C8476] mb-1 font-mono">
                        {msg.role === 'user' ? 'Project Director' : 'TerraStone Geographic Advisor'} • {msg.timestamp}
                      </div>

                      <div
                        className={`p-4 sm:p-5 rounded-lg max-w-[92%] leading-relaxed text-sm ${
                          msg.role === 'user'
                            ? 'bg-[#1C1A17] text-[#FAF7F2] rounded-tr-none'
                            : 'bg-[#FBF9F5] text-[#292521] border border-[#E2DBD0] rounded-tl-none shadow-sm'
                        }`}
                      >
                        <div className="prose prose-sm max-w-none text-[#292521] prose-headings:font-serif prose-headings:text-[#1C1A17] prose-headings:font-bold prose-headings:my-2 prose-p:my-2 prose-li:my-1 prose-strong:text-[#1C1A17]">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>

                        {/* CRITICAL GOOGLE MAPS GROUNDING LINKS:
                            Mandatory requirement: ALWAYS extract and display all URLs from groundingChunks
                            including maps.uri and placeAnswerSources.reviewSnippets */}
                        {msg.mapSources && msg.mapSources.length > 0 && (
                          <div className="mt-5 pt-4 border-t border-[#E0D8CB] space-y-3">
                            <div className="flex items-center gap-2 text-xs font-bold text-[#9A7A4E] uppercase tracking-wider">
                              <MapPin className="w-3.5 h-3.5" />
                              <span>Verified Google Maps Locations & Corridors ({msg.mapSources.length})</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {msg.mapSources.map((place: MapGroundingSource, pIdx) => (
                                <div
                                  key={pIdx}
                                  className="p-3 bg-white rounded border border-[#DCD3C3] shadow-xs hover:border-[#9A7A4E] transition-all space-y-2"
                                >
                                  <div className="flex items-start justify-between gap-2">
                                    <h5 className="font-serif font-bold text-xs text-[#1C1A17] leading-snug">
                                      {place.title || 'Stone Entity Location'}
                                    </h5>
                                    {place.uri && (
                                      <a
                                        href={place.uri}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 p-1 bg-[#FAF7F2] hover:bg-[#EAE3D5] rounded text-[#9A7A4E] transition-colors"
                                        title="Open in Google Maps"
                                      >
                                        <ExternalLink className="w-3.5 h-3.5" />
                                      </a>
                                    )}
                                  </div>

                                  {place.uri ? (
                                    <a
                                      href={place.uri}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#9A7A4E] hover:underline"
                                    >
                                      <span>View on Google Maps</span>
                                      <ArrowRight className="w-3 h-3" />
                                    </a>
                                  ) : (
                                    <span className="text-[11px] text-[#7A7367]">Location verified in Grounding Index</span>
                                  )}

                                  {/* Place Review Snippets if present */}
                                  {place.placeAnswerSources?.reviewSnippets && place.placeAnswerSources.reviewSnippets.length > 0 && (
                                    <div className="pt-2 border-t border-[#F0EAE0] space-y-1">
                                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#7A7367]">
                                        Public Review & Notes:
                                      </div>
                                      {place.placeAnswerSources.reviewSnippets.map((rev, rIdx) => (
                                        <p key={rIdx} className="text-[11px] text-[#554F44] italic bg-[#FAF7F2] p-2 rounded">
                                          "{rev.reviewText}"
                                        </p>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                      </div>
                    </div>
                  ))}

                  {/* Loading Indicator */}
                  {isMapsLoading && (
                    <div className="flex flex-col items-start">
                      <div className="text-[11px] text-[#8C8476] mb-1 font-mono">
                        TerraStone Geographic Advisor is querying Google Maps...
                      </div>
                      <div className="p-4 rounded-lg bg-[#FBF9F5] border border-[#E2DBD0] text-sm text-[#7A7367] flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-[#C2A379] border-t-transparent rounded-full animate-spin" />
                        <span>Extracting quarry coordinates, logistics routes & place links...</span>
                      </div>
                    </div>
                  )}

                  {/* Error Notification */}
                  {mapsError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <strong>Maps Grounding Notice:</strong> {mapsError}
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Field Form */}
                <div className="p-4 bg-[#F9F6F0] border-t border-[#E5DFD4]">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleMapsSubmit();
                    }}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      value={mapsPrompt}
                      onChange={(e) => setMapsPrompt(e.target.value)}
                      placeholder="Ask about Rajasthan quarries, freight corridors, or Mundra Port logistics..."
                      disabled={isMapsLoading}
                      className="flex-grow p-3 text-sm bg-white border border-[#DDD5C7] rounded focus:outline-none focus:border-[#9A7A4E] shadow-inner text-[#1C1A17]"
                    />
                    <button
                      type="submit"
                      disabled={isMapsLoading || !mapsPrompt.trim()}
                      className="px-6 py-3 bg-[#1C1A17] hover:bg-[#2F2A23] disabled:opacity-50 text-[#FAF7F2] text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-2 shrink-0"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#C2A379]" />
                      <span>Locate</span>
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Fast BOQ Stone Specifier & Recommender */}
        {activeTab === 'specifier' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            {/* Parameters Selection */}
            <div className="lg:col-span-1 p-6 bg-white rounded-lg border border-[#E5DFD4] shadow-sm space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9A7A4E]">
                <Layers className="w-4 h-4" />
                <span>Project Architectural Parameters</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C1A17] uppercase tracking-wider mb-1.5">
                  1. Application Zone
                </label>
                <select
                  value={projectArea}
                  onChange={(e) => setProjectArea(e.target.value)}
                  className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD5C7] rounded focus:outline-none focus:border-[#9A7A4E]"
                >
                  <option value="Living Room & Grand Foyer">Living Room & Grand Foyer</option>
                  <option value="Master Bathroom & Steam Shower">Master Bathroom & Steam Shower</option>
                  <option value="Exterior Facade & Vertical Cladding">Exterior Facade & Vertical Cladding</option>
                  <option value="Outdoor Swimming Pool & Sun Deck">Outdoor Swimming Pool & Sun Deck</option>
                  <option value="Kitchen Island & Slabs">Kitchen Island & Slabs</option>
                  <option value="Commercial Lobby & Corporate Atrium">Commercial Lobby & Corporate Atrium</option>
                  <option value="Monumental Steps & Landscape Courtyard">Monumental Steps & Landscape Courtyard</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C1A17] uppercase tracking-wider mb-1.5">
                  2. Aesthetic Direction
                </label>
                <select
                  value={stylePreference}
                  onChange={(e) => setStylePreference(e.target.value)}
                  className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD5C7] rounded focus:outline-none focus:border-[#9A7A4E]"
                >
                  <option value="Contemporary Minimal Warm Beige">Contemporary Minimal Warm Beige</option>
                  <option value="Classical Royal White & Gold">Classical Royal White & Gold</option>
                  <option value="Dramatic High-Veined Monolith (Bookmatched)">Dramatic High-Veined Monolith (Bookmatched)</option>
                  <option value="Rustic Natural Split Sandstone">Rustic Natural Split Sandstone</option>
                  <option value="Deep Architectural Black Granite">Deep Architectural Black Granite</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C1A17] uppercase tracking-wider mb-1.5">
                  3. Climate & Environmental Exposure
                </label>
                <select
                  value={climateExposure}
                  onChange={(e) => setClimateExposure(e.target.value)}
                  className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD5C7] rounded focus:outline-none focus:border-[#9A7A4E]"
                >
                  <option value="Indoor - Dry Condition">Indoor - Dry Condition</option>
                  <option value="Wet Bath / Steam Room / High Humidity">Wet Bath / Steam Room / High Humidity</option>
                  <option value="Exterior Desert Heat & Direct High UV">Exterior Desert Heat & Direct High UV</option>
                  <option value="Exterior Coastal Salt Air Exposure">Exterior Coastal Salt Air Exposure</option>
                  <option value="Cold Climate - Severe Freeze-Thaw Cycles">Cold Climate - Severe Freeze-Thaw Cycles</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C1A17] uppercase tracking-wider mb-1.5">
                  4. Traffic & Wear Load
                </label>
                <select
                  value={trafficLevel}
                  onChange={(e) => setTrafficLevel(e.target.value)}
                  className="w-full text-xs p-3 bg-[#FAF7F2] border border-[#DDD5C7] rounded focus:outline-none focus:border-[#9A7A4E]"
                >
                  <option value="Residential Premium">Residential Premium</option>
                  <option value="High-Traffic Boutique Hotel / Restaurant">High-Traffic Boutique Hotel / Restaurant</option>
                  <option value="Heavy Commercial Public Terminal / Mall">Heavy Commercial Public Terminal / Mall</option>
                </select>
              </div>

              <button
                onClick={handleGenerateSpec}
                disabled={isSpecGenerating}
                className="w-full py-3.5 bg-[#1C1A17] hover:bg-[#2F2A23] disabled:opacity-50 text-[#FAF7F2] text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
              >
                {isSpecGenerating ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-[#C2A379] border-t-transparent rounded-full animate-spin" />
                    <span>Analyzing Standards...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#C2A379]" />
                    <span>Generate BOQ Stone Specification</span>
                  </>
                )}
              </button>
            </div>

            {/* Specification Result Output */}
            <div className="lg:col-span-2 space-y-4">
              {specResults ? (
                <div className="p-6 bg-white rounded-lg border border-[#E5DFD4] shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E5DFD4]">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#9A7A4E]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>AI Recommended Specification Dossier</span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-[#1C1A17] mt-0.5">
                        {specResults.area}
                      </h3>
                      <p className="text-xs text-[#7A7367]">
                        {specResults.style} • {specResults.climate} • {specResults.traffic}
                      </p>
                    </div>

                    <button
                      onClick={() => onOpenQuoteModal(`BOQ Spec: ${specResults.area} (${specResults.style})`)}
                      className="px-5 py-2.5 bg-[#9A7A4E] hover:bg-[#866940] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 shrink-0 shadow-sm"
                    >
                      <Quote className="w-3.5 h-3.5" />
                      <span>Request Quote For This Spec</span>
                    </button>
                  </div>

                  {/* Specification Narrative */}
                  <div className="prose prose-sm max-w-none text-[#292521] prose-headings:font-serif prose-headings:text-[#1C1A17] prose-headings:font-bold prose-headings:my-2 prose-p:my-2 prose-li:my-1 prose-strong:text-[#1C1A17]">
                    <ReactMarkdown>{specResults.text}</ReactMarkdown>
                  </div>

                  {/* Sources if present */}
                  {specResults.sources && specResults.sources.length > 0 && (
                    <div className="pt-4 border-t border-[#E5DFD4] space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#9A7A4E] flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5" />
                        <span>Referenced Web Stone Standards</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {specResults.sources.map((s: WebGroundingSource, i: number) => (
                          <a
                            key={i}
                            href={s.uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FAF7F2] border border-[#E0D8CB] rounded text-xs text-[#4A4338] hover:bg-[#EAE3D5] transition-colors"
                          >
                            <ExternalLink className="w-3 h-3 text-[#9A7A4E]" />
                            <span className="truncate max-w-[200px]">{s.title || s.uri}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TerraStone Factory Direct Stamp */}
                  <div className="p-4 bg-[#FAF7F2] rounded border border-[#E0D8CB] flex items-center justify-between text-xs text-[#5C5549]">
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#9A7A4E]" />
                      <span>
                        Manufactured & Calibrated at <strong>TerraStone International Works, Bhilwara, Rajasthan</strong>
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#8C8476]">ISO 9001:2015</span>
                  </div>
                </div>
              ) : (
                <div className="p-10 bg-white rounded-lg border border-[#E5DFD4] shadow-sm text-center space-y-4">
                  <Layers className="w-12 h-12 text-[#C2A379] mx-auto opacity-75" />
                  <h3 className="font-serif text-xl font-bold text-[#1C1A17]">
                    Select Your Parameters & Generate Spec
                  </h3>
                  <p className="text-xs text-[#7A7367] max-w-md mx-auto leading-relaxed">
                    Choose your project zone, style preference, and climate condition on the left. The AI consultant will cross-reference ASTM standards and TerraStone’s production lines to return a tailored specification ready for direct quotation.
                  </p>
                  <button
                    onClick={handleGenerateSpec}
                    className="px-6 py-2.5 bg-[#1C1A17] hover:bg-[#2F2A23] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
                  >
                    Run Sample Living Room Specification
                  </button>
                </div>
              )}

              {/* Matching Slabs from TerraStone Catalog */}
              <div className="p-5 bg-white rounded-lg border border-[#E5DFD4] shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-sm font-bold text-[#1C1A17] uppercase tracking-wider">
                    Popular Calibrated Slabs Ready at Bhilwara Works
                  </h4>
                  <span className="text-xs text-[#9A7A4E] font-medium">Export Ready</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {STONE_PRODUCTS.slice(0, 3).map((stone) => (
                    <div
                      key={stone.id}
                      className="p-3 bg-[#FAF7F2] rounded border border-[#E2DBD0] hover:border-[#9A7A4E] transition-all space-y-2"
                    >
                      <div className="aspect-[4/3] rounded overflow-hidden">
                        <img
                          src={stone.imageUrl}
                          alt={stone.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="text-xs font-bold text-[#1C1A17] truncate">{stone.name}</div>
                      <div className="text-[10px] text-[#7A7367]">{stone.category} • {stone.origin}</div>
                      <button
                        onClick={() => onOpenQuoteModal(stone.name)}
                        className="w-full py-1 text-[11px] font-bold text-[#9A7A4E] hover:text-[#7A5F3A] border border-[#D5CDBD] hover:bg-white rounded transition-colors"
                      >
                        Inquire Price
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
