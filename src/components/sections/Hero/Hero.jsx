import React from 'react';
import SectionBadge from '../../common/SectionBadge';
import { siteData } from '../../../data/content';

export default function Hero({ onExploreCauses }) {
  return (
    <section className="relative bg-teal-900 text-white pt-10 pb-28 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="max-w-xl space-y-6">
          <SectionBadge variant="hero">
            {siteData.hero.badge}
          </SectionBadge>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
            {siteData.hero.title[0]} <br />
            {siteData.hero.title[1]} <br />
            {siteData.hero.title[2]}
          </h1>
          <p className="text-sm sm:text-base text-teal-100/80 max-w-sm leading-relaxed font-normal">
            {siteData.hero.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button type="button" className="px-6 py-3 rounded-full bg-peach-500 hover:bg-peach-600 text-white font-semibold text-xs sm:text-sm shadow-button">
              {siteData.hero.primaryCta}
            </button>
            <a href="#causes" onClick={onExploreCauses} className="px-6 py-3 rounded-full border border-teal-600/70 hover:border-teal-400 bg-teal-800/20 text-white font-medium text-xs sm:text-sm">
              {siteData.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
