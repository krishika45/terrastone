import React, { useState } from 'react';
import { PageType } from '../types';
import { COMPANY_INFO } from '../data/stoneData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Truck,
  Building2,
  HelpCircle
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: (stone?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Stone Supply Inquiry',
    stoneCategory: 'Italian Marble',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "What is your typical production and export lead time?",
      a: "Standard calibrated slabs (18mm / 20mm) in stock typically ship within 7 to 10 working days from order confirmation. Custom gangsaw block cutting or waterjet inlays require 2 to 4 weeks depending on the order volume."
    },
    {
      q: "Which ports do you export from?",
      a: "Our shipments primarily depart via Mundra Port (Gujarat) and Nhava Sheva / JNPT (Mumbai). We handle complete customs documentation, ISPM-15 wooden crate fumigation certificates, and maritime Bills of Lading."
    },
    {
      q: "Do you supply physical stone sample kits for architects?",
      a: "Yes. We prepare curated sample boxes containing 10x10 cm or 15x15 cm polished, honed, flamed, or leathered stone specimens delivered directly to architectural studios worldwide via express air courier."
    },
    {
      q: "What is the minimum order quantity (MOQ)?",
      a: "For domestic supply within India, we accommodate single room or villa orders (from 500 sq. ft.). For ocean freight exports, standard minimum order is one 20-foot full container load (FCL), approximately 400 to 500 square meters of 20mm stone."
    }
  ];

  return (
    <div className="bg-[#FBF9F5] text-[#292521] min-h-screen">
      
      {/* Header */}
      <section className="bg-[#141210] text-[#FAF7F2] py-20 border-b border-[#28241D] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24201A] border border-[#C2A379]/40 text-xs font-semibold uppercase tracking-[0.2em] text-[#C2A379]">
            <span>Connect with TerraStone</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAF7F2]">
            Contact & Works Address
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#C8C0B2] font-light leading-relaxed">
            Reach our stone specialists, export desk, or schedule a physical visit to our processing works in Bhilwara, Rajasthan.
          </p>

          <p className="text-xs uppercase tracking-[0.25em] text-[#C2A379] italic font-serif pt-1">
            “{COMPANY_INFO.tagline}”
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Cards & Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Official Business Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A7A4E]">
                Official Corporate Details
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#1C1A17]">
                TerraStone International
              </h2>
              <p className="text-xs text-[#666055] leading-relaxed">
                Manufacturer, Supplier & Exporter of Premium Natural Stone and Marble. Serving architects, luxury residential owners, and developers globally since 2012.
              </p>
            </div>

            {/* Business Contact Cards */}
            <div className="space-y-4">
              <div className="p-5 bg-white rounded-sm border border-[#E0D8CB] shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#FAF7F2] border border-[#C2A379]/40 flex items-center justify-center text-[#9A7A4E] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1A17]">
                    Head Office & Factory Works
                  </h4>
                  <p className="text-sm font-medium text-[#292521] mt-1 leading-relaxed">
                    TerraStone International<br />
                    Bhilwara, Rajasthan, India – 311001
                  </p>
                  <p className="text-[11px] text-[#8C8476] mt-1">
                    Landmark: Bhilwara Stone Processing & Industrial Zone
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-sm border border-[#E0D8CB] shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#FAF7F2] border border-[#C2A379]/40 flex items-center justify-center text-[#9A7A4E] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1A17]">
                    Phone & Export Helpline
                  </h4>
                  <a 
                    href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-base font-semibold text-[#9A7A4E] hover:underline block mt-0.5"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-[11px] text-[#8C8476]">
                    Monday to Saturday, 9:00 AM – 7:00 PM IST
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-sm border border-[#E0D8CB] shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#FAF7F2] border border-[#C2A379]/40 flex items-center justify-center text-[#9A7A4E] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1A17]">
                    Official Email
                  </h4>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-semibold text-[#1C1A17] hover:text-[#9A7A4E] hover:underline block mt-0.5"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-[11px] text-[#8C8476]">
                    Inquiries acknowledged within 12 to 24 hours.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-sm border border-[#E0D8CB] shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#FAF7F2] border border-[#C2A379]/40 flex items-center justify-center text-[#9A7A4E] shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1A17]">
                    Official Website & Export Ports
                  </h4>
                  <span className="text-sm font-medium text-[#1C1A17] block mt-0.5">
                    {COMPANY_INFO.website}
                  </span>
                  <p className="text-[11px] text-[#8C8476]">
                    Primary Loading Ports: Mundra Port & Nhava Sheva (JNPT)
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct */}
            <div className="p-5 bg-[#25D366]/10 border border-[#25D366]/40 rounded-sm flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-[#1C1A17] uppercase tracking-wider">
                  Instant WhatsApp Desk
                </h4>
                <p className="text-xs text-[#524B42] mt-0.5">
                  Send your drawings, bill of quantities, or site photos directly.
                </p>
              </div>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20TerraStone%20International,%20I%20have%20an%20inquiry%20regarding%20natural%20stone`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#25D366] text-white text-xs font-semibold rounded hover:bg-[#20ba59] transition-colors whitespace-nowrap shadow-sm"
              >
                Chat on WhatsApp
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-sm border border-[#E0D8CB] shadow-sm p-6 sm:p-8 lg:p-10">
              
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 bg-[#9A7A4E]/15 border border-[#9A7A4E] rounded-full mx-auto flex items-center justify-center text-[#9A7A4E]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-3xl font-bold text-[#1C1A17]">
                      Message Received
                    </h3>
                    <p className="text-sm text-[#666055] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting TerraStone International. Our Bhilwara office has logged your inquiry. An architectural stone consultant will respond to <strong>{formState.email}</strong> shortly.
                    </p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-[#1C1A17] text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#2C2720] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A7A4E]">
                      Online Inquiry
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1A17] mt-1">
                      Send a Message to Our Bhilwara Works
                    </h3>
                    <p className="text-xs text-[#7A7367] mt-1">
                      Fill out the form below for pricing inquiries, sample kit dispatches, or custom slab reservations.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1A17] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma / Johnathan Miller"
                        className="w-full bg-[#FAF7F2] border border-[#DCD5C8] rounded px-3 py-2 text-sm text-[#1C1A17] focus:border-[#9A7A4E] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1A17] mb-1.5">
                        Corporate / Project Name
                      </label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="e.g. Studio Architects / Private Villa"
                        className="w-full bg-[#FAF7F2] border border-[#DCD5C8] rounded px-3 py-2 text-sm text-[#1C1A17] focus:border-[#9A7A4E] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1A17] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-[#FAF7F2] border border-[#DCD5C8] rounded px-3 py-2 text-sm text-[#1C1A17] focus:border-[#9A7A4E] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1A17] mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 or international code..."
                        className="w-full bg-[#FAF7F2] border border-[#DCD5C8] rounded px-3 py-2 text-sm text-[#1C1A17] focus:border-[#9A7A4E] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1A17] mb-1.5">
                        Inquiry Nature
                      </label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#DCD5C8] rounded px-3 py-2 text-sm text-[#1C1A17] focus:border-[#9A7A4E] focus:outline-none"
                      >
                        <option value="Stone Supply Inquiry">Stone Supply Inquiry</option>
                        <option value="Architectural Sample Box Request">Architectural Sample Box Request</option>
                        <option value="Container Export Pricing">Container Export Pricing</option>
                        <option value="Factory Visit to Bhilwara">Factory Visit to Bhilwara</option>
                        <option value="Custom Waterjet / CNC Carving">Custom Waterjet / CNC Carving</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1A17] mb-1.5">
                        Interested Stone Category
                      </label>
                      <select
                        value={formState.stoneCategory}
                        onChange={(e) => setFormState({ ...formState, stoneCategory: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#DCD5C8] rounded px-3 py-2 text-sm text-[#1C1A17] focus:border-[#9A7A4E] focus:outline-none"
                      >
                        <option value="Italian Marble">Italian Marble</option>
                        <option value="Indian Marble">Indian Marble</option>
                        <option value="Granite">Granite</option>
                        <option value="Sandstone">Sandstone</option>
                        <option value="Limestone">Limestone</option>
                        <option value="Quartzite">Quartzite</option>
                        <option value="Travertine">Travertine</option>
                        <option value="Wall Cladding Stone">Wall Cladding Stone</option>
                        <option value="Outdoor Paving Stone">Outdoor Paving Stone</option>
                        <option value="Custom Stone Slabs">Custom Stone Slabs</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1A17] mb-1.5">
                      Your Message / BOQ Project Specifications *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Please specify estimated square feet or square meters, desired slab thickness (e.g. 18mm/20mm), destination city/port, and surface finish..."
                      className="w-full bg-[#FAF7F2] border border-[#DCD5C8] rounded px-3 py-2 text-sm text-[#1C1A17] focus:border-[#9A7A4E] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] text-[#8C8476]">
                      Manufacturing Works • Bhilwara, Rajasthan, India – 311001
                    </span>

                    <button
                      type="submit"
                      id="contact-form-submit-btn"
                      className="w-full sm:w-auto px-8 py-3 bg-[#9A7A4E] hover:bg-[#85673E] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-[#F4EFEA] border-t border-[#E5DFD4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A7A4E]">
              Client & Export FAQs
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1C1A17]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-sm border border-[#E2DBD0] shadow-sm space-y-2">
                <div className="flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#9A7A4E] shrink-0 mt-0.5" />
                  <h4 className="font-serif text-base font-bold text-[#1C1A17]">{faq.q}</h4>
                </div>
                <p className="text-xs text-[#5C5549] pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
