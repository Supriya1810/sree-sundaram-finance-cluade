import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('Home');

  // Smooth scroll and meta-tag update on tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `Sree Sundaram Finance Private Limited — ${activeTab === 'Home' ? 'Trusted Gold Credit Partner' : activeTab === 'About' ? 'About Us' : activeTab === 'Products' ? 'Products & Calculator' : 'Secure Contact Desk'}`;
  }, [activeTab]);

  const renderActivePage = () => {
    switch (activeTab) {
      case 'Home':
        return <Home setActiveTab={setActiveTab} />;
      case 'About':
        return <About />;
      case 'Products':
        return <Products />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="bg-lux-bg-primary min-h-screen text-lux-text-main flex flex-col font-sans selection:bg-lux-gold-primary/35 selection:text-[#FFFFFF] antialiased">
      {/* Floating Cinematic Glass Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Layout Area */}
      <main id="primary-web-content" className="flex-grow">
        <div className="transition-opacity duration-500 ease-in-out">
          {renderActivePage()}
        </div>
      </main>

      {/* Corporate Luxury Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

