import React from 'react';
import SectionBadge from '../../common/SectionBadge';
import { siteData } from '../../../data/content';

export default function Hero({ onExploreCauses }) {
  return (
    <section className="relative bg-teal-900 text-white pt-10 pb-24 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-peach-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <SectionBadge variant="hero">
          {siteData.hero.badge}
        </SectionBadge>
      </div>
    </section>
  );
}
