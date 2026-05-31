import React, { useState } from 'react';
import { motion } from 'motion/react';
import ParallaxCard from '../components/ParallaxCard';
import { 
  Sparkles, Phone, Mail, Clock, MapPin, Send, HelpCircle, 
  ShieldCheck, CheckCircle2, MessageSquareIcon, ArrowRight, ExternalLink 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
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
      email: '',
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
    <div id="contact-page-root" className="bg-transparent text-lux-text-main min-h-screen relative overflow-hidden pt-28">
      
      {/* Background ambient radial gradients only */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-lux-gold-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-lux-border/5 rounded-full blur-[140px] pointer-events-none" />

      {/* HERO SECTION */}
      <section id="contact-hero" className="relative py-12 md:py-16 lg:py-20 px-6 sm:px-8 max-w-7xl mx-auto z-10 text-center space-y-6 animate-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lux-gold-primary/5 border border-lux-border text-xs text-lux-gold-primary tracking-widest uppercase font-mono">
          <MessageSquareIcon className="w-3.5 h-3.5 text-lux-gold-primary" />
          <span>Connect with Us</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
          Establish Contact with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-lux-gold-primary to-lux-gold-primary">Sree Sundaram Finance</span>
        </h1>

        <p className="text-lux-text-sec text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Need quick credit guidance, interest quote evaluations, or custom loan tenures? Reach out immediately. Our secure support desk responds within minutes.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3.5 pt-2">
          {['Quick Response', 'Secure Handling', 'Clear Guidance'].map((tag) => (
            <span 
              key={tag} 
              className="px-4 py-1.5 rounded-full bg-lux-bg-secondary/90 border border-lux-border text-xs font-mono tracking-wider font-semibold text-white hover:border-lux-gold-primary/45 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* CORE CONTACT CARDS */}
      <section id="contact-infos-grid" className="relative py-6 px-6 sm:px-8 max-w-7xl mx-auto z-10">
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
                className={`p-6 sm:p-7 md:p-8 bg-lux-bg-secondary/90 border border-lux-border hover:border-lux-gold-primary/40 ${
                  isClickable ? 'group cursor-pointer' : ''
                } flex flex-col justify-between space-y-8`}
              >
                {/* Icon block with z-99 and margin constraints */}
                <div className="flex items-center justify-between relative z-[99]">
                  <div className="p-3 bg-lux-gold-primary/10 rounded-xl text-lux-gold-primary border border-lux-border">
                    <Icon className="w-5 h-5" />
                  </div>
                  {isClickable && (
                    <ExternalLink className="w-3.5 h-3.5 text-lux-text-muted group-hover:text-lux-gold-primary transition-colors" />
                  )}
                </div>

                {/* Explicitly padded distance/gap between the icon and the text block */}
                <div className="space-y-2 pt-4 relative z-[99]">
                  <h4 className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-lux-text-muted">{card.title}</h4>
                  <div className="text-lg font-serif font-bold text-white tracking-wide leading-snug">{card.value}</div>
                  {card.sub && <div className="text-xs font-mono text-lux-gold-primary/90 font-medium">{card.sub}</div>}
                </div>

                {/* Footer notes under text with top divider line */}
                <div className="pt-3 border-t border-lux-border text-[10px] font-mono text-lux-text-muted uppercase relative z-[99]">
                  {card.note}
                </div>
              </ParallaxCard>
            );
          })}
        </div>
      </section>

      {/* INQUIRY FORM & BRANCH LOCATOR */}
      <section id="contact-form-locator" className="relative py-12 md:py-16 lg:py-20 px-6 sm:px-8 max-w-7xl mx-auto z-10 border-t border-lux-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-mono text-lux-gold-primary uppercase tracking-widest block font-bold">Lending & Advisory Desk</span>
                <h3 className="font-serif text-3xl font-black text-white leading-tight">Get in Touch Directly</h3>
                <p className="text-lux-text-sec text-xs leading-relaxed">
                  Connect with our senior partners for custom loan consultations, instant evaluations, or general service questions.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Phone item */}
                <div className="p-4 rounded-2xl bg-lux-bg-secondary border border-lux-border/40 hover:border-lux-gold-primary/20 transition-all flex gap-4 items-start group cursor-pointer" onClick={() => window.location.href = 'tel:+918888759696'}>
                  <div className="p-3 bg-lux-gold-primary/5 rounded-xl text-lux-gold-primary border border-lux-border/20 group-hover:scale-105 transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#8E9196] uppercase tracking-wider block">Senior Finance Advisor</span>
                    <div className="text-base font-bold text-white group-hover:text-lux-gold-primary transition-colors">+91-8888759696</div>
                    <div className="text-[10px] text-neutral-400 font-mono">Shailesh Thakur Desk</div>
                  </div>
                </div>

                {/* Email item */}
                <div className="p-4 rounded-2xl bg-lux-bg-secondary border border-lux-border/40 hover:border-lux-gold-primary/20 transition-all flex gap-4 items-start group cursor-pointer" onClick={() => window.location.href = 'mailto:info@sreesundaramfinance.com'}>
                  <div className="p-3 bg-lux-gold-primary/5 rounded-xl text-lux-gold-primary border border-lux-border/20 group-hover:scale-105 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#8E9196] uppercase tracking-wider block">Corporate Email Desk</span>
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-lux-gold-primary transition-colors">info@sreesundaramfinance.com</div>
                    <div className="text-[10px] text-neutral-400 font-mono">Official Corporate Support</div>
                  </div>
                </div>

                {/* Address item */}
                <div className="p-4 rounded-2xl bg-lux-bg-secondary border border-lux-border/40 hover:border-lux-gold-primary/20 transition-all flex gap-4 items-start group">
                  <div className="p-3 bg-lux-gold-primary/5 rounded-xl text-lux-gold-primary border border-lux-border/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#8E9196] uppercase tracking-wider block">Office Location</span>
                    <div className="text-xs sm:text-sm font-bold text-white leading-relaxed">Near Bhosari English School, Bhaghat Wasti, Sr. No. 23, Bhosari, Pune – 411039.</div>
                    <div className="text-[10px] text-neutral-400 font-mono mt-1">SREE SUNDARAM FINANCE PVT LTD</div>
                  </div>
                </div>

                {/* Hours item */}
                <div className="p-4 rounded-2xl bg-lux-bg-secondary border border-lux-border/40 hover:border-lux-gold-primary/20 transition-all flex gap-4 items-start group">
                  <div className="p-3 bg-lux-gold-primary/5 rounded-xl text-lux-gold-primary border border-lux-border/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#8E9196] uppercase tracking-wider block">Business Hours</span>
                    <div className="text-sm font-bold text-white">Monday – Saturday</div>
                    <div className="text-xs text-lux-gold-primary font-mono mt-0.5">9:30 AM – 6:30 PM <span className="text-neutral-500">(Sunday Closed)</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Support Badge */}
            <div className="p-4 rounded-2xl bg-[#D4AF37]/5 border border-lux-border flex gap-4">
              <ShieldCheck className="w-6 h-6 text-lux-gold-primary shrink-0 animate-pulse" />
              <div className="space-y-0.5">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold">Secured Appraisals</h4>
                <p className="text-[11px] text-lux-text-sec leading-normal">Our team maintains rigorous safety protocols and certified gold testing equipment for instant valuation accuracy.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7 bg-lux-bg-secondary border border-lux-border rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lux-gold-primary/[0.04] rounded-full blur-3xl pointer-events-none" />

            {!submitted ? (
              <form id="gold-inquiry-form" onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-lux-gold-primary font-mono block mb-1 font-bold">Inquiry Desk</span>
                  <h3 className="font-serif text-2xl font-bold text-white">Send an Advisory Request</h3>
                  <p className="text-xs text-lux-text-sec mt-1">Submit your details below. Sree Sundaram Private Limited advisors will respond with tailored estimations.</p>
                </div>

                <div className="space-y-4">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="inquiry-form-name" className="text-[10px] uppercase tracking-wider font-mono text-lux-text-sec block font-bold">Full Name *</label>
                    <input
                      id="inquiry-form-name"
                      type="text"
                      required
                      placeholder="e.g., Rohan Shinde"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#121418]/65 border border-lux-border rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-lux-gold-primary focus:ring-1 focus:ring-lux-gold-primary transition-all duration-300"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Input */}
                    <div className="space-y-2">
                      <label htmlFor="inquiry-form-phone" className="text-[10px] uppercase tracking-wider font-mono text-lux-text-sec block font-bold">Phone Number *</label>
                      <input
                        id="inquiry-form-phone"
                        type="tel"
                        required
                        placeholder="e.g., +91 88887 59696"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#121418]/65 border border-lux-border rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-lux-gold-primary focus:ring-1 focus:ring-lux-gold-primary transition-all duration-300"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label htmlFor="inquiry-form-email" className="text-[10px] uppercase tracking-wider font-mono text-lux-text-sec block font-bold">Email Address *</label>
                      <input
                        id="inquiry-form-email"
                        type="email"
                        required
                        placeholder="e.g., rohan.shinde@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#121418]/65 border border-lux-border rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-lux-gold-primary focus:ring-1 focus:ring-lux-gold-primary transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="inquiry-form-message" className="text-[10px] uppercase tracking-wider font-mono text-lux-text-sec block font-bold">Message *</label>
                    <textarea
                      id="inquiry-form-message"
                      rows={4}
                      required
                      placeholder="Describe your gold components, credit needs, or desired repayment schedules..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#121418]/65 border border-lux-border rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-lux-gold-primary focus:ring-1 focus:ring-lux-gold-primary transition-all duration-300 resize-none h-24"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  id="inquiry-submit-btn"
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-lux-gold-primary hover:bg-lux-gold-primary/90 text-black font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-md shadow-black/45 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? 'Transmitting Secret Credentials...' : 'Get In Touch'}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              /* Verification/Status of complete submission */
              <div id="contact-submission-success-view" className="space-y-8 py-8 text-center flex flex-col justify-center items-center h-full max-w-md mx-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8 opacity-90 animate-bounce" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-white">Request Received Successfully</h3>
                  <p className="text-xs text-lux-text-sec leading-relaxed">
                    Thank you, <strong className="text-lux-gold-primary">{formData.name}</strong>. Your message has been safely logged with our team.
                  </p>
                  <p className="text-xs text-lux-text-muted">
                    A certified adviser from our corporate Bhosari desk will call your number <strong className="text-white">{formData.phone}</strong> or email you at <strong className="text-white">{formData.email}</strong> shortly.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-lux-gold-primary/10 border border-lux-border text-[11px] text-lux-gold-primary flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-lux-gold-primary" />
                  <span className="font-bold">ISO 9001:2015 Encrypted Storage Active</span>
                </div>

                <button
                  id="inquiry-form-reset-btn"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-lux-bg-primary border border-lux-border hover:border-lux-gold-primary/40 text-xs text-lux-text-sec hover:text-white transition-all cursor-pointer"
                >
                  Submit Alternative Request
                </button>
              </div>
            )}
          </div>

          {/* Locator Side */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            
            {/* Registered Branch Card with beautiful gold representation */}
            <ParallaxCard 
              id="registered-address-section" 
              glowColor="#D4AF37"
              className="p-8 bg-lux-bg-secondary border border-lux-border space-y-6 flex flex-col h-full justify-between"
            >
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-lux-gold-primary uppercase tracking-widest block font-bold">Corporate Location</span>
                  <h3 className="font-serif text-2xl font-bold text-white">Branch Locator</h3>
                </div>

                <div className="p-5 rounded-2xl bg-lux-bg-primary/40 border border-lux-border space-y-4">
                  <div className="flex gap-3 items-start">
                    <MapPin className="w-5 h-5 text-lux-gold-primary shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <span className="text-xs font-mono text-lux-text-sec block font-bold">Company Name: <span className="text-white font-serif block mt-0.5 font-black text-sm text-lux-gold-primary">SREE SUNDARAM FINANCE PRIVATE LIMITED</span></span>
                      <p className="text-xs text-lux-text-sec leading-relaxed">
                        Near Bhosari English School, Bhaghat Wasti, Sr. No. 23, Bhosari, Pune – 411039.
                      </p>
                      <div className="border-t border-lux-border pt-2 space-y-1 text-[11px] font-mono text-lux-text-muted">
                        <div>GSTIN: <span className="text-lux-gold-primary font-extrabold">27ABTCS3490FIZT</span></div>
                        <div>Specialist In: <span className="text-lux-gold-primary font-extrabold">Finance Advisor & All Loans</span></div>
                      </div>
                    </div>
                  </div>

                  {/* Secure corporate vault room segment */}
                  <div className="h-28 rounded-xl bg-black/45 border border-lux-border flex items-center justify-center p-4 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-radial-gradient from-lux-gold-primary/10 to-transparent pointer-events-none" />
                    <div className="text-center space-y-1.5 z-10">
                      <div className="text-[10px] font-mono tracking-widest text-lux-gold-primary uppercase font-bold">Advisor Profile: Active</div>
                      <div className="text-xs text-white font-serif font-black">Shailesh Thakur Desk</div>
                      <div className="text-[9px] text-lux-text-muted font-mono">Bhosari Hub // Pune, Maharashtra</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Click to WhatsApp button */}
              <a
                id="whatsapp-locator-chat-btn"
                href="https://wa.me/918888759696"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-xl bg-lux-bg-primary hover:bg-lux-bg-primary/50 hover:border-lux-gold-primary/44 border border-lux-border text-white font-extrabold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-black/80"
              >
                <span>Navigate via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </ParallaxCard>

            {/* Quick Support Badge */}
            <div className="p-4 rounded-2xl bg-lux-gold-primary/5 border border-lux-border flex gap-4">
              <ShieldCheck className="w-6 h-6 text-lux-gold-primary shrink-0" />
              <div className="space-y-0.5">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-lux-gold-primary font-bold">Secured Appraisals</h4>
                <p className="text-[11px] text-lux-text-sec leading-normal">Our team maintains rigorous burglary protocols and certified gold testing equipment for instant valuation accuracy.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SUPPORT TIMELINE / WHAT HAPPENS NEXT */}
      <section id="contact-next-steps" className="relative py-12 md:py-16 lg:py-20 px-6 sm:px-8 border-t border-lux-border bg-lux-bg-secondary/30 z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-lux-gold-primary font-mono block">Support Cycle</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
              What happens next?
            </h2>
            <p className="text-xs text-lux-text-sec">
              Clear, step-by-step guidance from day one — so you always feel confident about your financial gold loan journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportSteps.map((card, idx) => (
              <ParallaxCard
                id={`support-step-card-${idx}`}
                key={card.num}
                glowColor="#D4AF37"
                className="p-6 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-lux-border pb-3">
                  <div className="w-8 h-8 rounded-full bg-lux-gold-primary/10 border border-lux-border text-lux-gold-primary flex items-center justify-center font-mono text-xs font-black">
                    {card.num}
                  </div>
                  <span className="text-[9px] font-mono text-neutral-500 uppercase">STAGE // 0{idx + 1}</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-semibold text-white tracking-wide">{card.title}</h4>
                  <p className="text-xs text-lux-text-sec leading-relaxed">{card.desc}</p>
                </div>
              </ParallaxCard>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
