"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
      style={{
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,0.12)" : "none",
        backdropFilter: scrolled ? "blur(24px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-16 h-16 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Sree Sundaram Finance"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* <div className="hidden sm:block">
            <div
              className="text-xs font-sans-premium font-700 tracking-widest uppercase"
              style={{ color: "#E8850A", fontSize: "0.6rem", letterSpacing: "0.2em" }}
            >
              Sree Sundaram
            </div>
            <div
              className="font-sans-premium font-bold tracking-wider uppercase text-white"
              style={{ fontSize: "0.85rem", letterSpacing: "0.15em" }}
            >
              Finance Pvt. Ltd.
            </div>
          </div> */}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-sans-premium text-xs font-600 tracking-widest uppercase transition-colors duration-300 group"
              style={{
                color: pathname === link.href ? "#D4AF37" : "#B8B8B8",
                letterSpacing: "0.18em",
              }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-px transition-all duration-500"
                style={{
                  background: "linear-gradient(90deg, #D4AF37, #F0D060)",
                  width: pathname === link.href ? "100%" : "0%",
                }}
              />
            </Link>
          ))}
          {/* <Link
            href="/contact"
            className="font-sans-premium text-xs font-600 tracking-widest uppercase px-6 py-2.5 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #A8892A, #D4AF37, #F0D060)",
              color: "#080808",
              letterSpacing: "0.18em",
            }}
          >
            Apply Now
          </Link> */}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className="block h-px w-6 transition-all duration-300"
            style={{
              background: "#D4AF37",
              transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}
          />
          <span
            className="block h-px w-6 transition-all duration-300"
            style={{
              background: "#D4AF37",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-px w-6 transition-all duration-300"
            style={{
              background: "#D4AF37",
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(8,8,8,0.97)",
            borderColor: "rgba(212,175,55,0.15)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-8 py-4 font-sans-premium text-xs tracking-widest uppercase border-b"
              style={{
                color: pathname === link.href ? "#D4AF37" : "#B8B8B8",
                borderColor: "rgba(212,175,55,0.08)",
                letterSpacing: "0.2em",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-8 py-5">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center font-sans-premium text-xs font-600 tracking-widest uppercase px-6 py-3"
              style={{
                background: "linear-gradient(135deg, #A8892A, #D4AF37)",
                color: "#080808",
                letterSpacing: "0.18em",
              }}
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
