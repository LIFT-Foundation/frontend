import React from 'react';
import { HeartHandshake } from 'lucide-react';
import { siteData } from '../../data/content';

export default function Navbar({ onDonateClick }) {
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
      </nav>
    </header>
  );
}
