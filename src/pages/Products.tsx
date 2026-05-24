import React from 'react';
import { motion } from 'motion/react';
import ParallaxCard from '../components/ParallaxCard';
import { 
  Sparkles, Award, Shield, FileText, Settings2, CalendarDays, Coins, 
  ChevronRight, Landmark, Lock, HelpCircle, CheckCircle2 
} from 'lucide-react';
import LoanCalculator from '../components/LoanCalculator';

export default function Products() {
  
  const featuresList = [
    { title: 'Collateral Spec', value: 'Gold Jewellery (18–24 Karat)', desc: 'Only ornamentations are processed. Gold bullions or bars are not accepted.' },
    { title: 'Loan Volume', value: 'Up to 90% LTV', desc: "Max loan amount maps up to 90% of the gold's current active bullion valuation." },
    { title: 'Tenure Duration', value: '3 – 24 Months', desc: 'Shorter terms with open-ended rollover extension option policies.' },
    { title: 'Interest Rates', value: '7% – 15% P.A.', desc: 'Competitive annual rates representing standard unsecured credit options.' },
    { title: 'Repayment Plans', value: 'EMI / Bullet / Interest-only', desc: 'Flexible options that match standard farming or small-business harvests.' },
    { title: 'Processing Term', value: 'Within Minutes', desc: 'Direct in-branch cash or bank wire transfers right after validation.' },
    { title: 'Documentation', value: 'KYC & Residence Only', desc: 'Requires standard ID and proof of residence copy. No complex payroll auditing.' },
    { title: 'Security Standard', value: 'Complete Storage Safety', desc: 'Ornaments stored in advanced fire-proof, burglary-proof physical bank safes.' },
  ];

  const eligibilityRequirements = [
    { label: 'Borrower Age Limits', value: 'Between 18 – 70 Years', desc: 'Open to indian young professionals, entrepreneurs, and retired seniors.' },
    { label: 'Gold Specification', value: 'Min. 18K purity (Jewellery)', desc: 'Assets must be personal gold ornaments. Core raw gold bars are ineligible.' },
    { label: 'Income Attestation', value: 'Proof not required', desc: 'Borrowing power scales primarily with collateral value than payroll history.' },
  ];

  const benefits = [
    { title: 'Quick Disbursal', text: 'Approval cycle finishes in as quick as 15 minutes, ensuring instant capital for emergency liquidity.' },
    { title: 'Low Interest Rates', text: 'Secured collateral allows us to offer premium rates beginning at just 7%.' },
    { title: 'Retain Gold Ownership', text: 'Your jewellery is fully protected. Standard weight, karat and form parameters are locked.' },
    { title: 'Flexible Repayment Options', text: 'Customize interest frequencies to prevent cash flow strain on small enterprise retailers.' },
  ];

  const journeyCards = [
    { num: '01', action: 'Apply', text: 'Share your details and submit the required documents in minutes.' },
    { num: '02', action: 'Valuation', text: 'Experts evaluate your jewellery with transparent assessment.' },
    { num: '03', action: 'Disbursal', text: 'Get your loan quickly with clear communication at every stage.' },
    { num: '04', action: 'Secure Storage', text: 'Your pledged gold is stored safely until repayment.' },
  ];

  return (
    <div id="products-page-root" className="bg-[#050507] text-[#eff0f5] min-h-screen relative overflow-hidden pt-28">
      
      {/* Visual background atmospheric elements */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* HERO SECTION */}
      <section id="products-hero" className="relative py-16 px-6 sm:px-8 max-w-7xl mx-auto z-10">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/5 border border-[#D4AF37]/20 text-xs text-[#D4AF37] tracking-widest uppercase font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>Premium Assets Credit</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Our Products & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#D4AF37] to-yellow-500">Services</span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Secure your financial needs with the most trusted gold loan provider in India. Get immediate access to liquid funds while keeping your precious ornaments completely secure.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3.5 pt-2">
            {['Loan up to 90%', 'Transparent Rate', 'Fast Disbursal'].map((tag) => (
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

      {/* DETAILED GOLD LOAN PRODUCT OVERVIEW SECTION */}
      <section id="products-deep-detail" className="relative py-16 px-6 sm:px-8 max-w-7xl mx-auto z-10 border-t border-neutral-900 bg-neutral-950/25">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed Narratives */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono block">Product Breakdown</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              Gold Loan Product
            </h2>
            <div className="h-[2px] w-12 bg-[#D4AF37]/40" />

            <div className="space-y-4 text-xs sm:text-sm text-neutral-400 leading-relaxed">
              <p>
                <strong>Secure your financial needs</strong> with fast and trusted gold loan services from Sree Sundaram Finance Private Limited.
              </p>
              <p>
                A gold loan is a secured loan customers can avail from Sree Sundaram Finance Private Limited using gold jewellery as collateral. It is the easiest and fastest way to meet your urgent financial needs without dealing with lengthy banking protocols or compound penalties.
              </p>
              <p>
                We offer quick loan disbursals, minimal documentation, and competitive interest rates — ensuring complete customer satisfaction. Our gold loans start from <strong>₹5,000 to ₹50 lakh</strong>, making us a highly secure and reliable financial choice across India.
              </p>
            </div>
          </div>

          {/* Interactive Calculator Embed */}
          <div className="lg:col-span-7">
            <LoanCalculator />
          </div>

        </div>
      </section>

      {/* CORE SPECIFICATIONS / KEY FEATURES OF GOLD LOAN */}
      <section id="products-spec-grid" className="relative py-24 px-6 sm:px-8 max-w-7xl mx-auto z-10 border-t border-neutral-900">
        <div className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest">Technical Specifications</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
              Key Features of Gold Loan
            </h2>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Sree Sundaram Finance Private Limited operates under robust ethical guidelines with fully transparent lending matrices. Review our simple collateral metrics:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuresList.map((card, idx) => (
              <ParallaxCard
                id={`product-feature-spec-${idx}`}
                key={card.title}
                glowColor="#D4AF37"
                className="p-6 bg-[#090a0d] border border-white/[0.03] hover:border-[#D4AF37]/10 space-y-2 group"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 mb-2 border-b border-white/[0.04] pb-2">
                  <span>METRIC 0{idx + 1}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]/55" />
                </div>
                <h4 className="text-[10px] uppercase font-mono font-semibold tracking-wider text-neutral-400">{card.title}</h4>
                <div className="text-sm font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors">{card.value}</div>
                <p className="text-[11px] text-neutral-500 leading-relaxed pt-1">{card.desc}</p>
              </ParallaxCard>
            ))}
          </div>

        </div>
      </section>

      {/* ELIGIBILITY & PROOF METRICS */}
      <section id="products-eligibility" className="relative py-20 px-6 sm:px-8 max-w-5xl mx-auto z-10 border-t border-neutral-900/40 bg-gradient-to-b from-[#07080b]/50 to-[#050507]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Eligibility Criteria table */}
          <ParallaxCard
            id="eligibility-guidelines-parallax-card"
            glowColor="#D4AF37"
            className="lg:col-span-7 p-8 bg-neutral-950/60 border border-white/[0.04] space-y-6"
          >
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block">Standard Audits</span>
              <h3 className="font-serif text-2xl font-bold text-white">Eligibility Guidelines</h3>
            </div>

            <div className="space-y-4 pt-2">
              {eligibilityRequirements.map((req, idx) => (
                <div id={`eligibility-table-row-${idx}`} key={req.label} className="flex justify-between items-start gap-4 pb-4 border-b border-neutral-900 last:border-0 last:pb-0">
                  <div className="space-y-0.5">
                    <span className="text-xs font-mono text-neutral-400 block">{req.label}</span>
                    <span className="text-[10.5px] text-neutral-500 block leading-tight">{req.desc}</span>
                  </div>
                  <span className="text-xs font-serif font-bold text-[#D4AF37] whitespace-nowrap text-right">{req.value}</span>
                </div>
              ))}
            </div>
          </ParallaxCard>

          {/* Benefits Grid list */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase font-mono tracking-widest text-[#D4AF37] block">Benefits</span>
              <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-white">Why Leverage Precious Metals?</h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, idx) => (
                <ParallaxCard 
                  id={`benefit-item-${idx}`} 
                  key={benefit.title} 
                  glowColor="#D4AF37"
                  className="p-4 bg-neutral-900/30 border border-white/[0.02] space-y-1"
                >
                  <h4 className="text-xs font-serif font-bold text-[#D4AF37]">{benefit.title}</h4>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">{benefit.text}</p>
                </ParallaxCard>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* LOAN JOURNEY TIMELINE STEP CARDS */}
      <section id="products-journey" className="relative py-24 px-6 sm:px-8 border-t border-neutral-900 bg-black/10 z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono block">Loan Journey</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
              From Jewellery to Disbursal
            </h2>
            <p className="text-xs text-neutral-400">
              A highly seamless flow built entirely on customer trust and processing speed — so you can plan your financial affairs with total confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {journeyCards.map((card, idx) => (
              <ParallaxCard
                id={`product-journey-card-${idx}`}
                key={card.num}
                glowColor="#D4AF37"
                className="p-6 bg-neutral-900/40 border border-white/[0.02] space-y-4"
              >
                <div className="flex justify-between items-center border-b border-neutral-950 pb-3">
                  <div className="text-2xl font-mono font-bold text-[#D4AF37]">{card.num}</div>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">PHASE 0{idx + 1}</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-neutral-100">{card.action}</h4>
                  <p className="text-xs text-neutral-400 leading-normal">{card.text}</p>
                </div>
              </ParallaxCard>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
