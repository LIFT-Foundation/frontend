import React from 'react';
import { Heart } from 'lucide-react';
import CauseCard from './CauseCard';
import { siteData } from '../../../data/content';

export default function MissionCauses() {
  const { areasOfImpact } = siteData;

  return (
    <section id="programs" className="py-14 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fdf2ec] text-[11px] font-semibold text-[#ea713f] mb-2.5">
          <Heart className="w-3 h-3 text-[#ea713f] stroke-[2]" />
          <span>{areasOfImpact.badge}</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-gray-900 tracking-tight">
          <span>{areasOfImpact.titleStart}</span>
          <span className="text-[#f28e63]">{areasOfImpact.titleHighlight}</span>
        </h2>
        
        <p className="text-xs sm:text-[13px] text-gray-500 mt-2 leading-relaxed max-w-xl mx-auto">
          {areasOfImpact.subtitle}
        </p>
      </div>

      {/* 3 Core Programs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
        {areasOfImpact.items.map((cause) => (
          <CauseCard key={cause.id} cause={cause} />
        ))}
      </div>
    </section>
  );
}
