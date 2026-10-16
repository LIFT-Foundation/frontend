import React from 'react';
import { Heart, BookOpen, Utensils, Building, Gift, ArrowRight } from 'lucide-react';
import { siteData } from '../../../data/content';
import ScrollReveal from '../../effects/ScrollReveal';
import TiltCard from '../../effects/TiltCard';
import RippleButton from '../../effects/RippleButton';

export default function HowToHelpSection({ onDonateClick }) {
  const { howToHelp } = siteData;

  const renderIcon = (id) => {
    const props = { className: "w-6 h-6 text-white stroke-[2.2]" };
    switch (id) {
      case 'sponsor-child':
        return <Heart {...props} />;
      case 'support-edu':
        return <BookOpen {...props} />;
      case 'provide-meal':
        return <Utensils {...props} />;
      case 'support-centre':
        return <Building {...props} />;
      case 'support-campaign':
        return <Gift {...props} />;
      default:
        return <Heart {...props} />;
    }
  };

  const getIconColor = (id, idx) => {
    switch (id) {
      case 'sponsor-child':
        return 'bg-[#ea580c]';
      case 'support-edu':
        return 'bg-[#0d7a64]';
      case 'provide-meal':
        return 'bg-[#b81d68]';
      case 'support-centre':
        return 'bg-[#6d44b8]';
      case 'support-campaign':
        return 'bg-[#c2410c]';
      default:
        return idx === 0
          ? 'bg-[#ea580c]'
          : idx === 1
          ? 'bg-[#0d7a64]'
          : idx === 2
          ? 'bg-[#b81d68]'
          : idx === 3
          ? 'bg-[#6d44b8]'
          : 'bg-[#c2410c]';
    }
  };

  return (
    <section id="get-involved" className="py-16 sm:py-24 bg-[#faf9f6] relative overflow-hidden scroll-mt-20">
      <div id="how-to-help" className="relative -top-24 invisible" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-peach-100 text-[11px] font-semibold text-[#ea580c] mb-3">
              <Heart className="w-3.5 h-3.5 fill-[#ea580c] animate-heartbeat" />
              <span>{howToHelp.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              {howToHelp.title}
            </h2>

            <p className="text-xs sm:text-sm text-gray-500 mt-2.5 leading-relaxed">
              {howToHelp.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* 5 Cards in a Single Horizontal Row on Desktop, Smooth Horizontal Scroll on Mobile/Tablet */}
        <div className="flex lg:grid lg:grid-cols-5 gap-4 lg:gap-3.5 xl:gap-5 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 pt-2 px-1 snap-x snap-mandatory no-scrollbar">
          {howToHelp.ways.map((way, idx) => (
            <div
              key={way.id}
              className="w-[280px] sm:w-[320px] lg:w-auto shrink-0 lg:shrink snap-start h-full flex flex-col"
            >
              <ScrollReveal direction="up" delay={150 + idx * 80} className="h-full flex flex-col">
                <TiltCard maxTilt={5} scale={1.02} className="h-full flex flex-col">
                  <div className="bg-white rounded-3xl p-5 sm:p-6 border border-gray-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:border-gray-200 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-115 group-hover:rotate-6 transition-all duration-300 ${getIconColor(way.id, idx)}`}>
                        {renderIcon(way.id)}
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-teal-900 transition-colors mb-2 leading-snug">
                        {way.title}
                      </h3>

                      <p className="text-xs text-gray-500 leading-relaxed mb-6">
                        {way.description}
                      </p>
                    </div>

                    <div>
                      <RippleButton
                        onClick={onDonateClick}
                        className="w-full py-2.5 px-3 rounded-xl bg-gray-900 hover:bg-[#0c3930] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm hover:shadow group/btn cursor-pointer"
                      >
                        <span className="truncate">{way.cta}</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </RippleButton>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Horizontal Scroll Hint */}
        <div className="lg:hidden flex items-center justify-center gap-1.5 text-[11px] font-medium text-gray-400 mt-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] animate-pulse"></span>
          <span>Swipe horizontally to view all {howToHelp.ways.length} ways to help</span>
        </div>

      </div>
    </section>
  );
}
