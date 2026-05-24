import React from 'react';
import { Phone, Mail, MapPin, Shield, FileText, ChevronRight } from 'lucide-react';
import SreeSundaramLogo from './SreeSundaramLogo';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleNavClick = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="master-footer" className="relative border-t border-neutral-800 bg-[#07080a] pt-20 pb-10 overflow-hidden">
      {/* Background radial atmospheric layout */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-[#F39200]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">
          
          {/* Brand Presentation Panel */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <SreeSundaramLogo size="md" />
            </div>
            
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Sree Sundaram Finance Private Limited is a premier financial advisor specializing in all types of loans. We empower individuals, small business owners, entrepreneurs, farmers, and retailers with quick, safe, and transparent gold credit terms. Secure your capital and elevate your business with Pune's trusted financial partner.
            </p>

            <div className="flex flex-col gap-1.5 text-[10px] text-neutral-500 font-mono">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#F39200]" /> Certifications: ISO 9001:2015 Approved Group
              </div>
              <div className="text-[10px] text-neutral-400">
                GSTIN: <span className="text-[#F39200] font-semibold">27ABTCS3490FIZT</span>
              </div>
            </div>
          </div>

          {/* Quick Page Navigations */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-extrabold text-[#F39200] uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {['Home', 'About', 'Products', 'Contact'].map((id) => (
                <li key={id}>
                  <button
                    id={`footer-nav-${id.toLowerCase()}`}
                    onClick={() => handleNavClick(id)}
                    className="hover:text-white flex items-center gap-1 group transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-[#F39200]/60 group-hover:translate-x-0.5 transition-transform" />
                    {id === 'About' ? 'About Us' : id === 'Products' ? 'Loan Products' : id === 'Contact' ? 'Contact Office' : id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Documents / Corporate Links from Documents */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-extrabold text-[#F39200] uppercase tracking-widest">Corporate Registry</h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {[
                'Know Us Better',
                'Investor Relations',
                'Partners Group',
                'CSR Regulations',
                'Corporate Privacy Policy'
              ].map((link) => (
                <li key={link} className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer animate-none">
                  <FileText className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
                  <span>{link}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Directory */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-extrabold text-[#F39200] uppercase tracking-widest font-semibold text-neutral-200">Contact Support</h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F39200] shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+918888759696" className="hover:text-white font-mono block font-semibold">+91-8888759696</a>
                  <span className="block text-[11px] text-neutral-400 font-semibold">Shailesh Thakur</span>
                  <span className="block text-[10px] text-neutral-500">Finance Advisor</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#F39200] shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@sreesundaramfinance.com" className="hover:text-white font-mono block">info@sreesundaramfinance.com</a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F39200] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-[11px] text-neutral-300 font-bold block">Registered Corporate Office:</span>
                  <span className="leading-relaxed text-[10.5px]">
                    Near Bhosari English School, Bhaghat Wasti, Sr. No. 23, Bhosari, Pune – 411039.
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Division Map Location Details & Copyright */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div className="text-center md:text-left space-y-1">
            <p className="font-mono">Registered Office: Near Bhosari English School, Bhaghat Wasti, Sr. No. 23, Bhosari, Pune – 411039.</p>
            <p>SREE SUNDARAM FINANCE PRIVATE LIMITED (GSTIN: 27ABTCS3490FIZT) is governed under Indian corporate regulatory guidelines.</p>
          </div>
          <div className="text-center md:text-right font-mono text-[10px] uppercase tracking-wider text-neutral-600">
            <span>© 2026 Sree Sundaram Finance Private Limited. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
