import { StoneProduct, ApplicationItem, ProjectItem, GalleryItem } from '../types';

export const COMPANY_INFO = {
  name: "TerraStone International",
  tagline: "Natural Stone. Timeless Beauty.",
  industry: "Natural Stone & Marble",
  established: 2012,
  businessType: "Manufacturer, Supplier & Exporter",
  headOffice: "Bhilwara, Rajasthan, India – 311001",
  website: "www.terrastoneinternational.com",
  email: "info@terrastoneinternational.com",
  phone: "+91 88907 15466",
  whatsapp: "+918890715466",
  exportPorts: "Mundra Port & Nhava Sheva (JNPT), India",
  stats: [
    { label: "Years of Craftsmanship", value: "14+" },
    { label: "Export Destinations", value: "45+ Countries" },
    { label: "Premium Stone Varieties", value: "120+" },
    { label: "Landmark Projects", value: "650+" },
  ]
};

export const WHY_CHOOSE_US = [
  {
    title: "Premium Quality Stone",
    description: "Direct-quarry sourcing with zero structural micro-fissures and hand-selected uniform veining blocks.",
    icon: "Gem"
  },
  {
    title: "Wide Range of Designs",
    description: "Over 120+ natural stones spanning rare Italian marbles, royal Indian granites, limestones, and quartzite.",
    icon: "LayoutGrid"
  },
  {
    title: "Custom Sizes & Finishes",
    description: "Multi-wire Italian gangsaw cutting, customized calibrated thicknesses, bookmatching, and 8+ artisanal surface finishes.",
    icon: "Sliders"
  },
  {
    title: "Competitive Pricing",
    description: "Mine-to-port integrated supply chain that eliminates middlemen, passing factory-direct wholesale savings to you.",
    icon: "Coins"
  },
  {
    title: "Quality Inspection",
    description: "Rigorous 3-stage dry-lay layout inspection, glossometer sheen verification, and ultrasonic density tests.",
    icon: "CheckCircle2"
  },
  {
    title: "Safe Packaging",
    description: "ISPM-15 fumigated, heavy-duty sea-worthy wooden crates cushioned with thermo-foam sheeting and reinforced steel strapping.",
    icon: "ShieldCheck"
  },
  {
    title: "On-Time Delivery",
    description: "Dedicated export logistics wing managing seamless customs clearance, container stuffing, and global maritime freight.",
    icon: "Truck"
  },
  {
    title: "Export-Ready Products",
    description: "Processed according to ASTM and European CE stone performance standards, fully certified for global specification.",
    icon: "Globe"
  }
];

export const STONE_PRODUCTS: StoneProduct[] = [
  // --- PRIMARY & PRIORITY COLLECTION: RAJASTHAN SANDSTONES ---
  {
    id: "dholpur-beige-sandstone",
    name: "Dholpur Beige Royal Sandstone",
    category: "Sandstone",
    origin: "Dholpur, Rajasthan, India",
    colorFamily: "Warm Honey Sand & Light Buff Cream",
    description: "The premier imperial stone that built Rajasthan's historic palaces and British colonial landmarks. Exceptionally workable for intricate architectural jali carvings, cornices, pool copings, and monumental exterior facades.",
    imageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    texturePattern: "Subtle Warm Stratification & Micro-Grain",
    recommendedFinishes: ["Honed", "Sandblasted", "Split Face / Rockface", "Bush Hammered", "Brushed"],
    recommendedApplications: ["Exterior Walls", "Landscaping", "Monuments", "Wall Cladding Stone", "Hotels & Resorts"],
    standardThicknesses: ["20mm", "25mm", "30mm", "40mm", "50mm"],
    density: "2,380 kg/m³",
    waterAbsorption: "1.20%",
    compressiveStrength: "92 MPa",
    isFeatured: true,
    isPrimaryPriority: true,
    priorityRank: 1,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-rocky-cliff-with-sea-waves-41664-large.mp4",
    knowledge: {
      geologicalAge: "Upper Vindhyan Supergroup (~750 to 900 Million Years)",
      geologicalFormation: "Formed under quiet marine littoral conditions where pure fine-grained quartz sands were bonded with silica and natural calcitic cement, creating isotropic structural strength that resists flaking or splitting.",
      quarryLocation: "Bari & Sarmathura Quarry Belt, Dholpur District, Rajasthan",
      architecturalHeritage: "Famous heritage stone utilized in the Rashtrapati Bhavan (Presidential Palace, New Delhi), India Gate pavilions, Lutyens' Delhi colonial edifices, and five-star Oberoi luxury resorts across Rajasthan.",
      climateResilience: "Outstanding thermal resistance staying cool under scorching +48°C desert sun; tested through 60 cycles of freezing and thawing (-20°C) with zero spalling or surface loss.",
      tactileFeel: "Silky, fine-grit natural texture that feels soothing and organic under barefoot poolside conditions without heat retention or slipping.",
      recommendedMaintenance: "Penetrating breathable fluoropolymer sealer every 4 years. Cleans easily with neutral pH water and mild biodegradable detergents.",
      chemicalComposition: "Silica (SiO₂) 93.8%, Alumina (Al₂O₃) 2.2%, Iron Oxide (Fe₂O₃) 1.1%, Calcium Oxide (CaO) 0.8%",
      mohsHardness: "6.5 on Mohs Scale",
      flexuralStrength: "18.2 MPa (Calibrated Slabs)",
      keyHighlights: [
        "Primary sourcing priority with dedicated Bhilwara multi-gangsaw lines",
        "Zero salt efflorescence and high frost resistance",
        "Superb workability for 5-axis CNC and master hand jali carvings",
        "CE & ASTM certified for international architectural export"
      ]
    }
  },
  {
    id: "rainbow-sandstone",
    name: "Rainbow Sandstone (Khatu Concentric Strata)",
    category: "Sandstone",
    origin: "Khatu, Nagaur, Rajasthan, India",
    colorFamily: "Hypnotic Concentric Waves of Amber, Violet, Gold & Rose",
    description: "An exotic geological marvel featuring kaleidoscopic multi-color rings formed by prehistoric subterranean thermal water flows. Spectacular for luxury poolside terraces, feature atriums, and modern villa facades.",
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    texturePattern: "Hypnotic Concentric Wave & Timber Rings",
    recommendedFinishes: ["Honed", "Sandblasted", "Brushed", "Polished"],
    recommendedApplications: ["Landscaping", "Outdoor Paving Stone", "Wall Cladding Stone", "Luxury Homes"],
    standardThicknesses: ["20mm", "25mm", "30mm"],
    density: "2,420 kg/m³",
    waterAbsorption: "1.15%",
    compressiveStrength: "96 MPa",
    isFeatured: true,
    isPrimaryPriority: true,
    priorityRank: 2,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-rocks-41662-large.mp4",
    knowledge: {
      geologicalAge: "Proterozoic Era (~850 Million Years)",
      geologicalFormation: "Prehistoric mineralized groundwater percolated through porous quartz sandstone beds, depositing natural iron and manganese oxide concentric rings known geologically as Liesegang banding.",
      quarryLocation: "Khatu Shyamji Region, Nagaur District, Rajasthan",
      architecturalHeritage: "Celebrated in high-end European landscapes and Middle Eastern palace patios where each calibrated tile acts as an unrepeatable work of natural geological art.",
      climateResilience: "UV-permanent pigment bands that never fade under direct sunlight; naturally slip-resistant with R11 European rating when honed or brushed.",
      tactileFeel: "Smooth wood-like grain sensation that remains pleasantly cool and non-slip even when thoroughly wet.",
      recommendedMaintenance: "Impregnating water-and-oil repellent sealer prevents organic leaf tannins from marring surface contrast.",
      chemicalComposition: "Silica (SiO₂) 91.5%, Iron Oxides 3.2%, Alumina 2.4%, Trace Manganese 0.4%",
      mohsHardness: "6.5 on Mohs Scale",
      flexuralStrength: "19.0 MPa",
      keyHighlights: [
        "Unrepeatable concentric swirl pattern across every individual slab",
        "Naturally cool barefoot thermal rating for pool surrounds",
        "High flexural strength for large-format 600x900mm paving",
        "Available in calibrated six-sides sawn tiles"
      ]
    }
  },
  {
    id: "teakwood-sandstone",
    name: "Teakwood Sandstone (Khatu Yellow Grain)",
    category: "Sandstone",
    origin: "Khatu, Rajasthan, India",
    colorFamily: "Warm Golden Honey with Organic Timber Woodgrain Rings",
    description: "Sedimentary sandstone renowned for its striking visual resemblance to exotic Burmese teak wood. Bestows biophilic natural warmth around pool copings, spa wellness courtyards, and vertical louvers.",
    imageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    texturePattern: "Linear & Concentric Wood Timber Grain",
    recommendedFinishes: ["Honed", "Brushed", "Sandblasted", "Tumbled"],
    recommendedApplications: ["Landscaping", "Outdoor Paving Stone", "Wall Cladding Stone", "Bathrooms"],
    standardThicknesses: ["20mm", "30mm", "40mm"],
    density: "2,410 kg/m³",
    waterAbsorption: "1.10%",
    compressiveStrength: "94 MPa",
    isFeatured: true,
    isPrimaryPriority: true,
    priorityRank: 3,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-rocky-mountain-range-and-river-valley-41666-large.mp4",
    knowledge: {
      geologicalAge: "Proterozoic Sedimentary (~800 Million Years)",
      geologicalFormation: "Fine silicate grains deposited in rhythmically fluctuating alluvial currents, resulting in timber-like annual ring formations enriched with warm yellow limonite hues.",
      quarryLocation: "Khatu Region, Rajasthan",
      architecturalHeritage: "Extensively specified by landscape architects across the Mediterranean, California, and Australia for warm timber look with stone permanence.",
      climateResilience: "Unaffected by salt water pools, chlorine, and sudden thermal fluctuations; fireproof class A1 building material.",
      tactileFeel: "Brushed finish imparts a velvety, wood-like tactile touch that retains grip in wet spa conditions.",
      recommendedMaintenance: "Sealing with breathable silane penetrating sealant is recommended every 3 years.",
      chemicalComposition: "Silica (SiO₂) 92.4%, Limonite Iron Hydrates 3.6%, Feldspar 1.8%",
      mohsHardness: "6.5",
      flexuralStrength: "17.8 MPa",
      keyHighlights: [
        "Gives the warm organic look of timber without rot or maintenance",
        "High slip resistance even under heavy pool water spray",
        "Calibrated precision thickness for rapid adhesive installation",
        "Matching bullnose copings and step treads available"
      ]
    }
  },
  {
    id: "dholpur-red-sandstone",
    name: "Dholpur Red / Agra Red Sandstone",
    category: "Sandstone",
    origin: "Dholpur & Karauli, Rajasthan, India",
    colorFamily: "Imperial Terracotta Crimson & Deep Rust Red",
    description: "The historic fortress stone of the Mughal Empire and Rajasthan's royalty. Formed with rich natural iron oxide cements that grant immense structural density, frost immunity, and timeless monumental majesty.",
    imageUrl: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    texturePattern: "Compact Fine-Grained Crimson Strata",
    recommendedFinishes: ["Natural Cleft", "Honed", "Sandblasted", "Hand Carved", "Bush Hammered"],
    recommendedApplications: ["Monuments", "Exterior Walls", "Wall Cladding Stone", "Commercial Buildings"],
    standardThicknesses: ["25mm", "30mm", "40mm", "50mm", "80mm+ Monoliths"],
    density: "2,460 kg/m³",
    waterAbsorption: "0.95%",
    compressiveStrength: "115 MPa",
    isFeatured: true,
    isPrimaryPriority: true,
    priorityRank: 4,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-rocky-cliff-with-sea-waves-41664-large.mp4",
    knowledge: {
      geologicalAge: "Vindhyan Supergroup (~1,000 Million Years)",
      geologicalFormation: "Ancient quartz sand beds bonded by dense ferruginous hematite cement under extreme geological pressure, creating one of the hardest, least porous sandstones in the world.",
      quarryLocation: "Karauli & Dholpur Quarry Ridge, Eastern Rajasthan",
      architecturalHeritage: "The legendary stone of Delhi's Red Fort, the Taj Mahal gateway pavilions, Agra Fort, and Fatehpur Sikri, standing unblemished for over 500 years.",
      climateResilience: "Immune to acid rain, urban sulfur pollution, and harsh frost freeze-thaw cycles without surface spalling.",
      tactileFeel: "Dense, earthy texture with subtle natural cleft friction that grips securely underfoot.",
      recommendedMaintenance: "Extremely low maintenance. Occasional pressure washing with water is sufficient.",
      chemicalComposition: "Silica (SiO₂) 91.2%, Hematite (Fe₂O₃) 5.8%, Alumina 1.9%",
      mohsHardness: "7.0 (Extraordinarily hard)",
      flexuralStrength: "22.5 MPa",
      keyHighlights: [
        "Historical 500+ year proven longevity across world heritage monuments",
        "Exceptional compressive strength exceeding 115 MPa",
        "Zero spalling in severe sub-zero freeze-thaw winter climates",
        "Direct quarry extraction from historical Rajasthan ridges"
      ]
    }
  },
  {
    id: "kandla-grey-sandstone",
    name: "Kandla Grey Calibrated Sandstone",
    category: "Sandstone",
    origin: "Rajasthan & Gujarat Borders, India",
    colorFamily: "Neutral Silver-Grey, Platinum & Soft Charcoal",
    description: "The global gold-standard architectural stone for contemporary European paving, modern urban plazas, and minimalist villa landscapes. Features uniform silver-grey hues and exceptional non-slip durability.",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    texturePattern: "Uniform Natural Cleft Silver Pavement",
    recommendedFinishes: ["Natural Cleft", "Flamed", "Honed", "Tumbled", "Shotblasted"],
    recommendedApplications: ["Outdoor Paving Stone", "Landscaping", "Commercial Buildings", "Exterior Walls"],
    standardThicknesses: ["20mm Calibrated", "22mm Calibrated", "30mm", "40mm"],
    density: "2,540 kg/m³",
    waterAbsorption: "0.85%",
    compressiveStrength: "128 MPa",
    isFeatured: true,
    isPrimaryPriority: true,
    priorityRank: 5,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-rocks-41662-large.mp4",
    knowledge: {
      geologicalAge: "Precambrian Marine Formation (~950 Million Years)",
      geologicalFormation: "High-density quartzitic sandstone formed with siliceous bonding that prevents water percolation, yielding near-zero porosity and immense structural stability.",
      quarryLocation: "Bhilwara Logistics Route & Western Rajasthan Quarry Belt",
      architecturalHeritage: "The number one natural paving export from India to the United Kingdom, Germany, Netherlands, and Scandinavia for public footpaths, garden patios, and civic squares.",
      climateResilience: "Tested and certified for 100+ freeze-thaw cycles under BS EN 1341 standards. Highly resistant to de-icing salts.",
      tactileFeel: "Even, gently cleft surface with consistent slip resistance (PTV > 65 wet).",
      recommendedMaintenance: "Wash with water hose or power washer. Periodic sealing enhances stain resistance in dining areas.",
      chemicalComposition: "Silica (SiO₂) 95.2%, Alumina 2.1%, Iron Oxide 0.9%",
      mohsHardness: "6.8",
      flexuralStrength: "21.0 MPa",
      keyHighlights: [
        "International CE certified for UK & EU paving compliance",
        "Consistent cool grey color that pairs seamlessly with modern zinc & glass",
        "Calibrated thickness (+/- 1mm) enables rapid mortar bed laying",
        "ISPM-15 wooden pallet export crating with maritime wrap"
      ]
    }
  },
  {
    id: "autumn-brown-sandstone",
    name: "Autumn Brown (Mandana) Sandstone",
    category: "Sandstone",
    origin: "Mandana, Kota District, Rajasthan, India",
    colorFamily: "Rich Chocolate Mocha, Russet Bronze & Autumn Auburn",
    description: "An ultra-tough, acid-resistant sedimentary stone quarried from the Mandana belt. Highly celebrated for its deep earthy tones, heavy vehicular load capacity, and natural non-slip cleft.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
    texturePattern: "Warm Earthy Cleft with Russet Tones",
    recommendedFinishes: ["Natural Cleft", "Tumbled", "Honed", "Bush Hammered"],
    recommendedApplications: ["Outdoor Paving Stone", "Landscaping", "Commercial Buildings", "Wall Cladding Stone"],
    standardThicknesses: ["22mm Calibrated", "30mm", "40mm", "50mm"],
    density: "2,560 kg/m³",
    waterAbsorption: "0.75%",
    compressiveStrength: "135 MPa",
    isFeatured: false,
    isPrimaryPriority: true,
    priorityRank: 6,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-rocky-mountain-range-and-river-valley-41666-large.mp4",
    knowledge: {
      geologicalAge: "Vindhyan Basin (~850 Million Years)",
      geologicalFormation: "Formed under heavy fluvial sediment loading with natural chocolate iron-bearing matrix, creating stone of exceptional flexural strength and natural acid resistance.",
      quarryLocation: "Mandana, Kota-Bhilwara Border, Rajasthan",
      architecturalHeritage: "Specified across luxury alpine lodges, countryside estates, and winery pathways where warm autumnal tones blend with landscaping.",
      climateResilience: "Total resistance to extreme sub-zero alpine conditions, snowplows, and chemical fertilizer runoff.",
      tactileFeel: "Robust natural cleft providing surefooted traction in icy or rain-soaked environments.",
      recommendedMaintenance: "Naturally acid and stain resistant; requires minimal upkeep.",
      chemicalComposition: "Silica 93.6%, Iron Oxides 3.8%, Alumina 1.6%",
      mohsHardness: "6.8",
      flexuralStrength: "23.1 MPa",
      keyHighlights: [
        "Heavy-load rating suitable for driveways and commercial ramps",
        "Warm autumnal earthy palette that masks soil and dust",
        "Natural cleft edges with sawn or hand-cut dressing",
        "Direct processing in Bhilwara stone yard"
      ]
    }
  },
  {
    id: "jodhpur-pink-sandstone",
    name: "Jodhpur Pink Palace Sandstone",
    category: "Sandstone",
    origin: "Jodhpur, Rajasthan, India",
    colorFamily: "Warm Golden Rose, Desert Pink & Peachy Terracotta",
    description: "The royal palace stone made world-famous by the monumental Umaid Bhawan Palace in Jodhpur. Offers breathtaking regal pink-gold warmth that glows under golden hour sunlight.",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    texturePattern: "Silky Desert Rose Stratification",
    recommendedFinishes: ["Honed", "Hand Carved", "Sandblasted", "Split Face / Rockface"],
    recommendedApplications: ["Monuments", "Exterior Walls", "Luxury Homes", "Hotels & Resorts"],
    standardThicknesses: ["25mm", "30mm", "40mm", "50mm", "Bespoke Jali Blocks"],
    density: "2,420 kg/m³",
    waterAbsorption: "1.05%",
    compressiveStrength: "102 MPa",
    isFeatured: true,
    isPrimaryPriority: true,
    priorityRank: 7,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-rocky-cliff-with-sea-waves-41664-large.mp4",
    knowledge: {
      geologicalAge: "Marwar Supergroup (~600 Million Years)",
      geologicalFormation: "Deposited in ancient shallow desert seas, characterized by micro-laminations of quartz grains cemented by colloidal iron oxide imparting the distinct royal desert blush.",
      quarryLocation: "Chittar & Soorsagar Quarries, Jodhpur District, Rajasthan",
      architecturalHeritage: "The foundation and facade stone of the world-famous Umaid Bhawan Palace (one of the world's largest private royal residences) and Mehrangarh Fort ramparts.",
      climateResilience: "Superb heat insulation properties that naturally dampen solar radiation, keeping indoor environments up to 6°C cooler in tropical climates.",
      tactileFeel: "Smooth, velvety finish that radiates serene warmth upon contact.",
      recommendedMaintenance: "Sealing with breathable siloxane sealer preserves the luminous pink tone against environmental soot.",
      chemicalComposition: "Silica (SiO₂) 93.1%, Iron Oxide 2.5%, Alumina 2.1%",
      mohsHardness: "6.5",
      flexuralStrength: "18.8 MPa",
      keyHighlights: [
        "The authentic stone of Rajasthan royal palaces & high-luxury resorts",
        "Natural thermal barrier reducing HVAC cooling energy",
        "Unsurpassed workability for bespoke architectural filigree",
        "Available in solid architectural blocks and calibrated cladding slabs"
      ]
    }
  },

  // --- MARBLES, GRANITES & OTHER STONES ---
  {
    id: "statuario-marble",
    name: "Statuario Extra White",
    category: "Italian Marble",
    origin: "Carrara, Tuscany, Italy",
    colorFamily: "Crisp White with Dramatic Grey/Gold Veins",
    description: "The crown jewel of Italian quarrying. Distinctive luminous white crystalline ground with bold, expressive charcoal and taupe veins perfect for symmetrical bookmatched layouts.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    texturePattern: "Dramatic Bookmatch Veining",
    recommendedFinishes: ["Polished", "Honed"],
    recommendedApplications: ["Luxury Homes", "Hotels & Resorts", "Flooring", "Bathrooms"],
    standardThicknesses: ["18mm", "20mm", "30mm"],
    density: "2,710 kg/m³",
    waterAbsorption: "0.12%",
    compressiveStrength: "135 MPa",
    isFeatured: true,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-rocky-cliff-with-sea-waves-41664-large.mp4",
    knowledge: {
      geologicalAge: "Jurassic to Cretaceous Metamorphism (~150 Million Years)",
      geologicalFormation: "Metamorphosed limestone subjected to extreme subterranean recrystallization in the Apuan Alps.",
      quarryLocation: "Carrara, Tuscany, Italy",
      architecturalHeritage: "The classic sculpting and monumental medium of Michelangelo, Renaissance basilicas, and modern five-star penthouses.",
      climateResilience: "Engineered for luxury interior climate-controlled environments.",
      tactileFeel: "Silky, mirror-like smoothness with cool crystalline depth.",
      recommendedMaintenance: "Seal with penetrating marble impregnator; wipe acidic spills promptly.",
      chemicalComposition: "Calcite (CaCO₃) > 99%",
      mohsHardness: "3.5 to 4.0",
      keyHighlights: ["Superlative crystalline purity", "Perfect for bookmatch mirror slabs"]
    }
  },
  {
    id: "calacatta-gold",
    name: "Calacatta Gold Premium",
    category: "Italian Marble",
    origin: "Apuan Alps, Italy",
    colorFamily: "Warm Ivory White with Warm Amber & Grey",
    description: "Renowned for its rare, warm undertones and sweeping strokes of honey and charcoal. Imparts unparalleled warmth and regal grandeur to master bathrooms and focal walls.",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    texturePattern: "Warm Amber Flow",
    recommendedFinishes: ["Polished", "Honed", "Leathered / Antique"],
    recommendedApplications: ["Kitchens", "Bathrooms", "Hotels & Resorts", "Luxury Homes"],
    standardThicknesses: ["18mm", "20mm"],
    density: "2,720 kg/m³",
    waterAbsorption: "0.15%",
    compressiveStrength: "140 MPa",
    isFeatured: true,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-rocks-41662-large.mp4",
    knowledge: {
      geologicalAge: "Mesozoic Metamorphism",
      geologicalFormation: "Hydrothermal mineral veins infused with pyrite and golden iron minerals during tectonic uplift.",
      quarryLocation: "Carrara / Massa, Italy",
      architecturalHeritage: "Signature stone of luxury high-end hospitality and private superyachts.",
      climateResilience: "Interior luxury wall and vanity environments.",
      tactileFeel: "Lustrous, warm stone polish.",
      recommendedMaintenance: "Penetrating fluoropolymer sealer and gentle pH 7 soap.",
      chemicalComposition: "CaCO₃ 98.5%, Pyrite & Limonite veins",
      mohsHardness: "3.8",
      keyHighlights: ["Rare warm amber veining", "Selected block sourcing"]
    }
  },
  {
    id: "makrana-pure-white",
    name: "Makrana Pure White Marble",
    category: "Indian Marble",
    origin: "Makrana, Rajasthan, India",
    colorFamily: "Pure Alabaster White",
    description: "The historic stone of the Taj Mahal. Celebrated for over four centuries for its 98% calcium carbonate purity, complete zero-porosity, and lustrous translucency that ages gracefully for generations.",
    imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    texturePattern: "Fine Grain Crystalline",
    recommendedFinishes: ["Polished", "Honed", "Bush Hammered"],
    recommendedApplications: ["Luxury Homes", "Monuments", "Flooring", "Bathrooms"],
    standardThicknesses: ["18mm", "20mm", "30mm", "Custom Carvings"],
    density: "2,735 kg/m³",
    waterAbsorption: "0.08%",
    compressiveStrength: "165 MPa",
    isFeatured: true,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-rocky-cliff-with-sea-waves-41664-large.mp4",
    knowledge: {
      geologicalAge: "Delhi Supergroup (~1,450 Million Years)",
      geologicalFormation: "High-grade regional metamorphism under deep crustal heat, locking calcite crystals into an impervious interlocking mosaic.",
      quarryLocation: "Makrana, Nagaur District, Rajasthan",
      architecturalHeritage: "Built the Taj Mahal, Victoria Memorial, and modern grand temples worldwide. Never turns yellow or deteriorates.",
      climateResilience: "Withstands all weathering without water penetration due to dense interlocking crystal matrix.",
      tactileFeel: "Silky, naturally cool marble that requires no synthetic resin.",
      recommendedMaintenance: "Simple clean water washing; repolishable for centuries.",
      chemicalComposition: "Pure Calcium Carbonate (CaCO₃) 98.2%",
      mohsHardness: "4.5 (Harder than Italian marble)",
      keyHighlights: ["100% natural, resin-free crystalline purity", "Historic stone of the Taj Mahal"]
    }
  },
  {
    id: "fantasy-brown",
    name: "Fantasy Brown Marble",
    category: "Indian Marble",
    origin: "Rajasthan, India",
    colorFamily: "Earth Swirls: Cream, Apricot, Sage & Mocha",
    description: "A geological wonder blending the crystalline beauty of marble with the exceptional structural hardness of quartzite. Highly resistant to etching and scratching.",
    imageUrl: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    texturePattern: "Flowing River Wave",
    recommendedFinishes: ["Polished", "Leathered / Antique", "Honed"],
    recommendedApplications: ["Kitchens", "Commercial Buildings", "Flooring", "Bathrooms"],
    standardThicknesses: ["20mm", "30mm"],
    density: "2,690 kg/m³",
    waterAbsorption: "0.18%",
    compressiveStrength: "155 MPa",
    isFeatured: false,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-rocky-mountain-range-and-river-valley-41666-large.mp4",
    knowledge: {
      geologicalAge: "Precambrian Regional Complex",
      geologicalFormation: "A hybrid serpentinized dolomitic marble with interbedded quartzite layers.",
      quarryLocation: "Rajasthan, India",
      architecturalHeritage: "A modern design favorite globally for durable kitchen countertops and statement islands.",
      climateResilience: "High resistance to kitchen acids and heat.",
      tactileFeel: "Leathered finish highlights soft satin undulating textures.",
      recommendedMaintenance: "Annual sealer application for culinary islands.",
      chemicalComposition: "Dolomite, Calcite & Quartz hybrid",
      mohsHardness: "5.5 - 6.0",
      keyHighlights: ["Harder than traditional marble", "Stunning flowing river waves"]
    }
  },
  {
    id: "black-galaxy-granite",
    name: "Black Galaxy Granite",
    category: "Granite",
    origin: "Andhra Pradesh & Rajasthan, India",
    colorFamily: "Deep Obsidian Black with Golden Bronzite Flecks",
    description: "World-famous dark stone studded with shimmering metallic golden-copper specks. Exceptional scratch resistance, ideal for heavily trafficked commercial floors and kitchen counter tops.",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    texturePattern: "Cosmic Golden Nebula",
    recommendedFinishes: ["Polished", "Flamed", "Honed", "Leathered / Antique"],
    recommendedApplications: ["Kitchens", "Commercial Buildings", "Flooring", "Exterior Walls"],
    standardThicknesses: ["18mm", "20mm", "30mm"],
    density: "2,980 kg/m³",
    waterAbsorption: "0.04%",
    compressiveStrength: "210 MPa",
    isFeatured: true,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-rocky-cliff-with-sea-waves-41664-large.mp4",
    knowledge: {
      geologicalAge: "Plutonic Igneous Complex",
      geologicalFormation: "Deep volcanic gabbro-anorthosite slow cooling where golden bronzite crystals formed inside the black pyroxene ground.",
      quarryLocation: "Chimakurthy & Rajasthan processing yards",
      architecturalHeritage: "Specified globally in commercial skyscrapers, airports, and luxury bars.",
      climateResilience: "Near-zero porosity; impervious to frost, hot grease, and chemicals.",
      tactileFeel: "Dense, mirror-slick finish reflecting starry golden sparkles.",
      recommendedMaintenance: "Virtually maintenance-free.",
      chemicalComposition: "Plagioclase, Pyroxene, Bronzite",
      mohsHardness: "6.5 - 7.0",
      keyHighlights: ["Shimmering natural golden flakes", "Compressive strength exceeding 210 MPa"]
    }
  },
  {
    id: "rajasthan-black-granite",
    name: "Rajasthan Premium Black Granite",
    category: "Granite",
    origin: "Jalore, Rajasthan, India",
    colorFamily: "Homogeneous Jet Black",
    description: "Uniform fine-grained jet black granite boasting stellar structural density. Perfect for contemporary minimalist architectural spaces, stair treads, and exterior facades.",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    texturePattern: "Dense Uniform Grain",
    recommendedFinishes: ["Flamed", "Honed", "Leathered / Antique", "Polished"],
    recommendedApplications: ["Exterior Walls", "Outdoor Paving Stone", "Commercial Buildings", "Kitchens"],
    standardThicknesses: ["20mm", "30mm", "40mm"],
    density: "3,010 kg/m³",
    waterAbsorption: "0.03%",
    compressiveStrength: "230 MPa",
    isFeatured: false,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-rocks-41662-large.mp4",
    knowledge: {
      geologicalAge: "Malani Igneous Suite (~750 Million Years)",
      geologicalFormation: "Deep plutonic igneous extrusion creating exceptionally uniform micro-granitic crystalline matrix.",
      quarryLocation: "Jalore & Bhilwara processing yards, Rajasthan",
      architecturalHeritage: "Used in modern civic plazas, memorials, and architectural envelope facades across Tokyo, London, and Mumbai.",
      climateResilience: "Unsurpassed density and 100% frost resistance.",
      tactileFeel: "Flamed finish creates crisp non-slip micro-grooves.",
      recommendedMaintenance: "Wash with water.",
      chemicalComposition: "Quartz 30%, Feldspar 60%, Biotite 10%",
      mohsHardness: "7.0",
      keyHighlights: ["Extreme 3,010 kg/m³ density", "Minimalist homogeneous deep black"]
    }
  },
  {
    id: "kota-stone-blue",
    name: "Kota Stone Natural Blue & Brown",
    category: "Limestone",
    origin: "Kota, Rajasthan, India",
    colorFamily: "Cool Grey-Green, Blue-Green & Earth Brown",
    description: "India's premier fine-grained limestone. Renowned for its natural non-porous cooling properties, exceptional wear-resistance, and anti-slip surface for pathways, airports, and luxury verandas.",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    texturePattern: "Compact Uniform Natural Cleft",
    recommendedFinishes: ["Honed", "Leathered / Antique", "Polished", "Brushed"],
    recommendedApplications: ["Flooring", "Landscaping", "Commercial Buildings", "Hotels & Resorts"],
    standardThicknesses: ["15mm", "20mm", "25mm", "30mm"],
    density: "2,650 kg/m³",
    waterAbsorption: "0.35%",
    compressiveStrength: "145 MPa",
    isFeatured: true,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-rocky-mountain-range-and-river-valley-41666-large.mp4",
    knowledge: {
      geologicalAge: "Suket Shale formation, Vindhyan Basin",
      geologicalFormation: "Calcareous marine muds lithified under intense compaction into dense micro-crystalline limestone flags.",
      quarryLocation: "Ramganj Mandi, Kota District, Rajasthan",
      architecturalHeritage: "Specified for centuries across railway stations, palatial havelis, and luxury courtyard verandas.",
      climateResilience: "Absorbs ambient humidity and releases cool sensations; doesn't crack or soften.",
      tactileFeel: "Natural cleft is naturally slip-resistant and silky smooth when polished.",
      recommendedMaintenance: "Occasional washing with neutral detergent.",
      chemicalComposition: "Calcium Carbonate, Silica, Clay minerals",
      mohsHardness: "4.5",
      keyHighlights: ["Naturally cool underfoot", "High commercial footfall rating"]
    }
  },
  {
    id: "taj-mahal-quartzite",
    name: "Taj Mahal Luxury Quartzite",
    category: "Quartzite",
    origin: "Selected Brazilian & Indian Reserves",
    colorFamily: "Translucent Cream, Soft Greige & Champagne",
    description: "The pinnacle of architectural luxury. Offers the delicate crystalline depth of high-end onyx or marble with the near-indestructible scratch and acid resistance of quartzite.",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    texturePattern: "Translucent Soft Feathering",
    recommendedFinishes: ["Polished", "Leathered / Antique"],
    recommendedApplications: ["Kitchens", "Bathrooms", "Hotels & Resorts", "Luxury Homes"],
    standardThicknesses: ["20mm", "30mm"],
    density: "2,740 kg/m³",
    waterAbsorption: "0.10%",
    compressiveStrength: "180 MPa",
    isFeatured: true,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-rocky-cliff-with-sea-waves-41664-large.mp4",
    knowledge: {
      geologicalAge: "Precambrian Metamorphic",
      geologicalFormation: "Pure sandstone recrystallized under intense tectonic heat and pressure into fused quartz crystals.",
      quarryLocation: "Selected Premium Reserves",
      architecturalHeritage: "The premier specification for luxury waterfall kitchen islands and master spas.",
      climateResilience: "100% heat and knife scratch resistant.",
      tactileFeel: "Polished crystal depth with soft satin light transmission.",
      recommendedMaintenance: "Clean with any standard soap or stone cleaner.",
      chemicalComposition: "Quartz (SiO₂) > 98%",
      mohsHardness: "7.0 (Harder than granite)",
      keyHighlights: ["Backlightable translucent areas", "Impervious to kitchen lemon/wine acid etching"]
    }
  },
  {
    id: "classic-roman-travertine",
    name: "Classic Roman Travertine",
    category: "Travertine",
    origin: "Tivoli, Italy & Selected Mediterranean Reserves",
    colorFamily: "Warm Walnut, Cream & Natural Beige",
    description: "Distinguished by its natural microporous texture, linear parallel bedding, and timeless classical appeal. Available filled & polished, or unfilled & brushed for authentic Mediterranean aesthetics.",
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    texturePattern: "Linear Vein Cut Pores",
    recommendedFinishes: ["Honed", "Polished", "Brushed", "Sandblasted"],
    recommendedApplications: ["Wall Cladding Stone", "Bathrooms", "Hotels & Resorts", "Exterior Walls"],
    standardThicknesses: ["18mm", "20mm", "30mm"],
    density: "2,520 kg/m³",
    waterAbsorption: "0.95%",
    compressiveStrength: "110 MPa",
    isFeatured: true,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-rocks-41662-large.mp4",
    knowledge: {
      geologicalAge: "Pleistocene Hot Spring Formation",
      geologicalFormation: "Precipitated around geothermal sulfur springs where escaping gas formed characteristic organic cavities.",
      quarryLocation: "Tivoli, Rome, Italy & selected reserves",
      architecturalHeritage: "The stone of the Roman Colosseum, St. Peter's Square colonnades, and modern Getty Center.",
      climateResilience: "Natural acoustic and thermal insulation.",
      tactileFeel: "Warm, velvety and calming.",
      recommendedMaintenance: "Penetrating sealer prevents staining in shower niches.",
      chemicalComposition: "Calcium Carbonate with porous calc-tufa matrix",
      mohsHardness: "4.0",
      keyHighlights: ["Authentic classical Roman aesthetic", "Vein-cut linear bedding"]
    }
  },
  {
    id: "stacked-ledgestone-cladding",
    name: "Rustic Natural Quartzite Ledgestone",
    category: "Wall Cladding Stone",
    origin: "Rajasthan, India",
    colorFamily: "Charcoal Slate, Copper, Russet & Mica Shimmer",
    description: "Interlocking z-shaped stacked natural stone panels designed for effortless dry-cladding. Creates captivating shadow play on interior feature walls, fireplaces, and facade pillars.",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    texturePattern: "3D Split-Face Linear Texture",
    recommendedFinishes: ["Split Face / Rockface", "Bush Hammered"],
    recommendedApplications: ["Exterior Walls", "Wall Cladding Stone", "Hotels & Resorts", "Luxury Homes"],
    standardThicknesses: ["15-25mm Varying Relief"],
    density: "2,680 kg/m³",
    waterAbsorption: "0.22%",
    compressiveStrength: "160 MPa",
    isFeatured: false,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-rocky-mountain-range-and-river-valley-41666-large.mp4",
    knowledge: {
      geologicalAge: "Aravalli Mountain Belt",
      geologicalFormation: "Foliated quartz-mica schist split along natural cleavage planes.",
      quarryLocation: "Rajasthan Aravalli Belt",
      architecturalHeritage: "Used for exterior mountain resort facades and feature living room stone walls.",
      climateResilience: "100% weather and frost resistant.",
      tactileFeel: "Chiseled 3D rugged relief.",
      recommendedMaintenance: "Dust or spray with water.",
      chemicalComposition: "Quartz, Muscovite Mica, Iron Silicates",
      mohsHardness: "6.5",
      keyHighlights: ["Interlocking Z-panels for invisible seams", "Dramatic shadow-line relief"]
    }
  },
  {
    id: "granite-cobblestone-paving",
    name: "Flamed Granite & Sandstone Pavers",
    category: "Outdoor Paving Stone",
    origin: "Jaipur, Rajasthan, India",
    colorFamily: "Granite Grey, Basalt Black & Sandstone Buff",
    description: "Heavy-duty calibrated outdoor stones featuring anti-slip thermal flamed or hand-tumbled finishes. Engineered for vehicular driveways, pedestrian promenades, and resort poolsides.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
    texturePattern: "Thermal Anti-Slip Microtexture",
    recommendedFinishes: ["Flamed", "Bush Hammered", "Split Face / Rockface"],
    recommendedApplications: ["Outdoor Paving Stone", "Landscaping", "Hotels & Resorts", "Commercial Buildings"],
    standardThicknesses: ["30mm", "40mm", "50mm", "60mm"],
    density: "2,850 kg/m³",
    waterAbsorption: "0.15%",
    compressiveStrength: "195 MPa",
    isFeatured: true,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-rocky-cliff-with-sea-waves-41664-large.mp4",
    knowledge: {
      geologicalAge: "Deep Plutonic Igneous",
      geologicalFormation: "Heavy crystalline granite shaped and thermally torched to pop surface quartz crystals into slip-resistant micro-texture.",
      quarryLocation: "Rajasthan Paving Works",
      architecturalHeritage: "Classic European city avenues, luxury hotel motorcourts, and public promenades.",
      climateResilience: "Resists heavy truck wheel loads, motor oils, and ice.",
      tactileFeel: "High-traction textured grip.",
      recommendedMaintenance: "Power wash periodically.",
      chemicalComposition: "Granite complex",
      mohsHardness: "7.0",
      keyHighlights: ["R12/R13 anti-slip rating", "Engineered for vehicular traffic"]
    }
  },
  {
    id: "custom-bookmatched-slabs",
    name: "CNC Engineered & Bookmatched Slabs",
    category: "Custom Stone Slabs",
    origin: "TerraStone Production Center, Bhilwara, Rajasthan",
    colorFamily: "Tailored to Architectural BOQ & 3D Renderings",
    description: "Precision 5-axis CNC cut stonework, waterjet marble marquetry, seamless shower pans, solid carved monolithic basins, and laser-mapped bookmatched mega-slabs.",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    texturePattern: "Precision Inlay & Bookmatch Mirror",
    recommendedFinishes: ["Polished", "Honed", "Leathered / Antique"],
    recommendedApplications: ["Luxury Homes", "Hotels & Resorts", "Kitchens", "Monuments"],
    standardThicknesses: ["Precision Calibrated 18mm to 100mm+"],
    density: "Varies by selected stone",
    waterAbsorption: "< 0.20%",
    compressiveStrength: "Certified to Spec",
    isFeatured: true,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-rocks-41662-large.mp4",
    knowledge: {
      geologicalAge: "Artisanal Engineered Precision",
      geologicalFormation: "Raw quarry blocks digitally sliced in sequential bookmatched pairs, numbered and dry-laid for optical continuity.",
      quarryLocation: "Bhilwara CNC Stoneworks Hub, Rajasthan",
      architecturalHeritage: "Specified for superyacht interiors, grand palace atriums, and luxury flagship boutiques.",
      climateResilience: "Calibrated to 1mm tolerances for modern clip-hanging systems.",
      tactileFeel: "Flawless mirror or honed transition.",
      recommendedMaintenance: "Follow stone-specific maintenance schedule.",
      chemicalComposition: "Tailored to selected marble, granite, or quartzite",
      mohsHardness: "Varies (4.0 to 7.0)",
      keyHighlights: ["Sequential bookmatch slab pairing", "Full factory dry-lay photo approval before dispatch"]
    }
  }
];

export const APPLICATIONS: ApplicationItem[] = [
  {
    id: "luxury-homes",
    title: "Luxury Homes & Villas",
    category: "Residential Architecture",
    tagline: "Sanctuary of Refinement & Enduring Elegance",
    description: "Elevate private residences with grand bookmatched marble foyers, monolithic travertine staircases, and seamless living-to-terrace transition stone flags.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    recommendedStones: ["Statuario Marble", "Calacatta Gold", "Makrana White", "Taj Mahal Quartzite"],
    recommendedFinishes: ["Polished", "Honed", "Leathered / Antique"],
    recommendedThickness: "18mm – 20mm (Floors & Walls)",
    keyBenefits: [
      "Increases long-term property appraisal value",
      "Hypoallergenic, cool naturally under tropical climates",
      "Timeless patina that develops character over decades"
    ]
  },
  {
    id: "hotels-resorts",
    title: "Hotels & Resorts",
    category: "Hospitality Architecture",
    tagline: "Unforgettable First Impressions & Opulence",
    description: "Built for five-star durability and breathtaking visual drama. From double-height lobby reception atriums to serene private spa wellness poolsides.",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    recommendedStones: ["Italian Marble Slabs", "Classic Travertine", "Kota Stone Blue", "Dholpur Beige"],
    recommendedFinishes: ["Polished (Lobby)", "Flamed / Brushed (Poolside)", "Honed (Corridors)"],
    recommendedThickness: "20mm – 30mm (High Traffic Commercial)",
    keyBenefits: [
      "Ultra-dense stone choices withstand rolling luggage and heavy footfall",
      "Certified wet-area slip resistance ratings (R11/R12)",
      "Uniform block batches ensure consistent color across large resort footprints"
    ]
  },
  {
    id: "commercial-buildings",
    title: "Commercial Buildings",
    category: "Corporate & Institutional",
    tagline: "Prestigious Solidity & Architectural Authority",
    description: "Corporate headquarters, financial centers, and upscale retail flagships demand materials that reflect stability, prestige, and minimal maintenance overhead.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    recommendedStones: ["Black Galaxy Granite", "Rajasthan Black Granite", "Limestone", "Quartzite"],
    recommendedFinishes: ["Honed", "Flamed", "Polished"],
    recommendedThickness: "20mm – 30mm Calibrated",
    keyBenefits: [
      "Extreme abrasion resistance (Mohs hardness 6.5–7+)",
      "Impervious to stain agents and commercial cleaning chemicals",
      "Low life-cycle operational and replacement costs"
    ]
  },
  {
    id: "kitchens",
    title: "Kitchens & Islands",
    category: "Culinary Spaces",
    tagline: "Where Gastronomic Function Meets Sculptural Art",
    description: "Create show-stopping kitchen islands with waterfall mitred edges, solid stone prep countertops, and full-height seamless backsplash slabs.",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    recommendedStones: ["Taj Mahal Quartzite", "Fantasy Brown", "Black Galaxy Granite", "Calacatta Gold"],
    recommendedFinishes: ["Leathered / Antique", "Polished", "Honed"],
    recommendedThickness: "20mm – 30mm Slabs",
    keyBenefits: [
      "Quartzite and granite provide 100% heat & thermal shock resistance",
      "Food-grade sealing creates zero bacterial harborage",
      "Custom bookmatching creates continuous veining from horizontal to vertical planes"
    ]
  },
  {
    id: "bathrooms",
    title: "Bathrooms & Spas",
    category: "Wellness & Bathing",
    tagline: "Serene Private Sanctuaries Carved from Nature",
    description: "Full-slab bookmatched marble showers, monolithic carved floating vanity tops, and custom freestone soaking tub surrounds with concealed drainage details.",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    recommendedStones: ["Statuario White", "Classic Travertine", "Makrana Marble", "Calacatta"],
    recommendedFinishes: ["Honed (Floor Anti-Slip)", "Polished (Walls)", "Brushed"],
    recommendedThickness: "18mm – 20mm (Walls), Custom Carved Solid Blocks",
    keyBenefits: [
      "Anti-bacterial, non-porous naturally dense selections",
      "Tactile sensory warmth unmatched by porcelain or synthetic laminates",
      "Integrated matching niche shelves and threshold sills"
    ]
  },
  {
    id: "flooring",
    title: "Flooring & Grand Halls",
    category: "Interior Paving",
    tagline: "Foundations of Timeless Architectural Grace",
    description: "From palace-inspired diamond checkered marble patterns to expansive seamless large-format slabs with micro-bevelled edges.",
    imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    recommendedStones: ["Makrana Marble", "Italian Carrara", "Kota Stone Natural", "Rajasthan Granite"],
    recommendedFinishes: ["Mirror Polished", "Satin Honed", "Leathered"],
    recommendedThickness: "18mm, 20mm & 25mm",
    keyBenefits: [
      "Cool thermal mass keeps interiors temperate naturally",
      "Lifetime longevity that can be repolished indefinitely",
      "Resistant to high foot-traffic wear and heavy furnishings"
    ]
  },
  {
    id: "exterior-walls",
    title: "Exterior Walls & Facades",
    category: "Envelope Architecture",
    tagline: "Weather-Resistant Ventilated Stone Facades",
    description: "Mechanical dry-hang stone cladding, ventilated curtain walls, and monumental split-face masonry that shields building envelopes from temperature swings.",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    recommendedStones: ["Dholpur Sandstone", "Stacked Ledgestone", "Flamed Granite", "Roman Travertine"],
    recommendedFinishes: ["Split Face", "Flamed", "Sandblasted", "Bush Hammered"],
    recommendedThickness: "25mm – 40mm Mechanically Anchored",
    keyBenefits: [
      "Thermal insulation barrier reduces HVAC energy loads",
      "UV stable natural pigments that will never fade or peel under harsh sunlight",
      "Engineered slot-cutting for invisible stainless steel clamp fixing"
    ]
  },
  {
    id: "landscaping",
    title: "Landscaping & Pools",
    category: "Outdoor Living",
    tagline: "Harmonizing Architecture with the Earth",
    description: "Garden walkways, pool coping with pencil bullnoses, rustic courtyard flagstones, and water cascade backdrops crafted from weather-tested natural stone.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
    recommendedStones: ["Kandla Grey Sandstone", "Kota Blue", "Teakwood Sandstone", "Flamed Granite Pavers"],
    recommendedFinishes: ["Flamed (Anti-slip)", "Tumbled / Antique", "Natural Cleft"],
    recommendedThickness: "30mm, 40mm, 50mm",
    keyBenefits: [
      "Certified non-slip even when wet around salt and chlorine pools",
      "Frost and salt-spray resistant for all geographic climates",
      "Rich organic earth tones that complement lush flora and water features"
    ]
  },
  {
    id: "monuments",
    title: "Monuments & Heritage",
    category: "Civic & Sacred",
    tagline: "Crafting Enduring Legacies in Stone",
    description: "Sacred temple architecture, civic monuments, hand-carved pillars, jali filigree screens, and public memorial plazas built to endure for centuries.",
    imageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    recommendedStones: ["Makrana Pure White", "Dholpur Beige", "Red Agra Sandstone", "Jet Black Granite"],
    recommendedFinishes: ["Hand Carved", "Honed", "Bush Hammered"],
    recommendedThickness: "50mm to Monolithic Architectural Blocks",
    keyBenefits: [
      "Master artisans in Rajasthan with generational stone-carving lineage",
      "Zero deterioration in acid rain or weathering tests",
      "Traditional Vastu and classical architectural proportion adherence"
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "oberoi-rajvilas-expansion",
    title: "Royal Heritage Courtyard & Pavilion",
    clientType: "Hotels & Resorts",
    location: "Jaipur, Rajasthan",
    completionYear: 2023,
    stonesUsed: ["Dholpur Beige Sandstone", "Makrana White Marble", "Kota Stone"],
    scope: "12,000 sq. m of hand-carved jali panels, solid architraves, and courtyard paving",
    description: "Comprehensive stone supply and artisan carving for a 5-star heritage resort expansion, honoring 18th-century Rajput architectural motifs with modern mechanical fixing.",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    areaCovered: "128,000 Sq. Ft."
  },
  {
    id: "palm-jumeirah-villa",
    title: "Oceanfront Super Villa",
    clientType: "Luxury Homes",
    location: "Palm Jumeirah, Dubai, UAE",
    completionYear: 2024,
    stonesUsed: ["Statuario Extra Bookmatched", "Classic Roman Travertine", "Taj Mahal Quartzite"],
    scope: "Full-height interior wall slabs, master bath sanctuary, and exterior pool terrace",
    description: "Export of 18 ocean-freight containers of precision-cut bookmatched Statuario Italian marble and custom honed Roman travertine pavers for a private ultra-luxury residence.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    areaCovered: "42,000 Sq. Ft."
  },
  {
    id: "bengaluru-tech-hq",
    title: "Apex Innovation Tower Lobby & Plaza",
    clientType: "Commercial",
    location: "Outer Ring Road, Bengaluru",
    completionYear: 2023,
    stonesUsed: ["Rajasthan Black Granite Flamed", "Fantasy Brown", "Silver Quartzite Cladding"],
    scope: "Triple-height reception atrium flooring, exterior dry-hung facade, and public civic promenade",
    description: "Heavy-traffic engineered granite flooring and 3D fluted stone wall paneling calibrated to 1mm tolerances for a Fortune 500 corporate headquarters campus.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    areaCovered: "95,000 Sq. Ft."
  },
  {
    id: "udaipur-lake-resort",
    title: "Aravalli Sanctuary Resort & Spa",
    clientType: "Hotels & Resorts",
    location: "Lake Pichola, Udaipur",
    completionYear: 2022,
    stonesUsed: ["Kota Stone Antique Cleft", "Udaipur Green Marble", "Khandla Grey Sandstone"],
    scope: "Cliffside infinity pool coping, garden steps, spa massage suites, and stepped terraces",
    description: "Harmonizing local Rajasthan stone varieties with water-resistant non-slip finishes across an 8-acre luxury hillside wellness retreat.",
    imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    areaCovered: "76,000 Sq. Ft."
  },
  {
    id: "worli-sky-penthouse",
    title: "Horizon Penthouse Residence",
    clientType: "Luxury Homes",
    location: "Worli Sea Face, Mumbai",
    completionYear: 2024,
    stonesUsed: ["Calacatta Gold", "Black Galaxy Granite", "Custom Monolithic Basin"],
    scope: "Show kitchen island with 3-meter waterfall overhang, guest powder room, and private elevator vestibule",
    description: "Ultra-precision laser-scanned slabs delivered to the 54th floor, showcasing seamless continuous gold veining across floor, walls, and cantilevered counters.",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    areaCovered: "18,500 Sq. Ft."
  },
  {
    id: "canary-wharf-facade",
    title: "Riverside Financial Atrium",
    clientType: "Commercial",
    location: "Canary Wharf, London, UK",
    completionYear: 2023,
    stonesUsed: ["Rajasthan Absolute Black Granite", "Classic Roman Travertine"],
    scope: "ASTM & CE compliant calibrated stone tiles for exterior covered colonnade and lift lobbies",
    description: "Export supply of 28 containers of freeze-thaw certified natural stone engineered for high-density London financial district pedestrian traffic.",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    areaCovered: "60,000 Sq. Ft."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Bookmatched Statuario Foyer",
    category: "Marble",
    stoneName: "Statuario Extra White",
    location: "Private Residence, New Delhi",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-2",
    title: "Calacatta Gold Floating Island",
    category: "Marble",
    stoneName: "Calacatta Gold",
    location: "Penthouse, Mumbai",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-3",
    title: "Granite Corporate Atrium",
    category: "Granite",
    stoneName: "Black Galaxy & Flamed Granite",
    location: "Commercial Tower, Bengaluru",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-4",
    title: "Dholpur Sandstone Jali Screen",
    category: "Projects",
    stoneName: "Dholpur Beige Sandstone",
    location: "Heritage Resort, Jaipur",
    imageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-5",
    title: "Travertine Master Spa Sanctuary",
    category: "Cladding",
    stoneName: "Classic Roman Travertine",
    location: "Boutique Hotel, Goa",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-6",
    title: "Poolside Non-Slip Kota Paving",
    category: "Outdoor",
    stoneName: "Kota Stone Natural Cleft",
    location: "Villa, Alibaug",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-7",
    title: "Monolithic Quartzite Countertop",
    category: "Textures",
    stoneName: "Taj Mahal Quartzite",
    location: "Luxury Kitchen Studio",
    imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-8",
    title: "Stacked Slate Feature Wall",
    category: "Cladding",
    stoneName: "Quartzite Ledgestone",
    location: "Executive Clubhouse, Gurgaon",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gal-9",
    title: "Cobblestone Courtyard Driveway",
    category: "Outdoor",
    stoneName: "Flamed Granite Pavers",
    location: "Estate, Chandigarh",
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
  }
];

export const STONE_FINISH_GUIDE = [
  {
    name: "Polished",
    tag: "High Gloss & Reflective",
    description: "Diamond buffed to a mirror-like shine that accentuates deep crystal colors and intricate veining.",
    idealFor: "Indoor floors, feature walls, vanity tops, dining tables",
    slipRating: "Low when wet (Indoor only)"
  },
  {
    name: "Honed",
    tag: "Satin Smooth & Matte",
    description: "Finely ground with satin sheen and zero glare. Soft to the touch while hiding micro-scratches.",
    idealFor: "High-traffic residential floors, stair treads, modern bathrooms",
    slipRating: "Medium traction"
  },
  {
    name: "Flamed (Thermal)",
    tag: "Textured & Slip-Resistant",
    description: "Subjected to high-temperature torching that bursts quartz crystals, creating a tactile rough anti-slip surface.",
    idealFor: "Exterior plazas, swimming pool surrounds, driveways",
    slipRating: "High (R11/R12 rating)"
  },
  {
    name: "Leathered / Antique",
    tag: "Tactile Organic Relief",
    description: "Diamond wire-brushed finish that follows natural mineral hardness, leaving an undulating leather-like feel.",
    idealFor: "Kitchen countertops, bar tops, rustic fireplace mantels",
    slipRating: "Medium-high traction"
  },
  {
    name: "Split Face / Rockface",
    tag: "Chiseled & Sculptural",
    description: "Mechanically sheared along natural rift lines to expose the rugged, unpolished heart of the stone.",
    idealFor: "Exterior stone cladding, landscape boundary walls, fireplaces",
    slipRating: "Extreme texture"
  },
  {
    name: "Sandblasted / Bush Hammered",
    tag: "Uniform Stippled Grip",
    description: "Mechanical impact creates tiny indentations for uniform texture and weather-resistant architectural grip.",
    idealFor: "Public steps, handicap ramps, outdoor terrace borders",
    slipRating: "Very High (R12/R13 rating)"
  }
];
