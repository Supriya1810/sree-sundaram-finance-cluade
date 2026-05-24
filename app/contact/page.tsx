"use client";
import { useState } from "react";
import Image from "next/image";

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge" style={{ fontFamily: "var(--font-montserrat)", fontSize: "0.6rem", letterSpacing: "0.25em" }}>{children}</span>;
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", amount: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-28 overflow-hidden" style={{ background: "#080808" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-6"><Badge>CONTACT US</Badge></div>
          <h1 className="font-display font-bold text-white leading-tight mb-6" style={{ fontSize: "clamp(2.5rem,6vw,5.5rem)", lineHeight: "1.05" }}>
            Let&apos;s <span className="gold-shimmer">Connect</span>
          </h1>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px" style={{ background: "rgba(212,175,55,0.5)" }} />
            <p className="font-sans-premium text-smoke uppercase tracking-widest" style={{ fontSize: "0.7rem", letterSpacing: "0.3em" }}>Bhosari, Pune · +91 8888 759 696</p>
          </div>
          <p className="font-sans-premium text-smoke-2 max-w-xl leading-relaxed" style={{ fontSize: "clamp(0.9rem,1.5vw,1.05rem)", lineHeight: "2" }}>
            Reach out to Shailesh Thakur and the Sree Sundaram Finance team. We respond quickly and guide you through every step of your loan journey.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT */}
      <section className="relative py-20 overflow-hidden" style={{ background: "#0D0D0D" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Info */}
            <div className="lg:col-span-5 space-y-8">
              {/* Logo card */}
              <div className="p-8" style={{ background: "rgba(212,175,55,0.03)", border: "1px solid rgba(212,175,55,0.12)" }}>
                <div className="absolute top-0 left-0 w-6 h-6" />
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image src="/logo.png" alt="Sree Sundaram Finance" fill className="object-contain" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-lg">Sree Sundaram Finance</p>
                    <p className="font-sans-premium text-gold uppercase tracking-widest" style={{ fontSize: "0.58rem", letterSpacing: "0.2em" }}>Private Limited</p>
                  </div>
                </div>
                <div className="horizontal-rule mb-6" />
                <div className="space-y-4">
                  <div>
                    <p className="font-sans-premium text-gold uppercase tracking-widest mb-1" style={{ fontSize: "0.58rem", letterSpacing: "0.2em" }}>Contact Person</p>
                    <p className="font-sans-premium text-white font-600" style={{ fontSize: "0.9rem" }}>Shailesh Thakur</p>
                    <p className="font-sans-premium text-smoke-2" style={{ fontSize: "0.78rem" }}>Finance Advisor & Director</p>
                  </div>
                  <div>
                    <p className="font-sans-premium text-gold uppercase tracking-widest mb-1" style={{ fontSize: "0.58rem", letterSpacing: "0.2em" }}>GSTIN</p>
                    <p className="font-sans-premium text-smoke" style={{ fontSize: "0.85rem", letterSpacing: "0.05em" }}>27ABTCS3490FIZT</p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              {[
                {
                  icon: "📞",
                  label: "Phone",
                  value: "+91 8888 759 696",
                  href: "tel:+918888759696",
                  sub: "Call us for instant assistance",
                },
                {
                  icon: "✉",
                  label: "Email",
                  value: "hello@dhanprernagoldloan.com",
                  href: "mailto:hello@dhanprernagoldloan.com",
                  sub: "We reply within hours",
                },
                {
                  icon: "◎",
                  label: "Registered Office",
                  value: "Near Bhosari English School, Bhaghat Wasti, Sr. No. 23, Bhosari, Pune – 411039",
                  href: "https://maps.google.com",
                  sub: "Maharashtra, India",
                },
              ].map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("https") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="block p-6 group transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(212,175,55,0.02)", border: "1px solid rgba(212,175,55,0.1)" }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xl flex-shrink-0 mt-0.5" style={{ filter: "grayscale(1) brightness(2)" }}>{info.icon}</span>
                    <div>
                      <p className="font-sans-premium text-gold uppercase tracking-widest mb-1" style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}>{info.label}</p>
                      <p className="font-sans-premium text-smoke font-500 mb-1" style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>{info.value}</p>
                      <p className="font-sans-premium text-smoke-3" style={{ fontSize: "0.72rem" }}>{info.sub}</p>
                    </div>
                  </div>
                </a>
              ))}

              {/* Speciality */}
              <div className="p-6" style={{ background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.15)" }}>
                <p className="font-sans-premium text-gold uppercase tracking-widest mb-3" style={{ fontSize: "0.6rem", letterSpacing: "0.22em" }}>Specialist In</p>
                <p className="font-display font-bold text-white" style={{ fontSize: "1.1rem" }}>Finance Advisor &amp; All Types of Loans Available</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="relative p-8 lg:p-12" style={{ background: "rgba(212,175,55,0.02)", border: "1px solid rgba(212,175,55,0.1)" }}>
                <div className="absolute top-0 left-0 w-8 h-8" style={{ borderTop: "2px solid rgba(212,175,55,0.4)", borderLeft: "2px solid rgba(212,175,55,0.4)" }} />
                <div className="absolute top-0 right-0 w-8 h-8" style={{ borderTop: "2px solid rgba(212,175,55,0.4)", borderRight: "2px solid rgba(212,175,55,0.4)" }} />
                <div className="absolute bottom-0 left-0 w-8 h-8" style={{ borderBottom: "2px solid rgba(212,175,55,0.4)", borderLeft: "2px solid rgba(212,175,55,0.4)" }} />
                <div className="absolute bottom-0 right-0 w-8 h-8" style={{ borderBottom: "2px solid rgba(212,175,55,0.4)", borderRight: "2px solid rgba(212,175,55,0.4)" }} />

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)" }}>
                      <svg width="28" height="22" viewBox="0 0 28 22" fill="none"><path d="M2 11L10 19L26 3" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <h3 className="font-display font-bold text-white text-2xl mb-3">Request Received</h3>
                    <p className="font-sans-premium text-smoke-2" style={{ fontSize: "0.85rem", lineHeight: "1.9" }}>
                      Thank you! Shailesh Thakur will contact you shortly.<br />
                      You can also call us at <a href="tel:+918888759696" className="text-gold">+91 8888 759 696</a>
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <div className="mb-3"><Badge>APPLY FOR LOAN</Badge></div>
                      <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(1.5rem,2.5vw,2.2rem)" }}>
                        Start Your <span className="gold-shimmer">Application</span>
                      </h2>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {[
                        { id: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                        { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                        { id: "amount", label: "Loan Amount Required", type: "text", placeholder: "e.g. ₹5 Lakh" },
                      ].map((field) => (
                        <div key={field.id}>
                          <label className="block font-sans-premium text-smoke-2 uppercase tracking-widest mb-2" style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}>
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            value={(form as Record<string, string>)[field.id]}
                            onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                            className="w-full px-4 py-3 font-sans-premium text-white placeholder-smoke-3 outline-none transition-all duration-300 focus:border-gold"
                            style={{
                              background: "rgba(255,255,255,0.03)",
                              border: "1px solid rgba(212,175,55,0.15)",
                              fontSize: "0.85rem",
                            }}
                          />
                        </div>
                      ))}
                      <div>
                        <label className="block font-sans-premium text-smoke-2 uppercase tracking-widest mb-2" style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}>
                          Message (Optional)
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your requirement..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-4 py-3 font-sans-premium text-white placeholder-smoke-3 outline-none transition-all duration-300 focus:border-gold resize-none"
                          style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(212,175,55,0.15)",
                            fontSize: "0.85rem",
                          }}
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full font-sans-premium font-600 uppercase tracking-widest py-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                        style={{
                          background: "linear-gradient(135deg, #A8892A, #D4AF37, #F0D060)",
                          color: "#080808",
                          fontSize: "0.72rem",
                          letterSpacing: "0.2em",
                        }}
                      >
                        Submit Application
                      </button>
                      <p className="font-sans-premium text-smoke-3 text-center" style={{ fontSize: "0.7rem" }}>
                        Or call directly: <a href="tel:+918888759696" className="text-gold">+91 8888 759 696</a>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="relative py-16" style={{ background: "#080808", borderTop: "1px solid rgba(212,175,55,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-8">
            <div className="mb-4 flex justify-center"><Badge>FIND US</Badge></div>
            <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)" }}>
              Our <span className="gold-shimmer">Location</span>
            </h2>
          </div>
          <div
            className="relative overflow-hidden flex items-center justify-center"
            style={{
              height: 300,
              background: "rgba(212,175,55,0.03)",
              border: "1px solid rgba(212,175,55,0.12)",
            }}
          >
            <div className="text-center">
              <div className="gold-shimmer font-display text-5xl mb-4">◎</div>
              <p className="font-display font-bold text-white text-xl mb-2">Near Bhosari English School</p>
              <p className="font-sans-premium text-smoke-2" style={{ fontSize: "0.82rem" }}>Bhaghat Wasti, Sr. No. 23, Bhosari, Pune – 411039</p>
              <a
                href="https://maps.google.com/?q=Bhosari+English+School+Pune"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-5 font-sans-premium uppercase tracking-widest px-6 py-2.5 transition-all duration-300"
                style={{ border: "1px solid rgba(212,175,55,0.3)", color: "#D4AF37", fontSize: "0.65rem", letterSpacing: "0.2em" }}
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
