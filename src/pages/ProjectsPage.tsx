import React, { useState } from 'react';
import { PageType, ProjectItem } from '../types';
import { PROJECTS, COMPANY_INFO } from '../data/stoneData';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Layers, 
  ArrowRight, 
  Compass, 
  Hotel, 
  Home, 
  Landmark 
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: (stone?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const [filterType, setFilterType] = useState<string>('All');

  const categories = ['All', 'Hotels & Resorts', 'Luxury Homes', 'Commercial'];

  const filteredProjects = filterType === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.clientType === filterType);

  return (
    <div className="bg-[#FBF9F5] text-[#292521] min-h-screen">
      
      {/* Header */}
      <section className="bg-[#141210] text-[#FAF7F2] py-20 border-b border-[#28241D] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24201A] border border-[#C2A379]/40 text-xs font-semibold uppercase tracking-[0.2em] text-[#C2A379]">
            <span>650+ Projects Across 45+ Countries</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAF7F2]">
            Landmark Projects & Case Studies
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#C8C0B2] font-light leading-relaxed">
            Discover how TerraStone's precision-cut marbles, granites, and sandstones bring timeless majesty to five-star resorts, private villas, and corporate towers.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-[#E5DFD4] sticky top-20 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterType(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-colors ${
                  filterType === cat
                    ? 'bg-[#1C1A17] text-[#FAF7F2] font-semibold'
                    : 'bg-[#FAF7F2] text-[#615A50] hover:bg-[#EFE8DD] border border-[#E2DBD0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#9A7A4E] hover:bg-[#85673E] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
          >
            <span>Inquire for Your Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-white rounded-sm border border-[#E2DBD0] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE6DC]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#161412]/80 backdrop-blur-sm px-2.5 py-1 text-[11px] font-semibold text-[#C2A379] rounded uppercase tracking-wider border border-[#C2A379]/30">
                    {project.clientType}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2.5 py-1 text-[11px] font-mono text-white rounded">
                    Area: {project.areaCovered}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#8C8476]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#9A7A4E]" />
                      <span>{project.location}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#9A7A4E]" />
                      <span>Completed {project.completionYear}</span>
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl font-bold text-[#1C1A17]">
                    {project.title}
                  </h2>

                  <p className="text-xs text-[#524B42] leading-relaxed">
                    {project.description}
                  </p>

                  <div className="p-3 bg-[#FAF7F2] rounded-sm border border-[#EBE3D7] text-xs space-y-1">
                    <div className="text-[#1C1A17] font-semibold">Scope of Supply:</div>
                    <div className="text-[#615A50]">{project.scope}</div>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase font-bold text-[#7A7367] tracking-wider mb-1.5">
                      Stones Supplied by TerraStone:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stonesUsed.map((stone) => (
                        <span
                          key={stone}
                          className="px-2.5 py-0.5 bg-[#FAF7F2] border border-[#E0D8CB] text-xs font-medium text-[#1C1A17] rounded"
                        >
                          {stone}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 sm:p-8 pt-0 border-t border-[#F2ECE3] flex items-center justify-between">
                <span className="text-xs text-[#8C8476]">Factory Sourced & Fabricated</span>
                <button
                  onClick={() => onOpenQuoteModal(project.stonesUsed[0])}
                  className="px-4 py-2 bg-[#1C1A17] hover:bg-[#2C2720] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1.5"
                >
                  <span>Request Similar Stone</span>
                  <ArrowRight className="w-3 h-3 text-[#C2A379]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Supply Capabilities */}
      <section className="py-16 bg-[#161412] text-[#FAF7F2] border-t border-[#2B2720]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C2A379]">
            Global Project Execution
          </span>
          <h3 className="font-serif text-3xl font-bold text-[#FBF9F5]">
            Seamless Export Logistics For International Developers
          </h3>
          <p className="text-sm text-[#CDC5B8] leading-relaxed">
            We provide comprehensive Bill of Lading, Certificate of Origin, ISPM-15 crate fumigation, and pre-shipment dry-lay visual catalogs for architects in the Middle East, Europe, UK, and North America.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-8 py-3.5 bg-[#C2A379] hover:bg-[#D4B68D] text-[#12100E] text-xs font-bold uppercase tracking-widest rounded-sm transition-all"
            >
              Start Project Discussion
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
