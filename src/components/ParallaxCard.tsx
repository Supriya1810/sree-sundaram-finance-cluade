import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';

interface ParallaxCardProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  onClick?: () => void;
  glowColor?: string;
  key?: React.Key;
}

export default function ParallaxCard({ 
  children, 
  id, 
  className = '', 
  onClick, 
  glowColor = '#D4A017' 
}: ParallaxCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // Calculate rotation bounds (~6 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        scale: isHovered ? 1.02 : 1,
        y: isHovered ? -6 : 0,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className={`relative overflow-hidden cursor-pointer rounded-2xl bg-lux-bg-secondary/70 backdrop-blur-md border transition-all duration-300 ${
        isHovered ? 'border-lux-gold-primary/70 shadow-xl shadow-lux-gold-primary/10' : 'border-lux-border'
      } ${className}`}
    >
      {/* Dynamic glow tracking the cursor */}
      {isHovered && (
        <div
          className="absolute pointer-events-none rounded-full blur-[65px] opacity-100 transition-opacity duration-300 z-0"
          style={{
            width: '260px',
            height: '260px',
            background: `radial-gradient(circle, ${glowColor}25 0%, ${glowColor}00 70%)`,
            left: `${coords.x - 130}px`,
            top: `${coords.y - 130}px`,
          }}
        />
      )}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
