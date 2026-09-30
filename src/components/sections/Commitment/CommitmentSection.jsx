import React from 'react';
import { Plus, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteData } from '../../../data/content';

export default function CommitmentSection({ onGetInvolved }) {
  const { commitment } = siteData;

  const renderIcon = (type) => {
    switch (type) {
      case 'plus':
        return <Plus className="w-5 h-5 text-teal-200 stroke-[2.2]" />;
      case 'users':
        return <Users className="w-5 h-5 text-teal-200 stroke-[1.8]" />;
      case 'shield-check':
        return <ShieldCheck className="w-5 h-5 text-teal-200 stroke-[1.8]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-teal-200 stroke-[1.8]" />;
    }
  };

  return (
    <section className="py-6 sm:py-10 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="bg-[#0b332c] rounded-[2rem] sm:rounded-[2.5rem] p-7 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden">
        {/* Decorative Leaf / Branch Silhouette in background */}
        <div className="absolute right-0 top-0 bottom-0 w-80 opacity-10 pointer-events-none flex items-center justify-end pr-4">
          <svg viewBox="0 0 200 200" fill="currentColor" className="w-72 h-72 text-white">
            <path d="M45,-78.3C58.3,-71.1,69,-59.1,77.3,-45.5C85.7,-31.9,91.7,-16,91.2,-0.3C90.7,15.4,83.7,30.8,74.7,44.1C65.7,57.4,54.7,68.6,41.4,75.4C28.1,82.2,14.1,84.7,-0.7,85.9C-15.5,87.1,-31.1,87,-44.6,80.3C-58.1,73.6,-69.5,60.3,-77.8,45.4C-86.1,30.5,-91.3,14,-90.6,-2.1C-89.9,-18.2,-83.3,-33.9,-73.4,-46.6C-63.5,-59.3,-50.3,-69.1,-36.4,-76C-22.5,-82.9,-8,-87,4,-93.2C16,-99.4,31.7,-85.5,45,-78.3Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">

          {/* Left Column: Heading, subtitle, and CTA */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-teal-200 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#f28e63]" />
              <span>{commitment.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white tracking-tight leading-snug">
              <span>{commitment.titleStart}</span>
              <span className="text-[#f28e63]">{commitment.titleHighlight}</span>
            </h3>

            <p className="text-xs sm:text-sm text-teal-100/75 leading-relaxed max-w-sm">
              {commitment.subtitle}
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onGetInvolved}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f28e63] hover:bg-[#ea7849] text-white font-semibold text-xs shadow-button hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>{commitment.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 3 Pillars (Faith-Driven, Community-Focused, Transparent) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4 text-center">
            {commitment.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="flex flex-col items-center justify-start p-4 sm:p-5 rounded-2xl bg-teal-800/25 border border-teal-700/30 hover:bg-teal-800/40 hover:border-teal-600/50 transition-all duration-300 group"
              >
                {/* Outlined circular icon */}
                <div className="w-10 h-10 rounded-full border border-teal-600/60 bg-teal-900/40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {renderIcon(pillar.icon)}
                </div>

                {/* Pillar Label */}
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight mb-1.5">
                  {pillar.title}
                </h4>

                {/* Pillar Description */}
                <p className="text-[11px] text-teal-200/70 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
