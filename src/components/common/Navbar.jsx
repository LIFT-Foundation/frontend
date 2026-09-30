import React, { useState } from 'react';
import { Search, Heart, Menu, X, HeartHandshake } from 'lucide-react';
import { siteData } from '../../data/content';

export default function Navbar({ onDonateClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-30 bg-[#0c3930] pt-4 pb-4 px-4 sm:px-8 border-b border-white/5">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full border border-teal-500/40 bg-teal-800/40 flex items-center justify-center text-teal-200 group-hover:scale-105 transition-transform duration-200">
            <HeartHandshake className="w-5 h-5 text-[#f28e63] stroke-[2.2]" />
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
              className={`transition-colors py-1 ${
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
            className="text-teal-200 hover:text-white transition-colors"
          >
            <Search className="w-4 h-4 stroke-[2]" />
          </button>

          <button
            type="button"
            onClick={onDonateClick}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#07241e] hover:bg-[#041713] text-white text-xs font-semibold shadow-sm border border-teal-800 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Heart className="w-3.5 h-3.5 fill-[#f28e63] text-[#f28e63]" />
            <span>Donate Now</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={onDonateClick}
            className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-950 text-white text-[11px] font-semibold border border-teal-800"
          >
            <Heart className="w-3 h-3 fill-peach-400 text-peach-400" />
            <span>Donate</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-teal-800/40 border border-teal-700/50 text-white hover:bg-teal-700/50"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-4 bg-teal-950 border border-teal-800/80 rounded-2xl shadow-xl flex flex-col gap-3">
          {siteData.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-medium text-teal-100 hover:text-peach-300 py-1 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <hr className="border-teal-800" />
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onDonateClick) onDonateClick();
            }}
            className="w-full py-2.5 rounded-full bg-peach-500 text-white font-semibold text-xs flex items-center justify-center gap-2"
          >
            <Heart className="w-3.5 h-3.5 fill-white text-white" />
            <span>Donate Now</span>
          </button>
        </div>
      )}
    </header>
  );
}
