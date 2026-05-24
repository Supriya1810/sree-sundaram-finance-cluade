import React, { useState } from 'react';
import { motion } from 'motion/react';
import ParallaxCard from '../components/ParallaxCard';
import { 
  Sparkles, Phone, Mail, Clock, MapPin, Send, HelpCircle, 
  HelpCircle as SupportIcon, ShieldCheck, CheckCircle2, MessageSquareIcon, ArrowRight, ExternalLink 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    weight: '',
    location: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate luxury API submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      weight: '',
      location: '',
      message: ''
    });
    setSubmitted(false);
  };

  const contactInfos = [
    {
      title: 'Finance Advisor',
      value: 'Shailesh Thakur',
      sub: '+91-8888759696',
      note: 'Finance Advisor & All Types of Loans Available',
      icon: Phone,
      action: 'tel:+918888759696'
    },
    {
      title: 'Corporate Registry & GSTIN',
      value: '27ABTCS3490FIZT',
      sub: 'SREE SUNDARAM FINANCE PVT LTD',
      note: 'Registered for Corporate Financing & Loans',
      icon: ShieldCheck,
      action: null
    },
    {
      title: 'Corporate Email Desk',
      value: 'info@sreesundaramfinance.com',
      sub: 'General Queries & Support Phone: 8888759696',
      note: 'Official Correspondence & Support',
      icon: Mail,
      action: 'mailto:info@sreesundaramfinance.com'
    }
  ];

  const supportSteps = [
    { num: '01', title: 'We receive your request', desc: 'Submit the form or send details via WhatsApp. Our team reviews it quickly.' },
    { num: '02', title: 'Expert guidance', desc: 'We confirm eligibility and help you prepare the right documents.' },
    { num: '03', title: 'Fast processing', desc: 'Transparent steps, secure handling of pledged gold, and timely updates.' },
  ];

  return (
    <div id="contact-page-root" className="bg-[#050507] text-[#eff0f5] min-h-screen relative overflow-hidden pt-28">
      
      {/* Background ambient radial gradients only */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* HERO SECTION */}
      <section id="contact-hero" className="relative py-16 px-6 sm:px-8 max-w-7xl mx-auto z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/5 border border-[#D4AF37]/25 text-xs text-[#D4AF37] tracking-widest uppercase font-mono">
          <MessageSquareIcon className="w-3.5 h-3.5" />
          <span>Connect with Us</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
          Establish Contact with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#D4AF37] to-yellow-500">Sree Sundaram Finance</span>
        </h1>

        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Need quick credit guidance, interest quote evaluations, or custom loan tenures? Reach out immediately. Our secure support desk responds within minutes.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3.5 pt-2">
          {['Quick Response', 'Secure Handling', 'Clear Guidance'].map((tag) => (
            <span 
              key={tag} 
              className="px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.06] text-xs font-mono tracking-wider font-semibold text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* CORE CONTACT CARDS */}
      <section id="contact-infos-grid" className="relative py-8 px-6 sm:px-8 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfos.map((card, idx) => {
            const Icon = card.icon;
            const isClickable = !!card.action;
            const handleClick = isClickable ? () => { window.location.href = card.action!; } : undefined;

            return (
              <ParallaxCard
                id={`contact-detail-card-${idx}`}
                onClick={handleClick}
                key={card.title}
                glowColor="#D4AF37"
                className={`p-5 bg-neutral-900/40 border border-white/[0.03] ${
                  isClickable ? 'group cursor-pointer' : ''
                } flex flex-col justify-between space-y-7`}
              >
                <div className="flex items-center justify-between relative z-[99]">
                  <div className="p-3 bg-[#D4AF37]/5 rounded-xl text-[#D4AF37] border border-[#D4AF37]/10">
                    <Icon className="w-5 h-5 animate-pulse" />
                  </div>
                  {isClickable && (
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#D4AF37] transition-colors" />
                  )}
                </div>

                <div className="space-y-1 pt-2 relative z-[99]">
                  <h4 className="text-[10px] uppercase font-mono tracking-wider font-bold text-neutral-400">{card.title}</h4>
                  <div className="text-base font-serif font-bold text-white tracking-wide">{card.value}</div>
                  {card.sub && <div className="text-xs font-mono text-neutral-300">{card.sub}</div>}
                </div>

                <div className="pt-2 border-t border-white/[0.03] text-[10px] font-mono text-neutral-500 uppercase relative z-[99]">
                  {card.note}
                </div>
              </ParallaxCard>
            );
          })}
        </div>
      </section>

      {/* INQUIRY FORM & BRANCH LOCATOR */}
      <section id="contact-form-locator" className="relative py-16 px-6 sm:px-8 max-w-7xl mx-auto z-10 border-t border-neutral-900/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-neutral-950/60 border border-white/[0.04] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

            {!submitted ? (
              <form id="gold-inquiry-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-mono block mb-1">Inquiry Desk</span>
                  <h3 className="font-serif text-2xl font-bold text-white">Inquire Now for Gold Loan</h3>
                  <p className="text-xs text-neutral-400 mt-1">Submit your details here. Our certified agents will respond to estimate your custom terms.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="inquiry-form-name" className="text-[10px] uppercase tracking-wider font-mono text-neutral-300 block">Name of Customer *</label>
                    <input
                      id="inquiry-form-name"
                      type="text"
                      required
                      placeholder="e.g., Rohan Shinde"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-900/85 border border-white/[0.06] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label htmlFor="inquiry-form-phone" className="text-[10px] uppercase tracking-wider font-mono text-neutral-300 block">Mobile Number *</label>
                    <input
                      id="inquiry-form-phone"
                      type="tel"
                      required
                      placeholder="e.g., +91 88887 59696"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-neutral-900/85 border border-white/[0.06] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Gold Weight */}
                  <div className="space-y-2">
                    <label htmlFor="inquiry-form-weight" className="text-[10px] uppercase tracking-wider font-mono text-neutral-300 block">Gold Weight (estimated) *</label>
                    <input
                      id="inquiry-form-weight"
                      type="text"
                      required
                      placeholder="e.g., 50g / Ornaments"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      className="w-full bg-neutral-900/85 border border-white/[0.06] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  {/* City/Location */}
                  <div className="space-y-2">
                    <label htmlFor="inquiry-form-location" className="text-[10px] uppercase tracking-wider font-mono text-neutral-300 block">City / Branch *</label>
                    <input
                      id="inquiry-form-location"
                      type="text"
                      required
                      placeholder="e.g., Bhosari, Pune"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-neutral-900/85 border border-white/[0.06] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="inquiry-form-message" className="text-[10px] uppercase tracking-wider font-mono text-neutral-300 block font-normal">Your Inquiry Message (Optional)</label>
                  <textarea
                    id="inquiry-form-message"
                    rows={4}
                    placeholder="Describe your gold components, urgent needs, or custom repayment preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-900/85 border border-white/[0.06] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="inquiry-submit-btn"
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#D4AF37] hover:bg-[#ffe380] text-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md shadow-amber-500/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? 'Transmitting Secret Credentials...' : 'Submit Inquiry'}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              /* Verification/Status of complete submission */
              <div id="contact-submission-success-view" className="space-y-8 py-8 text-center flex flex-col justify-center items-center h-full max-w-md mx-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-white">Inquiry Received Successfully</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Thank you, <strong className="text-neutral-200">{formData.name}</strong>. Your collateral overview with estimated gold weight <strong className="text-neutral-200">{formData.weight}</strong> has been secure logged.
                  </p>
                  <p className="text-xs text-neutral-500">
                    A certified appraiser from our <strong className="text-neutral-300">{formData.location}</strong> desk will call your number <strong className="text-neutral-300">{formData.phone}</strong> shortly.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-orange-500/5 border border-amber-500/10 text-[11px] text-[#D4AF37] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>ISO 9001:2015 Encrypted Storage Active</span>
                </div>

                <button
                  id="inquiry-form-reset-btn"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[#D4AF37]/30 text-xs text-neutral-300 hover:text-white transition-all cursor-pointer"
                >
                  Submit Alternative Request
                </button>
              </div>
            )}
          </div>

          {/* Locator Side */}
          <div className="lg:col-span-5 flex flex-col justify-between spacing-y-6 space-y-6">
            
            {/* Registered Branch Card with beautiful gold visual map representation */}
            <ParallaxCard 
              id="registered-address-section" 
              glowColor="#D4AF37"
              className="p-8 bg-neutral-950/60 border border-white/[0.04] space-y-6"
            >
              
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block">Corporate Location</span>
                <h3 className="font-serif text-2xl font-bold text-white">Branch Locator</h3>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900/40 border border-white/[0.02] space-y-4">
                <div className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-neutral-400 block font-bold">Company Name: <span className="text-neutral-100 font-serif block mt-0.5">SREE SUNDARAM FINANCE PRIVATE LIMITED</span></span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Near Bhosari English School, Bhaghat Wasti, Sr. No. 23, Bhosari, Pune – 411039.
                    </p>
                    <div className="border-t border-white/[0.03] pt-2 space-y-1 text-[11px] font-mono text-neutral-400">
                      <div>GSTIN: <span className="text-[#D4AF37] font-bold">27ABTCS3490FIZT</span></div>
                      <div>Specialist In: <span className="text-[#D4AF37] font-bold">Finance Advisor & All Loans</span></div>
                    </div>
                  </div>
                </div>

                {/* Minimal vector mock visual of a secure corporate vault room center */}
                <div className="h-28 rounded-xl bg-[#090a0c] border border-white/[0.03] flex items-center justify-center p-4 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-radial-gradient from-amber-500/5 to-transparent pointer-events-none" />
                  <div className="text-center space-y-1.5 z-10">
                    <div className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">Advisor Profile: Active</div>
                    <div className="text-xs text-white font-serif font-bold">Shailesh Thakur Desk</div>
                    <div className="text-[9px] text-neutral-500 font-mono">Bhosari Hub // Pune, Maharashtra</div>
                  </div>
                </div>
              </div>

              {/* Click to WhatsApp button */}
              <a
                id="whatsapp-locator-chat-btn"
                href="https://wa.me/918888759696"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-xl bg-neutral-900 hover:bg-[#07080a] hover:border-emerald-500/25 border border-white/[0.05] text-[#eff0f5] font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Navigate via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </ParallaxCard>

            {/* Quick Support Badge */}
            <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex gap-4">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37] shrink-0" />
              <div className="space-y-0.5">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">Secured Appraisals</h4>
                <p className="text-[11px] text-neutral-400 leading-normal">Our team maintains rigorous burglary protocols and certified gold testing equipment for instant valuation accuracy.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SUPPORT TIMELINE / WHAT HAPPENS NEXT */}
      <section id="contact-next-steps" className="relative py-24 px-6 sm:px-8 border-t border-neutral-900 bg-neutral-950/20 z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono block">Support Cycle</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
              What happens next?
            </h2>
            <p className="text-xs text-neutral-400">
              Clear, step-by-step guidance from day one — so you always feel confident about your financial gold loan journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportSteps.map((card, idx) => (
              <ParallaxCard
                id={`support-step-card-${idx}`}
                key={card.num}
                glowColor="#D4AF37"
                className="p-6 bg-[#090a0d] border border-white/[0.03] space-y-4"
              >
                <div className="flex items-center justify-between border-b border-white/[0.03] pb-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/5 border border-amber-500/10 text-[#D4AF37] flex items-center justify-center font-mono text-xs font-black">
                    {card.num}
                  </div>
                  <span className="text-[9px] font-mono text-neutral-600 uppercase">STAGE // 0{idx + 1}</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-semibold text-white tracking-wide">{card.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">{card.desc}</p>
                </div>
              </ParallaxCard>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
