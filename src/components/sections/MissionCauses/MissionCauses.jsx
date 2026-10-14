import React from 'react';
import { Heart } from 'lucide-react';
import CauseCard from './CauseCard';
import { siteData } from '../../../data/content';
import ScrollReveal from '../../effects/ScrollReveal';

export default function MissionCauses({
  onLearnMoreEducation,
  onLearnMoreYouth,
  onLearnMoreNourish,
  onLearnMoreMontessori,
  onLearnMoreCause
}) {
  const { areasOfImpact } = siteData;

  const handleLearnMore = (cause) => {
    if (cause.id === 'education' && onLearnMoreEducation) {
      onLearnMoreEducation();
    } else if (cause.id === 'children-youth' && onLearnMoreYouth) {
      onLearnMoreYouth();
    } else if (cause.id === 'nourish' && onLearnMoreNourish) {
      onLearnMoreNourish();
    } else if (cause.id === 'montessori' && onLearnMoreMontessori) {
      onLearnMoreMontessori();
    } else if (onLearnMoreCause) {
      onLearnMoreCause(cause);
    } else {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="programs" className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-16">
      {/* Section Header */}
      <ScrollReveal direction="up" delay={100}>
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#fdf2ec] text-[11px] font-semibold text-[#ea713f] mb-2.5">
            <Heart className="w-3 h-3 text-[#ea713f] stroke-[2] animate-heartbeat" />
            <span>{areasOfImpact.badge}</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-gray-900 tracking-tight">
            <span>{areasOfImpact.titleStart}</span>{' '}
            <span className="text-[#f28e63]">{areasOfImpact.titleHighlight}</span>
          </h2>
          
          <p className="text-xs sm:text-[13px] text-gray-500 mt-2 leading-relaxed max-w-xl mx-auto">
            {areasOfImpact.subtitle}
          </p>
        </div>
      </ScrollReveal>

      {/* 4 Core Programs Grid with Staggered ScrollReveal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
        {areasOfImpact.items.map((cause, idx) => (
          <ScrollReveal key={cause.id} direction="up" delay={150 + idx * 120}>
            <CauseCard cause={cause} onLearnMore={handleLearnMore} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
