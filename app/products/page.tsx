"use client";
import Link from "next/link";

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge" style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.6rem", letterSpacing: "0.25em" }}>{children}</span>;
}

const products = [
  {
    id: "01",
    title: "Gold Loan",
    subtitle: "Instant Loan Against Gold",
    icon: "◈",
    range: "₹5,000 – ₹50 Lakh",
    rate: "7% – 15%",
    desc: "Get instant funds by pledging your gold jewellery. Quick disbursement, minimal documentation, and the best valuation in Bhosari. Ideal for immediate financial needs.",
    features: ["Expert gold valuation", "Same-day disbursement", "100% secure storage", "No hidden charges", "Flexible repayment options"],
  },
  {
    id: "02",
    title: "Business Loan",
    subtitle: "Against Gold Collateral",
    icon: "◇",
    range: "As per requirement",
    rate: "Competitive rates",
    desc: "Grow your business with funds secured against your gold assets. Perfect for small business owners, entrepreneurs, and MSMEs looking for quick capital.",
    features: ["Business-friendly repayment", "Quick processing", "Minimal documentation", "Expert advisory", "Flexible tenure"],
  },
  {
    id: "03",
    title: "Personal Loan",
    subtitle: "For Every Need",
    icon: "◎",
    range: "As per eligibility",
    rate: "Competitive rates",
    desc: "Personal financial solutions for medical emergencies, education, travel, or any personal need. Fast approval with transparent terms and no surprises.",
    features: ["Quick approval", "Flexible end-use", "Easy eligibility", "Transparent terms", "Dedicated support"],
  },
  {
    id: "04",
    title: "All Types of Loans",
    subtitle: "Finance Advisory Services",
    icon: "✦",
    range: "Customized solutions",
    rate: "Best available rates",
    desc: "As a comprehensive Finance Advisor, Shailesh Thakur and team guide you through all types of loan products — helping you find the right financial solution.",
    features: ["Expert financial advisory", "All loan categories", "Personalized guidance", "Best rate negotiation", "End-to-end support"],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-28 overflow-hidden" style={{ background: "#080808" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 60%)" }} />
        <div className="absolute right-[10%] top-0 bottom-0 w-px pointer-events-none" style={{ background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.07) 30%, rgba(212,175,55,0.07) 70%, transparent)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-6"><Badge>OUR PRODUCTS</Badge></div>
          <h1 className="font-display font-bold text-white leading-tight mb-6" style={{ fontSize: "clamp(2.5rem,6vw,5.5rem)", lineHeight: "1.05" }}>
            Loan <span className="gold-shimmer">Solutions</span><br />For Every Need
          </h1>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px" style={{ background: "rgba(212,175,55,0.5)" }} />
            <p className="font-sans-premium text-smoke uppercase tracking-widest" style={{ fontSize: "0.7rem", letterSpacing: "0.3em" }}>Finance Advisor · All Types of Loans Available</p>
          </div>
          <p className="font-sans-premium text-smoke-2 max-w-2xl leading-relaxed" style={{ fontSize: "clamp(0.9rem,1.5vw,1.05rem)", lineHeight: "2" }}>
            From gold loans to comprehensive financial advisory, Sree Sundaram Finance offers a complete range of financial products. Fast, transparent, and tailored to your needs.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#0D0D0D", borderTop: "1px solid rgba(212,175,55,0.08)", borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3">
            {[
              { value: "₹5K–₹50L", label: "Loan Amount Range" },
              { value: "7%–15%", label: "Interest Rate" },
              { value: "100%", label: "Secure Storage" },
            ].map((s, i) => (
              <div key={i} className="py-8 px-4 text-center" style={{ borderRight: i < 2 ? "1px solid rgba(212,175,55,0.08)" : "none" }}>
                <span className="gold-shimmer font-display font-bold block" style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)" }}>{s.value}</span>
                <p className="font-sans-premium text-smoke-2 mt-2 uppercase tracking-widest" style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="relative py-28 overflow-hidden" style={{ background: "#080808" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-8">
            {products.map((product, i) => (
              <div
                key={product.id}
                className="group relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.06)]"
                style={{ background: "rgba(212,175,55,0.02)", border: "1px solid rgba(212,175,55,0.1)" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "rgba(212,175,55,0.03)" }} />
                <div className="absolute inset-y-0 left-0 w-px group-hover:bg-gold transition-colors duration-500" style={{ background: "rgba(212,175,55,0.1)" }} />

                <div className="relative p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Number + Icon */}
                    <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4">
                      <span className="font-sans-premium font-bold text-smoke-3" style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}>{product.id}</span>
                      <span className="gold-shimmer font-display text-3xl" style={{ lineHeight: 1 }}>{product.icon}</span>
                    </div>

                    {/* Title */}
                    <div className="lg:col-span-3">
                      <h2 className="font-display font-bold text-white mb-2" style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)" }}>{product.title}</h2>
                      <p className="font-sans-premium uppercase tracking-widest text-gold" style={{ fontSize: "0.62rem", letterSpacing: "0.2em" }}>{product.subtitle}</p>
                    </div>

                    {/* Desc + Features */}
                    <div className="lg:col-span-5">
                      <p className="font-sans-premium text-smoke-2 mb-6" style={{ fontSize: "0.85rem", lineHeight: "2" }}>{product.desc}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.features.map((f) => (
                          <li key={f} className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#D4AF37" }} />
                            <span className="font-sans-premium text-smoke-2" style={{ fontSize: "0.78rem" }}>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Rate + CTA */}
                    <div className="lg:col-span-3 flex flex-col gap-4">
                      <div className="p-5" style={{ background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.1)" }}>
                        <p className="font-sans-premium text-gold uppercase tracking-widest mb-2" style={{ fontSize: "0.58rem", letterSpacing: "0.2em" }}>Loan Range</p>
                        <p className="font-display font-bold text-white" style={{ fontSize: "1.1rem" }}>{product.range}</p>
                        <div className="my-3" style={{ height: "1px", background: "rgba(212,175,55,0.1)" }} />
                        <p className="font-sans-premium text-gold uppercase tracking-widest mb-1" style={{ fontSize: "0.58rem", letterSpacing: "0.2em" }}>Interest Rate</p>
                        <p className="font-display font-bold text-white" style={{ fontSize: "1.1rem" }}>{product.rate}</p>
                      </div>
                      <Link href="/contact" className="font-sans-premium font-600 uppercase tracking-widest py-3 text-center transition-all duration-300 hover:scale-105" style={{ background: "linear-gradient(135deg, #A8892A, #D4AF37)", color: "#080808", fontSize: "0.65rem", letterSpacing: "0.2em" }}>
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="relative py-28" style={{ background: "#0D0D0D" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="mb-5 flex justify-center"><Badge>REQUIRED DOCUMENTS</Badge></div>
            <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)" }}>
              Simple <span className="gold-shimmer">Documentation</span> Process
            </h2>
            <p className="font-sans-premium text-smoke-2 max-w-xl mx-auto" style={{ fontSize: "0.85rem", lineHeight: "2" }}>
              Just bring these documents to get your loan approved quickly. We keep it minimal so you can focus on what matters.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { title: "Identity Proof", icon: "◈", docs: ["Aadhaar Card", "PAN Card", "Passport", "Voter ID"] },
              { title: "Address Proof", icon: "◎", docs: ["Aadhaar Card", "Driving License", "Voter ID", "Ration Card", "Passport", "Lease Agreement + Utility Bill"] },
            ].map((cat) => (
              <div key={cat.title} className="relative p-8" style={{ background: "rgba(212,175,55,0.03)", border: "1px solid rgba(212,175,55,0.12)" }}>
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

      {/* CTA */}
      <section className="relative py-24" style={{ background: "#080808", borderTop: "1px solid rgba(212,175,55,0.1)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 60%)" }} />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)" }}>
            Start Your <span className="gold-shimmer">Loan Journey</span> Today
          </h2>
          <p className="font-sans-premium text-smoke-2 mb-10" style={{ fontSize: "0.88rem", lineHeight: "2" }}>
            Contact Shailesh Thakur at +91 8888 759 696 or visit our office near Bhosari English School, Pune.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/contact" className="font-sans-premium font-600 uppercase tracking-widest px-10 py-4 transition-all duration-300 hover:scale-105" style={{ background: "linear-gradient(135deg, #A8892A, #D4AF37, #F0D060)", color: "#080808", fontSize: "0.72rem", letterSpacing: "0.2em" }}>
              Apply Now
            </Link>
            <a href="tel:+918888759696" className="font-sans-premium font-500 uppercase tracking-widest px-10 py-4 transition-all duration-300" style={{ border: "1px solid rgba(212,175,55,0.3)", color: "#D4AF37", fontSize: "0.72rem", letterSpacing: "0.2em" }}>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
