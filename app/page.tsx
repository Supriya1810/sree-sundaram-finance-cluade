"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="badge" style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.6rem", letterSpacing: "0.25em" }}>
      {children}
    </span>
  );
}

function GoldOrb({ size, top, left, delay, opacity }: { size: number; top: string; left: string; delay: number; opacity: number }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size, height: size, top, left,
        background: `radial-gradient(circle at 35% 35%, rgba(240,208,96,${opacity * 1.5}), rgba(212,175,55,${opacity}) 40%, transparent 70%)`,
        filter: "blur(2px)",
        animation: `float ${5 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

export default function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const h = (e: MouseEvent) => setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);
  const px = (mousePos.x - 0.5) * 20;
  const py = (mousePos.y - 0.5) * 20;

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-texture" style={{ background: "#080808" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(212,175,55,0.06) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(232,133,10,0.04) 0%, transparent 50%)" }} />
        <GoldOrb size={300} top="10%" left="65%" delay={0} opacity={0.08} />
        <GoldOrb size={150} top="60%" left="80%" delay={2} opacity={0.06} />
        <GoldOrb size={80} top="30%" left="15%" delay={3.5} opacity={0.1} />
        <div className="absolute left-[15%] top-0 bottom-0 w-px pointer-events-none" style={{ background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.08) 30%, rgba(212,175,55,0.08) 70%, transparent)" }} />
        <div className="absolute right-[20%] top-0 bottom-0 w-px pointer-events-none hidden lg:block" style={{ background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.05) 30%, transparent)" }} />
        <div className="absolute right-[5%] lg:right-[10%] top-1/2 pointer-events-none hidden lg:block" style={{ transform: `translate(${px * 0.5}px, calc(-50% + ${py * 0.5}px))`, transition: "transform 0.3s ease", opacity: 0.1 }}>
          <div style={{ width: 420, height: 420, background: "radial-gradient(circle at 40% 40%, rgba(240,208,96,0.4), rgba(168,137,42,0.2) 50%, transparent 70%)", borderRadius: "50%", filter: "blur(1px)", border: "1px solid rgba(212,175,55,0.2)" }}>
            <div className="absolute inset-10 rounded-full" style={{ border: "1px solid rgba(212,175,55,0.15)" }} />
            <div className="absolute inset-20 rounded-full" style={{ border: "1px solid rgba(212,175,55,0.1)" }} />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-8 animate-pulse-gold"><Badge>TRUSTED FINANCIAL PARTNER</Badge></div>
            <h1 className="font-display font-bold leading-none mb-6" style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)", lineHeight: "1.0" }}>
              <span className="text-white">Sree Sundaram</span><br />
              <span className="gold-shimmer">Finance</span>
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px" style={{ background: "rgba(212,175,55,0.5)" }} />
              <p className="font-sans-premium text-smoke uppercase tracking-widest" style={{ fontSize: "0.7rem", letterSpacing: "0.3em" }}>Finance Advisor · All Types of Loans Available</p>
            </div>
            <p className="font-sans-premium text-smoke-2 mb-12 max-w-xl leading-relaxed" style={{ fontSize: "clamp(0.9rem,1.5vw,1.05rem)", lineHeight: "2" }}>
              Simple, quick &amp; transparent gold loans at competitive rates. Expert finance advisory and all types of loan solutions — delivered with trust, expertise, and unmatched speed from Bhosari, Pune.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/contact" className="font-sans-premium font-600 uppercase tracking-widest px-10 py-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]" style={{ background: "linear-gradient(135deg, #A8892A, #D4AF37, #F0D060, #D4AF37)", color: "#080808", fontSize: "0.72rem", letterSpacing: "0.2em" }}>
                Apply Now
              </Link>
              <Link href="/about" className="font-sans-premium font-500 uppercase tracking-widest px-8 py-4 transition-all duration-300" style={{ border: "1px solid rgba(212,175,55,0.3)", color: "#D4AF37", fontSize: "0.72rem", letterSpacing: "0.2em" }}>
                Know Us Better
              </Link>
            </div>
          </div>
        </div>
        <div className="relative z-10" style={{ borderTop: "1px solid rgba(212,175,55,0.1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-3">
              {[{ value: "₹5K–₹50L", label: "Loan Amount Range" }, { value: "7%–15%", label: "Competitive Interest Rate" }, { value: "100%", label: "Secure Storage" }].map((s, i) => (
                <div key={i} className="py-8 px-4 text-center" style={{ borderRight: i < 2 ? "1px solid rgba(212,175,55,0.1)" : "none" }}>
                  <span className="gold-shimmer font-display font-bold block" style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)" }}>{s.value}</span>
                  <p className="font-sans-premium text-smoke-2 mt-2 uppercase tracking-widest" style={{ fontSize: "0.58rem", letterSpacing: "0.18em" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12" style={{ background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.8))", animation: "pulse-gold 2s ease-in-out infinite" }} />
          <span className="font-sans-premium uppercase tracking-widest text-gold" style={{ fontSize: "0.5rem", letterSpacing: "0.3em" }}>Scroll</span>
        </div>
      </section>

      {/* OUR PROMISE */}
      <section className="relative py-32 overflow-hidden" style={{ background: "#0D0D0D" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 50% at 80% 50%, rgba(212,175,55,0.04) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="mb-6"><Badge>OUR PROMISE</Badge></div>
              <h2 className="font-display font-bold text-white mb-8 leading-tight" style={{ fontSize: "clamp(2rem,4vw,3.5rem)", lineHeight: "1.1" }}>
                Simple, Quick &amp; <span className="gold-shimmer">Transparent</span><br />Gold Loans
              </h2>
              <p className="font-sans-premium text-smoke-2 mb-10 leading-relaxed" style={{ fontSize: "0.9rem", lineHeight: "2" }}>
                Experience the fastest and most reliable gold loan services with competitive rates and minimal documentation. We make financial solutions accessible to everyone — from entrepreneurs and farmers to small business owners.
              </p>
              <ul className="space-y-4">
                {["No Hidden Charges", "Minimal Documentation", "Flexible Repayment"].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="w-5 h-5 flex items-center justify-center flex-shrink-0" style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)" }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </span>
                    <span className="font-sans-premium text-smoke" style={{ fontSize: "0.85rem" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-8 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)" }} />
                <div className="glass-panel relative p-10 max-w-sm" style={{ background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.15)" }}>
                  <div className="absolute top-0 left-0 w-6 h-6" style={{ borderTop: "2px solid rgba(212,175,55,0.5)", borderLeft: "2px solid rgba(212,175,55,0.5)" }} />
                  <div className="absolute top-0 right-0 w-6 h-6" style={{ borderTop: "2px solid rgba(212,175,55,0.5)", borderRight: "2px solid rgba(212,175,55,0.5)" }} />
                  <div className="absolute bottom-0 left-0 w-6 h-6" style={{ borderBottom: "2px solid rgba(212,175,55,0.5)", borderLeft: "2px solid rgba(212,175,55,0.5)" }} />
                  <div className="absolute bottom-0 right-0 w-6 h-6" style={{ borderBottom: "2px solid rgba(212,175,55,0.5)", borderRight: "2px solid rgba(212,175,55,0.5)" }} />
                  <div className="w-16 h-16 mb-6 flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(168,137,42,0.2), rgba(212,175,55,0.3))", border: "1px solid rgba(212,175,55,0.3)" }}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><polygon points="16,4 20,12 29,12 22,18 25,27 16,21 7,27 10,18 3,12 12,12" fill="none" stroke="#D4AF37" strokeWidth="1.2"/><circle cx="16" cy="16" r="4" fill="rgba(212,175,55,0.3)"/></svg>
                  </div>
                  <h3 className="font-display font-bold text-white mb-3" style={{ fontSize: "1.6rem" }}>Expert Valuation</h3>
                  <p className="font-sans-premium text-smoke-2" style={{ fontSize: "0.82rem", lineHeight: "1.8" }}>Get the best value for your gold with our professional assessment by certified experts — ensuring complete transparency in every step.</p>
                  <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(212,175,55,0.1)" }}>
                    <p className="font-sans-premium uppercase tracking-widest text-gold" style={{ fontSize: "0.62rem", letterSpacing: "0.25em" }}>Certified · Transparent · Fair</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-32 overflow-hidden" style={{ background: "#080808" }}>
        <div className="horizontal-rule" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 20% 60%, rgba(212,175,55,0.03) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="mb-5 flex justify-center"><Badge>WHY CHOOSE US</Badge></div>
            <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
              Trusted Partner for <span className="gold-shimmer">Gold Loans</span>
            </h2>
            <p className="font-sans-premium text-smoke-2 max-w-2xl mx-auto" style={{ fontSize: "0.88rem", lineHeight: "2" }}>
              Serving small business owners, entrepreneurs, farmers, and all segments of society with accessible, transparent financial services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(212,175,55,0.08)" }}>
            {[
              { icon: "◈", title: "Best Value For Your Gold", desc: "Expert valuation ensures you get the highest possible rate per gram with complete transparent pricing." },
              { icon: "⚡", title: "Instant Processing", desc: "Hassle-free payment options with quick disbursement — get your funds when you need them most." },
              { icon: "◎", title: "Customer-First Service", desc: "Timely reminders and dedicated support team to help you throughout your entire loan journey." },
              { icon: "◇", title: "Transparent & Fair", desc: "Top-notch security with complete transparency. No hidden charges or surprise fees — ever." },
              { icon: "✦", title: "Experienced Team", desc: "Expert professionals across all branches with years of experience in gold loan services." },
              { icon: "◐", title: "Easy Documentation", desc: "Minimal paperwork required. Just bring your ID and address proof to get started immediately." },
            ].map((f, i) => (
              <div key={i} className="relative p-10 group transition-all duration-500 hover:z-10" style={{ background: "#080808", cursor: "default" }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "rgba(212,175,55,0.04)" }} />
                <div className="text-3xl mb-5 gold-shimmer font-display" style={{ lineHeight: 1 }}>{f.icon}</div>
                <h3 className="font-display font-bold text-white mb-3" style={{ fontSize: "1.2rem" }}>{f.title}</h3>
                <p className="font-sans-premium text-smoke-2" style={{ fontSize: "0.8rem", lineHeight: "1.9" }}>{f.desc}</p>
                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500" style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="relative py-32" style={{ background: "#0D0D0D" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="mb-5 flex justify-center"><Badge>REQUIRED DOCUMENTS</Badge></div>
            <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)" }}>Documents Required</h2>
            <p className="font-sans-premium text-smoke-2 max-w-xl mx-auto" style={{ fontSize: "0.85rem", lineHeight: "2" }}>Simple documentation process. Just bring these documents to get your gold loan approved quickly.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { title: "Identity Proof", icon: "◈", docs: ["Aadhaar Card", "PAN Card", "Passport", "Voter ID"] },
              { title: "Address Proof", icon: "◎", docs: ["Aadhaar Card", "Driving License", "Voter ID", "Ration Card", "Passport", "Lease Agreement + Utility Bill"] },
            ].map((cat) => (
              <div key={cat.title} className="relative p-8 overflow-hidden" style={{ background: "rgba(212,175,55,0.03)", border: "1px solid rgba(212,175,55,0.12)" }}>
                <div className="absolute top-0 left-0 w-8 h-8" style={{ borderTop: "1px solid rgba(212,175,55,0.4)", borderLeft: "1px solid rgba(212,175,55,0.4)" }} />
                <div className="flex items-center gap-3 mb-7">
                  <span className="gold-shimmer font-display text-2xl">{cat.icon}</span>
                  <h3 className="font-display font-bold text-white text-xl">{cat.title}</h3>
                </div>
                <ul className="space-y-3">
                  {cat.docs.map((doc) => (
                    <li key={doc} className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#D4AF37" }} />
                      <span className="font-sans-premium text-smoke-2" style={{ fontSize: "0.82rem" }}>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-32 overflow-hidden" style={{ background: "#080808" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="mb-6"><Badge>OUR VALUES</Badge></div>
              <h2 className="font-display font-bold text-white mb-6 leading-tight" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", lineHeight: "1.2" }}>
                Values &amp; <span className="gold-shimmer">Commitment</span> to Customers
              </h2>
              <p className="font-sans-premium text-smoke-2 leading-relaxed" style={{ fontSize: "0.85rem", lineHeight: "2" }}>
                At Sree Sundaram Finance, we are driven by strong ethical values, transparency, and an unwavering commitment to customer trust and satisfaction.
              </p>
              <div className="mt-10 space-y-3">
                {["Business loans secured against gold jewellery","Personal gold loans","Fast, secure and dependable loan solutions","Transparent process & competitive interest rates","State-of-the-art security for pledged gold"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#D4AF37" }} />
                    <span className="font-sans-premium text-smoke-2" style={{ fontSize: "0.8rem", lineHeight: "1.7" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Customer is King", icon: "♛", desc: "Every customer deserves genuine respect, care, and attention. We strive to create lasting relationships and consistently surpass expectations." },
                { title: "Sense of Responsibility", icon: "◉", desc: "Our decisions foster shared progress and trust. We build a better future for society that goes beyond just business goals." },
                { title: "Power of Our People", icon: "✦", desc: "We believe in diversity — our people are our strength. Every employee is empowered to grow and thrive together." },
              ].map((val, i) => (
                <div key={i} className="relative p-7 flex flex-col group cursor-default transition-all duration-500 hover:-translate-y-2" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(212,175,55,0.1)" }}>
                  <div className="text-3xl mb-5 font-sans-premium gold-shimmer" style={{ lineHeight: 1 }}>{val.icon}</div>
                  <h3 className="font-display font-bold text-white mb-3" style={{ fontSize: "1.1rem" }}>{val.title}</h3>
                  <p className="font-sans-premium text-smoke-2 flex-1" style={{ fontSize: "0.78rem", lineHeight: "1.9" }}>{val.desc}</p>
                  <div className="absolute inset-x-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative py-32 overflow-hidden" style={{ background: "#0D0D0D" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(212,175,55,0.04), transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="mb-5 flex justify-center"><Badge>CUSTOMER TESTIMONIALS</Badge></div>
          <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)" }}>
            Trust built on <span className="gold-shimmer">speed and transparency</span>
          </h2>
          <p className="font-sans-premium text-smoke-2 mb-16 max-w-xl mx-auto" style={{ fontSize: "0.85rem", lineHeight: "2" }}>Real experiences from customers who chose gold loans with confidence.</p>
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute -top-4 -left-4 text-8xl font-display leading-none pointer-events-none" style={{ color: "rgba(212,175,55,0.15)", lineHeight: 1 }}>"</div>
            <div className="relative p-10" style={{ background: "rgba(212,175,55,0.03)", border: "1px solid rgba(212,175,55,0.12)" }}>
              <div className="flex justify-center mb-6">{[1,2,3,4,5].map((s) => <span key={s} className="text-gold text-lg mx-0.5">★</span>)}</div>
              <p className="font-display text-white italic mb-8" style={{ fontSize: "clamp(1.1rem,2vw,1.4rem)", lineHeight: "1.7" }}>
                "The process was quick and transparent. I got my loan without any confusion. Shailesh sir and the team were incredibly helpful throughout."
              </p>
              <div className="horizontal-rule mb-6" />
              <p className="font-sans-premium font-600 text-gold uppercase tracking-widest" style={{ fontSize: "0.7rem", letterSpacing: "0.2em" }}>Rohan S.</p>
              <p className="font-sans-premium text-smoke-2 mt-1" style={{ fontSize: "0.7rem", letterSpacing: "0.15em" }}>Business Customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden" style={{ background: "linear-gradient(135deg, #0D0D0D 0%, #111008 50%, #0D0D0D 100%)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: "clamp(2rem,5vw,4rem)", lineHeight: "1.1" }}>
            Ready to <span className="gold-shimmer">Unlock the Value</span><br />of Your Gold?
          </h2>
          <p className="font-sans-premium text-smoke-2 mb-12 max-w-xl mx-auto" style={{ fontSize: "0.9rem", lineHeight: "2" }}>Walk in with your gold. Walk out with funds. Simple, fast, and completely transparent.</p>
          <div className="flex flex-wrap justify-center items-center gap-5">
            <Link href="/contact" className="font-sans-premium font-600 uppercase tracking-widest px-12 py-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]" style={{ background: "linear-gradient(135deg, #A8892A, #D4AF37, #F0D060)", color: "#080808", fontSize: "0.75rem", letterSpacing: "0.2em" }}>
              Apply Now
            </Link>
            <a href="tel:+918888759696" className="font-sans-premium font-500 uppercase tracking-widest px-10 py-4 transition-all duration-300" style={{ border: "1px solid rgba(212,175,55,0.3)", color: "#D4AF37", fontSize: "0.72rem", letterSpacing: "0.2em" }}>
              Call +91 8888 759 696
            </a>
          </div>
          <p className="font-sans-premium text-smoke-2 mt-8" style={{ fontSize: "0.72rem", letterSpacing: "0.1em" }}>
            Contact: <strong className="text-smoke">Shailesh Thakur</strong> · Near Bhosari English School, Bhosari, Pune – 411039
          </p>
        </div>
      </section>
    </>
  );
}
