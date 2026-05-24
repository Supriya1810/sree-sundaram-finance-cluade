import React, { useState } from 'react';
import { motion } from 'motion/react';
import ParallaxCard from '../components/ParallaxCard';
import { 
  Sparkles, Shield, Clock, Landmark, Gift, Heart, Users,
  CheckCircle, ArrowRight, BookOpen, Star, HelpCircle, CheckCircle2, ShieldCheck, UserCheck 
} from 'lucide-react';

export default function About() {
  const [activeLanguage, setActiveLanguage] = useState<'english' | 'marathi'>('english');

  const tags = ['Secure Storage', 'Transparent Process', 'Fast Disbursal'];

  const whyChooseFeatureCards = [
    { id: 'why-card-1', title: 'Best Value for Your Gold', desc: 'Our trained experts ensure accurate valuation so you get the highest possible rate per gram for your gold.' },
    { id: 'why-card-2', title: 'Instant Processing', desc: 'Loan applications are processed swiftly with minimal paperwork, ensuring funds are available when you need them.' },
    { id: 'why-card-3', title: 'High Loan Amount', desc: 'We guarantee better loan amounts for your gold at all our branches, with disbursal completed within minutes.' },
    { id: 'why-card-4', title: 'Customer-Centric Service', desc: 'Timely reminders for interest payments to help you stay on track without stress.' },
    { id: 'why-card-5', title: 'Top-Notch Security', desc: 'All branches are equipped with advanced burglary protection and 24×7 CCTV monitoring for your peace of mind.' },
    { id: 'why-card-6', title: 'Experienced Team', desc: 'A dynamic mix of energetic young professionals and experienced experts deliver outstanding service at every branch.' },
    { id: 'why-card-7', title: 'Flexible Repayment Options', desc: 'We provide multiple repayment modes that suit your needs and lifestyle.' },
    { id: 'why-card-8', title: 'Transparent & Fair Service', desc: 'Clarity, fairness, and honesty at every step—so you always know what to expect.' },
  ];

  const journeySteps = [
    { step: '01', title: 'Valuation', text: 'Expert assessment of your jewellery to give you the best and most transparent value.' },
    { step: '02', title: 'Quick Documentation', text: 'Minimal documents and clear guidance—no confusing steps, no hidden complexity.' },
    { step: '03', title: 'Instant Processing', text: 'Swift processing with transparent communication so you feel confident throughout.' },
    { step: '04', title: 'Secure Storage', text: 'Pledged gold is kept safely with systems and controls built for customer trust.' },
  ];

  const valueAims = [
    { title: 'Business loans secured against gold jewellery', desc: 'Fueling raw entrepreneurship and small business scaling with immediate liquid reserves.' },
    { title: 'Personal gold loans', desc: 'Meeting personal medical, education, travel or urgent domestic liquidity needs.' },
    { title: 'Fast, secure and dependable loan solutions', desc: 'Combining certified logistics and gold storage security with elite banking speed.' },
    { title: 'Transparent process & competitive interest rates', desc: 'Zero hidden fees, transparent evaluation calculators, and competitive interest charges.' },
    { title: 'State-of-the-art security for pledged gold', desc: 'Burglary protection, heavy-duty physical locking mechanism vaults, and active camera streaming.' }
  ];

  const marathiPoints = [
    'नैतिकता आणि पारदर्शकता (Ethics and Transparency)',
    'ग्राहकांच्या समाधानासाठी कटिबद्धता (Commitment to Customer Satisfaction)',
    'जलद, सुरक्षित आणि विश्वासार्ह सेवा (Fast, Secure and Reliable Service)',
    'स्पर्धात्मक व्याज दर आणि पारदर्शक प्रक्रिया (Competitive Interest Rates and Process)',
    'तारण ठेवलेल्या सोन्याचे सुरक्षित संरक्षण (Secure Protection of Pledged Gold)'
  ];

  const valueCardsData = [
    { title: 'Customer is King', text: 'We believe every customer deserves genuine respect, care, and attention. We strive to create lasting relationships and consistently surpass expectations.', icon: Heart },
    { title: 'Sense of Responsibility', text: 'We aim for decisions that foster shared progress and trust. Our actions build a better future for society beyond just business goals.', icon: ShieldCheck },
    { title: 'Power of Our People', text: 'We believe in diversity and that our people are our strength. Every employee is empowered to grow and thrive together.', icon: Users }
  ];

  return (
    <div id="about-page-root" className="bg-[#050507] text-[#eff0f5] min-h-screen relative overflow-hidden pt-28">
      
      {/* Visual Ambient glow gradients only */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* HEADER SECTION / TITLE HERO */}
      <section id="about-hero-section" className="relative py-16 px-6 sm:px-8 max-w-7xl mx-auto z-10">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/5 border border-[#D4AF37]/20 text-xs text-[#D4AF37] tracking-widest uppercase font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Discover Sree Sundaram Finance</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Trusted Partner for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#D4AF37] to-yellow-500">Gold Loans</span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Establishing absolute integrity in asset-backed security. Sree Sundaram Finance Private Limited provides elite, secure credit terms across Maharashtra and greater Indian segments.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3.5 pt-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.06] text-xs font-mono tracking-wider font-semibold text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US SECTION WITH IN-DEPTH STORY */}
      <section id="about-why-choose-us" className="relative py-20 px-6 sm:px-8 max-w-7xl mx-auto z-10 border-t border-neutral-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative content block */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase">Why Choose Us?</span>
            <h2 className="font-serif text-3xl font-extrabold text-white">
              Making gold loans simple, fast, and secure for every customer segment
            </h2>
            <div className="h-[2px] w-12 bg-[#D4AF37]/45" />
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Sree Sundaram Finance Private Limited provides customized assets credit to individuals across various segments of society — including small business owners, entrepreneurs, farmers, and retailers. We offer attractive interest rates, minimal documentation, and instant disbursal to make the borrowing process simple and accessible for all.
            </p>
          </div>

          {/* Feature Grid of 8 core cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 py-2">
            {whyChooseFeatureCards.map((card, idx) => (
              <ParallaxCard
                id={`about-feature-card-${idx}`}
                key={card.id}
                glowColor="#D4AF37"
                className="p-6 cursor-pointer bg-[#090a0d] border border-white/[0.03] hover:border-[#D4AF37]/10 space-y-3 shadow-lg"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-amber-500/5 text-[#D4AF37] flex items-center justify-center font-mono text-xs font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-xs uppercase font-mono tracking-wider font-extrabold text-white">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed">
                  {card.desc}
                </p>
              </ParallaxCard>
            ))}
          </div>

        </div>
      </section>

      {/* GOLD LOAN JOURNEY TIMELINE */}
      <section id="about-loan-journey" className="relative py-24 px-6 sm:px-8 border-t border-neutral-900 bg-neutral-950/20 z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono block">GOLD LOAN JOURNEY // SYSTEM FLOW</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-white">
              Fast, Transparent, Securized
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              A modern workflow process designed for speed and clarity — so you always know what to expect at every step of your gold valuation cycle.
            </p>
          </div>

          {/* Linear Timeline card system */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            {/* Horizontal joiner line in desktop */}
            <div className="hidden md:block absolute top-[52px] left-8 right-8 h-[1px] bg-gradient-to-r from-neutral-800 via-[#D4AF37]/20 to-neutral-800 z-0" />

            {journeySteps.map((step, idx) => (
              <ParallaxCard 
                id={`journey-flow-step-${idx}`}
                key={step.step} 
                glowColor="#D4AF37"
                className="relative p-6 bg-neutral-900/40 border border-white/[0.02] hover:border-[#D4AF37]/15 space-y-4 z-10"
              >
                <div className="flex items-center justify-between">
                  {/* Number bubble */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-900 to-black text-[#D4AF37] border border-[#D4AF37]/25 flex items-center justify-center font-mono font-bold text-sm shadow">
                    {step.step}
                  </div>
                  <span className="text-[9px] font-mono text-neutral-600">PHASE 0{idx + 1}</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif text-base font-bold text-white tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </ParallaxCard>
            ))}
          </div>

        </div>
      </section>

      {/* CORE VALUES / MULTILANGUAGE MARATHI & ENGLISH SEGMENT */}
      <section id="about-core-values" className="relative py-24 px-6 sm:px-8 border-t border-neutral-900 bg-gradient-to-b from-transparent to-[#07080a] z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Values Grid / Commitment */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono font-extrabold block">Our Values</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
                  Our Values and Commitment to Customers
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
                  At Sree Sundaram Finance Private Limited, we are driven by strong ethical values, absolute transparency, and an unwavering commitment to customer trust and satisfaction.
                </p>
              </div>

              {/* Listed Targets */}
              <div className="space-y-4 pt-2">
                {valueAims.map((item, idx) => (
                  <div id={`aim-point-${idx}`} key={idx} className="flex gap-4 items-start pb-4 border-b border-neutral-900 last:border-0">
                    <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs uppercase font-mono tracking-wider font-extrabold text-neutral-200">{item.title}</h4>
                      <p className="text-xs text-neutral-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Multi-Language Block with Bilingual Selector */}
            <div id="marathi-values-panel" className="lg:col-span-5 p-1 rounded-3xl bg-gradient-to-b from-amber-500/10 to-transparent">
              <div className="p-8 rounded-[22px] bg-neutral-950/90 border border-white/[0.04] space-y-6">
                
                {/* Language Toggler bar */}
                <div className="flex items-center justify-between border-b border-neutral-900 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Regional Manifesto</span>
                    <h3 className="font-serif text-sm font-bold text-white mt-0.5">आमची मूल्ये / Our Values</h3>
                  </div>
                  <div className="flex bg-neutral-900 p-1 rounded-lg border border-neutral-800 text-[10px] font-mono">
                    <button
                      id="lang-selector-btn-eng"
                      onClick={() => setActiveLanguage('english')}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        activeLanguage === 'english' ? 'bg-[#D4AF37] text-black font-semibold' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      ENG
                    </button>
                    <button
                      id="lang-selector-btn-mar"
                      onClick={() => setActiveLanguage('marathi')}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        activeLanguage === 'marathi' ? 'bg-[#D4AF37] text-black font-semibold' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      मराठी
                    </button>
                  </div>
                </div>

                {/* Multilingual Contents */}
                {activeLanguage === 'marathi' ? (
                  <div className="space-y-5">
                    <h4 className="font-serif text-lg text-[#D4AF37] font-bold leading-relaxed">
                      आमची मूल्ये आणि ग्राहकांचा विश्वास
                    </h4>
                    <ul className="space-y-3.5">
                      {marathiPoints.map((pt, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start text-xs text-neutral-300 leading-relaxed font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="p-3 bg-[#D4AF37]/5 rounded-xl border border-[#D4AF37]/10 text-[11px] text-[#D4AF37] text-center font-sans">
                      Sree Sundaram Finance - विश्वासार्हतेचे सुवर्ण नाव!
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5">
                    <h4 className="font-serif text-lg text-[#D4AF37] font-bold leading-relaxed">
                      Our Ethics and Customer Trust
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Our core operations reflect a commitment to regional welfare and ethical business guidelines. Every valuation is transparent and every metric is fully verified under supervision.
                    </p>
                    <ul className="space-y-3.5">
                      <li className="flex gap-2.5 items-start text-xs text-neutral-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                        <span><strong>Ethics & Quality:</strong> Transparent policies across evaluation protocols.</span>
                      </li>
                      <li className="flex gap-2.5 items-start text-xs text-neutral-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                        <span><strong>Burglary Defense:</strong> Standard verified custody and banking vaults protection.</span>
                      </li>
                      <li className="flex gap-2.5 items-start text-xs text-neutral-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                        <span><strong>Local Integration:</strong> Complete Marathi documentation and local support structure.</span>
                      </li>
                    </ul>
                  </div>
                )}

              </div>
            </div>

          </div>

          {/* Three Key Pillars: Customer is King, Sense of Responsibility, Power of Our People */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 mt-16 border-t border-neutral-900">
            {valueCardsData.map((vcard, idx) => {
              const Icon = vcard.icon;
              return (
                <ParallaxCard
                  id={`value-pillar-card-${idx}`}
                  key={vcard.title}
                  glowColor="#D4AF37"
                  className="p-8 bg-neutral-900/20 border border-white/[0.02] hover:border-[#D4AF37]/10 space-y-4"
                >
                  <div className="p-3 w-fit bg-amber-500/5 border border-amber-500/10 rounded-xl text-[#D4AF37]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white tracking-wide">{vcard.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{vcard.text}</p>
                </ParallaxCard>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
