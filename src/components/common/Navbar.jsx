import React, { useState } from 'react';
import { ChevronDown, HeartHandshake } from 'lucide-react';
import { siteData } from '../../data/content';

export default function Navbar({ onDonateClick }) {
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  return (
    <header className="relative z-30 pt-6 px-4 sm:px-8 max-w-7xl mx-auto">
      <nav className="flex items-center justify-between text-white">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-teal-800/80 border border-teal-600/50 flex items-center justify-center text-peach-400">
            <HeartHandshake className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white">
              {siteData.brand.name}
            </span>
            <span className="text-[10px] tracking-wider uppercase text-teal-300/80 font-medium -mt-1">
              {siteData.brand.subtitle}
            </span>
          </div>
        </a>

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
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  {pagesDropdownOpen && (
                    <div 
                      onMouseLeave={() => setPagesDropdownOpen(false)}
                      className="absolute top-full left-0 mt-2 w-48 bg-teal-900/95 border border-teal-700/60 rounded-xl shadow-xl backdrop-blur-md py-2 z-50 text-xs"
                    >
                      <a href="#about" className="block px-4 py-2 hover:bg-teal-800 text-teal-100 hover:text-white">About Our Work</a>
                      <a href="#causes" className="block px-4 py-2 hover:bg-teal-800 text-teal-100 hover:text-white">Our Causes</a>
                      <a href="#events" className="block px-4 py-2 hover:bg-teal-800 text-teal-100 hover:text-white">Events & Campaigns</a>
                      <a href="#volunteer" className="block px-4 py-2 hover:bg-teal-800 text-teal-100 hover:text-white">Join as Volunteer</a>
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

        <div className="hidden md:flex items-center gap-4">
          <button type="button" className="text-xs font-semibold px-4 py-2 text-teal-100 hover:text-white rounded-full border border-teal-700/60 hover:border-teal-500 hover:bg-teal-800/40 transition-all duration-200">
            Log In
          </button>
          <button type="button" onClick={onDonateClick} className="text-xs font-semibold px-5 py-2.5 rounded-full bg-peach-500 hover:bg-peach-600 text-white shadow-button hover:shadow-lg transition-all duration-200">
            Donate Now
          </button>
        </div>
      </nav>
    </header>
  );
}
