import React, { useState, useEffect, useRef } from "react";
import { Award, Users, TrendingUp, Handshake } from "lucide-react";
import { motion } from "motion/react";
import ParallaxCard from "./ParallaxCard";

interface StatItem {
  target: number;
  suffix: string;
  prefix: string;
  label: string;
  desc: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const statsData: StatItem[] = [
  {
    target: 5,
    prefix: "",
    suffix: "+",
    label: "Years Experience",
    desc: "A decade of unwavering fidelity and wealth protection across Maharashtra.",
    icon: Award,
  },
  {
    target: 100,
    prefix: "",
    suffix: "+",
    label: "Happy Customers",
    desc: "Empowering small business owners, micro-entrepreneurs, and retail clients.",
    icon: Users,
  },
  {
    target: 50,
    prefix: "₹",
    suffix: " L+",
    label: "Financial Solutions Delivered",
    desc: "High-value secure capital cleared with absolute confidence and promptness.",
    icon: TrendingUp,
  },
  {
    target: 98,
    prefix: "",
    suffix: "%",
    label: "Customer Satisfaction",
    desc: "Earning trust through 100% pricing transparency and zero hidden terms.",
    icon: Handshake,
  },
];

// Custom resilient hook for trigger animation on scroll
function useIntersectionInView(ref: React.RefObject<Element | null>) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isInView;
}

export default function PremiumStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionInView(sectionRef);

  return (
    <section
      id="trust-statistics-section"
      ref={sectionRef}
      className="relative py-20 z-20 px-6 sm:px-8 max-w-7xl mx-auto border-t border-lux-border bg-gradient-to-b from-lux-bg-secondary/20 via-black/10 to-transparent"
    >
      {/* Visual atmospheric glow behind the stats grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent)] pointer-events-none" />

      {/* Sub-header inside Statistics Section to anchor authority */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lux-gold-primary/5 border border-lux-border text-lux-gold-primary tracking-widest uppercase font-mono text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-lux-gold-primary animate-pulse" />
          <span>Sovereign Financial Credibility Metrics</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-black text-white tracking-tight">
          Establish Absolute Security & Trust
        </h2>
        <p className="text-lux-text-sec text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
          Built on a solid foundation of transparency, strict regulatory
          compliance, and localized expertise.
        </p>
      </div>

      {/* 4-column desktop, 2-column tablet, 1-column mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, idx) => (
          <StatCard
            key={idx}
            stat={stat}
            triggerAnimate={isInView}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}

interface StatCardProps {
  stat: StatItem;
  triggerAnimate: boolean;
  index: number;
  key?: React.Key;
}

function StatCard({ stat, triggerAnimate, index }: StatCardProps) {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (!triggerAnimate) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds animation duration

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);

      // Easing out cubic
      const easeProgress = 1 - Math.pow(1 - progressPercentage, 3);
      const currentCount = Math.floor(easeProgress * stat.target);

      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(stat.target);
      }
    };

    requestAnimationFrame(animateCount);
  }, [triggerAnimate, stat.target]);

  return (
    <ParallaxCard
      id={`trust-stat-parallax-${index}`}
      glowColor="#D4AF37"
      className="p-6 sm:p-7 lg:p-10 bg-lux-bg-secondary/95 border border-lux-gold-primary/10 hover:border-lux-gold-primary/30 transition-all duration-300 rounded-[24px] relative overflow-hidden flex flex-col justify-between shadow-2xl hover:shadow-lux-gold-primary/[0.04] group cursor-pointer min-h-[380px]"
    >
      {/* Subtle luxury ambient glow behind statistics (maximum opacity: 10%) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.02),transparent_65%)] pointer-events-none group-hover:bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent_65%)] transition-all duration-500" />
      <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-lux-gold-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top Section: Elegant Icon Frame & Reference label */}
      <div className="flex items-center justify-between">
        <div className="p-3 bg-lux-gold-primary/[0.03] rounded-xl border border-lux-gold-primary/10 group-hover:border-lux-gold-primary/25 text-lux-gold-primary group-hover:scale-105 transition-all duration-300">
          <Icon className="w-5 h-5 text-lux-gold-primary" strokeWidth={1} />
        </div>
        <span className="text-[9px] font-mono tracking-widest text-[#8E9196]/80 select-none uppercase">
          SECURE CREDIBILITY // 0{index + 1}
        </span>
      </div>

      {/* Middle Section: Typographic stats with strict required spacing */}
      <div className="mt-6 flex-1 flex flex-col justify-start">
        {/* Large premium statistic count - Solid text color, extremely dominant focal point */}
        <div className="text-[3rem] sm:text-[4rem] lg:text-[3rem] font-sans font-extrabold tracking-tighter text-lux-gold-primary leading-none select-none">
          {stat.prefix}
          {count.toLocaleString()}
          {stat.suffix}
        </div>

        {/* Title text: precisely 16px (mt-4) spacing under statistic */}
        <h3 className="mt-4 text-[11px] sm:text-[12px] uppercase font-mono tracking-widest font-extrabold text-white group-hover:text-lux-gold-primary transition-colors duration-300 leading-snug">
          {stat.label}
        </h3>

        {/* Supporting information/description: precisely 16px (mt-4) spacing under title */}
        <p className="mt-4 text-[11.5px] text-lux-text-sec leading-relaxed font-sans font-normal border-t border-lux-border/20 pt-4">
          {stat.desc}
        </p>
      </div>

      {/* Bottom Section: Footer trust label (24px space before it, mt-6) */}
      <div className="mt-6 pt-4 border-t border-lux-border/10">
        <div className="text-[9px] font-mono text-lux-gold-primary/45 uppercase select-none group-hover:text-lux-gold-primary/80 transition-colors flex items-center gap-2 tracking-wider">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-lux-gold-primary/50 animate-pulse" />
          Verified Audit Protocol
        </div>
      </div>
    </ParallaxCard>
  );
}
