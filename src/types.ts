export type PageType = 
  | 'home' 
  | 'about' 
  | 'products' 
  | 'applications' 
  | 'projects' 
  | 'gallery' 
  | 'contact'
  | 'ai-advisor';

export type StoneCategory = 
  | 'Italian Marble'
  | 'Indian Marble'
  | 'Granite'
  | 'Sandstone'
  | 'Limestone'
  | 'Quartzite'
  | 'Travertine'
  | 'Wall Cladding Stone'
  | 'Outdoor Paving Stone'
  | 'Custom Stone Slabs';

export type StoneFinish = 
  | 'Polished'
  | 'Honed'
  | 'Flamed'
  | 'Leathered / Antique'
  | 'Bush Hammered'
  | 'Split Face / Rockface'
  | 'Brushed'
  | 'Sandblasted'
  | 'Natural Cleft'
  | 'Tumbled'
  | 'Shotblasted'
  | 'Hand Carved'
  | 'Calibrated';

export interface StoneKnowledge {
  geologicalAge: string;
  geologicalFormation: string;
  quarryLocation: string;
  architecturalHeritage: string;
  climateResilience: string;
  tactileFeel: string;
  recommendedMaintenance: string;
  chemicalComposition: string;
  mohsHardness: string;
  flexuralStrength?: string;
  videoUrl?: string;
  keyHighlights: string[];
}

export interface StoneProduct {
  id: string;
  name: string;
  category: StoneCategory;
  origin: string;
  colorFamily: string;
  description: string;
  imageUrl: string;
  texturePattern: string;
  recommendedFinishes: StoneFinish[];
  recommendedApplications: string[];
  standardThicknesses: string[];
  density: string;
  waterAbsorption: string;
  compressiveStrength?: string;
  isFeatured?: boolean;
  isPrimaryPriority?: boolean;
  priorityRank?: number;
  videoUrl?: string;
  knowledge?: StoneKnowledge;
}

export interface ApplicationItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  imageUrl: string;
  recommendedStones: string[];
  recommendedFinishes: string[];
  recommendedThickness: string;
  keyBenefits: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  clientType: 'Hotels & Resorts' | 'Luxury Homes' | 'Commercial' | 'Architectural Monument';
  location: string;
  completionYear: number;
  stonesUsed: string[];
  scope: string;
  description: string;
  imageUrl: string;
  areaCovered: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Marble' | 'Granite' | 'Cladding' | 'Outdoor' | 'Projects' | 'Textures';
  stoneName: string;
  location?: string;
  imageUrl: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  companyOrProject?: string;
  stoneType: string;
  estimatedArea: string;
  unit: 'Sq. Ft.' | 'Sq. Meters' | 'Containers';
  application: string;
  finishPreference: string;
  destinationType: 'Domestic (India)' | 'International Export';
  destinationCity: string;
  timeline: string;
  additionalNotes: string;
}

export interface WebGroundingSource {
  title?: string;
  uri?: string;
}

export interface MapPlaceReviewSnippet {
  reviewText?: string;
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
  };
}

export interface MapGroundingSource {
  title?: string;
  uri?: string;
  address?: string;
  placeAnswerSources?: {
    reviewSnippets?: MapPlaceReviewSnippet[];
  };
}

export interface AIMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  mode?: 'search' | 'maps' | 'specifier';
  timestamp: string;
  searchSources?: WebGroundingSource[];
  searchQueries?: string[];
  mapSources?: MapGroundingSource[];
  recommendedStone?: string;
  loading?: boolean;
}

export interface StoneSampleSelection {
  stoneId: string;
  stoneName: string;
  category: string;
  imageUrl: string;
  origin: string;
  finish: string;
  size: '10x10 cm (Standard Swatch)' | '15x15 cm (Architectural Tile)' | 'Bookmatched Mini-Set (Pair)';
  thickness: string;
}

export interface SampleRequestFormData {
  fullName: string;
  firmOrCompany: string;
  profession: 'Architect' | 'Interior Designer' | 'General Contractor' | 'Stone Importer/Wholesaler' | 'Real Estate Developer' | 'Private Homeowner';
  email: string;
  phone: string;
  deliveryAddress: string;
  city: string;
  stateProvince: string;
  postalCode: string;
  country: string;
  projectName?: string;
  urgency: 'Express Air Courier (DHL/FedEx 3-5 days)' | 'Urgent Architectural Spec (1-2 days priority)';
  sampleNotes?: string;
  samples: StoneSampleSelection[];
}

