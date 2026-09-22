import React, { useState } from 'react';
import { ChevronDown, Menu, X, HeartHandshake } from 'lucide-react';
import { siteData } from '../../data/content';

export default function Navbar({ onDonateClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  return (
    <header className="relative z-30 pt-6 px-4 sm:px-8 max-w-7xl mx-auto">
      <nav className="flex items-center justify-between text-white">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-teal-800/80 border border-teal-600/50 flex items-center justify-center text-peach-400 group-hover:scale-105 transition-transform duration-200">
            <HeartHandshake className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-peach-200 transition-colors">
              {siteData.brand.name}
            </span>
            <span className="text-[10px] tracking-wider uppercase text-teal-300/80 font-medium -mt-1">
              {siteData.brand.subtitle}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-teal-100/90">
          {siteData.navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div key={link.name} className="relative">
                  <button
                    onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                    onMouseEnter={() => setPagesDropdownOpen(true)}
                    className="flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none py-1"
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${pagesDropdownOpen ? 'rotate-180 text-peach-400' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {pagesDropdownOpen && (
                    <div 
                      onMouseLeave={() => setPagesDropdownOpen(false)}
                      className="absolute top-full left-0 mt-2 w-48 bg-teal-900/95 border border-teal-700/60 rounded-xl shadow-xl backdrop-blur-md py-2 z-50 text-xs"
                    >
                      <a href="#about" className="block px-4 py-2 hover:bg-teal-800 text-teal-100 hover:text-white transition-colors">About Our Work</a>
                      <a href="#causes" className="block px-4 py-2 hover:bg-teal-800 text-teal-100 hover:text-white transition-colors">Our Causes</a>
                      <a href="#events" className="block px-4 py-2 hover:bg-teal-800 text-teal-100 hover:text-white transition-colors">Events & Campaigns</a>
                      <a href="#volunteer" className="block px-4 py-2 hover:bg-teal-800 text-teal-100 hover:text-white transition-colors">Join as Volunteer</a>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-peach-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            type="button" 
            className="text-xs font-semibold px-4 py-2 text-teal-100 hover:text-white rounded-full border border-teal-700/60 hover:border-teal-500 hover:bg-teal-800/40 transition-all duration-200"
          >
            Log In
          </button>
          <button
            type="button"
            onClick={onDonateClick}
            className="text-xs font-semibold px-5 py-2.5 rounded-full bg-peach-500 hover:bg-peach-600 text-white shadow-button hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Donate Now
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={onDonateClick}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-peach-500 text-white shadow-button"
          >
            Donate
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-teal-800/60 border border-teal-700/50 text-white hover:bg-teal-700/60 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 p-5 bg-teal-950/95 border border-teal-800 rounded-2xl backdrop-blur-lg shadow-2xl flex flex-col gap-4">
          {siteData.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-teal-100 hover:text-peach-300 py-1 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <hr className="border-teal-800/60" />
          <div className="flex items-center justify-between pt-1">
            <button className="text-xs font-medium px-4 py-2 text-teal-200 border border-teal-700 rounded-full">
              Log In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onDonateClick) onDonateClick();
              }}
              className="text-xs font-semibold px-6 py-2 rounded-full bg-peach-500 text-white shadow-button"
            >
              Donate Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
