import React from 'react';
import { Cross, Users, ShieldCheck } from 'lucide-react';
import SectionBadge from '../../common/SectionBadge';
import { siteData } from '../../../data/content';

export default function ImpactStats({ onGetInvolved }) {
  const { impactStats } = siteData;

  const renderIcon = (type) => {
    switch (type) {
      case 'cross':
        return <Cross className="w-5 h-5 text-teal-200 stroke-[1.8]" />;
      case 'users':
        return <Users className="w-5 h-5 text-teal-200 stroke-[1.8]" />;
      case 'shield-check':
        return <ShieldCheck className="w-5 h-5 text-teal-200 stroke-[1.8]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-teal-200 stroke-[1.8]" />;
    }
  };

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="bg-teal-900 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-teal-800/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-peach-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">

          {/* Left Column: Heading, text, and button */}
          <div className="lg:col-span-5 space-y-4">
            <SectionBadge variant="impact">
              {impactStats.badge}
            </SectionBadge>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {impactStats.title}
            </h3>

            <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed max-w-md">
              {impactStats.subtitle}
            </p>

            <div className="pt-2">
              <a
                href="#volunteer"
                onClick={onGetInvolved}
                className="inline-block px-6 py-2.5 rounded-full bg-peach-500 hover:bg-peach-600 text-white font-semibold text-xs sm:text-sm shadow-button hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                {impactStats.cta}
              </a>
            </div>
          </div>

          {/* Right Column: 3 Qualitative Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-center">
            {impactStats.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="flex flex-col items-center justify-start p-5 rounded-2xl bg-teal-800/30 border border-teal-700/40 hover:bg-teal-800/50 hover:border-teal-600/60 transition-all duration-300 group"
              >
                {/* Outlined circular icon */}
                <div className="w-12 h-12 rounded-full border border-teal-600/70 bg-teal-800/30 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-peach-400/80 transition-all duration-300">
                  {renderIcon(pillar.icon)}
                </div>

                {/* Pillar Label */}
                <div className="text-sm font-bold text-white tracking-tight mb-2">
                  {pillar.label}
                </div>

                {/* Pillar Description */}
                <div className="text-xs text-teal-200/70 leading-relaxed font-normal">
                  {pillar.description}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
