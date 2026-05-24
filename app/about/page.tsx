"use client";
import Link from "next/link";
import Image from "next/image";

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge" style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.6rem", letterSpacing: "0.25em" }}>{children}</span>;
}

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-28 overflow-hidden" style={{ background: "#080808" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 60%)" }} />
        <div className="absolute left-[10%] top-0 bottom-0 w-px pointer-events-none" style={{ background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.07) 30%, rgba(212,175,55,0.07) 70%, transparent)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-6"><Badge>ABOUT US</Badge></div>
          <h1 className="font-display font-bold text-white leading-tight mb-6" style={{ fontSize: "clamp(2.5rem,6vw,5.5rem)", lineHeight: "1.05" }}>
            Who We <span className="gold-shimmer">Are</span>
          </h1>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px" style={{ background: "rgba(212,175,55,0.5)" }} />
            <p className="font-sans-premium text-smoke uppercase tracking-widest" style={{ fontSize: "0.7rem", letterSpacing: "0.3em" }}>Sree Sundaram Finance Pvt. Ltd. · Bhosari, Pune</p>
          </div>
          <p className="font-sans-premium text-smoke-2 max-w-2xl leading-relaxed" style={{ fontSize: "clamp(0.9rem,1.5vw,1.05rem)", lineHeight: "2" }}>
            A trusted financial institution dedicated to providing gold loans and comprehensive financial solutions with transparency, integrity, and speed. Led by Shailesh Thakur, we serve the community of Bhosari, Pune with unmatched commitment.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="relative py-28 overflow-hidden" style={{ background: "#0D0D0D" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="mb-6"><Badge>OUR MISSION</Badge></div>
              <h2 className="font-display font-bold text-white mb-8" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", lineHeight: "1.15" }}>
                Making Financial Services <span className="gold-shimmer">Accessible</span> to Everyone
              </h2>
              <p className="font-sans-premium text-smoke-2 mb-8 leading-relaxed" style={{ fontSize: "0.9rem", lineHeight: "2" }}>
                Sree Sundaram Finance Private Limited provides gold loans to all segments — small business owners, entrepreneurs, farmers, and more. We are committed to making financial services accessible and transparent for the people of Pune and beyond.
              </p>
              <p className="font-sans-premium text-smoke-2 leading-relaxed" style={{ fontSize: "0.9rem", lineHeight: "2" }}>
                Under the leadership of Shailesh Thakur, we have built a reputation for speed, reliability, and genuine customer care. Every transaction is handled with the highest ethical standards and professional expertise.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)" }} />
              <div className="relative p-10" style={{ background: "rgba(212,175,55,0.03)", border: "1px solid rgba(212,175,55,0.12)" }}>
                <div className="absolute top-0 left-0 w-6 h-6" style={{ borderTop: "2px solid rgba(212,175,55,0.5)", borderLeft: "2px solid rgba(212,175,55,0.5)" }} />
                <div className="absolute top-0 right-0 w-6 h-6" style={{ borderTop: "2px solid rgba(212,175,55,0.5)", borderRight: "2px solid rgba(212,175,55,0.5)" }} />
                <div className="absolute bottom-0 left-0 w-6 h-6" style={{ borderBottom: "2px solid rgba(212,175,55,0.5)", borderLeft: "2px solid rgba(212,175,55,0.5)" }} />
                <div className="absolute bottom-0 right-0 w-6 h-6" style={{ borderBottom: "2px solid rgba(212,175,55,0.5)", borderRight: "2px solid rgba(212,175,55,0.5)" }} />
                <div className="flex items-center gap-5 mb-6 pb-6" style={{ borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image src="/logo.png" alt="Sree Sundaram Finance" fill className="object-contain" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-lg">Shailesh Thakur</p>
                    <p className="font-sans-premium text-gold uppercase tracking-widest mt-1" style={{ fontSize: "0.62rem", letterSpacing: "0.2em" }}>Director & Finance Advisor</p>
                    <p className="font-sans-premium text-smoke-2 mt-1" style={{ fontSize: "0.75rem" }}>+91 8888 759 696</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { v: "GSTIN", d: "27ABTCS3490FIZT" },
                    { v: "Location", d: "Bhosari, Pune" },
                    { v: "Speciality", d: "Gold Loans & All Loan Types" },
                    { v: "Address", d: "Near Bhosari English School" },
                  ].map((item) => (
                    <div key={item.v}>
                      <p className="font-sans-premium text-gold uppercase tracking-widest mb-1" style={{ fontSize: "0.58rem", letterSpacing: "0.2em" }}>{item.v}</p>
                      <p className="font-sans-premium text-smoke" style={{ fontSize: "0.78rem" }}>{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-28 overflow-hidden" style={{ background: "#080808" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="mb-5 flex justify-center"><Badge>OUR VALUES</Badge></div>
            <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)" }}>
              Values &amp; <span className="gold-shimmer">Commitment</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(212,175,55,0.08)" }}>
            {[
              { icon: "♛", title: "Customer is King", desc: "We believe every customer deserves genuine respect, care, and attention. We strive to create lasting relationships and consistently surpass expectations." },
              { icon: "◉", title: "Sense of Responsibility", desc: "We aim for decisions that foster shared progress and trust. Our actions build a better future for society beyond just business goals." },
              { icon: "✦", title: "Power of Our People", desc: "We believe in diversity and that our people are our strength. Every employee is empowered to grow and thrive together." },
            ].map((val, i) => (
              <div key={i} className="relative p-10 group transition-all duration-500" style={{ background: "#080808" }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "rgba(212,175,55,0.03)" }} />
                <div className="text-4xl mb-6 gold-shimmer font-display" style={{ lineHeight: 1 }}>{val.icon}</div>
                <h3 className="font-display font-bold text-white mb-4" style={{ fontSize: "1.3rem" }}>{val.title}</h3>
                <p className="font-sans-premium text-smoke-2" style={{ fontSize: "0.82rem", lineHeight: "2" }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="relative py-28" style={{ background: "#0D0D0D" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="mb-5 flex justify-center"><Badge>OUR COMMITMENT</Badge></div>
            <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)" }}>
              What We <span className="gold-shimmer">Stand For</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Business loans secured against gold jewellery",
              "Personal gold loans for all needs",
              "Fast, secure and dependable loan solutions",
              "Transparent process & competitive interest rates",
              "State-of-the-art security for pledged gold",
              "Finance Advisor — all types of loans available",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5" style={{ border: "1px solid rgba(212,175,55,0.1)" }}>
                <span className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)" }}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </span>
                <span className="font-sans-premium text-smoke" style={{ fontSize: "0.85rem", lineHeight: "1.7" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24" style={{ background: "#080808", borderTop: "1px solid rgba(212,175,55,0.1)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 60%)" }} />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)" }}>
            Ready to <span className="gold-shimmer">Get Started?</span>
          </h2>
          <p className="font-sans-premium text-smoke-2 mb-10" style={{ fontSize: "0.88rem", lineHeight: "2" }}>
            Visit us at Bhosari, Pune or call Shailesh Thakur directly to begin your gold loan journey.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/contact" className="font-sans-premium font-600 uppercase tracking-widest px-10 py-4 transition-all duration-300 hover:scale-105" style={{ background: "linear-gradient(135deg, #A8892A, #D4AF37, #F0D060)", color: "#080808", fontSize: "0.72rem", letterSpacing: "0.2em" }}>
              Contact Us
            </Link>
            <Link href="/products" className="font-sans-premium font-500 uppercase tracking-widest px-10 py-4 transition-all duration-300" style={{ border: "1px solid rgba(212,175,55,0.3)", color: "#D4AF37", fontSize: "0.72rem", letterSpacing: "0.2em" }}>
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
