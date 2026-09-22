import React from 'react';
import SectionBadge from '../../common/SectionBadge';
import CauseCard from './CauseCard';
import { siteData } from '../../../data/content';

export default function MissionCauses() {
  const { missionCauses } = siteData;

  return (
    <section id="causes" className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <SectionBadge variant="peach">
          {missionCauses.badge}
        </SectionBadge>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-2">
          {missionCauses.title}
        </h2>
        
        <p className="text-xs sm:text-sm text-gray-500 mt-3 leading-relaxed">
          {missionCauses.subtitle}
        </p>
      </div>

      {/* 4 Causes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {missionCauses.items.map((cause) => (
          <CauseCard key={cause.id} cause={cause} />
        ))}
      </div>
    </section>
  );
}
