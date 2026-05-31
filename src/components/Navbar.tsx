import React, { useState } from "react";
import { Menu, X, Shield, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import SreeSundaramLogo from "../assets/logo.png";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "Home", label: "Home" },
    { id: "About", label: "About Us" },
    { id: "Products", label: "Loan Products" },
    { id: "Contact", label: "Contact Office" },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      id="primary-navbar"
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-between px-6 py-2 rounded-full bg-lux-bg-secondary/92 border border-lux-border backdrop-blur-xl shadow-2xl relative shadow-black/45"
        >
          {/* Brand Logo with SreeSundaramLogo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick("Home")}
            className="flex items-center text-left focus:outline-none group cursor-pointer"
          >
            {/* <SreeSundaramLogo /> */}
            <img
              src={SreeSundaramLogo}
              alt="SreeSundaram Logo"
              className="w-10"
            />
          </button>

          {/* Nav Menu Desktop (with staggered interaction) */}
          <div className="hidden md:flex items-center gap-1.5">
            {menuItems.map((item, idx) => {
              const isActive = activeTab === item.id;
              return (
                <motion.button
                  id={`nav-link-desktop-${item.id.toLowerCase()}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 text-xs uppercase tracking-widest font-mono font-bold rounded-full cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "text-lux-gold-primary"
                      : "text-lux-text-sec hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-lux-gold-primary/10 border border-lux-border rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-lux-text-muted hover:text-lux-gold-primary hover:bg-white/[0.05] rounded-full transition-all cursor-pointer focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-lux-gold-primary" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Drawer Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md md:hidden z-40 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[280px] bg-lux-bg-secondary/98 border-l border-lux-border backdrop-blur-2xl p-8 z-50 md:hidden flex flex-col justify-between shadow-2xl"
          >
            <div className="space-y-8">
              {/* Mobile menu header */}
              <div className="flex items-center justify-between">
                {/* <SreeSundaramLogo variant="horizontal" /> */}
                <img
                  src={SreeSundaramLogo}
                  alt="SreeSundaram Logo"
                  className="w-3xs"
                />
                <button
                  id="drawer-close-btn"
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-lux-text-muted hover:text-white hover:bg-white/[0.05] rounded-full cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links grid */}
              <div className="flex flex-col gap-3">
                {menuItems.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      id={`nav-link-mobile-${item.id.toLowerCase()}`}
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left py-3 px-4 rounded-xl text-sm font-semibold uppercase tracking-widest font-mono transition-all duration-300 ${
                        isActive
                          ? "bg-lux-gold-primary/10 text-lux-gold-primary border-l-2 border-lux-gold-primary"
                          : "text-lux-text-sec hover:text-white font-normal hover:bg-lux-bg-primary/60"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer actions inside Mobile drawer */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-1 text-[10px] text-lux-text-muted font-mono">
                <Shield className="w-3.5 h-3.5 text-lux-gold-primary" />
                ISO 9001:2015 Premium Secured
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
