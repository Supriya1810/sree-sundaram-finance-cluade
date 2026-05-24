import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(212,175,55,0.12)",
      }}
    >
      {/* Gold line top */}
      <div className="horizontal-rule" />

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="/logo.png"
                  alt="Sree Sundaram Finance"
                  fill
                  className="object-contain"
                />
              </div>
              {/* <div>
                <div
                  className="font-sans-premium font-bold tracking-widest uppercase text-white"
                  style={{ fontSize: "0.9rem", letterSpacing: "0.12em" }}
                >
                  Sree Sundaram Finance
                </div>
                <div
                  className="font-sans-premium tracking-wider text-smoke-2 uppercase"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.2em" }}
                >
                  Private Limited
                </div>
              </div> */}
            </div>
            <p
              className="font-sans-premium text-smoke-2 leading-relaxed mb-6"
              style={{ fontSize: "0.8rem", lineHeight: "1.8" }}
            >
              Finance Advisor &amp; All Types of Loans Available. Serving the
              Bhosari community with transparent, ethical financial solutions
              since our founding.
            </p>
            <div
              className="inline-block font-sans-premium text-xs tracking-widest uppercase px-4 py-2"
              style={{
                border: "1px solid rgba(212,175,55,0.25)",
                color: "#D4AF37",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
              }}
            >
              GSTIN: 27ABTCS3490FIZT
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4
              className="font-sans-premium font-600 tracking-widest uppercase mb-6 text-white"
              style={{ fontSize: "0.7rem", letterSpacing: "0.25em" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products & Loans", href: "/products" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "CSR Policy", href: "#" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-sans-premium text-smoke-2 hover:text-gold transition-colors duration-300"
                    style={{ fontSize: "0.78rem" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4
              className="font-sans-premium font-600 tracking-widest uppercase mb-6 text-white"
              style={{ fontSize: "0.7rem", letterSpacing: "0.25em" }}
            >
              Registered Office
            </h4>
            <address className="not-italic space-y-3">
              <p
                className="font-sans-premium text-smoke-2 leading-relaxed"
                style={{ fontSize: "0.8rem", lineHeight: "1.8" }}
              >
                Near Bhosari English School,
                <br />
                Bhaghat Wasti, Sr. No. 23,
                <br />
                Bhosari, Pune – 411039
                <br />
                Maharashtra, India
              </p>
              <div className="pt-3 space-y-2">
                <a
                  href="tel:+918888759696"
                  className="flex items-center gap-3 font-sans-premium text-smoke hover:text-gold transition-colors duration-300"
                  style={{ fontSize: "0.82rem" }}
                >
                  <span className="text-gold" style={{ fontSize: "0.7rem" }}>
                    CALL
                  </span>
                  +91 8888 759 696
                </a>
                <a
                  href="mailto:hello@dhanprernagoldloan.com"
                  className="flex items-center gap-3 font-sans-premium text-smoke-2 hover:text-gold transition-colors duration-300"
                  style={{ fontSize: "0.8rem" }}
                >
                  <span className="text-gold" style={{ fontSize: "0.7rem" }}>
                    EMAIL
                  </span>
                  hello@dhanprernagoldloan.com
                </a>
              </div>
              <div className="pt-2">
                <p
                  className="font-sans-premium text-smoke-2"
                  style={{ fontSize: "0.75rem" }}
                >
                  <span className="text-gold font-600">Contact Person:</span>{" "}
                  Shailesh Thakur
                </p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="horizontal-rule mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="font-sans-premium text-smoke-3 text-center sm:text-left"
            style={{ fontSize: "0.72rem", letterSpacing: "0.08em" }}
          >
            © 2025 Sree Sundaram Finance Private Limited. All rights reserved.
          </p>
          <p
            className="font-sans-premium text-smoke-3"
            style={{ fontSize: "0.68rem", letterSpacing: "0.1em" }}
          >
            TRUSTED FINANCIAL PARTNER · PUNE
          </p>
        </div>
      </div>
    </footer>
  );
}
