import React, { useState, useRef, useEffect } from "react";
import { motion, type Variants } from "motion/react";
import {
  Sparkles,
  Shield,
  Coins,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Landmark,
  FileCheck2,
  UserCheck,
  HeartHandshake,
  Quote,
} from "lucide-react";
import GoldCanvas3D from "../components/GoldCanvas3D";
import SreeSundaramLogo from "../components/SreeSundaramLogo";
import ParallaxCard from "../components/ParallaxCard";

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
  // Parallax mouse position state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      // Offset ranges from -1 to 1 based on center of page
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2),
        y: (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2),
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const stats = [
    {
      value: "₹5,000 – ₹50 Lakh",
      label: "Loan Amount Range",
      desc: "Custom terms to fit small to ultra-high funds requirement.",
      icon: Coins,
    },
    {
      value: "7% – 15%",
      label: "Competitive Interest Rate",
      desc: "Industry-lowest rate per annum with zero compound elements.",
      icon: TrendingUp,
    },
    {
      value: "100% Secure",
      label: "Secure Storage",
      desc: "Pledged ornaments stored in high-grade vault environments.",
      icon: Shield,
    },
  ];

  const corePromises = [
    {
      title: "No Hidden Charges",
      desc: "Total transparency from evaluation to repayment.",
    },
    {
      title: "Minimal Documentation",
      desc: "No complex income assertions or lengthy background audits.",
    },
    {
      title: "Flexible Repayment",
      desc: "Repay via EMI, bullet amount, or interest-only configurations.",
    },
  ];

  const features = [
    {
      index: 1,
      title: "Best Value For Your Gold",
      text: "Expert valuation ensures you get the highest possible rate per gram for your gold with transparent pricing.",
    },
    {
      index: 2,
      title: "Instant Processing",
      text: "Hassle-free payment options with quick disbursement, get your funds when you need them most.",
    },
    {
      index: 3,
      title: "Customer-First Service",
      text: "Timely reminders and dedicated support team to help you throughout your loan journey.",
    },
    {
      index: 4,
      title: "Transparent & Fair",
      text: "Top-notch security with complete transparency. No hidden charges or surprise fees.",
    },
    {
      index: 5,
      title: "Experienced Team",
      text: "Expert professionals across all branches with years of experience in gold loan services.",
    },
    {
      index: 6,
      title: "Easy Documentation",
      text: "Minimal paperwork required. Just bring your ID and address proof to get started.",
    },
  ];

  const idDocs = ["Aadhaar Card", "PAN Card", "Indian Passport", "Voter ID"];
  const addressDocs = [
    "Aadhaar Card",
    "Driving License",
    "Voter ID Card",
    "Ration Card",
    "Passport Copy",
    "Lease Agreement + Utility Bill",
  ];

  // Text Animation Variant Definitions
  const wordContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordItemVariants: Variants = {
    hidden: { opacity: 0, y: 25, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 90,
      },
    },
  };

  return (
    <div
      id="home-page-root"
      className="bg-[#050507] text-[#eff0f5] relative overflow-hidden min-h-screen"
    >
      {/* 3D Gold Canvas simulation covering the Hero background with mouse-parallax influence */}
      <motion.div
        style={{
          x: mousePos.x * -35,
          y: mousePos.y * -35,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
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
      <section
        id="hero-section"
        className="relative pt-32 pb-20 md:pb-28 lg:pt-40 lg:pb-36 z-20 px-6 sm:px-8"
      >
        {/* Deep background glow with parallax drift */}
        <motion.div
          style={{
            x: mousePos.x * 45,
            y: mousePos.y * 45,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#F39200]/10 rounded-full blur-[140px] pointer-events-none"
        />

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          {/* Tagline Badge with scale entrance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F39200]/5 border border-[#F39200]/25 text-[#F39200] font-mono text-xs uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trusted Gold Credit Partner</span>
          </motion.div>

          {/* Staggered Title Text Animation */}
          <motion.div
            variants={wordContainerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h1 className="font-serif text-3xl sm:text-6xl lg:text-[4.7rem] font-black tracking-tight leading-none text-white max-w-4xl mx-auto flex flex-wrap justify-center gap-x-4 gap-y-2">
              <motion.span
                variants={wordItemVariants}
                className="text-[#F39200]"
              >
                SREE
              </motion.span>
              <motion.span
                variants={wordItemVariants}
                className="text-[#F39200]"
              >
                SUNDARAM
              </motion.span>
              <motion.span variants={wordItemVariants} className="text-white">
                FINANCE
              </motion.span>
            </h1>

            <motion.p
              variants={wordItemVariants}
              className="font-mono text-xs uppercase tracking-widest text-[#F39200] font-extrabold max-w-xl mx-auto"
            >
              🚀 GOLD LOAN / SECURED CASH LOANS AGAINST GOLD
            </motion.p>
          </motion.div>

          {/* Subtitle description with lazy fade-up */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-neutral-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Instantly convert your gold ornaments into premium fluid capital
            with complete transparency, minimal rates, and elite protective
            vaults.
          </motion.p>

          {/* Core Benefit Micro-Tags */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 pt-2"
          >
            {[
              {
                id: "home-benefit-tag-1",
                text: "Get Maximum Appraisal Value",
                icon: Coins,
              },
              {
                id: "home-benefit-tag-2",
                text: "Annual Rates 7% – 15%",
                icon: TrendingUp,
              },
              {
                id: "home-benefit-tag-3",
                text: "Vault Insured Storage",
                icon: Shield,
              },
            ].map((tag) => (
              <motion.div
                id={tag.id}
                key={tag.text}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0f1015]/80 border border-white/[0.05] hover:border-[#F39200]/30 text-xs font-mono font-medium transition-colors"
              >
                <tag.icon className="w-4 h-4 text-[#F39200]" />
                <span className="text-neutral-300">{tag.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              id="hero-apply-now-btn"
              onClick={() => {
                setActiveTab("Contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-8 py-4 w-full sm:w-auto rounded-full bg-[#F39200] text-black font-extrabold text-xs tracking-widest uppercase cursor-pointer hover:bg-[#ffe380] shadow-lg shadow-amber-500/20 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Apply Online
              <ArrowRight className="w-4 h-4 font-bold" />
            </button>
            <button
              id="hero-products-nav-btn"
              onClick={() => {
                setActiveTab("Products");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-8 py-4 w-full sm:w-auto rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[#F39200]/30 text-white font-semibold text-xs tracking-widest uppercase cursor-pointer hover:bg-white/[0.05] transition-all duration-300"
            >
              Verify Loan Scheme
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* HIGHLIGHTS / STATISTICS BENTO GRID SECTION WITH HOVER REFLECTIONS */}
      <section
        id="statistics-highlights"
        className="relative py-12 z-20 px-6 sm:px-8 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <ParallaxCard
                id={`stat-card-${idx}`}
                key={stat.label}
                className="relative group border border-white/[0.04] p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#F39200]/5 rounded-xl border border-[#F39200]/10 text-[#F39200] group-hover:bg-[#F39200]/10 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500">
                    GROUP SECURED // 0{idx + 1}
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-mono font-black tracking-tight text-white mb-2 leading-none group-hover:text-[#F39200] transition-colors duration-300">
                  {stat.value}
                </div>

                <h3 className="text-xs uppercase font-mono tracking-wider font-extrabold text-[#F39200] mb-3">
                  {stat.label}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {stat.desc}
                </p>
              </ParallaxCard>
            );
          })}
        </div>
      </section>

      {/* EXPERT VALUATION & PROMISE PANEL WITH SPOTLIGHT CARDS */}
      <section
        id="brand-promise-valuation"
        className="relative py-20 z-20 px-6 sm:px-8 border-t border-neutral-900/60 bg-gradient-to-b from-transparent to-[#07080b]/90"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative / Our Promise */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#F39200] font-mono font-extrabold block">
                  Our Corporate Standard
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  Transparent Process. Maximum Appraisal.
                </h2>
              </div>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Experience the fastest and most trustworthy gold lending
                ecosystem. Sree Sundaram Finance ensures that each borrower
                receives complete clarity, quick audit processes, and instant
                gold loan disbursals directly to their accounts.
              </p>

              {/* Promise Bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                {corePromises.map((item, idx) => (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    id={`promise-item-${idx}`}
                    key={item.title}
                    className="space-y-2 p-4 bg-white/[0.01] border border-white/[0.03] rounded-xl hover:border-[#F39200]/25 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F39200]" />
                      <h4 className="text-xs uppercase font-mono tracking-wider font-extrabold text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-neutral-500 leading-normal">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Card / Expert Valuation Callout */}
            <div className="lg:col-span-5">
              <ParallaxCard
                id="expert-valuation-card-home"
                className="text-center space-y-6 p-8"
                onClick={() => {
                  setActiveTab("Products");
                  window.scrollTo({ top: 380, behavior: "smooth" });
                }}
              >
                <div className="mx-auto w-14 h-14 rounded-full bg-amber-500/5 border border-[#F39200]/25 flex items-center justify-center text-[#F39200] group-hover:scale-110 transition-transform">
                  <Landmark className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-black text-white group-hover:text-[#F39200] transition-colors">
                    Expert Valuation Engine
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Get the absolute best credit appraisal on your physical
                    ornaments. We utilize state-of-the-art non-invasive testing
                    protocols connected directly to live bullion indices.
                  </p>
                </div>

                <div className="font-mono text-xs text-[#F39200] font-bold py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] group-hover:border-[#F39200]/40 transition-colors">
                  Check Rate-Per-Gram Live
                </div>
              </ParallaxCard>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION WITH RESPONSIVE CARD HOVER EFFECT */}
      <section
        id="why-choose-us-home"
        className="relative py-24 z-20 px-6 sm:px-8 border-t border-neutral-900 bg-black/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#F39200] font-mono font-extrabold block">
              Elite Features
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white leading-tight">
              Crafted Financial Sovereignty
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              We stand apart through customized credit structures built
              exclusively to fuel business expansion, farming cycles, or
              immediate personal safety requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => (
              <ParallaxCard
                id={`why-choose-grid-card-${feat.index}`}
                key={feat.index}
                className="group relative p-8"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#F39200]/5 border border-[#F39200]/20 flex items-center justify-center font-mono text-xs font-bold text-[#F39200] group-hover:bg-[#F39200] group-hover:text-black transition-colors duration-300">
                    0{feat.index}
                  </div>
                  <h3 className="text-xs uppercase tracking-wider font-extrabold text-neutral-100 group-hover:text-[#F39200] transition-colors">
                    {feat.title}
                  </h3>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {feat.text}
                </p>
              </ParallaxCard>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIRED DOCUMENTS SECTION */}
      <section
        id="required-documents"
        className="relative py-24 z-20 px-6 sm:px-8 border-t border-neutral-900/60 bg-gradient-to-b from-transparent to-[#07080b]"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#F39200] font-mono font-extrabold block">
              Pristine Protocol
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Simplified KYC Verifications
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-normal">
              No complex credit scoring or historical ledger checks. Just bring
              standard identity proofs to initiate the secured gold lending
              disbursement immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Identity Proof Card */}
            <ParallaxCard
              id="iden-proof-intercard"
              className="flex flex-col justify-between p-8"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-500/5 rounded-xl text-[#F39200]">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Identity Verification
                  </h3>
                </div>
                <p className="text-xs text-neutral-400">
                  Provide any one of the following official government
                  registers:
                </p>
                <ul className="space-y-2.5 pt-2">
                  {idDocs.map((doc, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-xs text-neutral-300"
                    >
                      <CheckCircle className="w-4 h-4 text-[#F39200] shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-900 text-[10px] text-neutral-500 font-mono">
                REGULATORY STATUS: // PAN + UID Verified
              </div>
            </ParallaxCard>

            {/* Address Proof Card */}
            <ParallaxCard
              id="addr-proof-intercard"
              className="flex flex-col justify-between p-8"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-500/5 rounded-xl text-[#F39200]">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Address Verification (Residence)
                  </h3>
                </div>
                <p className="text-xs text-neutral-400">
                  Provide any one document confirming your active dwelling
                  place:
                </p>
                <ul className="space-y-2.5 pt-2">
                  {addressDocs.map((doc, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-xs text-neutral-300"
                    >
                      <CheckCircle className="w-4 h-4 text-[#F39200] shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-900 text-[10px] text-neutral-500 font-mono">
                REGULATORY STATUS: // Active Bills / UID Address Match
              </div>
            </ParallaxCard>
          </div>

          <div className="mt-8 p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 text-center select-none">
            <p className="text-[11px] text-neutral-400 leading-normal">
              <strong>Income Certifications are never asked.</strong> Borrowing
              with Sree Sundaram Finance is streamlined on collateral worth,
              opening paths for people with zero legacy files.
            </p>
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS SECTION */}
      <section
        id="testimonials-home"
        className="relative py-24 z-20 px-6 sm:px-8 border-t border-neutral-900 bg-[#07080b]/50"
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#F39200] font-mono font-extrabold block">
              Verified Advocacy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-white">
              Trust Built on Absolute Transparency
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto">
              Real testimonials from small scale industrialists, agriculturists,
              and retail customers who upgraded their liquidity.
            </p>
          </div>

          <ParallaxCard
            id="testimonial-spotlight-card"
            className="max-w-2xl mx-auto text-left space-y-6 p-8"
          >
            <div className="absolute top-6 right-8 text-[#F39200]/10 select-none">
              <Quote className="w-12 h-12" />
            </div>

            <div className="flex items-center gap-1 text-[#F39200]">
              {[...Array(5)].map((_, i) => (
                <Sparkles key={i} className="w-3.5 h-3.5 fill-[#F39200]" />
              ))}
            </div>

            <p className="text-sm md:text-base text-neutral-200 font-serif leading-relaxed italic">
              "The appraisal process at Sree Sundaram Finance Bhosari was
              remarkably fast. Sree Sundaram provides extremely low compound
              interest elements on gold loans with absolute transparency."
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-900">
              <div>
                <span className="font-serif font-bold text-white text-sm block">
                  Rohan Shinde
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#F39200]">
                  Industrialist, Bhosari Pune
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-500">
                <HeartHandshake className="w-4 h-4 text-[#F39200]/60" />{" "}
                Standard Registered Partner Review
              </div>
            </div>
          </ParallaxCard>
        </div>
      </section>
    </div>
  );
}
