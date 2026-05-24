import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function SreeSundaramLogo({ className = '', iconOnly = false, size = 'md' }: LogoProps) {
  // Dimensions based on preset sizes
  const dims = {
    sm: { iconWidth: 28, iconHeight: 28, textClass: 'text-xs', subClass: 'text-[6px]' },
    md: { iconWidth: 42, iconHeight: 42, textClass: 'text-base', subClass: 'text-[9px]' },
    lg: { iconWidth: 64, iconHeight: 64, textClass: 'text-2xl', subClass: 'text-[11px]' },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Dynamic Vector Pillar Icon with exact S-S-F design */}
      <svg
        width={dims.iconWidth}
        height={dims.iconHeight}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transform transition-transform duration-300 group-hover:scale-110"
      >
        {/* Top Capital / Stepped Plates */}
        <path d="M10 10H110V18H10V10Z" fill="#F39200" />
        <path d="M16 21H104V25H16V21Z" fill="#F39200" />
        <path d="M22 28H98V31H22V28Z" fill="#F39200" />
        <path d="M26 34H94V37H26V34Z" fill="#F39200" />

        {/* SSF integrated pillar core body */}
        {/* Upper S Curve */}
        <path
          d="M87 43C87 39 52 39 52 46C52 54 87 51 87 60C87 69 46 68 46 62H55C55 64 77 64 77 60C77 56 43 57 43 46C43 36 87 36 87 43Z"
          fill="#F39200"
        />
        
        {/* Middle S Curve */}
        <path
          d="M87 68C87 64 52 64 52 71C52 79 87 76 87 85C87 94 46 93 46 87H55C55 89 77 89 77 85C77 81 43 82 43 71C43 61 87 61 87 68Z"
          fill="#F39200"
        />

        {/* Lower F Shape */}
        <path
          d="M45 93H83V98H54V102H76V107H54V112H45V93Z"
          fill="#F39200"
        />

        {/* Bottom Base / Plinths */}
        <path d="M24 114H96V117H24V114Z" fill="#F39200" />
        <path d="M14 118H106V122H14V118Z" fill="#F39200" />
      </svg>

      {/* Styled brand text matches Sree Sundaram Finance Private Limited logo exactly */}
      {!iconOnly && (
        <div className="flex flex-col text-left justify-center select-none font-sans leading-none">
          <div className="font-extrabold tracking-wider text-white flex flex-col font-sans">
            <span 
              className={`font-black tracking-widest text-[#F39200] leading-none ${
                size === 'sm' ? 'text-[11px] font-bold' : size === 'lg' ? 'text-3xl' : 'text-lg'
              }`}
            >
              SREE
            </span>
            <span 
              className={`font-black tracking-widest text-[#F39200] leading-none mt-0.5 ${
                size === 'sm' ? 'text-[11px] font-bold' : size === 'lg' ? 'text-3xl' : 'text-lg'
              }`}
            >
              SUNDARAM
            </span>
            <span 
              className={`font-black tracking-widest text-[#F39200] leading-none mt-0.5 ${
                size === 'sm' ? 'text-[11px] font-bold' : size === 'lg' ? 'text-3xl' : 'text-lg'
              }`}
            >
              FINANCE
            </span>
          </div>
          <span 
            className={`font-bold uppercase tracking-wider text-[#939598] font-mono mt-1 ${dims.subClass}`}
          >
            PRIVATE LIMITED
          </span>
        </div>
      )}
    </div>
  );
}
