import React from 'react';

interface LogoProps {
  variant?: 'full' | 'horizontal' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl'; // Backward compatibility
  iconOnly?: boolean;              // Backward compatibility
  alwaysShowText?: boolean;
  className?: string;
}

export default function SreeSundaramLogo({ 
  variant = 'horizontal', 
  size, 
  iconOnly, 
  alwaysShowText = false,
  className = '' 
}: LogoProps) {
  
  // Resolve backward compatibility props
  let activeVariant = variant;
  if (iconOnly === true) {
    activeVariant = 'icon';
  } else if (size === 'xl' && variant === 'horizontal') {
    activeVariant = 'full';
  }

  // Sizing mapping based on size parameter or standard responsive rules
  // Standard responsive heights required:
  // Desktop height: 48px - 64px (we'll use 56px)
  // Tablet height: 42px - 52px (we'll use 46px)
  // Mobile height: 36px - 44px (we'll use 38px)
  const sizeClasses = {
    icon: 'h-[38px] sm:h-[46px] lg:h-[56px] w-auto object-contain',
    horizontal: 'h-[38px] sm:h-[46px] lg:h-[56px] w-auto object-contain',
    full: 'h-[80px] sm:h-[110px] lg:h-[140px] w-auto object-contain',
  }[activeVariant];

  const renderGoldSVGIcon = () => (
    <svg 
      viewBox="85 45 330 370" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
      style={{ display: 'block' }}
    >
      <defs>
        {/* Supreme Luxury 3D Gold Gradient */}
        <linearGradient id="logo-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8C6239" />
          <stop offset="20%" stopColor="#D4AF37" />
          <stop offset="45%" stopColor="#FFF2CC" />
          <stop offset="55%" stopColor="#FFF2CC" />
          <stop offset="80%" stopColor="#F4C542" />
          <stop offset="100%" stopColor="#593C1D" />
        </linearGradient>

        <linearGradient id="logo-gold-solid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BF953F" />
          <stop offset="25%" stopColor="#FCF6BA" />
          <stop offset="50%" stopColor="#B38728" />
          <stop offset="75%" stopColor="#FBF5B7" />
          <stop offset="100%" stopColor="#AA771C" />
        </linearGradient>

        <filter id="logo-gold-glow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#000000" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* 1. Open Circular Ring (Matched beautifully to input_file_0.png) */}
      <path 
        d="M 327.5 115.8 A 155 155 0 1 1 172.5 115.8" 
        stroke="url(#logo-gold-solid)" 
        strokeWidth="11" 
        strokeLinecap="round" 
        filter="url(#logo-gold-glow)"
      />

      {/* 2. Three 4-Point Sparkle Stars */}
      <g filter="url(#logo-gold-glow)">
        {/* Center Main Star */}
        <path d="M 250 50 Q 250 75 275 75 Q 250 75 250 100 Q 250 75 225 75 Q 250 75 250 50" fill="url(#logo-gold-solid)" />
        {/* Left Star */}
        <path d="M 180 88 Q 180 100 192 100 Q 180 100 180 112 Q 180 100 168 100 Q 180 100 180 88" fill="url(#logo-gold-solid)" opacity="0.95" />
        {/* Right Star */}
        <path d="M 320 88 Q 320 100 332 100 Q 320 100 320 112 Q 320 100 308 100 Q 320 100 320 88" fill="url(#logo-gold-solid)" opacity="0.95" />
      </g>

      {/* 3. Elegantly Centered S Monogram */}
      <path 
        d="M 308 145 
           C 341 158, 341 210, 276 223 
           C 211 236, 205 275, 263 288 
           C 322 301, 325 340, 270 355 
           C 211 372, 166 327, 192 275
           L 205 277 
           C 185 316, 218 353, 263 337
           C 308 322, 302 290, 250 277 
           C 192 262, 192 220, 257 205 
           C 322 189, 315 160, 296 153 Z" 
        fill="url(#logo-gold-solid)" 
        filter="url(#logo-gold-glow)"
      />

      {/* 4. Elegant Integrated Rupee symbol in the lower curve */}
      <path 
        d="M 236 292 H 258 
           M 236 299 H 255 
           M 240 292 V 321 
           M 240 306 C 253 306, 253 318, 240 321 
           M 240 321 L 254 335" 
        stroke="url(#logo-gold-solid)" 
        strokeWidth="5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none"
        filter="url(#logo-gold-glow)"
      />
    </svg>
  );

  return (
    <div id="gold-logo-container" className={`logo-container flex items-center gap-3.5 select-none ${className}`}>
      
      {/* Dynamic sized Icon wrap */}
      <div className={`logo relative shrink-0 flex items-center justify-center ${sizeClasses}`}>
        {renderGoldSVGIcon()}
      </div>

      {/* 1. HORIZONTAL CONFIGURATION (Best for responsive nav bar) */}
      {activeVariant === 'horizontal' && (
        <div className={`${alwaysShowText ? 'flex' : 'hidden sm:flex'} flex-col text-left justify-center select-none leading-none font-serif pt-0.5`}>
          <div className="flex flex-col">
            <span className="font-serif font-black tracking-[0.2em] text-[#D4AF37] text-xs sm:text-[14px] lg:text-[16px] leading-tight uppercase font-[900]">
              SREE SUNDARAM
            </span>
            <span className="font-serif font-bold tracking-[0.25em] text-white text-[9.5px] sm:text-[11px] lg:text-[12.5px] leading-tight mt-1 uppercase">
              FINANCE
            </span>
          </div>
          <span className="font-mono font-bold tracking-[0.3em] text-[#B8860B] text-[7px] sm:text-[8px] lg:text-[9px] mt-1 uppercase">
            PRIVATE LIMITED
          </span>
        </div>
      )}

      {/* 2. FULL STATIC OUT-OF-NAV LOGO (Emblem on top, text centered under) */}
      {activeVariant === 'full' && (
        <div className="flex flex-col items-center text-center justify-center mt-3 select-none leading-none w-full">
          <h1 className="font-serif font-black tracking-[0.2em] text-[#D4AF37] text-lg sm:text-2xl leading-tight uppercase">
            SREE SUNDARAM
          </h1>
          <div className="my-[7px] flex items-center gap-2">
            <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <span className="font-serif font-[800] tracking-[0.3em] text-white text-xs sm:text-sm uppercase">
              FINANCE
            </span>
            <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
          </div>
          <span className="font-mono font-bold tracking-[0.38em] text-[#B8860B] text-[8.5px] sm:text-xs uppercase">
            PRIVATE LIMITED
          </span>
        </div>
      )}
    </div>
  );
}
