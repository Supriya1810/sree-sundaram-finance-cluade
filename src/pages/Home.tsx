import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, Shield, Coins, TrendingUp, CheckCircle, 
  ArrowRight, Landmark, FileCheck2, UserCheck, HeartHandshake, Quote,
  Star, Plus, Minus, ShieldCheck, Clock, MessageSquare
} from 'lucide-react';
import GoldCanvas3D from '../components/GoldCanvas3D';
import SreeSundaramLogo from '../components/SreeSundaramLogo';
import ParallaxCard from '../components/ParallaxCard';
import PremiumStats from '../components/PremiumStats';
import goldIllustration from '../assets/images/3d_gold_illustration_1780163660345.png';
import goldLoanIllustration from '../assets/images/gold_loan_3d_1780164082865.png';
import goldProsperityIllustration from '../assets/images/gold_prosperity_3d_1780164105680.png';
import goldWealthIllustration from '../assets/images/gold_wealth_3d_1780164124365.png';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
  // Parallax mouse position state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      // Offset ranges from -1 to 1 based on center of page
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2),
        y: (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2),
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const stats = [
    { value: '₹5,000 – ₹50 Lakh', label: 'Loan Amount Range', desc: 'Custom terms to fit small to ultra-high funds requirement.', icon: Coins },
    { value: '7% – 15%', label: 'Competitive Interest Rate', desc: 'Industry-lowest rate per annum with zero compound elements.', icon: TrendingUp },
    { value: '100% Secure', label: 'Secure Storage', desc: 'Pledged ornaments stored in high-grade vault environments.', icon: Shield },
  ];

  const corePromises = [
    { title: 'No Hidden Charges', desc: 'Total transparency from evaluation to repayment.' },
    { title: 'Minimal Documentation', desc: 'No complex income assertions or lengthy background audits.' },
    { title: 'Flexible Repayment', desc: 'Repay via EMI, bullet amount, or interest-only configurations.' },
  ];

  const features = [
    { index: 1, title: 'Best Value For Your Gold', text: 'Expert valuation ensures you get the highest possible rate per gram for your gold with transparent pricing.' },
    { index: 2, title: 'Instant Processing', text: 'Hassle-free payment options with quick disbursement, get your funds when you need them most.' },
    { index: 3, title: 'Customer-First Service', text: 'Timely reminders and dedicated support team to help you throughout your loan journey.' },
    { index: 4, title: 'Transparent & Fair', text: 'Top-notch security with complete transparency. No hidden charges or surprise fees.' },
    { index: 5, title: 'Experienced Team', text: 'Expert professionals across all branches with years of experience in gold loan services.' },
    { index: 6, title: 'Easy Documentation', text: 'Minimal paperwork required. Just bring your ID and address proof to get started.' },
  ];

  const idDocs = ['Aadhaar Card', 'PAN Card', 'Indian Passport', 'Voter ID'];
  const addressDocs = ['Aadhaar Card', 'Driving License', 'Voter ID Card', 'Ration Card', 'Passport Copy', 'Lease Agreement + Utility Bill'];

  // Text Animation Variant Definitions
  const wordContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      }
    }
  };

  const wordItemVariants = {
    hidden: { opacity: 0, y: 25, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 14,
        stiffness: 90
      }
    }
  };

  return (
    <div id="home-page-root" className="bg-transparent text-[#F8F1E7] relative overflow-hidden min-h-screen">
      
      {/* 3D Gold Canvas simulation covering the Hero background with mouse-parallax influence */}
      <motion.div 
        style={{
          x: mousePos.x * -35,
          y: mousePos.y * -35,
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        className="absolute inset-0 h-[100vh] z-0 overflow-hidden pointer-events-none"
      >
        <GoldCanvas3D />
      </motion.div>

      {/* Decorative vertical cinematic grid-lines */}
      <div className="absolute inset-x-0 top-0 h-full max-w-7xl mx-auto px-8 flex justify-between pointer-events-none z-10 opacity-[0.03]">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white hidden md:block" />
        <div className="w-[1px] h-full bg-white hidden lg:block" />
        <div className="w-[1px] h-full bg-white" />
      </div>

      {/* HERO SECTION WITH DYNAMIC LAYERED PARALLAX */}
      <section id="hero-section" className="relative pt-36 pb-16 md:pb-24 lg:pt-48 lg:pb-28 z-20 px-6 sm:px-8">
        
        {/* Soft elegant background glow with subtle drift */}
        <motion.div
          style={{
            x: mousePos.x * 30,
            y: mousePos.y * 30,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 15 }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-lux-gold-primary/[0.04] rounded-full blur-[140px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-10 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              
              {/* Tagline Badge with scale entrance */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lux-gold-primary/5 border border-lux-border text-lux-gold-primary font-mono text-[10px] sm:text-xs uppercase tracking-widest font-bold"
              >
                <Sparkles className="w-3.5 h-3.5 text-lux-gold-primary" />
                <span>SREE SUNDARAM FINANCE PRIVATE LIMITED</span>
              </motion.div>

              {/* Master Premium Headline Layout */}
              <div className="space-y-6">
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.75rem] font-semibold tracking-tight leading-[1.08] text-white">
                  Empowering Financial{" "}
                  <span className="text-lux-gold-primary block sm:inline">
                    Growth
                  </span>{" "}
                  with Trust &{" "}
                  <span className="text-lux-gold-primary block sm:inline">
                    Excellence
                  </span>
                </h1>

                <p className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#B8860B] font-extrabold max-w-xl mx-auto lg:mx-0 flex items-center justify-center lg:justify-start gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-lux-gold-primary animate-pulse" />
                  PROMOTING WEALTH SECURITY, STABILITY & CUSTOM CREDIT
                </p>
              </div>

              {/* Premium Subtitle description with lazy fade-up */}
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lux-text-sec text-sm sm:text-base max-w-2xl leading-relaxed font-sans"
              >
                Providing loans, investment solutions, wealth management, and financial guidance for individuals and businesses across the region.
              </motion.p>

              {/* Consistent Premium Icon Mini-Tags */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 pt-2"
              >
                {[
                  { id: 'premium-hero-feature-1', text: 'Tailored Secured Capital', icon: Coins },
                  { id: 'premium-hero-feature-2', text: 'Stellar Multi-Tier Security', icon: Shield },
                  { id: 'premium-hero-feature-3', text: 'Uncompromised Performance Audits', icon: TrendingUp }
                ].map((tag) => (
                  <motion.div 
                    id={tag.id}
                    key={tag.text} 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-lux-bg-secondary/90 border border-lux-border hover:border-lux-gold-primary/40 text-xs font-mono font-medium transition-colors text-lux-text-sec hover:text-white"
                  >
                    <tag.icon className="w-4 h-4 text-lux-gold-primary" strokeWidth={1.5} />
                    <span className="text-neutral-300">{tag.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Luxury Styled CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 w-full sm:w-auto"
              >
                <button
                  id="hero-apply-now-btn"
                  onClick={() => {
                    setActiveTab('Contact');
                    window.scrollTo({ top: 350, behavior: 'smooth' });
                  }}
                  className="px-8 py-4 w-full sm:w-auto rounded-full bg-gold-primary-gradient text-black font-extrabold text-xs tracking-widest uppercase cursor-pointer hover:shadow-lux-gold-primary/20 hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 glow-hover shadow-lg"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 font-black text-black" />
                </button>
                <button
                  id="hero-products-nav-btn"
                  onClick={() => {
                    setActiveTab('Products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-8 py-4 w-full sm:w-auto rounded-full bg-transparent border-2 border-lux-gold-primary/80 hover:border-lux-gold-primary text-white font-bold text-xs tracking-widest uppercase cursor-pointer transition-all duration-300 hover:bg-lux-gold-primary/10 shadow-lg hover:shadow-lux-gold-primary/5 hover:scale-[1.01]"
                >
                  Contact Us
                </button>
              </motion.div>

            </motion.div>

            {/* Right Column - Premium Finance Illustration & Dynamic Growth Dashboard */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, type: 'spring', stiffness: 45 }}
              className="lg:col-span-5 flex flex-col items-center justify-center relative"
            >
              <div className="relative w-full max-w-[430px] min-h-[600px] sm:min-h-[660px] rounded-3xl p-[1px] bg-gradient-to-br from-lux-border/40 via-lux-border/10 to-transparent border border-lux-border/25 shadow-2xl overflow-hidden group flex flex-col">
                {/* Embedded glass backdrop */}
                <div className="absolute inset-0 bg-lux-bg-secondary/75 rounded-3xl backdrop-blur-xl -z-10" />
                
                {/* Visual glow spotlights */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-lux-gold-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-lux-gold-primary/[0.02] rounded-full blur-3xl pointer-events-none" />

                {/* Content wrapper with floating status counters */}
                <div className="relative w-full flex-1 p-6 sm:p-7 lg:p-10 flex flex-col justify-between border border-lux-border/20 rounded-[23px] overflow-hidden">
                  
                  {/* Decorative High-End Wealth Index Badge Header */}
                  <div className="flex items-center justify-between border-b border-lux-border/15 pb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#B8B8B8] leading-relaxed">Live Bullion Desk</span>
                    </div>
                    <span className="text-[9px] font-mono px-2.5 py-1 rounded bg-lux-gold-primary/10 text-lux-gold-primary border border-lux-border uppercase tracking-wider">
                      PUNE BRANCH
                    </span>
                  </div>

                  {/* 3D Asset Illustration wrapper with generous luxury spacing */}
                  <div className="flex-1 flex items-center justify-center relative pt-8 sm:pt-10 lg:pt-12 pb-6 lg:pb-8">
                    <motion.div 
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative z-10 p-2 flex items-center justify-center mx-auto"
                    >
                      <img 
                        src={goldIllustration} 
                        alt="Premium Sovereign Gold Collateral Assets" 
                        referrerPolicy="no-referrer"
                        className="w-[190px] sm:w-[230px] h-auto object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.65)] saturate-110 brightness-[1.1] hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                  </div>

                  {/* High-End Wealth Management Interactive Stats Dashboard panel overlay - exactly 24px mt spacing */}
                  <div className="mt-6 bg-[#121418]/95 border border-lux-border/30 rounded-2xl p-5 space-y-5 shadow-2xl backdrop-blur-lg">
                    {/* Row 1: Spacing improved typography spacing */}
                    <div className="flex items-center justify-between leading-relaxed">
                      <span className="text-[10px] font-mono tracking-widest text-lux-text-muted leading-relaxed uppercase">COLLATERAL INDEX</span>
                      <span className="text-xs sm:text-sm font-mono text-lux-gold-primary font-bold tracking-tight leading-relaxed">₹78,850 / 10g</span>
                    </div>
                    
                    {/* Row 2: Visual Growth bar with gold color gradient - 16px space-y */}
                    <div className="space-y-4">
                      <div className="flex justify-between text-[11px] leading-relaxed">
                        <span className="text-[#D4AF37] font-semibold flex items-center gap-1.5 leading-relaxed">
                          <TrendingUp className="w-3.5 h-3.5 text-lux-gold-primary" strokeWidth={1.5} /> Live Appraisal Term
                        </span>
                        <span className="text-white font-mono font-bold tracking-wider">95% MAX VALUE</span>
                      </div>
                      <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gold-primary-gradient rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '95%' }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                      </div>
                    </div>

                    {/* Row 3 Indicators with improved padding divider line */}
                    <div className="flex items-center justify-between text-[9px] font-mono text-lux-text-muted pt-4 border-t border-lux-border/20 leading-relaxed uppercase tracking-wider">
                      <span className="flex items-center gap-1">✓ INSTANT APPRAISAL</span>
                      <span className="flex items-center gap-1">✓ 100% SECURE VAULTS</span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* REVOLUTIONARY ANIMATED TRUST STATISTICS SECTION */}
      <PremiumStats />

      {/* THREE PILLARS OF SOVEREIGN GOLD STEWARDSHIP */}
      <section id="three-pillars" className="relative py-12 md:py-16 lg:py-20 z-20 px-6 sm:px-8 border-t border-lux-border bg-gradient-to-b from-lux-bg-secondary/40 to-transparent">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs uppercase tracking-widest text-lux-gold-primary font-mono font-extrabold block">The Sovereign Cycle</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white leading-tight">
              Honoring Wealth, Loan & Prosperity
            </h2>
            <p className="text-lux-text-sec text-sm leading-relaxed">
              We manage physical gold with extreme reverence. Our three-step financial paradigm ensures seamless liquidity, asset growth, and intergenerational security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 1. GOLD LOAN CARD */}
            <ParallaxCard
              id="pillar-gold-loan-card"
              glowColor="#D4AF37"
              className="flex flex-col justify-between p-6 md:p-8 overflow-hidden relative group"
            >
              <div className="space-y-6">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-lux-gold-primary/15 bg-black/45">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={goldLoanIllustration}
                    alt="Gold Loan"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover saturate-110 brightness-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/85 border border-lux-gold-primary/40 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                    <span className="text-[9px] font-mono tracking-wider text-lux-gold-primary uppercase font-bold">
                      LIQUIDITY KEY
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-lux-gold-primary/15 border border-lux-gold-primary/40 text-lux-gold-primary flex items-center justify-center font-mono text-[10px] font-black">
                      I
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-lux-gold-primary transition-colors">
                      Secured Gold Loan
                    </h3>
                  </div>
                  <p className="text-xs text-lux-text-sec leading-relaxed">
                    Convert raw ornaments into fast liquid credit under 15 minutes. Safeguard your family heirloom jewelry inside high-security climate-controlled vault rooms.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-lux-border mt-6 flex justify-between items-center">
                <span className="text-[10px] font-mono text-neutral-500 uppercase">STAGE // LIQUIDITY</span>
                <span className="text-xs text-lux-gold-primary font-mono font-bold group-hover:underline cursor-pointer flex items-center gap-1"
                  onClick={() => {
                    setActiveTab('Contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Apply now <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </ParallaxCard>

            {/* 2. PROSPERITY CARD */}
            <ParallaxCard
              id="pillar-prosperity-card"
              glowColor="#D4AF37"
              className="flex flex-col justify-between p-6 md:p-8 overflow-hidden relative group"
            >
              <div className="space-y-6">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-lux-gold-primary/15 bg-black/45">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={goldProsperityIllustration}
                    alt="Prosperity"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover saturate-110 brightness-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/85 border border-lux-gold-primary/40 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                    <span className="text-[9px] font-mono tracking-wider text-lux-gold-primary uppercase font-bold">
                      GROWTH PARADIGM
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-lux-gold-primary/15 border border-lux-gold-primary/40 text-lux-gold-primary flex items-center justify-center font-mono text-[10px] font-black">
                      II
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-lux-gold-primary transition-colors">
                      Eternal Prosperity
                    </h3>
                  </div>
                  <p className="text-xs text-lux-text-sec leading-relaxed">
                    Convert fluid capital directly into compounding farming operations, small scale business setups, and real asset improvements that grow your long-term output.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-lux-border mt-6 flex justify-between items-center">
                <span className="text-[10px] font-mono text-neutral-500 uppercase">STAGE // ACCUMULATION</span>
                <span className="text-xs text-lux-gold-primary font-mono font-bold group-hover:underline cursor-pointer flex items-center gap-1"
                  onClick={() => {
                    setActiveTab('Products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Explore Schemes <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </ParallaxCard>

            {/* 3. SOVEREIGN WEALTH CARD */}
            <ParallaxCard
              id="pillar-wealth-card"
              glowColor="#D4AF37"
              className="flex flex-col justify-between p-6 md:p-8 overflow-hidden relative group"
            >
              <div className="space-y-6">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-lux-gold-primary/15 bg-black/45">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={goldWealthIllustration}
                    alt="Sovereign Wealth"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover saturate-110 brightness-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/85 border border-lux-gold-primary/40 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                    <span className="text-[9px] font-mono tracking-wider text-lux-gold-primary uppercase font-bold">
                      ASSET PRESERVATION
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-lux-gold-primary/15 border border-lux-gold-primary/40 text-lux-gold-primary flex items-center justify-center font-mono text-[10px] font-black">
                      III
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-lux-gold-primary transition-colors">
                      Sovereign Wealth
                    </h3>
                  </div>
                  <p className="text-xs text-lux-text-sec leading-relaxed">
                    Safeguard the definitive purchasing power of your family against inflationary decay, fully backed and fortified by high-carat, professionally audited bullion.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-lux-border mt-6 flex justify-between items-center">
                <span className="text-[10px] font-mono text-neutral-500 uppercase">STAGE // PRESERVATION</span>
                <span className="text-xs text-lux-gold-primary font-mono font-bold group-hover:underline cursor-pointer flex items-center gap-1"
                  onClick={() => {
                    setActiveTab('Contact');
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                >
                  Locate Branch <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </ParallaxCard>

          </div>

        </div>
      </section>

      {/* EXPERT VALUATION & PROMISE PANEL WITH SPOTLIGHT CARDS */}
      <section id="brand-promise-valuation" className="relative py-12 md:py-16 lg:py-20 z-20 px-6 sm:px-8 border-t border-lux-border bg-lux-bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative / Our Promise */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-lux-gold-primary font-mono font-extrabold block">Our Corporate Standard</span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  Transparent Process. Maximum Appraisal.
                </h2>
              </div>

              <p className="text-lux-text-sec text-sm sm:text-base leading-relaxed">
                Experience the fastest and most trustworthy gold lending ecosystem. Sree Sundaram Finance Private Limited ensures that each borrower receives complete clarity, quick audit processes, and instant gold loan disbursals directly to their accounts.
              </p>

              {/* Promise Bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                {corePromises.map((item, idx) => (
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    id={`promise-item-${idx}`} 
                    key={item.title} 
                    className="space-y-2 p-4 bg-lux-bg-secondary/70 backdrop-blur-md border border-lux-border rounded-xl hover:border-lux-gold-primary/40 transition-all duration-300 animate-none"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-lux-gold-primary" />
                      <h4 className="text-xs uppercase font-mono tracking-wider font-extrabold text-white">{item.title}</h4>
                    </div>
                    <p className="text-[11px] text-lux-text-muted leading-normal">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Card / Expert Valuation Callout */}
            <div className="lg:col-span-4 lg:offset-1">
              <ParallaxCard 
                id="expert-valuation-card-home"
                glowColor="#D4AF37"
                className="text-center space-y-6 p-8 group"
              >
                <div 
                  onClick={() => {
                    setActiveTab('Products');
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                  className="cursor-pointer space-y-6"
                >
                  <div className="mx-auto w-14 h-14 rounded-full bg-lux-gold-primary/10 border border-lux-gold-primary/25 flex items-center justify-center text-lux-gold-primary group-hover:scale-110 transition-transform">
                    <Landmark className="w-6 h-6 text-lux-gold-primary" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-black text-white group-hover:text-lux-gold-primary transition-colors leading-snug">Expert Valuation Engine</h3>
                    <p className="text-xs text-lux-text-sec leading-relaxed">
                      Get the absolute best credit appraisal on your physical ornaments. We utilize state-of-the-art non-invasive testing protocols connected directly to live bullion indices.
                    </p>
                  </div>

                  <div className="font-mono text-xs text-lux-gold-primary font-extrabold py-2.5 rounded-xl bg-lux-bg-secondary border border-lux-border group-hover:bg-lux-gold-primary/10 transition-colors">
                    Check Rate-Per-Gram Live
                  </div>
                </div>
              </ParallaxCard>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION WITH RESPONSIVE CARD HOVER EFFECT */}
      <section id="why-choose-us-home" className="relative py-12 md:py-16 lg:py-20 z-20 px-6 sm:px-8 border-t border-lux-border bg-gradient-to-b from-transparent to-lux-bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-lux-gold-primary font-mono font-extrabold block">Elite Features</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white leading-tight">
              Crafted Financial Sovereignty
            </h2>
            <p className="text-lux-text-sec text-sm leading-relaxed">
              We stand apart through customized credit structures built exclusively to fuel business expansion, farming cycles, or immediate personal safety requirements. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <ParallaxCard
                id={`why-choose-grid-card-${feat.index}`}
                key={feat.index}
                glowColor="#D4AF37"
                className="group relative p-8 text-neutral-100"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-8 h-8 rounded-full bg-lux-gold-primary/10 border border-lux-gold-primary/25 flex items-center justify-center font-mono text-xs font-bold text-lux-gold-primary group-hover:bg-lux-gold-primary group-hover:text-black transition-colors duration-300">
                    0{feat.index}
                  </div>
                  <h3 className="text-xs uppercase tracking-wider font-extrabold text-neutral-100 group-hover:text-lux-gold-primary transition-colors font-sans">
                    {feat.title}
                  </h3>
                </div>
                <p className="text-xs text-lux-text-sec leading-relaxed">
                  {feat.text}
                </p>
              </ParallaxCard>
            ))}
          </div>

        </div>
      </section>

      {/* REQUIRED DOCUMENTS SECTION */}
      <section id="required-documents" className="relative py-12 md:py-16 lg:py-20 z-20 px-6 sm:px-8 border-t border-lux-border bg-lux-bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-lux-gold-primary font-mono font-extrabold block">Pristine Protocol</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Simplified KYC Verifications
            </h2>
            <p className="text-lux-text-sec text-xs sm:text-sm leading-normal">
              No complex credit scoring or historical ledger checks. Just bring standard identity proofs to initiate the secured gold lending disbursement immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Identity Proof Card */}
            <ParallaxCard
              id="iden-proof-intercard"
              glowColor="#D4AF37"
              className="flex flex-col justify-between p-8"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-lux-gold-primary/10 rounded-xl text-lux-gold-primary border border-lux-border">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">Identity Verification</h3>
                </div>
                <p className="text-xs text-lux-text-muted font-bold">Provide any one of the following official government registers:</p>
                <ul className="space-y-2.5 pt-2">
                  {idDocs.map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs text-lux-text-sec">
                      <CheckCircle className="w-4 h-4 text-lux-gold-primary shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-lux-border text-[10px] text-lux-text-muted font-mono">
                REGULATORY STATUS: // PAN + UID Verified
              </div>
            </ParallaxCard>

            {/* Address Proof Card */}
            <ParallaxCard
              id="addr-proof-intercard"
              glowColor="#D4AF37"
              className="flex flex-col justify-between p-8"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-lux-gold-primary/10 rounded-xl text-lux-gold-primary border border-lux-border">
                    <FileCheck2 className="w-5 h-5 text-lux-gold-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">Address Verification (Residence)</h3>
                </div>
                <p className="text-xs text-lux-text-muted font-bold">Provide any one document confirming your active dwelling place:</p>
                <ul className="space-y-2.5 pt-2">
                  {addressDocs.map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs text-lux-text-sec">
                      <CheckCircle className="w-4 h-4 text-lux-gold-primary shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-lux-border text-[10px] text-lux-text-muted font-mono">
                REGULATORY STATUS: // Active Bills / UID Address Match
              </div>
            </ParallaxCard>

          </div>

          <div className="mt-10 p-4 rounded-xl bg-lux-gold-primary/5 border border-lux-border text-center select-none">
            <p className="text-[11px] text-lux-text-sec leading-normal">
              <strong>Income Certifications are never asked.</strong> Borrowing with Sree Sundaram Finance Private Limited is streamlined on collateral worth, opening paths for people with zero legacy files.
            </p>
          </div>

        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS SECTION */}
      <section id="testimonials-home" className="relative py-12 md:py-16 lg:py-20 z-20 px-6 sm:px-8 border-t border-lux-border bg-lux-bg-secondary/30">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-lux-gold-primary font-mono font-extrabold block">Verified Advocacy</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Trust Built on Absolute Transparency
            </h2>
            <p className="text-lux-text-sec text-sm max-w-xl mx-auto leading-relaxed">
              Real success stories from entrepreneurs, agriculturists, and individual families who fortified their legacy liquidity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <ParallaxCard 
              id="testimonial-card-1"
              glowColor="#D4AF37"
              className="p-8 bg-lux-bg-secondary/80 border border-lux-gold-primary/10 hover:border-lux-gold-primary/30 transition-all duration-300 rounded-[24px] space-y-6 relative group flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-lux-gold-primary text-lux-gold-primary" />
                    ))}
                  </div>
                  <div className="text-lux-gold-primary/10 select-none pointer-events-none group-hover:text-lux-gold-primary/20 transition-colors">
                    <Quote className="w-8 h-8" />
                  </div>
                </div>

                <p className="text-[13px] sm:text-sm text-neutral-300 font-serif leading-relaxed italic min-h-[96px]">
                  "The appraisal process at Sree Sundaram Bhosari was remarkably fast. Sree Sundaram Private Limited provides extremely low compound interest elements with absolute transparency."
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-lux-border mt-auto">
                <div className="w-11 h-11 rounded-full p-0.5 border border-lux-gold-primary/30 bg-lux-bg-primary overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80" 
                    alt="Rohan Shinde" 
                    referrerPolicy="no-referrer" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <span className="font-serif font-black text-white text-sm block">Rohan Shinde</span>
                  <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-lux-gold-primary block">Industrialist, Bhosari</span>
                </div>
              </div>
            </ParallaxCard>

            {/* Card 2 */}
            <ParallaxCard 
              id="testimonial-card-2"
              glowColor="#D4AF37"
              className="p-8 bg-lux-bg-secondary/80 border border-lux-gold-primary/10 hover:border-lux-gold-primary/30 transition-all duration-300 rounded-[24px] space-y-6 relative group flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-lux-gold-primary text-lux-gold-primary" />
                    ))}
                  </div>
                  <div className="text-lux-gold-primary/10 select-none pointer-events-none group-hover:text-lux-gold-primary/20 transition-colors">
                    <Quote className="w-8 h-8" />
                  </div>
                </div>

                <p className="text-[13px] sm:text-sm text-neutral-300 font-serif leading-relaxed italic min-h-[96px]">
                  "Absolute professional standard. Shailesh Thakur guided my agricultural loan setup. They cleared my previous debt elements and managed secure vaulting under 15 minutes."
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-lux-border mt-auto">
                <div className="w-11 h-11 rounded-full p-0.5 border border-lux-gold-primary/30 bg-lux-bg-primary overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80" 
                    alt="Sanjay Patil" 
                    referrerPolicy="no-referrer" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <span className="font-serif font-black text-white text-sm block">Sanjay Patil</span>
                  <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-lux-gold-primary block">Agriculturist, Pimpri</span>
                </div>
              </div>
            </ParallaxCard>

            {/* Card 3 */}
            <ParallaxCard 
              id="testimonial-card-3"
              glowColor="#D4AF37"
              className="p-8 bg-lux-bg-secondary/80 border border-lux-gold-primary/10 hover:border-lux-gold-primary/30 transition-all duration-300 rounded-[24px] space-y-6 relative group flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-lux-gold-primary text-lux-gold-primary" />
                    ))}
                  </div>
                  <div className="text-lux-gold-primary/10 select-none pointer-events-none group-hover:text-lux-gold-primary/20 transition-colors">
                    <Quote className="w-8 h-8" />
                  </div>
                </div>

                <p className="text-[13px] sm:text-sm text-neutral-300 font-serif leading-relaxed italic min-h-[96px]">
                  "As an entrepreneur, credit flexibility is critical Sree Sundaram Private Limited offered competitive loan values matching live international rate indices exactly. Recommended highly."
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-lux-border mt-auto">
                <div className="w-11 h-11 rounded-full p-0.5 border border-lux-gold-primary/30 bg-lux-bg-primary overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80" 
                    alt="Meera Thakur" 
                    referrerPolicy="no-referrer" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <span className="font-serif font-black text-white text-sm block">Meera Thakur</span>
                  <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-lux-gold-primary block">Business Owner, Pune</span>
                </div>
              </div>
            </ParallaxCard>
          </div>

        </div>
      </section>

      {/* TRUST BADGES SECTION */}
      <section id="trust-badges-home" className="relative py-12 md:py-16 lg:py-20 z-20 px-6 sm:px-8 border-t border-lux-border bg-gradient-to-b from-lux-bg-secondary/10 to-transparent">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-lux-gold-primary font-mono font-extrabold block">Uncompromised Standard</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white leading-tight">
              Our Seal of Financial Integrity
            </h2>
            <p className="text-lux-text-sec text-sm leading-relaxed max-w-xl mx-auto">
              We operate under rigorous professional guidelines to ensure every customer transaction is handled with absolute safety, transparency, and priority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Secure Documentation', desc: 'Sovereign security protocol with ISO-grade lock storage protection.', icon: ShieldCheck },
              { title: 'Transparent Pricing', desc: 'No hidden compound elements, zero surprise transaction fees.', icon: Coins },
              { title: 'Trusted Local Finance Partner', desc: 'Serving Maharashtra communities with deep regulatory compliance.', icon: Landmark },
              { title: 'Quick Loan Processing', desc: 'Fully processed and disbursed to your account in under 15 minutes.', icon: Clock },
              { title: 'Customer-Focused Service', desc: 'Dedicated professional advisors coordinating your loan journey.', icon: HeartHandshake },
              { title: 'Professional Financial Guidance', desc: 'Expert appraisal matching live global valuation indices.', icon: UserCheck }
            ].map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  id={`trust-badge-card-${idx}`}
                  className="p-6 md:p-8 bg-lux-bg-secondary/40 border border-lux-gold-primary/10 hover:border-lux-gold-primary/30 rounded-2xl flex flex-col justify-between items-start space-y-4 group hover:bg-lux-bg-secondary/60 transition-all duration-300 shadow-md"
                >
                  <div className="p-3 bg-lux-gold-primary/5 rounded-xl border border-lux-border group-hover:scale-105 transition-all">
                    <Icon className="w-5 h-5 text-lux-gold-primary" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-base font-bold text-white group-hover:text-lux-gold-primary transition-colors flex items-center gap-1.5">
                      <span className="text-lux-gold-primary">✓</span> {badge.title}
                    </h3>
                    <p className="text-xs text-lux-text-sec leading-relaxed">
                      {badge.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq-home" className="relative py-12 md:py-16 lg:py-20 z-20 px-6 sm:px-8 border-t border-lux-border bg-lux-bg-secondary/20">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-lux-gold-primary font-mono font-extrabold block">Clarity & Confidence</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white">
              Frequently Answered Queries
            </h2>
            <p className="text-lux-text-sec text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Find transparent answers to understand our security rules, loan disbursement procedures, and appraisal frameworks.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'What financial services do you offer?',
                answer: 'Sree Sundaram Finance Private Limited specializes in custom Secured Personal, Commercial, and Agricultural Gold Loans. We evaluate physical ornaments consisting of 18-karat to 24-karat gold with certified in-house appraisal technology.'
              },
              {
                question: 'How quickly can loan applications be processed?',
                answer: 'All our in-branch appraisals and loan disbursements are completed under 15 minutes. Once collateral weight and purity is confirmed, funds are instantly routed of record directly to your designated bank account.'
              },
              {
                question: 'What documents are required?',
                answer: 'Our KYC process is fully simplified and requires zero complex credit scores. You only need to present one verified Government Identity Proof (e.g., Aadhaar Card, PAN Card, or Passport) and one current Residence Address Proof (e.g., Utility bill).'
              },
              {
                question: 'Are there any hidden charges?',
                answer: 'Never. Sree Sundaram Finance is fully grounded in professional ethics. Every calculation element, ledger, interest quote, and processing tariff is presented with perfect transparency at inception with zero surprise fees.'
              },
              {
                question: 'How can I contact your team?',
                answer: 'You can connect directly with our senior finance advisory desk Shailesh Thakur via +91-8888759696 or write to us at info@sreesundaramfinance.com. You are also welcome to visit our Bhosari, Pune headquarters or send a direct WhatsApp query.'
              },
              {
                question: 'Do you provide business financing?',
                answer: 'Yes. Sree Sundaram Finance supplies dedicated commercial capital to agricultural sectors, self-employed retail providers, micro-enterprises, and entrepreneurs secured against gold ornaments for premium immediate liquidity.'
              }
            ].map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  id={`faq-item-accordion-${idx}`}
                  className="border border-lux-border bg-lux-bg-secondary/60 rounded-xl overflow-hidden hover:border-lux-gold-primary/30 transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 cursor-pointer select-none focus:outline-none"
                  >
                    <span className="font-serif text-sm sm:text-base font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                    <span className="p-1 px-2 rounded-lg bg-lux-gold-primary/5 text-lux-gold-primary border border-lux-border/20 transition-all shrink-0">
                      {isOpen ? <Minus className="w-3.5 h-3.5 shrink-0" /> : <Plus className="w-3.5 h-3.5 shrink-0" />}
                    </span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-xs sm:text-sm text-lux-text-sec leading-relaxed border-t border-lux-border/40 pt-4 bg-[#121418]/30">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
