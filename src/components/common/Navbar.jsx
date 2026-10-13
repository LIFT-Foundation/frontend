import React, { useState, useEffect } from 'react';
import { Search, Heart, Menu, X, HeartHandshake } from 'lucide-react';
import { siteData } from '../../data/content';
import RippleButton from '../effects/RippleButton';

export default function Navbar({ onDonateClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`transition-all duration-300 px-4 sm:px-8 ${
        isScrolled
          ? 'sticky top-0 z-50 bg-[#0c3930]/85 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-b border-white/10 py-3'
          : 'relative z-30 bg-[#0c3930] pt-4 pb-4 border-b border-white/5'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full border border-teal-500/40 bg-teal-800/40 flex items-center justify-center text-teal-200 group-hover:scale-110 group-hover:bg-teal-700/60 transition-all duration-300">
            <HeartHandshake className="w-5 h-5 text-[#f28e63] stroke-[2.2] group-hover:rotate-6 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-peach-200 transition-colors leading-tight font-sans">
              {siteData.brand.name}
            </span>
            <span className="text-[8px] tracking-[0.16em] uppercase text-teal-200/90 font-medium">
              {siteData.brand.subtitle}
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-teal-100/90">
          {siteData.navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-all duration-200 py-1 hover-underline-expand ${
                idx === 0
                  ? 'text-white font-bold'
                  : 'hover:text-white text-teal-100/80 font-medium'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions: Search Icon + Dark Green Donate Button */}
        <div className="hidden sm:flex items-center gap-5">
          <button
            type="button"
            aria-label="Search"
            className="text-teal-200 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200"
          >
            <Search className="w-4 h-4 stroke-[2]" />
          </button>

          <RippleButton
            onClick={onDonateClick}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#07241e] hover:bg-[#041713] text-white text-xs font-semibold shadow-sm border border-teal-800 hover:border-teal-700 transition-all duration-200 hover:shadow-lg"
          >
            <Heart className="w-3.5 h-3.5 fill-[#f28e63] text-[#f28e63] animate-heartbeat" />
            <span>Donate Now</span>
          </RippleButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <RippleButton
            onClick={onDonateClick}
            className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-950 text-white text-[11px] font-semibold border border-teal-800"
          >
            <Heart className="w-3 h-3 fill-peach-400 text-peach-400 animate-heartbeat" />
            <span>Donate</span>
          </RippleButton>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-teal-800/40 border border-teal-700/50 text-white hover:bg-teal-700/50 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-4 bg-teal-950/95 backdrop-blur-xl border border-teal-800/80 rounded-2xl shadow-2xl flex flex-col gap-3 animate-fadeIn">
          {siteData.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-medium text-teal-100 hover:text-peach-300 py-1.5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <hr className="border-teal-800/70" />
          <RippleButton
            onClick={() => {
              setMobileMenuOpen(false);
              if (onDonateClick) onDonateClick();
            }}
            className="w-full py-2.5 rounded-full bg-peach-500 hover:bg-peach-600 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-button"
          >
            <Heart className="w-3.5 h-3.5 fill-white text-white animate-heartbeat" />
            <span>Donate Now</span>
          </RippleButton>
        </div>
      )}
    </header>
  );
}
